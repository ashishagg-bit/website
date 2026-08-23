import { BlueButton } from "@/components/ui";

/**
 * Dark photographic page hero used by every inner page in the Figma file
 * (e.g. "All services" node 68:18788): 800px tall, 24px top corners, warm
 * soft-light wash, dark gradient rising from the bottom, copy bottom-left.
 *
 * The site header renders over this in its `overlay` variant.
 */
export function PageHero({
  eyebrow,
  title,
  body,
  cta = { href: "/contact", label: "Schedule a Consultation →" },
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  cta?: { href: string; label: string } | null;
  image: string;
}) {
  return (
    <section className="relative flex h-[560px] w-full flex-col items-start justify-end overflow-clip rounded-t-3xl px-6 pb-12 pt-32 sm:px-14 lg:h-[800px] lg:pt-[120px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light" />
        {/* The frame keeps the photograph bright: a light vertical fall-off plus a
            soft wash from the left, which is where the copy sits. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,32,50,0)_18%,rgba(21,32,50,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,32,50,0.5)_0%,rgba(21,32,50,0.12)_45%,transparent_70%)]" />
      </div>

      <div className="relative flex w-full max-w-[725px] flex-col items-start justify-end gap-6">
        <div className="flex flex-col gap-5">
          <p className="eyebrow !text-white">{eyebrow}</p>
          <h1 className="font-kalice text-[clamp(2.25rem,1.3rem+3vw,3.5rem)] leading-[1.21] tracking-[1px] text-white">
            {title}
          </h1>
          {body && (
            <p className="max-w-[640px] text-base leading-6 text-white/80">{body}</p>
          )}
        </div>
        {cta && <BlueButton href={cta.href}>{cta.label}</BlueButton>}
      </div>
    </section>
  );
}
