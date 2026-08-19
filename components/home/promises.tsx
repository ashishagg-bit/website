import { Display, Kicker } from "@/components/ui";
import { homePromises } from "@/lib/home-content";

const EDGE = "border-[rgba(255,255,255,0.06)]";

/** "Our values" — Figma node 1:1498. First promise is the wide blue card. */
export function Promises() {
  const [lead, ...rest] = homePromises;

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
        className={`grid w-full max-w-[1328px] overflow-clip rounded-2xl border ${EDGE} lg:grid-cols-[500px_repeat(4,1fr)]`}
      >
        {/* 01 — blue lead card */}
        <div className="relative flex h-[440px] flex-col items-start justify-between overflow-clip bg-[var(--blue)] py-8 pl-8 pr-8 lg:pr-[120px]">
          <div
            aria-hidden
            className="puzzle-wash pointer-events-none absolute inset-0 opacity-30"
          />
          <div className="relative flex w-full flex-col gap-4 text-white">
            <p className="eyebrow !text-white">{lead.n}</p>
            <h3 className="font-kalice text-[40px] leading-[48px] tracking-[1px]">
              {lead.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
          </div>
          <p className="relative text-base leading-6 text-white/80">{lead.body}</p>
        </div>

        {/* 02–05 */}
        {rest.map((p, i) => (
          <div
            key={p.n}
            className={`flex h-[440px] flex-col items-start justify-between overflow-clip p-8 ${
              i < rest.length - 1 ? `border-r ${EDGE}` : ""
            } border-t lg:border-t-0 ${EDGE}`}
          >
            <p className="font-kalice text-2xl leading-8 tracking-[1px] text-white/40">
              {p.n}
            </p>
            <h3 className="font-kalice text-2xl leading-8 tracking-[1px] text-white">
              {p.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
