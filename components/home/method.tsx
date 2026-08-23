import { Display, Kicker } from "@/components/ui";
import { methodItems } from "@/lib/home-content";

/**
 * "our method" — Figma node 1:674. Four 400px cards on an 8px gutter; the row
 * overflows the 1328px content box in the design, so it scrolls horizontally.
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

      <ul className="no-scrollbar -mx-6 flex w-[calc(100%+3rem)] snap-x snap-mandatory items-start gap-2 overflow-x-auto px-6 sm:-mx-14 sm:w-[calc(100%+7rem)] sm:px-14">
        {methodItems.map((item) => (
          <li
            key={item.title}
            className="flex w-[320px] shrink-0 snap-start flex-col gap-6 sm:w-[400px]"
          >
            <div className="relative h-[420px] overflow-clip rounded-lg sm:h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
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
