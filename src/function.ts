/**
 * @Author: Mojie
 * @Date: 2021-11-15 13:57:58
 */

import { isEmpty, isArray, isObject } from './is'

/**
 * 字符解码
 * @param str 需要解码的字符
 * @category Code
 * @returns 返回解码后的字符。如果解码失败则返回原字符
 * @example
 * ``` typescript
 * decode('%E4%BD%A0%E5%A5%BD') // '你好'
 * ```
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
 * @param str 需要转码的字符
 * @category Code
 * @returns 返回转码后的字符
 * @example
 * ``` typescript
 * encode('你好') // '%E4%BD%A0%E5%A5%BD'
 * ```
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
 * @param query 需要解析的字符
 * @returns 返回解析后的对象
 * @category Serialize
 * @example
 * ``` typescript
 * parseQuery('a=1&b=2') // { a: '1', b: '2' }
 * parseQuery('foo=%E4%BD%A0%E5%A5%BD') // { foo: '你好' }
 * // 解析当前url的查询对象
 * parseQuery(location.search)
 * ```
 */
export const parseQuery = (query: string): object => {
  const res: Indexable = {}
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
 * @param obj 需要转换的对象
 * @param isEncode 是否需要转码。默认为false
 * @category Serialize
 * @returns 返回查询字符串
 * @example
 * ``` typescript
 * stringifyQuery({ a: 1, b: 2 }) // 'a=1&b=2'
 * stringifyQuery({ foo: '你好' }) // 'foo=你好'
 * stringifyQuery({ foo: '你好' }, true) // 'foo=%E4%BD%A0%E5%A5%BD'
 * ```
 */
export const stringifyQuery = (obj: object, isEncode = false): string => {
  if (!obj) return ''
  if (isEmpty(obj)) return ''

  const keys = Object.keys(obj)
  return keys
    .map((key) => {
      let value = (obj as Indexable)[key]
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
 * 序列化成JSON字符串
 * @param val 需要序列化的对象
 * @category Serialize
 * @returns 返回一个JSON字符串
 * @example
 * ``` typescript
 * serialize({ foo: 'bar' }) // '{"foo":"bar"}'
 * serialize([{ foo: 'bar' }]) // '[{"foo":"bar"}]'
 * ```
 */
export const serialize = (val: unknown): string => JSON.stringify(val)

/**
 * 反序列化JSON字符串
 * @description 解析JSON字符串
 * @param val 需要被解析的字符串
 * @category Serialize
 * @returns 返回指定的JSON对象。如果字符串不符合JSON规则，则返回原值
 * @example
 * ``` typescript
 * deserialize('{"foo":"bar"}') // { foo: 'bar' }
 * deserialize('[{"foo":"bar"}]') // [{ foo: 'bar' }]
 * ```
 */
export const deserialize = <T>(val: string): T | string => {
  try {
    return JSON.parse(val)
  } catch {
    return val
  }
}

/**
 * 节流函数
 * @description 在指定时间间隔内只会触发一次
 * @param func 需要节流的函数
 * @param delay 指定时间间隔
 * @returns 返回新的节流函数
 */
export const throttle = <T extends unknown[]>(
  /**
   * @param args 上下文的参数
   */
  func: (...args: T) => unknown,
  delay = 0
): ((...args: T) => void) => {
  let timer: unknown = null
  return function (this: unknown, ...args: T) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, delay)
    }
  }
}

/**
 * 防抖函数
 * @description 事件触发n秒后执行回调，如果在这个n秒又被触发，则重新计时
 * @param func 需要防抖的函数
 * @param delay 指定时间间隔
 * @returns 返回新的防抖函数
 */
export const debounce = <T extends unknown[]>(
  /**
   * @param args 上下文的参数
   */
  func: (...args: T) => unknown,
  delay = 0
): ((...args: T) => void) => {
  let timer: ReturnType<typeof setTimeout>
  return function (this: unknown, ...args: T) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * 深拷贝
 * @description 支持对象和数组深拷贝
 * @description 转载https://gist.github.com/erikvullings/ada7af09925082cbb89f40ed962d475e
 * @param target 需要拷贝的对象或数组
 * @returns 返回深拷贝的对象或数组
 */
export const deepClone = <T>(target: T): T => {
  if (!target) return target
  if (isArray(target)) {
    const clone = [] as unknown[]
    target.forEach((v) => {
      clone.push(v)
    })
    return clone.map((n) => deepClone(n)) as any
  }
  if (isObject(target)) {
    const clone: Indexable = { ...target }
    Object.keys(clone).forEach((k) => {
      clone[k] = deepClone(clone[k])
    })
    return clone as T
  }
  return target
}

/**
 * 延迟异步函数执行
 * @param delay 延迟的时间。单位毫秒
 * @returns 返回一个Promise
 * ``` typescript
 * async function sleepWork() {
 *  console.log("I'm going to sleep for 1 second.")
 *  await sleep(1000)
 *  console.log('I woke up after 1 second.')
 * }
 * ```
 */
export const sleep = (delay: number): Promise<undefined> => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
