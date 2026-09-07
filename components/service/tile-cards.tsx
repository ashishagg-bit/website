"use client";

import Link from "next/link";
import { useHoldOpen } from "@/components/hold-open";

const HAIRLINE = "border-[rgba(21,32,50,0.1)]";

/**
 * The service tiles — Figma 96:28973.
 *
 * The frame rests with tile 03 filled by the blue gradient and the rest plain;
 * the fill then follows the reader. Holding the last tile entered rather than
 * opening on :hover, which flickered between the hovered tile and the frame's
 * default on the way out. See components/hold-open.ts.
 *
 * A tile that links is already focusable, so it is not given a second tab stop.
 */
export function TileCards({
  tiles,
  cols,
}: {
  tiles: { n: string; title: string; blurb: string; href?: string }[];
  cols: number;
}) {
  const { hold } = useHoldOpen(2);

  return (
    <div
      className={`tilegrid grid w-full max-w-[1328px] overflow-clip rounded-2xl border sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} ${HAIRLINE}`}
    >
      {tiles.map((t, i) => {
        const cls = `tile-card flex ${
          cols === 3 ? "min-h-[220px] lg:h-[320px]" : "min-h-[220px] lg:h-[400px]"
        } flex-col items-start justify-between overflow-clip border-b p-8 lg:border-r ${
          cols === 3
            ? "lg:[&:nth-child(3n)]:border-r-0"
            : "lg:[&:nth-child(4n)]:border-r-0"
        } ${HAIRLINE} ${
          i >= tiles.length - (tiles.length % cols || cols) ? "lg:border-b-0" : ""
        }`;
        const inner = (
          <>
            <div className="flex w-full flex-col gap-4">
              <p className="eyebrow tile-eyebrow">Service · {t.n}</p>
              <h3 className="font-kalice hyphens-auto break-words text-[clamp(1.75rem,1.3rem+0.9vw,34px)] leading-[1.29] tracking-[1px]">
                {t.title}
              </h3>
            </div>
            <p className="tile-blurb text-base leading-6">{t.blurb}</p>
          </>
        );
        return t.href ? (
          <Link
            key={t.title}
            href={t.href}
            className={cls}
            {...hold(i, { nativeFocus: true })}
          >
            {inner}
          </Link>
        ) : (
          <div key={t.title} className={cls} {...hold(i)}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}
