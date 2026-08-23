import { BlueButton, OutlineButton } from "@/components/ui";
import { featuredIn } from "@/lib/home-content";
import { PuzzleHead } from "@/components/puzzle-head";

/** Play glyph standing in for the SF Symbol `play.circle.fill` (I64:10192;57:9783). */
function PlayCircle() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="white" fillOpacity="0.92" />
      <path d="M10 8.5v7l6-3.5-6-3.5z" fill="var(--ink)" />
    </svg>
  );
}

/**
 * Hero — Figma node 64:10192. The nav and announcement bar live in SiteHeader,
 * which shares this frame in the design.
 *
 * Layout per the frame: the video card sits high on the left, the eyebrow /
 * headline / body / actions sit well below it, and the puzzle-head artwork
 * fills the right half, bleeding past the top of the frame.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-clip bg-[var(--cream)]">
      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-14">
        <div className="relative grid items-start gap-10 pb-12 pt-6 lg:min-h-[720px] lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:gap-0">
          {/* Left column: card at the top, copy pinned toward the bottom */}
          <div className="flex flex-col lg:h-full">
            <div className="relative w-[300px] max-w-full overflow-clip rounded-2xl">
              <div className="relative flex h-[170px] items-center justify-center overflow-clip bg-[var(--ink)]/90">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/scraped/piPOUcGww89HYaJTpCR7kEFYeLk.webp"
                  alt=""
                  className="absolute inset-0 size-full object-cover opacity-80"
                />
                {/* Two 60px discs straddling the left and right edges, centred
                    on the photo — Figma I64:10192;57:9786 / 57:9787. */}
                <span
                  aria-hidden
                  className="absolute left-[-30px] top-1/2 size-[60px] -translate-y-1/2 rounded-full bg-[var(--cream)]"
                />
                <span
                  aria-hidden
                  className="absolute left-[270px] top-1/2 size-[60px] -translate-y-1/2 rounded-full bg-[var(--cream)]"
                />
                <span className="relative">
                  <PlayCircle />
                </span>
              </div>
              <div className="flex w-full items-center justify-center bg-[var(--sky)] px-4 py-3.5">
                <p className="font-kalice flex-1 text-[15px] leading-[1.32] tracking-[0.3px] text-[var(--ink)]">
                  A word from our team.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-6 lg:mt-auto lg:pb-12">
              <div className="flex flex-col gap-3">
                <p className="eyebrow">Dr. Avi Ishaaya Center</p>
                <h1 className="font-kalice text-[clamp(2.25rem,1.3rem+3vw,3.5rem)] leading-[1.21] tracking-[1px] text-[var(--ink)]">
                  Piece by piece,
                  <br />
                  build a healthier you.
                </h1>
                <p className="max-w-[460px] text-base leading-6 text-[var(--ink-80)]">
                  Together, we shall piece together your unique path to complete
                  wellbeing, honoring every dimension of your health puzzle.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <BlueButton href="/contact">Schedule a Consultation →</BlueButton>
                <OutlineButton href="/about">Learn more</OutlineButton>
              </div>
            </div>
          </div>

          {/* Right: the puzzle-head artwork (Figma I64:10192;64:10185) */}
          <div className="relative h-[380px] lg:absolute lg:inset-y-0 lg:left-[46%] lg:right-0 lg:h-auto">
            <PuzzleHead className="size-full" />
          </div>
        </div>
      </div>

      {/* FEATURED IN — Figma I64:10192;64:10507 */}
      <div className="relative z-[1] flex w-full flex-col items-center gap-6 overflow-clip bg-[var(--cream)] px-6 pb-12 pt-10 sm:px-14">
        <p className="eyebrow">FEATURED IN</p>
        <ul className="flex w-full max-w-[1330px] flex-wrap items-center justify-between gap-x-10 gap-y-6">
          {featuredIn.map((p) => (
            <li key={p.name} className={`flex-1 whitespace-nowrap text-center text-[var(--ink)] ${p.className}`}>
              {p.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
