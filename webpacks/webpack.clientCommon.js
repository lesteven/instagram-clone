const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
constpath = require('path');
const assetsPath = path.resolve(__dirname, '../dist');


module.exports = merge(common, {
  entry: {
    client: ['babel-polyfill','../src/client/index.jsx']
  },
  output: {
    path: assetsPath,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      test: /\.css$/, 
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ]
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.css',
  })]


});
