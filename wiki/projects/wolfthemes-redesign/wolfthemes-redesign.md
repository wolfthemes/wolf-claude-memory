# wolfthemes-redesign

**Goal:** Replace wolfthemes.com (old Seijaku + Elementor site) with a modern FSE / Gutenberg-only storefront.

**Status:** Active — front page built, stats/testimonials/pricing pending wolf-blocks plugin.

## What this is

A full site rebuild, not a reskin. The new site is:
- Pure block theme — no Elementor, no page builders
- Built on [[wiki/products/wolf-blank/wolf-blank|wolf-blank]] (FSE base theme) + [[wiki/products/seijaku-fse/seijaku-fse|seijaku-fse]] (child theme)
- Powered by [[wiki/products/wolf-store/wolf-store|wolf-store]] (theme marketplace plugin) for the themes grid
- Pending [[wiki/products/wolf-blocks/wolf-blocks|wolf-blocks]] for data-driven sections (stats counter, testimonials, pricing)

## Design direction

See [Design Direction.md](Design Direction.md) for the full brand rationale.

Summary: light, editorial, minimal. Big negative space, bold typography (Lexend + Rethink Sans), one electric-blue accent (`#0c10ff`). Reference energy: Linear.app, Stripe, Rauno.me.

See also: [[wiki/concepts/wolfthemes-brand|WolfThemes Brand]] (positioning) and [[wiki/concepts/fse-stack-architecture|FSE Stack Architecture]] (technical structure).

## Progress

### Front page
| Section | Status |
|---|---|
| Hero | ✅ |
| Themes grid (`wolf-store/theme-index`, featured-first) | ✅ |
| About / brand story | ✅ |
| Stats band | ⏳ wolf-blocks (static pattern placeholder) |
| Testimonials | ⏳ wolf-blocks (static pattern placeholder) |
| Header / Footer | ✅ |

### Inner pages
| Page | Status |
|---|---|
| About | ✅ (patterns: intro · story · values · CTA) |
| Services | ✅ (patterns: hero · intro · process · pricing · FAQ · CTA) |
| Contact | ✅ (patterns: intro · form · options) |
| Music themes landing | ✅ |
| Theme archive (`archive-wolf_theme`) | ✅ |
| Single theme (`single-wolf_theme`) | ✅ |

### Infrastructure
| Item | Status |
|---|---|
| GitHub Actions CI (lint + build) | ✅ |
| Auto-deploy to SiteGround (SSH rsync) | ✅ |
| PHP patterns system (27+ patterns) | ✅ |
