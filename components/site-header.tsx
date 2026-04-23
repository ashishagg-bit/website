"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Our Services" },
  { href: "/vip", label: "VIP" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--background)]/85 border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="inline-block w-9 h-9 rounded-full bg-gradient-to-br from-[var(--teal)] to-[var(--navy)] grid place-items-center text-white font-display text-lg shadow-sm group-hover:shadow-md transition-shadow">
            A
          </span>
          <span className="font-display text-base sm:text-lg leading-tight text-[var(--navy)]">
            <span className="block tracking-tight">Dr. Avi Ishaaya</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Wellness Centers
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-[var(--navy-soft)] hover:text-[var(--teal-deep)] transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-medium px-4 py-2 rounded-full bg-[var(--navy)] text-white hover:bg-[var(--teal-deep)] transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-[var(--navy)]"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--line)] bg-[var(--background)]">
          <div className="px-6 py-5 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-base text-[var(--navy)]"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-center mt-2 text-sm font-medium px-4 py-3 rounded-full bg-[var(--navy)] text-white"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
