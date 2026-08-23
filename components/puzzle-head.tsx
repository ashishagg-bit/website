/**
 * Hero artwork — a head in profile assembled from puzzle pieces
 * (Figma I64:10192;64:10185, "ChatGPT Image Aug 11 2026 2").
 *
 * PLACEHOLDER. The original is a rendered 3-D illustration that cannot be
 * exported from this environment, so this is a flat SVG interpretation of the
 * same idea: the profile silhouette filled with the design's blues, cut into
 * six pieces by cream-coloured seams with puzzle tabs.
 *
 * Replace with the exported asset when it lands in public/images/figma/.
 */
export function PuzzleHead({ className = "" }: { className?: string }) {
  const seam = "var(--cream)";

  return (
    <svg
      viewBox="0 0 600 620"
      className={className}
      role="img"
      aria-label="A head in profile assembled from puzzle pieces"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="ph-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dbe6fb" />
          <stop offset="1" stopColor="#9fb8ea" />
        </linearGradient>
        <linearGradient id="ph-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8ba6e0" />
          <stop offset="1" stopColor="#c3d3f4" />
        </linearGradient>
        <clipPath id="ph-head">
          {/* Profile facing left: crown, brow, nose, lips, chin, jaw, back of head */}
          <path
            d="M318 34
               C206 34 120 118 112 232
               C110 264 104 280 96 296
               C86 316 72 332 80 348
               C92 372 58 378 54 390
               C48 406 82 408 86 424
               C90 442 70 452 80 470
               C92 492 128 512 162 522
               C214 538 268 546 330 546
               C440 546 528 466 528 318
               C528 168 438 34 318 34 Z"
          />
        </clipPath>
      </defs>

      <g clipPath="url(#ph-head)">
        {/* Four quadrants, alternating light and mid blue */}
        <rect x="0" y="0" width="300" height="300" fill="url(#ph-a)" />
        <rect x="300" y="0" width="300" height="300" fill="url(#ph-b)" />
        <rect x="0" y="300" width="300" height="330" fill="url(#ph-b)" opacity="0.85" />
        <rect x="300" y="300" width="300" height="330" fill="url(#ph-a)" />

        {/* Seams: vertical spine and two horizontals, each with a puzzle tab */}
        <g stroke={seam} strokeWidth="16" fill="none" strokeLinecap="round">
          <path d="M300 0 V150" />
          <circle cx="300" cy="182" r="30" fill={seam} stroke="none" />
          <path d="M300 214 V330" />
          <circle cx="300" cy="362" r="26" fill="none" strokeWidth="16" />
          <path d="M300 394 V620" />

          <path d="M0 250 H170" />
          <circle cx="205" cy="250" r="28" fill={seam} stroke="none" />
          <path d="M240 250 H600" />

          <path d="M0 430 H130" />
          <circle cx="165" cy="430" r="26" fill="none" strokeWidth="16" />
          <path d="M200 430 H600" />
        </g>

        {/* Soft interior shading so the flat fills read as dimensional */}
        <radialGradient id="ph-shade" cx="0.3" cy="0.3" r="0.85">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#5b7ec4" stopOpacity="0.28" />
        </radialGradient>
        <rect x="0" y="0" width="600" height="620" fill="url(#ph-shade)" />
      </g>
    </svg>
  );
}
