/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cleanDistDir: false,
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config, { isServer }) => {
    config.infrastructureLogging = { level: "error" };
    return config;
  },
};

export default nextConfig;
