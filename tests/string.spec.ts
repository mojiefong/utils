/**
 * @Author: Mojie
 * @Date: 2021-11-19 14:52:45
 */

import { describe, expect, it } from 'vitest'

import {
  escapeRegExp,
  getFileExt,
  insertStr,
  replaceStr,
  stripHtml,
  truncate,
} from '../src/string'

describe('string Utils', () => {
  it('getFileExt', () => {
    expect(getFileExt('utils.ts')).toEqual('ts')
    expect(getFileExt('img.PNG')).toEqual('png')
    expect(getFileExt('hello.js', true)).toEqual('.js')
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

  it('stripHtml', () => {
    expect(stripHtml('<html>123</html>')).toEqual('123')
    expect(stripHtml('<html></html>')).toEqual('')
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
