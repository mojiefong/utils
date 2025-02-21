/**
 * @Author: Mojie
 * @Date: 2021-11-17 17:29:20
 */

import { describe, expect, it } from 'vitest'

import { objToFormData } from '../src/object'

describe('object Utils', () => {
  it('objToFormData', () => {
    const formData = objToFormData({ a: 1, b: 2 })!
    expect(formData.get('a')).toEqual('1')
  })
})
