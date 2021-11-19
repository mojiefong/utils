/**
 * @Author: Mojie
 * @Date: 2021-11-17 17:29:20
 */

import { objectToFormData, deleteEmptyField } from '../object'

describe('Object Utils', () => {
  test('objectToFormData', () => {
    const formData = objectToFormData({ a: 1, b: 2 })
    expect(formData.get('a')).toEqual('1')
  })
  test('deleteEmptyField', () => {
    const obj = { a: null, b: 2, c: 0, d: '', e: undefined }
    expect(deleteEmptyField(obj)).toEqual({ b: 2, c: 0 })
  })
})
