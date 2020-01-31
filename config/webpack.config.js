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
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: '[name].js',
      path: paths.appDist,
    },
    target: env === 'main' ? 'electron-main' : 'electron-renderer',
  };
};
