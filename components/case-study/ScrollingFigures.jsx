import Image from "next/image";
import Rich from "./RichText";
import DragScroller from "./DragScroller";

/*
  A horizontally scrollable row of full-size figures.

  Deviates from Figma deliberately. The design puts the four Report Builder
  screens in a 2x2 of 618px panes, which made them the smallest images on the
  page despite being the densest — four different configuration screens full of
  small form labels. Here they run in a single row at the same 832px as every
  other figure and the row scrolls.

  Accessibility: a scrollable region needs to be reachable without a mouse, so
  it takes focus and is labelled. Scroll snapping is disabled under
  prefers-reduced-motion via .cs-scroller in globals.css.

  scroll-pl-* mirrors px-*: without it the snapport starts at the padding box,
  so the browser snaps the first pane flush to the viewport edge and scrolls
  the left gutter away — the row looked like it had no left margin at all on
  narrow screens.
*/
export default function ScrollingFigures({
  figures,
  paragraphs,
  frameWidth = 832,
  frameHeight = 669,
  label = "Screenshots — scroll sideways to see more",
  padTop = 80,
  padBottom = 80,
}) {
  return (
    <section
      className="cs-band w-full bg-white"
      style={{ "--pt": `${padTop}px`, "--pb": `${padBottom}px` }}
    >
      <div className="flex w-full flex-col gap-10">
      {/* The row runs the full viewport width: past 1440 a centred column
          would letterbox it between two white margins, and a scrolling row of
          screenshots is exactly the thing that should use the extra monitor.
          The prose below stays in the centred column. */}
        <DragScroller
          label={label}
          className="cs-scroller flex gap-6 px-6 scroll-pl-6 md:gap-10 md:px-12 md:scroll-pl-12 lg:px-20 lg:scroll-pl-20"
        >
          {figures.map((fig) => (
            <div
              key={fig.src}
              className="figure-frame relative shrink-0 snap-start"
              style={{
                width: `min(${frameWidth}px, 86vw)`,
                aspectRatio: `${frameWidth} / ${frameHeight}`,
              }}
            >
              <Image
                src={fig.src}
                alt={fig.alt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 86vw, 832px"
                className="object-cover"
              />
            </div>
          ))}
        </DragScroller>

        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 md:px-12 lg:px-20">
          {paragraphs.map((text, i) => (
            <p key={i} className="text-prose leading-[1.5] text-ink">
              <Rich value={text} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
