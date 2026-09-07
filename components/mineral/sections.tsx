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
