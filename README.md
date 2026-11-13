# L&S — Listen and Speak

A voice-only peer active-listening landing site built with the Next.js App Router, React 19, and strict TypeScript. The page is server-rendered; only scrolling, section reveals, FAQ controls, and the booking dialog use client-side JavaScript.

## Start locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure before launch

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin. This value feeds canonical metadata, Open Graph URLs, `robots.txt`, and `sitemap.xml`. Optionally set `NEXT_PUBLIC_BOOKING_URL` to a scheduling page when one is ready.

The Instagram handle, profile URL, booking fallback, locale, and currency live in `src/config/site.ts`. Booking opens Instagram by default because no calendar or payment service was provided. The modal states that scheduling happens there and does not collect personal information.

Pricing, the process steps, feature copy, and FAQ content are centralized in `src/data/`. FAQ JSON-LD is generated from the same FAQ source as the interactive accordion.

## Project map

- `src/app/`: App Router layout, landing page, metadata, robots, and sitemap.
- `src/config/`: brand and deployment settings.
- `src/data/`: typed business content.
- `src/components/layout/`: server-rendered header and footer.
- `src/components/sections/`: server-rendered editorial sections and small client leaves.
- `src/components/ui/`: reusable button, progress indicator, reveal wrapper, and CSS wave.
- `src/styles/`: global reset and design tokens.
- `src/lib/`: JSON-LD schema builders.

The visual system uses flat colors only. Motion is disabled or minimized for visitors who request reduced motion. Performance and Lighthouse scores depend on the deployed host, font availability, and final configuration; they should be measured against the production build before launch.
