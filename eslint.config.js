/**
 * @Author: Mojie
 * @Date: 2021-11-03 11:18:39
 */

import antfu from '@antfu/eslint-config'

export default antfu({
  gitignore: false,
  ignores: [
    'dist',
    'docs',
    'docs-html',
    'node_modules',
  ],
  rules: {
    'antfu/if-newline': 'off',
    'perfectionist/sort-imports': ['error', {
      groups: [
        'type',
        ['builtin', 'external', 'internal'],
        ['parent', 'sibling', 'index'],
        'object',
        'unknown',
        'side-effect-style',
      ],
    }],
  },
})
