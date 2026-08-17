# Code Standards — LUMINA Majestic Landing Page

## General
- Keep components small and single-purpose.
- Prioritize loading speed and SEO (Arabic meta tags, Open Graph).
- Mobile-first responsive design.
- RTL (Right-to-Left) layout — `dir="rtl"` on html element.
- Arabic-first content. Brand name "LUMINA" and prices use Latin characters.

## Tech Stack
- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui**
- **Google Fonts:** Tajawal (Arabic body), Playfair Display (serif heading), Inter (Latin/numbers)
- **Lucide React** for icons + **Simple Icons** for brand icons (WhatsApp, Instagram)
- NO heavy animation libraries — CSS animations and transitions only.

## Next.js Rules
- Default to Server Components.
- Use `'use client'` ONLY for interactive parts (Mobile menu, scroll animations, WhatsApp floating button).
- Optimize images using Next.js `<Image />` component with proper `width`/`height` or `fill`.
- Use `next/font` for Google Fonts (Tajawal, Playfair Display, Inter) — automatic optimization.
- Implement proper metadata using Next.js `Metadata` API (Arabic title, description, OG tags).

## Styling
- **STRICTLY USE CSS custom properties** defined in ui-context.md. NO hardcoded hex values in components.
- Use Tailwind logical properties for spacing where possible (`ms-`, `me-`, `ps-`, `pe-` for RTL).
- All colors referenced via CSS variables: `var(--accent-primary)`, `var(--bg-base)`, etc.
- Tailwind config extends with custom colors mapped to CSS variables.
- Dark theme ONLY — no light mode toggle needed.

## Layout
- `dir="rtl"` on `<html>` element.
- `lang="ar"` on `<html>` element.
- Use `max-w-7xl` container for content sections.
- Consistent section padding: `py-16 md:py-24`.
- Grid: CSS Grid or Tailwind grid with RTL-aware gap.

## Components Structure
```
app/
  layout.tsx          — Root layout with fonts, metadata, RTL
  page.tsx            — Landing page composition
  globals.css         — CSS custom properties, base styles
components/
  navbar.tsx          — Sticky navigation
  hero.tsx            — Hero section with glow effect
  about.tsx           — Brand story section
  features.tsx        — USP / key differentiators
  product-showcase.tsx— Featured products grid
  categories.tsx      — Category cards
  final-cta.tsx       — WhatsApp CTA section
  footer.tsx          — Footer with social links
  whatsapp-float.tsx  — Floating WhatsApp button
  ui/                 — shadcn/ui components
```

## Forms & CTAs
- WhatsApp CTA: Links to `https://wa.me/97471722484` with pre-filled message if desired.
- Instagram CTA: Links to `https://www.instagram.com/lumina.qa`
- Website CTA: Links to `https://luminamajestic.com`
- All external links open in new tab (`target="_blank"`, `rel="noopener noreferrer"`).

## SEO
- Title: لومينا | لوحات فنية مضيئة من البورسلين الفاخر — قطر
- Description: LUMINA — أول علامة متخصصة في قطر تقدم لوحات فنية مضيئة مصنوعة من البورسلين الفاخر والمُرصّعة بالكريستال والألماس مع إضاءة LED ذكية.
- Open Graph image: Hero section screenshot or brand logo.
- Structured data: Organization schema for LUMINA.
