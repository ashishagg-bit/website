import Link from "next/link";
import { TabRow, type Tile } from "@/components/home/service-tabrow";
import { BlueButton, Display, Kicker } from "@/components/ui";
import { serviceTiles, vipTile } from "@/lib/home-content";

const HAIRLINE = "border-[rgba(21,32,50,0.1)]";

export type { Tile };

/**
 * "Our services" bento — Figma node 1:964 (homepage) and 74:22082
 * ("All services"), which share the grid but differ in heading and last tile.
 */
export function Services({
  eyebrow = "Our services",
  title = "Where every piece matters.",
  // 2256:1709, the line under "Where every piece matters." on the home frame.
  // The default was previously 2256:1418, which is a hidden layer belonging to
  // the "our method" band above this one. /services passes body={null} — its
  // own frame draws no standfirst under the bento title.
  body = "A holistic approach to your health in the heart of Beverly Hills.",
  cta = { href: "/contact", label: "Schedule a Consultation" },
  tiles = serviceTiles,
  lastTile = vipTile,
  rows,
  evenWidths = false,
  measure = "",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  cta?: { href: string; label: string } | null;
  tiles?: Tile[];
  /** Pass null on frames whose bento has no wide closing strip (74:22082). */
  lastTile?: Tile | null;
  /** Tiles per row. Defaults to the homepage frame's 3 + rest. */
  rows?: number[];
  /** Keep every tile the same width — "All services" (2256:6331) is an even
      4x2 grid, and widening one of four columns reflows the whole row. */
  evenWidths?: boolean;
  /** Cap on the header measure. "All services" (2256:6897) sets 700, which
      wraps its long headline to the two lines the frame draws; the homepage
      frame leaves its shorter headline on one line, and capping it there would
      break it in two — our Kalice runs wider than the file's metrics. */
  measure?: string;
} = {}) {
  const sizes = rows ?? [3, Math.max(tiles.length - 3, 0)];
  const bands: Tile[][] = [];
  let cursor = 0;
  for (const size of sizes) {
    bands.push(tiles.slice(cursor, cursor + size));
    cursor += size;
  }
  if (cursor < tiles.length) bands.push(tiles.slice(cursor));

  return (
    <section className="flex w-full flex-col items-center gap-12 overflow-clip bg-[linear-gradient(180deg,#ffffff_0%,var(--cream)_13.444%)] px-6 py-16 sm:px-14 sm:py-[104px] lg:gap-20">
      <header className={`flex w-full flex-col items-center gap-6 ${measure}`}>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-2 text-[var(--ink)]">
            <Kicker>{eyebrow}</Kicker>
            <Display>{title}</Display>
          </div>
          {body && (
            <p className="max-w-[640px] text-base leading-6 text-[var(--ink-80)]">
              {body}
            </p>
          )}
        </div>
        {cta && <BlueButton href={cta.href}>{cta.label}</BlueButton>}
      </header>

      <div
        className={`w-full max-w-[1328px] overflow-clip rounded-2xl border bg-[var(--cream)] ${HAIRLINE}`}
      >
        {/* The frame captures tile 03 open, so it is the first row's default */}
        {bands.map((band, i) => (
          <TabRow
            key={i}
            tiles={band}
            defaultOpen={i === 0 ? 2 : -1}
            evenWidths={evenWidths}
            className={
              i < bands.length - 1 || lastTile ? `border-b ${HAIRLINE}` : ""
            }
          />
        ))}

        {/* Full-width closing tile — homepage frame only */}
        {lastTile && (
        <Link
          href={lastTile.href}
          className="group flex w-full flex-col items-start justify-between gap-6 overflow-clip p-8 transition-colors hover:bg-white sm:flex-row sm:items-end"
        >
          <span className="flex w-full flex-col gap-4 text-[var(--ink)] sm:w-[400px]">
            <span className="eyebrow">Service · {lastTile.n}</span>
            <span className="font-kalice text-[34px] leading-[44px] tracking-[1px] group-hover:text-[var(--blue)]">
              {lastTile.title}
            </span>
          </span>
          <span className="flex-1 text-base leading-6 text-[var(--ink-80)] sm:text-right">
            {lastTile.blurb}
          </span>
        </Link>
        )}
      </div>
    </section>
  );
}
