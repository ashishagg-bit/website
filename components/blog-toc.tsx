"use client";

import { useEffect, useState } from "react";

/**
 * The contents rail on a post — Figma 2256:34412.
 *
 * The frame draws the row the reader is in with a rule down its left edge and
 * the text in full ink; the others sit in --ink-60 with no rule. Rows are 46
 * tall (12 / 22 / 12) and the text is inset 24, which is where the rule goes.
 *
 * Which row that is has to follow the reading position, so the rail observes
 * the headings rather than marking the first one and leaving it there. The
 * top quarter of the viewport is the reference line: a heading counts as
 * current once it crosses it, and stays current until the next one does, so
 * the mark moves with the reader rather than with whatever is merely on
 * screen. Before the first heading reaches it, the first row is current.
 */
export function BlogToc({
  headings,
}: {
  headings: { id: string; text: string }[];
}) {
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (headings.length === 0) return;
    const nodes = headings
      .map((h) => document.getElementById(h.id))
      .filter((n): n is HTMLElement => n !== null);
    if (nodes.length === 0) return;

    function update() {
      const line = window.innerHeight * 0.25;
      let current = nodes[0];
      for (const n of nodes) {
        if (n.getBoundingClientRect().top <= line) current = n;
        else break;
      }
      setActive(current.id);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page">
      <ul className="flex flex-col">
        {headings.map((h) => {
          const on = h.id === active;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                aria-current={on ? "true" : undefined}
                className={`block border-l-2 py-3 pl-[22px] text-base leading-[22px] transition-colors ${
                  on
                    ? "border-[var(--ink)] font-medium text-[var(--ink)]"
                    : "border-transparent text-[var(--ink-60)] hover:text-[var(--blue)]"
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
