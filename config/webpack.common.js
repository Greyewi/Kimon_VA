const path = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.base,
    open: true,
    compress: true,
    hot: true,
    port: 3000
  },
  entry: {
    main: path.mainJs
  },
  output: {
    path: path.base,
    filename: "[name].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Wishlist',
      template: path.template,
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: [/\.css$/, /\.scss$/],
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/],
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
    ]
  }
}