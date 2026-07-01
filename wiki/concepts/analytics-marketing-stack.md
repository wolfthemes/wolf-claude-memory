# Analytics & Marketing Stack — WolfThemes

Canonical reference for the analytics, social, and revenue data infrastructure used across wolfthemes.com and its agent systems.

See `agents/analytics.md` and `agents/marketing.md` for the agent instruction files that consume this stack.
See `raw/wolfthemes/stack.md` for the full ID/key reference.

---

## Stack

| Layer | Tool | Notes |
|---|---|---|
| Revenue | Freemius | Store ID 15308. REST API. Secret key in `.env` only. |
| Web analytics | GA4 + Site Kit | Property "WolfThemes Store" — `properties/543096202` on wolfthemes.com. |
| Tag management | GTM | Demo sites only (GTM-WSKJDHHW). Not on wolfthemes.com. |
| Social scheduling | Buffer | Org 66e40cad8a27b612c7a0ccd3. Channels: Facebook `66e40ccdca3dab3e0a3c25e2`, Instagram `66e40ce7ca3dab3e0a3d7bc0`, Pinterest `6a3c3fca5ab6d2f1066a9e7f`. X/Twitter removed 2026-06-25 (replaced by Pinterest pro account). |
| Email marketing | Brevo | Campaign sends + open/click/conversion stats via MCP. Not yet correlated with GA4 automatically — read manually per campaign for now. |
| Security | Jetpack | Kept for brute force protection only. Stats module disabled. |

---

## Decisions

**2026-06-25**

- **X/Twitter dropped, Pinterest added on Buffer.** A professional Pinterest account is now live and took X's Buffer slot. Pinterest is the best-fit channel for the theme catalog (see [[audience-building-strategy]]); X's expected return didn't justify the slot.

**2026-06-24**

- **Jetpack kept, Stats disabled.** 4357 brute force attacks blocked — removing Jetpack is not worth the security regression. GA4 replaces Jetpack Stats.
- **GA4 is the analytics source of truth** for wolfthemes.com. Site Kit handles the integration.
- **No LinkedIn promotion.** Active job search creates a conflict of interest between personal brand and commercial product promotion.
- **Focus: wolfthemes.com store, not ThemeForest.** ThemeForest is passive revenue. wolfthemes.com is the growth lever — all marketing effort goes there.

---

## Social Platform Priority

1. Pinterest — primary (pro account live + on Buffer since 2026-06-25)
2. Instagram — primary
3. Facebook — secondary
4. X (Twitter) — dropped 2026-06-25 (removed from Buffer)
5. LinkedIn — never (see decision above)

---

## Agent Outputs

- Reports: `output/reports/YYYY-MM-DD.md`
- Content log: `output/content-log.md`
- Tools: `output/tools/wolfthemes-card-generator.html`, `output/tools/wolfthemes-freemius-dashboard.html`
