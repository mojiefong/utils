/**
 * @Author: Mojie
 * @Date: 2021-11-12 20:07:42
 */

import {
  localGet,
  localHas,
  localRemove,
  localSet,
  sessionGet,
  sessionHas,
  sessionRemove,
  sessionSet,
  storageClear,
} from '../storage'

describe('Storage Utils', () => {
  // local
  test('localSet', () => {
    expect(localSet('foo', { foo: 1 }))
    expect(localSet('remove', { foo: 1 }))
  })
  test('localGet', () => {
    expect(localGet('foo')).toEqual({ foo: 1 })
    expect(localGet('foo1')).toEqual(null)
  })
  test('localRemove', () => {
    expect(localRemove('remove'))
    expect(localGet('remove')).toEqual(null)
    expect(localHas('remove')).toEqual(false)
  })
  test('localHas', () => {
    expect(localHas('foo')).toEqual(true)
    expect(localHas('foo1')).toEqual(false)
  })

  // session
  test('sessionSet', () => {
    expect(sessionSet('foo', { foo: 1 }))
    expect(sessionSet('remove', { foo: 1 }))
  })
  test('sessionGet', () => {
    expect(sessionGet('foo')).toEqual({ foo: 1 })
    expect(sessionGet('foo1')).toEqual(null)
  })
  test('sessionRemove', () => {
    expect(sessionRemove('remove'))
    expect(sessionGet('remove')).toEqual(null)
    expect(sessionHas('remove')).toEqual(false)
  })
  test('sessionHas', () => {
    expect(sessionHas('foo')).toEqual(true)
    expect(sessionHas('foo1')).toEqual(false)
  })

  // storage
  test('storageClear All', () => {
    expect(localSet('localClear1', 'localClear1'))
    expect(localSet('localClear2', 'localClear2'))
    expect(sessionSet('sessionClear1', 'sessionClear1'))
    expect(sessionSet('sessionClear2', 'sessionClear2'))
    expect(storageClear())
    expect(localHas('localClear1')).toEqual(false)
    expect(localHas('localClear2')).toEqual(false)
    expect(localHas('sessionClear1')).toEqual(false)
    expect(localHas('sessionClear2')).toEqual(false)
  })
  test('storageClear local', () => {
    expect(localSet('localClear1', 'localClear1'))
    expect(localSet('localClear2', 'localClear2'))
    expect(storageClear('local'))
    expect(localHas('localClear1')).toEqual(false)
    expect(localHas('localClear2')).toEqual(false)
  })
  test('storageClear session', () => {
    expect(sessionSet('sessionClear1', 'sessionClear1'))
    expect(sessionSet('sessionClear2', 'sessionClear2'))
    expect(storageClear())
    expect(localHas('sessionClear1')).toEqual(false)
    expect(localHas('sessionClear2')).toEqual(false)
  })
})
