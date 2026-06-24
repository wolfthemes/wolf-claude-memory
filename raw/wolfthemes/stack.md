# WolfThemes Stack Reference

## Analytics & Marketing Stack

| Item | Value |
|---|---|
| GA4 Account | WolfThemes Demos (332808602) |
| GA4 Property — wolfthemes.com | WolfThemes Store (Measurement ID: retrieve from GA4 Admin → Data Streams) |
| GA4 Property — demos | 462979681 |
| GTM Container — demos | GTM-WSKJDHHW |
| Freemius Store ID | 15308 |
| Freemius Public Key | pk_bb83a1207447e899f7ddce7a17a1f |
| Freemius Secret Key | `.env` only — never commit |
| Buffer Org | 66e40cad8a27b612c7a0ccd3 |
| Buffer Facebook | 66e40ccdca3dab3e0a3c25e2 |
| Buffer Twitter/X | 66e40e3aca3dab3e0a56dc9c |
| Buffer Instagram | 66e40ce7ca3dab3e0a3d7bc0 |
| Social card generator | output/tools/wolfthemes-card-generator.html |
| Freemius dashboard | output/tools/wolfthemes-freemius-dashboard.html |

---

## Decisions (2026-06-24)

- **Jetpack kept** for brute force protection (4357 attacks blocked). Jetpack Stats disabled — GA4 + Site Kit used instead.
- **GA4 live** on wolfthemes.com via Site Kit.
- **No LinkedIn promotion** — active job search creates conflict of interest.
- **Focus: wolfthemes.com store**, not ThemeForest. ThemeForest = passive revenue; wolfthemes.com = growth lever.
