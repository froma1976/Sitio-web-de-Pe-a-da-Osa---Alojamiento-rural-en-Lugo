# Findings & Decisions — Auditoría Penadaosa.com

## Requirements
- Auditoría de rendimiento (Lighthouse scores)
- Auditoría SEO (meta tags, structured data, sitemap)
- Auditoría de accesibilidad (WCAG)
- Auditoría UX móvil (responsive, touch)
- Revisión de código (calidad, limpieza)
- Top 10 problemas priorizados y corregidos
- Todo en local, sin subir a GitHub

## Research Findings

### Estructura del proyecto
- **Framework:** Vite + React + Tailwind CSS
- **i18n:** react-i18next con 2 idiomas (es, en), detección automática de navegador
- **Routing:** react-router-dom v6 con MainLayout wrapper
- **Animaciones:** framer-motion en todas las páginas
- **SEO head management:** react-helmet
- **UI Components:** Radix UI (Dialog, Toast, Alert Dialog)
- **Chatbot:** StayPlanner con webhook n8n
- **Reservas:** iframe Avaibook
- **Tiempo:** WeatherWidget con API open-meteo.com (sin key)
- **No hay .env** — solo VITE_N8N_WEBHOOK_URL se usa en StayPlanner

### Páginas principales
| Ruta | Componente | Helmet | Canonical | OG tags |
|------|-----------|--------|-----------|---------|
| / | HomePage | ✅ | ⚠️ BUG | ✅ |
| /lacasa | LaCasaPage | ✅ | ✅ | ❌ Faltan |
| /entorno | EntornoPage | ✅ | ❌ Falta | ❌ Faltan |
| /galeria | GaleriaPage | ✅ | ✅ | ✅ |
| /contacto | ContactoPage | ✅ | ✅ | ✅ |
| /reservas | ReservasPage | ✅ | ✅ | ✅ parcial |
| /cookies | CookiesPage | ✅ | ✅ | ✅ |
| /about | LaCasaPage (alias) | ✅ | ⚠️ Duplicado sin redirect |
| /* | NotFoundPage | ✅ (noindex) | n/a | n/a |

### Componentes globales en MainLayout
- AmbientBackground (decorativo, fixed, z-index -10)
- SchemaOrg (LodgingBusiness structured data — se carga en TODAS las páginas)
- Header (responsive, toggle idioma, scroll detection)
- Footer (contacto, weather widget, links, VUT-LU-001701)
- Toaster (notifications)
- StayPlanner (chatbot flotante)

## Issues Found

| # | Category | Issue | Severity | File(s) | Details |
|---|----------|-------|----------|---------|---------|
| 1 | SEO/BUG | **Canonical tag usa `content` en vez de `href`** en HomePage | 🔴 CRÍTICO | HomePage.jsx:50 | `<link rel="canonical" content="..." />` debería ser `href="..."`. Google no lo lee correctamente |
| 2 | SEO | **EntornoPage sin canonical ni OG tags** | 🟠 ALTO | EntornoPage.jsx:56-62 | Solo tiene title y description, falta canonical, og:type, og:url, og:title, og:image |
| 3 | SEO | **LaCasaPage sin OG tags** | 🟠 ALTO | LaCasaPage.jsx:75-82 | Tiene canonical correcto pero le faltan todos los OG tags |
| 4 | SEO | **Ruta /about duplica /lacasa sin redirect 301** | 🟡 MEDIO | App.jsx:25 | El mismo componente en dos rutas genera contenido duplicado para Google |
| 5 | Performance | **Imágenes sin width/height explícitos** | 🟠 ALTO | Múltiples | Ninguna `<img>` tiene width/height → causa CLS (Cumulative Layout Shift) |
| 6 | Performance | **Hero image en HomePage no tiene `loading` ni preload** | 🟡 MEDIO | HomePage.jsx:68 | La imagen principal usa `background-image` CSS, no se puede hacer lazy pero debería tener preload en `<head>` |
| 7 | Performance | **Imágenes sin `loading="lazy"` en varias páginas** | 🟡 MEDIO | LaCasaPage, EntornoPage, ContactoPage | Varias `<img>` no tienen lazy loading |
| 8 | SEO | **SchemaOrg duplicado** — se carga en MainLayout Y en HomePage | 🟡 MEDIO | MainLayout.jsx:15, HomePage.jsx:53 | El structured data se inyecta dos veces en la página de inicio |
| 9 | SEO | **`html lang` es estático "es"** pero el sitio es bilingüe | 🟡 MEDIO | index.html:2 | Cuando cambian a inglés, el `<html lang>` sigue siendo "es". Debe ser dinámico |
| 10 | SEO | **`Crawl-delay` en robots.txt** no es estándar para Googlebot | 🟢 BAJO | robots.txt:8 | Solo Yandex y Bing lo respetan. No causa daño pero es innecesario |
| 11 | Accessibility | **PageHero background-image no tiene texto alternativo** | 🟡 MEDIO | PageHero.jsx:28 | Usa `backgroundImage` en div, sin aria-label ni role="img" |
| 12 | Accessibility | **Imágenes alt hardcodeadas en español** (EntornoPage, LaCasaPage) | 🟡 MEDIO | EntornoPage.jsx:74,164; LaCasaPage.jsx:103 | Algunos `alt` están hardcoded en español en vez de usar `t()` |
| 13 | Code Quality | **`process.env.NODE_ENV` en ErrorBoundary** puede no funcionar en Vite | 🟡 MEDIO | ErrorBoundary.jsx:54 | Vite usa `import.meta.env.MODE`, no `process.env.NODE_ENV` |
| 14 | Performance | **ContactoPage usa PNG para mapa** en vez de WebP | 🟢 BAJO | ContactoPage.jsx:170 | `mapa-ubicacion.png` debería ser WebP |
| 15 | Code Quality | **`console.error` residuales** en producción | 🟢 BAJO | WeatherWidget.jsx:23, StayPlanner.jsx:69,140 | Deberían estar en un logger condicional |
| 16 | SEO | **Falta `og:description` en ReservasPage** | 🟢 BAJO | ReservasPage.jsx:14-25 | Tiene og:title y og:image pero no og:description |
| 17 | Performance | **Google Fonts bloqueantes** | 🟡 MEDIO | index.html:10-14 | 3 font families (Manrope, Fraunces) + 2 en CSS (Mrs Saint Delafield, Pinyon Script) = posible bloqueo de render |
| 18 | SEO | **`meta name="keywords"`** en HomePage | 🟢 BAJO | HomePage.jsx:51 | Google ignora keywords meta desde 2009, pero no causa daño |
| 19 | Accessibility | **CookieBanner no trapa foco** | 🟢 BAJO | CookieBanner.jsx | El banner no implementa focus trap, usuarios de teclado pueden navegar detrás |
| 20 | SEO/i18n | **Falta `hreflang` alternativo** para las dos versiones (es/en) | 🟡 MEDIO | Todas las páginas | No hay `<link rel="alternate" hreflang="es">`/`hreflang="en"` |

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| react-helmet en vez de react-helmet-async | react-helmet funcional pero obsoleto; considerar migrar |
| Avaibook iframe para reservas | Funcional pero bloquea SEO del contenido de reservas |
| Background-image para heroes | Impide lazy loading nativo de `<img>` |

## Resources
- Producción: https://penadaosa.com
- Repo: froma1976/Sitio-web-de-Pe-a-da-Osa---Alojamiento-rural-en-Lugo
- Framework: Vite + React + Tailwind CSS
- Deploy: Hostinger Horizons

## Visual/Browser Findings
- ✅ Diseño premium, coherente y moderno
- ✅ Responsive mobile funciona correctamente
- ✅ Chatbot "Osa" visible y funcional
- ✅ Header transparente convierte a sólido al hacer scroll
- ✅ Imágenes WebP cargando correctamente
- ⚠️ En mobile, el hero ocupa toda la pantalla (buen UX) pero la sección bento está parcialmente visible
