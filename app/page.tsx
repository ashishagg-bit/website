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
  const posts = getAllPosts().slice(0, 3);

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
