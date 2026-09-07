"use client";

import { useState } from "react";
import { Display, Kicker } from "@/components/ui";

/**
 * "Have Questions?" — Figma 2417:3815 (the layer is named for a moodboard; the
 * band is the page's FAQs).
 *
 * An 800 column of rows divided by hairlines, each 18/24 with its answer in
 * --ink-60 beneath. The frame rests with the first question open and marks it
 * with a minus where the others carry a plus, so exactly one is open at a time
 * and opening another closes it.
 *
 * Click rather than hover: the frame draws a control, and an answer that
 * vanished when the pointer left would be unreadable on the way to it.
 */
export function Faqs({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="flex w-full flex-col items-center gap-12 overflow-clip bg-white px-6 py-16 sm:px-14 sm:py-[104px] lg:gap-20">
      <header className="flex flex-col items-center gap-4 text-center">
        <Kicker>{eyebrow}</Kicker>
        <Display className="text-[var(--ink)]">{title}</Display>
      </header>

      <ul className="flex w-full max-w-[800px] flex-col">
        {items.map((it, i) => {
          const on = i === open;
          return (
            <li
              key={it.q}
              className="border-t border-[rgba(21,32,50,0.12)] first:border-t-0"
            >
              <button
                type="button"
                aria-expanded={on}
                onClick={() => setOpen(on ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-lg leading-6 text-[var(--ink)]">{it.q}</span>
                {/* One bar, plus a second rotated to make the cross — the open
                    row keeps only the bar, which is the frame's minus. */}
                <span aria-hidden className="relative size-[18px] shrink-0">
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--ink)]" />
                  <span
                    className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--ink)] transition-transform duration-300 ${
                      on ? "rotate-0" : "rotate-90"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  on ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-base leading-6 text-[var(--ink-60)]">
                  {it.a}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
