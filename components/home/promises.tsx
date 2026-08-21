"use client";
import { useState } from "react";
import { Display, Kicker } from "@/components/ui";
import { homePromises } from "@/lib/home-content";

const EDGE = "border-[rgba(255,255,255,0.06)]";

/**
 * "Our values" — Figma node 1:1498.
 *
 * Same interaction as the services bento: five tabs sharing one open slot.
 * The open one widens, turns blue and reveals its body copy — the state the
 * frame captured on promise 01, which is also the row's resting default.
 */
export function Promises() {
  const [open, setOpen] = useState(0);

  return (
    <section className="flex w-full flex-col items-center gap-12 overflow-clip bg-[var(--ink)] px-6 py-16 sm:px-14 sm:py-[104px] lg:gap-20">
      <header className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center text-white">
        <Kicker className="!text-white">Our values</Kicker>
        <Display>
          Our Five
          <br />
          Fundamental Promises
        </Display>
      </header>

      <div
        className={`flex w-full max-w-[1328px] flex-col overflow-clip rounded-2xl border lg:flex-row ${EDGE}`}
        onMouseLeave={() => setOpen(0)}
      >
        {homePromises.map((p, i) => {
          const isOpen = open === i;
          return (
            <div
              key={p.n}
              onMouseEnter={() => setOpen(i)}
              className={`relative flex min-w-0 flex-col items-start justify-between overflow-clip p-8 transition-[flex-grow,background-color] duration-500 ease-out lg:h-[440px] ${
                isOpen ? "bg-[var(--blue)] lg:grow-[2.6]" : "lg:grow"
              } ${
                i < homePromises.length - 1
                  ? `border-b lg:border-b-0 lg:border-r ${EDGE}`
                  : ""
              }`}
              style={{ flexBasis: 0 }}
            >
              {isOpen && (
                <div
                  aria-hidden
                  className="puzzle-wash pointer-events-none absolute inset-0 opacity-30"
                />
              )}

              <p
                className={`relative font-kalice text-2xl leading-8 tracking-[1px] transition-colors duration-500 ${
                  isOpen ? "text-white/70" : "text-white/40"
                }`}
              >
                {p.n}
              </p>

              <div className="relative flex w-full flex-col gap-4">
                <h3
                  className={`font-kalice tracking-[1px] text-white transition-all duration-500 ${
                    isOpen
                      ? "text-[clamp(1.75rem,1.2rem+1.4vw,40px)] leading-[1.2]"
                      : "text-2xl leading-8"
                  }`}
                >
                  {p.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                {p.body && (
                  <p
                    className={`max-w-[420px] text-base leading-6 text-white/80 transition-all duration-500 ${
                      isOpen
                        ? "max-h-48 opacity-100"
                        : "max-h-0 overflow-hidden opacity-0"
                    }`}
                  >
                    {p.body}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
