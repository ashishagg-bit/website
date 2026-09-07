import Link from "next/link";
import { Checklist } from "@/components/service/checklist";
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
  cards,
  cta = { href: "/contact", label: "Request Appointment" },
}: {
  title: React.ReactNode;
  /** Plain-string paragraphs (data-driven pages). */
  paragraphs?: string[];
  /** Pre-rendered copy, for pages whose intro is already JSX. */
  body?: React.ReactNode;
  bullets?: string[];
  highlight?: number;
  /** Allergy's explainer cards — see the Approach doc comment. */
  cards?: { title: string; body: string }[];
  cta?: { href: string; label: string };
}) {
  const hasCards = Boolean(cards && cards.length > 0);
  const hasList = Boolean(bullets && bullets.length > 0) && !hasCards;
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 overflow-clip bg-white px-6 py-16 sm:px-14 lg:flex-row lg:items-stretch lg:gap-[120px] lg:px-20 lg:py-[104px]">
      {/* Capped at the 580 the frames give this column. On the four pages
         with a checklist beside it, two flex-1 columns in the 1280 row with
         its 120 gap already come to 580 each; Wellness has no checklist, so
         flex-1 handed it the whole 1280 and ran the headline across the page.
         2256:23879 keeps it at 580 there too and leaves the rest empty. */}
      <div className="flex w-full flex-col items-center gap-10 lg:max-w-[580px] lg:flex-1 lg:gap-16">
        {/* The frames stack eyebrow, headline, button and body 12 / 24 / 64
            apart, and hold that on every service page — the column sits at the
            top of the band and the space below it is simply empty, which is
            what 2256:11810 draws: 293 of content in a 573 column.

            The body used to take mt-auto and sink to the bottom, so the 64
            stretched to whatever was left once the checklist beside it set the
            height — 64 on Lungs, where the copy is the taller column, but a
            230px hole on Sleep and Allergy, where eight checklist rows are.
            gap-6 and pt-10 already sum to the 64 the frame asks for; the
            stretch was the only thing breaking it. */}
        <div className="flex w-full flex-col items-start justify-start gap-6 lg:h-full">
          <div className="flex w-full flex-col gap-3 text-[var(--ink)]">
            <Kicker>Our Approach</Kicker>
            <Display>{title}</Display>
          </div>
          <BlueButton href={cta.href}>{cta.label}</BlueButton>
          <div className="flex flex-col gap-4 text-base leading-6 text-black/60 lg:pt-10 [&>p]:mb-0">
            {paragraphs?.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
            {body}
            {/* On the allergy frame the checks are chips under the copy — a
                wrapping row of 48-tall pills, two to a line — rather than the
                bordered column the other services put on the right. */}
            {hasCards && bullets && bullets.length > 0 && (
              <ul className="mt-2 flex flex-wrap gap-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className={`flex items-center gap-3 rounded-xl border px-3 py-3 ${HAIRLINE}`}
                  >
                    <Check />
                    <span className="text-base leading-6 text-[var(--ink-80)]">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {hasCards && (
        <div className="flex w-full flex-col lg:flex-1">
          <ul
            className={`flex flex-col overflow-clip rounded-2xl border ${HAIRLINE}`}
          >
            {cards!.map((c, i) => (
              <li
                key={c.title}
                className={`flex flex-col gap-3 p-8 ${
                  i < cards!.length - 1 ? `border-b ${HAIRLINE}` : ""
                }`}
              >
                <h3 className="text-base leading-6 text-[var(--ink)]">
                  {c.title}
                </h3>
                <p className="text-base leading-6 text-black/60">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {hasList && (
      <div className="w-full lg:flex-1">
        <Checklist bullets={bullets!} highlight={highlight} />
      </div>
      )}
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

/* Conditions holds which card is open in state, so it is a client component and
   lives in its own file. Re-exported here to keep this module the one import
   the service pages reach for. */
export { Conditions } from "@/components/service/conditions";
export type { Condition } from "@/components/service/conditions";
