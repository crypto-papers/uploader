const webpack = require( 'webpack' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' )
const paths = require( './paths' );

module.exports = {
  entry: paths.appIndex,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  output: {
    path: paths.appDist,
    publicPath: '/',
    filename: './bundle.min.js'
  },
  resolve: {
    extensions: [
      '*', '.js', '.jsx'
    ]
  }
}