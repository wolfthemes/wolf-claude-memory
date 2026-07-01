# Tasks

> Priority tags: **P0** launch-blocking → **P1** quick win → **P2** design/build → **P3** polish.

---

## 🎉 After Launch

- [x] **Post social posts** — execute the scheduled queue
- [ ] **Check all theme gallery images** — audit every single theme page gallery after launch
- [ ] **D+2 non-opener reminder** — check non-opener count after launch email; if segment large enough, send reminder on 2026-07-03
- [ ] **Check each Brevo segment step by step after each campaign** — verify contact counts, open/click rates, suppression accuracy
- [ ] **Create Freemius buyer list to exclude from reminder campaigns** — prevent paying customers from receiving opt-in/reminder cold emails
- [x] **Redirect staging → wolfthemes.com for non-logged-in visitors** — later: add IP restriction plugin

---

## By project

### seijaku-fse

- [x] **wolfthemes-banner: CTA button hover effect** (P2)
- [x] **wolfthemes-banner: hide banner if referrer is wolfthemes.com** (P2) — don't show the banner to visitors already on the store
- [ ] **animation engine** (P3) — possibly apply hero text anim to other pages (Music Themes page, Services page mostly)
- [ ] **freelance availability: services page + footer CTA** (P3) — emphasize freelance availability in the services section; add a small CTA in the footer
- [ ] **reorganize SCSS folder** (P3) — forms styles need to move out of current location into a more logical folder
- [x] **animated arrow on button** (P3) — add animated arrow effect to CTA buttons
- [ ] **menu CTA copy** (P2) — change to "Start a custom project" or similar freelance-appealing label
- [ ] **freelance services page** (P2) — new page similar to services, focused on showcasing freelance services
- [ ] **convert logo to single SVG** (P3) — one SVG logo for all contexts, flexible color via CSS (replace current light/dark variants)

### wolf-store

- [x] **audit single theme pages** (P2) — meticulous, pixel-level design/QA pass (spacing, alignment, responsive, polish)
- [ ] **audit filter and overall archive UI** (P2)
- [ ] **single theme page: stack image gallery on mobile** (P1) — gallery images should stack vertically on mobile instead of horizontal scroll/grid
- [x] **Fix ThemeForest link in comparison table** - "view on ThemeForest" link broken in comparison table
- [x] **Fix theme_post_type taxonomy returning all featured themes** - e.g. https://wolfthemes.com/theme-post-type/events/ returns all featured themes instead of a filtered set

### wolf-blocks

- [ ] **testimonial: add author avatar** (P2) — round badge showing the first letter of the author's name
- [ ] **reorganize/refactor Functions folder** (P3) — clean up structure of the Functions directory

### CRO / marketing

- [ ] **homepage CTA/messaging review** (P2) — missing a clear value/solution hook ("here's the solution to your problem"). Plus a lighter CRO pass on the single theme page
- [ ] **social posts + newsletter schedule** (P2) — set up proper Buffer posting schedule alongside a separate newsletter cadence
- [ ] **Blog posts to drive organic traffic** (P2) — write blog content targeting relevant searches; evaluate fit and potential topics
- [ ] **Rehab blog posts** - create blog styles and new posts

### wolfthemes-wiki

- [ ] **Check uncommitted local pages** - investigate why wolfthemes-wiki has uncommitted local pages

### wolf-demos

- [ ] **Fix demo bug** - https://preview.wolfthemes.store/notescape/
- [ ] **Investigate demo redirect issue** - some theme demos redirect landing/?ref=wolftheme to root /landin, most likely a cache issue

### wolfthemes.com

- [ ] **Double-check IP exclusion from analytics**
- [ ] **Optimize assets.wolfthemes.cloud image cache** - see PageSpeed report: https://pagespeed.web.dev/analysis/https-wolfthemes-com/9xa8wsbq7j?form_factor=desktop&hl=fr
- [ ] **wolfthemes.com: rendre le site traduisible** (P2) — internationalisation du site principal wolfthemes.com (i18n/l10n)

---

## Waiting On

- [ ] **NNC trader bot** — demo and prod mode functional; next: add lot-size cap, SL tightness guard, and review worst-case scenario safeguards

---

## Someday

- [ ] **Define versioning strategy in CI/CD workflows** — how to handle theme/plugin version bumps in the deploy pipeline
- [ ] **wolf-supertheme: Elementor site width default** (P1) — default site-width setting not applied out of the box
- [ ] Buffer social posting script (Python, source: themeforest positioning DB)
- [ ] nvim: Spectre keybindings — `<leader>sr` (search/replace), `<leader>R` create entry in a Nvim doc
- [ ] Envato license manager: add slug detection in activation process
- [ ] wolf-supertheme: implement "loader once" pattern from Aurenza to more themes
- [ ] AI agent: market report generator
- [ ] AI agent: Freemius + Envato sales analyser
- [ ] AI agent: email replier
- [ ] AI agent: "consultant" — reviews this vault's git history + TASKS/Inbox patterns to spot repeated manual work and propose automations/process fixes
