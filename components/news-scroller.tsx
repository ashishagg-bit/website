"use client";

// Scrolling news logos — identified from live aviishaaya.com source
// GvtDLxvwOJOqPMwawZ6usD3HKI.png — KTLA 5
// cFStQ1uEOkji0fRLj2kITdio8.png — AP
// QYg26Pkjz5fl7F3NtDgC2tfcHI.png, EqPfWsy8GBZ9gCHKxsGknNBC4.png — NBC / ABC / CBS / FOX variants
// W4optMJPWsWdjm1MfvkxkDZfbTo.png, X6Q9Fku6UjVOyp3RS4rD9AvrV94.png, nqURNzs20HvgenymK7OYntyYmic.png
const logos = [
  "/images/scraped/X6Q9Fku6UjVOyp3RS4rD9AvrV94.png",
  "/images/scraped/W4optMJPWsWdjm1MfvkxkDZfbTo.png",
  "/images/scraped/GvtDLxvwOJOqPMwawZ6usD3HKI.png",
  "/images/scraped/EqPfWsy8GBZ9gCHKxsGknNBC4.png",
  "/images/scraped/cFStQ1uEOkji0fRLj2kITdio8.png",
  "/images/scraped/QYg26Pkjz5fl7F3NtDgC2tfcHI.png",
  "/images/scraped/nqURNzs20HvgenymK7OYntyYmic.png",
];

export function NewsScroller() {
  const doubled = [...logos, ...logos];
  return (
    <section className="bg-[var(--blue)] py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center text-xs uppercase tracking-[0.25em] text-white/70 mb-5">
          Featured by top news stations
        </div>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-16 animate-scroll items-center">
            {doubled.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                loading="lazy"
                decoding="async"
                key={i}
                src={src}
                alt=""
                className="h-10 sm:h-12 w-auto opacity-85 shrink-0"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        :global(.animate-scroll) {
          animation: scroll 35s linear infinite;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.animate-scroll) {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
