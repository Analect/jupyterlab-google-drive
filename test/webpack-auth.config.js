var path = require('path');

module.exports = {
  entry: './build/index-auth.js',
  output: {
    path: __dirname + "/build",
    filename: "bundle-auth.js",
    publicPath: "./build/"
  },
  bail: true,
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.md$/, loader: 'raw-loader'},
      { test: /\.(jpg|png|gif)$/, use: 'file-loader' },
      { test: /\.html$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.ipynb$/, loader: 'json-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.js.map$/, loader: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  }
}