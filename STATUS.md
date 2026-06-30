# Status

**Week of 2026-07-01 — post-launch**

wolfthemes.com launched 2026-07-01. Coming soon mode disabled. Launch email (warm list, 963) scheduled for 16:00.

---

## Active Work

| Task | Status | Target |
|---|---|---|
| After-launch email cadence (Brevo) | 🔧 active | Jul 1–14 |
| wolfthemes-banner: hover + self-referrer hide | ⏳ queued | This week |
| wolf-store single theme page audit | ⏳ queued | This week |
| Social posts queue | ⏳ queued | This week |

---

## Lower Priority (not this sprint)

| Task | Notes |
|---|---|
| NNC trader bot — testing | Parked |
| Buffer social posting script | Not started |

---

## Done

- **wolfthemes.com launched 2026-07-01** ✅
- wolf-blocks blocks built (marquee, stats-counter, testimonial-card, pricing-table, countdown, comparison-table, feature-grid, feature-grid-item)
- ThemeForest taxonomy overhaul (47 themes)
- wolf-claude-memory vault fully set up
- CI/CD deploy with `wp cache flush` + nginx PURGE
- nginx WP Super Cache query-string fix (`$cache_uri $uri`) — pages with UTM/ref params now cache-hit correctly
- Teaser email sent 2026-06-29 — 39.34% open rate, 933 delivered

---

## Resolved Decisions

- Newsletter tool: **Brevo** (switched from Mailchimp 2026-06-25 — see [[wolfthemes-growth]])
- SEO landing pages: **wolf-store single theme pages** (`wolfthemes.com/theme/<slug>`) — no separate infrastructure
- constantin.saguin.com: **paused**
- seijaku-fse: **standalone theme** (no parent/child split) — wolf-blank's global.css stays separate; no commercial distribution complexity needed
