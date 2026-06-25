# Tasks

> Priority tags: **P0** launch-blocking → **P1** quick win → **P2** design/build → **P3** polish.
> Top two sections cut across projects; everything else is grouped by project.

## 🚀 Launch-critical (P0 — prod by 2026-06-30 eve)

- [ ] **Renew SSL certificate** — wolfthemes.store and wolfthemes.cloud domains — ⚠️ before end of 2026-06-30
- [ ] **prod: redeploy all Freemius themes** (from inbox 2026-06-23)
- [ ] **test Freemius user workflow** — theme install + activation end-to-end (from inbox 2026-06-25)
- [ ] **export Ticksy contacts** (tomorrow 2026-06-26) — buyer email + theme purchased; the warm-customer list lives in Ticksy, not Gmail. Drop CSV in `raw/` for dedupe/segmentation. See [[wolfthemes-growth]]
- [x] **seijaku-fse: all images set** — hero and inner images

## ⚡ Quick wins (small CSS/copy fixes)

- [ ] **seijaku-fse: technicals styling (link color)** — default text-link appearance on hover

## By project

### seijaku-fse

- [ ] **mobile menu design** (P2) — redesign hamburger with a better opening animation; move it to the right of the nav bar; the open panel currently renders cramped in the top-right (see screenshots) and needs a proper full-width/overlay treatment
- [ ] **details/toggle WP block styling** (P2) — paragraph padding causes laggy animation. Removing padding fixes it, but we need a way to keep space below the content paragraph
- [ ] **home story section** (P2) — try switching to a light background (from inbox 2026-06-25)
- [ ] **animation engine** (P3) — subtle entrance and scroll animation
- [ ] **home hero twist** (P3) — add a subtle visual element (brushstroke, animated word, italic/serif accent) to make the hero more distinctive

### wolf-store

- [ ] **single theme page mobile spacing** (P2) — spacing issues on mobile viewport
- [ ] **theme page comparison table badge position** (P2) — mimic the badge position used in service pricing tables
- [ ] **audit single theme pages** (P2) — meticulous, pixel-level design/QA pass (spacing, alignment, responsive, polish)
- [ ] **audit filter and overall archive UI** (P2)

### wolf-blocks

- [ ] **testimonial: add author avatar** (P2) — round badge showing the first letter of the author's name

### CRO / marketing

- [ ] **homepage CTA/messaging review** (P2) — missing a clear value/solution hook ("here's the solution to your problem" / "my themes can help you make money"). Plus a lighter CRO pass on the single theme page (already in good shape)

### Performance

- [ ] **optimization pass** (P3) — after card/archive work (see STATUS.md)

## Waiting On

- [ ] **NNC trader bot** — demo and prod mode functional; next: add lot-size cap, SL tightness guard, and review worst-case scenario safeguards

## Someday

- [ ] Buffer social posting script (Python, source: themeforest positioning DB)
- [ ] nvim: Spectre keybindings — `<leader>sr` (search/replace), `<leader>R` create entry in a Nvim doc
- [ ] Envato license manager: add slug detection in activation process
- [ ] wolf-supertheme: implement "loader once" pattern from Aurenza to more themes
- [ ] AI agent: market report generator
- [ ] AI agent: Freemius + Envato sales analyser
- [ ] AI agent: email replier
- [ ] AI agent: "consultant" — reviews this vault's git history + TASKS/Inbox patterns to spot repeated manual work and propose automations/process fixes (meta-optimization, not a marketing agent)
