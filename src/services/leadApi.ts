import { LEAD_API_BASE } from '../data/site';

export const LEAD_ENDPOINT = `${LEAD_API_BASE}/api/lead`;

export const TRACKING_KEYS = [
  'gclid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const;

export type TrackingKey = (typeof TRACKING_KEYS)[number];
export type TrackingParams = Partial<Record<TrackingKey, string>>;

const STORAGE_KEY = 'idg:lead-tracking';
const DEFAULT_TIMEOUT_MS = 10_000;

export interface LeadPayload {
  name: string;
  whatsapp: string;
  country: string;
  service: string;
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  page_url?: string;
  website?: string;
}

export interface LeadSuccess {
  ok: true;
  id: string;
}

export type LeadErrorCode =
  | 'VALIDATION_ERROR'
  | 'RATE_LIMITED'
  | 'CRM_ERROR'
  | 'INTERNAL_ERROR'
  | 'NETWORK'
  | 'TIMEOUT';

export class LeadApiError extends Error {
  readonly code: LeadErrorCode;
  readonly fields?: Record<string, string>;
  readonly status?: number;

  constructor(code: LeadErrorCode, fields?: Record<string, string>, status?: number) {
    super(`Lead API error: ${code}`);
    this.name = 'LeadApiError';
    this.code = code;
    this.fields = fields;
    this.status = status;
  }
}

function readStoredTracking(): TrackingParams {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const result: TrackingParams = {};
    for (const key of TRACKING_KEYS) {
      const value = parsed[key];
      if (typeof value === 'string' && value) result[key] = value;
    }
    return result;
  } catch {
    return {};
  }
}

function writeStoredTracking(params: TrackingParams): void {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch {
    /* almacenamiento no disponible */
  }
}

export function getTrackingParams(): TrackingParams {
  const params = readStoredTracking();
  const url = new URLSearchParams(window.location.search);
  for (const key of TRACKING_KEYS) {
    const value = url.get(key);
    if (value) params[key] = value;
  }
  writeStoredTracking(params);
  return params;
}

async function parseErrorResponse(res: Response): Promise<LeadApiError> {
  let body: { fields?: Record<string, string> } | null = null;
  try {
    body = (await res.json()) as { fields?: Record<string, string> };
  } catch {
    /* respuesta sin cuerpo JSON */
  }
  if (res.status === 400) return new LeadApiError('VALIDATION_ERROR', body?.fields, 400);
  if (res.status === 429) return new LeadApiError('RATE_LIMITED', undefined, 429);
  if (res.status === 502) return new LeadApiError('CRM_ERROR', undefined, 502);
  return new LeadApiError('INTERNAL_ERROR', undefined, res.status);
}

export async function submitLead(
  payload: LeadPayload,
  timeoutMs: number = DEFAULT_TIMEOUT_MS
): Promise<LeadSuccess> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);

  let res: Response;
  try {
    res = await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch {
    throw new LeadApiError(controller.signal.aborted ? 'TIMEOUT' : 'NETWORK');
  } finally {
    window.clearTimeout(timer);
  }

  if (res.ok) {
    let body: LeadSuccess | null = null;
    try {
      body = (await res.json()) as LeadSuccess;
    } catch {
      /* respuesta sin cuerpo JSON */
    }
    return { ok: true, id: body?.id ?? '' };
  }

  throw await parseErrorResponse(res);
}
