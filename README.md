# Instituto de Gestiones — Web Oficial

Sitio web estático de la gestoría especializada en migraciones a España para latinoamericanos. Construido con **Astro** y **Tailwind CSS**, orientado a generación de leads mediante SEO orgánico y campañas de Google Ads.

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Astro | 5.18.2 | Framework estático, routing, SSG |
| Tailwind CSS | 3.4.17 | Estilos utilitarios |
| @astrojs/tailwind | 5.1.4 | Integración Tailwind |
| @astrojs/sitemap | 3.7.3 | Generación automática de sitemap |
| TypeScript | Strict | Tipado completo |

**Fuentes tipográficas** (Google Fonts):
- **Piazzolla** — Títulos y display
- **IBM Plex Sans** — Cuerpo de texto
- **IBM Plex Mono** — Etiquetas, datos, UI

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── layout/          # Estructuras de página
│   │   ├── BaseLayout.astro
│   │   ├── LandingLayout.astro
│   │   ├── SubpageLayout.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── PageHero.astro
│   ├── sections/        # Bloques de contenido reutilizables
│   │   ├── Hero.astro
│   │   ├── SocialProof.astro
│   │   ├── Services.astro
│   │   ├── HowItWorks.astro
│   │   ├── Testimonials.astro
│   │   ├── WhyUs.astro
│   │   ├── SpainServices.astro
│   │   ├── FAQ.astro
│   │   └── FinalCTA.astro
│   └── ui/              # Componentes atómicos
│       ├── LeadForm.astro
│       ├── ServiceCard.astro
│       ├── TestimonialCard.astro
│       ├── FAQItem.astro
│       ├── Button.astro
│       ├── Icon.astro
│       ├── StatCounter.astro
│       ├── WhatsAppFloat.astro
│       └── StickyMobileBar.astro
├── data/
│   ├── site.ts          # Config global, países, servicios (fuente única)
│   └── landings.ts      # Datos de landings de campañas
├── services/
│   └── leadApi.ts       # Cliente HTTP del endpoint /api/lead + tracking UTM
├── layouts/
│   └── BaseLayout.astro # Layout raíz HTML (<head>, schema, animaciones)
├── pages/               # Routing basado en archivos
│   ├── index.astro
│   ├── contacto.astro
│   ├── faq.astro
│   ├── sobre-nosotros.astro
│   ├── gestiones-en-espana.astro
│   ├── aviso-legal.astro
│   ├── condiciones-de-contratacion.astro
│   ├── politica-de-privacidad-policy.astro
│   ├── politica-cookies.astro
│   ├── visado/
│   │   ├── visado-de-estudios.astro
│   │   ├── estudio-migratorio.astro
│   │   └── nacionalidad-espanola.astro
│   ├── residencia/
│   │   ├── residencia-legal.astro
│   │   └── reagrupacion-familiar.astro
│   ├── homologacion/
│   │   ├── homologacion-universidad.astro
│   │   ├── homologacion-tenico.astro
│   │   ├── homologacion-de-titulos-universitarios.astro  # redirect
│   │   └── homologacion-de-titulos-no-universitarios.astro  # redirect
│   └── lp/
│       └── [slug].astro  # 7 landings dinámicas (Google Ads)
├── styles/
│   └── global.css       # Tailwind directives + CSS custom
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Rutas y Páginas

### Páginas principales
| Ruta | Propósito |
|------|-----------|
| `/` | Homepage con funnel completo de conversión |
| `/contacto/` | Página de contacto con formulario |
| `/faq/` | Preguntas frecuentes |
| `/sobre-nosotros/` | Quiénes somos |
| `/gestiones-en-espana/` | Servicios post-llegada (NIE, TIE, empadronamiento) |

### Páginas de servicio (SEO)
| Ruta | Servicio |
|------|----------|
| `/visado/visado-de-estudios/` | Visado de estudios |
| `/visado/estudio-migratorio/` | Estudio migratorio gratuito |
| `/visado/nacionalidad-espanola/` | Nacionalidad española |
| `/residencia/residencia-legal/` | Residencia legal |
| `/residencia/reagrupacion-familiar/` | Reagrupación familiar |
| `/homologacion/homologacion-universidad/` | Homologación universitaria |
| `/homologacion/homologacion-tenico/` | Homologación no universitaria |

### Landings de campaña (Google Ads)
**Sin puntos de fuga**, `noindex`, excluidas del sitemap:
| Ruta | Slug |
|------|------|
| `/lp/estudio-migratorio/` | `estudio-migratorio` |
| `/lp/visado-de-estudios/` | `visado-de-estudios` |
| `/lp/residencia-legal/` | `residencia-legal` |
| `/lp/reagrupacion-familiar/` | `reagrupacion-familiar` |
| `/lp/homologacion-universitaria/` | `homologacion-universitaria` |
| `/lp/homologacion-no-universitaria/` | `homologacion-no-universitaria` |
| `/lp/nacionalidad-espanola/` | `nacionalidad-espanola` |

