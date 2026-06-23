import { chromium } from 'playwright';

const URL = process.env.OG_URL ?? 'http://localhost:5174/';
const OUT = process.env.OG_OUT ?? 'public/og-image.png';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});

await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });

// Wait for the intro loading screen to fully disappear.
await page.waitForSelector('.loading-screen', { state: 'detached', timeout: 15000 }).catch(() => {});
// Let hero imagery/fonts settle.
await page.waitForTimeout(1500);

await page.screenshot({ path: OUT, clip: { x: 0, y: 0, width: 1200, height: 630 } });

await browser.close();
console.log(`Saved ${OUT}`);
