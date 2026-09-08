"use client";

import { useState } from "react";

const HAIRLINE = "border-[rgba(21,32,50,0.1)]";

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden
         className="shrink-0 text-[var(--blue)]">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * The three columns of what the scan reads (2512:39802). The frame shows the
 * first rows of chips and a "View All →" where a list runs on; here that link
 * opens the column to the whole list, and the row grows with the tallest
 * open column rather than being pinned at the frame's 560.
 */
export function TestGroups({
  groups,
}: {
  groups: { title: string; body?: string; items: string[]; more?: string[] }[];
}) {
  const [open, setOpen] = useState<boolean[]>(() => groups.map(() => false));

  return (
    <div
      className={`mt-12 grid w-full max-w-[1280px] overflow-clip rounded-2xl border sm:grid-cols-2 lg:mt-[104px] lg:min-h-[560px] lg:grid-cols-3 ${HAIRLINE}`}
    >
      {groups.map((g, i) => {
        const hasMore = Boolean(g.more && g.more.length > 0);
        const shown = open[i] && g.more ? [...g.items, ...g.more] : g.items;
        return (
          <div
            key={g.title}
            className={`flex flex-col gap-6 border-b p-8 lg:border-b-0 ${
              i < groups.length - 1 ? `lg:border-r ${HAIRLINE}` : ""
            } ${HAIRLINE}`}
          >
            <h3 className="font-kalice text-[clamp(1.5rem,1.1rem+1vw,32px)] leading-[1.25] tracking-[1px] text-[var(--ink)]">
              {g.title}
            </h3>
            {g.body && (
              <p className="text-base leading-6 text-[var(--ink-60)]">{g.body}</p>
            )}
            <div className="mt-auto flex flex-col gap-3">
              <p className="text-base leading-6 text-[var(--ink-60)]">Including:</p>
              <ul className="flex flex-wrap items-center gap-2">
                {shown.map((it) => (
                  <li
                    key={it}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm leading-5 text-[var(--ink)] ${HAIRLINE}`}
                  >
                    <Tick />
                    {it}
                  </li>
                ))}
                {hasMore && (
                  <li>
                    <button
                      type="button"
                      aria-expanded={open[i]}
                      onClick={() =>
                        setOpen((prev) => prev.map((v, j) => (j === i ? !v : v)))
                      }
                      className="px-2 py-2 text-sm font-medium leading-5 text-[var(--blue)] transition-colors hover:text-[var(--blue-hover)]"
                    >
                      {open[i] ? "Show Less ←" : "View All →"}
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
