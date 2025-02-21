/**
 * @Author: Mojie
 * @Date: 2021-11-15 13:57:58
 */

import type { Indexable } from './types'

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
export function decode(str: string) {
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
export function encode(str: string) {
  const encodeReserveRE = /[!'()*]/g
  const commaRE = /%2C/g
  const encodeReserveReplacer = (c: string) => `%${c.charCodeAt(0).toString(16)}`
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',')
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
export function parseQuery<T = Indexable>(query: string): T | Indexable {
  const res: Indexable = {}
  if (!query) return res
  query.split('&').forEach((param) => {
    const parts = param.replace(/\+/g, ' ').split('=')
    const key = decode(parts.shift() as string)
    const val = parts.length > 0 ? decode(parts.join('=')) : null

    if (res[key] === undefined) res[key] = val
    else if (Array.isArray(res[key])) res[key].push(val)
    else res[key] = [res[key], val]
  })
  return res
}

/**
 * 将 Object 对象转为查询字符串
 * @param obj 需要转换的对象
 * @param options 选项
 * @param options.isEncode 是否需要转码。默认为false
 * @param options.sep 键值对之间的分隔符，默认为 '='。
 * @param options.join 多个键值对之间的连接符，默认为 '&'。
 * @category Serialize
 * @returns 返回查询字符串
 * @example
 * ``` typescript
 * stringifyQuery({ a: 1, b: 2 }) // 'a=1&b=2'
 * stringifyQuery({ foo: '你好' }) // 'foo=你好'
 * stringifyQuery({ foo: '你好' }, { isEncode: true }) // 'foo=%E4%BD%A0%E5%A5%BD'
 * stringifyQuery({ width: '100px', height: '100px' }, { sep: ':', join: ';' }) // 'width:100px;height:100px'
 * ```
 */
export function stringifyQuery(
  obj: object,
  { isEncode = false, sep = '=', join = '&' }: { isEncode?: boolean, sep?: string, join?: string } = {},
) {
  if (!obj) return ''
  const keys = Object.keys(obj)

  return keys.map((key) => {
    let value = (obj as Indexable)[key]
    if (isEncode) value = encode(value)
    return key + sep + value
  }).filter(item => item).join(join)
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
export const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay))
