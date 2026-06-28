<div align="center">

# Chris Tsungu — Portfolio

**A premium, single-page portfolio for a Year 10 student aiming at a career in finance — built from scratch with React, TypeScript, Tailwind CSS and Framer Motion.**

[![Built with React](https://img.shields.io/badge/React-18-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-ff0089?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deploy with Netlify](https://img.shields.io/badge/Deploy-Netlify-00c7b7?logo=netlify&logoColor=white)](https://www.netlify.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-fbd24e.svg)](./LICENSE)

🌐 **Live:** [thechristsungupage.netlify.app](https://thechristsungupage.netlify.app) &nbsp;·&nbsp; 📦 **Repo:**[GitHub URL](https://github.com/callumtsungu200-coder/chris-tsungu-portfolio-)

</div>

---

## Overview

A dark, gold-accented portfolio that balances **academics**, **leadership** and **competitive sport** while pointing to a long-term ambition in finance and investment banking. Designed to read well to teachers, university admissions and employers.

The whole site is driven by a single content file (`src/data/content.ts`) — change a number, add a project, swap a stat, and every component picks it up. No CMS, no database, no clutter.

## Features

- ⚡ **Vite 5** with React 18 + TypeScript 5 for fast dev and lean production builds
- 🎨 Custom **Tailwind** design system — ink-on-gold palette, glassmorphism, gradient backgrounds, grid overlays
- 🪄 **Framer Motion** orchestrated entrance animations, animated nav pill, scroll-progress bar, cursor glow
- 📊 Live **GCSE projected grades table** with subtle row stagger and gold-highlighted top grades
- 🏆 Sections for Hero, About, Education, Achievements, Sports, Skills, Projects, Gallery, Timeline, Contact
- 📺 YouTube highlight-reel embed — one variable to switch the video
- 📱 Mobile-first responsive layout, full-screen mobile nav, touch-friendly interactions
- ♿️ Respects `prefers-reduced-motion`, hides cursor glow on touch, focus-visible rings everywhere
- 🚀 Pre-wired `netlify.toml` with build settings, immutable asset caching, and security headers
- 🔍 SEO-ready — title, description, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml`, SVG favicon
- 🧩 **Single source of truth** for content in `src/data/content.ts`

## Technologies

| Layer        | Tooling                                          |
| ------------ | ------------------------------------------------ |
| UI library   | [React 18](https://react.dev)                    |
| Language     | [TypeScript 5](https://www.typescriptlang.org)   |
| Build        | [Vite 5](https://vitejs.dev)                     |
| Styling      | [Tailwind CSS 3](https://tailwindcss.com)        |
| Animation    | [Framer Motion 11](https://www.framer.com/motion)|
| Icons        | [react-icons 5](https://react-icons.github.io)   |
| Hosting      | [Netlify](https://www.netlify.com)               |

## Project structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/                  # Photography & graphics
├── src/
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, ScrollProgress, CursorGlow, Loader
│   │   ├── sections/            # Hero, About, Education, ..., Contact
│   │   └── ui/                  # Reveal, GlassCard, StatCard, SkillBar, Button, Badge, SectionHeading
│   ├── data/
│   │   └── content.ts           # ★ Single source of truth — edit this for any content change
│   ├── hooks/
│   │   └── useActiveSection.ts
│   ├── lib/
│   │   └── cn.ts
│   ├── App.tsx                  # Section composition
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── .github/                     # Issue & PR templates
├── index.html                   # SEO meta + Google Fonts
├── netlify.toml                 # Build + security headers
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.{json,app,node}.json
├── vite.config.ts
├── package.json
├── LICENSE
└── README.md
```

## Installation

Requirements: **Node 20+** (`.nvmrc` included) and npm.

```bash
git clone <your-fork-or-repo-url>
cd portfolio
npm install
```

## Local development

```bash
npm run dev          # http://localhost:5173 — hot reload
npm run build        # type-check + production bundle into dist/
npm run preview      # preview the production build locally
npm run type-check   # standalone tsc check, no emit
```

## Editing content

Open **`src/data/content.ts`** and edit:

- `profile` — name, tagline, school, bio, contact details
- `heroStats` — the four hero stat cards
- `grades` — the GCSE projected-grades table
- `achievements`, `sportsHighlights`, `strengths`, `languages`
- `skillGroups` — the animated skill bars
- `projects` — the projects grid (each entry has `title`, `blurb`, `tags`, `status` and optional `href`)
- `galleryImages` — order and captions
- `timeline` — chronological story
- `reelEmbedUrl` — paste a YouTube/Vimeo embed URL to wire the highlight reel

> Components consume this file directly. There is no hidden config.

### Adding a new project

```ts
{
  title: 'My Next Project',
  blurb: 'One-line description.',
  status: 'in-progress',          // 'live' | 'in-progress' | 'ongoing'
  tags: ['React', 'TypeScript'],
  href: 'https://example.com',    // optional
}
```

## Deployment — Netlify

This project is set up for one-click Netlify deployment.

### Option A — Git integration (recommended)

1. Push this repo to GitHub.
2. On [app.netlify.com](https://app.netlify.com), choose **Add new site → Import an existing project**.
3. Pick the repo. Netlify reads `netlify.toml` and pre-fills:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `20`
4. **Deploy site.** Every push to `main` triggers a fresh build.

### Option B — Drag-and-drop

```bash
npm run build
```
Drag the generated `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

### Option C — Netlify CLI

```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --build --prod
```

## Screenshots

> Drop screenshots into `docs/screenshots/` and update these paths.

|                                  |                                    |
| -------------------------------- | ---------------------------------- |
| ![Hero](docs/screenshots/hero.png)         | ![About](docs/screenshots/about.png)         |
| ![Education](docs/screenshots/education.png) | ![Sports](docs/screenshots/sports.png)       |
| ![Skills](docs/screenshots/skills.png)     | ![Contact](docs/screenshots/contact.png)     |

## Performance & accessibility

- Tailwind purges unused classes — production CSS is ~6.5 KB gzipped.
- `framer-motion` and `react-icons` split into separate chunks via Vite.
- Hero image is `loading="eager"` + `fetchpriority="high"`; everything else lazy.
- `Cache-Control: immutable` on `/assets/*` and `/images/*` via `netlify.toml`.
- Semantic HTML, alt text, focus-visible rings, `prefers-reduced-motion` respected.

## Future ideas

- Hook the Contact section to **Netlify Forms** or a transactional email API.
- Add a `/blog` route with MDX or Contentlayer.
- Generate `sitemap.xml` automatically from routes at build time.
- Add a "View CV" button to a PDF in `public/`.
- Add `Person` JSON-LD structured data for richer search results.
- Add privacy-friendly analytics (Plausible or Umami).

## Contributing

Issue templates and a PR template live in `.github/`. Even though this is a personal site, PRs that improve code quality, accessibility or performance are welcome.

## License

Code is released under the [MIT License](./LICENSE).

**Personal content** — Chris Tsungu's name, photography, grades and achievements — is **not** licensed for reuse. If you're building your own portfolio off this codebase, swap in your own copy and assets.

---

<div align="center">
<sub>Designed and built by <a href="https://thechristsungupage.netlify.app">Chris Tsungu</a> · 2026</sub>
</div>
