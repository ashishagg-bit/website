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
