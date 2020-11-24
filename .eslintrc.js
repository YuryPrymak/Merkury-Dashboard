module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'max-len': ['error', {
      'code': 110,
      'ignoreTemplateLiterals': true,
      'ignoreUrls': true,
      'ignorePattern': 'd="*?"'
    }],
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'keyword-spacing': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off',
    'space-before-function-paren': 'off',
    'no-unused-expressions': 'off',
    'no-useless-constructor': 'off'
  },
};
