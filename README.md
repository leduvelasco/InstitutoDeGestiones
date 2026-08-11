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
│   ├── site.ts          # Config global, países, servicios
│   └── landings.ts      # Datos de landings de campañas
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
- **`LeadForm`** — Formulario de captura con validación, UTM, fallback WhatsApp
- **`Icon`** — ~20 iconos inline SVG (estilo Lucide)
- **`Button`** — Variantes `primary` / `secondary` / `whatsapp`, 3 tamaños
- **`FAQItem`** — Acordeón con animación CSS `grid-template-rows`
- **`TestimonialCard`** — Tarjeta de testimonio con ID de expediente

---

## Datos Centralizados

### `src/data/site.ts`
- **SITE** — Config global: nombre, URL, teléfono, WhatsApp, email, dirección
- **WHATSAPP_URL** — Enlace prefabricado `wa.me` con mensaje por defecto
- **COUNTRIES** — 19 países latinoamericanos + "Otro" (formulario)
- **FORM_SERVICES** — 7 opciones de trámite (formulario)

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
El formulario envía a `/api/lead` (POST, JSON). El proyecto actualmente es **100% estático**; este endpoint **no existe** en el build. Antes de lanzar campañas se debe:
- Crear un endpoint serverless (Astro SSR, Vercel/Netlify Function, etc.), o
- Usar un servicio externo (Formspree, Webhook, etc.)

### GTM / Google Ads
Los snippets de GTM están comentados en `BaseLayout.astro`. Para activar:
1. Reemplazar `GTM-XXXXXXX` por el ID real
2. Descomentar las líneas de `<script>` y `<noscript>`
3. Configurar la conversión `generate_lead` en Google Ads

---

## Archivos Modificados Recientemente

| Archivo | Cambio |
|---------|--------|
| `src/layouts/BaseLayout.astro` | Prop `noindex` + placeholder GTM |
| `src/components/layout/LandingLayout.astro` | Nuevo layout sin navegación |
| `astro.config.mjs` | Filtro sitemap excluye `/lp/` |
| `src/data/landings.ts` | Datos de 7 landings de campaña |
| `src/pages/lp/[slug].astro` | Ruta dinámica para landings |
| `src/components/ui/LeadForm.astro` | Prop `service`, UTM, `target="_blank"`, dataLayer |

---

## Licencia

Propiedad de Instituto de Gestiones. Todos los derechos reservados.
