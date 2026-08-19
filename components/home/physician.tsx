import { BlueButton, Kicker } from "@/components/ui";
import { physician } from "@/lib/home-content";

/** "Meet your physician" — Figma node 1:1776. */
export function Physician() {
  return (
    <section className="relative z-[1] -mt-6 flex w-full justify-center overflow-clip rounded-t-3xl bg-white px-6 pb-16 pt-16 sm:px-14 sm:pb-20 sm:pt-[120px]">
      <div className="flex w-full max-w-[1328px] flex-col items-start gap-12 lg:flex-row lg:gap-20">
        <div className="relative h-[420px] w-full shrink-0 overflow-clip rounded-2xl lg:h-[700px] lg:flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={physician.image}
            alt={physician.title}
            className="absolute inset-0 size-full object-cover object-top"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[rgba(254,181,91,0.12)] mix-blend-soft-light"
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-12 self-stretch lg:w-[540px]">
          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full flex-col gap-5">
              <div className="flex w-full flex-col gap-4 text-[var(--ink)]">
                <Kicker>{physician.eyebrow}</Kicker>
                <h2 className="font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px]">
                  {physician.title}
                </h2>
                <p className="text-base leading-6 text-[var(--ink-80)]">
                  {physician.blurb}
                </p>
              </div>
            </div>
            <BlueButton href="/contact">Schedule a Consultation</BlueButton>
          </div>

          <div className="flex w-full flex-col gap-6">
            {physician.points.map((p) => (
              <div key={p.title} className="flex w-full flex-col gap-2">
                <h3 className="text-lg leading-6 text-[var(--ink)]">{p.title}</h3>
                {p.body && (
                  <p className="text-base leading-[22px] text-[var(--ink-60)]">
                    {p.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
