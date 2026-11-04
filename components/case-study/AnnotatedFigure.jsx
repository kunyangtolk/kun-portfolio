import Image from "next/image";
import Rich from "./RichText";

/*
  A framed screenshot with numbered callouts drawn over it, above its
  commentary. Same slot, padding and commentary as FigureSection.

  Each annotation puts an index badge next to one element of the design. From
  md up, hovering the element (or focusing its badge) circles it and shows
  the annotation in a tooltip beside it. Below md there is no hover, so only
  the numbers show and every annotation is listed under the frame instead.

  Annotation boxes are in the design's own pixels (`designWidth` by
  `designHeight`, the Figma frame size) and are placed as percentages, so they
  track the screenshot at every width.

    { n, x, y, w, h, text, badge, tip }
      badge  where the index sits, always just outside the element: off a
             corner, "tl" (default), "tr" or "bl"; beside it, "l" or "r"; or
             below it, "b"
      tip    tooltip placement: "below" (default) or "above", plus "-end" to
             right-align it with the element, e.g. "above-end"; or "left",
             beside the element, so it covers nothing above or below it

    `text` is a string, or an array of RichText parts for bold runs.

    { n, page: true, text }
      a note about the whole screen rather than one element. Its badge sits
      off the frame's top-left corner, and only the badge (not the whole
      frame) shows the note, so the other callouts stay easy to hover. The
      frame is circled while the note is showing.

  The overlay is a sibling of the frame rather than inside it, because the
  frame clips (overflow: hidden) and badges and tooltips need to spill past
  its edge. Its inset matches .figure-frame's border at each breakpoint so the
  percentages measure the image, not the border.
*/

/* Every badge sits just outside its element, so it never covers the element
   it points at: off a corner ("tl", "tr", "bl"), beside it ("l", "r") or
   under it ("b"). */
const GAP = "3px";
const BADGE_POS = {
  tl: { left: 0, top: 0, transform: `translate(calc(-100% - ${GAP}), calc(-100% - ${GAP}))` },
  tr: { left: "100%", top: 0, transform: `translate(${GAP}, calc(-100% - ${GAP}))` },
  l: { left: 0, top: "50%", transform: `translate(calc(-100% - ${GAP}), -50%)` },
  r: { left: "100%", top: "50%", transform: `translate(${GAP}, -50%)` },
  b: { left: "50%", top: "100%", transform: `translate(-50%, ${GAP})` },
  bl: { left: 0, top: "100%", transform: `translate(calc(-100% - ${GAP}), ${GAP})` },
};

function PageAnnotation({ a, id }) {
  return (
    <div className="group pointer-events-none absolute inset-0">
      <span
        aria-hidden="true"
        className="absolute -inset-[3px] rounded-[8px] border border-lime opacity-0 transition-opacity duration-150 md:-inset-[4px] md:group-focus-within:opacity-100 md:group-hover:opacity-100 lg:-inset-[6px]"
      />
      <button
        type="button"
        aria-label={`Annotation ${a.n}`}
        aria-describedby={id}
        className={`${BADGE_CLASS} pointer-events-auto`}
        style={{ left: 0, top: 0, transform: "translate(calc(-100% - 6px), calc(-100% - 6px))" }}
      >
        {a.n}
      </button>
      <span
        id={id}
        role="tooltip"
        className={TIP_CLASS}
        style={{ left: 12, top: 12 }}
      >
        <Rich value={a.text} />
      </span>
    </div>
  );
}

/* The ::before pad widens each badge's hover target well past its 14-16px
   circle without changing how it looks. */
const BADGE_CLASS =
  "absolute z-10 flex size-3.5 cursor-default before:absolute before:-inset-2.5 before:rounded-full before:content-[''] items-center justify-center rounded-full bg-lime text-[8px] leading-none font-bold text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:size-4 md:text-[10px]";
const TIP_CLASS =
  "pointer-events-none invisible absolute z-20 hidden w-72 rounded-lg bg-ink px-4 py-3 text-sm leading-[1.5] font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 md:block md:group-focus-within:visible md:group-focus-within:opacity-100 md:group-hover:visible md:group-hover:opacity-100";

