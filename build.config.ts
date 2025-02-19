/**
 * @Author: Mojie
 * @Date: 2025-02-19 12:13:56
 */

import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: 'node16',
  externals: [],
  clean: true,
  rollup: {
    inlineDependencies: true,
    dts: {
      respectExternal: true,
    },
  },
})
