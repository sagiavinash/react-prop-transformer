// vendor modules
var webpack = require('webpack');
var path = require('path');


var config = {
  entry: path.resolve(__dirname, './lib/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'react-prop-transformer.js',
    library: 'react-prop-transformer',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0', 'react'],
      },
    }],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
};

module.exports = config;
