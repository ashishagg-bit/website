import Link from "next/link";
import { services, promises, dimensions } from "@/lib/site-data";
import { Reveal, Eyebrow, PrimaryButton, SecondaryButton } from "@/components/ui";
import { getAllPosts } from "@/lib/posts";
import { NewsScroller } from "@/components/news-scroller";
import { GoogleReviews } from "@/components/google-reviews";
import { PuzzlePiece } from "@/components/puzzle";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-bg overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-32 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Dr. Avi Ishaaya Center</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[var(--navy)] mt-5 text-balance">
                Piece by piece,
                <br />
                build a healthier{" "}
                <span className="italic text-[var(--teal-deep)]">you.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg text-[var(--navy-soft)]/80 max-w-xl">
                Together, we shall piece together your unique path to complete
                wellbeing, honoring every dimension of your health puzzle.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 space-y-2">
                {dimensions.map((d) => (
                  <h6 key={d.title} className="text-xs uppercase tracking-[0.18em] text-[var(--teal-deep)] font-medium">
                    {d.title}
                  </h6>
                ))}
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/contact">Request Appointment</PrimaryButton>
                <SecondaryButton href="#services">Explore Services</SecondaryButton>
              </div>
            </Reveal>

          </div>

          <div className="lg:col-span-5 relative">
            <Reveal delay={120}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[var(--navy)]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/scraped/H7UrHayerIUtTsCZGEBgPaXM.png"
                  alt="Dr. Abraham Avi Ishaaya"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl shadow-[var(--navy)]/10 p-5 max-w-[220px] hidden sm:block">
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--teal-deep)]">30+ years</div>
                <div className="font-display text-lg text-[var(--navy)] mt-1 leading-tight">
                  Independent practice, reimagined
                </div>
              </div>
            </Reveal>
            <PuzzlePiece
              className="absolute -bottom-6 -right-6 w-28 h-28 text-[var(--teal)] hidden sm:block"
              opacity={0.35}
              rotate={18}
            />
          </div>
        </div>
      </section>

      <NewsScroller />

      {/* Services */}
      <section id="services" className="py-20 sm:py-28 bg-gradient-to-b from-white to-[var(--warm-soft)]/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Our services</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl text-[var(--navy)] mt-4 tracking-tight">
                Where every piece matters.
              </h2>
              <p className="mt-4 text-[var(--navy-soft)]/80">
                True wellness comes from balancing body, mind, emotions, and
                spirit—every piece counts.
              </p>
            </div>
            <PrimaryButton href="/contact">Schedule a Consultation</PrimaryButton>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  href={`/service/${s.slug}`}
                  className="group block h-full rounded-2xl bg-white p-7 border border-[var(--line)] hover:shadow-xl hover:shadow-[var(--navy)]/5 hover:-translate-y-1 transition-all"
                >
                  <div className={`h-32 rounded-xl bg-gradient-to-br ${s.accent} flex items-end p-4 relative overflow-hidden`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="relative text-xs uppercase tracking-[0.2em] text-white/90">
                      Service · {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-xl text-[var(--navy)] group-hover:text-[var(--teal-deep)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--navy-soft)]/80 line-clamp-3">
                    {s.blurb}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--teal-deep)]">
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

      {/* About / Doctor */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[var(--navy)]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/scraped/z40GSxCTx1p8Yl8dajpSuGt52I.jpeg"
                  alt="Dr. Abraham Avi Ishaaya"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="font-display text-xl">Dr. Abraham &ldquo;Avi&rdquo; Ishaaya</div>
                  <div className="text-xs tracking-widest uppercase mt-1 text-white/80">
                    M.D., FCCP, FAASM, FACGS, MACGS
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Eyebrow>Meet your physician</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--navy)] mt-4 tracking-tight">
              Meet Dr. Abraham &ldquo;Avi&rdquo; Ishaaya
            </h2>
            <p className="mt-5 text-lg text-[var(--navy-soft)]/85">
              Dr. Ishaaya is a distinguished board-certified physician
              specializing in pulmonary, sleep, internal, and geriatric
              medicine.
            </p>

            <div className="mt-8 space-y-7">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--teal-deep)]">
                  Our Expertise
                </div>
                <p className="mt-2 text-[var(--navy-soft)]/85">
                  Dr. Ishaaya uses cutting-edge diagnostics and innovative
                  treatments to provide personalized, data-driven solutions for
                  long-term wellness. His expertise spans pulmonary,
                  cardiovascular, allergy, and sleep medicine—ensuring precise,
                  science-backed care.
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--teal-deep)]">
                  Our Approach
                </div>
                <p className="mt-2 text-[var(--navy-soft)]/85">
                  With a holistic approach, he integrates functional and
                  traditional medicine to optimize physical health. From
                  preventative screenings to advanced metabolic analysis, his
                  goal is to keep every system in balance and performing at its
                  best.
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--teal-deep)]">
                  Your Wellness
                </div>
                <p className="mt-2 text-[var(--navy-soft)]/85">
                  True wellness goes beyond physical health. Dr. Ishaaya
                  believes in treating the whole person—addressing emotional
                  well-being, reducing stress, and empowering patients to take
                  control of their health journey.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <PrimaryButton href="/contact">Request Appointment</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Five Promises */}
      <section className="py-20 sm:py-28 bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[var(--warm)]">
              <span className="block w-6 h-px bg-[var(--warm)]" />
              Promises
            </div>
            <h2 className="font-display text-3xl sm:text-4xl mt-4 tracking-tight">
              Our Five Fundamental Promises
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {promises.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-colors">
                  <div className="font-display text-3xl text-[var(--warm)]">{p.n}</div>
                  <h3 className="font-display text-xl mt-3">{p.title}</h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Teaser */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-3xl overflow-hidden relative bg-gradient-to-br from-[var(--warm-soft)] via-white to-[var(--warm-soft)]/60 border border-[var(--line)] p-10 sm:p-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow>VIP Plans</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl text-[var(--navy)] mt-4 tracking-tight">
                Exclusive VIP Health Plans
              </h2>
              <p className="mt-4 text-lg italic text-[var(--navy-soft)]/85 max-w-xl">
                &ldquo;Discover the transformative power of yoga: Strengthen your body &amp; calm your mind.&rdquo;
              </p>
              <div className="mt-7">
                <PrimaryButton href="/vip">Learn More</PrimaryButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/scraped/48cUzxZLj1fsBF3sPX6ycI0y0jc.jpg"
                alt="VIP Wellness"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Blog</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl text-[var(--navy)] mt-4 tracking-tight">
                Your guide to better health.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--teal-deep)] hover:text-[var(--navy)]"
            >
              All articles →
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recentPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full rounded-2xl border border-[var(--line)] overflow-hidden hover:shadow-xl hover:shadow-[var(--navy)]/5 transition-all"
                >
                  <div className={`aspect-[16/10] relative overflow-hidden bg-gradient-to-br ${post.gradient}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-[var(--muted)]">
                      Avi Ishaaya · {post.date}
                    </div>
                    <h3 className="mt-2 font-display text-lg text-[var(--navy)] group-hover:text-[var(--teal-deep)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--navy-soft)]/80 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* A New Era of Care */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[var(--warm-soft)]/40 to-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl sm:text-4xl text-[var(--navy)] tracking-tight">
                <strong>A New Era of Care</strong>
              </h2>
              <p className="mt-6 text-lg text-[var(--navy-soft)]/80">
                Relocated in 2024 after 30+ years as an independent practice, our spacious, calming, and beautifully designed space redefines the medical experience—where comfort meets cutting-edge care.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
