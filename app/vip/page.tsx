import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ClosingCta } from "@/components/closing-cta";
import Link from "next/link";
import { Eyebrow, PrimaryButton } from "@/components/ui";
import { tiers, baseAssessments } from "@/lib/vip-tiers";

export const metadata: Metadata = {
  title: "VIP Health Plans",
  description:
    "Four comprehensive wellness packages designed to match your individual health goals — Bronze, Silver, Gold, and Platinum.",
};

export default function VipPage() {
  return (
    <>
      <PageHero
        eyebrow="VIP Plans"
        title={
          <>
            Exclusive VIP
            <br />
            Health Plans
          </>
        }
        body="Discover four comprehensive wellness packages designed to match your individual goals — from foundational health screenings to the most advanced diagnostics medicine has to offer."
        image="/images/scraped/vJcCoQOaSPFFb1mZKUNODZviiw.jpg"
      />

      <section className="py-16 bg-white border-y border-[var(--hairline)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <Eyebrow>Foundations</Eyebrow>
              <h2 className="font-kalice text-3xl text-[var(--ink)] mt-4 tracking-tight">
                All Packages Begin With Essential Health Assessments
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
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-6">
          {tiers.map((t) => (
            <div
              key={t.slug}
              className={`relative rounded-3xl border ${t.border} bg-white p-7 sm:p-8 hover:shadow-xl hover:shadow-[var(--ink)]/5 transition-shadow ${t.highlight ? "ring-1 ring-[var(--blue)]/40" : ""}`}
            >
              {t.highlight && (
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.2em] bg-[var(--blue)] text-white px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <div
                className={`h-24 rounded-2xl bg-gradient-to-br ${t.accent} flex items-end p-4`}
              >
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--ink)]/70">
                  {t.tag}
                </div>
              </div>
              <h3 className="mt-6 font-kalice text-2xl text-[var(--ink)]">
                {t.name} Package
              </h3>
              <p className="mt-2 text-[var(--ink)]/85">{t.blurb}</p>
              <p className="mt-4 text-sm text-[var(--ink-60)]">{t.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--ink)]">
                {t.inclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-3">
                    <span className="mt-0.5 text-[var(--blue)]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--blue)] transition-colors"
                >
                  Call to Book
                </Link>
                <Link
                  href={`/vip/${t.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[var(--sky)]/40">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Eyebrow>À la carte</Eyebrow>
          <h2 className="font-kalice text-3xl sm:text-4xl text-[var(--ink)] mt-4 tracking-tight">
            Customize Your Care
          </h2>
          <p className="mt-4 text-[var(--ink)]/85 max-w-2xl mx-auto">
            Make any package uniquely yours by selecting additional services
            from our à la carte menu. Our team will help you design a wellness
            plan that aligns perfectly with your health goals and preferences.
          </p>
          <div className="mt-7">
            <PrimaryButton href="/contact">Speak With Our Team</PrimaryButton>
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
