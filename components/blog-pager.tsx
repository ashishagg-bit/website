import Link from "next/link";

/** Archive cards per page — the frame lays "All Articles" out as three rows of three. */
export const POSTS_PER_PAGE = 9;

/**
 * Blog archive pager — Figma 2256:32717.
 *
 * 196x32: a chevron, a 16-gap row of 32x32 cells, a chevron, 24 between the
 * three. The current page's cell is filled with --blue at a tenth and sets its
 * digit in --ink; the others are --ink-60 on nothing. The frame draws the left
 * chevron at 0.12 alpha because it rests on page 1 — that is the disabled
 * state, not the resting colour, so it belongs to whichever end you are at.
 *
 * Pages are links rather than state: each one is a real URL, so the archive
 * stays linkable and crawlable and works with no JavaScript. The frame mocks
 * three pages; this renders as many as the client's posts come to.
 */
function Chev({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      width="10"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

function href(n: number) {
  return n === 1 ? "/blog/" : `/blog/?page=${n}`;
}

function Arrow({
  dir,
  to,
  pages,
}: {
  dir: "left" | "right";
  to: number;
  pages: number;
}) {
  const label = dir === "left" ? "Previous page" : "Next page";
  if (to < 1 || to > pages) {
    return (
      <span
        aria-disabled
        aria-label={label}
        className="flex text-[rgba(21,32,50,0.12)]"
      >
        <Chev dir={dir} />
      </span>
    );
  }
  return (
    <Link
      href={href(to)}
      aria-label={label}
      className="flex text-[var(--ink-60)] transition-colors hover:text-[var(--ink)]"
    >
      <Chev dir={dir} />
    </Link>
  );
}

export function BlogPager({ page, pages }: { page: number; pages: number }) {
  if (pages <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-16 flex items-center justify-center gap-6 lg:mt-20"
    >
      <Arrow dir="left" to={page - 1} pages={pages} />

      <div className="flex items-center gap-4">
        {Array.from({ length: pages }, (_, i) => i + 1).map((n) => {
          const here = n === page;
          return (
            <Link
              key={n}
              href={href(n)}
              aria-current={here ? "page" : undefined}
              className={`flex size-8 items-center justify-center rounded-lg text-[15px] uppercase tracking-[3px] transition-colors ${
                here
                  ? "bg-[rgba(51,118,235,0.1)] text-[var(--ink)]"
                  : "text-[var(--ink-60)] hover:text-[var(--ink)]"
              }`}
            >
              {/* The 3px tracking is the frame's, and it lands entirely after
                  the digit; pulling it back keeps the digit on the cell's
                  centre rather than 3px right of it. */}
              <span className="-mr-[3px]">{n}</span>
            </Link>
          );
        })}
      </div>

      <Arrow dir="right" to={page + 1} pages={pages} />
    </nav>
  );
}
