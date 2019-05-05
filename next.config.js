const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const nodeExternals = require('webpack-node-externals');
const withPlugins = require('next-compose-plugins');
const withMDX = require('@zeit/next-mdx');
const images = require('remark-images');
const emoji = require('remark-emoji');
const webpack = require('webpack');

const exportPathMap = require('./bin/exportPathMap');

module.exports = withPlugins([
  [withMDX, {
    pageExtensions: ['js', 'jsx', 'mdx'],
    exportPathMap,
  }],
  [{
    targets: 'node',
    node: {
      child_process: 'empty',
    },
    externals: [
      'child_process',
      nodeExternals({
        whitelist: ['fsevents', 'aws-sdk', 'child_process', 'detect-libc'],
      }),
    ],
  }],
  [withBundleAnalyzer, {
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html',
      },
    },
  }],
  [{
    webpack: (config, { defaultLoaders }) => {
      config.module.rules.push({
        test: /\.mdx?$/,
        use: [
          defaultLoaders.babel,
          {
            loader: '@mdx-js/loader',
            options: {
              mdPlugins: [images, emoji],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      });
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.SECRET': JSON.stringify(process.env.SECRET),
        }),
        // Same as above
        // new webpack.EnvironmentPlugin(['SECRET'])
      );

      return config;
    },
    webpackDevMiddleware: (config) => {
      return config;
    },
  }],
]);
