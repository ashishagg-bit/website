import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--navy)] text-white/85 mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-2xl text-white">Dr. Avi Ishaaya</div>
          <div className="text-xs uppercase tracking-[0.2em] text-white/50 mt-1">
            Wellness Centers
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-xs">
            Piece by piece, build a healthier you. A modern Beverly Hills
            practice rooted in science and compassion.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Our Services</Link></li>
            <li><Link href="/vip" className="hover:text-white">VIP</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Visit</h4>
          <address className="not-italic text-sm leading-relaxed text-white/80">
            9230 West Olympic Boulevard<br />
            Second Floor<br />
            Beverly Hills, CA 90212
          </address>
          <div className="mt-4 text-sm text-white/80">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-1">Open Hours</div>
            Mon / Tue / Thu / Fri · 8:00 AM – 5:00 PM<br />
            Wed · 10:00 AM – 5:00 PM
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Reach Us</h4>
          <ul className="text-sm space-y-2">
            <li>Call: <a href="tel:+13239541788" className="hover:text-white">(323) 954-1788</a></li>
            <li>Text: <a href="sms:+13239184258" className="hover:text-white">(323) 918-4258</a></li>
            <li>Email: <a href="mailto:info@aviishaaya.com" className="hover:text-white">info@aviishaaya.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-xs flex flex-col sm:flex-row justify-between gap-2 text-white/50">
          <span>© {new Date().getFullYear()} Dr. Avi Ishaaya Centers. All rights reserved.</span>
          <span>Beverly Hills · California</span>
        </div>
      </div>
    </footer>
  );
}
