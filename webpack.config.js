const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: './src/index.js',
    about: "./src/pages/about/index.js",
    analytics: "./src/pages/analytics/index.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "plugins": [
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      },

      {
        test: /\.css$/i,
        use: [(isDev ? 'style-loader' : {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }),
        {
          loader:'css-loader',
          options: {
            importLoaders: 2
          }
        }, 'postcss-loader'
        ]},

      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        use: 'file-loader?name=./vendor/fonts/[name].[ext]&esModule=false'
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]',
              esModule: false,
            }
          },
          {
            loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.90],
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                }
              }
            },
        ],
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash].css',
    }),

    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/pages/about/about.html",
      filename: "about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/pages/analytics/analytics.html",
      filename: "analytics.html",
      chunks: ["analytics"],
    }),

    new WebpackMd5Hash(),

    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
              preset: ['default'],
      },
      canPrint: true
    })
  ]
};
