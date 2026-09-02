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
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  /** Null on bands whose frame hides the button — Contact's "visit us"
      (2256:9578) carries three, all switched off. */
  cta?: { href: string; label: string } | null;
  image: string;
  tone?: "ink" | "cream";
  /** Extra copy under the body, for bands that stack a second block there
      rather than ending on a button. */
  children?: React.ReactNode;
}) {
  const dark = tone === "ink";

  return (
    /* The band is a true half-and-half: Figma puts a 720 image against a 720
       copy panel in a 1440 frame. It used to cap the image at max-w-[720px],
       which only reads as half at exactly 1440 — past that the photograph
       stopped growing while the copy kept going, so it fell to 47.6% on a
       1512 laptop, 37.5% at 1920 and 28.1% on a 2560 desktop.

       Height scales with the viewport instead of sitting at a fixed 740, so
       the band keeps its proportions across screen sizes: 51.4vw is the
       frame's own 740/1440, which lands exactly on 740 at the design width.
       The floor keeps it from collapsing on small laptops and the ceiling
       stops it running past a viewport on very wide displays. */
    <section
      className={`flex w-full flex-col items-start justify-center overflow-clip md:h-[clamp(520px,51.4vw,900px)] md:flex-row md:items-stretch ${
        dark ? "bg-[var(--ink)]" : "bg-[var(--cream)]"
      }`}
    >
      <div className="relative h-[280px] w-full shrink-0 md:h-full md:w-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" decoding="async" src={image} alt="" className="absolute inset-0 size-full object-cover" />
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

      <div className="flex min-w-0 flex-1 flex-col items-start justify-center px-6 py-16 sm:px-14 md:h-full md:py-20 lg:pl-24 lg:pr-20">
        {/* 544 is the copy column in Figma (x=816 to 1360, i.e. 96px off the
            seam and 80px from the frame edge — which is what pl-24/pr-20
            already give at the design width). Capping it holds the line length
            as the panel grows: unbounded it reached 784px at 1920 and pulled
            the headline, set on four lines in the frame, onto one. */}
        <div className="flex w-full max-w-[544px] flex-col items-start gap-6">
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
            {body && (
              <div
                className={`text-base leading-6 ${
                  dark ? "text-white/80" : "text-[var(--ink-80)]"
                }`}
              >
                {body}
              </div>
            )}
          </div>
          {children}
          {cta && <BlueButton href={cta.href}>{cta.label}</BlueButton>}
        </div>
      </div>
    </section>
  );
}
