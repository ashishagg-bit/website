"use client";

import { useHoldOpen } from "@/components/hold-open";
import { Display, Kicker } from "@/components/ui";

export type Condition = {
  name: string;
  details?: { label: string; value: string }[];
  /** Marks the card the frame captures open. Falls back to the first with detail. */
  open?: boolean;
};

/** The chevron points down when closed and flips when the card opens. */
function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden
      className={`shrink-0 text-white/45 ${className}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * "Conditions we treat." — Figma 2256:17773 as it sits on the page: the cards
 * are collapsed behind a chevron with one of them open on its Symptoms / Risk /
 * Testing detail, and the open panel grows its card in flow.
 *
 * That flow matters. The cards run in three independent columns, not grid rows,
 * so an open card pushes only the cards beneath it in its own column — in the
 * frame Valvular and Deep Venous drop while the outer two columns stay put. A
 * grid would grow the whole row and shunt all three columns down together.
 *
 * (2256:19984, the 977-tall board that draws all nine open at once, is a spec
 * sheet for the copy rather than the page state — reading it as the design is
 * what produced an earlier version with every card permanently expanded.)
 *
 * Which card is open is state, not `:hover`. Driving it from CSS meant the open
 * card closed the moment the cursor left it and the frame's default sprang back
 * — the section flickered between two cards on the way out. Holding the last
 * card entered means the panel stays where the reader put it, and the section
 * only ever has one card open, so the columns settle instead of jumping.
 */
export function Conditions({
  title = "Conditions we treat.",
  items,
}: {
  title?: React.ReactNode;
  items: Condition[];
}) {
  const marked = items.findIndex((c) => c.open);
  const restsOn =
    marked >= 0
      ? marked
      : items.findIndex((c) => c.details && c.details.length > 0);

  // Server and first client render both open `restsOn`, so hydration matches.
  const { hold } = useHoldOpen(restsOn);

  // Card i belongs in column i % 3. The frame's three columns read
  // Coronary / Cardiomyopathy / Peripheral, then Congestive Heart Failure /
  // Valvular / Deep Venous, then Arrhythmias / Hypertension / Carotid — which
  // is this list dealt across three columns in order, so the data is stored
  // row-major and dealing it back out reproduces the frame exactly.
  const COLS = 3;
  const columns: { card: Condition; i: number }[][] = Array.from(
    { length: COLS },
    () => []
  );
  items.forEach((card, i) => columns[i % COLS].push({ card, i }));

  return (
    <section className="flex w-full flex-col items-center gap-10 overflow-clip bg-[var(--ink)] px-6 py-16 sm:px-14 lg:gap-14 lg:py-24">
      <header className="flex w-full max-w-[700px] flex-col items-center gap-3 text-center text-white">
        <Kicker className="!text-white">Conditions</Kicker>
        <Display>{title}</Display>
      </header>

      {/* Three real columns rather than CSS multicol. Multicol balances its
          columns by height, so the one tall open card moved cards between them
          — nine cards came out 2 / 4 / 3 instead of the frame's 3 / 3 / 3, and
          which card sat where changed as soon as a different one opened.
          Columns also fill top-to-bottom, which would deal this row-major list
          out in the wrong order. Three flex columns fix both, and each still
          grows on its own, so an open card pushes only the cards beneath it. */}
      <div className="condrow flex w-full max-w-[1328px] flex-col gap-2 lg:flex-row">
        {columns.map((col, ci) => (
          <ul key={ci} className="flex min-w-0 flex-col gap-2 lg:flex-1">
            {col.map(({ card: c, i }) => {
              const hasDetail = Boolean(c.details && c.details.length > 0);
              return (
                <li
                  key={c.name}
                  {...hold(i, { claimable: hasDetail })}
                  className="cond flex flex-col rounded-2xl p-2"
                >
                  <div className="flex items-center gap-3">
                    {/* The frame uses a small illustrated tile here (55px, 8px
                        radius, hairline border); this gradient chip stands in
                        until those icons can be exported. */}
                    <span className="flex size-[55px] shrink-0 items-center justify-center rounded-lg border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(51,118,235,0.55))] font-kalice text-base text-white">
                      {c.name.charAt(0)}
                    </span>
                    <span className="flex-1 pr-1 text-sm leading-[21px] text-white">
                      {c.name}
                    </span>
                    {hasDetail && <Chevron className="cond-chevron mr-2" />}
                  </div>

                  {hasDetail && (
                    <dl className="cond-detail flex flex-col gap-2 rounded-b-2xl lg:flex-row">
                      {c.details!.map((d) => (
                        <div
                          key={d.label}
                          className="flex flex-1 flex-col gap-0.5 rounded-xl bg-white/10 p-3"
                        >
                          <dt className="text-[13px] leading-[21px] text-white/50">
                            {d.label}
                          </dt>
                          <dd className="text-sm leading-[21px] text-white/80">
                            {d.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </section>
  );
}
