import { Metadata } from "next";
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
      <section className="gradient-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <Eyebrow>VIP Health Plans</Eyebrow>
          <h1 className="font-display text-4xl sm:text-5xl text-[var(--navy)] mt-4 tracking-tight max-w-3xl text-balance">
            Choose your wellness journey.
          </h1>
          <p className="mt-5 text-lg text-[var(--navy-soft)]/85 max-w-2xl">
            At Dr. Avi Ishaaya Centers, we understand that each person&apos;s
            path to wellness is unique. We&apos;ve designed four comprehensive
            wellness packages to match your individual health goals and needs.
          </p>
          <div className="mt-7">
            <PrimaryButton href="/contact">Call to Book</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <Eyebrow>Foundations</Eyebrow>
              <h2 className="font-display text-3xl text-[var(--navy)] mt-4 tracking-tight">
                All Packages Begin With Essential Health Assessments
              </h2>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {baseAssessments.map((b) => (
                <li
                  key={b}
                  className="rounded-2xl bg-[var(--background)]/40 border border-[var(--line)] p-5 text-sm text-[var(--navy)]"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--teal-deep)] mb-2">
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
              className={`relative rounded-3xl border ${t.border} bg-white p-7 sm:p-8 hover:shadow-xl hover:shadow-[var(--navy)]/5 transition-shadow ${t.highlight ? "ring-1 ring-[var(--teal)]/40" : ""}`}
            >
              {t.highlight && (
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.2em] bg-[var(--teal)] text-white px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <div
                className={`h-24 rounded-2xl bg-gradient-to-br ${t.accent} flex items-end p-4`}
              >
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--navy)]/70">
                  {t.tag}
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl text-[var(--navy)]">
                {t.name} Package
              </h3>
              <p className="mt-2 text-[var(--navy-soft)]/85">{t.blurb}</p>
              <p className="mt-4 text-sm text-[var(--muted)]">{t.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--navy)]">
                {t.inclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-3">
                    <span className="mt-0.5 text-[var(--teal-deep)]">
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
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--teal-deep)] transition-colors"
                >
                  Call to Book
                </Link>
                <Link
                  href={`/vip/${t.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium text-[var(--navy)] hover:border-[var(--teal-deep)] hover:text-[var(--teal-deep)] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[var(--warm-soft)]/40">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Eyebrow>À la carte</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--navy)] mt-4 tracking-tight">
            Customize Your Care
          </h2>
          <p className="mt-4 text-[var(--navy-soft)]/85 max-w-2xl mx-auto">
            Make any package uniquely yours by selecting additional services
            from our à la carte menu. Our team will help you design a wellness
            plan that aligns perfectly with your health goals and preferences.
          </p>
          <div className="mt-7">
            <PrimaryButton href="/contact">Speak With Our Team</PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
