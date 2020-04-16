const babel = require('./babel');

const babelConfig = babel.babelConfig('jest');

module.exports = {
  globals: {
    'ts-jest': {
      babelConfig,
    },
  },
  moduleNameMapper: {
    '\\.(c|sa|sc)ss$': '<rootDir>/src/__mocks__/style-mock.js',
  },
  preset: 'ts-jest',
  rootDir: '../',
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
};
