"use client";

import { useHoldOpen } from "@/components/hold-open";

const HAIRLINE = "border-[rgba(21,32,50,0.1)]";

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0 text-[var(--blue)]"
    >
      <path
        d="M5 12.5l4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The differentiator checklist beside "Our Approach" — one row carries the blue
 * gradient, and the row the cursor last entered keeps it.
 *
 * The card matches the copy column's height and the rows divide it equally —
 * that is the rule the frames follow, not a fixed row height. Lungs has five
 * rows in a 573 card (114.6 each), Sleep eight in a 704 card (88 each). Pinning
 * rows to one number gets one page right and stretches or squashes every other.
 * 88 is the natural height of a row — 32px padding either side of a 24px line —
 * so it is the floor when the copy column is shorter than the list.
 */
export function Checklist({
  bullets,
  highlight = 1,
}: {
  bullets: string[];
  highlight?: number;
}) {
  const { hold } = useHoldOpen(highlight);

  return (
    <ul className={`checkrow flex h-full flex-col overflow-clip rounded-2xl border ${HAIRLINE}`}>
      {bullets.map((b, i) => (
        <li
          key={b}
          {...hold(i)}
          className={`checkitem flex min-h-[88px] flex-1 items-center gap-3 p-8 text-[var(--ink-80)] ${
            i < bullets.length - 1 ? `border-b ${HAIRLINE}` : ""
          }`}
        >
          <Check />
          <span className="text-base leading-6">{b}</span>
        </li>
      ))}
    </ul>
  );
}
