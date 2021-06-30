const { merge }= require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base.js')

const webpackconfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-soure-map',
  stats: {
    children: false
  }

})

module.exports = webpackconfig