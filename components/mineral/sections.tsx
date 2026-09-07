import { BeyondRows } from "@/components/mineral/beyond-rows";
import { PuzzlePiece } from "@/components/puzzle";
import { BlueButton, Display, Kicker } from "@/components/ui";

const HAIRLINE = "border-[rgba(21,32,50,0.1)]";

/**
 * "Sometimes, the answers aren't in your blood." — Figma 2417:1459.
 *
 * Two 580 columns 120 apart, the same measure the service Approach uses, but
 * the right one carries the argument rather than a checklist. The button sits
 * at the foot of the left column (2417:1707 opens at 463 of its 504) rather
 * than under the headline, so the two columns end level.
 */
export function SplitApproach({
  eyebrow,
  title,
  standfirst,
  paragraphs,
  cta,
}: {
  eyebrow: string;
  title: string[];
  standfirst?: string;
  paragraphs: string[];
  cta: { href: string; label: string };
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 overflow-clip bg-white px-6 py-16 sm:px-14 lg:flex-row lg:items-stretch lg:gap-[120px] lg:px-20 lg:py-[104px]">
      <div className="flex w-full flex-col items-start gap-10 lg:max-w-[580px] lg:flex-1">
        <div className="flex w-full flex-col gap-3 text-[var(--ink)]">
          <Kicker>{eyebrow}</Kicker>
          <Display>
            {title.map((line, i) => (
              <span key={line} className="block">
                {line}
                {i < title.length - 1 ? null : null}
              </span>
            ))}
          </Display>
          {standfirst && (
            <p className="mt-1 text-base leading-6 text-[var(--ink-80)]">
              {standfirst}
            </p>
          )}
        </div>
        {/* mt-auto rather than a fixed gap: the frame lands this level with the
            last line of the column beside it, and that column's length is the
            copy's, not a number we can fix here. */}
        <div className="lg:mt-auto">
          <BlueButton href={cta.href}>{cta.label}</BlueButton>
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 text-base leading-6 text-[var(--ink-80)] lg:max-w-[580px] lg:flex-1">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </section>
  );
}

/**
 * "Why the cell is the place to look" — Figma 2417:1716.
 *
 * A centred header, three cards in one bordered row (2417:1964 is 1328 by 396,
 * so the cards are a third each), then a caption and the action 80 beneath.
 * The frame fills the third card and leaves the other two plain: it is the
 * one the section is arguing for, so it is drawn as the answer rather than
 * as another option.
 */
