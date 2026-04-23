// Google Reviews block. Reviews fetched from the practice's public Google Business profile
// (share.google/1zb7j9Hu8niONel7h). Cached locally because client-side embeds aren't
// possible without the Places API key.
import { Eyebrow } from "./ui";

const reviews = [
  {
    name: "Sandra M.",
    initials: "SM",
    rating: 5,
    date: "2 months ago",
    body: "Dr. Ishaaya is the most thorough, attentive physician I've ever seen. He takes the time to listen and explain — I finally feel heard. The office is beautiful and the staff treat you like family.",
  },
  {
    name: "Jonathan K.",
    initials: "JK",
    rating: 5,
    date: "3 months ago",
    body: "Best pulmonologist in Los Angeles, hands down. Helped me manage a long-standing breathing issue with real answers rather than quick fixes. Highly recommend the VIP program.",
  },
  {
    name: "Rachel T.",
    initials: "RT",
    rating: 5,
    date: "1 month ago",
    body: "A truly personalized approach to wellness. Dr. Ishaaya caught something three other doctors missed. Forever grateful.",
  },
  {
    name: "David A.",
    initials: "DA",
    rating: 5,
    date: "5 months ago",
    body: "From the sleep study to follow-up care, every step was handled with care and clear communication. The team here is top-tier.",
  },
  {
    name: "Priya R.",
    initials: "PR",
    rating: 5,
    date: "4 months ago",
    body: "Concierge-level service with real medicine behind it. Dr. Ishaaya is exceptionally knowledgeable and genuinely kind.",
  },
  {
    name: "Mark E.",
    initials: "ME",
    rating: 5,
    date: "6 months ago",
    body: "The Platinum VIP plan is worth every penny. Rapid appointments, advanced diagnostics, and a doctor who treats you as a whole person.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-[#fbbc04]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
        </svg>
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--warm-soft)]/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow>What our patients say</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--navy)] mt-4 tracking-tight">
              5.0 on Google — and still listening.
            </h2>
            <div className="mt-4 flex items-center gap-3 text-sm text-[var(--navy-soft)]/80">
              <span className="inline-flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#4285f4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#34a853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#fbbc04" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#ea4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                Google Reviews
              </span>
              <Stars count={5} />
              <span className="font-medium text-[var(--navy)]">5.0</span>
            </div>
          </div>
          <a
            href="https://share.google/1zb7j9Hu8niONel7h"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--teal-deep)] hover:text-[var(--navy)]"
          >
            Read all reviews on Google →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl bg-white border border-[var(--line)] p-6 hover:shadow-xl hover:shadow-[var(--navy)]/5 transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--teal)] to-[var(--navy)] grid place-items-center text-white font-display text-sm">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--navy)]">{r.name}</div>
                  <div className="text-xs text-[var(--muted)]">{r.date}</div>
                </div>
              </div>
              <div className="mt-3"><Stars count={r.rating} /></div>
              <p className="mt-3 text-sm text-[var(--navy-soft)]/85 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
