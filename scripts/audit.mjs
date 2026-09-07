/**
 * Measure the built site against the Figma frames, page by page.
 *
 *   node scripts/audit.mjs                 # against a server already on :3210
 *   PORT=4000 node scripts/audit.mjs       # against another port
 *   node scripts/audit.mjs --json          # machine-readable, for a loop to read
 *
 * scripts/frames.json holds each page's frame id and the height of every
 * visible band in it, pulled from the Figma metadata. Regenerate it whenever
 * the file changes — the loop that drives this does that first.
 *
 * What the numbers mean: the first band of every page reads short because the
 * announcement bar and the nav sit outside <main> in the build and inside the
 * frame's first child. Judge that one on the page total instead, which is why
 * both are reported.
 *
 * Exit code is 1 if any band outside the hero is off by more than TOLERANCE,
 * so this can gate a push.
 */
import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const TOLERANCE = 35;
const PORT = process.env.PORT || 3210;
const BASE = `http://127.0.0.1:${PORT}`;
const CHROME =
  process.env.CHROME_PATH || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";

const asJson = process.argv.includes("--json");
const frames = JSON.parse(
  fs.readFileSync(path.join(import.meta.dirname, "frames.json"), "utf8")
);

const browser = await chromium.launch({
  executablePath: CHROME,
  args: ["--proxy-bypass-list=<-loopback>"],
});
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

const report = [];

for (const [route, spec] of Object.entries(frames.pages)) {
  const page = await ctx.newPage();
  let measured;
  try {
    const res = await page.goto(BASE + route, {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    if (!res || res.status() !== 200) throw new Error(`status ${res && res.status()}`);
    // Walk the page so anything lazy has loaded before we measure.
    await page.evaluate(async () => {
      await new Promise((done) => {
        let y = 0;
        const t = setInterval(() => {
          window.scrollTo(0, (y += 900));
          if (y > document.body.scrollHeight) {
            clearInterval(t);
            done();
          }
        }, 25);
      });
    });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(900);
    measured = await page.evaluate(() => {
      const kids = [
        ...document.querySelectorAll("main > *"),
        document.querySelector("footer"),
      ].filter(Boolean);
      return {
        doc: Math.round(document.documentElement.scrollHeight),
        bands: kids.map((el) => ({
          h: Math.round(el.getBoundingClientRect().height),
          label: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 30),
        })),
      };
    });
  } catch (err) {
    report.push({ route, error: String(err.message || err) });
    await page.close();
    continue;
  }
  await page.close();

  const frameTotal = spec.sections.reduce((n, s) => n + s.h, 0);
  // A frame band may cover more than one band in the build, and a couple are
  // driven by how much content the client has rather than by layout. Both are
  // declared in frames.json, so pairing stays honest instead of drifting the
  // moment one page groups its sections differently.
  let cursor = 0;
  const bands = spec.sections.map((s, i) => {
    const span = s.span || 1;
    const got = measured.bands.slice(cursor, cursor + span);
    cursor += span;
    const local = got.length ? got.reduce((n, g) => n + g.h, 0) : null;
    return {
      i,
      frame: s.h,
      local,
      delta: local === null ? null : local - s.h,
      label: got.length ? got[0].label : s.name,
      note: s.note,
      // The hero is not comparable one-to-one — the bar and nav sit outside
      // <main> here and inside the frame's first child.
      skip: i === 0 || Boolean(s.ignore),
    };
  });
  report.push({
    route,
    frame: spec.frame,
    frameTotal,
    localDoc: measured.doc,
    countMismatch: cursor !== measured.bands.length,
    bands,
  });
}

await browser.close();

const offenders = report.flatMap((p) =>
  (p.bands || [])
    .filter((b) => !b.skip && b.delta !== null && Math.abs(b.delta) > TOLERANCE)
    .map((b) => ({ route: p.route, ...b }))
);

if (asJson) {
  console.log(JSON.stringify({ tolerance: TOLERANCE, report, offenders }, null, 1));
} else {
  for (const p of report) {
    if (p.error) {
      console.log(`\n${p.route}  ERROR: ${p.error}`);
      continue;
    }
    const tot = p.localDoc - p.frameTotal;
    console.log(
      `\n${p.route}   frame ${p.frameTotal}   doc ${p.localDoc}   ${tot >= 0 ? "+" : ""}${tot}` +
        (p.countMismatch ? "   [band count differs]" : "")
    );
    for (const b of p.bands) {
      const flag = b.skip
        ? `  (not compared${b.note ? ": " + b.note : " — judge on the page total"})`
        : b.delta === null
          ? "  [missing]"
          : Math.abs(b.delta) > TOLERANCE
            ? "  <<<"
            : "";
      console.log(
        `   ${String(b.i).padStart(2)}  frame ${String(b.frame).padStart(5)}` +
          `  local ${String(b.local ?? "—").padStart(5)}` +
          `  ${b.delta === null ? "    —" : (b.delta >= 0 ? "+" : "") + b.delta}`.padStart(7) +
          `${flag}   ${b.label}`
      );
    }
  }
  console.log(
    `\n${offenders.length} band(s) outside ${TOLERANCE}px` +
      (offenders.length ? ":" : ".")
  );
  for (const o of offenders) {
    console.log(`   ${o.route}  band ${o.i}  ${o.delta >= 0 ? "+" : ""}${o.delta}  ${o.label}`);
  }
}

process.exit(offenders.length ? 1 : 0);
