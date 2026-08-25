import { getAllPosts } from "@/lib/posts";
import { Hero } from "@/components/home/hero";
import { Method } from "@/components/home/method";
import { Services } from "@/components/home/services";
import { WhyUs } from "@/components/home/why-us";
import { Promises } from "@/components/home/promises";
import { Physician } from "@/components/home/physician";
import { Testimonials } from "@/components/home/testimonials";
import { Journal } from "@/components/home/journal";
import { Space } from "@/components/home/space";

/**
 * Homepage — Figma "Aviishaaya Dev" (TdifdqKlRJcGSLC8Kpz1Sz), frame 1:84.
 * Sections follow the frame's vertical order.
 */
export default function HomePage() {
  // Homepage journal thumbnails are exported straight from Figma (nodes 1:2635/2644/2653).
  const journalImages = [
    "/images/figma/journal-1.jpg",
    "/images/figma/journal-2.jpg",
    "/images/figma/journal-3.jpg",
  ];
  const posts = getAllPosts()
    .slice(0, 3)
    .map((post, i) => ({ ...post, image: journalImages[i] }));

  return (
    <>
      <Hero />
      <Method />
      <Services />
      <WhyUs />
      <Promises />
      <Physician />
      <Testimonials />
      <Journal posts={posts} />
      <Space />
    </>
  );
}
