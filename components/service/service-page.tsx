import { PageHero } from "@/components/page-hero";
import { Approach, Conditions, TileGrid } from "@/components/service/sections";
import { SplitBand } from "@/components/split-band";
import { Testimonials } from "@/components/home/testimonials";
import { ClosingCta } from "@/components/closing-cta";
import { testimonials } from "@/lib/home-content";
import type { ServicePageData } from "@/lib/service-pages";

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

      <Conditions items={data.conditions} />

      <TileGrid title={data.diagnostics.title} tiles={data.diagnostics.tiles} />

      <SplitBand
        eyebrow={data.name}
        title={data.closing.title}
        body={data.closing.body}
        cta={{ href: "/contact", label: "Request Appointment" }}
        image={data.closing.image}
        tone="cream"
      />

      <Testimonials items={testimonials.slice(0, 3)} />

      <ClosingCta />
    </>
  );
}
