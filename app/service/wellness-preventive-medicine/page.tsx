import { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { wellness } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: wellness.metaTitle,
  description: wellness.metaDescription,
  alternates: { canonical: "/service/wellness-preventive-medicine/" },
};

export default function Page() {
  return <ServicePage data={wellness} />;
}
