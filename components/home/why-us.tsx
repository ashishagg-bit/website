"use client";

import { useEffect, useRef, useState } from "react";
import { BlueButton } from "@/components/ui";
import { whyUsStates } from "@/components/home/why-us-states";
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
 * puzzle-shaped halves slide in from the left and right edges until the
 * photograph closes behind the copy and the last state offers the consultation.
 *
 * The sequence is driven by scroll, not by a timer. The section pins to the
 * viewport while a tall track scrolls behind it, so the reader advances the
 * puzzle themselves and can hold, reverse or re-read any state — a timer plays
 * the argument at its own pace and finishes whether or not anyone is looking.
 *
 * Between stops the halves are interpolated rather than stepped, so scrolling
 * closes the picture continuously; only the copy switches discretely, at the
 * state boundaries.
 *
 * Built from the two mask vectors rather than six flattened JPEGs: the Figma
 * variants all share the same two paths and differ only in their x offset (see
 * why-us-puzzle.ts), so the whole sequence is one photograph plus ~10KB of path
 * data, resolution-independent, instead of ~4MB of rasters pinned to 1440x800.
 */

/** Viewport-heights of scroll given to each state. */
const VH_PER_STATE = 80;

const clamp = (v: number, lo: number, hi: number) =>
  v < lo ? lo : v > hi ? hi : v;

export function WhyUs() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<SVGGElement | null>(null);
  const rightRef = useRef<SVGGElement | null>(null);
  const leftImgRef = useRef<SVGImageElement | null>(null);
  const rightImgRef = useRef<SVGImageElement | null>(null);
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const last = whyUsStates.length - 1;

  /** The clip travels with its half while the photograph is pushed back by the
      same amount, so the picture stays registered to the frame and only the
      revealed area changes. Written straight to the nodes: this runs every
      scroll frame, and routing it through state would re-render the section. */
  function write(lx: number, rx: number) {
    if (leftRef.current) leftRef.current.style.transform = `translateX(${lx}px)`;
    if (leftImgRef.current)
      leftImgRef.current.style.transform = `translateX(${-lx}px)`;
    if (rightRef.current) rightRef.current.style.transform = `translateX(${rx}px)`;
    if (rightImgRef.current)
      rightImgRef.current.style.transform = `translateX(${-rx}px)`;
  }

  useEffect(() => {
    const mq =
      typeof matchMedia === "function"
        ? matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    if (!mq) return;
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    // Reduced motion gets the resolved state outright: the sequence is
    // decorative, and its whole point is the picture it ends on.
    if (reduced) {
      const s = PUZZLE_STOPS[last];
      write(s.left, s.right);
      return;
    }

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const track = trackRef.current;
        if (!track) return;
        const span = track.offsetHeight - window.innerHeight;
        const p = span > 0 ? clamp(-track.getBoundingClientRect().top / span, 0, 1) : 0;

        // p maps across the whole sequence; `i` is the state the reader is in
        // and `t` how far through it, so the halves interpolate between stops
        // instead of jumping.
        //
        // Scaled by the number of states, not the number of gaps between them:
        // over `last` the final state exists only at exactly p === 1, so the
        // closing copy and its call to action were unreachable — a pixel of
        // rounding at the bottom of the track left the reader on state 5.
        const raw = p * whyUsStates.length;
        const i = clamp(Math.floor(raw), 0, last);
        const t = clamp(raw - i, 0, 1);
        const a = PUZZLE_STOPS[i];
        const b = PUZZLE_STOPS[Math.min(i + 1, last)];
        write(a.left + (b.left - a.left) * t, a.right + (b.right - a.right) * t);

        // The copy belongs to the state being entered, so it swaps at the
        // boundary rather than trailing a frame behind the artwork.
        setIndex((prev) => (prev === i ? prev : i));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced, last]);

  // Derived rather than pushed into state from the effect: with reduced motion
  // the sequence never runs, so the resolved state is simply what it renders.
  const activeIndex = reduced ? last : index;
  const state = whyUsStates[activeIndex];
  const onPhoto = activeIndex === last;
  const initial = PUZZLE_STOPS[0];

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ height: reduced ? undefined : `${VH_PER_STATE * last + 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-clip">
        <section className="relative flex h-[560px] w-full flex-col items-center justify-center overflow-clip bg-white px-6 py-20 sm:px-14 lg:h-[800px] lg:py-[120px]">
          <svg
            aria-hidden
            viewBox={`0 0 ${PUZZLE_W} ${PUZZLE_H}`}
            preserveAspectRatio="xMidYMid slice"
            className="pointer-events-none absolute inset-0 size-full"
          >
            <clipPath id="why-us-clip-left">
              <path d={LEFT_MASK_PATH} />
            </clipPath>
            <clipPath id="why-us-clip-right">
              <path d={RIGHT_MASK_PATH} />
            </clipPath>
            <g
              ref={leftRef}
              style={{ transform: `translateX(${initial.left}px)` }}
            >
              <g clipPath="url(#why-us-clip-left)">
                <image
                  ref={leftImgRef}
                  href="/images/figma/why-us-bg.jpg"
                  x={0}
                  y={0}
                  width={PUZZLE_W}
                  height={PUZZLE_H}
                  preserveAspectRatio="xMidYMid slice"
                  style={{ transform: `translateX(${-initial.left}px)` }}
                />
              </g>
            </g>
            <g
              ref={rightRef}
              style={{ transform: `translateX(${initial.right}px)` }}
            >
              <g clipPath="url(#why-us-clip-right)">
                <image
                  ref={rightImgRef}
                  href="/images/figma/why-us-bg.jpg"
                  x={0}
                  y={0}
                  width={PUZZLE_W}
                  height={PUZZLE_H}
                  preserveAspectRatio="xMidYMid slice"
                  style={{ transform: `translateX(${-initial.right}px)` }}
                />
              </g>
            </g>
          </svg>

          {/* The resolved frame is not the closed puzzle — it is the whole
              photograph. In Figma every state carries the same five frame fills
              and toggles their visibility: states 1-5 show only the white, and
              2256:27521 turns on the image, the warm wash and the darkening
              gradient together. So the last state fades a full-bleed photograph
              over the halves, which is what closes the two seams and the gaps
              the masks leave behind.

              Values are read off that frame: #FEB55B at 20% soft-light, then
              #152032 multiplied at 40% through a five-stop ramp that peaks
              behind the copy and falls to nothing at both edges. */}
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-0 isolate transition-opacity duration-500 ease-out ${
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

          {/* aria-live is deliberately absent: the copy changes as the reader
              scrolls, with no action of theirs behind each swap, and announcing
              every state would talk over the rest of the page. The resolved
              state is the accessible one. */}
          <div
            className={`relative flex flex-col items-center justify-center gap-4 transition-colors duration-300 ${
              onPhoto
                ? "text-white [text-shadow:0_1px_18px_rgba(21,32,50,0.55)]"
                : "text-[var(--ink)]"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-3 text-center">
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
            {/* A direct flex child rather than a wrapper: the wrapper this
                replaces reserved a 46px row to stop the copy shifting, but
                `align-items` defaults to stretch, so it pulled the 41px button
                to 46px — and its extra top margin pushed the button 28px under
                the body where Figma 2256:27521 has 16px. */}
            {state.cta && (
              <BlueButton href={state.cta.href}>{state.cta.label}</BlueButton>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
