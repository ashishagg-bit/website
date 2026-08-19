import { Display, OutlineButton } from "@/components/ui";
import { testimonials } from "@/lib/home-content";

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

/** Initial-avatar stand-in — the design uses photo avatars we can't export. */
function Avatar({ name }: { name: string }) {
  return (
    <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--sky)] font-kalice text-lg text-[var(--ink)]">
      {name.charAt(0)}
    </span>
  );
}

function Card({
  quote,
  name,
  when,
  image,
}: {
  quote: string;
  name: string;
  when: string;
  image?: string;
}) {
  return (
    <figure className="flex w-full break-inside-avoid flex-col overflow-clip rounded-2xl bg-white">
      {image && (
        <div className="relative h-[300px] w-full overflow-clip rounded-t-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
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
        <figcaption className="flex items-center gap-1.5">
          <Avatar name={name} />
          <div className="flex flex-1 flex-col gap-1.5 pl-2 text-lg">
            <span className="text-[var(--ink)]">{name}</span>
            <span className="text-sm text-[var(--ink-60)]">{when}</span>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

/** "What our patients say" — Figma node 1:2040. */
export function Testimonials() {
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
          <span className="text-base text-[var(--ink-80)]">Google Reviews</span>
          <Stars />
          <span className="font-kalice text-lg text-[var(--ink)]">5.0</span>
        </div>
        <OutlineButton href="https://share.google/1zb7j9Hu8niONel7h">
          Read all reviews on Google →
        </OutlineButton>
      </header>

      <div className="w-full max-w-[1328px] columns-1 gap-2 sm:columns-2 lg:columns-3 [&>figure]:mb-2">
        {testimonials.map((t) => (
          <Card key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
