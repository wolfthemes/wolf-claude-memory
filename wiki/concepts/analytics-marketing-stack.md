# Analytics & Marketing Stack — WolfThemes

Canonical reference for the analytics, social, and revenue data infrastructure used across wolfthemes.com and its agent systems.

See `agents/analytics.md` and `agents/marketing.md` for the agent instruction files that consume this stack.
See `raw/wolfthemes/stack.md` for the full ID/key reference.

---

## Stack

| Layer | Tool | Notes |
|---|---|---|
| Revenue | Freemius | Store ID 15308. REST API. Secret key in `.env` only. |
| Web analytics | GA4 + Site Kit | Property "WolfThemes Store" on wolfthemes.com. Measurement ID: retrieve from GA4 Admin → Data Streams. |
| Tag management | GTM | Demo sites only (GTM-WSKJDHHW). Not on wolfthemes.com. |
| Social scheduling | Buffer | Org 66e40cad8a27b612c7a0ccd3. Channels: Facebook, Twitter/X, Instagram. Pinterest pending. |
| Security | Jetpack | Kept for brute force protection only. Stats module disabled. |

---

## Decisions

**2026-06-24**

- **Jetpack kept, Stats disabled.** 4357 brute force attacks blocked — removing Jetpack is not worth the security regression. GA4 replaces Jetpack Stats.
- **GA4 is the analytics source of truth** for wolfthemes.com. Site Kit handles the integration.
- **No LinkedIn promotion.** Active job search creates a conflict of interest between personal brand and commercial product promotion.
- **Focus: wolfthemes.com store, not ThemeForest.** ThemeForest is passive revenue. wolfthemes.com is the growth lever — all marketing effort goes there.

---

## Social Platform Priority

1. Instagram — primary
2. Pinterest — primary
3. X (Twitter) — low priority
4. LinkedIn — never (see decision above)

---

## Agent Outputs

- Reports: `output/reports/YYYY-MM-DD.md`
- Content log: `output/content-log.md`
- Tools: `output/tools/wolfthemes-card-generator.html`, `output/tools/wolfthemes-freemius-dashboard.html`