### Legales
| Ruta | Documento |
|------|-----------|
| `/aviso-legal/` | Aviso legal |
| `/condiciones-de-contratacion/` | Condiciones de contratación |
| `/politica-de-privacidad-policy/` | Política de privacidad |
| `/politica-cookies/` | Política de cookies |

---

## Sistema de Diseño

### Paleta de colores (Tailwind)
| Token | Hex | Uso |
|-------|-----|-----|
| `tinta` | `#14283A` | Fondos oscuros, hero |
| `navy` | `#1E4468` | Encabezados, acentos |
| `blue` | `#1E5A8F` | Iconos, links secundarios |
| `light` | `#F3F5F4` | Fondos alternativos |
| `ink` | `#1A2733` | Texto principal |
| `muted` | `#55636F` | Texto secundario |
| `gold` | `#8A6A28` | Iconos check, acentos premium |
| `sello` | `#A63B32` | CTA primario, errores |
| `navy-dark` | `#0E1D2B` | Header sticky |

### Tokens tipográficos
| Token | Familia | Uso |
|-------|---------|-----|
| `font-display` | Piazzolla | H1, H2, títulos de sección |
| `font-body` | IBM Plex Sans | Cuerpo de texto, botones |
| `font-mono` | IBM Plex Mono | Etiquetas, metadata, UI micro |

### Componentes UI reutilizables
- **`LeadForm`** — Formulario de captura con validación, UTM, fallback WhatsApp, rate-limiting local (60s) y reintento. El campo **nombre se envía en Title Case** (primera letra de cada palabra en mayúscula) antes de construir el payload.
- **`Icon`** — ~20 iconos inline SVG (estilo Lucide)
- **`Button`** — Variantes `primary` / `secondary` / `whatsapp`, 3 tamaños
- **`FAQItem`** — Acordeón con animación CSS `grid-template-rows`
- **`TestimonialCard`** — Tarjeta de testimonio con ID de expediente

---

## Datos Centralizados

### `src/data/site.ts` (fuente única de verdad)
Toda la configuración global del negocio vive aquí. **Antes de tocar un dato de contacto o legal, búscalo primero en este archivo**; no dupliques valores hardcodeados en componentes o páginas.
- **SITE** — Config global: nombre, URL, teléfono, WhatsApp, email, **dirección**
- **WHATSAPP_URL** — Enlace prefabricado `wa.me` con mensaje por defecto
- **COUNTRIES** — 19 países latinoamericanos + "Otro" (formulario)
- **FORM_SERVICES** — 7 opciones de trámite (formulario)

> Regla: la dirección, teléfono, email y nombre del negocio **deben** renderizarse desde `SITE` (p. ej. `SITE.address`). Las páginas legales (`aviso-legal`, `politica-de-privacidad-policy`) y el Header ya consumen `SITE`. No vuelvas a escribir la dirección a mano.

### `src/services/leadApi.ts`
Cliente del backend de leads:
- **`submitLead(payload)`** — POST a `LEAD_ENDPOINT` (`LEAD_API_BASE + /api/lead`). En dev apunta a `http://localhost:3000`; en producción a Railway. Configura esto en `site.ts` (`LEAD_API_BASE`).
- **`getTrackingParams()`** — Lee y persiste en `sessionStorage` las UTMs y `gclid` de la URL.
- **`LeadApiError`** — Errores tipados: `VALIDATION_ERROR`, `RATE_LIMITED`, `CRM_ERROR`, `INTERNAL_ERROR`, `NETWORK`, `TIMEOUT`.
- `LeadPayload` — `name`, `whatsapp`, `country`, `service` + tracking opcional.

### `src/data/landings.ts`
Datos de las 7 landings de campaña. Cada entrada incluye:
- SEO: `title`, `description`, `canonical`
- Contenido: `eyebrow`, `h1`, `subtitle`, `beneficios`, `requisitos`, `faqs`
- Tracking: `service` (preselección del formulario)

---

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build estático
npm run build

# Previsualizar build local
npm run preview
```

---

## Características Clave

### Conversión
- **LeadForm** en hero + CTA final (`#evaluacion`)
- **Preselección de servicio** en landings (menos fricción)
- **WhatsApp** flotante (desktop) + barra sticky (mobile)
- **Sin puntos de fuga** en landings: sin navegación, logo sin link, solo legales en pestaña nueva

### Tracking
- Campos ocultos: `gclid`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
- Script de captura automática desde URL
- Evento `generate_lead` en `dataLayer` al enviar con éxito
- Placeholders GTM listos para insertar ID real

### SEO
- JSON-LD Schema.org (`LegalService` con `AggregateRating` 4.9/312)
- Meta tags, Open Graph, Twitter Cards, canonical
- Sitemap auto-generado (excluye `/lp/*`)
- `noindex` condicional en landings

