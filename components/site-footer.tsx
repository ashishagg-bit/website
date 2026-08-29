import Link from "next/link";
import { BlueButton } from "@/components/ui";

const explore = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Our Services" },
  { href: "/vip", label: "VIP" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col items-start justify-center gap-5 text-sm">
      <p className="leading-[21px] text-white">{title}</p>
      {children}
    </div>
  );
}

/** Footer — Figma node 1:2696 ("Footer - Desktop"). */
export function SiteFooter() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-14 overflow-clip bg-[var(--dark)] px-6 pb-10 pt-20 sm:px-[60px]">
      <div className="flex w-full max-w-[1320px] flex-col items-start justify-between gap-12 lg:h-[248px] lg:flex-row lg:gap-12">
        <div className="flex w-full shrink-0 flex-col items-start justify-between gap-8 pt-[5px] lg:h-full lg:w-[421px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            decoding="async"
            src="/images/logo-wordmark.svg"
            alt="Dr. Avi Ishaaya Centers"
            width={332}
            height={60}
            className="h-[60px] w-[332px] max-w-full object-contain object-left brightness-0 invert"
          />
          <div className="flex w-full flex-col items-start gap-6">
            <p className="text-base leading-[22px] text-white/80">
              Piece by piece, build a healthier you. A modern Beverly Hills
              practice rooted in science and compassion.
            </p>
            <BlueButton href="/contact">Schedule a Consultation</BlueButton>
          </div>
        </div>

        {/* Three columns, not four: Visit and Open Hours stack together */}
        <div className="grid w-full flex-1 grid-cols-2 items-start gap-8 sm:grid-cols-3 lg:gap-12">
          <Column title="Explore">
            <ul className="flex flex-col items-start justify-center gap-[7px] text-white/60">
              {explore.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="leading-[21px] transition-colors hover:text-white">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>

          <div className="flex min-w-0 flex-col items-start gap-6 text-sm">
            <Column title="Visit">
              <address className="not-italic leading-[21px] text-white/60">
                9230 West Olympic Boulevard, Second Floor
                <br />
                Beverly Hills, CA 90212
              </address>
            </Column>
            <Column title="Open Hours">
              <p className="leading-[21px] text-white/60">
                Mon / Tue / Thu / Fri · 8:00 AM – 5:00 PM
                <br />
                Wed · 10:00 AM – 5:00 PM
              </p>
            </Column>
          </div>

          <Column title="Reach Us">
            <ul className="flex flex-col gap-[7px] leading-[21px] text-white/60">
              <li>
                <a href="tel:+13239541788" className="transition-colors hover:text-white">
                  Call: (323) 954-1788
                </a>
              </li>
              <li>
                <a href="sms:+13239184258" className="transition-colors hover:text-white">
                  Text: (323) 918-4258
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aviishaaya.com"
                  className="transition-colors hover:text-white"
                >
                  Email: info@aviishaaya.com
                </a>
              </li>
            </ul>
          </Column>
        </div>
      </div>

      <div className="flex w-full max-w-[1320px] flex-col items-center justify-between gap-3 border-t border-white/10 pt-[29px] text-xs leading-[18px] text-white/60 sm:flex-row">
        <p>© {new Date().getFullYear()} Dr. Avi Ishaaya Centers. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/privacy-policy" className="transition-colors hover:text-white">
            Terms of Use
          </Link>
          <span>Beverly Hills · California</span>
        </div>
      </div>
    </footer>
  );
}
