# Tasks

## Active

> Ordered by priority. P0 = launch-blocking infra/deploy → P1 = quick wins (small CSS/copy fixes) → P2 = needs more attention (design/build) → P3 = do last (perf + animation polish).

### P0 — Launch-critical (must be ready on prod by 2026-06-30 eve)

- [ ] **Renew SSL certificate** — wolfthemes.store and wolfthemes.cloud domains — ⚠️ must be done before end of June 2026-06-30
- [ ] **prod: redeploy all Freemius themes** (from inbox 2026-06-23)
- [ ] **staging website: set _Available Post Types_ taxonomy for each theme**
- [ ] **seijaku-fse: need all images set** (hero and inner images)

### P1 — Quick wins (small CSS/copy fixes, easy)

- [ ] **seijaku-fse: footer intro**
- [ ] **seijaku-fse: technicals styling (link color)** - which is defatul text llink appearance on hover

### P2 — Needs more attention (design / build / copy)

- [x] **seijaku-fse: sticky menu**
- [ ] **seijaku-fse: mobile menu design** — redesign hamburger with a better opening animation; move the hamburger to the right of the nav bar; the open menu panel currently renders cramped in the top-right (see screenshots) and needs a proper full-width/overlay treatment
- [ ] **CRO: homepage CTA/messaging review** — feels like it's missing a clear value/solution hook ("here's the solution to your problem" / "my themes can help you make money"). Plus a lighter CRO refinement pass on the single theme page (already in good shape)
- [ ] **wolf-store: audit single theme pages** — meticulous, pixel-level design/QA pass (spacing, alignment, responsive, polish)
- [ ] **wolf-store: audit filter and overall archive UI**
- [x] **wolf-store: theme archive load more pagination**
- [x] **seijaku-fse: form styling** — contact form and Mailchimp form (input and textarea helper with transparent bg)
- [ ] **seijaku-fse: blog template design**
- [x] **seijaku-fse: maintenance / coming soon template**
- [ ] **seijaku-fse: details/toggle WP block styling** — paragraph content padding causing laggy animation. Removing padding fixes it, but we must find a way to add space below the content paragraph
- [ ] **wolf-blocks/testimonial: add author avatar** — round badge showing the first letter of the author's name

### P3 — Do last (perf + animation polish)

- [ ] **seijaku-fse: animation engine** for subtle entrance and scrolling animation
- [ ] **Performance optimization pass** (after card/archive work — see STATUS.md)

## Waiting On

- [ ] NNC trader bot — demo and prod mode functional; next step: add lot-size cap, SL tightness guard, and review worst-case scenario safeguards

## Someday

- [ ] Buffer social posting script (Python, source: themeforest positioning DB)
- [ ] nvim: Spectre keybindings — `<leader>sr` (search/replace), `<leader>R` create entry in a Nvim doc
- [ ] Envato license manager: add slug detection in activation process
- [ ] wolf-supertheme: implement "loader once" pattern from Aurenza to more themes
- [ ] AI agent: market report generator
- [ ] AI agent: Freemius + Envato sales analyser
- [ ] AI agent: email replier
