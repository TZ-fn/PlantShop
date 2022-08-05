/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  sassOptions: {
    includePaths: ['./styles'],
    prependData: `@import "styles/mixins.scss";`,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
