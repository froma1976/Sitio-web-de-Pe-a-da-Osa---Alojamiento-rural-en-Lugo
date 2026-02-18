# Task Plan: Auditoría Completa de Penadaosa.com

## Goal
Realizar una auditoría integral de penadaosa.com (rendimiento, SEO, accesibilidad, UX móvil, código) — identificar los 10 problemas más críticos y corregirlos.

## Current Phase
Phase 1 - Descubrimiento ✅ COMPLETADA → Transición a Phase 2

## Phases

### Phase 1: Descubrimiento ✅
- [x] Entender estructura del proyecto (archivos, rutas, componentes)
- [x] Identificar páginas principales (7 rutas + 1 alias + 404)
- [x] Revisar configuración de build (Vite, Tailwind, i18n)
- [x] Auditar visualmente la web en producción
- [x] Documentar hallazgos iniciales (20 issues encontrados)
- **Status:** ✅ DONE

### Phase 2: Auditoría de Rendimiento
- [ ] Analizar bundle size y assets (images, fonts)
- [ ] Evaluar CLS issues (imágenes sin width/height)
- [ ] Evaluar LCP (hero image, fonts)
- [ ] Revisar font loading strategy
- **Status:** pending

### Phase 3: Auditoría de Código (ya iniciada en Phase 1)
- [x] Revisar SEO (meta tags, structured data, sitemap, canonicals)
- [x] Revisar accesibilidad (alt tags, aria labels)
- [ ] Revisar UX móvil detallado (touch targets, viewport)
- [ ] Revisar calidad de código (imports no usados, console.logs)
- **Status:** partially_done

### Phase 4: Priorizar y Corregir
- [ ] Crear lista de los 10 problemas más críticos → ver findings.md
- [ ] Corregir cada uno por prioridad
- [ ] Documentar cada cambio
- **Status:** pending

### Phase 5: Verificar en Local
- [ ] Ejecutar build local (npm run build)
- [ ] Verificar que no hay errores
- [ ] Test visual en navegador local
- **Status:** pending

## Reglas
- ⛔ NO subir nada a GitHub
- ✅ Todo se hace en local
- ✅ Solo subimos cuando el usuario confirme que nada se rompe

## Key Questions
1. ¿Cuál es la URL de producción? → https://penadaosa.com ✅
2. ¿Qué framework usa? → Vite + React + Tailwind CSS ✅
3. ¿Hay archivo .env necesario para dev local? → No hay .env ✅
4. ¿Cuáles son las páginas principales? → 7 + alias + 404 ✅

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Usar react-helmet existente | Funcional, no vale la pena migrar a async ahora |
| Mantener background-image en heroes | Cambiar requiere restructura; mejor añadir preload |
| Priorizar canonical fix | Es el bug más crítico de SEO |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| notebook-files MCP no accede a penadaosa dir | 1 | Usar view_file/write_to_file tools en su lugar |

## Top 10 Issues (Prioridad de corrección)
1. 🔴 **Canonical tag con `content` en vez de `href`** — HomePage.jsx:50
2. 🟠 **EntornoPage sin canonical ni OG tags** — EntornoPage.jsx
3. 🟠 **LaCasaPage sin OG tags** — LaCasaPage.jsx
4. 🟠 **Imágenes sin width/height** — múltiples (CLS)
5. 🟡 **html lang estático "es" siendo sitio bilingüe** — index.html + i18n
6. 🟡 **Ruta /about duplica /lacasa** — App.jsx
7. 🟡 **SchemaOrg duplicado** — MainLayout + HomePage
8. 🟡 **Falta hreflang alternativo** — todas las páginas
9. 🟡 **Alt texts hardcoded en español** — EntornoPage, LaCasaPage
10. 🟡 **process.env.NODE_ENV en Vite** — ErrorBoundary.jsx
