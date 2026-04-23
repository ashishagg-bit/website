import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE = "https://aviishaaya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/contact",
    "/vip",
    "/blog",
    "/service/lungs",
    "/service/cardiovascular",
    "/service/wellness-preventive-medicine",
    "/service/allergy-sensitivity",
    "/service/sleep",
  ].map((p) => ({
    url: `${SITE}${p}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: p.rawDate,
  }));

  return [...staticRoutes, ...posts];
}
