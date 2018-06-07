const webpack = require('webpack'); 
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const common = require('./wp.clientCommon');
const assetsPath = path.resolve(__dirname, '../serverDist');

module.exports = merge(common, {
    mode: 'production',
    target: 'node',
    externals: [nodeExternals()],
    entry: [
      'babel-polyfill',
     '../src/server/server.js'
    ],
    output: {
      path: assetsPath,
      filename: 'server.bundle.js',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.css$/, 
          use: {
            loader: 'css-loader',
            options: {
                plugins:['css-modules-transform']
            }
          }
        }, 
      ]
    },
};
