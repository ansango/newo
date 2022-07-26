/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["react-daisyui"]);
const nextTranslate = require("next-translate");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// const nextConfig = withPWA({
//   reactStrictMode: true,
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === "development",
//   },
// });

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextTranslate(withTM(nextConfig));
