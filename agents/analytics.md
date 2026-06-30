# Analytics Agent — WolfThemes

## Purpose

Run a weekly analytics report every Monday covering revenue, traffic, and social performance for wolfthemes.com. Write the report to `output/reports/YYYY-MM-DD.md` and flag alerts.

---

## Data Sources

### Freemius REST API
- Store ID: `15308`
- Public key: `pk_bb83a1207447e899f7ddce7a17a1f`
- Secret key: `$FREEMIUS_SECRET_KEY` (`.env` only — never commit)
- Base URL: `https://api.freemius.com/v1/stores/15308/`
- Auth: HTTP Basic — username = `sk_` + secret key, password empty

### GA4
- Account: WolfThemes Demos (332808602)
- Property: WolfThemes Store — Measurement ID to fill once retrieved from GA4 Admin → Data Streams
- Tag active on wolfthemes.com via Site Kit
- MCP: Google Analytics (not yet connected — wire up before first run)

### Brevo
- MCP: Brevo (connected)
- Fetch email campaigns sent in the last 7 days via `get_email_campaigns`
- For each campaign: name, subject, sent date, delivered, open rate, click rate, unsubscribe rate
- Use `campaign_analytics_get_ab_test_campaign_result` for any A/B campaigns

### Buffer
- Organization: `66e40cad8a27b612c7a0ccd3`
- Channels:
  - Facebook: `66e40ccdca3dab3e0a3c25e2`
  - Twitter/X: `66e40e3aca3dab3e0a56dc9c`
  - Instagram: `66e40ce7ca3dab3e0a3d7bc0`
- MCP: Buffer (connected)

---

## Weekly Report Routine (every Monday)

1. **Freemius** — fetch for last 7 days:
   - Gross revenue
   - New customers
   - Active subscriptions
   - Top-selling plugin_id

2. **GA4** — fetch for last 7 days:
   - Sessions and pageviews
   - Top 5 pages by pageviews
   - Traffic sources (channel breakdown)
   - Bounce rate for wolfthemes.com

3. **Brevo** — fetch for last 7 days:
   - Campaigns sent (name, subject, send date)
   - Delivered, open rate, click rate, unsubscribe rate per campaign
   - Flag any campaign with open rate < 20% or unsubscribe rate > 1%

4. **Buffer** — fetch for last 7 days:
   - Posts sent
   - Best-performing post by engagement (likes + shares + clicks)

5. **Compare** — if a previous report exists in `output/reports/`, diff key metrics week-over-week and include delta in the report.

6. **Alerts** — flag if any condition is met:
   - Revenue < $200/week
   - Bounce rate > 80%
   - 0 sales in any 3-day window

7. **Write** report to `output/reports/YYYY-MM-DD.md` (date = Monday of the report week).

---

## Report Format

```
# WolfThemes Weekly Report — YYYY-MM-DD

## Summary
[5 lines max. Key numbers, one notable win, one concern.]

## Revenue
[Gross, new customers, active subs, top product. WoW delta.]

## Traffic
[Sessions, pageviews, top 5 pages, sources, bounce rate. WoW delta.]

## Email
[Campaigns sent, open rate, click rate, unsubscribes. Any alerts.]

## Social
[Posts sent, best post (platform + engagement score).]

## Alerts
[List any triggered alerts, or "None".]

## Recommendations
[2–3 concrete next actions based on the data.]
```

---

## Constraints

- Never commit or log `FREEMIUS_SECRET_KEY`.
- Do not post reports publicly — `output/` is local only.
- If a data source is unreachable, note it in the report and proceed with available data.
- GA4 MCP must be connected before the first automated run — see setup note above.
