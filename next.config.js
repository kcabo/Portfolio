const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  pwa: {
    dest: 'public',
    dynamicStartUrl: false,
  },
});
