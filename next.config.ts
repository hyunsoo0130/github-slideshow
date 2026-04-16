import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow gray-matter to be used in server components
  serverExternalPackages: ["gray-matter"],
};

export default nextConfig;
