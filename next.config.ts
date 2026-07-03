import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/zoon-site1",
  assetPrefix: "/zoon-site1/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
