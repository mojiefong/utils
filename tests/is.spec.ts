/**
 * @Author: Mojie
 * @Date: 2021-11-04 14:39:20
 */

import { describe, expect, test } from 'vitest'
import {
  getTypeof,
  isBlob,
  isBoolean,
  isDate,
  isElement,
  isEmpty,
  isEven,
  isFile,
  isFunction,
  isMap,
  isNegative,
  isNull,
  isNullOrUndef,
  isNumber,
  isObject,
  isOdd,
  isPositive,
  isPromise,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  isWindow,
} from '../src/is'

describe('Is Utils', () => {
  test('getTypeof', () => {
    expect(getTypeof({})).toEqual('Object')
    expect(getTypeof([])).toEqual('Array')
  })
  test('isWindow', () => {
    expect(isWindow(123)).toEqual(false)
    // eslint-disable-next-line @typescript-eslint/no-invalid-this
    expect(isWindow(this)).toEqual(false)
    expect(isWindow('123')).toEqual(false)
  })
  test('isString', () => {
    expect(isString(123)).toEqual(false)
    expect(isString('123')).toEqual(true)
    expect(isString(null)).toEqual(false)
    expect(isString({ a: 1 })).toEqual(false)
  })
  test('isNumber', () => {
    expect(isNumber('123')).toEqual(false)
    expect(isNumber(123)).toEqual(true)
    expect(isNumber(123.123)).toEqual(true)
    expect(isNumber(NaN)).toEqual(true)
    expect(isNumber(Infinity)).toEqual(true)
  })
  test('isBoolean', () => {
    expect(isBoolean(false)).toEqual(true)
    expect(isBoolean(true)).toEqual(true)
    expect(isBoolean(1)).toEqual(false)
  })
  test('isNull', () => {
    expect(isNull(null)).toEqual(true)
    expect(isNull('null')).toEqual(false)
    expect(isNull(undefined)).toEqual(false)
  })
  test('isUndefined', () => {
    expect(isUndefined(undefined)).toEqual(true)
    expect(isUndefined('undefined')).toEqual(false)
    expect(isUndefined(null)).toEqual(false)
  })
  test('isSymbol', () => {
    expect(isSymbol(Symbol('test'))).toEqual(true)
  })
  test('isFunction', () => {
    expect(isFunction(Promise)).toEqual(true)
    expect(isFunction(Object.toString)).toEqual(true)
    expect(isFunction(null)).toEqual(false)
  })
  test('isRegExp', () => {
    expect(isRegExp(/./)).toEqual(true)
    // eslint-disable-next-line prefer-regex-literals
    expect(isRegExp(new RegExp('.'))).toEqual(true)
  })
  test('isPromise', () => {
    expect(isPromise(Promise.resolve())).toEqual(true)
    expect(
      isPromise(
        new Promise((resolve) => {
          resolve(1)
        }),
      ),
    ).toEqual(true)
    expect(
      isPromise(
        new Promise((resolve, reject) => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('reject')
        }).catch(() => {
          return false
        }),
      ),
    ).toEqual(true)
  })

  // @vitest-environment jsdom
  test('isElement', () => {
    expect(isElement(document)).toEqual(false)
    expect(isElement(document.all)).toEqual(false)
    expect(isElement(document.body)).toEqual(true)
  })
  test('isObject', () => {
    expect(isObject({})).toEqual(true)
    expect(isObject({ a: 1 })).toEqual(true)
  })
  test('isMap', () => {
    expect(isMap(new Map())).toEqual(true)
  })
  test('isSet', () => {
    expect(isSet(new Set())).toEqual(true)
  })
  test('isNullOrUndef', () => {
    expect(isNullOrUndef(null)).toEqual(true)
    expect(isNullOrUndef(undefined)).toEqual(true)
  })
  test('isDate', () => {
    expect(isDate(new Date())).toEqual(true)
  })
  test('isEven', () => {
    expect(isEven(2)).toEqual(true)
    expect(isEven(1)).toEqual(false)
    expect(isEven(0)).toEqual(true)
    expect(isEven(-1)).toEqual(false)
    expect(isEven(-2)).toEqual(true)
  })
  test('isOdd', () => {
    expect(isOdd(1)).toEqual(true)
    expect(isOdd(2)).toEqual(false)
    expect(isOdd(0)).toEqual(false)
  })
  test('isPositive', () => {
    expect(isPositive(-1)).toEqual(false)
    expect(isPositive(1)).toEqual(true)
    expect(isPositive(0)).toEqual(false)
  })
  test('isNegative', () => {
    expect(isNegative(-1)).toEqual(true)
    expect(isNegative(1)).toEqual(false)
    expect(isNegative(0)).toEqual(false)
  })
  test('isEmpty', () => {
    expect(isEmpty([])).toEqual(true)
    expect(isEmpty([1])).toEqual(false)
    expect(isEmpty({})).toEqual(true)
    expect(isEmpty({ a: 1 })).toEqual(false)
    expect(isEmpty('')).toEqual(true)
    expect(isEmpty(null)).toEqual(true)
    expect(isEmpty(undefined)).toEqual(true)
    expect(isEmpty(0)).toEqual(false)
    expect(isEmpty(false)).toEqual(false)
  })
  test('isFile', () => {
    expect(isFile(new File([new Blob()], 'test'))).toEqual(true)
    expect(isFile(new File(['foo'], 'test'))).toEqual(true)
  })
  test('isBlob', () => {
    expect(isBlob(new Blob())).toEqual(true)
  })
})
