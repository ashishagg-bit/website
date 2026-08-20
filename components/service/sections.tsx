import Link from "next/link";
import { BlueButton, Display, Kicker } from "@/components/ui";

const HAIRLINE = "border-[rgba(21,32,50,0.1)]";

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
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
 * "Our Approach" — Figma node 81:24251. Copy on the left, a bordered list of
 * differentiators on the right with one row carrying the blue gradient.
 */
export function Approach({
  title,
  paragraphs,
  bullets,
  highlight = 1,
  cta = { href: "/contact", label: "Request Appointment" },
}: {
  title: React.ReactNode;
  paragraphs: string[];
  bullets: string[];
  highlight?: number;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 overflow-clip bg-white px-6 py-16 sm:px-14 lg:flex-row lg:gap-[120px] lg:px-20 lg:py-[104px]">
      <div className="flex w-full flex-col items-center gap-10 lg:flex-1 lg:gap-16">
        <div className="flex w-full flex-col items-start justify-center gap-6">
          <div className="flex w-full flex-col gap-3 text-[var(--ink)]">
            <Kicker>Our Approach</Kicker>
            <Display>{title}</Display>
          </div>
          <BlueButton href={cta.href}>{cta.label}</BlueButton>
          <div className="flex flex-col gap-4 text-base leading-6 text-black/60">
            {paragraphs.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:flex-1">
        <ul className={`overflow-clip rounded-2xl border ${HAIRLINE}`}>
          {bullets.map((b, i) => (
            <li
              key={b}
              className={`flex items-center gap-3 p-8 ${
                i < bullets.length - 1 ? `border-b ${HAIRLINE}` : ""
              } ${
                i === highlight
                  ? // Copy sits at the cream end of the gradient, so it stays ink.
                    "bg-[linear-gradient(90deg,var(--cream)_0%,#b8d2ff_50%,#75a4f5_75%,var(--blue)_100%)] text-[var(--ink)]"
                  : "text-[var(--ink)]"
              }`}
            >
              <Check />
              <span className="text-base leading-6">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** "Conditions we treat." — Figma node 92:27676: ink panel, pill cards. */
export function Conditions({
  title = "Conditions we treat.",
  items,
}: {
  title?: React.ReactNode;
  items: string[];
}) {
  return (
    <section className="flex w-full flex-col items-center gap-10 overflow-clip bg-[var(--ink)] px-6 py-16 sm:px-14 lg:gap-14 lg:py-24">
      <header className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center text-white">
        <Kicker className="!text-white">Conditions</Kicker>
        <Display>{title}</Display>
      </header>

      <ul className="grid w-full max-w-[1328px] gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <li
            key={c}
            className="flex items-center gap-3 rounded-2xl bg-white/10 p-2"
          >
            <span className="flex size-[55px] shrink-0 items-center justify-center rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(51,118,235,0.5))] font-kalice text-xl text-white">
              {c.charAt(0)}
            </span>
            <span className="pr-2 text-base leading-[22px] text-white">{c}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Diagnostics bento — Figma node 96:28973. Same bordered grid as the services
 * bento, but every tile is text and they flow four to a row.
 */
export function TileGrid({
  eyebrow = "Our Services",
  title,
  cta = { href: "/contact", label: "Schedule a Consultation" },
  tiles,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  cta?: { href: string; label: string } | null;
  tiles: { n: string; title: string; blurb: string; href?: string }[];
}) {
  return (
    <section className="flex w-full flex-col items-center gap-12 overflow-clip bg-white px-6 py-16 sm:px-14 sm:py-[104px] lg:gap-20">
      <header className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2 text-center text-[var(--ink)]">
          <Kicker>{eyebrow}</Kicker>
          <Display>{title}</Display>
        </div>
        {cta && <BlueButton href={cta.href}>{cta.label}</BlueButton>}
      </header>

      <div
        className={`grid w-full max-w-[1328px] overflow-clip rounded-2xl border sm:grid-cols-2 lg:grid-cols-4 ${HAIRLINE}`}
      >
        {tiles.map((t, i) => {
          const cls = `group flex h-[400px] flex-col items-start justify-between overflow-clip border-b p-8 transition-colors hover:bg-[var(--cream)] lg:border-r lg:[&:nth-child(4n)]:border-r-0 ${HAIRLINE} ${
            i >= tiles.length - (tiles.length % 4 || 4) ? "lg:border-b-0" : ""
          }`;
          const inner = (
            <>
              <div className="flex w-full flex-col gap-4 text-[var(--ink)]">
                <p className="eyebrow">Service · {t.n}</p>
                <h3 className="font-kalice text-[34px] leading-[44px] tracking-[1px]">
                  {t.title}
                </h3>
              </div>
              <p className="text-base leading-6 text-[var(--ink-80)]">{t.blurb}</p>
            </>
          );
          return t.href ? (
            <Link key={t.title} href={t.href} className={cls}>
              {inner}
            </Link>
          ) : (
            <div key={t.title} className={cls}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
