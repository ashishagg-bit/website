"use client";
import Link from "next/link";
import { useState } from "react";
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
 * One service tab. Collapsed it is plain cream with the number and title;
 * open it doubles in width and reveals the photograph, the blurb and the
 * "Learn more" action — the state the Figma frame captured on the Wellness
 * card. Open follows the cursor; with no cursor the row's default tile is
 * open, so the section still reads as designed at rest.
 */
function ServiceTab({
  tile,
  open,
  onOpen,
  className = "",
}: {
  tile: Tile;
  open: boolean;
  onOpen: () => void;
  className?: string;
}) {
  const lit = open && Boolean(tile.image);

  return (
    <Link
      href={tile.href}
      onMouseEnter={onOpen}
      onFocus={onOpen}
      className={`group relative flex h-[400px] min-w-0 flex-col items-start justify-between overflow-clip p-8 transition-[flex-grow,background-color] duration-500 ease-out ${
        open ? "lg:grow-[2]" : "lg:grow"
      } ${className}`}
      style={{ flexBasis: 0 }}
    >
      {tile.image && (
        <span
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tile.image}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,32,50,0)_40%,rgba(21,32,50,0.88)_100%)]" />
          <span className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light" />
        </span>
      )}

      {/* Open only: sits out of flow so the collapsed tab keeps its spacing */}
      <span
        className={`absolute inset-x-8 top-8 flex items-center justify-center rounded-lg bg-[rgba(252,250,246,0.32)] px-5 py-3 text-[15px] leading-[21px] text-white backdrop-blur-sm transition-all duration-500 ${
          lit ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        Learn more
      </span>

      {/* Collapsed: title at the top, blurb pinned to the bottom.
          Open: both regroup at the bottom, under "Learn more". */}
      <span
        className={`relative flex w-full flex-col gap-3 transition-colors duration-500 ${
          open ? "mt-auto" : ""
        } ${lit ? "text-white" : "text-[var(--ink)]"}`}
      >
        <span className={`eyebrow ${lit ? "!text-white" : ""}`}>
          Service · {tile.n}
        </span>
        <span className="font-kalice text-[clamp(1.5rem,1.1rem+1vw,34px)] leading-[1.29] tracking-[1px]">
          {tile.title}
        </span>
      </span>

      <span
        className={`relative text-base leading-[22px] transition-colors duration-500 ${
          open ? "" : "mt-auto"
        } ${lit ? "text-white" : "text-[var(--ink-80)]"}`}
      >
        {tile.blurb}
      </span>
    </Link>
  );
}

/** A row of tabs that share one open slot. */
function TabRow({
  tiles,
  defaultOpen = 0,
  className = "",
}: {
  tiles: Tile[];
  defaultOpen?: number;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`flex flex-col lg:flex-row ${className}`}
      onMouseLeave={() => setOpen(defaultOpen)}
    >
      {tiles.map((t, i) => (
        <ServiceTab
          key={t.title}
          tile={t}
          open={open === i}
          onOpen={() => setOpen(i)}
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
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  cta?: { href: string; label: string } | null;
  tiles?: Tile[];
  lastTile?: Tile;
} = {}) {
  const rowOne = tiles.slice(0, 3);
  const rowTwo = tiles.slice(3);

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
        {/* Row 1 — the frame captures tile 03 open, so it is the row's default */}
        <TabRow tiles={rowOne} defaultOpen={2} className={`border-b ${HAIRLINE}`} />

        {/* Row 2 — all collapsed at rest */}
        <TabRow tiles={rowTwo} defaultOpen={-1} className={`border-b ${HAIRLINE}`} />

        {/* Row 3 — full-width closing tile */}
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
      </div>
    </section>
  );
}
