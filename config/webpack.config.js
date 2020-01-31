const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = env => {
  return {
    devtool: 'inline-source-map',
    entry: {
      [env]: env === 'main' ? paths.appMain : paths.appRenderer,
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: 'ts-loader',
        },
      ],
    },
    output: {
      filename: '[name].js',
      path: paths.appDist,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.appIndex,
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    target: env === 'main' ? 'electron-main' : 'electron-renderer',
  };
};
