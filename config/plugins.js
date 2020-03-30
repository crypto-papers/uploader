const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./paths');

const css = env => {
  if (env === 'renderer') {
    return new MiniCssExtractPlugin({
      filename: '[name].css',
    });
  }

  return () => {};
};

const html = env => {
  if (env === 'renderer') {
    return new HtmlWebpackPlugin({
      template: paths.appHTML,
    });
  }

  return () => {};
};

const loadPlugins = env => [css(env), html(env)];

module.exports = {
  loadPlugins,
};
