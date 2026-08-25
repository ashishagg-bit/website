import { Display, OutlineButton } from "@/components/ui";
import { testimonials } from "@/lib/home-content";

/** Google mark — Figma node 1:78. */
function GoogleMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden className="shrink-0">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 1.9-1.6 4.9-4.5 6.8l6.9 5.4c4.1-3.8 6.6-9.4 6.6-15.5z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.700L4.4 32.5C8 39.6 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.5 27.8c-.5-1.4-.8-2.8-.8-4.3s.3-3 .7-4.3l-7.1-5.5C2.8 16.6 2 20.2 2 23.5s.8 6.9 2.3 9.8l7.2-5.5z" />
      <path fill="#EA4335" d="M24 10.2c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4 29.9 2 24 2 15.4 2 8 8.4 4.4 14.5l7.1 5.5C13.3 14 18.2 10.2 24 10.2z" />
    </svg>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-[15px] text-[#ffcf82] ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.9 6.2 6.6.9-4.8 4.7 1.2 6.7L12 17.3 6.1 20.5l1.2-6.7L2.5 9.1l6.6-.9L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/** Reviewer photo. The frame uses portrait avatars; these are the nearest
    available images until the design's own are exported. */
function Avatar({ src, name }: { src: string; name: string }) {
  return (
    <span className="size-14 shrink-0 overflow-hidden rounded-full bg-[var(--sky)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img loading="lazy" decoding="async" src={src} alt={name} className="size-full object-cover" />
    </span>
  );
}

function Card({
  quote,
  name,
  when,
  image,
  avatar,
}: {
  quote: string;
  name: string;
  when: string;
  image?: string;
  avatar: string;
}) {
  return (
    <figure className="flex w-full break-inside-avoid flex-col overflow-clip rounded-2xl bg-white">
      {image && (
        <div className="relative h-[300px] w-full overflow-clip rounded-t-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async" src={image} alt="" className="absolute inset-0 size-full object-cover" />
          <div
            aria-hidden
            className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light"
          />
        </div>
      )}
      <div className="flex flex-col gap-10 p-8">
        <div className="flex flex-col gap-4">
          <Stars />
          <blockquote className="font-kalice text-xl leading-[1.4] tracking-[1px] text-[var(--ink)]">
            {quote}
          </blockquote>
        </div>
        <figcaption className="flex items-center gap-3">
          <div className="flex flex-1 flex-col gap-1 text-lg">
            <span className="text-[var(--ink)]">{name}</span>
            <span className="text-sm text-[var(--ink-60)]">{when}</span>
          </div>
          <Avatar src={avatar} name={name} />
        </figcaption>
      </div>
    </figure>
  );
}

/** "What our patients say" — Figma node 1:2040 (and 103:29525 on inner pages). */
export function Testimonials({ items = testimonials }: { items?: typeof testimonials } = {}) {
  return (
    <section className="flex w-full flex-col items-center gap-12 overflow-clip bg-[linear-gradient(180deg,#ffffff_0%,var(--cream)_32.667%)] px-6 py-16 sm:px-14 sm:py-[104px] lg:gap-16">
      <header className="flex w-full max-w-[700px] flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-3 text-[var(--ink)]">
          <p className="eyebrow">What our patients say</p>
          <Display>
            5.0 on Google,
            <br />
            and still listening.
          </Display>
        </div>
        <div className="flex items-center justify-center gap-3">
          <GoogleMark />
          <span className="text-base text-[var(--ink-80)]">Google Reviews</span>
          <Stars />
          <span className="font-kalice text-lg text-[var(--ink)]">5.0</span>
        </div>
        <OutlineButton href="https://share.google/1zb7j9Hu8niONel7h">
          Read all reviews on Google →
        </OutlineButton>
      </header>

      <div className="w-full max-w-[1328px] columns-1 gap-2 sm:columns-2 lg:columns-3 [&>figure]:mb-2">
        {items.map((t) => (
          <Card key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
