import { Metadata } from "next";
import { Eyebrow, PrimaryButton, Reveal } from "@/components/ui";
import { promises } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Dr. Avi Ishaaya",
  description:
    "Dr. Avi Ishaaya is a board-certified physician specializing in pulmonary, sleep, internal, and geriatric medicine — founder of Dr. Avi Ishaaya Centers in Beverly Hills.",
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
      <section className="gradient-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>About</Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl text-[var(--navy)] mt-4 tracking-tight text-balance">
              Meet Dr. Abraham &ldquo;Avi&rdquo; Ishaaya
            </h1>
            <p className="mt-5 text-lg text-[var(--navy-soft)]/85 max-w-2xl">
              Board-certified in pulmonary, sleep, internal, and geriatric
              medicine, with three decades of independent practice in Beverly
              Hills.
            </p>
            <div className="mt-7">
              <PrimaryButton href="/contact">Request Appointment</PrimaryButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[var(--navy)]/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--warm)] via-[var(--warm-soft)] to-white" />
                <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_70%_30%,rgba(13,36,54,0.15),transparent_60%)]" />
                <div className="absolute bottom-6 left-6 text-[var(--navy)]">
                  <div className="font-display text-xl">
                    Dr. Abraham &ldquo;Avi&rdquo; Ishaaya
                  </div>
                  <div className="text-xs tracking-widest uppercase mt-1 text-[var(--navy-soft)]">
                    M.D., FCCP, FAASM, FACGS, MACGS
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white border-y border-[var(--line)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Eyebrow>About Dr. Ishaaya</Eyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-4 tracking-tight">
            Three decades of comprehensive, preventive care.
          </h2>
          <div className="mt-8 space-y-5 text-[var(--navy-soft)]/85 text-lg leading-relaxed">
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
            <h2 className="font-display text-3xl text-[var(--navy)] mt-4 tracking-tight">
              Education &amp; Credentials
            </h2>
            <ul className="mt-8 space-y-4">
              {credentials.education.map((e) => (
                <li
                  key={e}
                  className="rounded-2xl border border-[var(--line)] bg-white p-5 text-[var(--navy)]"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Certifications</Eyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mt-4 tracking-tight">
              Board Certifications
            </h2>
            <ul className="mt-8 space-y-4">
              {credentials.certifications.map((c) => (
                <li
                  key={c}
                  className="rounded-2xl border border-[var(--line)] bg-white p-5 text-[var(--navy)] flex items-start gap-3"
                >
                  <span className="mt-0.5 text-[var(--teal-deep)]">
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

      <section className="py-20 sm:py-28 bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[var(--warm)]">
              <span className="block w-6 h-px bg-[var(--warm)]" />
              Our Commitment to You
            </div>
            <h2 className="font-display text-3xl sm:text-4xl mt-4 tracking-tight">
              Our Five Fundamental Promises
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {promises.map((p) => (
              <div
                key={p.n}
                className="h-full rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-colors"
              >
                <div className="font-display text-3xl text-[var(--warm)]">
                  {p.n}
                </div>
                <h3 className="font-display text-xl mt-3">{p.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
