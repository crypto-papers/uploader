const setPresets = env => {
  if (env === 'renderer') {
    return [['@babel/preset-env', { modules: false }], '@babel/preset-react'];
  }

  return ['@babel/preset-env'];
};

const babelConfig = env => ({
  plugins: ['@babel/plugin-proposal-class-properties'],
  presets: setPresets(env),
});

module.exports = {
  babelConfig,
};
