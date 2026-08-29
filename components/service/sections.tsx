import Link from "next/link";
import { BlueButton, Display, Kicker } from "@/components/ui";

const HAIRLINE = "border-[rgba(21,32,50,0.1)]";

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0 text-[var(--blue)]"
    >
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
  body,
  bullets,
  highlight = 1,
  cta = { href: "/contact", label: "Request Appointment" },
}: {
  title: React.ReactNode;
  /** Plain-string paragraphs (data-driven pages). */
  paragraphs?: string[];
  /** Pre-rendered copy, for pages whose intro is already JSX. */
  body?: React.ReactNode;
  bullets?: string[];
  highlight?: number;
  cta?: { href: string; label: string };
}) {
  const hasList = Boolean(bullets && bullets.length > 0);
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 overflow-clip bg-white px-6 py-16 sm:px-14 lg:flex-row lg:gap-[120px] lg:px-20 lg:py-[104px]">
      <div className="flex w-full flex-col items-center gap-10 lg:flex-1 lg:gap-16">
        <div className="flex w-full flex-col items-start justify-center gap-6">
          <div className="flex w-full flex-col gap-3 text-[var(--ink)]">
            <Kicker>Our Approach</Kicker>
            <Display>{title}</Display>
          </div>
          <BlueButton href={cta.href}>{cta.label}</BlueButton>
          <div className="flex flex-col gap-4 text-base leading-6 text-black/60 [&>p]:mb-0">
            {paragraphs?.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
            {body}
          </div>
        </div>
      </div>

      {hasList && (
      <div className="w-full lg:flex-1">
        {/* Gradient row follows the cursor — see `.checkrow` in globals.css */}
        <ul className={`checkrow overflow-clip rounded-2xl border ${HAIRLINE}`}>
          {bullets!.map((b, i) => (
            <li
              key={b}
              {...(i === highlight ? { "data-open": "" } : {})}
              className={`checkitem flex items-center gap-3 p-8 text-[var(--ink-80)] ${
                i < bullets!.length - 1 ? `border-b ${HAIRLINE}` : ""
              }`}
            >
              <Check />
              <span className="text-base leading-6">{b}</span>
            </li>
          ))}
        </ul>
      </div>
      )}
    </section>
  );
}

export type Condition = {
  name: string;
  details?: { label: string; value: string }[];
};

/**
 * "Conditions we treat." — Figma 2256:19984: an ink panel of cards, every one
 * of them open on its Symptoms / Risk / Testing detail, flowing three to a row
 * with each column packing to its own height. Nothing to open, so nothing
 * hidden — the earlier version rested open on the first card carrying
 * detail, which is the state the frames captured.
 */
export function Conditions({
  title = "Conditions we treat.",
  items,
}: {
  title?: React.ReactNode;
  items: Condition[];
}) {
  return (
    <section className="flex w-full flex-col items-center gap-10 overflow-clip bg-[var(--ink)] px-6 py-16 sm:px-14 lg:gap-14 lg:py-24">
      <header className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center text-white">
        <Kicker className="!text-white">Conditions</Kicker>
        <Display>{title}</Display>
      </header>

      {/* Every card is open, and its panel sits in flow. The frame
          (2256:19984) draws all nine expanded at once — symptoms, risk and
          testing readable side by side — so a reader can compare conditions
          without hunting. This used to collapse them and drop a single panel
          over the cards below on hover, which hid eight of the nine and made
          the one you opened cover its neighbours.

          `items-start` lets each column pack to its own height rather than
          stretching every card to match the tallest, which is what gives the
          grid the staggered look the frame has. */}
      <ul className="condrow grid w-full max-w-[1328px] items-start gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <li
            key={c.name}
            className="cond flex flex-col rounded-2xl p-2"
          >
            <div className="flex items-center gap-3">
              {/* The frame uses a small illustrated tile here (55px, 8px radius,
                  hairline border); this gradient chip stands in until those
                  icons can be exported. */}
              <span className="flex size-[55px] shrink-0 items-center justify-center rounded-lg border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(51,118,235,0.55))] font-kalice text-base text-white">
                {c.name.charAt(0)}
              </span>
              <span className="pr-3 text-sm leading-[21px] text-white">
                {c.name}
              </span>
            </div>

            {c.details && c.details.length > 0 && (
              <dl className="cond-detail flex flex-col gap-2 rounded-b-2xl p-2 lg:flex-row">
                {c.details.map((d) => (
                  <div
                    key={d.label}
                    className="flex flex-1 flex-col gap-0.5 rounded-xl bg-white/10 p-3"
                  >
                    <dt className="eyebrow !text-[10px] !text-white/50">
                      {d.label}
                    </dt>
                    <dd className="text-sm leading-5 text-white/80">{d.value}</dd>
                  </div>
                ))}
              </dl>
            )}
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
  // The Sleep and Allergy frames lay their three tiles out as one full-width
  // row of equals at 320px tall; the four-up grid left a visible empty cell.
  const cols = tiles.length === 3 ? 3 : 4;

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
        className={`tilegrid grid w-full max-w-[1328px] overflow-clip rounded-2xl border sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} ${HAIRLINE}`}
      >
        {tiles.map((t, i) => {
          // The frame rests with tile 03 filled; open then follows the cursor.
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
          const openAttr = i === 2 ? { "data-open": "" } : {};
          return t.href ? (
            <Link key={t.title} href={t.href} className={cls} {...openAttr}>
              {inner}
            </Link>
          ) : (
            <div key={t.title} className={cls} {...openAttr}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
