# iCodeDreams Portfolio — Astro + TypeScript + Three.js

A structural port of the single-file HTML portfolio into a proper, typed,
component-based project. This README explains **why** it's built this way,
what's fully ported vs. left as a pattern for you to extend, and how to run it.

## Why this stack

- **Astro** ships zero JavaScript by default. Every section here (Hero text,
  About bio, Footer) renders as plain HTML at build time. The only JS that
  reaches the browser is the small, typed `<script>` modules attached to
  the few interactive pieces (binary rain canvas, work-card tabs, the
  contact form, the Three.js circuit background) — and Astro only bundles
  each script for the page that actually uses it.
- **TypeScript** everywhere content has a shape: `src/data/projects.ts` and
  `src/data/stack.ts` are typed arrays. Add a 7th project or a 5th skill
  group by pushing one object — if you forget a required field, `astro
  check` catches it before it ships, instead of the card silently missing
  a screenshot in production.
- **Three.js** is used in two places, each for a specific reason:
  - `CircuitBackground.astro` (Contact section) — dozens of glowing,
    additively-blended pulses composited on the GPU instead of redrawn on
    a 2D canvas every frame.
  - `BinaryRainBackground.astro` (Hero section) — same falling-digit
    algorithm as the original, but the canvas it draws to is uploaded as a
    `THREE.CanvasTexture` onto a full-screen WebGL plane instead of sitting
    directly in the DOM. Worth being honest about the tradeoff here: the
    actual "0/1 falling" logic is still plain Canvas2D under the hood
    (real glyph rendering in a raw GLSL shader needs a font atlas), so the
    genuine win is that the rain now lives inside a real Three.js scene —
    useful if you later want to layer it with other WebGL effects — not a
    raw performance gain over the original by itself.

## Structure

```
src/
  data/
    projects.ts      # typed Project[] — the Work section's content model
    stack.ts         # typed StackGroup[] — About section's skill tags
  components/
    Hero.astro                # name, CTA buttons, avatar rings, orbit icons
    BinaryRainBackground.astro # Three.js-hosted rain canvas, used only by Hero
    About.astro       # terminal window, WHO AM I card, bio, skill groups
    WorkCard.astro     # one project card — takes a `Project` as a prop
    Work.astro         # loops `projects` through <WorkCard />, tab-switch script
    CircuitBackground.astro  # Three.js scene, used only inside Contact
    Contact.astro      # form + CircuitBackground
    LogoLoop.astro      # scrolling tech marquee
    Footer.astro
  layouts/
    Layout.astro       # <html> shell, fonts, Tabler icons CDN
  styles/
    global.css         # design tokens (--pink/--cyan/--green/--yellow), shared keyframes
  pages/
    index.astro         # assembles every section in order
```

## What's fully ported vs. what's a pattern to extend

**Fully working:** the whole architecture, typing, Hero canvas, About
terminal window + skill groups, Work section's tab-switching, the Three.js
circuit background, the contact form, logo loop, footer.

**Left as a pattern, not fully filled in** (to keep this scaffold readable
rather than a 2000-line data file): `src/data/projects.ts` currently has
3 of your 6 project cards typed out. Copy the shape of any existing entry
to add the rest (Real Estate Portal, SaaS Dashboard, Dev Portfolio) — no
component code needs to change, `Work.astro` will just render more cards.

**Not ported:** the maximize-modal (full-screen card view) and the
minimize/close window-chrome buttons from the original site. Both are
straightforward to add back as a small typed module the same way
`Work.astro`'s tab-switch script is written, if you want them.

**Images:** `projects.ts` points at `/projects/*.jpg` — drop your real
screenshots in `public/projects/` with matching filenames.

## Running it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # astro check (type-checks everything) + static build
npm run preview    # serve the production build locally
```

`npm run build` runs `astro check` first — if `WorkCard.astro` is ever
passed something that doesn't match the `Project` type, or a required
field is missing in `projects.ts`, the build fails with a clear error
instead of shipping a broken card.

## Deploying

`output: 'static'` in `astro.config.mjs` means `npm run build` produces
plain HTML/CSS/JS in `dist/` — deployable to Vercel, Netlify, Cloudflare
Pages, GitHub Pages, or any static host, the same way the original single
HTML file was.
