/**
 * @Author: Mojie
 * @Date: 2021-11-04 14:39:20
 */

import { describe, expect, it } from 'vitest'
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

describe('is Utils', () => {
  it('getTypeof', () => {
    expect(getTypeof({})).toEqual('Object')
    expect(getTypeof([])).toEqual('Array')
  })
  it('isWindow', () => {
    expect(isWindow(123)).toEqual(false)
    expect(isWindow(this)).toEqual(false)
    expect(isWindow('123')).toEqual(false)
  })
  it('isString', () => {
    expect(isString(123)).toEqual(false)
    expect(isString('123')).toEqual(true)
    expect(isString(null)).toEqual(false)
    expect(isString({ a: 1 })).toEqual(false)
  })
  it('isNumber', () => {
    expect(isNumber('123')).toEqual(false)
    expect(isNumber(123)).toEqual(true)
    expect(isNumber(123.123)).toEqual(true)
    expect(isNumber(Number.NaN)).toEqual(true)
    expect(isNumber(Number.POSITIVE_INFINITY)).toEqual(true)
  })
  it('isBoolean', () => {
    expect(isBoolean(false)).toEqual(true)
    expect(isBoolean(true)).toEqual(true)
    expect(isBoolean(1)).toEqual(false)
  })
  it('isNull', () => {
    expect(isNull(null)).toEqual(true)
    expect(isNull('null')).toEqual(false)
    expect(isNull(undefined)).toEqual(false)
  })
  it('isUndefined', () => {
    expect(isUndefined(undefined)).toEqual(true)
    expect(isUndefined('undefined')).toEqual(false)
    expect(isUndefined(null)).toEqual(false)
  })
  it('isSymbol', () => {
    expect(isSymbol(Symbol('test'))).toEqual(true)
  })
  it('isFunction', () => {
    expect(isFunction(Promise)).toEqual(true)
    expect(isFunction(Object.toString)).toEqual(true)
    expect(isFunction(null)).toEqual(false)
  })
  it('isRegExp', () => {
    expect(isRegExp(/./)).toEqual(true)
    // eslint-disable-next-line prefer-regex-literals
    expect(isRegExp(new RegExp('.'))).toEqual(true)
  })
  it('isPromise', () => {
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
  it('isElement', () => {
    expect(isElement(document)).toEqual(false)
    expect(isElement(document.all)).toEqual(false)
    expect(isElement(document.body)).toEqual(true)
  })
  it('isObject', () => {
    expect(isObject({})).toEqual(true)
    expect(isObject({ a: 1 })).toEqual(true)
  })
  it('isMap', () => {
    expect(isMap(new Map())).toEqual(true)
  })
  it('isSet', () => {
    expect(isSet(new Set())).toEqual(true)
  })
  it('isNullOrUndef', () => {
    expect(isNullOrUndef(null)).toEqual(true)
    expect(isNullOrUndef(undefined)).toEqual(true)
  })
  it('isDate', () => {
    expect(isDate(new Date())).toEqual(true)
  })
  it('isEven', () => {
    expect(isEven(2)).toEqual(true)
    expect(isEven(1)).toEqual(false)
    expect(isEven(0)).toEqual(true)
    expect(isEven(-1)).toEqual(false)
    expect(isEven(-2)).toEqual(true)
  })
  it('isOdd', () => {
    expect(isOdd(1)).toEqual(true)
    expect(isOdd(2)).toEqual(false)
    expect(isOdd(0)).toEqual(false)
  })
  it('isPositive', () => {
    expect(isPositive(-1)).toEqual(false)
    expect(isPositive(1)).toEqual(true)
    expect(isPositive(0)).toEqual(false)
  })
  it('isNegative', () => {
    expect(isNegative(-1)).toEqual(true)
    expect(isNegative(1)).toEqual(false)
    expect(isNegative(0)).toEqual(false)
  })
  it('isEmpty', () => {
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
  it('isFile', () => {
    expect(isFile(new File([new Blob()], 'test'))).toEqual(true)
    expect(isFile(new File(['foo'], 'test'))).toEqual(true)
  })
  it('isBlob', () => {
    expect(isBlob(new Blob())).toEqual(true)
  })
})
