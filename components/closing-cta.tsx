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
      {/* Fills read off the frame: #111822, the photograph, #FEB55B at 60%
          soft-light, then a plain two-stop fade from transparent to #111822.
          The photograph covers the whole panel — pinning it to a fixed 671px
          block put the fade's midpoint 100px below where the design has it,
          because the frame itself is only 453 tall. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" decoding="async" src={image} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(254,181,91,0.6)] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,34,0)_0%,var(--dark)_100%)]" />
      </div>

      {/* 16px under the body, not 50: Figma 2256:13961 puts the button at
          y=292 against a body ending at 276. The copy column is 476 wide —
          unconstrained it filled the full 720 and the body collapsed from the
          two lines the design sets to one. */}
      <div className="relative flex w-full flex-col items-center justify-center gap-4 px-6 sm:px-14">
        <div className="flex w-full max-w-[720px] flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-col items-center justify-center gap-3 text-white">
            <p className="eyebrow !text-white">{eyebrow}</p>
            <h2 className="font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px]">
              {title}
            </h2>
          </div>
          {/* The body is the only part that takes the frame's 476: Figma sets
              it on two lines and the heading on one, and our Kalice is a shade
              wider than the file's trial cut — hold the heading to 476 too and
              "A New Era of Care" breaks across two lines it should not. */}
          {body && (
            <p className="max-w-[476px] text-base leading-6 text-white/80">
              {body}
            </p>
          )}
        </div>
        {cta && <BlueButton href={cta.href}>{cta.label}</BlueButton>}
      </div>

      {children}
    </section>
  );
}
