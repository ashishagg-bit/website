export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { services } from "@/lib/site-data";
import { tiers } from "@/lib/vip-tiers";

const SITE = "https://aviishaaya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // `trailingSlash: true` in next.config means every exported route lives at
  // `path/index.html`, so the canonical URL carries the slash. Keep the
  // sitemap in step with it (and with the `alternates.canonical` tags).
  const staticRoutes = [
    "/",
    "/about/",
    "/services/",
    "/contact/",
    "/vip/",
    "/blog/",
    "/privacy-policy/",
    ...services.map((s) => `/service/${s.slug}/`),
    ...tiers.map((t) => `/vip/${t.slug}/`),
  ].map((p) => ({
    url: `${SITE}${p}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${SITE}/blog/${p.slug}/`,
    lastModified: p.rawDate,
  }));

  return [...staticRoutes, ...posts];
}
