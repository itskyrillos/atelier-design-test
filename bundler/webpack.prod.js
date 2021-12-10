const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(
  commonConfiguration,
  {
    mode: 'production',
    plugins:
        [
          new MiniCssExtractPlugin(),
          new CleanWebpackPlugin()
        ],
    module: {
      rules: [
        // CSS
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        }
      ]
    }

  }
)
