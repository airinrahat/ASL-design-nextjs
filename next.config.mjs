/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "bn"],
    defaultLocale: "en",
  },
  images: {
    domains: ["i.ibb.co"],
  },
};

export default nextConfig;
