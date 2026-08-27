import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ClosingCta } from "@/components/closing-cta";
import { ContactForm } from "@/components/contact-form";
import { Testimonials } from "@/components/home/testimonials";
import { Display, Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Dr. Avi Ishaaya Wellness Centers — request an appointment, ask a question, or stop by our Beverly Hills office.",
  alternates: { canonical: "/contact/" },
};

/**
 * Contact — Figma frame 2182:14285.
 *
 * Section order follows the frame: photo hero, appointments beside the form,
 * visit details, patient reviews, closing call to action. The reviews and the
 * closing band were absent from this page entirely before, and the hero
 * carried a different headline from the one the frame specifies.
 */
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Our friendly team would
            <br />
            love to hear from you.
          </>
        }
        body="Send a message below or reach us by phone, text, or email. We typically respond within one business day."
        cta={null}
        /* Contact used the Lungs hero, so the two pages opened on the same
           photograph. This is a consultation shot from the scraped library —
           closer in subject and, more to the point, not a duplicate. The Figma
           frame (2256:8643) has its own image, which is not in the repository
           yet; swap it here when it arrives. */
        image="/images/scraped/Rf04pBe6rnVQfH4IqhWEgHbAP4.webp"
      />

      <section className="flex w-full flex-col items-center bg-white px-6 py-16 sm:px-14 sm:py-[104px]">
        <div className="grid w-full max-w-[1328px] gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-3">
              <Kicker>contact us</Kicker>
              <Display className="text-[var(--ink)]">Send a Message</Display>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-col gap-3">
              <Kicker>Appointments</Kicker>
              <h2 className="font-kalice text-[clamp(1.5rem,1.2rem+1vw,2rem)] leading-[1.25] tracking-[1px] text-[var(--ink)]">
                Call or Text to Schedule
              </h2>
              <ul className="mt-1 flex flex-col gap-2 text-base leading-6 text-[var(--ink-60)]">
                <li>
                  Call:{" "}
                  <a className="text-[var(--blue)] underline" href="tel:+13239541788">
                    (323) 954-1788
                  </a>
                </li>
                {/* The frame lists a separate texting line; the page previously
                    showed only the voice number. */}
                <li>
                  Text:{" "}
                  <a className="text-[var(--blue)] underline" href="sms:+13239184258">
                    (323) 918-4258
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    className="text-[var(--blue)] underline"
                    href="mailto:info@aviishaaya.com"
                  >
                    info@aviishaaya.com
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="flex w-full flex-col items-center bg-[var(--cream)] px-6 py-16 sm:px-14 sm:py-[104px]">
        <div className="grid w-full max-w-[1328px] gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-3">
            <Kicker>visit us</Kicker>
            <Display className="text-[var(--ink)]">
              Easily Accessible, Welcoming Space
            </Display>
            <address className="mt-2 not-italic text-base leading-6 text-[var(--ink-60)]">
              9230 W Olympic Blvd, 2nd Floor
              <br />
              Beverly Hills, CA 90212
            </address>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-kalice text-[clamp(1.5rem,1.2rem+1vw,2rem)] leading-[1.25] tracking-[1px] text-[var(--ink)]">
              Days &amp; Hours of Operation
            </h2>
            <dl className="mt-1 flex flex-col gap-2 text-base leading-6">
              <div className="flex justify-between gap-6 border-b border-[var(--hairline)] pb-2">
                <dt className="text-[var(--ink)]">Mon, Tue, Thu, Fri</dt>
                <dd className="text-[var(--ink-60)]">8:00 AM to 5:00 PM</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-[var(--ink)]">Wed</dt>
                <dd className="text-[var(--ink-60)]">10:00 AM to 5:00 PM</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Testimonials />

      <ClosingCta />
    </>
  );
}
