import { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { sleep } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: sleep.metaTitle,
  description: sleep.metaDescription,
  alternates: { canonical: "/service/sleep/" },
};

export default function Page() {
  return <ServicePage data={sleep} />;
}
