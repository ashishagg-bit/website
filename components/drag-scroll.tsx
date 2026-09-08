"use client";

import { useRef } from "react";

/**
 * A horizontally scrolling list the reader can also drag with the pointer.
 *
 * The method row (Figma 2512:11677) runs off the right edge of the frame and
 * is meant to be scrolled. Native overflow scrolling covers trackpads and
 * touch, but a mouse has no horizontal wheel and the scrollbar was hidden, so
 * on a desktop with a mouse the row simply looked cut off. Dragging the row
 * gives that reader a way in, and the thin scrollbar (`scroll-thin`) shows
 * there is somewhere to go.
 */
export function DragScroll({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLUListElement | null>(null);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  return (
    <ul
      ref={ref}
      className={`cursor-grab select-none data-[dragging]:cursor-grabbing ${className}`}
      onPointerDown={(e) => {
        // Mouse only: touch already scrolls natively, and capturing it would
        // fight the browser's own gesture.
        if (e.pointerType !== "mouse" || e.button !== 0 || !ref.current) return;
        drag.current = { x: e.clientX, left: ref.current.scrollLeft, moved: false };
      }}
      onPointerMove={(e) => {
        const d = drag.current;
        const el = ref.current;
        if (!d || !el) return;
        const dx = e.clientX - d.x;
        if (!d.moved && Math.abs(dx) < 4) return;
        if (!d.moved) {
          d.moved = true;
          el.setPointerCapture(e.pointerId);
          el.setAttribute("data-dragging", "");
        }
        el.scrollLeft = d.left - dx;
      }}
      onPointerUp={(e) => {
        const el = ref.current;
        if (el && drag.current?.moved) {
          el.releasePointerCapture(e.pointerId);
          el.removeAttribute("data-dragging");
        }
        drag.current = null;
      }}
      onPointerCancel={() => {
        ref.current?.removeAttribute("data-dragging");
        drag.current = null;
      }}
      onClickCapture={(e) => {
        // A drag that ends over a link must not follow it.
        if (drag.current?.moved) e.preventDefault();
      }}
    >
      {children}
    </ul>
  );
}
