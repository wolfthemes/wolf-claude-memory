# Status

**Week of 2026-06-19 — pre-production sprint**

> ⚠️ **HARD DEADLINE: everything must be ready on prod by the evening of 2026-06-30 — launch is 1 July.**

---

## Active Work

| Task                                                        | Status      | Target              |
| ----------------------------------------------------------- | ----------- | ------------------- |
| wolf-blocks: in-page testing (stats, testimonials, pricing) | 🧪 testing  | This week           |
| wolf-blocks: newsletter sign-up block                       | ✅ done      | This week           |
| seijaku-fse: theme card design refinement                   | ✅ done      | This week           |
| seijaku-fse: archive filtering + search UI                  | ⏳ in sprint | After launch        |
| seijaku-fse: overall template + design refinement           | ✅ done      | This week           |
| Deployment re-test (staging → SiteGround)                   | ✅ done      | This week           |
| Switch repos to dev branches (pre-production)               | ✅ done      | This week           |
| Add countdown to current wolfthemes.com main pages          | ✅ done      | This week           |
| CI/CD cache flush (`wp cache flush` + nginx PURGE)          | ✅ done      | This week           |
| Performance optimization pass                               | ✅ done      | This week           |
| **Production deployment**                                   | 🎯 target   | ⚠️ HARD: 2026-06-30 |

---

## Lower Priority (not this sprint)

| Task | Notes |
|---|---|
| NNC trader bot — testing | Less priority than wolfthemes redesign |
| Buffer social posting script | Not started |
| Newsletter setup (Mailchimp) | Post-production |

---

## Done

- wolf-blocks blocks built (marquee, stats-counter, testimonial-card, pricing-table, countdown, comparison-table, feature-grid, feature-grid-item)
- ThemeForest taxonomy overhaul (47 themes)
- wolf-claude-memory vault fully set up
- constantin.saguin.com — paused, done until further notice

---

## Post-launch checklist (after 2026-07-01)

> Trigger once launch ships. Candidate for a one-off scheduled reminder dated 2026-07-01.

- [ ] Enable wolfthemes-store-banner
- [ ] Send launch newsletter (Brevo) — warm list (963), launch day 2026-07-01. Teaser ✅ sent 2026-06-29 (35.9% open, 6 unsubs). See [[launch-newsletter]].
- [ ] Post social posts

---

## Resolved Decisions

- Newsletter tool: **Brevo** (switched from Mailchimp 2026-06-25 — see [[wolfthemes-growth]])
- SEO landing pages: **wolf-store single theme pages** (`wolfthemes.com/theme/<slug>`) — no separate infrastructure
- constantin.saguin.com: **paused**
