/**
 * @Author: Mojie
 * @Date: 2021-11-12 20:07:42
 */

import {
  getStorage,
  setStorage,
  removeStorage,
  hasStorage,
  clearStorage,
} from '../storage'

describe('Storage Utils', () => {
  // local
  test('local setStorage', () => {
    expect(setStorage('foo', { foo: 1 }))
    expect(setStorage('remove', { foo: 1 }))
  })
  test('local getStorage', () => {
    expect(getStorage('foo')).toEqual({ foo: 1 })
    expect(getStorage('foo1')).toEqual(null)
  })
  test('local removeStorage', () => {
    expect(removeStorage('remove'))
    expect(getStorage('remove')).toEqual(null)
    expect(hasStorage('remove')).toEqual(false)
  })
  test('local hasStorage', () => {
    expect(hasStorage('foo')).toEqual(true)
    expect(hasStorage('foo1')).toEqual(false)
  })

  // session
  test('session setStorage', () => {
    expect(setStorage('foo', { foo: 1 }, sessionStorage))
    expect(setStorage('remove', { foo: 1 }, sessionStorage))
  })
  test('session getStorage', () => {
    expect(getStorage('foo', sessionStorage)).toEqual({ foo: 1 })
    expect(getStorage('foo1', sessionStorage)).toEqual(null)
  })
  test('session removeStorage', () => {
    expect(removeStorage('remove', sessionStorage))
    expect(getStorage('remove', sessionStorage)).toEqual(null)
    expect(hasStorage('remove', sessionStorage)).toEqual(false)
  })
  test('session hasStorage', () => {
    expect(hasStorage('foo', sessionStorage)).toEqual(true)
    expect(hasStorage('foo1', sessionStorage)).toEqual(false)
  })

  test('storageClear local', () => {
    expect(setStorage('localClear1', 'localClear1'))
    expect(setStorage('localClear2', 'localClear2'))
    expect(clearStorage())
    expect(hasStorage('localClear1')).toEqual(false)
    expect(hasStorage('localClear2')).toEqual(false)
  })

  test('storageClear session', () => {
    expect(setStorage('sessionClear1', 'sessionClear1', sessionStorage))
    expect(setStorage('sessionClear2', 'sessionClear2', sessionStorage))
    expect(clearStorage(sessionStorage))
    expect(hasStorage('sessionClear1', sessionStorage)).toEqual(false)
    expect(hasStorage('sessionClear2', sessionStorage)).toEqual(false)
  })

  test('storageClear All', () => {
    expect(setStorage('localClear1', 'localClear1'))
    expect(setStorage('localClear2', 'localClear2'))
    expect(setStorage('sessionClear1', 'sessionClear1', sessionStorage))
    expect(setStorage('sessionClear2', 'sessionClear2', sessionStorage))
    expect(clearStorage(localStorage))
    expect(clearStorage(sessionStorage))
    expect(hasStorage('localClear1')).toEqual(false)
    expect(hasStorage('localClear2')).toEqual(false)
    expect(hasStorage('sessionClear1', sessionStorage)).toEqual(false)
    expect(hasStorage('sessionClear2', sessionStorage)).toEqual(false)
  })
})
