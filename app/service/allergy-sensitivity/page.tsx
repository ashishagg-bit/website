import { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { allergy } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: allergy.metaTitle,
  description: allergy.metaDescription,
  alternates: { canonical: "/service/allergy-sensitivity/" },
};

export default function Page() {
  return <ServicePage data={allergy} />;
}
