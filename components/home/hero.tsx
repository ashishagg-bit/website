import { BlueButton, OutlineButton } from "@/components/ui";
import { featuredIn } from "@/lib/home-content";
import { PuzzleHead } from "@/components/puzzle-head";

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
              <div className="relative flex h-[170px] items-center justify-center overflow-clip">
                {/* Flattened export of Figma I64:10192;57:9755 — the two-man
                    video still with grain texture and play glyph baked in. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/figma/video-thumb.jpg"
                  alt=""
                  width={600}
                  height={340}
                  className="absolute inset-0 size-full object-cover"
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

      {/* FEATURED IN — Figma 2256:895. The five mastheads run as a marquee
          rather than a static row: laid out flat they only fill the frame at
          the design width, and on anything wider they strand in the middle of
          a very wide band.

          The track carries the list twice and slides exactly half its width,
          so the second copy lands where the first began and the loop has no
          visible seam. The edges are masked so logos fade in and out instead
          of being cut at the viewport. `aria-hidden` on the duplicate keeps a
          screen reader from reading all five mastheads a second time. */}
      <div className="relative z-[1] flex w-full flex-col items-center gap-6 overflow-clip bg-[var(--cream)] px-0 pb-12 pt-10">
        <p className="eyebrow">FEATURED IN</p>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <ul className="press-marquee flex w-max items-center">
            {[0, 1].map((copy) =>
              featuredIn.map((p) => (
                <li
                  key={`${copy}-${p.name}`}
                  aria-hidden={copy === 1 || undefined}
                  className="flex w-[220px] shrink-0 items-center justify-center sm:w-[288px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    loading="lazy"
                    decoding="async"
                    src={p.src}
                    alt={copy === 0 ? p.name : ""}
                    width={p.w}
                    height={p.h}
                    style={{ width: p.w, height: p.h }}
                    className="max-w-full object-contain"
                  />
                </li>
              )),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
