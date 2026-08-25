import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/home/services";
import { VipBand } from "@/components/vip-band";
import { Testimonials } from "@/components/home/testimonials";
import { ClosingCta } from "@/components/closing-cta";
import { healingDawnTile, servicesPageTiles, testimonials } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive care to optimize every aspect of your health — pulmonary, cardiovascular, sleep, allergy, thermography, and preventive medicine.",
  alternates: { canonical: "/services/" },
};

/**
 * All services — Figma "Aviishaaya Dev" (TdifdqKlRJcGSLC8Kpz1Sz), frame 64:15012.
 * Sections follow the frame's vertical order.
 */
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Comprehensive care
            <br />
            to optimize every
            <br />
            aspect of your health.
          </>
        }
        body={
          <>
            True wellness comes from balancing body, mind, emotions, and spirit —
            every piece counts. Explore our specialties.
          </>
        }
        image="/images/scraped/Pqq2TKWlgMDe9nT6krgeFQ6euj0.jpg"
      />

      <Services
        eyebrow="our method"
        title="Honoring every dimension of your health puzzle."
        body={null}
        cta={null}
        tiles={servicesPageTiles}
        lastTile={healingDawnTile}
      />

      <VipBand />

      <Testimonials items={testimonials.slice(0, 3)} />

      <ClosingCta />
    </>
  );
}
