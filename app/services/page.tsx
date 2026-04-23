import { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PrimaryButton, Reveal } from "@/components/ui";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive care designed to optimize every aspect of your health — pulmonary, cardiovascular, sleep, allergy, and preventive medicine.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="gradient-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <nav className="text-sm text-[var(--muted)] mb-6">
            <Link href="/" className="hover:text-[var(--teal-deep)]">
              Home
            </Link>{" "}
            <span className="mx-2">/</span>
            <span className="text-[var(--navy)]">Our Services</span>
          </nav>
          <Eyebrow>Our Services</Eyebrow>
          <h1 className="font-display text-4xl sm:text-5xl text-[var(--navy)] mt-4 tracking-tight max-w-3xl text-balance">
            Comprehensive care designed to optimize every aspect of your
            health.
          </h1>
          <p className="mt-5 text-lg text-[var(--navy-soft)]/85 max-w-2xl">
            True wellness comes from balancing body, mind, emotions, and
            spirit — every piece counts. Explore our specialties.
          </p>
          <div className="mt-7">
            <PrimaryButton href="/contact">Schedule a Consultation</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  href={`/service/${s.slug}`}
                  className="group block h-full rounded-2xl bg-white p-7 border border-[var(--line)] hover:shadow-xl hover:shadow-[var(--navy)]/5 hover:-translate-y-1 transition-all"
                >
                  <div
                    className={`h-32 rounded-xl bg-gradient-to-br ${s.accent} flex items-end p-4`}
                  >
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--navy)]/70">
                      Service · {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <h2 className="mt-5 font-display text-xl text-[var(--navy)] group-hover:text-[var(--teal-deep)] transition-colors">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--navy-soft)]/80">
                    {s.blurb}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--teal-deep)]">
                    See more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[var(--warm-soft)]/40">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Eyebrow>VIP Plans</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--navy)] mt-4 tracking-tight">
            Exclusive VIP Health Plans
          </h2>
          <p className="mt-4 text-[var(--navy-soft)]/85 max-w-2xl mx-auto">
            Discover four comprehensive wellness packages designed to match
            your individual goals — from foundational health screenings to the
            most advanced diagnostics medicine has to offer.
          </p>
          <div className="mt-7">
            <PrimaryButton href="/vip">Learn More</PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
