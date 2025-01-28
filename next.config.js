/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    // Disable TypeScript type checking during the build (optional)
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
