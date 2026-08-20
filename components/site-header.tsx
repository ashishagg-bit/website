"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { services } from "@/lib/site-data";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Our Services", hasDropdown: true },
  { href: "/vip", label: "VIP", hasDropdown: true },
  { href: "/blog", label: "Blog" },
];

const vipTiers = [
  { slug: "bronze", name: "Bronze" },
  { slug: "silver", name: "Silver" },
  { slug: "gold", name: "Gold" },
  { slug: "platinum", name: "Platinum" },
];

/**
 * Routes whose hero is the dark photographic PageHero — there the nav sits on
 * top of the image in white. Everything else keeps the cream bar.
 * Add routes here as their Figma pages get built.
 */
const OVERLAY_ROUTES = [
  "/services",
  "/service/lungs",
  "/service/cardiovascular",
  "/service/sleep",
  "/service/allergy-sensitivity",
  "/service/wellness-preventive-medicine",
];

/** 4px dot flanking the announcement copy (Figma I64:10192;57:9479 / 9481). */
function Dot() {
  return <span className="size-1 shrink-0 rounded-full bg-white/70" />;
}

function Chevron() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      className="transition-transform group-hover:rotate-180"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Dropdown({
  items,
  footer,
}: {
  items: { href: string; label: string }[];
  footer: { href: string; label: string };
}) {
  return (
    <div className="invisible absolute left-1/2 top-full z-40 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
      <div className="rounded-2xl border border-[var(--hairline)] bg-white p-3 shadow-xl shadow-[var(--ink)]/10">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="block rounded-lg px-3 py-2 text-[15px] leading-[21px] text-[var(--ink)] transition-colors hover:bg-[var(--cream)] hover:text-[var(--blue)]"
          >
            {i.label}
          </Link>
        ))}
        <div className="mt-1 border-t border-[var(--hairline)] pt-2">
          <Link
            href={footer.href}
            className="eyebrow block rounded-lg px-3 py-2 !text-[11px] text-[var(--blue)] transition-colors hover:bg-[var(--cream)]"
          >
            {footer.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overlay = OVERLAY_ROUTES.includes(pathname);

  const linkColor = overlay
    ? "text-white hover:text-white/70"
    : "text-[var(--ink)] hover:text-[var(--blue)]";

  return (
    <header className="relative z-50">
      {/* Announcement bar — Figma I64:10192;57:9476 (#e5cdf8, 48px inline pad,
          12px top / 36px bottom with the hero pulling 24px back over it). */}
      <div className="relative -mb-6 flex items-center justify-center gap-4 overflow-clip bg-[var(--lilac)] px-12 pb-9 pt-3">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_180%_at_50%_120%,#8b5cf6_0%,#a78bfa_35%,transparent_70%)] opacity-70"
        />
        <Dot />
        <p className="relative text-center font-[var(--font-manrope)] text-sm font-medium leading-[1.2] tracking-[-0.14px] text-white">
          Health is something you participate in, choose, and cultivate. The
          healing has always been possible. We help you find the path at The
          Healing Dawn.
        </p>
        <Dot />
      </div>

      {/* Nav — Figma I64:10192;57:9726 */}
      <div
        className={
          overlay
            ? "relative z-[2] -mb-[92px] h-[92px] bg-transparent"
            : "relative z-[2] rounded-t-3xl bg-[var(--cream)]"
        }
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 sm:px-14">
          <Link href="/" className="flex w-[190px] shrink-0 items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-wordmark.svg"
              alt="Dr. Avi Ishaaya Center"
              width={155}
              height={28}
              className={`h-7 w-[155px] object-contain object-left ${
                overlay ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          <nav className="hidden items-end md:flex">
            {nav.map((n) =>
              n.hasDropdown ? (
                <div key={n.href} className="group relative">
                  <Link
                    href={n.href}
                    className={`flex items-baseline justify-center gap-2 rounded-[3px] px-5 py-3 text-[15px] leading-[21px] transition-colors ${linkColor}`}
                  >
                    {n.label}
                    <Chevron />
                  </Link>
                  {n.href === "/services" ? (
                    <Dropdown
                      items={services.map((s) => ({
                        href: `/service/${s.slug}`,
                        label: s.title,
                      }))}
                      footer={{ href: "/services", label: "View all services →" }}
                    />
                  ) : (
                    <Dropdown
                      items={vipTiers.map((t) => ({
                        href: `/vip/${t.slug}`,
                        label: `${t.name} Package`,
                      }))}
                      footer={{ href: "/vip", label: "Compare all tiers →" }}
                    />
                  )}
                </div>
              ) : (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`flex items-baseline justify-center rounded-[3px] px-5 py-3 text-[15px] leading-[21px] transition-colors ${linkColor}`}
                >
                  {n.label}
                </Link>
              )
            )}
          </nav>

          <Link
            href="/contact"
            className="hidden shrink-0 items-center justify-center rounded-lg bg-[var(--blue)] px-5 py-2.5 text-[15px] leading-[21px] text-white transition-colors hover:bg-[var(--blue-hover)] md:flex"
          >
            Schedule a Consultation
          </Link>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`md:hidden ${overlay ? "text-white" : "text-[var(--ink)]"}`}
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
          <div className="border-t border-[var(--hairline)] bg-[var(--cream)] md:hidden">
            <div className="flex flex-col gap-4 px-6 py-5">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-base text-[var(--ink)]"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-lg bg-[var(--blue)] px-4 py-3 text-center text-[15px] text-white"
                onClick={() => setOpen(false)}
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
