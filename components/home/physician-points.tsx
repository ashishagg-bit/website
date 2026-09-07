"use client";

import { useHoldOpen } from "@/components/hold-open";

/**
 * The points under "Meet your physician" — Figma 1:1776.
 *
 * The frame rests with the first point open and the rest collapsed to their
 * headings. Holding the last row entered rather than opening on :hover: the
 * CSS pair this replaced ran both ways at once on the way out, so the row
 * flickered between the hovered point and the frame's default. See
 * components/hold-open.ts.
 *
 * A point with no body has nothing to reveal, so it never claims the slot —
 * crossing it leaves the open one where the reader put it.
 */
export function PhysicianPoints({
  points,
}: {
  points: { title: string; body?: string }[];
}) {
  const { hold } = useHoldOpen(0);

  return (
    <div className="acc flex w-full flex-col">
      {points.map((p, i) => (
        <div
          key={p.title}
          {...hold(i, { claimable: Boolean(p.body) })}
          className="acc-row flex w-full flex-col py-5"
        >
          <h3 className="text-lg leading-6 text-[var(--ink)]">{p.title}</h3>
          {p.body && (
            <p className="acc-body text-base leading-[22px] text-[var(--ink-60)]">
              {p.body}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
