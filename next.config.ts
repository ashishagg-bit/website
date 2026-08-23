import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is deployed as plain static files (drag-and-drop to any host),
  // so every route is prerendered into `out/` at build time.
  output: "export",
  // Emit `about/index.html` rather than `about.html` so the export works on
  // hosts that do not rewrite extensionless URLs.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
