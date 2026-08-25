"use client";

import { useEffect, useRef, useState } from "react";
import { BlueButton } from "@/components/ui";
import { whyUsStates, STATE_MS, BEAT_MS } from "@/components/home/why-us-states";

/**
 * "why us" — Figma component set 43:3938, six variants.
 *
 * The frames are not six alternative designs; they are one sequence. Puzzle
 * pieces accumulate behind the copy until the final variant resolves into the
 * photograph and offers the consultation. Rendering only the last variant —
 * which is what this section used to do — throws away the argument and keeps
 * only its conclusion.
 *
 * The artwork for each state is a flattened export (text hidden at export time,
 * see the node ids in why-us-states.ts); the copy is real DOM on top, so it
 * stays selectable, translatable and legible to a screen reader.
 */
export function WhyUs() {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const last = whyUsStates.length - 1;

  // Hold until the section is actually on screen, so the sequence is not
  // already finished by the time it is scrolled to.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Deferred rather than set inline: a synchronous setState in an effect
      // body triggers a cascading render.
      const t = setTimeout(() => setStarted(true), 0);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started || index >= last) return;
    // Reduced motion jumps straight to the resolved state: the sequence is
    // decorative, and its whole point is the picture it ends on.
    const reduced =
      typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduced ? 0 : whyUsStates[index].title ? STATE_MS : BEAT_MS;
    const t = setTimeout(
      () => setIndex((i) => (reduced ? last : Math.min(i + 1, last))),
      hold,
    );
    return () => clearTimeout(t);
  }, [started, index, last]);

  const state = whyUsStates[index];

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[560px] w-full flex-col items-center justify-center gap-20 overflow-clip bg-white px-6 py-20 sm:px-14 lg:h-[800px] lg:py-[120px]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {whyUsStates.map((s, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={s.image}
            src={s.image}
            alt=""
            /* The first frame carries the section, so it is eager; the rest are
               fetched while earlier states are still holding. */
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light" />
        {/* The frame keeps the photograph warm and bright, so the scrim stays
            light; legibility comes from a soft shadow on the copy instead. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,32,50,0.18)_0%,rgba(21,32,50,0.46)_50%,rgba(21,32,50,0.18)_100%)]" />
      </div>

      {/* aria-live is deliberately absent: the copy changes on a timer with no
          user action behind it, and announcing each state would talk over the
          rest of the page. The resolved state is the accessible one. */}
      <div className="relative flex flex-col items-center justify-center gap-4 [text-shadow:0_1px_18px_rgba(21,32,50,0.55)]">
        <div className="flex min-h-[168px] flex-col items-center justify-center gap-3 text-center text-white lg:min-h-[196px]">
          {state.eyebrow && <p className="eyebrow !text-white">{state.eyebrow}</p>}
          {state.title && (
            <h2 className="font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px]">
              {state.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          )}
        </div>
        {state.body && (
          <p className="max-w-[640px] text-center text-base leading-6 text-white/80">
            {state.body}
          </p>
        )}
        {/* Reserve the button's height in every state so the copy above it does
            not shift when the final state adds the call to action. */}
        <div className="mt-3 flex min-h-[46px] gap-3">
          {state.cta && (
            <BlueButton href={state.cta.href}>{state.cta.label}</BlueButton>
          )}
        </div>
      </div>
    </section>
  );
}
