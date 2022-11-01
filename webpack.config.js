const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackLighthousePlugin = require('webpack-lighthouse-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new WebpackLighthousePlugin({
      url: 'http://localhost:8080'
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};