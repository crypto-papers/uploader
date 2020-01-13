const paths = require('./paths');

module.exports = {
  devtool: 'inline-source-map',
  entry: paths.appIndex,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: paths.appDist,
  },
};
