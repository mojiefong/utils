/**
 * @Author: Mojie
 * @Date: 2021-11-04 10:14:14
 */

import { toArray, groupBy, head, last } from '../array'

describe('Array Utils', () => {
  test('toArray', () => {
    expect(toArray({ a: 1 })).toEqual([{ a: 1 }])
    expect(toArray([1, 2])).toEqual([1, 2])
    expect(toArray(undefined)).toEqual([])
    expect(toArray(null)).toEqual([])
    expect(toArray(1212)).toEqual([1212])
    expect(toArray('abc')).toEqual(['abc'])
  })
  test('groupBy', () => {
    expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({
      '3': ['one', 'two'],
      '5': ['three'],
    })
    expect(
      groupBy(
        [
          { branch: 'audi', model: 'q8', year: '2019' },
          { branch: 'audi', model: 'rs7', year: '2020' },
          { branch: 'ford', model: 'mustang', year: '2019' },
          { branch: 'ford', model: 'explorer', year: '2020' },
          { branch: 'bmw', model: 'x7', year: '2020' },
        ],
        'branch'
      )
    ).toEqual({
      audi: [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' },
      ],
      bmw: [{ branch: 'bmw', model: 'x7', year: '2020' }],
      ford: [
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' },
      ],
    })
  })
  test('head', () => {
    expect(head([1, 2, 3])).toEqual(1)
    expect(head([{ a: 1 }, { b: 2 }])).toEqual({ a: 1 })
    expect(head([])).toEqual(undefined)
  })
  test('last', () => {
    expect(last([1, 2, 3])).toEqual(3)
    expect(last([{ a: 1 }, { b: 2 }])).toEqual({ b: 2 })
    expect(last([])).toEqual(undefined)
  })
})
