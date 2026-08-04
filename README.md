# Juan Sebastián Plazas Gaitán — Portafolio

Portafolio personal y página de marca personal. [Ver deploy](https://juanplazas.vercel.app)

Sitio de una sola página (landing) construido con **Next.js 16** + **React 19** + **Tailwind CSS v4** + **TypeScript**, con enfoque en accesibilidad, SEO, rendimiento y una experiencia fluida en dark/light y español/inglés sin parpadeo al recargar.

## Secciones

- **Navbar** — Navegación por anclas, toggle de tema (dark/light) y de idioma (ES/EN).
- **Hero** — Intro, terminal animado, video de presentación y gráficos SVG decorativos (scatter plot, line chart, arquitectura neuronal).
- **Sobre mí** — Bio y timeline profesional/académico.
- **Proyectos** — Tarjetas flip con vista detallada de cada proyecto.
- **Contacto** — Formulario y datos de contacto.
- **Footer** — Enlaces y navegación secundaria.

## Características

- **Bilingüe (ES/EN)** — Textos en `src/i18n/es.json` y `src/i18n/en.json`, con persistencia vía cookie y SSR correcto (`<html lang>` dinámico).
- **Tema dark/light** — Persistencia vía cookie; la clase `dark` se aplica desde el layout en servidor, evitando parpadeo (flash) al recargar.
- **Accesibilidad** — Navegación con anclas reales, menús ocultos con `inert` (no enfocables), botones con `aria-label`/`aria-pressed`, SVGs decorativos con `aria-hidden`.
- **SEO** — Metadata y Open Graph en `layout.tsx` + datos estructurados JSON-LD (Person).
- **PWA básica** — `manifest.json` y favicon/apple-icon.
- **Rendimiento** — `next/script` para el JSON-LD, fuentes Geist optimizadas con `next/font`, animaciones SVG acotadas.
- **Analytics** — `@vercel/analytics`.
- **CV descargable** — `public/CV_Juan_Plazas.pdf`, ruta definida en `next.config.ts` como `CV_URL`.

## Stack

- [Next.js 16](https://nextjs.org) — App Router
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [@vercel/analytics](https://vercel.com/docs/analytics)

## Estructura

```
src/
├── app/
│   ├── layout.tsx        # Server component: cookies (tema/idioma), metadata, JSON-LD, Providers
│   ├── page.tsx          # Ruta única: Navbar + PageClient
│   ├── error.tsx         # Error boundary
│   ├── providers.tsx     # Contextos de tema e idioma
│   ├── globals.css       # Tailwind + variables de tema
│   └── manifest.json
├── components/
│   ├── PageClient.tsx    # Client component que ensambla las secciones
│   ├── Navbar/
│   ├── Hero/             # index, HeroIntro, HeroTerminal, HeroVideo, HeroGraphics,
│   │                     # HeroDeco, HeroSvgConstants, ScatterPlot, LineChart, NeuralArchitecture
│   ├── About/            # index, AboutBio, Timeline
│   ├── Projects/
│   ├── Contact/
│   └── Footer/
├── hooks/
│   ├── useTheme.ts       # Lee estado inicial, escribe cookie al cambiar
│   └── useI18n.ts        # Lee estado inicial, escribe cookie al cambiar
├── i18n/
│   ├── es.json
│   ├── en.json
│   └── types.ts
└── lib/
    ├── data.ts           # generateHeroData (puntos del scatter plot)
    └── utils.ts          # cn()
public/
├── CV_Juan_Plazas.pdf
└── web-app-manifest-192x192.png / 512x512.png
```

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando         | Descripción                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Servidor de desarrollo         |
| `npm run build` | Build de producción            |
| `npm run start` | Servir el build de producción  |
| `npm run lint`  | ESLint                         |

## Configuración

- **`CV_URL`** — ruta del CV descargable, definida en `next.config.ts` (default: `/CV_Juan_Plazas.pdf`).
- **`SITE_URL`** — hardcodeada en `src/app/layout.tsx` (metadata y JSON-LD).

## Deploy

El sitio se despliega en **Vercel** con `npm run build`.
