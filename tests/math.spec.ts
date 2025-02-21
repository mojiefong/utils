/**
 * @Author: Mojie
 * @Date: 2021-11-08 16:50:44
 */

import { describe, expect, it } from 'vitest'

import {
  bytesToSize,
  maxNumFormat,
  randomColor,
  randomHexColor,
  randomStr,
  round,
  toNumber,
  toThousands,
  uuid,
} from '../src/math'

describe('math Utils', () => {
  it('toThousands', () => {
    expect(toThousands(1000)).toEqual('1,000')
    expect(toThousands(1234.123456789)).toEqual('1,234.123456789')
    expect(toThousands(0)).toEqual(0)
    expect(toThousands('$1234')).toEqual('$1,234')
  })

  it('bytesToSize', () => {
    expect(bytesToSize(1000)).toEqual('1000.00 B')
    expect(bytesToSize(1024)).toEqual('1.00 KB')
    expect(bytesToSize(1024 + 10)).toEqual('1.01 KB')
    expect(bytesToSize(1024 * 1024)).toEqual('1.00 MB')
    expect(bytesToSize(1024 ** 3)).toEqual('1.00 GB')
  })

  it('maxNumFormat', () => {
    expect(maxNumFormat(99, 99)).toEqual(99)
    expect(maxNumFormat(100, 99)).toEqual('99+')
    expect(maxNumFormat('100', 99)).toEqual('99+')
  })

  it('toNumber', () => {
    expect(toNumber('12')).toEqual(12)
    expect(toNumber('1000')).toEqual(1000)
    expect(toNumber('123.123456789')).toEqual(123.123456789)
  })

  it('round', () => {
    expect(round(12.1)).toEqual(12)
    expect(round(12.5)).toEqual(13)
    expect(round(12.55, 1)).toEqual(12.6)
    expect(round(12.514, 2)).toEqual(12.51)
    expect(round(12.5144, 3)).toEqual(12.514)
    expect(round('18.888', 2)).toEqual(18.89)
  })

  it('uuid', () => {
    expect(uuid()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
  })

  it('randomHexColor', () => {
    expect(randomHexColor()).toMatch(/^#[0-9a-f]{6}$/i)
  })

  it('randomColor', () => {
    const colors = ['#FF0000', '#00FF00', '#0000FF']
    expect(randomColor(colors)).toBeOneOf(colors)
  })

  it('randomStr', () => {
    expect(randomStr(10)).toHaveLength(10)
    expect(randomStr(16)).toHaveLength(16)
  })
})
