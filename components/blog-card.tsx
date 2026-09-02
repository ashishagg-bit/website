import Link from "next/link";
import type { Post } from "@/lib/posts";

/**
 * Blog cards — Figma 2256:32368 (archive) and 2256:34461 (the related band on
 * a post). Both pages draw the same 421-wide card, so it lives here rather
 * than being written twice: the post page had its own version built on a
 * gradient placeholder instead of the post's photograph.
 *
 * Every caption is clamped because the frame fixes the card heights — 474 for
 * the archive card, 672 for the featured one. Left to the copy, a single long
 * excerpt runs a line over and drags its whole row with it.
 */

/** Featured pair card — Figma 2256:32368, 632 wide over a 500px image. */
export function FeaturedCard({ post }: { post: Post }) {
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
      <h2 className="mt-4 line-clamp-2 font-kalice text-2xl leading-8 tracking-[1px] text-[var(--ink)] group-hover:text-[var(--blue)]">
        {post.title}
      </h2>
      <p className="mt-3 line-clamp-2 text-base leading-[22px] text-[var(--ink-60)]">
        {post.excerpt}
      </p>
    </Link>
  );
}

/** Archive card — 421 wide over a 300px image, 474 tall. */
export function ArchiveCard({ post }: { post: Post }) {
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
      <h3 className="mt-4 line-clamp-2 font-kalice text-lg leading-[22px] tracking-[1px] text-[var(--ink)] group-hover:text-[var(--blue)]">
        {post.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-base leading-[22px] text-[var(--ink-60)]">
        {post.excerpt}
      </p>
    </Link>
  );
}
