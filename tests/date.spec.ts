/**
 * @Author: Mojie
 * @Date: 2021-11-08 16:38:18
 */

import { describe, test, expect } from 'vitest'
import { formatDateTime, formatDate, formatTime } from '../src/date'

describe('Date Time Utils', () => {
  test('formatDateTime', () => {
    expect(formatDateTime(1636360782649)).toEqual('2021-11-08 16:39:42')
    expect(formatDateTime('2021-11-08 16:39:42')).toEqual('2021-11-08 16:39:42')
    expect(formatDateTime(1636360935 * 1000)).toEqual('2021-11-08 16:42:15')
  })

  test('formatDate', () => {
    expect(formatDate(1636360782649)).toEqual('2021-11-08')
    expect(formatDate('2021-11-08 16:39:42')).toEqual('2021-11-08')
    expect(formatDate(1636360935 * 1000)).toEqual('2021-11-08')
    expect(formatDate('2021-11-19T16:00:00+00:00')).toEqual('2021-11-20')
  })

  test('formatTime', () => {
    expect(formatTime(1636360782649)).toEqual('16:39:42')
    expect(formatTime('2021-11-08 16:39:42')).toEqual('16:39:42')
    expect(formatTime(1636360935 * 1000)).toEqual('16:42:15')
    expect(formatTime('2021-11-19T16:00:00+00:00')).toEqual('00:00:00')
  })
})
