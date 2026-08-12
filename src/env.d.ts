/// <reference path="../.astro/types.d.ts" />

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}