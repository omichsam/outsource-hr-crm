import type { NextConfig } from "next";
import path from "path";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(process.cwd()),
  ...(githubPages
    ? {
        output: "export",
        trailingSlash: true,
        images: {
          loader: "custom",
          loaderFile: "./lib/image-loader.ts",
        },
        ...(basePath ? { basePath } : {}),
      }
    : {}),
};

export default nextConfig;
