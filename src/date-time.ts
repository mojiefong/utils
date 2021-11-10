/**
 * @Author: Mojie
 * @Date: 2021-11-05 10:58:20
 */

import type { ConfigType } from 'dayjs'
import dayjs from 'dayjs'

/**
 * 格式化日期和时间
 * @param { ConfigType } date
 * @param { string } format
 * @returns { string }
 */
export const formatDateTime = (
  date: ConfigType,
  format = 'YYYY-MM-DD HH:mm:ss'
): string => dayjs(date).format(format)
