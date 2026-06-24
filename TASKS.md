# Tasks

## Active

> Ordered by priority. P0 = launch-blocking infra/deploy → P1 = quick wins (small CSS/copy fixes) → P2 = needs more attention (design/build) → P3 = do last (perf + animation polish).

### P0 — Launch-critical (must be ready on prod by 2026-06-30 eve)

- [ ] **Renew SSL certificate** — wolfthemes.store and wolfthemes.cloud domains — ⚠️ must be done before end of June 2026-06-30
- [ ] **prod: redeploy all freemius themes** (from inbox 2026-06-23)
- [ ] **staging: check purchase link for each theme** (from inbox 2026-06-23)
- [ ] **staging website: set _Available Post Types_ taxonomy for each theme**
- [ ] **seijaku-fse: need all images set** (hero and inner images)

### P1 — Quick wins (small CSS/copy fixes, easy)

- [ ] **seijaku-fse: home story section pullquote** — move the border back to the left
- [ ] **seijaku-fse: home testimonials section** — update "500+ 5-star reviews" to "1000+" (more accurate)
- [ ] **link hover color in `is-dark` sections** needs fixing
- [ ] **wolf-store: increase z-index of single-theme pricing box** so it overlaps the theme description section below the hero
- [ ] **wolf-store: single theme features section wrapper width / lateral padding** needs attention
- [ ] **wolf-store: single theme "related themes" section wrapper width / lateral padding** — same issue as the features section (likely one shared container rule)
- [ ] **wolf-store: theme card width on mobile**
- [ ] **wolf-store: make theme card cat badge clickable** (from inbox 2026-06-23)
- [ ] **decrease `wolf-section-pad--big` padding on mobile**
- [ ] **seijaku-fse: form submit button sizing** — match padding and font-size of the default `wp-element-button`
- [ ] **seijaku-fse: paragraph max-width** — check if a default WP class is available before building custom
- [ ] **seijaku-fse: eyebrow tagline helper class** — common muted-text helper for all secondary/eyebrow taglines, for coherence
- [ ] **seijaku-fse: tagline max-width helper class** — e.g. tagline above pricing table on services page
- [ ] **seijaku-fse: default page padding top/bottom**
- [ ] **seijaku-fse: footer intro**
- [ ] **seijaku-fse: technicals styling (link color)**
- [ ] **wolf-store: add available post types to technicals section**

### P2 — Needs more attention (design / build / copy)

- [ ] **CRO: homepage CTA/messaging review** — feels like it's missing a clear value/solution hook ("here's the solution to your problem" / "my themes can help you make money"). Plus a lighter CRO refinement pass on the single theme page (already in good shape)
- [ ] **wolf-store: theme card style refinement** — part of redesign sprint, see wiki/projects/wolfthemes-redesign
- [ ] **wolf-store: audit single theme pages** — meticulous, pixel-level design/QA pass (spacing, alignment, responsive, polish)
- [ ] **wolf-store: audit filter and overall archive UI**
- [ ] **wolf-store: theme archive load more pagination**
- [ ] **seijaku-fse: form styling** — contact form and Mailchimp form (input and textarea helper with transparent bg)
- [ ] **seijaku-fse: sticky menu**
- [ ] **seijaku-fse: mobile menu design** — redesign hamburger with a better opening animation; move the hamburger to the right of the nav bar; the open menu panel currently renders cramped in the top-right (see screenshots) and needs a proper full-width/overlay treatment
- [ ] **seijaku-fse: blog template design**
- [ ] **seijaku-fse: maintenance / coming soon template**
- [ ] **seijaku-fse: details/toggle WP block styling** — paragraph content padding causing laggy animation. Removing padding fixes it, but we must find a way to add space below the content paragraph
- [ ] **wolf-blocks/testimonial: add author avatar** — round badge showing the first letter of the author's name
- [ ] **wolf-blocks: add more icons to feature grid item**
- [ ] **wolf-blocks/stats-counter: add paragraph detail field** — shown under the number and subtitle (e.g. under "4.5/5 rating", "Out of 1600+ reviews, users have left positive reviews for these awesome products")

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

## Done

- [x] **Send newsletter** (Mailchimp) — 2026-06-23
- [x] Social posts to promote WolfThemes store launch (1 July)
- [x] **seijaku-fse: music themes page**
- [x] **staging: push new FSE theme/plugins**
- [x] **seijaku-fse: hero collage thumbnails jump down after animation finishes** (fix)
- [x] **wolf-store: Awwwards nominee ribbon** + ribbon image asset
- [x] **Explore Neuform as a Claude design-context source** (neuform.ai DESIGN.md exports)
- [x] Review design references — supahero.io + 2 FB videos
- [x] Aurenza: fire loader only on first load (cookie / localStorage)

