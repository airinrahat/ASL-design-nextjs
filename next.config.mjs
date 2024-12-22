/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "bn"],
    defaultLocale: "en",
  },
  images: {
    domains: ["i.ibb.co"], // এখানে চিত্রের হোস্টনেম যোগ করুন
  },
};

export default nextConfig;
