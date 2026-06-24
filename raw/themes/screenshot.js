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
 *   - hero.jpg        — above-the-fold at 2:3 (Pinterest primary)
 *   - full.jpg        — full-page scroll (Pinterest tall pin)
 *   - wide.jpg        — wide desktop crop (Instagram/Facebook)
 */

import { chromium } from 'playwright';
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
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
const WAIT_MS = 3000; // wait for animations/lazy-load

// Pinterest: 2:3 ratio. Hero = first 1500px of a 1000px-wide viewport.
const PINTEREST_W = 1000;
const PINTEREST_H = 1500;

// Full-page max height (avoids 30 000px monstrosities)
const MAX_FULL_HEIGHT = 6000;

// Wide crop for Instagram/Facebook (16:9-ish)
const WIDE_W = 1600;
const WIDE_H = 900;

async function screenshot(slug) {
  const url = `${PREVIEW_BASE}/${slug}/`;
  const outDir = join(__dir, slug, 'screenshots');
  mkdirSync(outDir, { recursive: true });

  console.log(`→ ${slug}`);

  const browser = await chromium.launch();

  try {
    // ── Hero + full-page (Pinterest) ─────────────────────────────────────
    const pagePin = await browser.newPage();
    await pagePin.setViewportSize({ width: PINTEREST_W, height: PINTEREST_H });
    await pagePin.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await pagePin.waitForTimeout(WAIT_MS);

    // Hero: clip to viewport (2:3)
    await pagePin.screenshot({
      path: join(outDir, 'hero.jpg'),
      clip: { x: 0, y: 0, width: PINTEREST_W, height: PINTEREST_H },
      type: 'jpeg',
      quality: 90,
    });
    console.log('  ✓ hero.jpg');

    // Full-page (tall pin) — capped at MAX_FULL_HEIGHT
    const fullHeight = await pagePin.evaluate(() => document.body.scrollHeight);
    const clampedH = Math.min(fullHeight, MAX_FULL_HEIGHT);
    await pagePin.screenshot({
      path: join(outDir, 'full.jpg'),
      clip: { x: 0, y: 0, width: PINTEREST_W, height: clampedH },
      fullPage: false,
      type: 'jpeg',
      quality: 85,
    });
    console.log(`  ✓ full.jpg (${clampedH}px)`);
    await pagePin.close();

    // ── Wide crop (Instagram/Facebook) ───────────────────────────────────
    const pageWide = await browser.newPage();
    await pageWide.setViewportSize({ width: WIDE_W, height: WIDE_H });
    await pageWide.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await pageWide.waitForTimeout(WAIT_MS);
    await pageWide.screenshot({
      path: join(outDir, 'wide.jpg'),
      clip: { x: 0, y: 0, width: WIDE_W, height: WIDE_H },
      type: 'jpeg',
      quality: 90,
    });
    console.log('  ✓ wide.jpg');
    await pageWide.close();

  } catch (err) {
    console.error(`  ✗ ${slug}: ${err.message}`);
  } finally {
    await browser.close();
  }
}

// ── Main ────────────────────────────────────────────────────────────────────
const arg = process.argv[2];
const targets = arg ? [arg] : SLUGS;

(async () => {
  for (const slug of targets) {
    await screenshot(slug);
  }
  console.log('\nDone. Screenshots saved to raw/themes/{slug}/screenshots/');
  console.log('Run: git add raw/themes && git commit -m "chore: theme screenshots"');
})();
