const OFF = 0;
const WARN = 1;
const ERROR = 2;

// disable all a11y rules
const a11yOff = Object
  .keys(require('eslint-plugin-jsx-a11y').rules)
  .reduce((acc, rule) => ({ ...acc, [`jsx-a11y/${rule}`]: OFF }), {});

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'airbnb/hooks'],
  plugins: ['babel'],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
  },
  rules: {
    'react/prop-types': OFF,
    'react/sort-comp': WARN,
    'react/jsx-props-no-spreading': WARN,
    'react/state-in-constructor': OFF,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js', '.jsx'] }],
    ...a11yOff,

    'no-plusplus': [ERROR, { allowForLoopAfterthoughts: true }],
    'react/no-did-update-set-state': WARN, // setState in DidUpdate should be used in condition
    'react/no-array-index-key': WARN,
    'react/jsx-one-expression-per-line': OFF,
    'max-classes-per-file': WARN,
    'arrow-parens': [ERROR, 'as-needed', { 'requireForBlockBody': true }],
    'no-unused-expressions': OFF,
    'babel/no-unused-expressions': [ERROR, {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],
  },
};
