/**
 * @Author: Mojie
 * @Date: 2021-11-05 11:06:37
 */

/**
 * 随机十六进制颜色
 * @category Math
 * @returns 返回十六进制颜色值
 */
export const randomHexColor = (): string => {
  const random = (Math.random() * 0xfffff * 1000000).toString()
  return `#${random.slice(0, 6)}`
}

/**
 * 指定颜色随机抽取
 * @param colors 指定的颜色列表
 * @category Math
 * @returns 返回颜色值
 * @example
 * ``` typescript
 * randomColor(['blue', 'red', '#fff']) // 返回其中一个
 * ```
 */
export const randomColor = (colors: string[]) => {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

/**
 * 千分位格式化
 * @param num 需要格式化的数字或者字符串
 * @category Math
 * @returns 返回格式化后的字符串
 * @example
 * ``` typescript
 * thousandsFormat(0) // 0
 * thousandsFormat(1234.123456789) // '1,234.123456789'
 * thousandsFormat('$1234') // '$1,234'
 * ```
 */
export const thousandsFormat = (num: string | number): string | number => {
  return (
    num &&
    num.toString().replace(/\d+/, (s) => s.replace(/(\d)(?=(\d{3})+$)/g, '$1,'))
  )
}

/**
 * 字节转换
 * @param bytes 需要转换的字节
 * @category Math
 * @returns 返回根据大小转换后对应的容量单位
 * @example
 * ``` typescript
 * bytesToSize(1000) // '1000.00 B'
 * bytesToSize(1024) // '1.00 KB'
 * bytesToSize(1024 * 1024) // '1.00 MB'
 * bytesToSize(1024 ** 3) // '1.00 GB'
 * ```
 */
export const bytesToSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const base = 1024
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const index = Math.floor(Math.log(bytes) / Math.log(base))
  return `${(bytes / base ** index).toFixed(2)} ${units[index]}`
}

/**
 * 生成UUID
 * @category Math
 * @returns 返回生成的UUID
 */
export const generatorUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * 数字超过规定大小加上 '+' 号。
 * @description 如数字超过99显示99+
 * @param val 当前的数值
 * @param maxNum 最大的数值
 * @category Math
 * @returns 如果当前的数值大于最大的数值则返回'n+'，否则返回n
 * @example
 * ``` typescript
 * outOfNum(99, 99) // 99
 * outOfNum(99, 99) // 99
 * outOfNum('100', 99) // '99+'
 * ```
 */
export const outOfNum = (
  val: number | string,
  maxNum: number
): string | number => {
  val = val || 0
  if (val > maxNum) return `${maxNum}+`
  return val
}

/**
 * 字符串转为数字
 * @param val 需要转换的字符串
 * @category Math
 * @returns 返回转换后的数字
 * @example
 * ``` typescript
 * toNumber('123') // 123
 * toNumber('a') // NaN
 * ```
 */
export const toNumber = (val: string | number): number => +val

/**
 * 将数字四舍五入到指定的位数
 * @param val 需要指定的数值
 * @param precision 指定多少位小数
 * @category Math
 * @returns 返回四舍五入后指定的位数的数值
 * @example
 * ``` typescript
 * round(12.1) // 12
 * round(12.5) // 13
 * round(12.55, 1) // 12.6
 * round(12.514, 2) // 12.51
 * round(12.5144, 3) // 12.514
 * round('18.888', 2) // 18.89
 * ```
 */
export const round = (val: string | number, precision = 0): number => {
  const number = toNumber(val as string)
  return (
    Math.round(`${number}e${precision}` as unknown as number) /
    Math.pow(10, precision)
  )
  // same as:
  // return Number(
  //   `${Math.round(`${number}e${precision}` as unknown as number)}e-${precision}`
  // )
}
