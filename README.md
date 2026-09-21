# rorywalker.dev

Personal site and portfolio. Next.js 16 (App Router), React 19, Tailwind CSS 4,
deployed on Vercel.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

There is no test suite. `npm run build` type-checks as part of the build, and
`npx tsc --noEmit` is the quick standalone check.

## Where things live

```
app/
  layout.tsx                shell: fonts, site-wide metadata, nav, footer
  page.tsx                  homepage, led by the shipping record
  work/page.tsx             project index
  work/[slug]/page.tsx      project detail + the MyGarden case study
  about/page.tsx            how I work
  contact/page.tsx          ways to reach me
  opengraph-image.tsx       social card, generated at build with next/og
  sitemap.ts                sitemap.xml
  robots.ts                 robots.txt
  not-found.tsx             404
  globals.css               Tailwind import, design tokens, type utilities
components/
  site-nav.tsx              nav with active-route state (client component)
  site-footer.tsx           footer links
  shipping-record.tsx       the release ledger (the site's signature element)
  mygarden-architecture.tsx hand-drawn inline SVG architecture diagram
lib/
  site.ts                   name, URL, email, socials, nav
  projects.ts               the project data every page reads from
  releases.ts               MyGarden's release history, mirrored from the app
```

`/projects` redirects to `/work` (308) via `next.config.ts`.

## Editing content

Almost all copy lives in data, not JSX:

- **Adding or changing a project** means editing `lib/projects.ts`. The homepage,
  the work index and the detail page all read from it, so they can't drift apart.
  Give a project a `caseStudy` object and its detail page grows the full
  treatment; leave it off and it gets the lighter layout.
- **Name, email, URL or social links** live in `lib/site.ts`. Metadata, the
  footer and the OG card all read from there.
- **A new MyGarden release** goes in `lib/releases.ts`, mirrored verbatim from
  the app's own `lib/changelog.ts`. The homepage ledger, the release count and
  the OG card all derive from it.

Two rules for `lib/projects.ts`:

1. `highlights` are engineering decisions and their tradeoffs, not feature
   bullets. "We use Postgres" isn't a highlight; why two cron jobs run on
   different ticks is.
2. Every claim has to be true of the code. Stacks should be checked against the
   project's own `package.json` before they go in.

## Design

The direction is a **ship log**: pressed greige paper, warm ink, and a single
deep-green signal colour reserved for status, links and ledger markers. Nothing
else is coloured. The homepage leads with the actual release history rather than
a claim about shipping, because that's the strongest evidence available.

Three faces, each with one job:

| Role | Face | Used for |
|------|------|----------|
| Display | Familjen Grotesk | headings, name, project titles (`.display`) |
| Body | Instrument Sans | prose |
| Utility | IBM Plex Mono | versions, dates, eyebrows, metrics, stacks (`.tabular`, `.eyebrow`) |

Colours and fonts are defined once in `app/globals.css` under `@theme`, which is
how Tailwind 4 does it. That generates `text-ink`, `text-muted`, `text-faint`,
`bg-paper`, `bg-card`, `border-rule` and `text-signal`. **Don't hardcode hex
values in components** — including in SVG, where presentation attributes take
`var(--color-*)` directly (see `mygarden-architecture.tsx`).

Every text/background pairing clears WCAG AA. If you add a tone, check it.

`.measure` caps prose at 64ch so long-form copy stays readable inside wide
containers. Wide content (the architecture diagram) scrolls inside its own
`overflow-x-auto` box so the page body never scrolls sideways.

Motion is one gesture: ledger rows settle in on load, staggered, because a log
filling in means something. It's behind `prefers-reduced-motion`. Resist adding
more.
