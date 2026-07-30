# Plan de Migración y Mejora — Portfolio v2 → v3

## Diagnóstico del proyecto actual (jspg_page)

Proyecto recién creado con `create-next-app`. Tiene la estructura base limpia pero sin personalización:

- **Next.js 16.2.12** / React 19.2.4 / Tailwind v4
- Sin `src/` — el código está directo en `app/`
- Path alias `@/*` mapea a la raíz del proyecto
- Sin componentes propios, sin ruteo adicional
- Sin i18n, sin tema, sin secciones de portafolio

---

## Lo que traemos del proyecto anterior (page-opencode)

El proyecto `page-opencode` ya tiene toda la funcionalidad del portafolio:

| Sección | Componente | Estado actual |
|---------|-----------|---------------|
| Navegación | `Navbar.tsx` | ✅ Funcional |
| Hero | `Hero.tsx` (~443 líneas) | ✅ Funcional pero hinchado |
| Sobre mí | `About.tsx` | ✅ Funcional |
| Proyectos | `Projects.tsx` | ✅ Funcional |
| Contacto | `Contact.tsx` | ✅ Funcional |
| Footer | `Footer.tsx` | ✅ Funcional |
| Tema oscuro/claro | `useTheme.ts` | ✅ Funcional |
| i18n ES/EN | `useI18n.ts` + JSON | ✅ Funcional |
| Providers | `providers.tsx` | ✅ Funcional |
| Utilidades | `utils.ts` (cn) | ✅ Funcional |
| Datos | `data.ts` (generador scatter) | ✅ Funcional |

---

## Mejoras a aplicar en la migración

### Arquitectura
1. **Migrar a `src/`** — mejor organización, separación clara entre código fuente y configuración de raíz
2. **Ajustar `@/*`** a `./src/*` (como estaba en page-opencode)
3. **Actualizar dependencias** — de `next@16.2.6` → `16.2.12`, revisar `eslint-config-next`

### Refactor de componentes
4. **Hero.tsx** — Está en 443 líneas. Extraer:
   - `TerminalCard.tsx` (la terminal interactiva)
   - `ScatterPlot.tsx` (gráfico SVG de puntos)
   - `NeuralNetwork.tsx` (diagrama de red neuronal)
   - `LineChart.tsx` (chart de accuracy/loss)
   - `DecoOrbs.tsx` (círculos decorativos)
5. **Navbar.tsx** — Extraer `MobileMenu.tsx`
6. **Projects.tsx** — El `ProjectCard` ya está separado, bien ahí
7. **About.tsx** — Extraer `Timeline.tsx` (la línea de tiempo interactiva)

### Server Components
8. Aprovechar Server Components de Next.js donde no se necesita interactividad:
   - `Contact.tsx` → Server Component (no tiene estado)
   - `Footer.tsx` → Server Component (no tiene estado)
   - `Projects.tsx` → la lista puede ser Server, `ProjectCard` Client solo si tiene hover/tap state
   - `About.tsx` → la descripción puede ser Server, el Timeline es Client
9. Mover providers más abajo en el árbol para no convertir toda la app en Client

### Mejoras de código
10. **Tipado** — Usar `interface` en vez de `type` para props de componentes (consistencia)
11. **`data.ts`** — Tipar correctamente el return de `generateHeroData`
12. **i18n** — Crear tipos fuertes para las traducciones en vez de `as Record<string, string>`
13. **Eliminar `clsx`/`tailwind-merge`** — En Tailwind v4, `cn()` es menos necesario, evaluar si vale la pena mantenerlo
14. **CSS** — Unificar estilos: las clases `glass`, `glow-*` están en `globals.css` con `@layer utilities`, correcto. Mantener así.

### Performance
15. **Imágenes** — Usar `next/image` con `placeholder="blur"` y `blurDataURL` donde haya imágenes locales
16. **SVGs inline** — Los SVGs decorativos del Hero deberían tener `aria-hidden="true"`

