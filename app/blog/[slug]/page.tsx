import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, PrimaryButton } from "@/components/ui";
import { ArchiveCard } from "@/components/blog-card";
import { ClosingCta } from "@/components/closing-cta";
import { getAllPosts, getHeadings, getPost, renderMarkdown } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}/`,
      siteName: "Dr. Avi Ishaaya Wellness Centers",
      locale: "en_US",
      type: "article",
      publishedTime: post.rawDate.toISOString(),
      authors: ["Dr. Avi Ishaaya"],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();
  const html = renderMarkdown(post.body);
  const headings = getHeadings(post.body);
  const shareUrl = encodeURIComponent(`https://aviishaaya.com/blog/${post.slug}/`);
  const shareTitle = encodeURIComponent(post.title);
  const others = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.rawDate.toISOString(),
    author: {
      "@type": "Person",
      name: "Dr. Avi Ishaaya",
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Avi Ishaaya Wellness Centers",
    },
  };

  return (
    <>
      {/* Hero — Figma 2256:33853: 160 under the nav, an 880 measure, and the
          byline 32 above the title. The breadcrumb, the "Article" eyebrow and
          the avatar disc that stood here are not in the frame. */}
      <header className="w-full bg-[var(--cream)] px-6 pt-12 sm:px-14 lg:pt-[67px]">
        <div className="mx-auto flex w-full max-w-[880px] flex-col gap-8">
          <p className="eyebrow text-[var(--ink-60)]">
            {post.author} · {post.date}
          </p>
          <h1 className="font-kalice text-[clamp(2rem,1.3rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px] text-[var(--ink)]">
            {post.title}
          </h1>
        </div>
      </header>

      <article className="w-full bg-[var(--cream)] px-6 py-16 sm:px-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1328px]">
          {/* The frame opens the article on the post's own photograph at
              1328x500. The page showed no image at all. */}
          <div className="relative aspect-[1328/500] w-full overflow-clip rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light"
            />
          </div>

          {/* 360 contents rail beside an 848 measure, 120 apart. */}
          <div className="mt-16 flex flex-col gap-12 lg:mt-20 lg:flex-row lg:gap-[120px]">
            <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:h-fit lg:w-[360px]">
              {headings.length > 0 && (
                <nav aria-label="On this page">
                  <ul className="flex flex-col">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="block py-2 text-base leading-6 text-[var(--ink-60)] transition-colors hover:text-[var(--blue)]"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
              <div className="mt-10 flex flex-col gap-5">
                <p className="eyebrow text-[var(--ink-60)]">share</p>
                <div className="flex flex-wrap items-center gap-4 text-base leading-6">
                  <a
                    className="text-[var(--blue)] transition-colors hover:text-[var(--ink)]"
                    href={`https://x.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X
                  </a>
                  <a
                    className="text-[var(--blue)] transition-colors hover:text-[var(--ink)]"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="text-[var(--blue)] transition-colors hover:text-[var(--ink)]"
                    href={`mailto:?subject=${shareTitle}&body=${shareUrl}`}
                  >
                    Email
                  </a>
                </div>
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              <div
                className="prose-article"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
              />

              <div className="mt-14 rounded-2xl border border-[var(--hairline)] bg-white p-7">
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--blue)]">
                  Next steps
                </div>
                <h3 className="mt-2 font-kalice text-2xl text-[var(--ink)]">
                  Have questions about your health?
                </h3>
                <p className="mt-2 text-[var(--ink)]/85">
                  Our team would be honored to help you build a personalized plan.
                </p>
                <div className="mt-5">
                  <PrimaryButton href="/contact">Request Appointment</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* "Discover our other articles" — Figma 2256:34461. The band is 80
          over and 120 under, a 48/60 heading beside the "View All Articles"
          link, then 40 down to the same 421-wide cards the archive uses. What
          stood here was a bordered card with a gradient block where the
          photograph goes, and no excerpt. */}
      {others.length > 0 && (
        <section className="w-full bg-white px-6 pb-20 pt-12 sm:px-14 lg:pb-[120px] lg:pt-20">
          <div className="mx-auto w-full max-w-[1328px]">
            <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3">
              <h2 className="font-kalice text-[clamp(2rem,1.4rem+2vw,48px)] leading-[1.25] tracking-[1px] text-[var(--ink)]">
                Discover our other articles
              </h2>
              <Link
                href="/blog"
                className="text-base leading-[22px] text-[var(--blue)] transition-colors hover:text-[var(--ink)]"
              >
                View All Articles →
              </Link>
            </div>
            <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {others.slice(0, 3).map((p) => (
                <ArchiveCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The frame closes the post on the standard call to action (2256:35797);
          the page ended on the related articles instead. */}
      <ClosingCta />
    </>
  );
}
