import { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { lungs } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: lungs.metaTitle,
  description: lungs.metaDescription,
};

/** Lungs and Breathing — Figma frame 81:23686. */
export default function LungsPage() {
  return <ServicePage data={lungs} />;
}
