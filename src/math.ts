/**
 * @Author: Mojie
 * @Date: 2021-11-05 11:06:37
 */

/**
 * 随机十六进制颜色
 * @returns { string }
 */
export const randomHexColor = (): string => {
  const random = (Math.random() * 0xfffff * 1000000).toString()
  return `#${random.slice(0, 6)}`
}

/**
 * 千分位格式化
 * @param { string | number } num
 * @returns { string | number }
 */
export const thousandsFormat = (num: string | number): string | number => {
  return (
    num &&
    num.toString().replace(/\d+/, (s) => s.replace(/(\d)(?=(\d{3})+$)/g, '$1,'))
  )
}

/**
 * 字节转换
 * @param { number } bytes
 * @returns { string }
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
 * @returns { string }
 */
export const generatorUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * 数字超过规定大小加上 '+' 号。如数字超过99显示99+
 * @param { number } val
 * @param { number } maxNum
 * @returns { string | number }
 */
export const outOfNum = (val: number, maxNum: number): string | number => {
  val = val || 0
  if (val > maxNum) return `${maxNum}+`
  return val
}

/**
 * 字符串转为数字
 * @param { string } str
 * @returns { number }
 */
export const toNumber = (val: string): number => +val

/**
 * 获取文件后缀名
 * @param { string } fileName
 * @returns { string }
 */
export const getFileExtension = (fileName: string): string | undefined => {
  return fileName.split('.').pop()?.toLowerCase()
}
