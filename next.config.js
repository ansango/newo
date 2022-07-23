/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
