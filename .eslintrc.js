module.exports = {
  extends: ['@cryptopapers/eslint-config', '@cryptopapers/eslint-config/react'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['dist/', 'node_modules/'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      extends: [
        '@cryptopapers/eslint-config',
        '@cryptopapers/eslint-config/react',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'import/extensions': [
          'error',
          'always',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/no-unassigned-import': [
          'error',
          {
            allow: ['**/*.css', '**/*.sass', '**/*.scss'],
          },
        ],
        'import/no-namespace': 'off',
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.ts', '.tsx'],
          },
        ],
        'react/prop-types': 'off',
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.css', '.js', '.json', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
