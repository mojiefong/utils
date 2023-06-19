/**
 * @Author: Mojie
 * @Date: 2021-11-05 10:58:20
 */

import type { ConfigType, OpUnitType, QUnitType } from 'dayjs'
import dayjs from 'dayjs'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'

export const DATE_FORMAT = 'YYYY-MM-DD'
export const TIME_FORMAT = 'HH:mm:ss'
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`

/**
 * 格式化日期和时间
 * @param date 需要处理的日期和时间
 * @param format 格式化规则
 * @category Date
 * @returns 格式化后的日期和时间
 * @example
 * ``` typescript
 * formatDateTime(1636360782649) // '2021-11-08 16:39:42'
 * formatDateTime(1636360935) // '2021-11-08 16:42:15'
 * formatDateTime('2021-11-19T16:00:00+00:00', 'YYYY-MM-DD') // '2021-11-20'
 * ```
 */
export function formatDate(date: ConfigType, format = DATE_TIME_FORMAT) {
  return typeof date === 'number' && date.toString().length === 10
    ? dayjs.unix(date).format(format)
    : dayjs(date).format(format)
}

/**
 * 获取最近几天
 * @param value 时间量。正数代表未来时间，负数代表过去时间
 * @param date 指定时间。默认是当天
 * @param format 格式化规则
 * @category Date
 * @returns 返回一个数组，第一个返回指定的开始时间，第二个返回指定的结束时间，第三个返回指定的时间区间
 * @example
 * ``` typescript
 * // 获取明天的时间
 * getRecentDays(1, '2021-11-08 16:39:42') // ['2021-11-09 00:00:00', '2021-11-09 23:59:59', '2021-11-09 16:39:42']
 * // 获取2天前的时间
 * getRecentDays(-2, '2021-11-08 16:39:42') // ['2021-11-06 00:00:00', '2021-11-06 23:59:59', '2021-11-06 16:39:42']
 * // 获取3天后时间
 * getRecentDays(3, '2021-11-08 16:39:42') // ['2021-11-11 00:00:00', '2021-11-11 23:59:59', '2021-11-11 16:39:42']
 * ```
 */
export function getRecentDays(value: number, date: ConfigType = dayjs(), format = DATE_TIME_FORMAT) {
  return [
    dayjs(date).add(value, 'day').startOf('day').format(format),
    dayjs(date).add(value, 'day').endOf('day').format(format),
    dayjs(date).add(value, 'day').format(format),
  ]
}

/**
 * 获取最近一周
 * @param value 时间量。正数代表未来时间，负数代表过去时间。默认为0，代表本周
 * @param format 格式化规则
 * @category Date
 * @returns 返回一个数组。第一个返回指定每周的开始时间，第二个返回指定每周的结束时间
 * @example
 * ``` typescript
 * // 获取本周
 * getRecentWeeks() // ['2023-01-16 00:00:00', '2023-01-22 23:59:59']
 * // 获取上周
 * getRecentWeeks(-1) // ['2023-01-09 00:00:00', '2023-01-15 23:59:59']
 * // 获取下周
 * getRecentWeeks(1) // ['2023-01-23 00:00:00', '2023-01-29 23:59:59']
 * ```
 */
export function getRecentWeeks(value = 0, format = DATE_TIME_FORMAT) {
  return [
    dayjs().add(value, 'week').startOf('week').add(1, 'day').format(format),
    dayjs().add(value, 'week').endOf('week').add(1, 'day').format(format),
  ]
}

/**
 * 获取最近一月
 * @param value 时间量。正数代表未来时间，负数代表过去时间。默认为0，代表本月
 * @param date 指定时间。默认是当月
 * @param format 格式化规则
 * @category Date
 * @returns 返回一个数组。第一个返回指定月份的开始时间，第二个返回指定月份的结束时间
 * @example
 * ``` typescript
 * // 获取本月
 * getRecentMonths() // ['2023-01-01 00:00:00', '2023-01-31 23:59:59']
 * // 获取上月
 * getRecentMonths(-1) // ['2022-12-01 00:00:00', '2022-12-31 23:59:59']
 * // 获取下月
 * getRecentMonths(1) // ['2023-02-01 00:00:00', '2023-02-28 23:59:59']
 * ```
 */

export function getRecentMonths(value = 0, date: ConfigType = dayjs(), format = DATE_TIME_FORMAT) {
  return [
    dayjs(date).add(value, 'month').startOf('month').format(format),
    dayjs(date).add(value, 'month').endOf('month').format(format),
  ]
}

/**
 * 获取最近季度
 * @param value 时间量。正数代表未来时间，负数代表过去时间。默认为0，代表本季度
 * @param format 格式化规则
 * @category Date
 * @returns 返回一个数组。第一个返回指定季度的开始时间，第二个返回指定季度的结束时间
 * @example
 * ``` typescript
 * 获取本季度
 * getRecentQuarters() // ['2023-01-01 00:00:00', '2023-03-31 23:59:59']
 * 获取上个季度
 * getRecentQuarters(-1) // ['2022-10-01 00:00:00', '2022-12-31 23:59:59']
 * 获取下个季度
 * getRecentQuarters(1) // ['2023-04-01 00:00:00', '2023-06-30 23:59:59']
 * ```
 */
export function getRecentQuarters(value = 0, format = DATE_TIME_FORMAT) {
  dayjs.extend(quarterOfYear)
  return [
    dayjs().add(value, 'quarters').startOf('quarter').format(format),
    dayjs().add(value, 'quarters').endOf('quarter').format(format),
  ]
}

/**
 * 获取2个时间的时间差
 * @param beginDate 开始时间
 * @param endDate 结束时间
 * @param unit 单位
 * @category Date
 * @returns 返回2个时间的时间差
 * @example
 * ``` typescript
 * // 获取相差的天数
 * getDiff('2022-10-01', '2022-12-31') // 91
 * // 获取相差的月数
 * getDiff('2022-10-01', '2022-12-01', 'month') // 2
 * // 获取相差的小时数
 * getDiff('2022-10-01', '2022-10-02', 'hour') // 24
 * ```
 */
export function getDiff(beginDate: ConfigType, endDate: ConfigType, unit: QUnitType | OpUnitType = 'day') {
  return dayjs(endDate).diff(dayjs(beginDate), unit)
}
