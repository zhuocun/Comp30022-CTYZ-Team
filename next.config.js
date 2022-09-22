/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

module.exports = withTM({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
