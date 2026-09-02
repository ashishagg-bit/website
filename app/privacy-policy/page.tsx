import { Metadata } from "next";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Dr. Avi Ishaaya Wellness Centers in Beverly Hills, CA.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="gradient-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="font-kalice text-4xl sm:text-5xl text-[var(--ink)] mt-4 tracking-tight max-w-3xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 prose prose-lg text-[var(--ink)]/85">
          <h2 className="font-kalice text-2xl text-[var(--ink)] tracking-tight">
            Your Privacy Matters
          </h2>
          <p>
            Dr. Avi Ishaaya Centers (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) is committed to protecting the privacy and
            security of your personal information. This Privacy Policy
            describes how we collect, use, and safeguard the information you
            provide through our website and services.
          </p>

          <h2 className="font-kalice text-2xl text-[var(--ink)] tracking-tight mt-10">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, and health-related details when you submit
            an appointment request, contact form, or communicate with our
            office.
          </p>

          <h2 className="font-kalice text-2xl text-[var(--ink)] tracking-tight mt-10">
            How We Use Your Information
          </h2>
          <p>
            Your information is used solely to respond to inquiries, schedule
            appointments, provide healthcare services, and improve our
            practice. We do not sell, trade, or rent your personal information
            to third parties.
          </p>

          <h2 className="font-kalice text-2xl text-[var(--ink)] tracking-tight mt-10">
            HIPAA Compliance
          </h2>
          <p>
            As a healthcare provider, we comply with the Health Insurance
            Portability and Accountability Act (HIPAA). Protected health
            information (PHI) is handled in accordance with all applicable
            federal and state regulations.
          </p>

          <h2 className="font-kalice text-2xl text-[var(--ink)] tracking-tight mt-10">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at{" "}
            <a
              href="mailto:info@aviishaaya.com"
              className="text-[var(--blue)] hover:underline"
            >
              info@aviishaaya.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+13239541788"
              className="text-[var(--blue)] hover:underline"
            >
              (323) 954-1788
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
