/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  env:{
    APP_ENV: process.env.APP_ENV
  },
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      topLevelAwait: true,
      layers: true,
    };
    config.module.rules.push({
      test: /\.plutus/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'json-loader',
        },
      ],
    })
    return config;
  },
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;
