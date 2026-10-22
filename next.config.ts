import type { NextConfig } from "next";

// Сайт публикуется на GitHub Pages по адресу bair-a.github.io/my-portfolio
const basePath = "/my-portfolio";

const nextConfig: NextConfig = {
  basePath,
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
