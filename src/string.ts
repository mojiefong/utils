/**
 * @Author: Mojie
 * @Date: 2021-11-19 14:52:23
 */

import { isString } from './is'

/**
 * 获取文件后缀名
 * @param fileName 文件名称
 * @param split 是否需要后缀名前面的分割点
 * @category String
 * @returns 返回文件后缀名
 * @example
 * ``` typescript
 * getFileExt('file-name.pdf') // 'pdf'
 * getFileExt('hello.js', true) // .js
 * ```
 */
export function getFileExt(fileName: string, split = false) {
  const ext = fileName.split('.').pop()?.toLowerCase()
  return split ? `.${ext}` : ext
}

/**
 * 转义要在正则表达式中使用的特殊字符
 * @description "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{" , "}", "|"
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
export const escapeRegExp = (str: string) => (isString(str)) ? str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : ''

/**
 * 移除字符串中的HTML标签
 * @param str 包含HTML标签的字符串
 * @category String
 * @returns 返回清除HTML标签后的纯文本
 * @example
 * ``` typescript
 * stripHtml('<html>123</html>') // '123'
 * stripHtml('<html></html>') // ''
 * ```
 */
export const stripHtml = (str: string) => str.replace(/<[^>]+>/g, '')

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
export function truncate(str: string, endIndex: number, beginIndex = 0, suffix = '...') {
  return str.slice(beginIndex, endIndex) + suffix
}

/**
 * 根据索引替换字符串
 * @param str 原始字符串
 * @param beginIndex 索引开始位置
 * @param endIndex 索引结束位置
 * @param replacement 替换的新字符串
 * @category String
 * @returns 返回根据索引替换后的字符串
 * @example
 * ``` typescript
 * replaceStr('Hello World', 6, 11, 'TypeScript') // Hello TypeScript
 * replaceStr('Hello World', 6, 7, 'w') // Hello world
 * ```
 */
export function replaceStr(str: string, beginIndex: number, endIndex: number, replacement: string) {
  return str.replace(str.slice(beginIndex, endIndex), replacement)
}

/**
 * 根据索引插入字符串
 * @param str 原始字符串
 * @param beginIndex 索引开始位置
 * @param newStr 插入新的字符串
 * @category String
 * @returns 返回根据索引插入的字符串
 * @example
 * ``` typescript
 * insertStr('Hello World', 6, 'TypeScript ') // Hello TypeScript World
 * ```
 */
export function insertStr(str: string, beginIndex: number, newStr: string) {
  return str.slice(0, beginIndex) + newStr + str.slice(beginIndex, str.length)
}
