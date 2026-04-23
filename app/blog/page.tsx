import { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, insights, and guides from Dr. Avi Ishaaya Wellness Centers — your guide to better health.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [hero, ...rest] = posts;
  return (
    <>
      <section className="gradient-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-20">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="font-display text-4xl sm:text-5xl text-[var(--navy)] mt-4 tracking-tight max-w-3xl text-balance">
            Your guide to better health.
          </h1>
          <p className="mt-5 text-lg text-[var(--navy-soft)]/85 max-w-2xl">
            Practical, evidence-based perspectives on cardiovascular health,
            sleep, breathing, longevity, and the small habits that compound
            into a healthier life.
          </p>
        </div>
      </section>

      {hero && (
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Link
              href={`/blog/${hero.slug}`}
              className="group grid lg:grid-cols-12 gap-8 rounded-3xl border border-[var(--line)] overflow-hidden bg-white hover:shadow-xl hover:shadow-[var(--navy)]/5 transition-shadow"
            >
              <div className={`lg:col-span-6 aspect-[16/10] lg:aspect-auto bg-gradient-to-br ${hero.gradient}`} />
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--teal-deep)]">Featured</div>
                <h2 className="mt-3 font-display text-3xl text-[var(--navy)] group-hover:text-[var(--teal-deep)] transition-colors text-balance">
                  {hero.title}
                </h2>
                <div className="mt-3 text-xs text-[var(--muted)]">
                  Avi Ishaaya · {hero.date}
                </div>
                <p className="mt-5 text-[var(--navy-soft)]/85">{hero.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--teal-deep)]">
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
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)] mb-8">
            All articles
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-2xl border border-[var(--line)] overflow-hidden bg-white hover:shadow-xl hover:shadow-[var(--navy)]/5 transition-all hover:-translate-y-1"
              >
                <div className={`aspect-[16/10] bg-gradient-to-br ${post.gradient}`} />
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
