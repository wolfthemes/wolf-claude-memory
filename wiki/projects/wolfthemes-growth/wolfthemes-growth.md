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
- **Two audiences:**
  - **Warm list** — the existing ~1,000 subscribers (cold, sub-1% CTR; needs re-engagement). Gets the [[launch-newsletter]] directly.
  - **Imported buyers** — **6,187 unique customers** exported from Ticksy (the real customer record; Gmail held almost none). Source: `raw/ticksy-customers.csv` (gitignored PII). Segmented into `raw/segments/` (gitignored):
    - `repeat-buyers.csv` — **1,398** (>1 purchase; gold segment, send first)
    - `single-buyers.csv` — 3,535
    - `no-purchase.csv` — 1,254 (support-only; lowest priority, highest GDPR caution)
- **Consent flow (GDPR, FR):** imported buyers never opted into marketing → they get the [[optin-reengagement-email]] **first**; only confirmers receive the [[launch-newsletter]] promo. Starting with repeat-buyers protects sender reputation. The 300/day free cap means ~21 days to reach all 6k — hence the paid month to compress it into the launch window.

## Open threads

- Pinterest not yet activated — highest-leverage untapped channel.
- Buffer social posting script (Someday) would automate the cadence.
- Homepage value/solution hook still missing (CRO task).
