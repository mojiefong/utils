/**
 * @Author: Mojie
 * @Date: 2021-11-04 14:28:22
 */

/**
 * 检查类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 返回检查后的类型
 * @example
 * ``` typescript
 * getTypeof({}) // 'Object'
 * getTypeof([]) // 'Array'
 * getTypeof('') // 'String'
 * ```
 */
export const getTypeof = (val: unknown) => Object.prototype.toString.call(val).replace(/\[object\s(.+)\]/, '$1')

/**
 * 检查是否浏览器环境
 * @description 如果是浏览器环境返回true，否则返回false
 * @category Is
 */
export const isBrowser = typeof window !== 'undefined'

/**
 * 检查是否Window对象
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是window对象则返回true，否则返回false
 */
export const isWindow = (val: unknown): val is Window => isBrowser && getTypeof(val) === 'Window'

/**
 * 检查是否string类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是string类型则返回true，否则返回false
 */
export const isString = (val: unknown): val is string => getTypeof(val) === 'String'

/**
 * 检查是否number类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是number类型则返回true，否则返回false
 */
export const isNumber = (val: unknown): val is number => getTypeof(val) === 'Number'

/**
 * 检查是否boolean类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是boolean类型则返回true，否则返回false
 */
export const isBoolean = (val: unknown): val is boolean => getTypeof(val) === 'Boolean'

/**
 * 检查是否null类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是null类型则返回true，否则返回false
 */
export const isNull = (val: unknown): val is null => getTypeof(val) === 'Null'

/**
 * 检查是否undefined类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是undefined类型则返回true，否则返回false
 */
export const isUndefined = (val: unknown): val is undefined => getTypeof(val) === 'Undefined'

/**
 * 检查是否symbol类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是symbol类型则返回true，否则返回false
 */
export const isSymbol = (val: unknown): val is symbol => getTypeof(val) === 'Symbol'

/**
 * 检查是否Function类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是function类型则返回true，否则返回false
 */
export const isFunction = (val: unknown): val is (...args: any[]) => any => getTypeof(val) === 'Function'

/**
 * 检查是否RegExp类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是RegExp类型则返回true，否则返回false
 */
export const isRegExp = (val: unknown): val is RegExp => getTypeof(val) === 'RegExp'

/**
 * 检查是否Promise对象
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是Promise对象则返回true，否则返回false
 */
export const isPromise = <T>(val: unknown): val is Promise<T> => getTypeof(val) === 'Promise'

/**
 * 检查是否DOM元素
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是DOM元素则返回true，否则返回false
 */
export const isElement = (val: unknown): val is Element => (val as Element)?.nodeType === 1

/**
 * 检查是否Object类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是Object类型则返回true，否则返回false
 */
export const isObject = (val: unknown): val is object => getTypeof(val) === 'Object'

/**
 * 检查是否Map对象
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是Map对象则返回true，否则返回false
 */
export const isMap = <T, K>(val: unknown): val is Map<T, K> => getTypeof(val) === 'Map'

/**
 * 检查是否Set对象
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是Set对象则返回true，否则返回false
 */
export const isSet = <T>(val: unknown): val is Set<T> => getTypeof(val) === 'Set'

/**
 * 检查是否null或undefined类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是null或undefined类型则返回true，否则返回false
 */
export const isNullOrUndef = (val: unknown): val is null | undefined => isUndefined(val) || isNull(val)

/**
 * 检查空值
 * @description 将null、undefined、空字符串、空对象、空数组判断为空
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果val为null、undefined、空字符串、空对象、空数组则返回true，否则返回false
 */
export function isEmpty(val: unknown): boolean {
  // if (isObject(val)) return JSON.stringify(val) === '{}'
  if (isObject(val)) return Object.keys(val).length === 0
  if (Array.isArray(val)) return !val.length
  if (isNull(val)) return true
  if (isUndefined(val)) return true
  if (val === '') return true
  return false
}

/**
 * 检查是否Date类型
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是Date类型则返回true，否则返回false
 */
export const isDate = (val: unknown): val is Date => getTypeof(val) === 'Date'

/**
 * 检查是否偶数
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是偶数则返回true，否则返回false
 */
export const isEven = (val: number): boolean => val % 2 === 0

/**
 * 检查是否基数
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是基数则返回true，否则返回false
 */
export const isOdd = (val: number): boolean => val % 2 !== 0

/**
 * 检查是否正数
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是正数则返回true，否则返回false
 */
export const isPositive = (val: number): boolean => Math.sign(val) === 1

/**
 * 检查是否负数
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是负数则返回true，否则返回false
 */
export const isNegative = (val: number): boolean => Math.sign(val) === -1

/**
 * 检查是否File对象
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是File对象则返回true，否则返回false
 */
export const isFile = (val: unknown): val is File => getTypeof(val) === 'File'

/**
 * 检查是否Blob对象
 * @param val 需要进行检查的值
 * @category Is
 * @returns 如果是Blob对象则返回true，否则返回false
 */
export const isBlob = (val: unknown): val is Blob => getTypeof(val) === 'Blob'

/**
 * 判断滚动条是否到底部
 * @category Is
 * @returns 如果滚动条到达底部则返回true，否则返回false
 */
export function isAtBottom() {
  const clientHeight = document.documentElement.clientHeight
  const scrollHeight = document.documentElement.scrollHeight
  return clientHeight + window.scrollY >= scrollHeight
}
