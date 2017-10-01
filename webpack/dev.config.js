'use strict'

const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const common = require('./common')
const config = require('../config/config.dev.json')
module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    common.entry.main
  ],

  externals: {
    Config: JSON.stringify(config)
  },

  output: Object.assign({}, common.output, {
    filename: '[name].js',
    publicPath: ''
  }),

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),

    new HtmlPlugin(common.htmlPluginConfig)
  ],

  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      common.cssLoader,
      common.fileLoader,
      common.urlLoader
    ]
  },

  resolve: common.resolve
}