### Performance
- Output 100% estático (`output: 'static'`)
- CSS bundles por página (`_astro/*.css`)
- IntersectionObserver para lazy animations
- `prefers-reduced-motion` media query

### Accesibilidad
- `focus-visible` con outline personalizado
- ARIA labels en navegación, menú móvil, FAQ
- `aria-expanded` en acordeones
- Scroll-margin para anchors (`[id] { scroll-margin-top: 96px }`)

---

## Notas de Implementación

### Redirecciones
Astro genera automáticamente páginas de redirect para:
- `/homologacion/homologacion-de-titulos-universitarios/` → `/homologacion/homologacion-universidad/`
- `/homologacion/homologacion-de-titulos-no-universitarios/` → `/homologacion/homologacion-tenico/`

### Endpoint `/api/lead`
El formulario envía a `LEAD_ENDPOINT` (POST, JSON) vía `src/services/leadApi.ts`. El proyecto web es **100% estático**; el endpoint **vive en un backend aparte**:
- **Dev**: `LEAD_API_BASE = http://localhost:3000`
- **Prod**: `https://institutodegestionesapi-production.up.railway.app`

El backend debe responder:
- `200` con `{ ok: true, id: string }`
- `400` con `{ fields: Record<string, string> }` (errores de validación por campo)
- `429` (rate limit), `502` (error CRM)

Antes de lanzar campañas verifica que el endpoint de producción responde y que el CORS permite el dominio.

### GTM / Google Ads
Los snippets de GTM están comentados en `BaseLayout.astro`. Para activar:
1. Reemplazar `GTM-XXXXXXX` por el ID real
2. Descomentar las líneas de `<script>` y `<noscript>`
3. Configurar la conversión `generate_lead` en Google Ads

Al enviar un lead con éxito se dispara:
- `window.dataLayer.push({ event: 'generate_lead', service })`
- `window.gtag?.('event', 'generate_lead')`

---

## Guía para Futuros Cambios

Reglas a seguir para mantener la coherencia del proyecto:

1. **Datos centralizados**: cualquier dato de negocio (dirección, teléfono, email, redes, servicios, países) va en `src/data/site.ts`. No hardcodear en componentes ni páginas.
2. **Páginas legales**: `aviso-legal`, `politica-de-privacidad-policy`, `condiciones-de-contratacion` y `politica-cookies` viven en `src/pages/`. Los enlaces a estas páginas usan rutas relativas (`/aviso-legal/`) salvo que necesites absolutas, en cuyo caso usa `SITE.url`.
3. **Landings**: se añaden nuevos servicios en `src/data/landings.ts` (objeto con `slug`, SEO, contenido y `service`). La ruta dinámica `src/pages/lp/[slug].astro` los renderiza automáticamente. Las landings son `noindex` y no pueden enlazar hacia fuera (sin puntos de fuga).
4. **Formulario de leads**: no alteres la validación ni el payload sin probar contra el endpoint real. El nombre siempre se normaliza a Title Case. Los campos ocultos (UTM) y el honeypot `website` no deben eliminarse.
5. **Estilos**: usa únicamente los tokens de `tailwind.config.mjs` y las utilidades definidas en `src/styles/global.css`. No inventes valores de color nuevos.
6. **SEO**: toda página usa `SubpageLayout` o `LandingLayout`, que proveen `<head>`, canonical, OG y JSON-LD. Si añades una página pública, actualiza la tabla de "Rutas y Páginas".
7. **Redirecciones**: para URLs obsoletas crea una página de redirect en `src/pages/` (ver `homologacion-de-titulos-*.astro`).
8. **Tras un cambio relevante**: actualiza esta sección "Archivos Modificados Recientemente" con una fila por archivo.

---

## Archivos Modificados Recientemente

| Archivo | Cambio |
|---------|--------|
| `src/layouts/BaseLayout.astro` | Prop `noindex` + placeholder GTM |
| `src/components/layout/LandingLayout.astro` | Nuevo layout sin navegación |
| `astro.config.mjs` | Filtro sitemap excluye `/lp/` + `allowedHosts` (tunnel dev) |
| `src/data/landings.ts` | Datos de 7 landings de campaña |
| `src/pages/lp/[slug].astro` | Ruta dinámica para landings |
| `src/components/ui/LeadForm.astro` | Prop `service`, UTM, `target="_blank"`, dataLayer, nombre en Title Case |
| `src/services/leadApi.ts` | Cliente HTTP tipado del endpoint `/api/lead` |
| `src/components/layout/Header.astro` | Dirección del negocio desde `SITE.address` |
| `src/pages/aviso-legal.astro`, `src/pages/politica-de-privacidad-policy.astro` | Domicilio desde `SITE.address` |

---

## Licencia

Propiedad de Instituto de Gestiones. Todos los derechos reservados.
