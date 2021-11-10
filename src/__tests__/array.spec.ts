/**
 * @Author: Mojie
 * @Date: 2021-11-04 10:14:14
 */

import { toArray } from '../array'

describe('Array Utils', () => {
  test('toArray', () => {
    expect(toArray({ a: 1 })).toEqual([{ a: 1 }])
    expect(toArray([1, 2])).toEqual([1, 2])
    expect(toArray(undefined)).toEqual([])
    expect(toArray(null)).toEqual([])
    expect(toArray(1212)).toEqual([1212])
    expect(toArray('abc')).toEqual(['abc'])
  })
})
