import Link from "next/link";
import { BlueButton, Display, Kicker } from "@/components/ui";
import { serviceTiles, vipTile } from "@/lib/home-content";

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
 * The open/closed states are driven entirely by the `.tabrow` / `.tab` CSS in
 * globals.css, so this is a server component and the interaction survives with
 * JavaScript disabled.
 */
function ServiceTab({
  tile,
  open = false,
  className = "",
}: {
  tile: Tile;
  open?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={tile.href}
      {...(open ? { "data-open": "" } : {})}
      className={`tab group relative flex h-auto min-h-[220px] flex-col lg:h-[400px] items-start justify-between overflow-clip p-8 ${className}`}
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

      <span className="tab-title on-open-text relative flex w-full flex-col gap-3 text-[var(--ink)]">
        <span className="eyebrow on-open-text">Service · {tile.n}</span>
        <span className="font-kalice text-[clamp(1.5rem,1.1rem+1vw,34px)] leading-[1.29] tracking-[1px]">
          {tile.title}
        </span>
      </span>

      <span className="tab-blurb on-open-text muted relative text-base leading-[22px] text-[var(--ink-80)]">
        {tile.blurb}
      </span>
    </Link>
  );
}

/** A row of tabs sharing one open slot. */
function TabRow({
  tiles,
  defaultOpen = -1,
  className = "",
  evenWidths = false,
}: {
  tiles: Tile[];
  defaultOpen?: number;
  className?: string;
  /** Hold every tile at the same width; the open one still takes the
      photograph and the pill, it just does not widen. */
  evenWidths?: boolean;
}) {
  return (
    <div
      className={`tabrow flex flex-col lg:flex-row ${
        evenWidths ? "tabrow-even" : ""
      } ${className}`}
    >
      {tiles.map((t, i) => (
        <ServiceTab
          key={t.title}
          tile={t}
          open={i === defaultOpen}
          className={`border-b ${HAIRLINE} lg:border-b-0 ${
            i < tiles.length - 1 ? `lg:border-r ${HAIRLINE}` : ""
          }`}
        />
      ))}
    </div>
  );
}

/**
 * "Our services" bento — Figma node 1:964 (homepage) and 74:22082
 * ("All services"), which share the grid but differ in heading and last tile.
 */
export function Services({
  eyebrow = "Our services",
  title = "Where every piece matters.",
  body = "True wellness comes from balancing body, mind, emotions, and spirit—every piece counts.",
  cta = { href: "/contact", label: "Schedule a Consultation" },
  tiles = serviceTiles,
  lastTile = vipTile,
  rows,
  evenWidths = false,
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
      <header className="flex flex-col items-center gap-6">
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
