import Link from "next/link";
import { BlueButton, Display, Kicker } from "@/components/ui";
import { serviceTiles, vipTile } from "@/lib/home-content";

const HAIRLINE = "border-[rgba(21,32,50,0.1)]";

function TextTile({
  n,
  title,
  blurb,
  href,
  className = "",
}: {
  n: string;
  title: string;
  blurb: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group flex h-[400px] flex-col items-start justify-between overflow-clip p-8 transition-colors hover:bg-white ${className}`}
    >
      <div className="flex w-full flex-col gap-4 text-[var(--ink)]">
        <p className="eyebrow">Service · {n}</p>
        <h3 className="font-kalice text-[34px] leading-[44px] tracking-[1px] group-hover:text-[var(--blue)]">
          {title}
        </h3>
      </div>
      <p className="text-base leading-6 text-[var(--ink-80)]">{blurb}</p>
    </Link>
  );
}

/** Photo tile — dark scrim, "Learn more" pill on top (Figma 1:1053 region). */
function PhotoTile({
  n,
  title,
  blurb,
  href,
  image,
  className = "",
}: {
  n: string;
  title: string;
  blurb: string;
  href: string;
  image: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex h-[400px] flex-col items-start justify-between overflow-clip p-8 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,32,50,0)_40%,rgba(21,32,50,0.88)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light"
      />
      <span className="relative flex w-full items-center justify-center rounded-lg bg-[rgba(252,250,246,0.32)] px-5 py-3 text-[15px] leading-[21px] text-white backdrop-blur-sm transition-colors group-hover:bg-[rgba(252,250,246,0.5)]">
        Learn more
      </span>
      <span className="relative flex w-full flex-col gap-2 text-white">
        <span className="flex flex-col gap-3">
          <span className="eyebrow !text-white">Service · {n}</span>
          <span className="font-kalice text-[34px] leading-[44px] tracking-[1px]">
            {title}
          </span>
        </span>
        <span className="text-base leading-[22px]">{blurb}</span>
      </span>
    </Link>
  );
}

/** "Our services" bento — Figma node 1:964. */
export function Services() {
  const [lungs, cardio, wellness, ...rest] = serviceTiles;

  return (
    <section className="flex w-full flex-col items-center gap-12 overflow-clip bg-[linear-gradient(180deg,#ffffff_0%,var(--cream)_13.444%)] px-6 py-16 sm:px-14 sm:py-[104px] lg:gap-20">
      <header className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-2 text-[var(--ink)]">
            <Kicker>Our services</Kicker>
            <Display>Where every piece matters.</Display>
          </div>
          <p className="max-w-[640px] text-base leading-6 text-[var(--ink-80)]">
            True wellness comes from balancing body, mind, emotions, and
            spirit—every piece counts.
          </p>
        </div>
        <BlueButton href="/contact">Schedule a Consultation</BlueButton>
      </header>

      <div
        className={`w-full max-w-[1328px] overflow-clip rounded-2xl border ${HAIRLINE}`}
      >
        {/* Row 1 — 332 / 332 / fill */}
        <div className={`grid border-b ${HAIRLINE} lg:grid-cols-[332px_332px_1fr]`}>
          <TextTile {...lungs} className={`border-b lg:border-b-0 lg:border-r ${HAIRLINE}`} />
          <TextTile {...cardio} className={`border-b lg:border-b-0 ${HAIRLINE}`} />
          <PhotoTile
            {...wellness}
            image={wellness.image!}
            className={`border-l ${HAIRLINE}`}
          />
        </div>

        {/* Row 2 — four equal columns */}
        <div className={`grid border-b sm:grid-cols-2 lg:grid-cols-4 ${HAIRLINE}`}>
          {rest.map((tile, i) => (
            <TextTile
              key={tile.title}
              {...tile}
              className={`border-b sm:border-b-0 ${
                i < rest.length - 1 ? "lg:border-r" : ""
              } ${HAIRLINE}`}
            />
          ))}
        </div>

        {/* Row 3 — full-width VIP tile */}
        <Link
          href={vipTile.href}
          className="group flex w-full flex-col items-start justify-between gap-6 overflow-clip p-8 transition-colors hover:bg-white sm:flex-row sm:items-end"
        >
          <span className="flex w-full flex-col gap-4 text-[var(--ink)] sm:w-[400px]">
            <span className="eyebrow">Service · {vipTile.n}</span>
            <span className="font-kalice text-[34px] leading-[44px] tracking-[1px] group-hover:text-[var(--blue)]">
              {vipTile.title}
            </span>
          </span>
          <span className="flex-1 text-base leading-6 text-[var(--ink-80)] sm:text-right">
            {vipTile.blurb}
          </span>
        </Link>
      </div>
    </section>
  );
}
