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
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[var(--blue)]">
      <span className="block w-6 h-px bg-[var(--blue)]" />
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
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--blue)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--blue)] hover:scale-[1.02] shadow-sm ${className}`}
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
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-[var(--ink)]/15 bg-white/60 px-6 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-white ${className}`}
    >
      {children}
    </Link>
  );
}

/* --- Figma "Aviishaaya Dev" primitives (file TdifdqKlRJcGSLC8Kpz1Sz) --- */

/** #3376eb / 8px radius / 20x10 padding / 15px-21px label. */
export function BlueButton({
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
      className={`inline-flex w-fit shrink-0 items-center justify-center rounded-lg bg-[var(--blue)] px-5 py-2.5 text-[15px] leading-[21px] text-white transition-colors hover:bg-[var(--blue-hover)] ${className}`}
    >
      {children}
    </Link>
  );
}

/** Hairline-outlined counterpart to BlueButton. */
export function OutlineButton({
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
      className={`inline-flex w-fit shrink-0 items-center justify-center rounded-lg border border-[var(--hairline)] px-5 py-[9px] text-[15px] leading-[21px] text-[var(--ink)] transition-colors hover:bg-white ${className}`}
    >
      {children}
    </Link>
  );
}

/** 12px / uppercase / 3px tracking label above every section heading. */
export function Kicker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/** Kalice display heading — 56px/68px at desktop, fluid below. */
export function Display({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-kalice text-[clamp(2rem,1.2rem+2.6vw,3.5rem)] leading-[1.21] tracking-[1px] ${className}`}
    >
      {children}
    </h2>
  );
}
