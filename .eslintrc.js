const OFF = 0;
const WARN = 1;
const ERROR = 2;

// disable all a11y rules
const a11yOff = Object
  .keys(require('eslint-plugin-jsx-a11y').rules)
  .reduce((acc, rule) => ({ ...acc, [`jsx-a11y/${rule}`]: OFF }), {});

module.exports = {
  root: true,
  extends: ['airbnb-typescript', 'airbnb/hooks'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es2020: true,
  },
  ignorePatterns: ['/scripts/*', '/config/*', '.eslintrc.js'],
  globals: {
  },
  rules: {
    'react/prop-types': OFF,
    'react/sort-comp': WARN,
    'react/jsx-props-no-spreading': WARN,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    ...a11yOff,

    'no-plusplus': [ERROR, { allowForLoopAfterthoughts: true }],
    'react/no-array-index-key': WARN,
    'react/jsx-one-expression-per-line': OFF,
    'arrow-parens': [ERROR, 'as-needed', { 'requireForBlockBody': true }],
  },
};
