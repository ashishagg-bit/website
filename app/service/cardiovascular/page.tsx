import { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { cardiovascular } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: cardiovascular.metaTitle,
  description: cardiovascular.metaDescription,
  alternates: { canonical: "/service/cardiovascular/" },
};

export default function Page() {
  return <ServicePage data={cardiovascular} />;
}
