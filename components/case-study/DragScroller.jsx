"use client";

import { useRef } from "react";

/*
  The horizontal rows scroll with a trackpad or a scrollbar; on a mouse there
  is no sideways gesture at all, so the row looks static until you find the
  bar. This adds click-and-drag panning on pointer devices.

  Three details matter:
  - Touch is left alone. Native touch scrolling has momentum and rubber-band
    that no JS version matches, so we only take over for mouse/pen.
  - Scroll snapping is switched off at the first drag and stays off for that
    row. With `scroll-snap-type: x mandatory` the row fights every pixel of
    movement and then snaps back to the nearest card on release.
  - The click that ends a drag is swallowed. Without that, dragging across a
    zoomable thumbnail in the Seven Research row opens the lightbox on release.
*/
export default function DragScroller({ className = "", label, children }) {
  const ref = useRef(null);
  const drag = useRef({ down: false, moved: false, x: 0, left: 0 });

  const start = (e) => {
    if (e.pointerType === "touch" || e.button !== 0) return;
    const el = ref.current;
    drag.current = { down: true, moved: false, x: e.clientX, left: el.scrollLeft };
  };

  const move = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) < 4) return;
    if (!d.moved) {
      d.moved = true;
      const el = ref.current;
      el.classList.add("is-dragging");
      el.style.scrollSnapType = "none";
      el.style.scrollBehavior = "auto";
      el.setPointerCapture?.(e.pointerId);
    }
    e.preventDefault();
    ref.current.scrollLeft = d.left - dx;
  };

  const end = () => {
    const d = drag.current;
    if (!d.down) return;
    d.down = false;
    const el = ref.current;
    el.classList.remove("is-dragging");
    el.style.scrollBehavior = "";
    /* Snapping stays off for the rest of the session on a row that has been
       dragged. Restoring it here yanks the row back to the nearest card the
       moment the button is released, which reads as the drag being rejected. */
  };

  const swallowClick = (e) => {
    if (!drag.current.moved) return;
    drag.current.moved = false;
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      ref={ref}
      role="region"
      aria-label={label}
      tabIndex={0}
      className={className}
      onPointerDown={start}
      onPointerMove={move}
      onPointerUp={end}
      onPointerCancel={end}
      onClickCapture={swallowClick}
      onDragStart={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
}
