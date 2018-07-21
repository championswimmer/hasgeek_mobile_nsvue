const path = require('path');
const webpack = require('webpack');
const winston = require('winston-color');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackSynchronizableShellPlugin = require('webpack-synchronizable-shell-plugin');
const NativeScriptVueExternals = require('nativescript-vue-externals');
const NativeScriptVueTarget = require('nativescript-vue-target');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const WebpackNodeExternals = require('webpack-node-externals');

// Prepare NativeScript application from template (if necessary)
require('./prepare')();

// Generate platform-specific webpack configuration
const config = (platform, launchArgs) => {

  winston.info(`Bundling application for ${platform}...`);

  // CSS / SCSS style extraction loaders
  const cssLoader = ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {url: false},
      },
    ],
  });
  const scssLoader = ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          url: false,
          includePaths: [path.resolve(__dirname, 'node_modules')],
        },
      },
      'sass-loader',
    ],
  });

  return {

    target: NativeScriptVueTarget,

    entry: path.resolve(__dirname, './src/main.ts'),

    output: {
      path: path.resolve(__dirname, './dist/app'),
      filename: `app.${platform}.js`,
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
        },
        {
          test: /\.ts$/,
          exclude: /(node_modules | dist)/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        {
          test: /\.css$/,
          use: cssLoader,
        },
        {
          test: /\.scss$/,
          use: scssLoader,
        },

        {
          test: /\.vue$/,
          loader: 'ns-vue-loader',
          options: {
            loaders: {
              css: cssLoader,
              scss: scssLoader,
            },
            esModule: true
          },
        },
      ],
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'vue$': 'nativescript-vue'
      },
      modules: [
        'node_modules/tns-core-modules',
        'node_modules',
      ],
      extensions: [
        `.${platform}.css`,
        '.css',
        `.${platform}.scss`,
        '.scss',
        `.${platform}.ts`,
        '.ts',
        `.${platform}.js`,
        '.js',
        `.${platform}.vue`,
        '.vue',
      ],
    },

    externals: [
      WebpackNodeExternals({
        // whitelist everything that does not have tns-core-modules in its name
        whitelist: [((moduleName) => (moduleName.indexOf('tns-core-modules') === -1))]
      }),
      NativeScriptVueExternals
    ],

    plugins: [

      // Extract CSS to separate file
      new ExtractTextPlugin({filename: `app.${platform}.css`}),

      // Optimize CSS output
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {discardComments: {removeAll: true}},
        canPrint: false,
      }),

      // // Minify JavaScript code
      // new UglifyJSWebpackPlugin({
      //   parallel: true,
      //   cache: true,
      //   uglifyOptions: {
      //     mangle: false,
      //     compress: false,
      //     keep_classnames: true,
      //     keep_fnames: true,
      //     ecma: 6
      //   }
      // }),

      // Copy src/assets/**/* to dist/
      new CopyWebpackPlugin([
        {from: 'assets', context: 'src'},
      ]),

      // Execute post-build scripts with specific arguments
      new WebpackSynchronizableShellPlugin({
        onBuildEnd: {
          scripts: [
            ... launchArgs ? [`node launch.js ${launchArgs}`] : [],
          ],
          blocking: false,
        },
      }),

    ],

    stats: 'errors-only',

    node: {
      'http': false,
      'timers': false,
      'setImmediate': false,
      'fs': 'empty',
    },

  };
};

// Determine platform(s) and action from webpack env arguments
module.exports = env => {
  const action = (!env || !env.tnsAction) ? 'build' : env.tnsAction;

  if (!env || (!env.android && !env.ios)) {
    return [config('android'), config('ios', action)];
  }

  return env.android && config('android', `${action} android`)
    || env.ios && config('ios', `${action} ios`)
    || {};
};
