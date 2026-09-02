# Changelog

Dr. Avi Ishaaya Wellness Centers — a Next.js rebuild of the practice site from
the `Aviishaaya Dev` Figma file (`TdifdqKlRJcGSLC8Kpz1Sz`).

Newest first. Each entry records what changed, why, and how it was verified.
Versions are dated rather than numbered, because the site ships continuously
rather than in releases.

---

## 2026-08-25

### Contact form now delivers enquiries — `c587618`

The form had never worked in production. It posts to `/api/contact`, but
`output: "export"` strips route handlers from the build, so the endpoint was
never emitted: every submission hit a 404 and the form showed "Submission
failed". The handler itself was already complete and correct — the config and
the route simply contradicted each other.

- Dropped `output: "export"`. All 15 pages still prerender; `/api/contact` is
  the only dynamic route. Static export was chosen so the site could be dropped
  on any host, but it deploys from a connected Git repository now, and it cannot
  coexist with a form that posts to itself.
- Pointed the form at `/api/contact/`. `trailingSlash: true` answers the
  unslashed path with a 308; browsers do re-POST on 308, but relying on that
  costs a round trip and not every client honours it.
- Stopped reporting success the server cannot deliver. With no `RESEND_API_KEY`
  the handler logged the submission and returned `ok: true` — a patient would
  see a confirmation while the enquiry went nowhere. Development keeps that
  fallback; production now fails with 503 and the practice's phone number.

Verified against `next start`: valid submission 200 with no redirect hop,
missing fields 400, missing key in production 503, pages still 200.

**Deployment requirement:** set `RESEND_API_KEY` in the host's environment.
Optionally `CONTACT_TO_EMAIL` (defaults to `info@aviishaaya.com`) and
`CONTACT_FROM_EMAIL`.

### Figma section captures added — `d1713be`

The per-section reference frames the homepage is compared against. `reference/`
already tracked live-vs-local comparison shots, so these sit alongside them.

Note: `reference/sec-footer.png` is misnamed — it shows the top of the Space
section, not the footer. Filename kept to avoid breaking references to it.

### Figma image transfer completed; layout, font and accessibility fixes — `8bba67a`

All ten photographs the homepage section diff flagged are now real Figma
exports rather than scraped stand-ins: four method cards, services tile 03, the
why-us background, the reviews portrait, three journal thumbnails.

Tile 03 and the why-us background are exported with their children hidden. A
plain `exportAsync` bakes the node's own text layers into the raster, and the
live components then draw their copy over the top — which produced a doubled,
unreadable label before this was understood.

Layout and type defects found by measuring the built site at 390 / 768 / 1024 /
1440 / 1920:

| Defect | Cause | Fix |
| --- | --- | --- |
| Announcement bar rendered in Apercu, not Manrope | `font-[var(--font-manrope)]` is untypeable by Tailwind, so it emitted nothing while the preloaded Manrope went unused | `font-[family-name:var(--font-manrope)]` |
| 19px horizontal overflow at 768–786px | Header's fixed widths summed to 787px | Nav, CTA and hamburger moved to `lg:` |
| First method card clipped | Carousel rested scrolled by exactly its own `padding-left` | Matching `scroll-px` |
| Journal meta lines off-baseline; card 3 indented at 768 | First card had `pl-0` against equal tracks, making it 32px wider and — via `aspect-[4/5]` — 40px taller | Uniform `gap-x-16`, no per-card padding |
| ~235px dead space per service tile at 390px | Flat `h-[400px]` | Sizes to content below `lg:` |

Interaction and accessibility:

- The services bento, physician accordion and conditions list were driven purely
  by `:hover`. Every rule is mirrored with `:focus-within`, and accordion bodies
  are expanded outright below `lg`, where the rows are plain `div`s with nothing
  to hover or focus — their copy was otherwise unreachable on touch.
- Nav dropdown made keyboard-reachable; `invisible` had put nine destinations
  outside the tab order entirely.
- Visible focus ring added; there was none anywhere.
- Reduced-motion guards on the logo marquee and smooth scrolling.
- Canonical URLs and OG/Twitter images on every route — no page had either.
- Sitemap corrected: it omitted eight pages and ignored `trailingSlash`.
- `loading="lazy"` on twenty below-the-fold images.

### Hero artwork and promises copy — `39caad9`

Hero placeholders replaced with the real Figma artwork; promises section copy
completed.

---

## 2026-08-23

- `15231bc` Mobile layout overflow fixed; static export made reproducible.
- `6cc7440` Service cards no longer collapse when they stack.
- `69ec971` Two animated sections corrected in their open state.
- `7898eaf` Real brand fonts installed: Kalice Trial and Apercu Pro.
- `5fef6eb` Inner-page hero scrim lightened to match the frames.
- `ed4c36e` VIP band given a consultation photograph.

---

## Known open items

Carried deliberately, not forgotten.

**Colour contrast.** Measured ratios that fail WCAG AA. Each needs a palette
decision, because fixing them moves the site away from the Figma colours:

| Element | Ratio | Needs |
| --- | --- | --- |
| Announcement bar, white on lilac gradient | **1.40:1** | 4.5 — effectively unreadable |
| Blue button, white 15px | 4.26:1 | 4.5 |
| Blue links on cream | 4.08:1 | 4.5 |
| `--ink-60` body text on cream | 4.31:1 | 4.5 |

**Pages with no Figma design.** `/vip`, `/vip/[tier]`, `/contact` and
`/privacy-policy` have no counterpart frame in the file. They were built without
a design to match.

**Assets.** Most photographs are ~1800px wide serving 331–720px boxes; the
56×56 review avatars are fed 1800×1100 JPEGs. `favicon.ico` is a 5742×5742 PNG
renamed `.ico` — browsers accept it, but it is ~93 KB for a 32px slot.

**Copy.** The footer links "Terms of Use" to `/privacy-policy/`, same as the
privacy link.

**Type.** Apercu ships 400 and 700 only, so `font-medium` (500) renders as
Regular wherever it is used on Apercu text.
