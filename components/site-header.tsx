"use client";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/site-data";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Our Services", hasDropdown: true },
  { href: "/vip", label: "VIP" },
  { href: "/blog", label: "Blog" },
];

const vipTiers = [
  { slug: "bronze", name: "Bronze" },
  { slug: "silver", name: "Silver" },
  { slug: "gold", name: "Gold" },
  { slug: "platinum", name: "Platinum" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--background)]/85 border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/scraped/U0UsntSPmAe3llDpejljKb08Ps.svg"
            alt="Dr. Avi Ishaaya Center"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-display text-base sm:text-lg leading-tight text-[var(--navy)]">
            <span className="block tracking-tight">Dr. Avi Ishaaya</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Wellness Centers
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) =>
            n.hasDropdown ? (
              <div key={n.href} className="relative group">
                <Link
                  href={n.href}
                  className="text-sm text-[var(--navy-soft)] hover:text-[var(--teal-deep)] transition-colors inline-flex items-center gap-1"
                >
                  {n.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    className="group-hover:rotate-180 transition-transform"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 z-40">
                  <div className="rounded-2xl bg-white shadow-xl shadow-[var(--navy)]/10 border border-[var(--line)] p-3">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/service/${s.slug}`}
                        className="block px-3 py-2 rounded-lg text-sm text-[var(--navy)] hover:bg-[var(--warm-soft)]/50 hover:text-[var(--teal-deep)] transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                    <div className="mt-1 border-t border-[var(--line)] pt-2">
                      <Link
                        href="/services"
                        className="block px-3 py-2 rounded-lg text-xs uppercase tracking-[0.18em] text-[var(--teal-deep)] hover:bg-[var(--warm-soft)]/50 transition-colors"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : n.href === "/vip" ? (
              <div key={n.href} className="relative group">
                <Link
                  href={n.href}
                  className="text-sm text-[var(--navy-soft)] hover:text-[var(--teal-deep)] transition-colors inline-flex items-center gap-1"
                >
                  {n.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    className="group-hover:rotate-180 transition-transform"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56 z-40">
                  <div className="rounded-2xl bg-white shadow-xl shadow-[var(--navy)]/10 border border-[var(--line)] p-3">
                    {vipTiers.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/vip/${t.slug}`}
                        className="block px-3 py-2 rounded-lg text-sm text-[var(--navy)] hover:bg-[var(--warm-soft)]/50 hover:text-[var(--teal-deep)] transition-colors"
                      >
                        {t.name} Package
                      </Link>
                    ))}
                    <div className="mt-1 border-t border-[var(--line)] pt-2">
                      <Link
                        href="/vip"
                        className="block px-3 py-2 rounded-lg text-xs uppercase tracking-[0.18em] text-[var(--teal-deep)] hover:bg-[var(--warm-soft)]/50 transition-colors"
                      >
                        Compare all tiers →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-[var(--navy-soft)] hover:text-[var(--teal-deep)] transition-colors"
              >
                {n.label}
              </Link>
            )
          )}
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
