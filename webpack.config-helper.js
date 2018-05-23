'use strict';

const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractSASS = new ExtractTextPlugin('styles/bundle.css');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash')



module.exports = (options) => {
  const dest = path.join(__dirname, 'dist');

  let webpackConfig = {
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },
    mode: options.mode,
    devtool: options.devtool,
    entry: [
      './src/webpack-public-path',
      path.resolve(__dirname, 'src/index')
    ],
    output: {
      path: dest,
      // publicPath: '/',
      filename: 'bundle.[hash].js'
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development')
        }
      }),
      new HardSourceWebpackPlugin(),
      new Webpack.HotModuleReplacementPlugin(),
      new Webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        // template: './src/index.html'
        template: 'src/index.ejs',
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
        inject: true
      }),
      new CleanWebpackPlugin([dest])
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.eot(\?v=\d+.\d+.\d+)?$/,
          use: ['file-loader']
        },
        {
            test: /\.obj$/,
            loader: 'webpack-obj-loader'
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'application/font-woff'
              }
            }
          ]
        },
        {
          test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'application/octet-stream'
              }
            }
          ]
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'image/svg+xml'
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|ico)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
                test: /(\.css|\.scss|\.sass)$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true
                    }
                  }, {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [
                        require('autoprefixer')
                      ],
                      sourceMap: true
                    }
                  }, {
                    loader: 'sass-loader',
                    options: {
                      includePaths: [path.resolve(__dirname, 'src', 'styles')],
                      sourceMap: true
                    }
                  }
                ]
              }
      ]
    }
  };

  if (options.isProduction) {

    const GLOBALS = {
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false
    }

    webpackConfig.entry = ['./src/index'];

    webpackConfig.plugins.push(new WebpackMd5Hash())

    webpackConfig.plugins.push(new WebpackMd5Hash())

    webpackConfig.plugins.push(new Webpack.DefinePlugin(GLOBALS))

    webpackConfig.plugins.push(new ExtractTextPlugin('[name].[md5:contenthash:hex:20].css'))

    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      favicon: 'src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // Note that you can add custom options here if you need to handle other custom logic in index.html
      // To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
      trackJSToken: ''
    }))

    webpackConfig.module.rules.push({
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      })

    webpackConfig.module.rules.push({
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      })

    webpackConfig.module.rules.push({
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
              name: '[name].[ext]'
            }
          }
        ]
      })

    webpackConfig.module.rules.push({
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream',
              name: '[name].[ext]'
            }
          }
        ]
      })

    webpackConfig.module.rules.push({
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
              name: '[name].[ext]'
            }
          }
        ]
      })

    webpackConfig.module.rules.push({
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      })

    webpackConfig.module.rules.push({
        test: /(\.css|\.scss|\.sass)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer')
                ],
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, 'src', 'scss')],
                sourceMap: true
              }
            }
          ]
        })
      })

  } else {

    // webpackConfig.plugins.push(
    //   new Webpack.HotModuleReplacementPlugin()
    // );

  //   webpackConfig.module.rules.push(
  //     {
  //     test: /\.s?css$/i,
  //     use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
  //   }
  //   {
  //     test: /\.js$/,
  //     use: 'eslint-loader',
  //     exclude: /node_modules/
  //   }
  // );

    webpackConfig.devServer = {
      contentBase: dest,
      hot: true,
      port: options.port,
      inline: true
    };

  }

  return webpackConfig;

};
