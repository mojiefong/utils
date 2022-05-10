/**
 * @Author: Mojie
 * @Date: 2021-11-19 14:52:45
 */

import {
  getFileExtension,
  escapeRegExp,
  removeHtmlTag,
  truncate,
  replaceStr,
  insertStr,
} from '../string'

describe('String Utils', () => {
  test('getFileExtension', () => {
    expect(getFileExtension('utils.ts')).toEqual('ts')
    expect(getFileExtension('img.PNG')).toEqual('png')
  })
  test('escapeRegExp', () => {
    expect(escapeRegExp('.')).toEqual('\\.')
    expect(escapeRegExp('[')).toEqual('\\[')
    expect(escapeRegExp('123')).toEqual('123')
    expect(escapeRegExp('(*)')).toEqual('\\(\\*\\)')
    expect('[Hello World]'.replace(new RegExp(escapeRegExp('[')), '')).toEqual(
      'Hello World]'
    )
  })
  test('removeHtmlTag', () => {
    expect(removeHtmlTag('<html>123</html>')).toEqual('123')
    expect(removeHtmlTag('<html></html>')).toEqual('')
  })
  test('truncate', () => {
    expect(truncate('JavaScript', 4)).toEqual('Java...')
  })
  test('replaceStr', () => {
    expect(replaceStr('Hello World', 6, 11, 'TypeScript')).toEqual(
      'Hello TypeScript'
    )
    expect(replaceStr('Hello World', 6, 7, 'w')).toEqual('Hello world')
  })
  test('insertStr', () => {
    expect(insertStr('Hello World', 6, 'TypeScript ')).toEqual(
      'Hello TypeScript World'
    )
  })
})
