/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Skip type checking during builds - type errors will show in development
    ignoreBuildErrors: true,
  },
  eslint: {
    // Skip ESLint during builds
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
