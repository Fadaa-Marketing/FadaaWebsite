import withPWA from "next-pwa";
import createNextIntlPlugin from "next-intl/plugin";

// Create intl plugin wrapper
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const baseConfig = {
  async rewrites() {
    return [
      {
        source: "/api/register",
        destination: `${process.env.NEXT_PUBLIC_API_AUTH_URL}`,
      },
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
      {
        source: "/api/login",
        destination: `${process.env.NEXT_PUBLIC_API_LOGIN_URL}`,
      },
      {
        source: "/api/contact",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      },
    ];
  },
  images: {
    domains: [
      "fadaa.nerdware-eg.com",
      "vimknbrcrjkdyuulqoch.supabase.co",
      "admin.fadaa-marketing.com",
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
};

// First apply next-intl, then wrap withPWA
const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(withNextIntl(baseConfig));

export default nextConfig;
