/**
 * @Author: Mojie
 * @Date: 2021-11-08 16:50:44
 */

import {
  thousandsFormat,
  bytesToSize,
  outOfNum,
  toNumber,
  getFileExtension,
} from '../math'

describe('Math Utils', () => {
  test('thousandsFormat', () => {
    expect(thousandsFormat(1000)).toEqual('1,000')
    expect(thousandsFormat(1234.123456789)).toEqual('1,234.123456789')
  })
  test('bytesToSize', () => {
    expect(bytesToSize(1000)).toEqual('1000.00 B')
    expect(bytesToSize(1024)).toEqual('1.00 KB')
    expect(bytesToSize(1024 + 10)).toEqual('1.01 KB')
    expect(bytesToSize(1024 * 1024)).toEqual('1.00 MB')
    expect(bytesToSize(1024 ** 3)).toEqual('1.00 GB')
  })
  test('outOfNum', () => {
    expect(outOfNum(99, 99)).toEqual(99)
    expect(outOfNum(100, 99)).toEqual('99+')
  })
  test('toNumber', () => {
    expect(toNumber('12')).toEqual(12)
    expect(toNumber('1000')).toEqual(1000)
    expect(toNumber('123.123456789')).toEqual(123.123456789)
  })
  test('getFileExtension', () => {
    expect(getFileExtension('utils.ts')).toEqual('ts')
    expect(getFileExtension('img.PNG')).toEqual('png')
  })
})
