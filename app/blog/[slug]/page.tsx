import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, PrimaryButton } from "@/components/ui";
import { getAllPosts, getPost, renderMarkdown } from "@/lib/posts";

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
      <article>
        <header className="gradient-bg">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 pt-14 pb-12 sm:pt-20 sm:pb-16">
            <nav className="text-xs uppercase tracking-[0.18em] text-[var(--ink-60)] mb-6">
              <Link href="/blog" className="hover:text-[var(--ink)]">Blog</Link>
              <span className="mx-2">/</span>
              <span>Article</span>
            </nav>
            <Eyebrow>Article</Eyebrow>
            <h1 className="font-kalice text-3xl sm:text-5xl text-[var(--ink)] mt-4 tracking-tight text-balance">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-3 text-sm text-[var(--ink-60)]">
              <span className="inline-block w-9 h-9 rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--ink)] grid place-items-center text-white font-kalice">
                A
              </span>
              <span>
                <span className="text-[var(--ink)] font-medium">Dr. Avi Ishaaya</span>
                <span className="mx-2">·</span>
                {post.date}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-14">
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
          />

          <div className="mt-14 rounded-2xl border border-[var(--hairline)] bg-white p-7">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--blue)]">Next steps</div>
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
      </article>

      {others.length > 0 && (
        <section className="py-20 bg-white border-t border-[var(--hairline)]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Eyebrow>Articles</Eyebrow>
            <h2 className="font-kalice text-3xl text-[var(--ink)] mt-4 tracking-tight">
              Discover our other articles
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block h-full rounded-2xl border border-[var(--hairline)] overflow-hidden hover:shadow-xl hover:shadow-[var(--ink)]/5 transition-all"
                >
                  <div className={`aspect-[16/10] bg-gradient-to-br ${p.gradient}`} />
                  <div className="p-6">
                    <div className="text-xs text-[var(--ink-60)]">
                      Avi Ishaaya · {p.date}
                    </div>
                    <h3 className="mt-2 font-kalice text-lg text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