---

## Plan de migración (fases)

### Fase 0 — Preparación del proyecto base
- [ ] Ajustar `tsconfig.json` para `@/*` → `./src/*`
- [ ] Crear estructura `src/` con `app/`, `components/`, `hooks/`, `i18n/`, `lib/`
- [ ] Mover `app/layout.tsx`, `app/page.tsx`, `app/globals.css` a `src/app/`
- [ ] Actualizar `next.config.ts` si es necesario
- [ ] Instalar dependencias que falten (clsx, tailwind-merge)

### Fase 1 — Infraestructura (hooks + providers)
- [ ] Migrar `src/hooks/useTheme.ts`
- [ ] Migrar `src/hooks/useI18n.ts`
- [ ] Migrar `src/i18n/es.json` y `src/i18n/en.json`
- [ ] Migrar `src/app/providers.tsx`
- [ ] Migrar `src/lib/utils.ts` y `src/lib/data.ts`

### Fase 2 — Layout y navegación
- [ ] Migrar `src/components/Navbar.tsx` (con `MobileMenu.tsx` extraído)
- [ ] Actualizar `src/app/layout.tsx` con providers, metadata real, script de tema, fonts

### Fase 3 — Secciones (de abajo hacia arriba)
- [ ] Migrar `src/components/Footer.tsx` → Server Component
- [ ] Migrar `src/components/Contact.tsx` → Server Component
- [ ] Migrar `src/components/About.tsx` → parte Server + `Timeline.tsx` Client
- [ ] Migrar `src/components/Projects.tsx` y `ProjectCard.tsx`

### Fase 4 — Hero (el más complejo)
- [ ] Extraer y migrar componentes del Hero:
  - `TerminalCard.tsx`
  - `ScatterPlot.tsx`
  - `NeuralNetwork.tsx`
  - `LineChart.tsx`
  - `DecoOrbs.tsx`
- [ ] Migrar `Hero.tsx` usando los subcomponentes

### Fase 5 — Page principal
- [ ] Actualizar `src/app/page.tsx` con todas las secciones

### Fase 6 — Assets y público
- [ ] Migrar `public/docs/CV_Juan_Plazas.pdf`
- [ ] Migrar imágenes de `public/` (Dashboard.png, Diagonal.png, hybrid.png, Story.png)
- [ ] Migrar `public/page-layout.svg`
- [ ] Configurar favicon

### Fase 7 — Limpieza y refinamiento
- [ ] Eliminar boilerplate de create-next-app (SVGs por defecto, page default)
- [ ] Verificar tipos en todos lados
- [ ] Verificar dark/light mode consistente
- [ ] Verificar i18n sin errores de traducción
- [ ] Verificar responsive (mobile/tablet/desktop)
- [ ] Correr `npm run lint`
- [ ] Correr `npm run build`

### Fase 8 — Deploy
- [ ] Commit y push a GitHub
- [ ] Conectar con Vercel
- [ ] Verificar deploy y dominio

---

## Notas técnicas

### Tailwind v4
- Usar `@import "tailwindcss"` en vez de `@tailwind base/components/utilities`
- Usar `@theme` para definir colores y fuentes
- Las clases `dark:` funcionan con clase `.dark` en `<html>`
- No se necesita `tailwind.config.js`

### Next.js 16
- Revisar `node_modules/next/dist/docs/` antes de usar APIs nuevas
- El `eslint-config-next` 16.2.12 usa flat config (`.mjs`)
- Turbopack es el bundler por defecto en dev

### Paleta de colores (dark mode)
```css
--color-bg-base: #0d0b19;
--color-bg-card: rgba(30, 36, 58, 0.75);
--color-primary: #c481f4;
--color-secondary: #6af27e;
--color-tertiary: #6aa4d2;
--color-text-base: #f0f2f1;
--color-text-muted: #8b80ce;
--color-border: rgba(196, 129, 244, 0.2);
```
