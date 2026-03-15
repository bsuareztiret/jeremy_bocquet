import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jeremy_bocquet",
  assetPrefix: "/jeremy_bocquet/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
