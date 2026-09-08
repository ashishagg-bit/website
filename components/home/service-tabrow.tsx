"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useHoldOpen } from "@/components/hold-open";

const HAIRLINE = "border-[rgba(21,32,50,0.1)]";

export type Tile = {
  n: string;
  title: string;
  blurb: string;
  href: string;
  image?: string;
};

/**
 * One service tab. Collapsed it is plain cream with the number, title and
 * blurb; open it doubles in width and reveals the photograph and "Learn more"
 * — the state the Figma frame captured on the Wellness card.
 *
 * The tab is a link, so it already takes focus; the row opens it on that focus
 * rather than adding a second tab stop.
 */
function ServiceTab({
  tile,
  hold,
  className = "",
}: {
  tile: Tile;
  hold: React.HTMLAttributes<HTMLAnchorElement>;
  className?: string;
}) {
  return (
    <Link
      href={tile.href}
      {...hold}
      // The padding lives on the inner block, not here. `flex: 1 1 0` sizes the
      // border box, so padding on the tab itself is reserved before the ratio
      // is applied: 1326 less 3x65 leaves 1131 to split 1:1:2, which came out
      // 348 / 348 / 630 against the frame's 332 / 332 / 664. With the tab
      // itself unpadded the basis really is 0 and the ratio lands exactly.
      className={`tab group relative flex h-auto min-h-[220px] flex-col lg:h-[400px] overflow-clip ${className}`}
    >
      {tile.image && (
        <span aria-hidden className="on-open absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            decoding="async"
            src={tile.image}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,32,50,0)_40%,rgba(21,32,50,0.88)_100%)]" />
          <span className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light" />
        </span>
      )}

      <span className="on-open slide pointer-events-none absolute inset-x-8 top-8 flex items-center justify-center rounded-lg bg-[rgba(252,250,246,0.32)] px-5 py-3 text-[15px] leading-[21px] text-white backdrop-blur-sm">
        Learn more
      </span>

      <span className="relative flex h-full w-full flex-col items-start justify-between p-8">
        <span className="tab-title on-open-text flex w-full flex-col gap-3 text-[var(--ink)]">
          <span className="eyebrow on-open-text">Service · {tile.n}</span>
          <span className="font-kalice text-[clamp(1.5rem,1.1rem+1vw,34px)] leading-[1.29] tracking-[1px]">
            {tile.title}
          </span>
        </span>

        <span className="tab-blurb on-open-text muted text-base leading-[22px] text-[var(--ink-80)]">
          {tile.blurb}
        </span>
      </span>
    </Link>
  );
}

/**
 * A row of tabs sharing one open slot, held on the tab the cursor last entered
 * — see components/hold-open.ts for why this is state rather than `:hover`.
 *
 * `defaultOpen` is the tab the frame captures open. A row with none (-1) opens
 * nothing until the reader points at it, which is the second band's state.
 */
export function TabRow({
  tiles,
  defaultOpen = -1,
  className = "",
  evenWidths = false,
  active = true,
  onActivate,
}: {
  tiles: Tile[];
  defaultOpen?: number;
  className?: string;
  /** Hold every tile at the same width; the open one still takes the
      photograph and the pill, it just does not widen. */
  evenWidths?: boolean;
  /** False while the cursor is in a sibling row: the row closes completely,
      so only one tile in the whole bento is ever open. */
  active?: boolean;
  /** Called when the cursor enters one of this row's tiles. */
  onActivate?: () => void;
}) {
  const { hold, close } = useHoldOpen(defaultOpen);

  useEffect(() => {
    if (!active) close();
    // `close` is a fresh closure each render; it only ever sets -1.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div
      className={`tabrow flex flex-col lg:flex-row ${
        evenWidths ? "tabrow-even" : ""
      } ${className}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      {tiles.map((t, i) => (
        <ServiceTab
          key={t.title}
          tile={t}
          hold={hold(i, { nativeFocus: true })}
          className={`border-b ${HAIRLINE} lg:border-b-0 ${
            i < tiles.length - 1 ? `lg:border-r ${HAIRLINE}` : ""
          }`}
        />
      ))}
    </div>
  );
}

/**
 * The bento's rows together. Each row holds the tile the cursor last entered,
 * but only while the cursor is in that row: moving into the next row closes
 * the one above completely, so exactly one tile in the bento is open at a
 * time.
 *
 * Closing rather than reverting to the frame's default is the point. Row 1
 * rests on tile 03 and row 2 on nothing (2512:16019), and an earlier pass put
 * an inactive row back on that default — which left tile 03's photograph open
 * above whichever tile the cursor was on below it, two open cells at once,
 * which is what the review reported. The default now applies only before the
 * reader has touched the bento at all.
 */
export function TabRows({
  bands,
  defaultOpens,
  evenWidths = false,
  rowClassNames,
}: {
  bands: Tile[][];
  /** Per row, the tile the frame captures open; -1 for none. Plain arrays,
      not callbacks: Services is a server component and cannot hand a
      function across to this one. */
  defaultOpens: number[];
  evenWidths?: boolean;
  rowClassNames: string[];
}) {
  const [activeRow, setActiveRow] = useState(-1);

  return (
    <>
      {bands.map((band, i) => (
        <TabRow
          key={i}
          tiles={band}
          defaultOpen={defaultOpens[i] ?? -1}
          evenWidths={evenWidths}
          className={rowClassNames[i] ?? ""}
          active={activeRow === -1 || activeRow === i}
          onActivate={() => setActiveRow(i)}
        />
      ))}
    </>
  );
}
