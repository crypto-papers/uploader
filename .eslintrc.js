module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
}