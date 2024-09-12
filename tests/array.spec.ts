/**
 * @Author: Mojie
 * @Date: 2021-11-04 10:14:14
 */

import { describe, expect, it } from 'vitest'

import { head, last, toArray } from '../src/array'

describe('array Utils', () => {
  it('toArray', () => {
    expect(toArray({ a: 1 })).toEqual([{ a: 1 }])
    expect(toArray([1, 2])).toEqual([1, 2])
    expect(toArray(undefined)).toEqual([])
    expect(toArray(null)).toEqual([])
    expect(toArray(1212)).toEqual([1212])
    expect(toArray('abc')).toEqual(['abc'])
  })
  it('head', () => {
    expect(head([1, 2, 3])).toEqual(1)
    expect(head([{ a: 1 }, { b: 2 }])).toEqual({ a: 1 })
    expect(head([])).toEqual(undefined)
  })
  it('last', () => {
    expect(last([1, 2, 3])).toEqual(3)
    expect(last([{ a: 1 }, { b: 2 }])).toEqual({ b: 2 })
    expect(last([])).toEqual(undefined)
  })
})
