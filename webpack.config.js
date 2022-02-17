const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpack = require('webpack');

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
        test: /\.jsx?/, //might need to do /.(js|jsx)$/
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/, //had this: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
        //loader: 'style-loader!css-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'index.html') }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/dist',
    },
    proxy: { '/api': 'http://localhost:3000' },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
};