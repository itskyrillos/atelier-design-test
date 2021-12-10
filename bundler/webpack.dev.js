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
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-preset-env',
                  'autoprefixer',
                  {
                    // Options
                  }
                ]
              ]
            }
          }
        }, 'sass-loader']
      }
    ]
  }
})
