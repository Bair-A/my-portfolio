import type { NextConfig } from "next";

// На GitHub Pages сайт живёт по адресу bair-a.github.io/my-portfolio,
// на Vercel (там задана переменная VERCEL) — в корне домена
const basePath = process.env.VERCEL ? "" : "/my-portfolio";

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
