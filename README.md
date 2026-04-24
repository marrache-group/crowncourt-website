# CrownCourt Website

Marketing site for **CrownCourt** — a watchOS tennis scoring app that uses the Digital Crown to track points, games, and sets from your wrist.

Live: https://crowncourt.vercel.app

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- `marked` + `@tailwindcss/typography` for rendering the privacy / terms markdown content

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

## Project layout

```
src/
├── app/         # Next.js App Router pages (home, features, pricing, privacy, terms)
├── components/  # Reusable UI components
├── config/      # Site-wide config (name, tagline, URLs)
├── content/     # Markdown source for privacy & terms
├── hooks/       # Custom React hooks
└── lib/         # Helpers / utilities
```

Site-wide metadata (name, tagline, URL, copyright) is centralised in `src/config/site.ts`.

## License

© 2026 Marrache Group. All rights reserved.
