import { Metadata } from "next";
import { Space } from "@/components/home/space";
import { Testimonials } from "@/components/home/testimonials";
import { featuredIn, homePromises, testimonials } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "About Dr. Avi Ishaaya",
  description:
    "Dr. Avi Ishaaya is a board-certified physician specializing in pulmonary, sleep, internal, and geriatric medicine — founder of Dr. Avi Ishaaya Centers in Beverly Hills.",
  alternates: { canonical: "/about/" },
};

/** Figma 2147:4900 — the education list read as one block of copy. */
const education = [
  ["Bachelor of Science, cum laude", "University of California, Los Angeles (UCLA)"],
  ["Doctor of Medicine", "University of Maryland, Baltimore"],
  ["Internal Medicine Residency", "Cedars-Sinai Medical Center, Beverly Hills"],
  ["Pulmonary, Critical Care and Sleep Fellowship", "Cedars-Sinai Medical Center"],
];

/** Figma 2147:5159 — a 2×2 hairline grid of board certifications. */
const certifications = [
  "American Board of Internal Medicine",
  "American Board of Pulmonary Medicine",
  "American Board of Sleep Medicine",
  "American Board of Geriatrics",
];

const EDGE = "border-[rgba(255,255,255,0.06)]";

function Check() {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden
      className="mt-0.5 shrink-0 text-[var(--blue)]"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

/**
 * About — Figma node 2147:3799.
 *
 * Cream hero with centred copy over a 1080×600 photograph, the press band, the
 * "Meet Dr. Abraham 'Avi' Ishaaya" measure, the education split, board
 * certifications, the five promises row and the reviews block.
 */
export default function AboutPage() {
  return (
    <>
      {/* Hero — Figma 2147:4086 */}
      <section className="w-full bg-[var(--cream)] px-6 pt-10 sm:px-14 lg:pt-[68px]">
        <div className="mx-auto flex w-full max-w-[1328px] flex-col items-center gap-3 text-center">
          <p className="eyebrow">Dr. Avi Ishaaya Center</p>
          <h1 className="font-kalice text-[clamp(2.25rem,1.3rem+3vw,3.5rem)] leading-[1.21] tracking-[1px] text-[var(--ink)]">
            Medicine rooted in experience.
            <br />
            Care built around you.
          </h1>
        </div>
        <div className="relative mx-auto mt-12 aspect-[1080/600] w-full max-w-[1080px] overflow-clip rounded-2xl lg:mt-[72px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/figma/why-us-bg.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light"
          />
        </div>
      </section>

      {/* Press band — Figma 2147:4118 */}
      <section className="w-full bg-[var(--cream)] px-6 pb-12 pt-10 sm:px-14">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6">
          <p className="eyebrow text-[var(--ink-60)]">
            Featured by top news stations
          </p>
          <ul className="flex w-full flex-wrap items-center justify-between gap-x-10 gap-y-6 lg:h-10 lg:flex-nowrap">
            {featuredIn.map((p) => (
              <li key={p.name} className="flex flex-1 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  decoding="async"
                  src={p.src}
                  alt={p.name}
                  width={p.w}
                  height={p.h}
                  style={{ width: p.w, height: p.h }}
                  className="max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Meet Dr. Abraham "Avi" Ishaaya — Figma 2147:4637 */}
      <section className="w-full bg-[var(--cream)] px-6 py-16 sm:px-14 lg:py-[120px]">
        <div className="mx-auto flex w-full max-w-[868px] flex-col items-center text-center">
          {/* 14px here, not the 12px eyebrow used elsewhere — 2256:29562 sets
              this one larger and puts 24 under it. */}
          <p className="eyebrow !text-sm">
            Meet Dr. Abraham &ldquo;Avi&rdquo; Ishaaya
          </p>
          <h2 className="mt-6 font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px] text-[var(--ink)]">
            Three decades of
            <br />
            comprehensive, preventive care.
          </h2>
          {/* The frame sets this measure at 20px, and its four paragraphs
              read differently from what stood here — "Wellness Centers" rather
              than "Centers", "has provided" rather than "has been providing",
              and a fourth paragraph on the diagnostics that was missing
              altogether. At 16px the block came out 135 short of the frame. */}
          <div className="mt-12 flex flex-col gap-6 text-left text-xl leading-[1.24] text-[var(--ink-80)] lg:mt-20">
            <p>
              Dr. Avi Ishaaya is a board-certified physician specializing in
              pulmonary, sleep, internal, and geriatric medicine. As the founder
              of Dr. Avi Ishaaya Wellness Centers in Beverly Hills, he has
              provided comprehensive and preventive healthcare since 1996.
            </p>
            <p>
              Alongside his clinical practice, Dr. Ishaaya has served as an
              assistant clinical professor at the UCLA School of Medicine. He is
              also a speaker, author, researcher, and medical-legal expert, and
              has appeared on television programs including{" "}
              <em>The Doctors</em>.
            </p>
            <p>
              His approach to medicine is holistic and rooted in understanding
              the whole patient. By bringing conventional and functional
              medicine together, Dr. Ishaaya looks beyond treating symptoms
              alone to identify and address the underlying factors affecting
              your health.
            </p>
            <p>
              At the Wellness Centers, this philosophy comes to life through
              advanced diagnostics and personalized care across cardiovascular
              wellness, respiratory health, sleep medicine, allergy management,
              and preventive medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Education split — Figma 2147:4652 */}
      <section className="flex w-full flex-col overflow-clip bg-[var(--cream)] lg:flex-row">
        <div className="flex w-full flex-col items-start px-6 py-16 sm:px-14 lg:h-[827px] lg:w-1/2 lg:justify-start lg:py-[120px] lg:pl-24 lg:pr-12">
          <div className="flex w-full max-w-[528px] flex-col items-start">
            <p className="eyebrow">Education and Credentials</p>
            <h2 className="mt-7 font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px] text-[var(--ink)]">
              Dr. Ishaaya&rsquo;s medical training includes
            </h2>
            <ul className="mt-12 flex flex-col gap-7 lg:mt-20">
              {education.map(([degree, school]) => (
                <li key={degree} className="text-xl leading-[1.24]">
                  <span className="block text-[var(--ink)]">{degree}</span>
                  <span className="block text-[var(--ink-60)]">{school}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative h-[420px] w-full shrink-0 overflow-clip lg:h-[827px] lg:w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            decoding="async"
            src="/images/scraped/piPOUcGww89HYaJTpCR7kEFYeLk.webp"
            alt="Dr. Avi Ishaaya"
            className="absolute inset-0 size-full object-cover object-top"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light"
          />
        </div>
      </section>

      {/* Board certifications — Figma 2147:4906 */}
      <section className="w-full bg-white px-6 py-16 sm:px-14 lg:py-[104px]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="eyebrow">Board Certifications</p>
          <h2 className="mt-3 font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px] text-[var(--ink)]">
            Dr. Ishaaya is
            <br />
            board-certified by
          </h2>
          <ul className="mt-12 grid w-full max-w-[1000px] overflow-clip rounded-2xl border border-[var(--hairline)] sm:grid-cols-2">
            {certifications.map((c, i) => (
              <li
                key={c}
                className={`flex items-center gap-3 px-10 py-10 text-left text-lg leading-6 text-[var(--ink)] ${
                  i % 2 === 0 ? "sm:border-r" : ""
                } ${i < 2 ? "border-b" : ""} border-[var(--hairline)]`}
              >
                <Check />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-12 text-lg leading-6 text-[var(--ink-60)]">
            M.D., FCCP, FAASM, FACGS, MACGS
          </p>
        </div>
      </section>

      {/* Five promises — Figma 2147:5175 */}
      <section className="flex w-full flex-col items-center gap-12 overflow-clip bg-[var(--ink)] px-6 py-16 sm:px-14 lg:gap-20 lg:py-[104px]">
        <header className="flex w-full max-w-[700px] flex-col items-center gap-6 text-center text-white">
          <div className="flex flex-col items-center gap-3">
            <p className="eyebrow !text-white">Our Commitment to You</p>
            <h2 className="font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px]">
              Five promises at
              <br />
              the heart of our care
            </h2>
          </div>
          <p className="text-lg leading-[1.24] text-white/80">
            Great healthcare isn&rsquo;t only about having the right expertise.
            It&rsquo;s about how you&rsquo;re treated throughout the entire
            experience. At Dr. Avi Ishaaya Wellness Centers, these five
            principles guide the way we care for every patient.
          </p>
        </header>

        <div
          className={`tabrow flex w-full max-w-[1328px] flex-col overflow-clip rounded-2xl border lg:flex-row ${EDGE}`}
        >
          {homePromises.map((p, i) => (
            <div
              key={p.n}
              {...(i === 0 ? { "data-open": "" } : {})}
              className={`tab promise relative flex flex-col items-start justify-between overflow-clip p-8 lg:h-[440px] ${
                i < homePromises.length - 1
                  ? `border-b lg:border-b-0 lg:border-r ${EDGE}`
                  : ""
              }`}
            >
              <div
                aria-hidden
                className="promise-grain on-open pointer-events-none absolute inset-0"
              />
              <p className="promise-num relative font-kalice text-2xl leading-8 tracking-[1px]">
                {p.n}
              </p>
              <h3 className="promise-title relative w-full pt-4 font-kalice tracking-[1px] text-white">
                {p.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              {p.body && (
                <p className="promise-body relative max-w-[420px] text-base leading-6 text-white/80">
                  {p.body}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Reviews — Figma 2147:6511 */}
      <Testimonials
        items={[testimonials[0], testimonials[1], testimonials[4]]}
      />

      {/* About closes on "OUr space" (2256:31992), not the generic call to
          action — the frame is byte-for-byte the homepage's own 1083 band,
          down to the 671px photo header and the locations row. The closing
          CTA that stood here is 453 and appears nowhere on this page's frame. */}
      <Space />
    </>
  );
}
