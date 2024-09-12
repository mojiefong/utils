/**
 * @Author: Mojie
 * @Date: 2021-11-19 14:52:45
 */

import { describe, expect, it } from 'vitest'

import {
  escapeRegExp,
  getFileExtension,
  insertStr,
  removeHtmlTag,
  replaceStr,
  truncate,
} from '../src/string'

describe('string Utils', () => {
  it('getFileExtension', () => {
    expect(getFileExtension('utils.ts')).toEqual('ts')
    expect(getFileExtension('img.PNG')).toEqual('png')
    expect(getFileExtension('hello.js', true)).toEqual('.js')
  })
  it('escapeRegExp', () => {
    expect(escapeRegExp('.')).toEqual('\\.')
    expect(escapeRegExp('[')).toEqual('\\[')
    expect(escapeRegExp('123')).toEqual('123')
    expect(escapeRegExp('(*)')).toEqual('\\(\\*\\)')
    expect('[Hello World]'.replace(new RegExp(escapeRegExp('[')), '')).toEqual(
      'Hello World]',
    )
  })
  it('removeHtmlTag', () => {
    expect(removeHtmlTag('<html>123</html>')).toEqual('123')
    expect(removeHtmlTag('<html></html>')).toEqual('')
  })
  it('truncate', () => {
    expect(truncate('JavaScript', 4)).toEqual('Java...')
  })
  it('replaceStr', () => {
    expect(replaceStr('Hello World', 6, 11, 'TypeScript')).toEqual(
      'Hello TypeScript',
    )
    expect(replaceStr('Hello World', 6, 7, 'w')).toEqual('Hello world')
  })
  it('insertStr', () => {
    expect(insertStr('Hello World', 6, 'TypeScript ')).toEqual(
      'Hello TypeScript World',
    )
  })
})
