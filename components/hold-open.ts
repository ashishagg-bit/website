"use client";

import { useState } from "react";

/** Props a row item spreads to claim the open slot on hover or focus. */
type HoldProps = {
  onMouseEnter?: () => void;
  onFocus?: () => void;
  tabIndex?: number;
  "data-open"?: string;
};

/**
 * A row in which the item the cursor last entered stays open.
 *
 * These rows used to open on `:hover`, with a `:not(:hover)` rule closing the
 * frame's default while any sibling was hovered. Leaving the row ran both
 * backwards at once — the item under the cursor collapsed and the default
 * sprang open again — so the row flickered between two items on the way out.
 *
 * Holding the last index entered fixes that: exactly one item is open at any
 * moment, and it stays where the reader left it. `initial` is the item the
 * frame captures open, so the server render and the first client render agree.
 *
 * Items that have nothing to reveal pass `claimable: false` — they never take
 * the slot, so crossing a gap between items leaves the open one alone.
 */
export function useHoldOpen(initial: number) {
  const [openIndex, setOpenIndex] = useState(initial);
  /** Put the row back on the item the frame captures open. Rows that share a
      band (the services bento) call this on every row the cursor is not in. */
  const reset = () => setOpenIndex(initial);

  function hold(
    i: number,
    {
      claimable = true,
      /** Set on items that are already focusable — a link or a button — so
          they are not given a second, redundant tab stop. */
      nativeFocus = false,
    }: { claimable?: boolean; nativeFocus?: boolean } = {}
  ): HoldProps {
    const open = i === openIndex ? { "data-open": "" } : {};
    if (!claimable) return open;
    return {
      onMouseEnter: () => setOpenIndex(i),
      onFocus: () => setOpenIndex(i),
      // Otherwise the item is the control and takes focus itself — the
      // `:focus-within` rules these replaced never fired, as those items hold
      // nothing focusable.
      ...(nativeFocus ? {} : { tabIndex: 0 }),
      ...open,
    };
  }

  return { openIndex, hold, reset };
}
