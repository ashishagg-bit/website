import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ClosingCta } from "@/components/closing-cta";
import Link from "next/link";
import { Eyebrow, PrimaryButton, Reveal } from "@/components/ui";
import { services, promises } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Dr. Avi Ishaaya",
  description:
    "Dr. Avi Ishaaya is a board-certified physician specializing in pulmonary, sleep, internal, and geriatric medicine — founder of Dr. Avi Ishaaya Centers in Beverly Hills.",
  alternates: { canonical: "/about/" },
};

const credentials = {
  education: [
    "Bachelor of Science (cum laude) — University of California, Los Angeles (UCLA)",
    "Doctor of Medicine — University of Maryland, Baltimore",
    "Internal Medicine Residency — Cedars-Sinai Medical Center, Beverly Hills",
    "Pulmonary, Critical Care and Sleep Fellowship — Cedars-Sinai Medical Center",
  ],
  certifications: [
    "American Board of Internal Medicine",
    "American Board of Pulmonary Medicine",
    "American Board of Sleep Medicine",
    "American Board of Geriatrics",
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A practice built
            <br />
            around you.
          </>
        }
        image="/images/scraped/piPOUcGww89HYaJTpCR7kEFYeLk.webp"
      />

      <section className="py-20 sm:py-28 bg-white border-y border-[var(--hairline)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Eyebrow>About Dr. Ishaaya</Eyebrow>
          <h2 className="font-kalice text-3xl text-[var(--ink)] mt-4 tracking-tight">
            Three decades of comprehensive, preventive care.
          </h2>
          <div className="mt-8 space-y-5 text-[var(--ink)]/85 text-lg leading-relaxed">
            <p>
              Dr. Avi Ishaaya is a board-certified physician specializing in
              pulmonary, sleep, internal, and geriatric medicine. As the
              founder of Dr. Avi Ishaaya Centers in Beverly Hills, he has been
              providing comprehensive and preventive healthcare since 1996.
            </p>
            <p>
              A respected assistant clinical professor at UCLA School of
              Medicine, Dr. Ishaaya is also a speaker, author, researcher, and
              medical-legal expert, with appearances on television programs
              like <em>The Doctors</em>.
            </p>
            <p>
              His holistic approach integrates conventional and functional
              medicine, focusing on treating root causes rather than just
              symptoms. His state-of-the-art center offers advanced diagnostics
              and treatments in cardiovascular wellness, respiratory health,
              sleep medicine, allergy management, and preventive care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <Eyebrow>Education</Eyebrow>
            <h2 className="font-kalice text-3xl text-[var(--ink)] mt-4 tracking-tight">
              Education &amp; Credentials
            </h2>
            <ul className="mt-8 space-y-4">
              {credentials.education.map((e) => (
                <li
                  key={e}
                  className="rounded-2xl border border-[var(--hairline)] bg-white p-5 text-[var(--ink)]"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Certifications</Eyebrow>
            <h2 className="font-kalice text-3xl text-[var(--ink)] mt-4 tracking-tight">
              Board Certifications
            </h2>
            <ul className="mt-8 space-y-4">
              {credentials.certifications.map((c) => (
                <li
                  key={c}
                  className="rounded-2xl border border-[var(--hairline)] bg-white p-5 text-[var(--ink)] flex items-start gap-3"
                >
                  <span className="mt-0.5 text-[var(--blue)]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[var(--sky)]">
              <span className="block w-6 h-px bg-[var(--sky)]" />
              Our Commitment to You
            </div>
            <h2 className="font-kalice text-3xl sm:text-4xl mt-4 tracking-tight">
              Our Five Fundamental Promises
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {promises.map((p) => (
              <div
                key={p.n}
                className="h-full rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-colors"
              >
                <div className="font-kalice text-3xl text-[var(--sky)]">
                  {p.n}
                </div>
                <h3 className="font-kalice text-xl mt-3">{p.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — matches live about page */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-xl">
            <Eyebrow>Our services</Eyebrow>
            <h2 className="font-kalice text-3xl sm:text-4xl text-[var(--ink)] mt-4 tracking-tight">
              Where Every Piece Matters
            </h2>
            <p className="mt-4 text-[var(--ink)]/80">
              True wellness comes from balancing body, mind, emotions, and
              spirit—every piece counts.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  href={`/service/${s.slug}`}
                  className="group block h-full rounded-2xl bg-white p-7 border border-[var(--hairline)] hover:shadow-xl hover:shadow-[var(--ink)]/5 hover:-translate-y-1 transition-all"
                >
                  <div className={`h-32 rounded-xl bg-gradient-to-br ${s.accent} flex items-end p-4 relative overflow-hidden`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      loading="lazy"
                      decoding="async"
                      src={s.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="relative text-xs uppercase tracking-[0.2em] text-white/90">
                      Service · {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <h3 className="mt-5 font-kalice text-xl text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink)]/80 line-clamp-3">
                    {s.blurb}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--blue)]">
                    See more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Teaser — matches live about page */}
      <section className="py-20 sm:py-28 bg-[var(--sky)]/40">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Eyebrow>VIP Plans</Eyebrow>
          <h2 className="font-kalice text-3xl sm:text-4xl text-[var(--ink)] mt-4 tracking-tight">
            Exclusive VIP Health Plans
          </h2>
          <p className="mt-4 text-[var(--ink)]/85 max-w-2xl mx-auto">
            Discover the transformative power of yoga: Strengthen your body &amp; calm your mind.
          </p>
          <div className="mt-7">
            <PrimaryButton href="/vip">Learn More</PrimaryButton>
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
