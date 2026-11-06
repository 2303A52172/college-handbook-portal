// Normal mode (local, Vercel): a regular Next.js app.
// GitHub Pages mode (GITHUB_PAGES=true, set by the workflow): a static export under /<repo-name>.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false, // hides the round "N" badge shown in development
  ...(isPages
    ? { output: "export", trailingSlash: true, images: { unoptimized: true }, basePath, assetPrefix: basePath || undefined }
    : {}),
};
export default nextConfig;