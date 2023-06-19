/**
 * @Author: Mojie
 * @Date: 2021-11-17 17:29:20
 */

// @vitest-environment jsdom

import { describe, expect, test } from 'vitest'
import { objectToFormData } from '../src/object'

describe('Object Utils', () => {
  test('objectToFormData', () => {
    const formData = objectToFormData({ a: 1, b: 2 })!
    expect(formData.get('a')).toEqual('1')
  })
})
