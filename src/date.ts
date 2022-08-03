/**
 * @Author: Mojie
 * @Date: 2021-11-05 10:58:20
 */

import type { ConfigType } from 'dayjs'
import dayjs from 'dayjs'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'
const TIME_FORMAT = 'HH:mm:ss'

/**
 * 格式化日期和时间
 * @param date 需要处理的日期和时间
 * @param format 格式化规则
 * @category Date
 * @returns 格式化后的日期和时间
 * @example
 * ``` typescript
 * formatDateTime(1636360782649) // '2021-11-08 16:39:42'
 * formatDateTime(1636360935 * 1000) // '2021-11-08 16:42:15'
 * formatDateTime('2021-11-19T16:00:00+00:00', 'YYYY-MM-DD') // '2021-11-20'
 * ```
 */
export function formatDateTime(date: ConfigType, format = DATE_TIME_FORMAT) {
  return dayjs(date).format(format)
}

/**
 * 格式化日期
 * @param date 需要处理的日期
 * @param format 格式化规则
 * @category Date
 * @returns 格式化后的日期
 * @example
 * ``` typescript
 * formatDate(1636360782649) // '2021-11-08'
 * formatDate(1636360935 * 1000) // '2021-11-08'
 * formatDate('2021-11-19T16:00:00+00:00') // '2021-11-20'
 * ```
 */
export function formatDate(date: ConfigType, format = DATE_FORMAT) {
  return dayjs(date).format(format)
}

/**
 * 格式化时间
 * @param date 需要处理的时间
 * @param format 格式化规则
 * @category Date
 * @returns 格式化后的时间
 * @example
 * ``` typescript
 * formatTime(1636360782649) // '16:39:42'
 * formatTime(1636360935 * 1000) // '16:42:15'
 * formatTime('2021-11-19T16:00:00+00:00') // '00:00:00'
 * ```
 */
export function formatTime(date: ConfigType, format = TIME_FORMAT) {
  return dayjs(date).format(format)
}
