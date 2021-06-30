const { merge }= require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base.js')

const TerserWebpackPlugin = require('terser-webpack-plugin')
const {
  output
} = require('./webpack.config.base.js')

const webpackconfig = merge(baseWebpackConfig, {
  mode: 'production',
  stats: {
    children: false,
    warnings: false
  }, //不输出日志
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            drop_console: false,
            dead_code: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false
          },
          mangle: true
        },
        parallel: true,
        sourceMap: false
      })
    ],
    splitChunks: { //分包打包
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        },
      },
    },

  },
})

module.exports = webpackconfig