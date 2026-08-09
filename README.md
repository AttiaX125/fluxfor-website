# FLUXFOR — Next.js Site

Navbar + Home page, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included

- **Navbar** (`src/components/navbar.tsx`) — dropdown mega-menus, mobile overlay menu, theme toggle, sticky/blurred header.
- **Home page** (`src/app/page.tsx`) — hero carousel (autoplay + arrows + dots), trust pillars, stats band, company intro, promo banner, services preview, solutions preview.
- **Light/dark theme** via `next-themes`, toggled from the header (sun/moon icon). Brand navy/blue/cyan stay constant; content surfaces (cards, forms) flip between light and dark. Tokens live in `src/app/globals.css`.
- **SEO**: per-page `metadata` exports, Open Graph + Twitter cards, JSON-LD Organization schema (`src/app/layout.tsx`), `sitemap.ts`, `robots.ts`, semantic HTML, skip-to-content link.
- **Fonts**: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (labels/data) — self-hosted automatically via `next/font/google` (zero layout shift, no external requests at runtime).
- **Placeholder pages** for About, Services, Solutions, Products, Resources, Contact, Careers — each has real metadata and a "coming soon" panel so no nav link 404s. These get replaced with full pages next.

## Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, ThemeProvider, SEO, JSON-LD
    page.tsx           Home page composition
    globals.css         Design tokens (light/dark)
    sitemap.ts / robots.ts
    about/ services/ solutions/ products/ resources/ contact/ careers/
      page.tsx          Placeholder pages (real metadata, "coming soon" content)
  components/
    navbar.tsx, footer.tsx, logo.tsx, hero-carousel.tsx
    theme-provider.tsx, theme-toggle.tsx, coming-soon.tsx
    home/               Home-page-only sections (pillars, stats, previews, etc.)
  lib/
    site-config.ts       Nav structure + shared site metadata (single source of truth)
```

## Before deploying

1. Set the real production URL in `src/lib/site-config.ts` (`siteConfig.url`) — this feeds canonical URLs, sitemap, and Open Graph tags.
2. Add a real `public/og-image.jpg` (1200×630) for social share previews.
3. Swap the placeholder client names / manufacturer names / stats used across the site for FLUXFOR's real data once available.
4. `npm run build` to verify the production build (requires internet access to fetch Google Fonts at build time — this works in any normal CI/hosting environment, e.g. Vercel).

## Next steps

Full content is still needed for About, Services, Solutions, Products, Resources, and Contact — happy to build those out next, one at a time.
