const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./wp.clientCommon');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: './src/client',
    inline: true,
    port: 8080, 
    proxy: {
      '**': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure:false
      }
    }
  },
});