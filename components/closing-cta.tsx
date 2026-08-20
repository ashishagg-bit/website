import { BlueButton } from "@/components/ui";

/**
 * Closing photo panel — Figma node 64:17873 ("Section - Desktop").
 * #111822 with a photograph fading into it, centred copy and a single CTA.
 * The homepage's "OUr space" is the same panel with a locations row appended.
 */
export function ClosingCta({
  eyebrow = "Dr. Avi Ishaaya Center",
  title = "A New Era of Care",
  body = "Together, we shall piece together your unique path to complete wellbeing, honoring every dimension of your health puzzle.",
  cta = { href: "/contact", label: "Schedule a Consultation" },
  image = "/images/scraped/48cUzxZLj1fsBF3sPX6ycI0y0jc.jpg",
  children,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  cta?: { href: string; label: string } | null;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex w-full flex-col items-center overflow-clip rounded-t-3xl bg-[var(--dark)] py-20 lg:py-[120px]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[671px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(254,181,91,0.6)] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,34,0.35)_0%,rgba(17,24,34,0.75)_50%,var(--dark)_100%)]" />
      </div>

      <div className="relative flex w-full flex-col items-center justify-center gap-12 px-6 sm:px-14 lg:gap-[50px]">
        <div className="flex w-full max-w-[720px] flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-col items-center justify-center gap-3 text-white">
            <p className="eyebrow !text-white">{eyebrow}</p>
            <h2 className="font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px]">
              {title}
            </h2>
          </div>
          {body && <p className="text-base leading-6 text-white/80">{body}</p>}
        </div>
        {cta && <BlueButton href={cta.href}>{cta.label}</BlueButton>}
      </div>

      {children}
    </section>
  );
}
