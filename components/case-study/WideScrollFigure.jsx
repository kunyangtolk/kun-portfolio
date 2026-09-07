import Rich from "./RichText";
import DragScroller from "./DragScroller";

/*
  The wide diagram panels. Figma draws these deliberately wider than the 1440
  frame — 2397px for the manual-saving flow, 3019px for partial progress,
  2567px for the validation states — and clips them at the frame edge, with
  "Ctrl/Command+scroll to zoom" in the layer name as the canvas equivalent of
  "there is more to the right". On the web that becomes a horizontal scroll.

  The image is served at its Figma pixel width rather than being fitted to the
  viewport: these are flow diagrams of small form UI, and shrinking one to
  390px would make it unreadable — which is the whole reason it overflows in
  the first place. Height steps down on narrower screens so a 957px panel
  doesn't eat a whole phone screen, and the aspect keeps the width in step.

  A plain <img> rather than next/image: the webp is already generated at the
  exact size this needs, and a second re-encode is what flattened the hero
  earlier in the project.
*/
export default function WideScrollFigure({
  src,
  alt,
  height,
  /* `framed` draws the .figure-frame border; `inset` starts the panel at the
     content gutter and lets it bleed off the right, as Figma places the
     supplier-views row. They are independent — that row is inset but has no
     stroke of its own. */
  framed = false,
  inset = false,
  /* Panels whose own ground is the deep navy (the edge-case diagrams) set
     ground="deep": the band takes that colour so the panel bleeds into it on a
     monitor wider than the 1440 the panel was drawn at, instead of ending in a
     white strip on the right. */
  ground = "white",
  /* How much of the desktop height the panel keeps on smaller screens. The
     default shrinks a wide flow diagram so it doesn't eat a whole phone
     screen; a panel whose labels are the point raises it and scrolls instead. */
  scaleSm = 0.55,
  scaleMd = 0.78,
  label = "Diagram — scroll sideways to see more",
  paragraphs,
  padTop = 0,
  padBottom = 0,
}) {
  const scroller = (
    <DragScroller
      label={label}
      className={`cs-scroller w-full ${framed ? "figure-frame" : ""} ${
        inset
          ? "flex pl-6 pr-6 pt-0.5 md:pl-12 md:pr-12 lg:pl-[88px] lg:pr-20"
          : ""
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="mx-auto block h-[var(--h-sm)] w-auto max-w-none shrink-0 md:h-[var(--h-md)] lg:h-[var(--h-lg)]"
        style={{
          "--h-sm": `${Math.round(height * scaleSm)}px`,
          "--h-md": `${Math.round(height * scaleMd)}px`,
          "--h-lg": `${height}px`,
        }}
      />
    </DragScroller>
  );

  return (
    <section
      className={`cs-band w-full ${ground === "deep" ? "bg-deep" : "bg-white"}`}
      style={{ "--pt": `${padTop}px`, "--pb": `${padBottom}px` }}
    >
      <div className="flex w-full flex-col gap-10">
        {/* Inset variant carries its gutters on the scroller itself, so the
            left one holds at rest and the right one appears at the end of the
            scroll — as an outer wrapper the row simply ran out flush against
            the viewport edge. 88px on the left is the 80px content edge plus
            Figma's own 8px inner padding. The bare panels run edge to edge. */}
      {/* The row runs the full viewport width: past 1440 a centred column
          would letterbox it between two white margins, and a scrolling row of
          screenshots is exactly the thing that should use the extra monitor.
          The prose below stays in the centred column. */}
        {scroller}

        {paragraphs?.length ? (
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 md:px-12 lg:px-20">
            {paragraphs.map((text, i) => (
              <p key={i} className="text-prose leading-[1.5] text-ink">
                <Rich value={text} />
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
