/**
 * @Author: Mojie
 * @Date: 2021-11-17 17:29:20
 */

// @vitest-environment jsdom

import { describe, expect, it } from 'vitest'

import { objectToFormData } from '../src/object'

describe('object Utils', () => {
  it('objectToFormData', () => {
    const formData = objectToFormData({ a: 1, b: 2 })!
    expect(formData.get('a')).toEqual('1')
  })
})
