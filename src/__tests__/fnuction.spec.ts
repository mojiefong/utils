/**
 * @Author: Mojie
 * @Date: 2021-11-15 15:49:26
 */

import {
  decode,
  encode,
  parseQuery,
  stringifyQuery,
  debounce,
  deepClone,
} from '../function'

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
    expect(stringifyQuery({ name: '杰' })).toEqual('name=杰')
    expect(stringifyQuery({ name: '杰' }, true)).toEqual('name=%E6%9D%B0')
  })

  jest.useFakeTimers()
  test('debounce', () => {
    const func = jest.fn()
    const debouncedFunc = debounce(func, 500)
    debouncedFunc()
    jest.advanceTimersByTime(300)
    debouncedFunc()
    jest.runAllTimers()
    expect(func).toBeCalledTimes(1)
  })

  test('deepClone', () => {
    expect(deepClone(null)).toEqual(null)
    expect(deepClone(undefined)).toEqual(undefined)
  })
  test('deepClone Object', () => {
    const obj = { foo: 'bar', obj: { a: 1, b: 2 } }
    const deepOjb = deepClone(obj)
    expect(obj.obj === deepOjb.obj).toEqual(false)
  })
  test('deepClone Array', () => {
    const arr = [{ foo: 'bar', obj: { a: 1, b: 2 } }]
    const deepArr = deepClone(arr)
    arr[0].obj.a = 3
    expect(deepArr).toEqual([{ foo: 'bar', obj: { a: 1, b: 2 } }])
    expect(arr[0].obj === deepArr[0].obj).toEqual(false)
  })
})
