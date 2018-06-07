const webpack = require('webpack');


/* Shared webpack between client and server.
*  - takes care of react code and images
*/

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react','env','stage-3'],
            plugins: ['transform-class-properties']
          }
        }
      },
        test: /\.(png|svg|jpg|gif)$/, 
        use: [
          {
            loader:'file-loader',
            options: {
              name: '[name].[ext]'

            }
          }
        ]
    ] 
  }
}
