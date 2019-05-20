const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const nodeExternals = require('webpack-node-externals');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withMDX = require('@next/mdx');
const images = require('remark-images');
const emoji = require('remark-emoji');

const exportPathMap = require('./bin/exportPathMap');

module.exports = withPlugins([
  [withMDX, {
    pageExtensions: ['js', 'jsx', 'mdx'],
    exportPathMap,
  }],
  [withImages, {}],
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
        use: [defaultLoaders.babel, {
          loader: '@mdx-js/loader',
          options: { mdPlugins: [images, emoji] },
        }],
      });
      config.module.rules.push({
        test: /\.(txt|jpg|png|svg)$/,
        use: [defaultLoaders.babel, {
          loader: 'file-loader',
          options: {
            context: '',
            outputPath: 'static',
            publicPath: '_next/static',
            name: '[path][name].[hash].[ext]',
          },
        }],
      });
      config.module.rules.push({
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [defaultLoaders.babel, {
          loader: 'file-loader',
          options: { name: '[name].[ext]' },
        }],
      });

      return config;
    },
  }],
  [{ target: 'serverless' }],
]);