export function CellCards({
  eyebrow,
  title,
  standfirst,
  cards,
  caption,
  cta,
}: {
  eyebrow: string;
  title: string;
  standfirst: string;
  cards: { n: string; title: string; body: string; filled?: boolean }[];
  caption: string;
  cta: { href: string; label: string };
}) {
  return (
    <section className="flex w-full flex-col items-center gap-12 overflow-clip bg-[var(--cream)] px-6 py-16 sm:px-14 sm:py-[104px] lg:gap-20">
      {/* 2417:1959 stacks these 12 / 8 / 68 / 16 / 48 and keeps the headline on
          one line at 811. Our Kalice sets wider than the file's metrics, so the
          headline gets a longer measure than the frame's 811 to stay on that
          line; the standfirst keeps the 811 and its two lines. */}
      <header className="flex w-full max-w-[960px] flex-col items-center text-center">
        <Kicker>{eyebrow}</Kicker>
        <Display className="mt-2 text-[var(--ink)]">{title}</Display>
        <p className="mt-4 max-w-[811px] text-base leading-6 text-[var(--ink-60)]">
          {standfirst}
        </p>
      </header>

      <div
        className={`grid w-full max-w-[1328px] overflow-clip rounded-2xl border bg-white sm:grid-cols-2 lg:grid-cols-3 ${HAIRLINE}`}
      >
        {cards.map((c, i) => (
          <div
            key={c.n}
            className={`flex min-h-[320px] flex-col justify-between gap-10 border-b p-8 lg:h-[396px] lg:border-b-0 ${
              i < cards.length - 1 ? `lg:border-r ${HAIRLINE}` : ""
            } ${HAIRLINE} ${
              c.filled
                ? "bg-[radial-gradient(120%_120%_at_78%_18%,#dfe8fb_0%,#8fb0f0_34%,#3f77e6_72%,#2a5fd6_100%)] text-white"
                : "text-[var(--ink)]"
            }`}
          >
            <div className="flex flex-col gap-6">
              <p
                className={`eyebrow ${c.filled ? "!text-white/70" : "text-[var(--ink-60)]"}`}
              >
                {c.n}
              </p>
              <h3 className="font-kalice text-[clamp(1.5rem,1.1rem+1vw,32px)] leading-[1.25] tracking-[1px]">
                {c.title}
              </h3>
            </div>
            <p
              className={`text-base leading-6 ${
                c.filled ? "text-white/85" : "text-[var(--ink-60)]"
              }`}
            >
              {c.body}
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-[676px] flex-col items-center gap-6 text-center">
        <p className="text-base leading-6 text-[var(--ink-60)]">{caption}</p>
        <BlueButton href={cta.href}>{cta.label}</BlueButton>
      </div>
    </section>
  );
}

/**
 * "A minute of light. A deeper look within." — Figma 2417:2025.
 *
 * The one dark band on the page: a 774 column centred in 120 of padding, with
 * a puzzle piece bleeding off each of two opposite corners (2417:2274 at the
 * foot on the left, 2417:2278 off the right edge at the top, both 180).
 *
 * The pieces are the file's own artwork and are not in the repository, so the
 * site's PuzzlePiece stands in at the frame's size and placement.
 */
export function HowItWorks({
  eyebrow,
  title,
  lead,
  paragraphs,
}: {
  eyebrow: string;
  title: string[];
  lead: { before: string; strong: string; after: string };
  paragraphs: string[];
}) {
  return (
    <section className="relative flex w-full flex-col items-center overflow-clip bg-[var(--dark)] px-6 py-16 sm:px-14 lg:py-[120px]">
      <PuzzlePiece
        className="pointer-events-none absolute -left-6 bottom-10 size-[180px] text-[var(--blue)] lg:left-10"
        color="var(--blue)"
        opacity={0.5}
      />
      <PuzzlePiece
        className="pointer-events-none absolute -right-10 top-10 size-[180px] text-[var(--blue)]"
        color="var(--blue)"
        opacity={0.5}
        rotate={12}
      />

      <div className="relative flex w-full max-w-[774px] flex-col items-center gap-10 text-center">
        <div className="flex w-full flex-col items-center gap-3">
          <Kicker className="!text-white/70">{eyebrow}</Kicker>
          <Display className="text-white">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </Display>
        </div>

        <div className="flex w-full flex-col gap-6 text-base leading-6 text-white/70">
          <p>
            {lead.before}
            <strong className="font-semibold text-white">{lead.strong}</strong>
            {lead.after}
          </p>
          {paragraphs.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden
         className="shrink-0 text-[var(--blue)]">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * "What the scan shows you" — Figma 2417:2282.
 *
 * A split header over three columns of what the scan reads. 2417:2524 is 1280
 * by 233 and the panel 2417:2539 is 1280 by 560, 104 apart, on the same 1280
 * the contact band uses rather than the 1328 most others do.
 *
 * The chips wrap as a row rather than sitting on a grid: the lists are 11, 8
 * and 7 long and the frame lets them find their own lines, so a longer list
 * from the client will not break the column.
 */
export function WhatWeTest({
  eyebrow,
  title,
  paragraphs,
  cta,
  groups,
}: {
  eyebrow: string;
  title: string[];
  paragraphs: string[];
  cta: { href: string; label: string };
  groups: { title: string; body?: string; items: string[]; more?: boolean }[];
}) {
  return (
    <section className="flex w-full flex-col items-center overflow-clip bg-white px-6 py-16 sm:px-14 sm:py-[104px]">
      <div className="flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:gap-[120px]">
        <div className="flex flex-col items-start gap-6 lg:max-w-[580px] lg:flex-1">
          <div className="flex flex-col gap-3 text-[var(--ink)]">
            <Kicker>{eyebrow}</Kicker>
            <Display>
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Display>
          </div>
          <BlueButton href={cta.href}>{cta.label}</BlueButton>
        </div>
        <div className="flex flex-col gap-6 text-base leading-6 text-[var(--ink-80)] lg:max-w-[580px] lg:flex-1">
          {paragraphs.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </div>
      </div>

      <div
        className={`mt-12 grid w-full max-w-[1280px] overflow-clip rounded-2xl border sm:grid-cols-2 lg:mt-[104px] lg:h-[560px] lg:grid-cols-3 ${HAIRLINE}`}
      >
        {groups.map((g, i) => (
          <div
            key={g.title}
            className={`flex flex-col gap-6 border-b p-8 lg:border-b-0 ${
              i < groups.length - 1 ? `lg:border-r ${HAIRLINE}` : ""
            } ${HAIRLINE}`}
          >
            <h3 className="font-kalice text-[clamp(1.5rem,1.1rem+1vw,32px)] leading-[1.25] tracking-[1px] text-[var(--ink)]">
              {g.title}
            </h3>
            {g.body && (
              <p className="text-base leading-6 text-[var(--ink-60)]">{g.body}</p>
            )}
            <div className="mt-auto flex flex-col gap-3">
              <p className="text-base leading-6 text-[var(--ink-60)]">Including:</p>
              <ul className="flex flex-wrap items-center gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm leading-5 text-[var(--ink)] ${HAIRLINE}`}
                  >
                    <Tick />
                    {it}
                  </li>
                ))}
                {g.more && (
                  <li>
                    <span className="px-2 text-sm leading-5 font-medium text-[var(--blue)]">
                      View All →
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Column and row for each of the four steps, and the rules between them. */
const PLACE = [
  `lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:border-r border-[rgba(21,32,50,0.1)]`,
  `lg:col-start-2 lg:row-start-1 lg:border-b lg:border-r border-[rgba(21,32,50,0.1)]`,
  `lg:col-start-2 lg:row-start-2 lg:border-r border-[rgba(21,32,50,0.1)]`,
  `lg:col-start-3 lg:row-start-1 lg:row-span-2`,
];

const FILL =
  "bg-[radial-gradient(120%_120%_at_78%_18%,#dfe8fb_0%,#8fb0f0_34%,#3f77e6_72%,#2a5fd6_100%)] text-white";

/**
 * "One simple scan. A much bigger picture." — Figma 2417:2706.
 *
 * Four steps in three columns: the questionnaire and the review run the whole
 * height on the outside, and the scan and its results share the middle. The
 * frame fills the first, which is the only step the patient has to do anything
 * about before they arrive.
 *
 * Below lg the columns unwrap into one, which puts the steps back in their
 * numbered order — the middle column is the only thing that made 02 and 03
 * sit beside 01 rather than after it.
 */
export function AppointmentSteps({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string[];
  steps: { n: string; title: string; body: string[]; filled?: boolean; tall?: boolean }[];
}) {
  return (
    <section className="flex w-full flex-col items-center overflow-clip bg-white px-6 py-16 sm:px-14 sm:py-[104px]">
      <header className="flex w-full max-w-[960px] flex-col items-center text-center">
        <Kicker>{eyebrow}</Kicker>
        <Display className="mt-2 text-[var(--ink)]">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </Display>
      </header>

      <div
        /* 570, per 2417:2957 — at 396 the review column ran out of room and
           its last paragraph was clipped. */
        className={`mt-12 grid w-full max-w-[1328px] overflow-clip rounded-2xl border lg:mt-20 lg:h-[570px] lg:grid-cols-3 lg:grid-rows-2 ${HAIRLINE}`}
      >
        {steps.map((st, i) => (
          <div
            key={st.n}
            /* Placed rather than flowed: 02 and 03 share the middle column, so
               auto-placement would push 03 into the third one and leave the
               review stranded. */
            className={`flex flex-col justify-between gap-8 border-b p-8 lg:border-b-0 ${HAIRLINE} ${
              PLACE[i]
            } ${st.filled ? FILL : "text-[var(--ink)]"}`}
          >
            <div className="flex flex-col gap-6">
              <p className={`eyebrow ${st.filled ? "!text-white/70" : "text-[var(--ink-60)]"}`}>
                {st.n}
              </p>
              <h3 className="font-kalice text-[clamp(1.375rem,1rem+0.9vw,30px)] leading-[1.25] tracking-[1px]">
                {st.title}
              </h3>
            </div>
            <div className={`flex flex-col gap-4 text-base leading-6 ${st.filled ? "text-white/85" : "text-[var(--ink-60)]"}`}>
              {st.body.map((t) => (
                <p key={t.slice(0, 20)}>{t}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * "When \u0022normal\u0022 doesn't tell the whole story." — Figma 2417:3005.
 *
 * The page's second dark band: a centred header over six reasons in a bordered
 * two-column panel, then the action. The frame reads the six across the
 * columns rather than down them, so the grid flows in rows.
 */
export function WhoItsFor({
  eyebrow,
  title,
  standfirst,
  items,
  cta,
}: {
  eyebrow: string;
  title: string[];
  standfirst: string;
  items: string[];
  cta: { href: string; label: string };
}) {
  const EDGE = "border-white/12";
  return (
    <section className="flex w-full flex-col items-center gap-10 overflow-clip bg-[var(--dark)] px-6 py-16 sm:px-14 sm:py-[104px]">
      <header className="flex w-full max-w-[900px] flex-col items-center text-center">
        <Kicker className="!text-white/70">{eyebrow}</Kicker>
        <Display className="mt-2 text-white">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </Display>
        <p className="mt-4 text-base leading-6 text-white/60">{standfirst}</p>
      </header>

      <ul className={`grid w-full max-w-[1180px] overflow-clip rounded-2xl border sm:grid-cols-2 ${EDGE}`}>
        {items.map((t, i) => (
          <li
            key={t}
            className={`flex items-start gap-3 border-b p-8 text-base leading-6 text-white/80 ${EDGE} ${
              i % 2 === 0 ? `sm:border-r ${EDGE}` : ""
            } ${i >= items.length - 2 ? "sm:border-b-0" : ""}`}
          >
            <Tick />
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <BlueButton href={cta.href}>{cta.label}</BlueButton>
    </section>
  );
}

/**
 * "Your results are only the beginning." — Figma 2417:3286.
 *
 * Copy and an accordion on the left, the portrait on the right. The rows hold
 * the one the cursor last entered, the same as every other row on the site —
 * see components/hold-open.ts.
 */
export function BeyondScan({
  eyebrow,
  title,
  body,
  rows,
  image,
}: {
  eyebrow: string;
  title: string[];
  body: string;
  rows: { n: string; title: string; lead: string; body: string[] }[];
  image: string;
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 overflow-clip bg-white px-6 py-16 sm:px-14 lg:flex-row lg:items-start lg:gap-[120px] lg:px-20 lg:py-[104px]">
      <div className="flex w-full flex-col gap-8 lg:max-w-[580px] lg:flex-1">
        <div className="flex flex-col gap-3 text-[var(--ink)]">
          <Kicker>{eyebrow}</Kicker>
          <Display>
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </Display>
        </div>
        <p className="text-base leading-6 text-[var(--ink-80)]">{body}</p>
        <BeyondRows rows={rows} />
      </div>

      <div className="relative w-full overflow-clip rounded-2xl lg:max-w-[580px] lg:flex-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          loading="lazy"
          decoding="async"
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
