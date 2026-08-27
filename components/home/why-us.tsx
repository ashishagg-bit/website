"use client";

import { useEffect, useRef, useState } from "react";
import { BlueButton } from "@/components/ui";
import { whyUsStates, STATE_MS, BEAT_MS } from "@/components/home/why-us-states";
import {
  LEFT_MASK_PATH,
  RIGHT_MASK_PATH,
  PUZZLE_STOPS,
  PUZZLE_W,
  PUZZLE_H,
} from "@/components/home/why-us-puzzle";

/**
 * "why us" — Figma component set 2256:26220, six variants.
 *
 * The frames are not six alternative designs; they are one sequence. Two
 * puzzle-shaped halves slide in from the left and right edges, and the
 * photograph closes behind the copy until the final state offers the
 * consultation. Rendering only the last variant throws away the argument and
 * keeps only its conclusion.
 *
 * Built from the two mask vectors rather than six flattened JPEGs: the Figma
 * variants all share the same two paths and differ only in their x offset (see
 * why-us-puzzle.ts), so the whole sequence is one photograph plus ~10KB of path
 * data, resolution-independent, instead of ~4MB of rasters pinned to 1440x800.
 *
 * The copy is real DOM on top of the artwork, so it stays selectable,
 * translatable and legible to a screen reader.
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
  const stop = PUZZLE_STOPS[index];
  /* Only the resolved state sits on a full-bleed photograph, so only it needs
     white copy over a scrim. States 1-4 are dark type on white, with the
     puzzle halves still out at the edges. */
  const onPhoto = index === last;
  const slide = "transform 900ms cubic-bezier(0.65, 0, 0.35, 1)";

  /* The clip travels with its half while the photograph is pushed back by the
     same amount, so the picture stays registered to the frame and only the
     revealed area changes. */
  const half = (path: string, dx: number, id: string) => (
    <g style={{ transform: `translateX(${dx}px)`, transition: slide }}>
      <clipPath id={id}>
        <path d={path} />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <image
          href="/images/figma/why-us-bg.jpg"
          x={0}
          y={0}
          width={PUZZLE_W}
          height={PUZZLE_H}
          preserveAspectRatio="xMidYMid slice"
          style={{ transform: `translateX(${-dx}px)`, transition: slide }}
        />
      </g>
    </g>
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[560px] w-full flex-col items-center justify-center overflow-clip bg-white px-6 py-20 sm:px-14 lg:h-[800px] lg:py-[120px]"
    >
      <svg
        aria-hidden
        viewBox={`0 0 ${PUZZLE_W} ${PUZZLE_H}`}
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 size-full"
      >
        {half(LEFT_MASK_PATH, stop.left, "why-us-clip-left")}
        {half(RIGHT_MASK_PATH, stop.right, "why-us-clip-right")}
      </svg>

      {/* The resolved frame is not the closed puzzle — it is the whole
          photograph. In Figma every state carries the same five frame fills and
          toggles their visibility: states 1-5 show only the white, and 2256:27521
          turns on the image, the warm wash and the darkening gradient together.
          So the last state fades a full-bleed photograph over the halves, which
          is what closes the two seams and the gaps the masks leave behind.

          Values are read off that frame: #FEB55B at 20% soft-light, then
          #152032 multiplied at 40% through a five-stop ramp that peaks behind
          the copy and falls to nothing at both edges. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 isolate transition-opacity duration-700 ease-out ${
          onPhoto ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/figma/why-us-bg.jpg"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(254,181,91,0.2)] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,32,50,0)_0%,rgba(21,32,50,0.5)_25%,rgba(21,32,50,1)_50%,rgba(21,32,50,0.5)_75%,rgba(21,32,50,0)_100%)] opacity-40 mix-blend-multiply" />
      </div>

      {/* aria-live is deliberately absent: the copy changes on a timer with no
          user action behind it, and announcing each state would talk over the
          rest of the page. The resolved state is the accessible one. */}
      <div
        className={`relative flex flex-col items-center justify-center gap-4 transition-colors duration-500 ${
          onPhoto
            ? "text-white [text-shadow:0_1px_18px_rgba(21,32,50,0.55)]"
            : "text-[var(--ink)]"
        }`}
      >
        <div className="flex min-h-[168px] flex-col items-center justify-center gap-3 text-center lg:min-h-[196px]">
          {state.eyebrow && (
            <p className={`eyebrow ${onPhoto ? "!text-white" : ""}`}>
              {state.eyebrow}
            </p>
          )}
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
          <p
            className={`max-w-[640px] text-center text-base leading-6 ${
              onPhoto ? "text-white/80" : "text-[var(--ink)]/70"
            }`}
          >
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
