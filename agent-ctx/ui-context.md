# UI Context — LUMINA Majestic

## Theme & Vibe
**Dark Luxury with Luminous Glow** — A premium, cinematic dark aesthetic inspired by luxury jewelry brands and high-end interior design. The design evokes the feeling of walking into an exclusive art gallery at night, where each piece glows with its own inner light (LED illumination). Think: **Rolls-Royce night mode meets Sotheby's art gallery**. The visual language communicates exclusivity, craftsmanship, and the magical quality of illuminated art.

**Design Keywords:** Dark luxury, luminous, gold accents, ambient glow, cinematic, premium, exclusive, gallery-like, RTL Arabic elegance.

## Colors (Use CSS Custom Properties strictly)
| Role            | CSS Variable       | Value       | Description                                          |
| --------------- | ------------------ | ----------- | ---------------------------------------------------- |
| Page background | `--bg-base`        | `#050505`   | Near-black — deep dark canvas for art to glow on     |
| Surface         | `--bg-surface`     | `#0F0F0F`   | Slightly lifted dark — cards, sections               |
| Surface hover   | `--bg-surface-alt` | `#1A1A1A`   | Hover/active state for interactive elements          |
| Primary text    | `--text-primary`   | `#FAFAFA`   | Near-white — main headings and body text             |
| Muted text      | `--text-muted`     | `#8A8A8A`   | Silver-gray — secondary text, labels, descriptions   |
| Primary accent  | `--accent-primary` | `#C9A96E`   | **Warm gold** — CTAs, highlights, brand mark         |
| Accent Hover    | `--accent-hover`   | `#D4B87A`   | Lighter gold on hover — subtle brightness increase    |
| Accent glow     | `--accent-glow`    | `#C9A96E40` | Gold with 25% opacity — for glow/shadow effects      |
| Border          | `--border-default` | `#1E1E1E`   | Subtle dark border — card outlines, dividers         |
| Success         | `--color-whatsapp` | `#25D366`   | WhatsApp green — for WhatsApp CTA button             |
| Error / CTA alt | `--color-instagram`| `#E4405F`   | Instagram gradient end — for Instagram icon accent    |

### Color Rationale
- **#050505 base:** Nearly pure black creates maximum contrast for the illuminated panels to "pop" as they would in a real gallery setting. This deep void enhances the LED glow effect.
- **#C9A96E gold:** A warm, muted gold (not garish yellow-gold) that conveys luxury and craftsmanship. It references the warm LED light that emanates from the actual panels. This is the primary brand accent.
- **#8A8A8A muted:** Cool silver-gray for secondary text — sits comfortably against the dark background without competing with the gold accents.

## Typography
| Role      | Font                   | Variable        | Notes                                                     |
| --------- | ---------------------- | --------------- | --------------------------------------------------------- |
| Headings  | **Playfair Display**   | `--font-heading`| Elegant serif for luxury feel; used for H1-H3            |
| Body text | **Tajawal**            | `--font-body`   | Arabic-optimized sans-serif; clean, modern, highly legible|
| Accent    | **Inter**              | `--font-accent`  | Latin text, numbers, CTAs — clean geometric sans-serif    |

### Typography Rationale
- **Playfair Display:** Classic luxury serif that pairs beautifully with Arabic calligraphy aesthetics. Used for English text in headings if bilingual elements appear.
- **Tajawal:** Google Font specifically designed for Arabic UI. Modern, geometric, excellent readability at all sizes. The natural choice for Arabic-first luxury brands.
- **Inter:** For any Latin characters (prices "649 ر.ق", brand name "LUMINA", CTAs with English). Clean and modern.

### Font Sizes (Tailwind scale, RTL-aware)
| Element      | Size    | Weight | Line Height |
| ------------ | ------- | ------ | ----------- |
| Hero H1      | 4xl-6xl | 700    | tight       |
| Section H2   | 3xl-4xl | 600    | tight       |
| Card title   | lg-xl   | 600    | snug        |
| Body         | base    | 400    | relaxed     |
| Caption/label| sm      | 500    | normal      |

## Component Library
Use **shadcn/ui** on top of Tailwind. Customize the default theme to match the dark luxury palette above. Key customizations:
- Button default: gold background, dark text, rounded-lg
- Card: glass-morphism effect with subtle gold border on hover
- Dialog/Sheet: dark surface background with gold accent borders

## Layout Patterns
- **Overall:** Full-width sections, RTL direction (`dir="rtl"`), centered content with `max-w-7xl` container.
- **Hero:** Full viewport height, centered text with subtle animated glow behind headline. Background: dark with abstract light/gold particle effects or gradient.
- **Sections:** Centered container with max-width, consistent vertical padding (`py-16` to `py-24`).
- **Product Grid:** 2 columns mobile, 3-4 columns desktop. Cards with dark surface, gold border on hover, subtle glow effect.
- **CTAs:** Gold background with dark text. High contrast, rounded-lg corners, clear hover states with brightness increase. WhatsApp CTA: green with WhatsApp icon.
- **Navigation:** Minimal sticky nav with logo, 2-3 anchor links, and WhatsApp CTA button.

## Icons & Graphics
- **Lucide React** for UI icons (arrow, menu, external-link, etc.)
- **Simple Icons** for brand icons (WhatsApp, Instagram)
- **Custom SVG** for LUMINA logo (or reference from website URL)
- **Product images:** Reference from luminamajestic.com/wp-content/uploads/ or use placeholders
- **Decorative:** Subtle gold particle/glow effects using CSS gradients and animations (no heavy JS animations)

## Animation Guidelines
- **Scroll reveal:** Fade-in + slight translateY on section entry (use CSS `@starting-style` or lightweight observer)
- **Hover effects:** Gold border glow, subtle scale (1.02), shadow increase
- **Hero glow:** Slow pulsing ambient gold glow behind headline (CSS animation, not JS)
- **WhatsApp CTA:** Subtle pulse animation on the floating WhatsApp button
- **NO heavy animation libraries** — prefer CSS transitions and animations for performance
- **Mobile:** Reduce or disable complex animations for performance

## RTL Considerations
- All layout must use `dir="rtl"` on `<html>` element
- Use Tailwind RTL variants (`rtl:`) where needed
- Ensure icons and arrows are mirrored for RTL
- Text alignment: right-aligned by default for Arabic
- WhatsApp/Instagram links: icons on right side of text in RTL
