const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dirSrc = 'src';
const dirDist = 'dist';
const dirPublic = 'public';

module.exports = {
  entry: path.resolve(__dirname, `${dirSrc}/index.js`),
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, dirDist),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `${dirPublic}/index.html`),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, `${dirPublic}/favicon/`), to: path.resolve(__dirname, `${dirDist}/favicon/`) },
        { from: path.resolve(__dirname, `${dirSrc}/assets/images/`), to: path.resolve(__dirname, `${dirDist}/assets/images/`) },
        { from: path.resolve(__dirname, `${dirSrc}/assets/icons/`), to: path.resolve(__dirname, `${dirDist}/assets/icons/`) },
        { from: path.resolve(__dirname, `${dirSrc}/assets/audios/`), to: path.resolve(__dirname, `${dirDist}/assets/audios/`) },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.mp3$/i,
        type: 'asset/resource',
      },
    ],
  },
};
