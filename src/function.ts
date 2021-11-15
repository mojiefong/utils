/**
 * @Author: Mojie
 * @Date: 2021-11-15 13:57:58
 */

import { isEmpty } from './is'

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
