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

const SERVICES_REVIEWS = ["Sandra M.", "David A.", "Jonathan K."];
const servicesReviews = testimonials.filter((t) =>
  SERVICES_REVIEWS.includes(t.name)
);

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
        image="/images/figma/services-hero.jpg"
      />

      {/*
        Node 74:22082 lays the bento out as two rows of four equal tiles — the
        eighth ("The Healing Dawn") is an ordinary tile in the second row, not
        the wide closing strip the homepage frame uses.
      */}
      <Services
        eyebrow="our method"
        title="Honoring every dimension of your health puzzle."
        body={null}
        cta={null}
        tiles={[...servicesPageTiles, healingDawnTile]}
        rows={[4, 4]}
        lastTile={null}
        /* Even 4x2 grid here, unlike the homepage's three-across bento: the
           open tile takes the photograph and the "Learn more" pill but keeps
           its column, because widening one of four reflows the whole row. */
        evenWidths
        measure="max-w-[700px]"
      />

      <VipBand />

      {/* Node 103:29785/29798/29841 — Sandra M., David A. and Jonathan K. */}
      <Testimonials items={servicesReviews} />

      <ClosingCta />
    </>
  );
}
