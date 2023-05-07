/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  images: {
    domains: ["images.prismic.io", "images.unsplash.com", "i.picsum.photos"],
  },
};

module.exports = nextConfig;
