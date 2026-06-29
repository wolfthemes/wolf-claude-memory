# Tasks

> Priority tags: **P0** launch-blocking → **P1** quick win → **P2** design/build → **P3** polish.
> Top two sections cut across projects; everything else is grouped by project.

## 🚀 Launch-critical (P0 — prod by 2026-06-30 eve)

- [ ] **Brevo: build subscription form** (2026-06-26) — feeds the **Marketing Confirmed** list; it's the target of the opt-in re-permission email's button (records consent w/ timestamp+IP). Then promo sends to Warm Opt In #3 + Marketing Confirmed. See [[optin-reengagement-email]]. Form should inherit Mailchimp form structure/styling.
- [ ] **Brevo: re-test subscription form success message** (from inbox 2026-06-27) — verify form submission, list assignment, and consent recording after build

## ⚡ Quick wins (small CSS/copy fixes)

- [x] **seijaku-fse: fix newsletter menu position** (P1, from inbox 2026-06-28) — menu position broken in newsletter section
- [ ] **seijaku-fse: technicals styling (link color)** — default text-link appearance on hover
- [ ] **seijaku-fse: music themes hero page "explore" button doesn't scroll** (P1 bug) — button in music themes hero section has no scroll behavior
- [ ] **seijaku-fse: Technicals section category label style** (P1) — category label needs white background style
- [ ] **wolf-supertheme: Elementor site width default** (from inbox 2026-06-26) — default site-width setting not applied out of the box

## By project

### seijaku-fse

- [x] **details/toggle WP block styling** (P2) — paragraph padding causes laggy animation. Proposed fix: add a `::after` pseudo-element with `height/min-height/block-size: var(--wp--preset--spacing--5)` on `.wp-block-details .wp-block-paragraph` instead of padding. Needs testing.
- [ ] **animation engine** (P3) — subtle entrance and scroll animation. Ideas: animate mobile menu items on panel open; animate home hero text on page load
- [ ] **home hero twist** (P3) — add a subtle visual element; candidate: brushstroke effect from the Nu theme
- [ ] **freelance availability: services page + footer CTA** (P3) — emphasize freelance availability in the services section; add a small CTA in the footer
- [ ] **music themes testimonials: missing author name** (P2) — testimonials on music themes page are missing the author name
- [x] **split deploy tasks in 2 files** (P3) — deployment task is currently one file; split into 2 for clarity
- [ ] **reorganize SCSS folder** (P3, from inbox 2026-06-27) — forms styles need to move out of current location into a more logical folder

### wolf-store

- [x] **theme card: resized thumbnail variant** (P2, from inbox 2026-06-28) — resized version of thumbnail for the theme card grid
- [x] **theme card: full-width bug when single result** (P1, from inbox 2026-06-28) — theme card takes full width when only one theme in result set
- [x] **theme category filter returns nothing intermittently** (P1, from inbox 2026-06-28) — category filter bug; sometimes returns no results
- [ ] **single theme page mobile spacing** (P2) — spacing issues on mobile viewport
- [ ] **theme page comparison table badge position** (P2) — mimic the badge position used in service pricing tables
- [ ] **audit single theme pages** (P2) — meticulous, pixel-level design/QA pass (spacing, alignment, responsive, polish)
- [ ] **audit filter and overall archive UI** (P2)

### guty

- [x] **cover element simplification** (P2)

### wolf-blocks

- [ ] **testimonial: add author avatar** (P2) — round badge showing the first letter of the author's name
- [x] **declare custom wolf blocks as available Gutenberg elements** (P2, from inbox 2026-06-27) — register blocks so they appear/are selectable in the Gutenberg inserter
- [ ] **reorganize/refactor Functions folder** (P3, from inbox 2026-06-27) — clean up structure of the Functions directory

### CRO / marketing

- [ ] **homepage CTA/messaging review** (P2) — missing a clear value/solution hook ("here's the solution to your problem" / "my themes can help you make money"). Plus a lighter CRO pass on the single theme page (already in good shape)
- [ ] **social posts + newsletter schedule** (P2, from inbox 2026-06-27) — set up proper Buffer posting schedule alongside a separate newsletter cadence
- [ ] **Schedule social posts** (P1, from inbox 2026-06-28) — queue launch posts; consider 30% off offer in copy (separate from the cadence/schedule setup above)
- [ ] **Blog posts to drive organic traffic** (P2, from inbox 2026-06-28) — idea: write blog content targeting relevant searches; evaluate fit and potential topics

### Performance

- [ ] **optimization pass** (P3) — after card/archive work; evaluate Autoptimize; check "Includes" label (white checkmark variant)

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


