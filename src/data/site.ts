export const SITE = {
  name: 'InstitutoDeGestiones',
  url: 'https://institutodegestiones.com',
  phoneDisplay: '+34 600 000 000',
  phoneHref: 'tel:+34600000000',
  whatsappNumber: '34600000000',
  email: 'info@institutodegestiones.com',
  addressBanner: 'Calle Quijano Carlos 1333, Uruguay',
  address: 'Calle Quijano Carlos 1333, Montevideo, Uruguay',
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  'Hola, me interesa una evaluación gratuita para vivir en España'
)}`;

export const LEAD_API_BASE = import.meta.env.DEV
  ? 'http://localhost:3000'
  : 'https://institutodegestionesapi-production.up.railway.app';

export const COUNTRIES = [
  'Colombia',
  'México',
  'Venezuela',
  'Argentina',
  'Perú',
  'Ecuador',
  'Bolivia',
  'Chile',
  'Uruguay',
  'Paraguay',
  'Rep. Dominicana',
  'Cuba',
  'Honduras',
  'Guatemala',
  'El Salvador',
  'Nicaragua',
  'Costa Rica',
  'Panamá',
  'Otro',
];

export const FORM_SERVICES = [
  'Visado de estudios',
  'Residencia legal',
  'Reagrupación familiar',
  'Homologación de títulos',
  'Nacionalidad española',
  'Estudio migratorio',
  'Otro',
];
