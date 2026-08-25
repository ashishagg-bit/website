import { Metadata } from "next";
import { ClosingCta } from "@/components/closing-cta";
import Link from "next/link";
import { getAllPosts, type Post } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, insights, and guides from Dr. Avi Ishaaya Wellness Centers — your guide to better health.",
  alternates: { canonical: "/blog/" },
};

/**
 * Blog Archive — Figma node 2147:9804.
 *
 * Cream hero with centred copy (no photograph), a two-up featured pair split by
 * a hairline rule, then the "All Blogs" 3-column grid.
 */

/** Featured pair card — Figma 2147:10362 (632 wide, 500px image). */
function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col">
      <div className="relative aspect-[632/500] w-full overflow-clip rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light"
        />
      </div>
      <p className="eyebrow mt-6 text-[var(--ink-60)]">
        {post.author} · {post.date}
      </p>
      <h2 className="mt-4 font-kalice text-[26px] leading-8 tracking-[1px] text-[var(--ink)] group-hover:text-[var(--blue)]">
        {post.title}
      </h2>
      <p className="mt-3 text-base leading-[22px] text-[var(--ink-60)]">
        {post.excerpt}
      </p>
    </Link>
  );
}

/** Archive card — Figma 2147:10394 (421 wide, 300px image). */
function ArchiveCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col">
      <div className="relative aspect-[421/300] w-full overflow-clip rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          loading="lazy"
          decoding="async"
          src={post.image}
          alt=""
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light"
        />
      </div>
      <p className="eyebrow mt-6 text-[var(--ink-60)]">
        {post.author} · {post.date}
      </p>
      <h3 className="mt-4 font-kalice text-lg leading-[22px] tracking-[1px] text-[var(--ink)] group-hover:text-[var(--blue)]">
        {post.title}
      </h3>
      <p className="mt-3 text-[15px] leading-[22px] text-[var(--ink-60)]">
        {post.excerpt}
      </p>
    </Link>
  );
}

export default function BlogIndex() {
  const posts = getAllPosts();
  const featured = posts.slice(0, 2);
  const rest = posts.slice(2);

  return (
    <>
      {/* Hero — Figma 2147:9813. Cream, centred, 540px measure, no CTA. */}
      <section className="w-full bg-[var(--cream)] px-6 pt-10 sm:px-14 lg:pt-[68px]">
        <div className="mx-auto flex w-full max-w-[540px] flex-col items-center gap-3 text-center">
          <p className="eyebrow">Dr. Avi Ishaaya Center</p>
          <h1 className="font-kalice text-[clamp(2.25rem,1.3rem+3vw,3.5rem)] leading-[1.21] tracking-[1px] text-[var(--ink)]">
            Your guide to
            <br />
            better health.
          </h1>
          <p className="text-base leading-6 text-[var(--ink-80)]">
            Practical, evidence-based perspectives on cardiovascular health,
            sleep, breathing, longevity, and the small habits that compound into
            a healthier life.
          </p>
        </div>
      </section>

      {/* Featured pair — Figma 2147:10361. */}
      <section className="w-full bg-[var(--cream)] px-6 pt-16 sm:px-14 lg:pt-[104px]">
        <div className="mx-auto w-full max-w-[1328px]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] lg:gap-8">
            {featured[0] && <FeaturedCard post={featured[0]} />}
            <div
              aria-hidden
              className="hidden w-px bg-[var(--hairline)] lg:block"
            />
            {featured[1] && <FeaturedCard post={featured[1]} />}
          </div>
          <hr className="mt-16 border-0 border-t border-[var(--hairline)] lg:mt-20" />
        </div>
      </section>

      {/* All Blogs — Figma 2147:10388. */}
      <section className="w-full bg-[var(--cream)] px-6 pb-16 pt-16 sm:px-14 lg:pb-[104px] lg:pt-20">
        <div className="mx-auto w-full max-w-[1328px]">
          <h2 className="font-kalice text-[clamp(1.75rem,1.2rem+1.4vw,36px)] leading-[44px] tracking-[1px] text-[var(--ink)]">
            All Blogs
          </h2>
          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-[84px] lg:grid-cols-3 lg:gap-y-20">
            {rest.map((post) => (
              <ArchiveCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
