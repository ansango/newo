/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  pwa: {
    dest: "public",
    runtimeCaching,
  },
};

module.exports = nextTranslate({
  nextConfig,
  webpack: (config) => {
    return config;
  },
});
