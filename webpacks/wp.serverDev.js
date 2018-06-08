const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./wp.serverCommon');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: './src/server',
    inline: true,
    port: 3000 
  }
  
});
