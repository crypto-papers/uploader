const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
          test: /\.ts(x?)$/,
          use: 'ts-loader',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    target: env === 'main' ? 'electron-main' : 'electron-renderer',
  };
};
