import { PageHero } from "@/components/page-hero";
import { Approach, Conditions, TileGrid } from "@/components/service/sections";
import { SplitBand } from "@/components/split-band";
import { Testimonials } from "@/components/home/testimonials";
import { ClosingCta } from "@/components/closing-cta";
import { testimonials } from "@/lib/home-content";
import type { ServicePageData } from "@/lib/service-pages";

/**
 * The service frames quote three specific reviews — Sandra M., Priya R. and
 * Jonathan K. (Lungs 81:25893/81:25934/81:25947, Cardiovascular
 * 103:32764/103:32805/103:32818) — not the first three of the homepage list.
 */
const SERVICE_REVIEWS = ["Sandra M.", "Priya R.", "Jonathan K."];
const serviceTestimonials = testimonials.filter((t) =>
  SERVICE_REVIEWS.includes(t.name)
);

/**
 * Shared layout for every service detail frame in the Figma file
 * (e.g. "Lungs and Breathing" 81:23686). Section order follows the frame.
 */
export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <>
      <PageHero
        eyebrow={data.name}
        title={data.hero.title}
        body={data.hero.body}
        cta={{ href: "/contact", label: "Request Appointment →" }}
        image={data.hero.image}
      />

      <Approach
        title={data.approach.title}
        paragraphs={data.approach.paragraphs}
        bullets={data.approach.bullets}
        highlight={data.approach.highlight}
      />

      {/* Allergy and Wellness have no Conditions section in their frames
          (2031:3776, 2031:6398). Rendering it regardless left a full-height
          ink band carrying a heading and nothing beneath it. */}
      {data.conditions.length > 0 && <Conditions items={data.conditions} />}

      <TileGrid title={data.diagnostics.title} tiles={data.diagnostics.tiles} />

      <SplitBand
        eyebrow={data.name}
        title={data.closing.title}
        body={data.closing.body}
        cta={{ href: "/contact", label: "Request Appointment" }}
        image={data.closing.image}
        tone="cream"
      />

      <Testimonials items={serviceTestimonials} />

      <ClosingCta />
    </>
  );
}
