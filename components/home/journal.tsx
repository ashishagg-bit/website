import Link from "next/link";
import { Display, OutlineButton } from "@/components/ui";
import type { Post } from "@/lib/posts";

/** "Blog" — Figma node 1:2382. Three columns, 500px image over meta + title. */
export function Journal({ posts }: { posts: Post[] }) {
  return (
    <section className="flex w-full flex-col items-center gap-12 overflow-clip bg-white px-6 py-16 sm:px-14 sm:py-[104px] lg:gap-16">
      <header className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center gap-3 text-[var(--ink)]">
          <p className="eyebrow">Blog</p>
          <Display>
            Your guide to
            <br />
            better health.
          </Display>
        </div>
        <OutlineButton href="/blog">Read all articles →</OutlineButton>
      </header>

      <div className="grid w-full max-w-[1328px] gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-6">
            <div className="relative h-[360px] overflow-clip rounded-2xl lg:h-[500px]">
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
            <div className="flex flex-col gap-3 pr-10">
              <p className="text-sm text-[var(--ink-60)]">
                Avi Ishaaya · {post.date}
              </p>
              <h3 className="font-kalice text-2xl leading-8 tracking-[1px] text-[var(--ink)] group-hover:text-[var(--blue)]">
                {post.title}
              </h3>
              <p className="text-base leading-[22px] text-[var(--ink-60)]">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
