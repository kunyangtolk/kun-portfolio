import Image from "next/image";
import Rich from "./RichText";

/*
  A framed screenshot with numbered callouts drawn over it, above its
  commentary. Same slot, padding and commentary as FigureSection.

  Each annotation circles one element of the design and carries an index
  badge. From md up, hovering an element (or focusing its badge) shows the
  annotation in a tooltip. Below md, the circles and numbers stay and every
  annotation is listed under the frame instead, since there is no hover.

  Annotation boxes are in the design's own pixels (`designWidth` by
  `designHeight`, the Figma frame size) and are placed as percentages, so they
  track the screenshot at every width.

    { n, x, y, w, h, text, badge, tip }
      badge  where the index sits, always just outside the circle: off a
             corner, "tl" (default) or "tr"; beside it, "l" or "r"; or below
             it, "b"
      tip    tooltip placement: "below" (default) or "above", plus "-end" to
             right-align it with the element, e.g. "above-end"

  The overlay is a sibling of the frame rather than inside it, because the
  frame clips (overflow: hidden) and badges and tooltips need to spill past
  its edge. Its inset matches .figure-frame's border at each breakpoint so the
  percentages measure the image, not the border.
*/

/* Every badge sits just outside its circle, so it never covers the element
   it points at: off a corner ("tl", "tr"), beside it ("l", "r") or under it
   ("b"). */
const GAP = "3px";
const BADGE_POS = {
  tl: { left: 0, top: 0, transform: `translate(calc(-100% - ${GAP}), calc(-100% - ${GAP}))` },
  tr: { left: "100%", top: 0, transform: `translate(${GAP}, calc(-100% - ${GAP}))` },
  l: { left: 0, top: "50%", transform: `translate(calc(-100% - ${GAP}), -50%)` },
  r: { left: "100%", top: "50%", transform: `translate(${GAP}, -50%)` },
  b: { left: "50%", top: "100%", transform: `translate(-50%, ${GAP})` },
};

function Annotation({ a, designWidth, designHeight, id }) {
  const pct = (v, total) => `${(v / total) * 100}%`;
  const [vert = "below", align] = (a.tip || "below").split("-");
  const tipPos = {
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
        className="pointer-events-none absolute inset-0 rounded-[4px] border border-lime transition-shadow md:rounded-[6px] md:group-hover:shadow-[0_0_0_6px_rgba(180,255,6,0.35)]"
      />
      <button
        type="button"
        aria-label={`Annotation ${a.n}`}
        aria-describedby={id}
        className="absolute z-10 flex size-3.5 cursor-default items-center justify-center rounded-full bg-lime text-[8px] leading-none font-bold text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:size-4 md:text-[10px]"
        style={BADGE_POS[a.badge || "tl"]}
      >
        {a.n}
      </button>
      <span
        id={id}
        role="tooltip"
        className="pointer-events-none invisible absolute z-20 hidden w-72 rounded-lg bg-ink px-4 py-3 text-sm leading-[1.5] font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 md:block md:group-focus-within:visible md:group-focus-within:opacity-100 md:group-hover:visible md:group-hover:opacity-100"
        style={tipPos}
      >
        {a.text}
      </span>
    </div>
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
        <figure className="flex w-full flex-col gap-6" style={{ maxWidth: `${maxWidth}px` }}>
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
                sizes={`(max-width: ${maxWidth + 48}px) 100vw, ${maxWidth}px`}
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
            </div>
          </div>
          <figcaption className="md:hidden">
            <ol className="flex flex-col gap-3">
              {annotations.map((a) => (
                <li key={a.n} className="flex gap-3 text-base leading-[1.5] text-ink">
                  <span
                    aria-hidden="true"
                    className="mt-[2px] flex size-6 flex-none items-center justify-center rounded-full bg-lime text-xs font-bold text-black"
                  >
                    {a.n}
                  </span>
                  <span>
                    <span className="sr-only">{`Annotation ${a.n}: `}</span>
                    {a.text}
                  </span>
                </li>
              ))}
            </ol>
          </figcaption>
        </figure>
        <div className="flex w-full flex-col gap-6">
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
