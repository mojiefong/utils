/**
 * @Author: Mojie
 * @Date: 2021-11-04 14:28:22
 */

/**
 * 类型检查
 * @param { * } val
 * @returns { string }
 */
export const getTypeof = (val: unknown): string => {
  return Object.prototype.toString.call(val).replace(/\[object\s(.+)\]/, '$1')
}

export const isBrowser = typeof window !== 'undefined'
export const isWindow = (val: unknown): val is Window => {
  return isBrowser && getTypeof(val) === 'Window'
}
export const isString = (val: unknown): val is string => {
  return getTypeof(val) === 'String'
}
export const isNumber = (val: unknown): val is number => {
  return getTypeof(val) === 'Number'
}
export const isBoolean = (val: unknown): val is boolean => {
  return getTypeof(val) === 'Boolean'
}
export const isNull = (val: unknown): val is null => {
  return getTypeof(val) === 'Null'
}
export const isUndefined = (val: unknown): val is undefined => {
  return getTypeof(val) === 'Undefined'
}
export const isSymbol = (val: unknown): val is symbol => {
  return getTypeof(val) === 'Symbol'
}
export const isFunction = (val: unknown): val is Function => {
  return getTypeof(val) === 'Function'
}
export const isRegExp = (val: unknown): val is RegExp => {
  return getTypeof(val) === 'RegExp'
}
export const isPromise = <T>(val: unknown): val is Promise<T> => {
  return getTypeof(val) === 'Promise'
}
export const isElement = (val: unknown): val is Element => {
  return (val as Element)?.nodeType === 1
}
export const isObject = (val: unknown): val is object => {
  return getTypeof(val) === 'Object'
}
export const isMap = <T, K>(val: unknown): val is Map<T, K> => {
  return getTypeof(val) === 'Map'
}
export const isSet = <T>(val: unknown): val is Set<T> => {
  return getTypeof(val) === 'Set'
}
export const isNaN = (val: unknown): val is Number & { NaN: true } => {
  return Number.isNaN(val)
}
export const isNullOrUndef = (val: unknown): val is null | undefined => {
  return isUndefined(val) || isNull(val)
}
/**
 * 检查空值
 * 将null、undefined、空字符串、空对象、空数组判断为空
 * @param { * } val
 * @returns { boolean }
 */
export const isEmpty = (val: unknown): boolean => {
  // if (isObject(val)) return JSON.stringify(val) === '{}'
  if (isObject(val)) return Object.keys(val).length === 0
  if (isArray(val)) return !val.length
  if (isNull(val)) return true
  if (isUndefined(val)) return true
  if (val === '') return true
  return false
}
export const isArray = <T>(val: unknown): val is Array<T> => Array.isArray(val)
export const isDate = (val: unknown): val is Date => getTypeof(val) === 'Date'
export const isEven = (val: number): boolean => val % 2 === 0
export const isOdd = (val: number): boolean => val % 2 !== 0
export const isPositive = (val: number): boolean => Math.sign(val) === 1
export const isNegative = (val: number): boolean => Math.sign(val) === -1

/**
 * 用于判断滚动条是否到底部
 * @returns { boolean }
 */
export const isAtBottom = (): boolean => {
  const clientHeight = document.documentElement.clientHeight
  const scrollHeight = document.documentElement.scrollHeight
  return clientHeight + window.scrollY >= scrollHeight
}
