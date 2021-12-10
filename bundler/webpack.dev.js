const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')

module.exports = merge(commonConfiguration, {
  mode: 'development',
  devServer: {
    watchFiles: ['src/*.html']
  },
  module: {
    rules: [
      // CSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  }
})
