# wolfthemes-redesign

**Goal:** 

 - Replace wolfthemes.com (old Seijaku + Elementor site) with a modern FSE / Gutenberg-only storefront.
 - Create a store to sell Premium WordPress themes, outside of ThemeForest, which is currently the only selling channel

**Status:** Deployed to wolfthemes.com in coming soon mode (2026-06-28). Final testing and CI/CD behind the curtain. Hard launch date: July 1, 2026.

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
| Stats band | 🧪 wolf-blocks in-page testing |
| Testimonials | 🧪 wolf-blocks in-page testing |
| Header / Footer | ✅ |
| Countdown (current site main pages) | ✅ |

### Inner pages
| Page | Status |
|---|---|
| About | ✅ |
| Services | ✅ |
| Contact | ✅ |
| Music themes landing | ✅ |
| Theme archive (`archive-wolf_theme`) | 🔧 UI refinement — filtering + search |
| Single theme (`single-wolf_theme`) | ✅ |

### Theme card + archive UI
| Item | Status |
|---|---|
| Theme card design refinement | ⏳ in sprint |
| Archive filtering appearance | ⏳ in sprint |
| Archive search UI | ⏳ in sprint |

### Infrastructure
| Item | Status |
|---|---|
| GitHub Actions CI (lint + build) | ✅ |
| Auto-deploy to SiteGround (SSH rsync) | ✅ |
| Cache flush on deploy (`wp cache flush` + nginx PURGE) | 🔧 `wp cache flush` done; nginx PURGE pending |
| PHP patterns system (27+ patterns) | ✅ |
| Deployment re-test | ✅ |
| Switch to dev branches (pre-production) | ✅ |
| Performance optimization | ⏳ post-card/archive sprint |

### Production checklist
| Item | Status |
|---|---|
| wolf-blocks in-page tests pass | 🧪 |
| Theme card + archive UI done | ⏳ |
| Countdown added to current site | ⏳ |
| Deployment pipeline verified | 🔧 |
| Dev branches merged / ready | ⏳ |
| Performance pass | ⏳ |
| Coming soon mode live on wolfthemes.com | ✅ 2026-06-28 |
| **Production launch (coming soon off)** | 🎯 2026-07-01 |
