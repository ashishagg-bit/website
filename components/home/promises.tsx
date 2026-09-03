import { PromiseRow } from "@/components/promise-row";
import { Display, Kicker } from "@/components/ui";

/**
 * "Our values" — Figma node 1:1498.
 *
 * The row itself is PromiseRow, which About renders too: the open card widens,
 * turns blue, enlarges its heading and reveals its body (the `.tabrow` /
 * `.promise` rules in globals.css). Promise 01 is the card the row rests on,
 * which is the state the frame captured.
 */
export function Promises() {
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

      <PromiseRow />
    </section>
  );
}
