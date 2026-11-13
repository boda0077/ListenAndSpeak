# L&S — Listen and Speak

> **A quiet, safe, voice-only space to be genuinely heard—until speaking feels effortless.**

**L&S — Listen and Speak** is a private, voice-only active listening platform created for shy individuals and people overcoming social anxiety or fear of speaking in public. Built with a zero-camera, zero-judgment philosophy and a soft Instagram DM comfort bridge (`@listen_and_sp3ak`), visitors can warm up at their own pace before reserving a private voice session.

---

## Key Features

- **100% Voice-Only & Camera-Free:** Designed to eliminate eye-contact pressure and visual self-consciousness.
- **Quiet Luxury Aesthetic (Zero Gradients):** Crafted with a flat, solid color system (`#F9F8F6` Warm Alabaster, `#EFECE6` Soft Stone, `#18181B` Obsidian Charcoal, and `#8C7355` Muted Bronze) and editorial typography (`Cormorant Garamond` + `Plus Jakarta Sans`).
- **Focus-Based Session Tiers ($5 – $60/hr):**
  - **$5 / hr** — *Warm-Up & Quiet Company* (Gentle Focus)
  - **$20 / hr** — *Open Vent & Active Listening* (Full Focus)
  - **$40 / hr** — *Confidence & Speaking Practice* (Deep Focus)
  - **$60 / hr** — *Priority Deep-Dive & Undivided Presence* (100% Exclusive Focus)
- **Instagram Comfort Bridge:** Direct integration with [`@listen_and_sp3ak`](https://instagram.com/listen_and_sp3ak) so hesitant visitors can send a simple `"Hi"` via text before ever booking a call.
- **100/100 Google Lighthouse Architecture:** Server-first Next.js (App Router) + React 19 setup with zero heavy UI frameworks, native CSS Modules, GPU-only (`transform` / `opacity`) animations, `prefers-reduced-motion` support, and JSON-LD `Service` & `FAQPage` structured data.

---

## Tech Stack

- **Framework:** Next.js (App Router) & React 19
- **Language:** TypeScript (`strict: true`)
- **Styling:** Native CSS Modules + CSS Custom Properties (`tokens.css`)
- **Typography:** `next/font/google` (`Cormorant Garamond` & `Plus Jakarta Sans`)
- **SEO & Metadata:** Native Next.js Metadata API, `robots.ts`, `sitemap.ts`, and JSON-LD schema markup

---

## Project Structure

```text
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Global SEO metadata, font preloads, JSON-LD injection
│   │   ├── page.tsx            # Main landing page assembly
│   │   ├── robots.ts           # Search engine crawler rules
│   │   └── sitemap.ts          # Dynamic XML sitemap
│   ├── config/
│   │   └── site.ts             # Brand constants, Instagram handle, booking links
│   ├── data/
│   │   ├── pricing.ts          # $5–$60/hr session tiers & focus levels
│   │   ├── features.ts         # Value propositions & 3-step process copy
│   │   └── faq.ts              # FAQ items & schema data
│   ├── styles/
│   │   ├── tokens.css          # Solid color palette, spacing & fluid type tokens
│   │   └── globals.css         # Reset, focus rings & reduced-motion rules
│   ├── components/
│   │   ├── layout/             # Sticky Header & 3-column Footer
│   │   ├── ui/                 # ScrollProgress, VoiceWave, RevealSection, Button
│   │   └── sections/           # Hero, WhyVoice, HowItWorks, Pricing, InstagramBridge, FAQ, BookingModal
│   └── lib/
│       └── schema.ts           # JSON-LD Service & FAQPage schema generators
└── package.json

Getting Started
1. Install Dependencies
Bash
npm install
2. Configure Your Links
Update src/config/site.ts with your production domain, scheduling link (Cal.com / Calendly), and Instagram profile URL:

TypeScript
export const siteConfig = {
  name: "L&S — Listen and Speak",
  instagramHandle: "@listen_and_sp3ak",
  instagramUrl: "[https://instagram.com/listen_and_sp3ak](https://instagram.com/listen_and_sp3ak)",
  bookingUrl: "[https://cal.com/your-link](https://cal.com/your-link)",
};
3. Run the Development Server
Bash
npm run dev
Open http://localhost:3000 in your browser to preview the site.

4. Build for Production
Bash
npm run build
npm start
Responsible Service Note
L&S — Listen and Speak provides non-clinical peer active listening and conversation confidence support. It is not a substitute for licensed psychotherapy, psychiatric diagnosis, medical treatment, or emergency crisis counseling.

Connect
Instagram: @listen_and_sp3ak