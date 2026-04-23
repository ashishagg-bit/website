import Link from "next/link";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`fade-in-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[var(--teal-deep)]">
      <span className="block w-6 h-px bg-[var(--teal)]" />
      {children}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[var(--teal-deep)] hover:scale-[1.02] shadow-sm ${className}`}
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white/60 px-6 py-3 text-sm font-medium text-[var(--navy)] transition-colors hover:bg-white ${className}`}
    >
      {children}
    </Link>
  );
}
