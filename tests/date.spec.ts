/**
 * @Author: Mojie
 * @Date: 2021-11-08 16:38:18
 */

import { describe, test, expect, vi } from 'vitest'
import {
  formatDate,
  DATE_FORMAT,
  getRecentDays,
  getRecentWeeks,
  getRecentQuarters,
  getRecentMonths,
  getDiff,
} from '../src/date'

describe('Date Time Utils', () => {
  const date = new Date(2023, 0, 16)
  vi.setSystemTime(date)

  test('formatDate', () => {
    expect(formatDate(1636360782649)).toEqual('2021-11-08 16:39:42')
    expect(formatDate('2021-11-08 16:39:42')).toEqual('2021-11-08 16:39:42')
    expect(formatDate(1636360935)).toEqual('2021-11-08 16:42:15')
    expect(formatDate('2021-11-19T16:00:00+00:00', DATE_FORMAT)).toEqual(
      '2021-11-20'
    )
  })

  test('getRecentDays', () => {
    expect(getRecentDays(1, '2021-11-08 16:39:42')).toEqual([
      '2021-11-09 00:00:00',
      '2021-11-09 23:59:59',
      '2021-11-09 16:39:42',
    ])
    expect(getRecentDays(-2, '2021-11-08 16:39:42')).toEqual([
      '2021-11-06 00:00:00',
      '2021-11-06 23:59:59',
      '2021-11-06 16:39:42',
    ])
    expect(getRecentDays(3, '2021-11-08 16:39:42')).toEqual([
      '2021-11-11 00:00:00',
      '2021-11-11 23:59:59',
      '2021-11-11 16:39:42',
    ])
  })

  test('getRecentWeeks', () => {
    expect(getRecentWeeks()).toEqual([
      '2023-01-16 00:00:00',
      '2023-01-22 23:59:59',
    ])
    expect(getRecentWeeks(-1)).toEqual([
      '2023-01-09 00:00:00',
      '2023-01-15 23:59:59',
    ])
    expect(getRecentWeeks(1)).toEqual([
      '2023-01-23 00:00:00',
      '2023-01-29 23:59:59',
    ])
  })

  test('getRecentQuarters', () => {
    expect(getRecentQuarters()).toEqual([
      '2023-01-01 00:00:00',
      '2023-03-31 23:59:59',
    ])
    expect(getRecentQuarters(-1)).toEqual([
      '2022-10-01 00:00:00',
      '2022-12-31 23:59:59',
    ])
    expect(getRecentQuarters(1)).toEqual([
      '2023-04-01 00:00:00',
      '2023-06-30 23:59:59',
    ])
  })

  test('getRecentMonths', () => {
    expect(getRecentMonths()).toEqual([
      '2023-01-01 00:00:00',
      '2023-01-31 23:59:59',
    ])
    expect(getRecentMonths(-1)).toEqual([
      '2022-12-01 00:00:00',
      '2022-12-31 23:59:59',
    ])
    expect(getRecentMonths(1)).toEqual([
      '2023-02-01 00:00:00',
      '2023-02-28 23:59:59',
    ])
  })

  test('getDiff', () => {
    expect(getDiff('2022-10-01', '2022-12-31')).toEqual(91)
    expect(getDiff('2022-10-01', '2022-12-31', 'month')).toEqual(2)
    expect(getDiff('2022-10-01', '2022-10-02', 'hour')).toEqual(24)
  })
})
