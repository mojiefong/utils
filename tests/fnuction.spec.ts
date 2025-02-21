/**
 * @Author: Mojie
 * @Date: 2021-11-15 15:49:26
 */

import { describe, expect, it } from 'vitest'

import {
  decode,
  encode,
  parseQuery,
  sleep,
  stringifyQuery,
} from '../src/function'

describe('function Utils', () => {
  it('decode', () => {
    expect(decode('%E4%BD%A0%E5%A5%BD')).toEqual('你好')
  })

  it('encode', () => {
    expect(encode('你好')).toEqual('%E4%BD%A0%E5%A5%BD')
    expect(encode('!')).toEqual('%21')
  })

  it('parseQuery', () => {
    expect(parseQuery('a=1&b=2')).toEqual({ a: '1', b: '2' })
    expect(parseQuery('name=%E4%BD%A0%E5%A5%BD')).toEqual({ name: '你好' })
  })

  it('stringifyQuery', () => {
    expect(stringifyQuery({ a: 1, b: 2 })).toEqual('a=1&b=2')
    expect(stringifyQuery({ a: 1, b: false })).toEqual('a=1&b=false')
    expect(stringifyQuery({ name: '你好' })).toEqual('name=你好')

    expect(stringifyQuery({ name: '你好' }, {
      isEncode: true,
    })).toEqual('name=%E4%BD%A0%E5%A5%BD')

    expect(
      stringifyQuery({ a: null, b: undefined, c: 0, d: '', e: false }),
    ).toEqual('a=null&b=undefined&c=0&d=&e=false')

    expect(
      stringifyQuery({ width: '100px', height: '100px' }, {
        sep: ':',
        join: ';',
      }),
    ).toEqual('width:100px;height:100px')
  })

  it('sleep', async () => {
    const start = Date.now()
    await sleep(1000)
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(1000)
  })
})
