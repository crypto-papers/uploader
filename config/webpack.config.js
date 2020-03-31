const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babel = require('./babel');
const paths = require('./paths');
const plugins = require('./plugins');

module.exports = (env, argv) => {
  const babelLoader = {
    loader: 'babel-loader',
    options: babel.babelConfig(env),
  };

  return {
    devtool: 'inline-source-map',
    entry: {
      [env]: env === 'main' ? paths.appMain : paths.appRenderer,
    },
    mode: argv.mode,
    module: {
      rules: [
        {
          exclude: /node_modules/u,
          test: /\.ts(?<tsx>x?)$/u,
          use: [babelLoader, { loader: 'ts-loader' }],
        },
        {
          include: /\.module\.(?<type>sa|sc|c)ss$/u,
          test: /\.(?<type>sa|sc|c)ss$/u,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  localIdentName: '[local]-[hash:base64:10]',
                  mode: 'local',
                },
                url: true,
              },
            },
            'resolve-url-loader',
            'sass-loader',
          ],
        },
        {
          exclude: /\.module\.(?<type>sa|sc|c)ss$/u,
          test: /\.(?<type>sa|sc|c)ss$/u,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader'],
        },
        {
          test: /\.svg$/u,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[hash].[ext]',
              },
            },
          ],
        },
      ],
    },
    output: {
      filename: '[name].js',
      path: paths.appDist,
      publicPath: './',
    },
    plugins: plugins.loadPlugins(env),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    target: env === 'main' ? 'electron-main' : 'electron-renderer',
  };
};
