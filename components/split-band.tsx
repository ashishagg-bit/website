import { BlueButton } from "@/components/ui";

/**
 * 740px split band: a 720px image beside a copy panel.
 * Figma 92:26349 ("All services", ink tone) and 96:28715 (service pages,
 * cream tone) are the same construction with the palette flipped.
 */
export function SplitBand({
  eyebrow,
  title,
  body,
  cta,
  image,
  tone = "ink",
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  cta: { href: string; label: string };
  image: string;
  tone?: "ink" | "cream";
}) {
  const dark = tone === "ink";

  return (
    <section
      className={`flex w-full flex-col items-start justify-center overflow-clip md:flex-row ${
        dark ? "bg-[var(--ink)]" : "bg-[var(--cream)]"
      }`}
    >
      <div className="relative h-[280px] w-full shrink-0 md:h-[740px] md:w-1/2 md:max-w-[720px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light"
        />
        {/* A 170px disc sits centred on the seam, reading as a notch bitten out
            of the photograph's inner edge — Figma 96:28715. */}
        <div
          aria-hidden
          className={`absolute right-0 top-1/2 hidden size-[170px] -translate-y-1/2 translate-x-1/2 rounded-full md:block ${
            dark ? "bg-[var(--ink)]" : "bg-[var(--cream)]"
          }`}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start justify-center px-6 py-16 sm:px-14 md:h-[740px] md:py-20 lg:pl-24 lg:pr-20">
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-5">
            <div
              className={`flex w-full flex-col gap-4 ${
                dark ? "text-white" : "text-[var(--ink)]"
              }`}
            >
              <p className={`eyebrow ${dark ? "!text-white" : ""}`}>{eyebrow}</p>
              <h2 className="font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px]">
                {title}
              </h2>
            </div>
            <p
              className={`text-base leading-6 ${
                dark ? "text-white/80" : "text-[var(--ink-80)]"
              }`}
            >
              {body}
            </p>
          </div>
          <BlueButton href={cta.href}>{cta.label}</BlueButton>
        </div>
      </div>
    </section>
  );
}
