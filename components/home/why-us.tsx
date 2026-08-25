import { BlueButton } from "@/components/ui";

/**
 * "why us" — Figma node 43:3943, component WhyUs variant property1="6"
 * (full-bleed photo, warm soft-light wash, dark vertical multiply gradient).
 */
export function WhyUs() {
  return (
    <section className="relative flex h-[560px] w-full flex-col items-center justify-center gap-20 overflow-clip bg-white px-6 py-20 sm:px-14 lg:h-[800px] lg:py-[120px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          loading="lazy"
          decoding="async"
          src="/images/figma/why-us-bg.jpg"
          alt=""
          className="absolute inset-0 size-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light" />
        {/* The frame keeps the photograph warm and bright, so the scrim stays
            light; legibility comes from a soft shadow on the copy instead. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,32,50,0.18)_0%,rgba(21,32,50,0.46)_50%,rgba(21,32,50,0.18)_100%)]" />
      </div>

      <div className="relative flex flex-col items-center justify-center gap-4 [text-shadow:0_1px_18px_rgba(21,32,50,0.55)]">
        <div className="flex flex-col items-center justify-center gap-3 text-center text-white">
          <p className="eyebrow !text-white">OUR PROMISE</p>
          <h2 className="font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px]">
            Every piece of your care,
            <br />
            thoughtfully considered.
          </h2>
        </div>
        <p className="text-center text-base leading-6 text-white/80">
          Because your health deserves the whole picture.
        </p>
        <div className="mt-3 flex gap-3">
          <BlueButton href="/contact">Schedule a Consultation</BlueButton>
        </div>
      </div>
    </section>
  );
}
