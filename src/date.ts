/**
 * @Author: Mojie
 * @Date: 2021-11-05 10:58:20
 */

import type { ConfigType } from 'dayjs'
import dayjs from 'dayjs'

/**
 * 格式化日期和时间
 * @param date 需要处理的日期和时间
 * @param format 格式化规则
 * @category DateTime
 * @returns 格式化后的日期和时间
 * @example
 * ``` typescript
 * formatDateTime(1636360782649) // '2021-11-08 16:39:42'
 * formatDateTime(1636360935 * 1000) // '2021-11-08 16:42:15'
 * formatDateTime('2021-11-19T16:00:00+00:00', 'YYYY-MM-DD') // '2021-11-20'
 * ```
 */
export const formatDateTime = (
  date: ConfigType,
  format = 'YYYY-MM-DD HH:mm:ss'
): string => dayjs(date).format(format)
