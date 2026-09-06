"use client";

import { useEffect, useRef, useState } from "react";

/*
  Arms a scroll-triggered animation on its children, via a `data-anim`
  attribute the stylesheet keys off.

  The default (server-rendered) state has no attribute at all, which is the
  *finished* state — so with JavaScript disabled, a failed hydration, or an
  older browser, the grid simply renders complete. Nothing is ever hidden by
  CSS that JS is then responsible for revealing.

  It also refuses to arm if the element is already on screen at mount, which
  is what prevents a visible flash of the content disappearing before it
  animates back in.
*/
export default function InView({ className = "", threshold = 0.12, children }) {
  const ref = useRef(null);
  const [state, setState] = useState(null); // null → armed → run

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    // Already in view on load — show it finished rather than yanking it away.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;

    setState("armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("run");
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} data-anim={state ?? undefined} className={className}>
      {children}
    </div>
  );
}
