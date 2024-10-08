/**
 * @Author: Mojie
 * @Date: 2022-04-08 16:02:54
 */

import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const entries = ['src/index.ts', 'src/date.ts']

export default [
  ...entries.map(input => ({
    input,
    output: [
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.mjs'),
        format: 'es',
      },
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.cjs'),
        format: 'cjs',
      },
    ],
    external: ['dayjs', 'dayjs/plugin/quarterOfYear'],
    plugins: [json(), esbuild(), resolve()],
  })),

  ...entries.map(input => ({
    input,
    output: {
      file: input.replace('src/', '').replace('.ts', '.d.ts'),
      format: 'es',
    },
    plugins: [
      input.endsWith('index.ts') ? dts({ respectExternal: true }) : dts(),
    ],
  })),
]
