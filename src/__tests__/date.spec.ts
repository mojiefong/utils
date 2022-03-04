/**
 * @Author: Mojie
 * @Date: 2021-11-08 16:38:18
 */

import { formatDateTime } from '../date'

describe('Date Time Utils', () => {
  test('formatDateTime', () => {
    expect(formatDateTime(1636360782649)).toEqual('2021-11-08 16:39:42')
    expect(formatDateTime('2021-11-08 16:39:42')).toEqual('2021-11-08 16:39:42')
    expect(formatDateTime(1636360935 * 1000)).toEqual('2021-11-08 16:42:15')
  })
})
