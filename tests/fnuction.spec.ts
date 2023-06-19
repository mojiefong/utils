/**
 * @Author: Mojie
 * @Date: 2021-11-15 15:49:26
 */

import { describe, expect, test } from 'vitest'
import { decode, encode, parseQuery, stringifyQuery } from '../src/function'

describe('Function Utils', () => {
  test('decode', () => {
    expect(decode('%E4%BD%A0%E5%A5%BD')).toEqual('你好')
  })
  test('encode', () => {
    expect(encode('你好')).toEqual('%E4%BD%A0%E5%A5%BD')
    expect(encode('!')).toEqual('%21')
  })
  test('parseQuery', () => {
    expect(parseQuery('a=1&b=2')).toEqual({ a: '1', b: '2' })
    expect(parseQuery('name=%E6%9D%B0')).toEqual({ name: '杰' })
  })
  test('stringifyQuery', () => {
    expect(stringifyQuery({ a: 1, b: 2 })).toEqual('a=1&b=2')
    expect(stringifyQuery({ a: 1, b: false })).toEqual('a=1&b=false')
    expect(
      stringifyQuery({ a: null, b: undefined, c: 0, d: '', e: false }),
    ).toEqual('a=null&b=undefined&c=0&d=&e=false')
    expect(stringifyQuery({ name: '杰' })).toEqual('name=杰')
    expect(stringifyQuery({ name: '杰' }, true)).toEqual('name=%E6%9D%B0')
    expect(
      stringifyQuery({ width: '100px', height: '100px' }, false, ':', ';'),
    ).toEqual('width:100px;height:100px')
  })
})
