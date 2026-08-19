import { BlueButton, OutlineButton } from "@/components/ui";
import { featuredIn } from "@/lib/home-content";

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
 * Hero — Figma node 64:10192 (the nav and announcement bar live in SiteHeader,
 * which shares this frame in the design).
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-clip bg-[var(--cream)]">
      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-14">
        <div className="relative grid items-end gap-12 pb-12 pt-10 lg:min-h-[660px] lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:gap-8 lg:pb-12">
          {/* Left rail: video card above the eyebrow/title block */}
          <div className="flex flex-col gap-10">
            <div className="relative w-[300px] max-w-full overflow-clip rounded-2xl">
              <div className="relative flex h-[170px] items-center justify-center overflow-clip bg-[var(--ink)]/90">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/scraped/piPOUcGww89HYaJTpCR7kEFYeLk.webp"
                  alt=""
                  className="absolute inset-0 size-full object-cover opacity-80"
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

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="eyebrow">Dr. Avi Ishaaya Center</p>
                <h1 className="font-kalice text-[clamp(2.25rem,1.3rem+3vw,3.5rem)] leading-[1.21] tracking-[1px] text-[var(--ink)]">
                  Piece by piece,
                  <br />
                  build a healthier you.
                </h1>
                <p className="max-w-[520px] text-base leading-6 text-[var(--ink-80)]">
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

          {/* Right: hero portrait (Figma I64:10192;64:10185) */}
          <div className="relative h-[420px] lg:h-[620px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/scraped/H7UrHayerIUtTsCZGEBgPaXM.png"
              alt="Dr. Abraham “Avi” Ishaaya"
              className="absolute inset-0 size-full object-contain object-bottom lg:scale-110"
            />
          </div>
        </div>
      </div>

      {/* FEATURED IN — Figma I64:10192;64:10507 */}
      <div className="relative z-[1] flex w-full flex-col items-center gap-6 overflow-clip bg-[var(--cream)] px-6 pb-12 pt-10 sm:px-14">
        <p className="eyebrow">FEATURED IN</p>
        <ul className="flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-x-10 gap-y-4">
          {featuredIn.map((name) => (
            <li
              key={name}
              className="flex-1 whitespace-nowrap text-center font-kalice text-lg text-[var(--ink-40)]"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
