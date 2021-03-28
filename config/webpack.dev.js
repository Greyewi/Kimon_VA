const path = require('./paths')

const {merge} = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.base,
    open: true,
    compress: true,
    hot: true,
    port: 3000
  }
})