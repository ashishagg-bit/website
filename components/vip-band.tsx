import { BlueButton } from "@/components/ui";

/**
 * "VIP Plans" split band — Figma node 92:26349 on "All services".
 * 740px tall: a 720px image on the left, ink panel with the copy on the right.
 */
export function VipBand({
  image = "/images/scraped/vJcCoQOaSPFFb1mZKUNODZviiw.jpg",
}: {
  image?: string;
} = {}) {
  return (
    <section className="flex w-full items-start justify-center overflow-clip bg-[var(--ink)]">
      <div className="relative h-[280px] w-full shrink-0 md:h-[740px] md:w-1/2 md:max-w-[720px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start justify-center px-6 py-16 sm:px-14 md:h-[740px] md:py-20 lg:pl-[88px] lg:pr-20">
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-5">
            <div className="flex w-full flex-col gap-4 text-white">
              <p className="eyebrow !text-white">VIP Plans</p>
              <h2 className="font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px]">
                Exclusive VIP
                <br />
                Health Plans
              </h2>
            </div>
            <p className="text-base leading-6 text-white/80">
              Discover four comprehensive wellness packages designed to match
              your individual goals — from foundational health screenings to the
              most advanced diagnostics medicine has to offer.
            </p>
          </div>
          <BlueButton href="/vip">Explore All Plans</BlueButton>
        </div>
      </div>
    </section>
  );
}
