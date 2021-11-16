/**
 * @Author: Mojie
 * @Date: 2021-11-15 13:57:58
 */

import { isEmpty, isArray, isObject } from './is'

/**
 * 字符解码
 * @param { string } str
 * @returns { string }
 */
export const decode = (str: string): string => {
  try {
    return decodeURIComponent(str)
  } catch {
    return str
  }
}

/**
 * 字符转码
 * @param { string } str
 * @returns { string }
 */
export const encode = (str: string): string => {
  const encodeReserveRE = /[!'()*]/g
  const encodeReserveReplacer = (c: string) =>
    '%' + c.charCodeAt(0).toString(16)
  const commaRE = /%2C/g

  return encodeURIComponent(str)
    .replace(encodeReserveRE, encodeReserveReplacer)
    .replace(commaRE, ',')
}

/**
 * 解析 url 的查询对象
 * @param { string } query
 * @returns { object }
 */
export const parseQuery = (query: string): object => {
  const res: IndexSign = {}
  if (!query) return res
  query = query.trim().replace(/^(\?|#|&)/, '')
  query.split('&').forEach((param) => {
    const parts = param.replace(/\+/g, ' ').split('=')
    const key = decode(parts.shift() as string)
    const val = parts.length > 0 ? decode(parts.join('=')) : null

    if (res[key] === undefined) {
      res[key] = val
    } else if (Array.isArray(res[key])) {
      res[key].push(val)
    } else {
      res[key] = [res[key], val]
    }
  })

  return res
}

/**
 * 将 Object 对象转为查询字符串
 * @param { Object } obj
 * @param { boolean } [isEncode]
 * @returns { string }
 */
export const stringifyQuery = (obj: object, isEncode = false): string => {
  if (!obj) return ''
  if (isEmpty(obj)) return ''

  const keys = Object.keys(obj)
  return keys
    .map((key) => {
      let value = (obj as IndexSign)[key]
      if (!value) return ''
      if (isEncode) {
        value = encode(value)
      }
      return `${key}=${value}`
    })
    .filter((item) => item)
    .join('&')
}

/**
 * 根据key对一组对象进行分组
 * @param { Array } arr
 * @param { string } property
 * @returns { Object }
 */
export const groupBy = <T extends Record<string, AnyType>, K extends keyof T>(
  arr: T[],
  property: K
): Record<string, T[]> => {
  return arr.reduce((acc, item) => {
    return (acc[item[property]] = [...(acc[item[property]] || []), item]), acc
  }, {} as Record<string, T[]>)
}

/**
 * 节流
 * 在指定时间间隔内只会触发一次
 * @param { Function } callback
 * @param { number } [delay]
 * @returns { Function }
 */
export const throttle = <T extends unknown[]>(
  callback: (...args: T) => unknown,
  delay = 0
): ((...args: T) => void) => {
  let timer: unknown = null
  return function (this: unknown, ...args: T) {
    if (!timer) {
      timer = setTimeout(() => {
        callback.apply(this, args)
        timer = null
      }, delay)
    }
  }
}

/**
 * 防抖
 * 事件触发n秒后执行回调，如果在这个n秒又被触发，则重新计时
 * @param { Function } callback
 * @param { number } delay
 * @returns { Function }
 */
export const debounce = <T extends unknown[]>(
  callback: (...args: T) => unknown,
  delay = 0
): ((...args: T) => void) => {
  let timer: ReturnType<typeof setTimeout>
  return function (this: unknown, ...args: T) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}

/**
 * 深拷贝
 * https://gist.github.com/erikvullings/ada7af09925082cbb89f40ed962d475e
 * @param { Object | Array } target
 * @returns { * }
 */
export const deepClone = <T>(target: T): T => {
  if (!target) return target
  if (isArray(target)) {
    const clone = [] as unknown[]
    target.forEach((v) => {
      clone.push(v)
    })
    return clone.map((n) => deepClone(n)) as AnyType
  }
  if (isObject(target)) {
    const clone: IndexSign = { ...target }
    Object.keys(clone).forEach((k) => {
      clone[k] = deepClone(clone[k])
    })
    return clone as T
  }
  return target
}
