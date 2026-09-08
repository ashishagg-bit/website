"use client";

import { useHoldOpen } from "@/components/hold-open";

const EDGE = "border-white/12";

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden
         className="mt-1 shrink-0 text-[var(--blue)]">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * The six reasons under "When \u0022normal\u0022 doesn't tell the whole story."
 * (2512:40525). The frame draws them at rest; on the page the cell the cursor
 * last entered carries a blue wash, the dark-band cousin of the checklist
 * highlight, and holds it (see components/hold-open.ts). Nothing is lit until
 * the reader points at a cell, which is the frame's own state.
 */
export function WhoForCells({ items }: { items: string[] }) {
  const { hold } = useHoldOpen(-1);

  return (
    <ul className={`darkrow grid w-full max-w-[1180px] overflow-clip rounded-2xl border sm:grid-cols-2 ${EDGE}`}>
      {items.map((t, i) => (
        <li
          key={t}
          {...hold(i)}
          className={`darkcell flex items-start gap-3 border-b p-8 text-base leading-6 text-white/80 ${EDGE} ${
            i % 2 === 0 ? `sm:border-r ${EDGE}` : ""
          } ${i >= items.length - 2 ? "sm:border-b-0" : ""}`}
        >
          <Tick />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
