import Link from "next/link";
import { Eyebrow, PrimaryButton } from "@/components/ui";

export type ServiceSubItem = { title: string; subtitle: string };

export function ServiceLayout({
  title,
  tagline,
  intro,
  bullets,
  conditions,
  services,
  ctaText = "Schedule Your Evaluation",
  cta,
}: {
  title: string;
  tagline: string;
  intro: React.ReactNode;
  bullets?: string[];
  conditions?: { name: string; details?: { label: string; value: string }[] }[];
  services: ServiceSubItem[];
  ctaText?: string;
  cta?: React.ReactNode;
}) {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <nav className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-6">
            <Link href="/" className="hover:text-[var(--navy)]">Home</Link>
            <span className="mx-2">/</span>
            <span>{title}</span>
          </nav>
          <Eyebrow>Service</Eyebrow>
          <h1 className="font-display text-4xl sm:text-5xl text-[var(--navy)] mt-4 tracking-tight max-w-3xl text-balance">
            {title}
          </h1>
          <p className="mt-5 text-lg text-[var(--navy-soft)]/85 max-w-2xl">{tagline}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mt-4 tracking-tight">
              Comprehensive, calm, and rooted in evidence.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[var(--navy-soft)]/85 leading-relaxed">
            {intro}
            {bullets && bullets.length > 0 && (
              <ul className="grid sm:grid-cols-2 gap-3 mt-6">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-xl bg-white border border-[var(--line)] p-4 text-sm"
                  >
                    <span className="mt-0.5 text-[var(--teal-deep)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {cta}
          </div>
        </div>
      </section>

      {/* Conditions */}
      {conditions && conditions.length > 0 && (
        <section className="py-20 bg-white border-y border-[var(--line)]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Eyebrow>Conditions we treat</Eyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mt-4 tracking-tight">
              Conditions
            </h2>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {conditions.map((c) => (
                <div
                  key={c.name}
                  className="rounded-2xl border border-[var(--line)] p-6 bg-[var(--background)]/40 hover:bg-white transition-colors"
                >
                  <h3 className="font-display text-lg text-[var(--navy)]">{c.name}</h3>
                  {c.details && (
                    <dl className="mt-4 space-y-2 text-sm">
                      {c.details.map((d) => (
                        <div key={d.label} className="flex gap-2">
                          <dt className="text-[var(--teal-deep)] font-medium min-w-[6rem]">
                            {d.label}:
                          </dt>
                          <dd className="text-[var(--navy-soft)]/85">{d.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services / Tests */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Eyebrow>Diagnostics & care</Eyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-4 tracking-tight">
            Our Services
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-[var(--line)] bg-white p-7 hover:shadow-xl hover:shadow-[var(--navy)]/5 transition-shadow"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--teal-deep)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-lg text-[var(--navy)]">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--navy-soft)]/80">{s.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--navy)] tracking-tight">
            {ctaText}
          </h2>
          <p className="mt-4 text-[var(--navy-soft)]/85 max-w-2xl mx-auto">
            Reach out to Dr. Avi Ishaaya Center to schedule a comprehensive
            evaluation. Early intervention can make a significant difference.
          </p>
          <div className="mt-7">
            <PrimaryButton href="/contact">Request Appointment</PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
