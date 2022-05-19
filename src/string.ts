/**
 * @Author: Mojie
 * @Date: 2021-11-19 14:52:23
 */

import { isString } from './is'

/**
 * 获取文件后缀名
 * @param fileName 文件名称
 * @category String
 * @returns 返回文件后缀名
 * @example
 * ``` typescript
 * getFileExtension('file-name.pdf') // 'pdf'
 * ```
 */
export const getFileExtension = (fileName: string): string => {
  return fileName.split('.').pop()?.toLowerCase() as string
}

/**
 * 转义要在正则表达式中使用的特殊字符
 * @description "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{" 、“}”和“|”
 * @param str 需要转义的字符串
 * @category String
 * @returns 返回转义后的字符串。如果str参数不是string类型则返回空字符串
 * @example
 * ``` typescript
 * escapeRegExp('.') // '\.'
 * escapeRegExp('[') // '\['
 * escapeRegExp('123') // '123'
 * escapeRegExp('(*)') // '\(\*\)'
 * escapeRegExp('[Hello World]'.replace(new RegExp(escapeRegExp('[')), '')) // 'Hello World]'
 * ```
 */
export const escapeRegExp = (str: string): string => {
  if (isString(str)) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }
  return ''
}

/**
 *  去除HTML标签
 * @param str 需要去除的html字符串
 * @category String
 * @returns 返回去除标签后的字符串
 * @example
 * ``` typescript
 * removeHtmlTag('<html>123</html>') // '123'
 * removeHtmlTag('<html></html>') // ''
 * ```
 */
export const removeHtmlTag = (str: string) => str.replace(/<[^>]+>/g, '')

/**
 * 字符串截取
 * @param str 需要截取的字符串
 * @param endIndex 结束提取字符串的索引
 * @param beginIndex 开始提取字符串的索引
 * @param suffix 后缀
 * @category String
 * @returns 返回截取后的字符串和后缀
 * @example
 * ``` typescript
 * truncate('JavaScript', 4) // 'Java...'
 * ```
 */
export const truncate = (
  str: string,
  endIndex: number,
  beginIndex = 0,
  suffix = '...'
) => str.slice(beginIndex, endIndex) + suffix

/**
 * 根据索引替换字符串
 * @param str 原始字符串
 * @param beginIndex 索引开始位置
 * @param endIndex 索引结束位置
 * @param replacement 替换的新字符串
 * @category String
 * @returns 返回根据索引替换后的字符串
 * @example ``` typescript
 * replaceStr('Hello World', 6, 11, 'TypeScript') // Hello TypeScript
 * replaceStr('Hello World', 6, 7, 'w') // Hello world
 * ```
 */
export const replaceStr = (
  str: string,
  beginIndex: number,
  endIndex: number,
  replacement: string
) => str.replace(str.slice(beginIndex, endIndex), replacement)

/**
 * 根据索引插入字符串
 * @param str 原始字符串
 * @param beginIndex 索引开始位置
 * @param newStr 插入新的字符串
 * @category String
 * @returns 返回根据索引插入的字符串
 * @example ``` typescript
 * insertStr('Hello World', 6, 'TypeScript ') // Hello TypeScript World
 * ```
 */
export const insertStr = (str: string, beginIndex: number, newStr: string) => {
  return str.slice(0, beginIndex) + newStr + str.slice(beginIndex, str.length)
}

/**
 * 生成指定长度的随机字符串
 * @param length 指定的长度
 * @category String
 * @returns 返回指定长度的随机字符串
 * @example ``` typescript
 * generateString(10) // 3wqt3eiyxs
 * generateString(16) // 3wqt3eiyxs2rde1f
 * ```
 */
export const generateString = (length: number): string =>
  Array(length)
    .fill('')
    .map(() => Math.random().toString(36).charAt(2))
    .join('')
