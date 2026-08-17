# AI Workflow Rules — LUMINA Majestic Landing Page

## Approach
Build this landing page incrementally. Context files define the scope. Do not invent sections or behaviors not defined in `project-overview.md`. Each section must be built, tested for responsiveness, and verified before moving to the next.

## Build Order (Sequential)
1. **Project Setup:** Initialize Next.js, configure Tailwind with CSS variables, set up fonts (Tajawal, Playfair Display, Inter), RTL config.
2. **Navbar:** Logo, anchor navigation, WhatsApp CTA button. Sticky on scroll.
3. **Hero Section:** Full-viewport hero with animated glow, headline, subtitle, dual CTAs.
4. **About Section:** Brand story with elegant typography and ambient styling.
5. **Features Section:** 4 USP cards (Porcelain, LED, Crystal, Limited Edition) with icons.
6. **Product Showcase:** Grid of featured products with images, names, prices.
7. **Categories Section:** Visual category cards with images.
8. **Final CTA:** Strong WhatsApp call-to-action section.
9. **Footer:** Brand info, social links, copyright.
10. **Floating WhatsApp Button:** Fixed position bottom-left (RTL) with pulse animation.
11. **Scroll Animations:** Fade-in on scroll for all sections.
12. **Final Polish:** Responsive testing, Lighthouse audit, performance optimization.

## Scoping Rules
- Build one section at a time following the build order above.
- Verify responsiveness (Mobile 375px & Desktop 1440px) for each section before moving to the next.
- Each section must be complete with real content from `project-overview.md` — no placeholder text.
- RTL must be verified at each step.

## Handling Missing Requirements
- If copy/text is missing, use the Arabic content from `project-overview.md`.
- If images are missing, use placeholder images with the correct aspect ratio and a subtle "LUMINA" watermark.
- If a design decision is unclear, default to the dark luxury aesthetic defined in `ui-context.md`.

## Before Finishing
1. All 8+ sections are implemented and responsive.
2. RTL layout is correct throughout.
3. All CTAs link to correct WhatsApp/Instagram/Website URLs.
4. Lighthouse performance is > 90.
5. `progress-tracker.md` is updated with final status.
6. No console errors or warnings.

## Quality Gates
- [ ] Hero section renders correctly with glow animation
- [ ] All Arabic text displays correctly (no rendering issues)
- [ ] WhatsApp button links to correct number (+97471722484)
- [ ] Instagram link is correct
- [ ] Website link is correct
- [ ] Mobile layout is usable and elegant
- [ ] Desktop layout is polished and premium-feeling
- [ ] Gold accent color is consistent throughout
- [ ] Dark background is truly dark (not gray)
- [ ] Fonts load correctly (Tajawal for Arabic, Inter for Latin)
- [ ] Page loads in < 3 seconds on 4G
- [ ] Lighthouse score > 90
