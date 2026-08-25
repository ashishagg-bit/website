import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pages are still prerendered at build time — the difference from
  // `output: "export"` is that route handlers survive the build. The contact
  // form posts to /api/contact, and a static export drops that route on the
  // floor, so every submission 404s and the form reports "Submission failed".
  //
  // If this ever needs to go back to a portable folder of static files, add
  // `output: "export"` here and move the form to a hosted form endpoint —
  // the two cannot both be true.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
