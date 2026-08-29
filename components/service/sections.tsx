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
    <section className="flex w-full flex-col items-center justify-center gap-12 overflow-clip bg-white px-6 py-16 sm:px-14 lg:flex-row lg:items-stretch lg:gap-[120px] lg:px-20 lg:py-[104px]">
      <div className="flex w-full flex-col items-center gap-10 lg:flex-1 lg:gap-16">
        {/* Eyebrow, headline and button sit at the top; the body sinks to the
            bottom. The frames stack them 12 / 24 / 64 apart and land the body's
            last line level with the checklist card, so whichever column is
            naturally taller sets the section height and the gap above the body
            absorbs the rest — 64px on Lungs, where the copy is the taller
            column, and 147px on Sleep, where eight checklist rows are. Fixing
            that gap at one number gets one page right and skews every other. */}
        <div className="flex w-full flex-col items-start justify-center gap-6 lg:h-full">
          <div className="flex w-full flex-col gap-3 text-[var(--ink)]">
            <Kicker>Our Approach</Kicker>
            <Display>{title}</Display>
          </div>
          <BlueButton href={cta.href}>{cta.label}</BlueButton>
          <div className="flex flex-col gap-4 text-base leading-6 text-black/60 lg:mt-auto lg:pt-10 [&>p]:mb-0">
            {paragraphs?.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
            {body}
          </div>
        </div>
      </div>

      {hasList && (
      <div className="w-full lg:flex-1">
        {/* The card matches the copy column's height and the rows divide it
            equally — that is the rule the frames follow, not a fixed row
            height. Lungs has five rows in a 573 card (114.6 each), Sleep eight
            in a 704 card (88 each). Pinning rows to one number gets one page
            right and stretches or squashes every other. 88 is the natural
            height of a row — 32px padding either side of a 24px line — so it
            is the floor when the copy column is shorter than the list. */}
        <ul className={`checkrow flex h-full flex-col overflow-clip rounded-2xl border ${HAIRLINE}`}>
          {bullets!.map((b, i) => (
            <li
              key={b}
              {...(i === highlight ? { "data-open": "" } : {})}
              className={`checkitem flex min-h-[88px] flex-1 items-center gap-3 p-8 text-[var(--ink-80)] ${
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
  /** Marks the card the frame captures open. Falls back to the first with detail. */
  open?: boolean;
};

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
            {col.map(({ card: c, i }) => (
              <li
                key={c.name}
                {...(i === restsOn ? { "data-open": "" } : {})}
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
                  {c.details && c.details.length > 0 && (
                    <Chevron className="cond-chevron mr-2" />
                  )}
                </div>

                {c.details && c.details.length > 0 && (
                  <dl className="cond-detail flex flex-col gap-2 rounded-b-2xl lg:flex-row">
                    {c.details.map((d) => (
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
            ))}
          </ul>
        ))}
      </div>
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
