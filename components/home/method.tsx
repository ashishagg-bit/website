import { Display, Kicker } from "@/components/ui";
import { methodItems } from "@/lib/home-content";

/**
 * "our method" — Figma 2256:1421. Four cards on an 8px gutter, running off the
 * right edge of the frame: at the design width they sit at x=56, 464, 872 and
 * 1280, so the last one reaches 1680 against a 1440 frame and the row is meant
 * to bleed past the viewport and scroll.
 *
 * The cards were a fixed 400px, which only bleeds up to about 1650px of
 * viewport. Past that the whole row fits on screen and the design's run-off
 * turns into dead space — roughly 240px of it at 1920. Width is now the
 * frame's own proportion (400/1440 = 27.78vw), so the row always overruns the
 * screen and the cards keep their scale relative to it.
 */
export function Method() {
  return (
    <section className="flex w-full flex-col items-center gap-12 overflow-clip bg-white px-6 py-16 sm:px-14 sm:py-[104px] lg:gap-20">
      <header className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center">
        <Kicker>our method</Kicker>
        <Display className="text-[var(--ink)]">
          Honoring every dimension of your health puzzle.
        </Display>
      </header>

      <ul className="no-scrollbar -mx-6 flex w-[calc(100%+3rem)] snap-x snap-mandatory scroll-px-6 sm:scroll-px-14 items-start gap-2 overflow-x-auto px-6 sm:-mx-14 sm:w-[calc(100%+7rem)] sm:px-14">
        {methodItems.map((item) => (
          <li
            key={item.title}
            className="flex w-[320px] min-w-[320px] shrink-0 snap-start flex-col gap-6 sm:w-[27.78vw]"
          >
            {/* 400x524 in the frame, so the image scales with the card rather
                than sitting at a fixed height beside a fluid width. */}
            <div className="relative aspect-[400/524] overflow-clip rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                decoding="async"
                src={item.image}
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
              <div aria-hidden className="puzzle-lines absolute inset-0" />
            </div>
            <div className="flex flex-col gap-2 pr-10">
              <h3 className="text-lg leading-6 text-[var(--ink)]">{item.title}</h3>
              <p className="text-base leading-[22px] text-[var(--ink-60)]">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
