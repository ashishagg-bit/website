# Dr. Avi Ishaaya Wellness Centers

Marketing site for the Dr. Avi Ishaaya Wellness Centers practice in Beverly
Hills. Built with Next.js and deployed continuously to Vercel.

The design source is the `Aviishaaya Dev` Figma file
(`TdifdqKlRJcGSLC8Kpz1Sz`). Page copy, section order, and photography are
transcribed from that file — when the site and the Figma frames disagree, the
Figma frames are correct.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Blog content | Markdown files + `gray-matter` |
| Contact email | Resend |
| Hosting | Vercel, auto-deploying from `main` |

## Running locally

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

```bash
npm run build   # production build — run before pushing
npm run lint    # eslint
npm start       # serve the production build
```

## Environment variables

Only the contact form needs configuration. Without `RESEND_API_KEY` the form
still works in development — submissions are logged to the console instead of
emailed — but in production a missing key means enquiries are not delivered.

| Variable | Required | Default |
|---|---|---|
| `RESEND_API_KEY` | Production | — (dev logs to console) |
| `CONTACT_TO_EMAIL` | No | `info@aviishaaya.com` |
| `CONTACT_FROM_EMAIL` | No | `Avi Ishaaya Centers <noreply@aviishaaya.com>` |

Set these in the Vercel project under Settings → Environment Variables.

## Project layout

```
app/                    Routes (App Router)
  page.tsx              Homepage
  about/                About the practice
  services/             Service index
  service/[…]/          Five service pages, generated from lib/service-pages.ts
  blog/                 Blog index and posts
  vip/                  VIP membership tiers
  contact/              Contact page
  privacy-policy/
  api/contact/          Form handler — the only dynamic route
components/             Shared UI (header, footer, hero, bands, forms)
  home/                 Homepage-only sections
  service/              Service-page sections
lib/                    Page content as typed data
  service-pages.ts      All five service pages
  home-content.ts       Homepage copy
  vip-tiers.ts          VIP tier definitions
  site-data.ts          Nav, footer, practice details
  posts.ts              Blog loader
content/blog/           Blog posts as Markdown
public/images/
  figma/                Artwork exported from the Figma file
  scraped/              Photography carried over from the previous site
```

Most copy changes are data edits, not component edits. A service page's
headings, body text, conditions list, and photography all live in
`lib/service-pages.ts` — the components render whatever that file describes.

## Routes

All pages are prerendered at build time except `/api/contact`.

`/` · `/about` · `/services` · `/service/lungs` · `/service/cardiovascular` ·
`/service/sleep` · `/service/allergy-sensitivity` ·
`/service/wellness-preventive-medicine` · `/blog` · `/blog/[slug]` · `/vip` ·
`/vip/[tier]` · `/contact` · `/privacy-policy`

Plus generated `sitemap.xml` and `robots.txt`.

## Deployment

Pushing to `main` triggers a production deploy on Vercel. There is no staging
branch — `main` is what the public sees, so build locally before pushing.

`next.config.ts` deliberately does **not** set `output: "export"`. A static
export drops route handlers from the build, which silently breaks the contact
form. See the note in that file before changing it.

## Changelog

`CHANGELOG.md` records what shipped, why, and how it was verified, newest
first. `IMPROVEMENT.md` tracks known gaps and planned work.
