import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ClosingCta } from "@/components/closing-cta";
import { Eyebrow } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Dr. Avi Ishaaya Wellness Centers — request an appointment, ask a question, or stop by our Beverly Hills office.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Schedule a
            <br />
            Consultation
          </>
        }
        cta={null}
        image="/images/scraped/Ok6cd4z826F0Gks9sFfcGFjFzY.jpg"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5 space-y-5">
            <InfoCard
              eyebrow="Location"
              title="Easily Accessible, Welcoming Space"
              lines={[
                "9230 W Olympic Blvd, 2nd Floor",
                "Beverly Hills, CA 90212",
              ]}
            />
            <InfoCard
              eyebrow="Appointments"
              title="Call or Text to Schedule"
              lines={[
                <a key="call" href="tel:+13239541788" className="hover:text-[var(--blue)]">
                  Call: (323) 954-1788
                </a>,
                <a key="text" href="sms:+13239184258" className="hover:text-[var(--blue)]">
                  Text: (323) 918-4258
                </a>,
                <a
                  key="email"
                  href="mailto:info@aviishaaya.com"
                  className="hover:text-[var(--blue)]"
                >
                  Email: info@aviishaaya.com
                </a>,
              ]}
            />
            <InfoCard
              eyebrow="Hours"
              title="Days & Hours of Operation"
              lines={[
                "Mon / Tue / Thu / Fri · 8:00 AM – 5:00 PM",
                "Wed · 10:00 AM – 5:00 PM",
              ]}
            />
          </aside>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}

function InfoCard({
  eyebrow,
  title,
  lines,
}: {
  eyebrow: string;
  title: string;
  lines: React.ReactNode[];
}) {
  return (
    <div className="rounded-2xl border border-[var(--hairline)] bg-white p-6">
      <div className="text-xs uppercase tracking-[0.2em] text-[var(--blue)]">{eyebrow}</div>
      <h3 className="mt-2 font-kalice text-lg text-[var(--ink)]">{title}</h3>
      <ul className="mt-3 space-y-1 text-sm text-[var(--ink)]/85">
        {lines.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
