/*
  Copy for the Seven Research website design direction.

  Sources: the design-direction deck (Version 2.0, August 2026) and the Figma
  frames under "Home and Careers Directions" (node 961:10572). Facts quoted
  here — the 2024 founding, the brand's Pangea idea, the colour roles, the
  positioning finding — come from that deck rather than from memory.

  ASSETS: five of the six direction images are rasterised from the PDF exports
  in ~/Desktop/sevenresearch — earlier iterations than the current Figma
  frames, standing in until Kun exports those. careers-sage.webp is still a
  generated placeholder; no PDF matches that direction.

  Sections render through a switch in app/work/seven-research/page.js.

  Types used here:
    prose   { label, paragraphs[], tone, borderTop, borderBottom, padTop, padBottom }
    outcome { label, stats[], tone }
    chapter { title, tone, borderTop }
    text    { paragraphs[], padTop, padBottom }
    zoomRow { figures[], paragraphs[], frameWidth, frameHeight, label, padTop, padBottom }
    divider {}
*/

const IMG = "/assets/case-studies/seven";

export const sevenResearch = {
  slug: "seven-research",
  eyebrow: "Seven Research recruiting website redesign supercharged by Claude",
  title: "A design language for a quant firm competing above its size",
  meta: [
    { label: "Platform", value: "Marketing site" },
    { label: "Industry", value: "Quantitative research" },
  ],

  sections: [
    {
      type: "prose",
      tone: "lime",
      label: "Overview",
      paragraphs: [
        "Seven Research is a quantitative research firm founded in New York in 2024, hiring against firms sixty times its size. Its brand guidelines are unusually good: Pangea as the organising idea — markets as one interconnected landmass, quants and engineers as one team — expressed through contour lines, wireframe terrain and an acid lime no competitor is using.",
        "The site was not carrying any of it. The hero was a stock pastel mountain range under a circuit-board overlay, the exact generic the guidelines were written to avoid, and the careers page listed eight roles as title, type, location, arrow. I was asked for a design direction for Home, Careers, Culture and Events that would be distinctive and credible without imitating the two sites the team admired.",
      ],
    },
    {
      type: "prose",
      tone: "cyan",
      label: "My role",
      paragraphs: [
        "I led the visual design and wrote the direction document. A lot of the groundwork came out of AI — the site audit, the summary of the brief, the competitor captures, the first synthesis — so much of the job was curating it: keeping what held up, cutting what was generic, and deciding what it actually meant for this firm. The four directions, and every visual decision inside them, are mine.",
      ],
    },
    {
      type: "prose",
      tone: "navy",
      borderTop: false,
      label: "Process",
      padTop: 80,
      padBottom: 80,
      paragraphs: [
        "Most of the work underneath the design ran through a Claude session, and the useful part was the order it ran in \u2014 evidence first, opinion last.",
      ],
      ordered: true,
      bullets: [
        "Claude scanned the live site and audited it against the brand guidelines, so every place the build had drifted from the book was listed rather than remembered.",
        "It read the client\u2019s project brief and distilled it down to what the project was actually being asked to do.",
        "Mobbin\u2019s MCP server ran the competitor pass, pulling live captures of quant sites and adjacent categories instead of running on recall. The positioning map came out of that.",
        "Everything was synthesised into a presentation Claude built, then written back out as a markdown file structured for it to generate design directions from.",
        [
          "What it generated was generic, so ",
          { b: "the four directions are mine" },
          ". I decided what each one should feel like, where each brand colour goes, how the terrain and contour graphics get used, and what each direction would need \u2014 photography, an icon set, extra build time \u2014 to hold up in production.",
        ],
        "The client came back to Sage and Atmospheric, so Careers was worked up in those two registers only \u2014 the same page architecture, tested against the direction each one had already committed to.",
        "Figma Agent picked it up at the end and earned its place \u2014 generating the responsive variants from the desktop frames and catching inconsistencies I would otherwise have found on the third pass.",
      ],
    },

    {
      type: "zoomRow",
      frameWidth: 480,
      frameHeight: 620,
      label: "Four Home directions — scroll sideways to see more, click to open full size",
      figures: [
        {
          src: `${IMG}/home-sage.webp`,
          title: "Home — Sage",
          alt: "Home page direction: a navy contour hero, the four pillars as a two-by-two of flat lime, gray, beige and cyan fields each carrying a wireframe surface, the disciplines set as a ruled list, and a photo mosaic breaking out of a full-bleed lime culture band.",
          note: "The most restrained of the four, and the one that leans hardest on the brand’s own graphic system. The pillars are a 2×2 of flat colour fields — lime, gray, beige, cyan, exactly the roles the guidelines assign — each carrying one of the wireframe surfaces at its head instead of an icon. Square corners throughout, no containers, no shadows. Our Work drops tiles entirely and sets the four disciplines as a ruled list, so a candidate scanning for their own discipline finds it in one pass. Culture is the single flourish: a photo mosaic breaking out of a full-bleed lime band, warmth placed exactly where the page starts talking about people. It asks the least of production — no illustration budget, no shoot — and the most of the copy.",
        },
        {
          src: `${IMG}/home-atmospheric.webp`,
          title: "Home — Atmospheric",
          alt: "Home page direction: a contour-paper hero with a centred headline, a full-bleed snow massif straddling the seam into navy, four pillar cards on navy, and a beige work section of wireframe-surface cards above a wave transition.",
          note: "Photography carries this one. A contour-paper hero, then a full-bleed massif that straddles the seam into navy, so the first two screens read as landscape rather than layout. The pillars sit as four cards across the navy; Our Work moves onto beige — the warm ground the guidelines reserve for human content — with each discipline given its own wireframe surface and a colour dot keyed to the pillar it belongs to. A wave carries the page back to white. It asks for art direction: a specific high-contrast, unpeopled crop rather than a stock alpine shot, and a scrim under any text that sits on photography to clear 4.5 : 1.",
        },
        {
          src: `${IMG}/home-editorial.webp`,
          title: "Home — Editorial",
          alt: "Home page direction: a full-bleed mountain hero, the four pillars as numbered planes in lime, gray, cyan and outline overlapping on a rising diagonal, four wireframe surfaces cascading down a contour ground, and a layered photo mosaic with the Join Us card cut into it.",
          note: "The most expressive of the four, and the closest to Pangea being drawn rather than described. The pillars become numbered planes — 01 to 04, lime, gray, cyan, outline — overlapping on a rising diagonal, and Our Work cascades four wireframe surfaces down the page on the same angle over a contour ground that spans the whole section. Nothing is contained; depth comes from overlap and offset. Culture layers photography the same way, with the Join Us card cut into the mosaic instead of following it. The most ownable direction and the most demanding: the overlap has to degrade to a clean stack below 900px, and no plane’s text may ever land on another’s.",
        },
        {
          src: `${IMG}/home-human-inclusive.webp`,
          title: "Home — Human and Inclusive",
          alt: "Home page direction: rounded throughout, with outlined pill badges, four white pillar cards carrying oversized numerals on a warm gradient band, a two-by-two of soft tinted cards with outline icons, a photo mosaic on navy and a full lime call to action.",
          note: "Rounded throughout, and the only one that leads with people rather than terrain. Outlined pill badges open each section, the pillars become four white cards with oversized numerals on a warm gradient band, and Our Work is a 2×2 of soft tinted cards with outline icons — more immediately scannable than a cascade, and the easiest read for a candidate coming from outside finance. Culture is a photo mosaic on navy, and Join Us takes a full lime band, the strongest call to action of the four. It sits furthest from a quant firm’s usual register, and it carries a real dependency: an icon set drawn for the brand and a shoot of its own. Without both it reverts to stock.",
        },
      ],
    },
    { type: "divider" },

    {
      type: "zoomRow",
      frameWidth: 480,
      frameHeight: 620,
      label: "Two Careers directions — scroll sideways to see more, click to open full size",
      padTop: 0,
      padBottom: 100,
      figures: [
        {
          src: `${IMG}/careers-sage.webp`,
          title: "Careers — Sage",
          alt: "Careers page direction: six named behaviours in two ruled rows over a faint wireframe terrain, a four-step hiring process drawn on a line, and a filtered role list.",
          note: "Careers in the Sage register — square corners, hairline rules, no containers. What we look for is six named behaviours in two ruled rows over a faint wireframe terrain: the first thing a serious candidate reads, stated as behaviour rather than adjective. The hiring process is drawn as four numbered steps on a line, and Open positions filters by track and family before it lists anything, so the page narrows for the candidate instead of making them do it.",
        },
        {
          src: `${IMG}/careers-atmospheric.webp`,
          title: "Careers — Atmospheric",
          alt: "Careers page direction: a navy contour hero with climbing photography, the six behaviours as rounded cards on navy, and a layered wave in the brand colours separating the process from the listings.",
          note: "The same architecture in the photographic register. A navy contour hero with climbers on rock states the exploration idea literally rather than through the graphic system, and the six behaviours become rounded cards on navy instead of ruled rows. A layered wave in the four brand colours separates the process from the listings. Same information, same order — the difference is how much of the persuading the picture does.",
        },
      ],
    },

  ],
};
