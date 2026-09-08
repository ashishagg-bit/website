// Decorative puzzle piece shapes for the "piece by piece" theme.
// Pure SVG — no external assets required.
export function PuzzlePiece({
  className = "",
  color = "currentColor",
  opacity = 0.12,
  rotate = 0,
}: {
  className?: string;
  color?: string;
  opacity?: number;
  rotate?: number;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden
    >
      <path
        fill={color}
        fillOpacity={opacity}
        d="M20 20h30a8 8 0 0 1 0 16v0a8 8 0 0 0 0 16h40V28a8 8 0 0 0-8-8H60a8 8 0 0 1-16 0v0H20v34a8 8 0 0 0 16 0v0a8 8 0 0 1 0 16v0a8 8 0 0 0-16 0v30h30a8 8 0 0 1 16 0v0a8 8 0 0 0 16 0v0a8 8 0 0 1 8-8h20V76a8 8 0 0 0-8-8v0a8 8 0 0 1-8-8v0a8 8 0 0 1 8-8h8V28"
      />
    </svg>
  );
}

export function PuzzleBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <PuzzlePiece
        className="absolute -top-6 -right-10 w-56 h-56 text-[var(--teal)]"
        opacity={0.08}
        rotate={12}
      />
      <PuzzlePiece
        className="absolute bottom-10 -left-8 w-48 h-48 text-[var(--navy)]"
        opacity={0.06}
        rotate={-18}
      />
    </div>
  );
}

/**
 * A puzzle tile as the mineral page's "How it works" band draws it
 * (2512:39545): a rounded square with a round knob on top and one on the
 * right, blue at the knob fading to the band's navy at the foot. `flip`
 * mirrors it so the side knob points left.
 *
 * `id` keys the gradient — two tiles on one page must not share a gradient id.
 */
export function PuzzleTile({
  id,
  className = "",
  flip = false,
}: {
  id: string;
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 130 120"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden
    >
      <defs>
        <linearGradient id={`puzzle-${id}`} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor="#3d7cec" />
          <stop offset="0.55" stopColor="#2a56b8" />
          <stop offset="1" stopColor="#1a2f55" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#puzzle-${id})`}
        d="M20 38q0-8 8-8h22c0-6-4-10-4-15a14 14 0 0 1 28 0c0 5-4 9-4 15h22q8 0 8 8v12c6 0 10-4 14-4a14 14 0 0 1 0 28c-4 0-8-4-14-4v32q0 8-8 8H28q-8 0-8-8z"
      />
    </svg>
  );
}
