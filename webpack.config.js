/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-enable */

const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.(png|jpg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]-[hash][ext]',
        },
      },
    ],
  },
};
