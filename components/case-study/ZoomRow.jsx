"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Rich from "./RichText";

/*
  A row of full-page design directions, each shown as a window onto the top of
  the page and opened full size on click.

  These deliverables are 1440 x 4,800-6,500px comps. Laid out inline they would
  be four-thousand-pixel columns; shrunk to fit they become unreadable. So the
  row shows the head of each page at a legible scale — enough to read the
  composition and tell the directions apart — and the click opens the whole
  thing at full width, scrollable, over a dark ground.

  The lightbox is a plain fixed layer rather than a portal: nothing on these
  pages establishes a stacking context above it, and staying in the tree keeps
  focus order intact. Escape and a backdrop click both close it, the page
  behind is scroll-locked while it is open, and focus returns to the thumbnail
  that opened it.
*/
export default function ZoomRow({
  figures,
  paragraphs,
  frameWidth = 480,
  frameHeight = 620,
  label = "Design directions — scroll sideways to see more, click to open full size",
  padTop = 80,
  padBottom = 40,
}) {
  const [open, setOpen] = useState(null);
  const openerRef = useRef(null);
  const closeRef = useRef(null);

  const close = useCallback(() => {
    setOpen(null);
    openerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const shown = open === null ? null : figures[open];

  return (
    <section
      className="cs-band w-full bg-white"
      style={{ "--pt": `${padTop}px`, "--pb": `${padBottom}px` }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10">
        <div
          role="region"
          aria-label={label}
          tabIndex={0}
          className="cs-scroller flex gap-6 px-6 scroll-pl-6 md:gap-10 md:px-12 md:scroll-pl-12 lg:px-20 lg:scroll-pl-20"
        >
          {figures.map((fig, i) => (
            <figure key={fig.src} className="flex shrink-0 snap-start flex-col gap-3">
              <button
                type="button"
                onClick={(e) => {
                  openerRef.current = e.currentTarget;
                  setOpen(i);
                }}
                aria-label={`Open ${fig.title} at full size`}
                className="figure-frame group relative block cursor-zoom-in overflow-hidden"
                style={{
                  width: `min(${frameWidth}px, 78vw)`,
                  aspectRatio: `${frameWidth} / ${frameHeight}`,
                }}
              >
                {/* Anchored to the top: the head of a page is what distinguishes
                    one direction from another. */}
                <img
                  src={fig.src}
                  alt={fig.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-ink/75 py-2 text-[14px] leading-[1.4] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  Open full size
                </span>
              </button>
              <figcaption
                className="flex flex-col gap-2"
                style={{ width: `min(${frameWidth}px, 78vw)` }}
              >
                <span className="text-[18px] font-bold leading-[1.4] text-ink">
                  {fig.title}
                </span>
                {fig.note ? (
                  <span className="text-[16px] leading-[1.6] text-ink/70">
                    <Rich value={fig.note} />
                  </span>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* A row can stand on its captions alone; the commentary is optional. */}
        {paragraphs?.length ? (
          <div className="flex w-full flex-col gap-6 px-6 md:px-12 lg:px-20">
            {paragraphs.map((text, i) => (
              <p key={i} className="text-prose leading-[1.5] text-ink">
                <Rich value={text} />
              </p>
            ))}
          </div>
        ) : null}
      </div>

      {shown ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shown.title}
          onMouseDown={(e) => e.target === e.currentTarget && close()}
          className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-ink px-4 py-16 md:px-10"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="fixed right-4 top-4 z-10 rounded-full bg-white/15 px-4 py-2 text-[15px] leading-[1.4] text-white backdrop-blur transition-colors hover:bg-white/30 md:right-8 md:top-8"
          >
            Close
          </button>
          <p className="mx-auto mb-4 w-full max-w-[1440px] text-[15px] leading-[1.4] text-white/70">
            {shown.title}
          </p>
          <img
            src={shown.src}
            alt={shown.alt}
            className="mx-auto block w-full max-w-[1440px] rounded-[4px]"
          />
        </div>
      ) : null}
    </section>
  );
}
