#!/usr/bin/env node
/**
 * Capture screenshots of WolfThemes preview sites for Pinterest and social media.
 * Run locally — preview.wolfthemes.store requires local access.
 *
 * Usage:
 *   npm install playwright
 *   npx playwright install chromium
 *   node raw/themes/screenshot.js [slug]        # one theme
 *   node raw/themes/screenshot.js               # all themes
 *
 * Output: raw/themes/{slug}/screenshots/
 *   - hero.jpg   1000×1500 — above-the-fold, 2:3 ratio (Pinterest primary)
 *   - wide.jpg   1600×900  — above-the-fold, 16:9 ratio (Instagram/Facebook)
 *   - full.jpg   1000×Npx  — full-page tall pin (Pinterest, capped 6000px)
 *
 * Animation handling:
 *   Scrolls through the full page to trigger scroll-reveal animations,
 *   waits for Slider Revolution to complete its intro, then freezes all
 *   CSS animations before capturing so nothing is mid-transition.
 */

import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));

const SLUGS = [
  'decibel', 'spectacle', 'loud', 'phase', 'swingster',
  'kayo', 'effigy', 'beatit', 'overable',
  'bronze', 'snakepit',
  'herion', 'soundkraft',
  'notescape', 'speaker', 'tune', 'zample',
  'reinar', 'glytch', 'gainlab',
  'omnity', 'vonzot',
  'sable', 'nu', 'yor', 'retine', 'mediafoundry', 'clix',
  'morvan', 'prequelle', 'alceste', 'slikk', 'seijaku',
  'deadlift', 'nordkapp', 'covenant', 'unimate', 'hares',
  'tattoopress', 'eightpulse', 'elsass', 'aurenza',
  'poize', 'megahertz', 'milu', 'staaw', 'superflick',
];

const PREVIEW_BASE = 'https://preview.wolfthemes.store';

const PINTEREST_W  = 1000;
const PINTEREST_H  = 1500;
const WIDE_W       = 1600;
const WIDE_H       = 900;
const MAX_FULL_H   = 6000;

// Extra ms to wait after Slider Revolution / WPBakery animations have fired.
const POST_SCROLL_WAIT = 1500;

/**
 * Scroll slowly through the full page so that IntersectionObserver-based
 * scroll-reveals (WPBakery, AOS, WOW.js, etc.) all get triggered.
 * Then scroll back to top and freeze every CSS animation/transition
 * so the screenshot captures the fully-loaded, unanimated state.
 */
async function prepareForScreenshot(page) {
  // 1. Wait for Slider Revolution intro (if present) — RS fires a custom event
  await page.evaluate(() =>
    new Promise((resolve) => {
      // If RS is not present, resolve immediately after 2s
      const fallback = setTimeout(resolve, 2000);
      try {
        jQuery(window).on('revolution.slide.onloaded', () => {
          clearTimeout(fallback);
          // Let the first slide animation play through
          setTimeout(resolve, 800);
        });
      } catch {
        // jQuery not available
      }
    })
  ).catch(() => {}); // ignore if jQuery/RS absent

  // 2. Scroll through the entire page in steps to trigger scroll-reveal animations
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      const step = 200;           // px per tick
      const interval = 80;        // ms between ticks
      let y = 0;
      const max = document.body.scrollHeight;
      const timer = setInterval(() => {
        y += step;
        window.scrollTo(0, y);
        if (y >= max) {
          clearInterval(timer);
          window.scrollTo(0, 0);  // back to top
          resolve();
        }
      }, interval);
    });
  });

  // 3. Short pause for any post-scroll animations to settle
  await page.waitForTimeout(POST_SCROLL_WAIT);

  // 4. Freeze all CSS animations and transitions at their current state
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-play-state: paused !important;
        transition-duration: 0ms !important;
      }
      /* Keep Slider Revolution slides visible */
      .tp-revslider-mainul > li { visibility: visible !important; }
    `,
  });

  // 5. Scroll back to absolute top (some themes animate the hero on scroll-up)
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
}

async function screenshotTheme(slug) {
  const url = `${PREVIEW_BASE}/${slug}/`;
  const outDir = join(__dir, slug, 'screenshots');
  mkdirSync(outDir, { recursive: true });

  console.log(`→ ${slug}`);

  const browser = await chromium.launch();

  try {
    // ── Pinterest hero + full page ────────────────────────────────────────
    const pin = await browser.newPage();
    await pin.setViewportSize({ width: PINTEREST_W, height: PINTEREST_H });
    await pin.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await prepareForScreenshot(pin);

    await pin.screenshot({
      path: join(outDir, 'hero.jpg'),
      clip: { x: 0, y: 0, width: PINTEREST_W, height: PINTEREST_H },
      type: 'jpeg',
      quality: 92,
    });
    console.log('  ✓ hero.jpg');

    const pageH = await pin.evaluate(() => document.body.scrollHeight);
    const fullH = Math.min(pageH, MAX_FULL_H);
    await pin.evaluate((h) => {
      // Expand viewport to fit the full page for the tall screenshot
      document.documentElement.style.height = h + 'px';
    }, fullH);
    await pin.screenshot({
      path: join(outDir, 'full.jpg'),
      clip: { x: 0, y: 0, width: PINTEREST_W, height: fullH },
      type: 'jpeg',
      quality: 85,
    });
    console.log(`  ✓ full.jpg (${fullH}px)`);
    await pin.close();

    // ── Wide crop (Instagram / Facebook) ─────────────────────────────────
    const wide = await browser.newPage();
    await wide.setViewportSize({ width: WIDE_W, height: WIDE_H });
    await wide.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await prepareForScreenshot(wide);

    await wide.screenshot({
      path: join(outDir, 'wide.jpg'),
      clip: { x: 0, y: 0, width: WIDE_W, height: WIDE_H },
      type: 'jpeg',
      quality: 92,
    });
    console.log('  ✓ wide.jpg');
    await wide.close();

  } catch (err) {
    console.error(`  ✗ ${slug}: ${err.message}`);
  } finally {
    await browser.close();
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────
const arg = process.argv[2];
const targets = arg ? [arg] : SLUGS;

(async () => {
  for (const slug of targets) {
    await screenshotTheme(slug);
  }
  console.log('\nDone. Screenshots in raw/themes/{slug}/screenshots/');
})();
