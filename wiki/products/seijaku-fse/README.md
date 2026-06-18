# seijaku-fse

FSE child theme of [[wolf-blank]]. Redesigns wolfthemes.com — the WolfThemes storefront. Replaces the old Seijaku + Elementor site with a pure block theme.

**GitHub:** https://github.com/wolfthemes/seijaku-fse  
**Dev environment:** `wolf-store-docker` at `themes/seijaku-fse` (http://localhost:8080)  
**Target:** https://wolfthemes.com

## Design direction

Light, editorial, minimal. Big negative space, bold typography, one strong electric-blue accent used sparingly. Reference energy: Linear.app, Stripe, Rauno.me.

- **Fonts:** Lexend (headings) + Rethink Sans (body)
- **Accent:** `#0c10ff` (electric blue) — primary and accent slots
- **Not:** corporate, decorative, template-looking

Full branding rationale: [[wolfthemes-brand]].

## Token values (finalized)

| Slot | Value |
|---|---|
| `primary` / `accent` | `#0c10ff` |
| `primary-light` | `#0a0bd1` (button hover) |
| `secondary` | `#111111` |
| `base` | `#ffffff` |
| `base-2` | `#f4f4f2` |
| `contrast` | `#141414` |
| `contrast-2` | `#6b6b6b` |
| `border` | `rgba(0,0,0,0.10)` (extra seijaku slot) |

Typography adds a `display` size (hero) above `3xl`. Spacing adds `11`/`12` clamp section steps.

## Front page sections (`templates/front-page.html`)

| Section | Status | Notes |
|---|---|---|
| Hero — full viewport, display heading, two CTAs | ✅ | `core/cover`, no image |
| Themes grid — `wolf-store/theme-index` block | ✅ | featured-first |
| Stats band — `$2M · 14 years · 36k` | ⏳ | `WOLF-BLOCKS: stats-counter` placeholder |
| Testimonials | ⏳ | `WOLF-BLOCKS: testimonials` placeholder |
| About — asymmetric columns, text + pull quote | ✅ | core blocks |
| Footer | ✅ | minimal 3 cols, `parts/footer.html` |
| Header | ✅ | wordmark left, nav + CTA right, `parts/header.html` |

Data-driven / repeatable sections (stats, testimonials, pricing) are deferred to [[wolf-blocks]].

## Active plugins

- `wolf-store` — themes marketplace plugin, provides the `wolf-store/theme-index` block
- `wolf-blocks` (planned) — pricing table, testimonials, stats counter

## FSE gotcha

After editing any `templates/` or `parts/` file, go to **Appearance → Editor → Templates → Clear customizations** to force WordPress to reload the file version (FSE caches templates in the DB).

## CSS contract

This theme defines all `--wolf-*` tokens via `theme.json → settings.custom.wolf`, which wolf-blank's `global.css` aliases for plugins to consume. See [[theme-plugin-css-contract]].
