import { SplitBand } from "@/components/split-band";

/** "VIP Plans" band on "All services" — Figma node 92:26349. */
export function VipBand({
  image = "/images/scraped/V2qDs1D0pO2ja4K49KWNNzfDHe0.png",
}: {
  image?: string;
} = {}) {
  return (
    <SplitBand
      eyebrow="VIP Plans"
      title={
        <>
          Exclusive VIP
          <br />
          Health Plans
        </>
      }
      body="Discover four comprehensive wellness packages designed to match your individual goals — from foundational health screenings to the most advanced diagnostics medicine has to offer."
      cta={{ href: "/vip", label: "Explore All Plans" }}
      image={image}
      tone="ink"
    />
  );
}
