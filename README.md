# I love bio supermercado ecológico — Web (Next.js)

Proyecto web para **“I love bio supermercado ecológico”** (Alhaurín de la Torre, Málaga) usando **Next.js (App Router) + TypeScript + Tailwind CSS**. Diseñado para SEO local, rendimiento y despliegue fácil en Vercel.

## Requisitos

- Node.js 18+ (recomendado)
- npm

## Instalación

```bash
npm i
```

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Build (producción)

```bash
npm run build
npm run start
```

## Despliegue en Vercel

1. Sube el repositorio a GitHub/GitLab/Bitbucket.
2. En Vercel: **New Project** → importa el repo.
3. Framework preset: **Next.js** (detectado automáticamente).
4. Deploy.

## Personalización rápida (cliente)

- Datos del negocio, WhatsApp y redes: `lib/siteConfig.ts` (comentado).
- Horario editable: `lib/siteConfig.ts` (objeto `openingHours`).
- Productos/categorías de ejemplo: `lib/mockData.ts`.
- Imágenes placeholder: `public/images/*` (puedes reemplazarlas manteniendo nombres/rutas).

## SEO técnico incluido

- `metadata` por página (title/description/OpenGraph)
- `app/sitemap.ts` y `app/robots.ts`
- Schema.org **LocalBusiness** (JSON-LD) en el layout

