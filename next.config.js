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
};

module.exports = nextConfig;
