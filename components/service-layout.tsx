import { PageHero } from "@/components/page-hero";
import { Approach, Conditions, TileGrid } from "@/components/service/sections";
import { SplitBand } from "@/components/split-band";
import { Testimonials } from "@/components/home/testimonials";
import { ClosingCta } from "@/components/closing-cta";
import { testimonials } from "@/lib/home-content";

export type ServiceSubItem = { title: string; subtitle: string };

/**
 * Service detail layout, rebuilt to the Figma design (frame 81:23686 is the
 * reference implementation). Keeps the props the existing service pages
 * already pass, so their live-site copy carries over unchanged.
 *
 * NOTE: the per-service headline for the Approach section could not be read
 * from Figma (the file's MCP quota is exhausted), so it falls back to the
 * wording used on the Lungs frame. Swap in each frame's own headline when
 * the quota resets.
 */
export function ServiceLayout({
  title,
  tagline,
  intro,
  bullets,
  conditions,
  services,
  ctaText = "Schedule Your Evaluation",
  cta,
  heroImage,
  approachTitle = "Comprehensive, calm, and rooted in evidence.",
  closingImage = "/images/scraped/41W4msn8A5xW2nbNOonFypPQ.jpg",
}: {
  title: string;
  tagline: string;
  intro: React.ReactNode;
  bullets?: string[];
  conditions?: { name: string; details?: { label: string; value: string }[] }[];
  services: ServiceSubItem[];
  ctaText?: string;
  cta?: React.ReactNode;
  heroImage?: string;
  approachTitle?: string;
  closingImage?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={title}
        title={tagline}
        cta={{ href: "/contact", label: "Request Appointment →" }}
        image={heroImage ?? "/images/scraped/Ok6cd4z826F0Gks9sFfcGFjFzY.jpg"}
      />

      <Approach title={approachTitle} body={intro} bullets={bullets} />

      {conditions && conditions.length > 0 && (
        <Conditions items={conditions.map((c) => c.name)} />
      )}

      <TileGrid
        title="Diagnostics and care"
        tiles={services.map((s, i) => ({
          n: String(i + 1).padStart(2, "0"),
          title: s.title,
          blurb: s.subtitle,
        }))}
      />

      <SplitBand
        eyebrow={title}
        title={ctaText}
        body="Reach out to Dr. Avi Ishaaya Center to schedule a comprehensive evaluation. Early intervention can make a significant difference."
        cta={{ href: "/contact", label: "Request Appointment" }}
        image={closingImage}
        tone="cream"
      />

      {cta}

      <Testimonials items={testimonials.slice(0, 3)} />

      <ClosingCta />
    </>
  );
}
