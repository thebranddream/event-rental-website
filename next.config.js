/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  // `swcMinify` is not a recognized option in newer Next.js versions; default minification behavior is used.
}

module.exports = nextConfig
