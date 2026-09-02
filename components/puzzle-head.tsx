/**
 * The hero's 3-D puzzle-head artwork — Figma I64:10192;64:10185
 * ("ChatGPT Image Aug 11 2026 2", 830×984 in the frame).
 *
 * The JPEG was exported straight from the Figma file composited on the site's
 * cream (#fcfaf6), so it sits seamlessly on the hero background.
 */
export function PuzzleHead({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/figma/puzzle-head.jpg"
      alt=""
      width={864}
      height={1025}
      className={`object-contain ${className}`}
    />
  );
}
