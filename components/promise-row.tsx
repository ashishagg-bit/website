"use client";

import { useHoldOpen } from "@/components/hold-open";
import { homePromises } from "@/lib/home-content";

const EDGE = "border-[rgba(255,255,255,0.06)]";

/**
 * The five-promise row — Figma node 1:1498 on the homepage, and the same band
 * again on About (2256:30470). Both frames draw it identically, so both pages
 * render this one component rather than keeping two copies of the markup in
 * step by hand.
 *
 * The open card widens, turns blue, enlarges its heading and reveals its body
 * (the `.tabrow` / `.promise` rules in globals.css). Promise 01 is the card the
 * row rests on, which is the state the frames captured; from there the row
 * holds whichever card the cursor last entered.
 */
export function PromiseRow() {
  const { hold } = useHoldOpen(0);

  return (
    <div
      className={`tabrow flex w-full max-w-[1328px] flex-col overflow-clip rounded-2xl border lg:flex-row ${EDGE}`}
    >
      {homePromises.map((p, i) => (
        <div
          key={p.n}
          {...hold(i)}
          className={`tab promise relative flex flex-col items-start justify-between overflow-clip p-8 lg:h-[440px] ${
            i < homePromises.length - 1
              ? `border-b lg:border-b-0 lg:border-r ${EDGE}`
              : ""
          }`}
        >
          <div
            aria-hidden
            className="promise-grain on-open pointer-events-none absolute inset-0"
          />

          <p className="promise-num relative font-kalice text-2xl leading-8 tracking-[1px]">
            {p.n}
          </p>

          <h3 className="promise-title relative w-full pt-4 font-kalice tracking-[1px] text-white">
            {p.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>

          {p.body && (
            <p className="promise-body relative max-w-[420px] text-base leading-6 text-white/80">
              {p.body}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
