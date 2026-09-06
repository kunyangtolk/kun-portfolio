# Kun's portfolio

Next.js 15 (App Router) + Tailwind v4. Homepage implemented from the Figma
frame `Portfolio_Kun / homepage` (node `920:3907`).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

## Layout

```
app/                 layout, page, global styles + design tokens
components/          Navbar, Hero, Projects, Footer, icons
data/projects.js     all project copy and links — edit content here
public/assets/       hero illustration
_archive/prototype/  the previous Vite/CDN prototype, kept for reference
```

## Design tokens

Defined once in `app/globals.css` under `@theme`, so Tailwind generates
utilities from them (`text-ink`, `bg-deep`, `border-lime`, `text-display`, …).

| Token    | Value     | Used for                          |
|----------|-----------|-----------------------------------|
| `ink`    | `#080D2D` | headings                          |
| `navy`   | `#051C36` | body copy, navbar hairline        |
| `lime`   | `#B4FF06` | section rule, "04", hero wash 20% |
| `cyan`   | `#57F9FF` | numerals, tags, footer wash 20%   |
| `deep`   | `#393D57` | projects section ground           |

Type sizes are fluid `clamp()` values that land on the exact Figma size at
1440px and scale down gracefully — Figma has no mobile frames, so the
breakpoints below `lg` are an interpretation, not a spec.

## Image assets

| File                    | Export      | Displayed  | Notes                              |
|-------------------------|-------------|------------|------------------------------------|
| `hero-texture.webp`     | 2160 x 1200 | full-bleed | lossless WebP, 290KB (from a 2.9MB PNG) |
| `footer-texture.webp`   | 1046 x 615  | full-bleed | lossless WebP, 79KB; opaque white + dark lines, shown at `opacity-20` |
| `hero-illustration.jpg` | 843 x 604   | 720 x 400  | `object-cover`, crops 23% of height |
| `logo-nav.png`          | 160 x 160   | 40 x 40    | transparent, grey line art on white |
| `logo-mark.png`         | 380 x 608   | —          | currently unused                    |

The logos use plain `<img>` rather than `next/image`: the optimiser transcodes
to AVIF, which softens hairline strokes at those sizes.

**The hero ground is white, not the lime wash.** In Figma the vectorised
texture layer carries an opaque white rectangle that hides the old
`rgba(180,255,6,0.2)` wash, so lime now survives only as the section rule and
the "04" numeral. `hero-texture.webp` itself is transparent — putting it over
a lime ground tints the contours olive, which is not the design.

Two textures are under-sized for their slots: `hero-illustration.jpg` is
~1.17x, and `footer-texture.webp` is only **0.73x** — under 1:1 before any
retina factor. Both are drop-in replacements if re-exported larger; the footer
one matters least, since it sits at 20% opacity.

## Known gap

Project links in `data/projects.js` point at `#slug` placeholders — the
case-study pages don't exist yet.
