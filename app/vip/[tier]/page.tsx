import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, PrimaryButton, SecondaryButton } from "@/components/ui";
import { tiers, baseAssessments, getTier } from "@/lib/vip-tiers";

type Params = { tier: string };

export function generateStaticParams() {
  return tiers.map((t) => ({ tier: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { tier } = await params;
  const t = getTier(tier);
  if (!t) return {};
  return {
    title: `${t.name} VIP Package`,
    description: t.blurb,
    alternates: { canonical: `/vip/${t.slug}/` },
  };
}

export default async function VipTierPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { tier } = await params;
  const t = getTier(tier);
  if (!t) notFound();

  return (
    <>
      <section className="gradient-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <nav className="text-sm text-[var(--ink-60)] mb-6">
            <Link href="/vip" className="hover:text-[var(--blue)]">
              VIP Health Plans
            </Link>{" "}
            <span className="mx-2">/</span>
            <span className="text-[var(--ink)]">{t.name} Package</span>
          </nav>
          <Eyebrow>{t.tag}</Eyebrow>
          <h1 className="font-kalice text-4xl sm:text-5xl text-[var(--ink)] mt-4 tracking-tight max-w-3xl text-balance">
            {t.name} Package
          </h1>
          <p className="mt-5 text-lg text-[var(--ink)]/85 max-w-2xl">
            {t.blurb}
          </p>
          <p className="mt-3 text-[var(--ink-60)] max-w-2xl">{t.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryButton href="/contact">Call to Book</PrimaryButton>
            <SecondaryButton href="/vip">Compare All Tiers</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[var(--hairline)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <Eyebrow>Foundations</Eyebrow>
              <h2 className="font-kalice text-2xl sm:text-3xl text-[var(--ink)] mt-4 tracking-tight">
                Every {t.name} visit begins with a complete baseline.
              </h2>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {baseAssessments.map((b) => (
                <li
                  key={b}
                  className="rounded-2xl bg-[var(--cream)]/40 border border-[var(--hairline)] p-5 text-sm text-[var(--ink)]"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--blue)] mb-2">
                    Included
                  </div>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Eyebrow>What&apos;s included</Eyebrow>
          <h2 className="font-kalice text-3xl sm:text-4xl text-[var(--ink)] mt-4 tracking-tight max-w-3xl">
            The full {t.name} experience.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {t.detailedInclusions.map((d) => (
              <div
                key={d.title}
                className={`rounded-2xl border ${t.border} bg-white p-7 hover:shadow-lg hover:shadow-[var(--ink)]/5 transition-shadow`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[var(--blue)]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-kalice text-lg text-[var(--ink)]">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--ink)]/85 leading-relaxed">
                      {d.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--sky)]/40">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Eyebrow>À la carte</Eyebrow>
          <h2 className="font-kalice text-3xl sm:text-4xl text-[var(--ink)] mt-4 tracking-tight">
            Customize Your Care
          </h2>
          <p className="mt-4 text-[var(--ink)]/85 max-w-2xl mx-auto">
            Make your {t.name} package uniquely yours by adding services from
            our à la carte menu — our team will help you design a wellness plan
            that aligns perfectly with your health goals.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <PrimaryButton href="/contact">Speak With Our Team</PrimaryButton>
            <SecondaryButton href="/vip">Back to All Tiers</SecondaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
