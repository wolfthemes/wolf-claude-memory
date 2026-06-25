# WolfThemes Growth

The initiative to drive customers to the new wolfthemes.com store (live 2026-07-01) — the first real direct-marketing effort after 14 years of relying on ThemeForest for discovery.

Started 2026-06-25. Status: **kicking off — gated on launch.**

---

## Why now: the exclusivity switch

For 14 years WolfThemes sold on ThemeForest as an **exclusive author** — themes could only be sold through TF, and Envato owned discovery completely, so the direct-marketing muscle was never built. As of 2026-07-01 the author status changes to **non-exclusive**, which allows selling the same themes directly through an owned store at wolfthemes.com.

This is the first time WolfThemes owns its own sales channel and must generate its own traffic. From 2026-07-01 onward the central goal is to **drive customers to the new store**. See [[audience-building-strategy]] for the diagnosis and playbook.

## The three objectives

These are one funnel, ordered by stage. Each feeds the next — don't optimize a later stage while an earlier one leaks.

1. **Grow audience** — build a following that has a reason to follow beyond product shots. Owned channels (social, Pinterest, newsletter) instead of renting marketplace reach. The real metric is qualified attention, not raw follower count.
2. **Drive visitors to wolfthemes.com** — convert that attention into clicks to the store. **Clicks, not followers, are the success metric** — a small audience that clicks beats a large passive one.
3. **Generate sales** — convert store visitors into buyers (Freemius + Envato). CRO on the homepage and single theme pages, and a clear value/solution hook, sit here.

## Where the work lives

- **Strategy / content playbook:** [[audience-building-strategy]] — content mix (30% product / 70% value), per-network priority (Pinterest #1), tactics, timing.
- **Measurement:** [[analytics-marketing-stack]] — GA4, Freemius, Buffer; how clicks and sales get tracked.
- **Visual assets:** [[demo-screenshot-pipeline]] — how promo screenshots get selected from the demo-page inventory and stored.
- **Conversion surfaces:** the wolf-store single theme pages and homepage — see [[wolf-store]] and CRO tasks in TASKS.md.
- **Store launch:** depends on [[wolfthemes-redesign]] shipping and the 2026-07-01 launch (post-launch checklist in STATUS.md).

## Email list & ESP (decided 2026-06-25)

- **ESP: Brevo.** Free tier = unlimited contacts, 300 emails/day. Mailchimp free (500 contacts) was too small. Paying ~€9 Starter for the **first launch month** to lift the daily cap and gain momentum within the tight launch window. No connector exists for any ESP — content is drafted here and pasted in manually.
- **Final cleaned lists** (Ticksy 6,187 + Mailchimp 965 subscribed, deduped within & across, unsubscribes/bounces suppressed, fakes removed). Ready-to-import files live in `raw/brevo-import/` (gitignored PII) — see its README. **Total unique emailable: 6,994.**

| Segment                    | File                        | Count     | Consent              |
| -------------------------- | --------------------------- | --------- | -------------------- |
| Warm                       | `01_warm_optin.csv`         | **963**   | opted-in (Mailchimp) |
| Cold — repeat buyers       | `02_cold_repeat_buyers.csv` | **1,363** | needs opt-in         |
| Cold — single buyers       | `03` + `04`                 | **4,668** | needs opt-in         |
| Suppression (unsub+bounce) | `05_suppression.csv`        | 250       | do-not-email         |
| Rejected (fake/invalid)    | `06_rejected_emails.csv`    | 30        | excluded             |

In Brevo the single-buyer (`03`, 3,464) and no-purchase (`04`, 1,204) files were merged into one list (#5, 4,668): a "no purchase" Ticksy contact is almost always a presales/general-support ticket, not a distinct audience, and both tiers receive the same opt-in email anyway. **Brevo lists:** Warm Opt In #3 (963), Cold — repeat buyers #4 (1,363), Cold — single buyers #5 (4,668), Suppressed #2 (251).

- **Brevo sizing:** contacts are effectively unlimited on any plan (ignore the contact slider). Size only on **emails/month** (~10–11k in the launch month). Free = 300/day; a paid Starter month lifts that to blast same-day if wanted, but a cold account should ramp slowly regardless.

## Email campaign plan — by consent status

Two tracks. **Never cross them**: cold leads must opt in before they see a promo.

**Track A — Warm (963, opted-in):**
1. Launch day (2026-07-01): [[launch-newsletter]] — 20% promo, direct.
2. D+2: last-chance reminder to non-openers.

**Track B — Cold (6,031 buyers, no marketing consent):**
1. Import `05_suppression.csv` as a blocklist **first**.
2. Send [[optin-reengagement-email]] (re-permission, soft) in order: repeat buyers (#4) → single buyers (#5). Repeat-buyers first warms sender reputation.
3. Only **opt-in confirmers** graduate into the promo list and then receive the [[launch-newsletter]] (+ D+2 reminder).

Rationale: GDPR (FR) — buyers/support contacts never consented to marketing; emailing them a promo cold is both non-compliant and a deliverability/suspension risk for a fresh sender. The opt-in gate converts the 6k into a clean, consented marketing list over time.

## Open threads

- Pinterest not yet activated — highest-leverage untapped channel.
- Buffer social posting script (Someday) would automate the cadence.
- Homepage value/solution hook still missing (CRO task).
