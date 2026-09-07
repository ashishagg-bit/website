"use client";

import { useHoldOpen } from "@/components/hold-open";

/**
 * The three rows under "Your results are only the beginning" — Figma 2417:3286.
 *
 * Hairline-divided rows, each headed "01 — Track Your Progress" with its lead
 * in italic and the body beneath. The frame captures the first open.
 *
 * The open row is held rather than followed: opening on :hover alone drops the
 * body the moment the cursor leaves, which is the fault the review reported on
 * the other rows on the site. See components/hold-open.ts.
 */
export function BeyondRows({
  rows,
}: {
  rows: { n: string; title: string; lead: string; body: string[] }[];
}) {
  const { hold } = useHoldOpen(0);

  return (
    <div className="flex w-full flex-col">
      {rows.map((r, i) => (
        <div
          key={r.n}
          {...hold(i)}
          className="beyond-row flex w-full flex-col border-t border-[rgba(21,32,50,0.12)] py-5 first:border-t-0"
        >
          <p className="text-base font-medium leading-6 text-[var(--ink)]">
            {r.n} — {r.title}
          </p>
          <div className="beyond-body">
            <p className="pt-2 text-base italic leading-6 text-[var(--ink-80)]">
              {r.lead}
            </p>
            {r.body.map((t) => (
              <p
                key={t.slice(0, 20)}
                className="pt-4 text-base leading-6 text-[var(--ink-60)]"
              >
                {t}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
