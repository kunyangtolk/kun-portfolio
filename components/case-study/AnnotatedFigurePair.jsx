import Rich from "./RichText";
import DragScroller from "./DragScroller";
import { AnnotatedFrame } from "./AnnotatedFigure";

/*
  Two annotated screens side by side, at the same size and with the same
  callouts as AnnotatedFigure, plus an arrow from a control on the first
  screen to the second one ("clicking this opens that").

  At 832px each the pair is wider than most viewports, so it scrolls sideways
  like ScrollingFigures: full viewport width, drag-to-pan on a mouse, snapping
  to each screen on touch. Below md a screen is 86vw wide, so one fills the
  view and its notes are listed under it.

  `arrow` is in the first screen's design pixels: it leaves the point
  (x, y0), drops to y1 and then runs right, out of the frame and across the
  gap, stopping just short of the second screen. --bw is .figure-frame's
  border width and --gap the gap between the screens; the arrow's length is
  built from both so it always ends at the second frame.

  The scroller clips vertically (overflow-x forces it), so it carries top
  padding for badges and rings that sit just outside a frame. It is
  `relative` so it is also the containing block for the notes' sr-only
  labels, which would otherwise escape the clip and widen the page. Auto
  margins on the first and last screen centre the pair when it fits and
  resolve to zero when it scrolls.
*/
export default function AnnotatedFigurePair({
  screens,
  arrow,
  arrowLabel,
  paragraphs,
  label = "Screens — scroll sideways to see both",
  padTop = 80,
  padBottom = 80,
}) {
  const [first] = screens;
  const pct = (v, total) => `${(v / total) * 100}%`;

  return (
    <section
      className="cs-band w-full bg-white"
      style={{ "--pt": `${padTop}px`, "--pb": `${padBottom}px` }}
    >
      <div className="flex w-full flex-col gap-10">
        <DragScroller
          label={label}
          className="cs-scroller relative flex items-start gap-(--gap) *:first:ml-auto *:last:mr-auto px-6 pt-6 scroll-pl-6 [--bw:3px] [--gap:48px] md:px-12 md:scroll-pl-12 md:[--bw:4px] md:[--gap:96px] lg:px-20 lg:scroll-pl-20 lg:[--bw:6px]"
        >
          {screens.map((s, i) => (
            <AnnotatedFrame
              key={s.src}
              {...s}
              sizes="(max-width: 968px) 86vw, 832px"
              className="shrink-0 snap-start"
              style={{ width: "min(832px, 86vw)" }}
            >
              {i === 0 && arrow && (
                <>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute size-1.5 -translate-1/2 rounded-full bg-lime"
                    style={{
                      left: pct(arrow.x, first.designWidth),
                      top: pct(arrow.y0, first.designHeight),
                    }}
                  />
                  {/* One elbow: the left and bottom borders of a box from
                      the dot to the gap, with the corner between them
                      rounded. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute rounded-bl-[6px] border-b-2 border-l-2 border-lime md:rounded-bl-[8px]"
                    style={{
                      left: `calc(${pct(arrow.x, first.designWidth)} - 1px)`,
                      top: pct(arrow.y0, first.designHeight),
                      height: `calc(${pct(arrow.y1 - arrow.y0, first.designHeight)} + 1px)`,
                      right: "calc(-1 * (var(--bw) + var(--gap)) + 8px)",
                    }}
                  />
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 10 12"
                    className="pointer-events-none absolute h-3 w-2.5 -translate-y-1/2 fill-lime"
                    style={{
                      top: pct(arrow.y1, first.designHeight),
                      right: "calc(-1 * (var(--bw) + var(--gap)) + 4px)",
                    }}
                  >
                    <path d="M0 0 L10 6 L0 12 Z" />
                  </svg>
                  {arrowLabel && <span className="sr-only">{arrowLabel}</span>}
                </>
              )}
            </AnnotatedFrame>
          ))}
        </DragScroller>

        {paragraphs?.length > 0 && (
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 md:px-12 lg:px-20">
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
