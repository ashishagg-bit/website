import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ClosingCta } from "@/components/closing-cta";
import { ContactForm } from "@/components/contact-form";
import { Testimonials } from "@/components/home/testimonials";
import { SplitBand } from "@/components/split-band";
import { testimonials } from "@/lib/home-content";
import { Kicker } from "@/components/ui";

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
const CONTACT_REVIEWS = ["Sandra M.", "David A.", "Jonathan K."];
const contactReviews = testimonials.filter((t) =>
  CONTACT_REVIEWS.includes(t.name)
);

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
        // 2512:36049 sets the two sentences on two lines.
        body={
          <>
            Send a message below or reach us by phone, text, or email.
            <br />
            We typically respond within one business day.
          </>
        }
        cta={null}
        /* Contact used the Lungs hero, so the two pages opened on the same
           photograph. This is a consultation shot from the scraped library —
           closer in subject and, more to the point, not a duplicate. The Figma
           frame (2256:8643) has its own image, which is not in the repository
           yet; swap it here when it arrives. */
        image="/images/scraped/Rf04pBe6rnVQfH4IqhWEgHbAP4.webp"
      />

      <section className="flex w-full flex-col items-center bg-white px-6 py-16 sm:px-14 sm:py-[104px]">
        {/* 1280, not the 1328 most bands use: this one sits on 80 of side
           padding in the frame (80..1360), and that is what makes the three
           parts come to 292 + 104 + 104 + 780. */}
        <div className="flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:gap-0">
          {/* 2256:9208 sets Appointments 80..372 (292 wide), a rule at 476, and
              the form 580..1360 (780) — not the even split a 5/7 grid gives,
              which handed the contact details 516 and squeezed the form to 748.
              The 104 either side of the rule is the frame's own spacing.

              The form stays first in the DOM — it is what the page is for, and
              what a keyboard or a screen reader should reach first — and is
              ordered to the right visually instead. */}
          <div className="lg:order-2 lg:flex-1 lg:border-l lg:border-[var(--hairline)] lg:pl-[104px]">
            <div className="flex flex-col gap-3">
              <Kicker>contact us</Kicker>
              {/* 34/44, the same size as "Call or Text to Schedule" beside it
                  (2512:36614 draws both headings alike); this was the 56px
                  Display, a size up from the frame. */}
              <h2 className="font-kalice text-[34px] leading-[44px] tracking-[1px] text-[var(--ink)]">
                Send a Message
              </h2>
            </div>
            {/* 40 between the heading block and the fields (2256:9496 ends at
                70, 2256:9499 starts at 110). */}
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <aside className="flex flex-col gap-8 lg:order-1 lg:mr-[104px] lg:w-[292px] lg:shrink-0">
            <div className="flex flex-col gap-3">
              <Kicker>Appointments</Kicker>
              <h2 className="font-kalice text-[34px] leading-[44px] tracking-[1px] text-[var(--ink)]">
                Call or Text to Schedule
              </h2>
              {/* The list's top edge is level with the top of the Full Name
                  field across the rule (2512:36614: both at 247). From the
                  heading's top that is 44 (one line of "Send a Message") + 40
                  + 21 (label) + 12 = 117; this heading is two lines, 88, so
                  the list follows it by 29 rather than the column's 12.

                  The links are plain ink-60 in the frame, no underline, and
                  turn blue only on hover (review note). */}
              <ul className="mt-1 flex flex-col gap-2 text-base leading-6 text-[var(--ink-60)] lg:mt-[17px] [&_a]:transition-colors [&_a]:hover:text-[var(--blue)]">
                <li>
                  Call: <a href="tel:+13239541788">(323) 954-1788</a>
                </li>
                {/* The frame lists a separate texting line; the page previously
                    showed only the voice number. */}
                <li>
                  Text: <a href="sms:+13239184258">(323) 918-4258</a>
                </li>
                <li>
                  Email: <a href="mailto:info@aviishaaya.com">info@aviishaaya.com</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/*
        Figma 2512:36984 builds this as the ink split band: the reception
        photograph with the puzzle notch bitten out of its inner edge against a
        navy copy panel, 740 tall. The address is set bold in white, "Days &
        Hours of Operation" is an 18px bold line rather than a heading, and the
        hours are a two-column list — day, then time — with no rules between.
        The build had it on cream with a Kalice heading and ruled rows, which
        is what the review flagged as "design not as per figma file".

        The frame's three buttons are all switched off, so this band has no CTA.
      */}
      <SplitBand
        tone="ink"
        eyebrow="visit us"
        title="Easily Accessible, Welcoming Space"
        cta={null}
        /* The reception photograph the frame draws — the same one the
           homepage bento already carries on its Thermography tile. */
        image="/images/scraped/4FVQUutQWdB7NtLwRY17tioTIY0.jpg"
        body={
          <address className="font-medium not-italic text-white">
            9230 W Olympic Blvd, 2nd Floor
            <br />
            Beverly Hills, CA 90212
          </address>
        }
      >
        <div className="flex w-full flex-col gap-3 pt-4">
          <p className="text-lg font-semibold leading-6 text-white">
            Days &amp; Hours of Operation
          </p>
          <dl className="grid grid-cols-[minmax(150px,170px)_1fr] gap-x-6 gap-y-2 text-base leading-6 text-white/70">
            <dt>Mon, Tue, Thu, Fri</dt>
            <dd>8:00 AM to 5:00 PM</dd>
            <dt>Wed</dt>
            <dd>10:00 AM to 5:00 PM</dd>
          </dl>
        </div>
      </SplitBand>

      {/* 2256:10643 carries the same three reviews the services page does —
          Sandra M., David A. and Jonathan K. Unfiltered, this rendered the
          entire library: 1465 against the frame's 931. */}
      <Testimonials items={contactReviews} />

      <ClosingCta />
    </>
  );
}
