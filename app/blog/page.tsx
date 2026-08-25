import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ClosingCta } from "@/components/closing-cta";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, insights, and guides from Dr. Avi Ishaaya Wellness Centers — your guide to better health.",
  alternates: { canonical: "/blog/" },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [hero, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Your guide to
            <br />
            better health.
          </>
        }
        body="Practical, evidence-based perspectives on cardiovascular health, sleep, breathing, longevity, and the small habits that compound into a healthier life."
        cta={null}
        image="/images/scraped/24gjnpcrXVmldIyVSCnUuDXc.jpg"
      />

      {hero && (
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Link
              href={`/blog/${hero.slug}`}
              className="group grid lg:grid-cols-12 gap-8 rounded-3xl border border-[var(--hairline)] overflow-hidden bg-white hover:shadow-xl hover:shadow-[var(--ink)]/5 transition-shadow"
            >
              <div className={`relative lg:col-span-6 aspect-[16/10] lg:aspect-auto bg-gradient-to-br ${hero.gradient} overflow-hidden`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src={hero.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--blue)]">Featured</div>
                <h2 className="mt-3 font-kalice text-3xl text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors text-balance">
                  {hero.title}
                </h2>
                <div className="mt-3 text-xs text-[var(--ink-60)]">
                  Avi Ishaaya · {hero.date}
                </div>
                <p className="mt-5 text-[var(--ink)]/85">{hero.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--blue)]">
                  Read article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="py-10 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--ink-60)] mb-8">
            All articles
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-2xl border border-[var(--hairline)] overflow-hidden bg-white hover:shadow-xl hover:shadow-[var(--ink)]/5 transition-all hover:-translate-y-1"
              >
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" decoding="async" src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-[var(--ink-60)]">
                    Avi Ishaaya · {post.date}
                  </div>
                  <h3 className="mt-2 font-kalice text-lg text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink)]/80 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
