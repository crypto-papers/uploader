const paths = require('./paths');

const setPresets = env => {
  if (env === 'renderer') {
    return [['@babel/preset-env', { modules: false }], '@babel/preset-react'];
  }

  return ['@babel/preset-env'];
};

const babelConfig = env => ({
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    [
      'babel-plugin-react-css-modules',
      {
        context: paths.renderer,
        filetypes: {
          '.scss': {
            plugins: ['postcss-nested'],
            syntax: 'postcss-scss',
          },
        },
        generateScopedName: '[local]-[hash:base64:10]',
      },
    ],
  ],
  presets: setPresets(env),
});

module.exports = {
  babelConfig,
};
