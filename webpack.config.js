const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
  },
  mode: process.env.NODE_ENV,
  //mode: 'development',
  module: {
    rules: [
      {
      test: /\.jsx?/,   //might need to do /.(js|jsx)$/
      exclude: /node_modules/,
      loader: 'babel-loader'
      },
      {
      test: /.(css|scss)$/,
      exclude: /node_modules/,
      use: ['style-loader, css-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.join(__dirname, 'index.html')})
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/dist',
    },
    proxy: { '/api': 'http://localhost:3000', },
  },
}