/**
 * @Author: Mojie
 * @Date: 2021-11-03 11:18:39
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'prettier/prettier': 'error',
    'no-var': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        line: { markers: ['/'], exceptions: ['-', '+'] },
        block: { markers: ['!'], exceptions: ['*'], balanced: true },
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/ban-types': 'off',
  },
}
