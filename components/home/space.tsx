import { BlueButton } from "@/components/ui";
import { space } from "@/lib/home-content";

/** "OUr space" — Figma node 1:2676. Photo header fading into #111822. */
export function Space() {
  const [wide, tall, third] = space.images;

  return (
    <section className="relative flex w-full flex-col items-center overflow-clip rounded-t-3xl bg-[var(--dark)]">
      {/* header-static: photo bleeding under the copy, faded to the panel color */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[671px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          loading="lazy"
          decoding="async"
          src={space.backdrop}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(254,181,91,0.6)] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,34,0)_0%,var(--dark)_100%)] backdrop-blur-[6px]" />
      </div>

      <div className="relative flex w-full flex-col items-center justify-center gap-4 px-6 pt-40 sm:px-14 lg:pt-[340px]">
        <div className="flex w-full max-w-[720px] flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-col items-center justify-center gap-3 text-white">
            <p className="eyebrow !text-white">{space.eyebrow}</p>
            <h2 className="font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px]">
              {space.title}
            </h2>
          </div>
          <p className="text-base leading-6 text-white/80">{space.body}</p>
        </div>
        <BlueButton href="/contact">Schedule a Consultation</BlueButton>
      </div>

      {/* locations row — the middle frame is 590px wide, the outer two fill */}
      <div className="relative mt-12 flex w-full items-center justify-center overflow-clip px-6 pb-16 sm:px-14 lg:mt-[50px] sm:pb-20">
        <div className="flex w-full max-w-[1328px] flex-col gap-2.5 md:flex-row">
          {[wide, tall, third].map((src, i) => (
            <div
              key={src}
              className={`relative h-[260px] overflow-clip rounded-lg lg:h-[400px] ${
                i === 1 ? "md:w-[590px] md:shrink-0" : "md:flex-1 md:min-w-0"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src={src} alt="" className="absolute inset-0 size-full object-cover" />
              <div
                aria-hidden
                className="absolute inset-0 bg-[rgba(254,181,91,0.6)] mix-blend-soft-light"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
