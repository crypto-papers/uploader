const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babel = require('./babel');
const paths = require('./paths');

module.exports = env => {
  const babelLoader = {
    loader: 'babel-loader',
    options: babel.babelConfig(env),
  };

  return {
    devtool: 'inline-source-map',
    entry: {
      [env]: env === 'main' ? paths.appMain : paths.appRenderer,
    },
    module: {
      rules: [
        {
          exclude: /node_modules/u,
          test: /\.ts(?<tsx>x?)$/u,
          use: [babelLoader, { loader: 'ts-loader' }],
        },
        {
          test: /\.(?<type>sa|sc|c)ss$/u,
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
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    target: env === 'main' ? 'electron-main' : 'electron-renderer',
  };
};
