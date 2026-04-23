import { Metadata } from "next";
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
      <section className="gradient-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-12 sm:pt-20 sm:pb-16">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display text-4xl sm:text-5xl text-[var(--navy)] mt-4 tracking-tight max-w-3xl text-balance">
            Our friendly team would love to hear from you.
          </h1>
          <p className="mt-5 text-lg text-[var(--navy-soft)]/85 max-w-2xl">
            Send a message below or reach us by phone, text, or email. We
            typically respond within one business day.
          </p>
        </div>
      </section>

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
                <a key="call" href="tel:+13239541788" className="hover:text-[var(--teal-deep)]">
                  Call: (323) 954-1788
                </a>,
                <a key="text" href="sms:+13239184258" className="hover:text-[var(--teal-deep)]">
                  Text: (323) 918-4258
                </a>,
                <a
                  key="email"
                  href="mailto:info@aviishaaya.com"
                  className="hover:text-[var(--teal-deep)]"
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
    <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
      <div className="text-xs uppercase tracking-[0.2em] text-[var(--teal-deep)]">{eyebrow}</div>
      <h3 className="mt-2 font-display text-lg text-[var(--navy)]">{title}</h3>
      <ul className="mt-3 space-y-1 text-sm text-[var(--navy-soft)]/85">
        {lines.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
