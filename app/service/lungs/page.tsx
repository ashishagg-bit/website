import { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { lungs } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: lungs.metaTitle,
  description: lungs.metaDescription,
  alternates: { canonical: "/service/lungs/" },
};

export default function Page() {
  return <ServicePage data={lungs} />;
}