function Annotation({ a, designWidth, designHeight, id }) {
  if (a.page) return <PageAnnotation a={a} id={id} />;
  const pct = (v, total) => `${(v / total) * 100}%`;
  const [vert = "below", align] = (a.tip || "below").split("-");
  /* "left" puts the note beside the element, clear of anything above or
     below it (e.g. a modal the note describes), bottom-aligned with it and
     far enough out to clear an "l" badge. */
  const tipPos =
    vert === "left"
      ? { right: "calc(100% + 28px)", bottom: 0 }
      : {
          ...(vert === "above"
            ? { bottom: "calc(100% + 10px)" }
            : { top: "calc(100% + 10px)" }),
          ...(align === "end" ? { right: 0 } : { left: 0 }),
        };

  return (
    <div
      className="group absolute"
      style={{
        left: pct(a.x, designWidth),
        top: pct(a.y, designHeight),
        width: pct(a.w, designWidth),
        height: pct(a.h, designHeight),
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[6px] border border-lime opacity-0 transition-opacity duration-150 md:group-focus-within:opacity-100 md:group-hover:opacity-100"
      />
      <button
        type="button"
        aria-label={`Annotation ${a.n}`}
        aria-describedby={id}
        className={BADGE_CLASS}
        style={BADGE_POS[a.badge || "tl"]}
      >
        {a.n}
      </button>
      <span
        id={id}
        role="tooltip"
        className={TIP_CLASS}
        style={tipPos}
      >
        <Rich value={a.text} />
      </span>
    </div>
  );
}

/* One framed screenshot with its callouts and, below md, its list of notes.
   AnnotatedFigure wraps one in a section; AnnotatedFigurePair puts two side
   by side. `children` render inside the callout overlay, in the same
   coordinate box as the annotations (e.g. an arrow leaving the frame). */
export function AnnotatedFrame({
  src,
  alt,
  designWidth,
  designHeight,
  annotations,
  idPrefix = "annotation",
  sizes,
  className = "",
  style,
  captionClassName = "text-ink",
  children,
}) {
  return (
    <figure className={`flex flex-col gap-6 ${className}`} style={style}>
      <div
        className="relative w-full"
        style={{ aspectRatio: `${designWidth} / ${designHeight}` }}
      >
        <div className="figure-frame absolute inset-0">
          <Image
            src={src}
            alt={alt}
            fill
            quality={90}
            sizes={sizes}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-[3px] md:inset-[4px] lg:inset-[6px]">
          {annotations.map((a) => (
            <Annotation
              key={a.n}
              a={a}
              designWidth={designWidth}
              designHeight={designHeight}
              id={`${idPrefix}-${a.n}`}
            />
          ))}
          {children}
        </div>
      </div>
      {annotations.length > 0 && (
      <figcaption className="md:hidden">
        <ol className="flex flex-col gap-3">
          {annotations.map((a) => (
            <li key={a.n} className={`flex gap-3 text-base leading-[1.5] ${captionClassName}`}>
              <span
                aria-hidden="true"
                className="mt-[2px] flex size-6 flex-none items-center justify-center rounded-full bg-lime text-xs font-bold text-black"
              >
                {a.n}
              </span>
              <span>
                <span className="sr-only">{`Annotation ${a.n}: `}</span>
                <Rich value={a.text} />
              </span>
            </li>
          ))}
        </ol>
      </figcaption>
      )}
    </figure>
  );
}

export default function AnnotatedFigure({
  src,
  alt,
  designWidth,
  designHeight,
  annotations,
  maxWidth = 832,
  paragraphs,
  padTop = 80,
  padBottom = 80,
  idPrefix = "annotation",
}) {
  return (
    <section
      className="cs-band w-full bg-white"
      style={{ "--pt": `${padTop}px`, "--pb": `${padBottom}px` }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-6 md:px-12 lg:px-20">
        <AnnotatedFrame
          src={src}
          alt={alt}
          designWidth={designWidth}
          designHeight={designHeight}
          annotations={annotations}
          idPrefix={idPrefix}
          sizes={`(max-width: ${maxWidth + 48}px) 100vw, ${maxWidth}px`}
          className="w-full"
          style={{ maxWidth: `${maxWidth}px` }}
        />
        {paragraphs?.length > 0 && (
        <div className="flex w-full flex-col gap-6">
          {paragraphs.map((text, i) => (
            <p key={i} className="text-prose leading-[1.5] text-ink">
              <Rich value={text} />
            </p>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
