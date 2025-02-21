/**
 * @Author: Mojie
 * @Date: 2022-03-11 15:13:24
 */

import { describe, expect, it } from 'vitest'

import { keyHighlight } from '../src/dom'

describe('dom Utils', () => {
  it('keyHighlight', () => {
    const defaultHighlight = keyHighlight()

    expect(defaultHighlight('Hello World', 'Hello')).toEqual('<font class="highlight">Hello</font> World')
    expect(defaultHighlight('Hello WorLd', 'l')).toEqual(
      'He<font class="highlight">l</font><font class="highlight">l</font>o Wor<font class="highlight">L</font>d',
    )

    const customHighlight = keyHighlight('custom-highlight')

    expect(customHighlight('Hello World', 'Hello')).toEqual('<font class="custom-highlight">Hello</font> World')
    expect(customHighlight('Hello WorLd', 'l')).toEqual(
      'He<font class="custom-highlight">l</font><font class="custom-highlight">l</font>o Wor<font class="custom-highlight">L</font>d',
    )
  })
})
