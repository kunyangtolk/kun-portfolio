"use client";

import { useEffect, useRef, useState } from "react";
import Rich from "./RichText";

/*
  A heading, a screen recording, then its commentary. Figma nodes 924:4704,
  924:4711 and 924:4720 — the three FairWorx iterations.

  In Figma each of these slots is a rounded rectangle whose fill is a video,
  not a still, so they are rendered as real <video> rather than screenshots:
  the interactions being described (focus advancing to the next risk, grouping,
  the AI insight fields filling in) are the point of the section.

  Loading is deferred. preload="none" means nothing is fetched until play() is
  called, and play() only happens once the figure scrolls into view; it pauses
  again on the way out. Three autoplaying clips would otherwise cost ~8MB
  before the reader has reached the first one.

  Under prefers-reduced-motion nothing plays on its own — the poster frame
  stands in for the still Figma drew, and native controls appear so the clip is
  still reachable.
*/
export default function VideoFigure({
  heading,
  src,
  poster,
  alt,
  frameWidth = 1138,
  frameHeight = 807,
  paragraphs,
  padTop = 80,
  padBottom = 40,
}) {
  const ref = useRef(null);
  const [reduced, setReduced] = useState(false);
  const [controls, setControls] = useState(false);

  /* Native controls appear in two cases: when motion is reduced, and below the
     lg breakpoint. A 1138px recording of dense form UI is a postage stamp on a
     phone, and the controls are the only route to fullscreen. */
  useEffect(() => {
    const small = window.matchMedia?.("(max-width: 1023px)");
    const still = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const sync = () => setControls(!!small?.matches || !!still?.matches);
    sync();
    small?.addEventListener?.("change", sync);
    still?.addEventListener?.("change", sync);
    return () => {
      small?.removeEventListener?.("change", sync);
      still?.removeEventListener?.("change", sync);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        /* A rejected play() is normal — a background tab, a battery-saver
           policy — and is left alone: the poster stands in, and the click
           handler below is the way back in. It must not flip the component
           into a different visual state. */
        if (entry.isIntersecting) el.play?.().catch(() => {});
        else el.pause?.();
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const el = ref.current;
    if (!el || reduced) return;
    if (el.paused) el.play?.().catch(() => {});
    else el.pause?.();
  };

  return (
    <section
      className="cs-band w-full bg-white"
      style={{ "--pt": `${padTop}px`, "--pb": `${padBottom}px` }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-6 md:px-12 lg:px-20">
        <h2 className="text-card w-full leading-[1.5] text-ink">{heading}</h2>

        <div
          className="figure-frame relative w-full max-w-[1138px]"
          style={{ aspectRatio: `${frameWidth} / ${frameHeight}` }}
        >
          <video
            ref={ref}
            poster={poster}
            preload="none"
            muted
            loop
            playsInline
            controls={controls}
            aria-label={alt}
            onClick={toggle}
            className="absolute inset-0 h-full w-full cursor-pointer object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>

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
