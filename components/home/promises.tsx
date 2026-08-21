import { Display, Kicker } from "@/components/ui";
import { homePromises } from "@/lib/home-content";

const EDGE = "border-[rgba(255,255,255,0.06)]";

/**
 * "Our values" — Figma node 1:1498.
 *
 * Same interaction as the services bento, and likewise pure CSS (see the
 * `.tabrow` / `.promise` rules in globals.css): the open card widens, turns
 * blue, enlarges its heading and reveals its body. Promise 01 is the card the
 * row rests on, which is the state the frame captured.
 */
export function Promises() {
  return (
    <section className="flex w-full flex-col items-center gap-12 overflow-clip bg-[var(--ink)] px-6 py-16 sm:px-14 sm:py-[104px] lg:gap-20">
      <header className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center text-white">
        <Kicker className="!text-white">Our values</Kicker>
        <Display>
          Our Five
          <br />
          Fundamental Promises
        </Display>
      </header>

      <div
        className={`tabrow flex w-full max-w-[1328px] flex-col overflow-clip rounded-2xl border lg:flex-row ${EDGE}`}
      >
        {homePromises.map((p, i) => (
          <div
            key={p.n}
            {...(i === 0 ? { "data-open": "" } : {})}
            className={`tab promise relative flex flex-col items-start justify-between overflow-clip p-8 lg:h-[440px] ${
              i < homePromises.length - 1
                ? `border-b lg:border-b-0 lg:border-r ${EDGE}`
                : ""
            }`}
          >
            <div
              aria-hidden
              className="puzzle-wash on-open pointer-events-none absolute inset-0 !opacity-30"
            />

            <p className="promise-num relative font-kalice text-2xl leading-8 tracking-[1px]">
              {p.n}
            </p>

            <div className="relative flex w-full flex-col gap-4">
              <h3 className="promise-title font-kalice tracking-[1px] text-white">
                {p.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              {p.body && (
                <p className="promise-body max-w-[420px] text-base leading-6 text-white/80">
                  {p.body}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
