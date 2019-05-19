module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['jest'],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
};
