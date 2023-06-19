/**
 * @Author: Mojie
 * @Date: 2022-03-11 15:13:24
 */

import { describe, expect, test } from 'vitest'
import { keywordHighlight } from '../src/dom'

describe('Dom Utils', () => {
  test('keywordHighlight', () => {
    expect(keywordHighlight('Hello World', 'Hello')).toEqual(
      '<font style="background: red">Hello</font> World',
    )
    expect(keywordHighlight('Hello WorLd', 'l')).toEqual(
      'He<font style="background: red">l</font><font style="background: red">l</font>o Wor<font style="background: red">L</font>d',
    )
    expect(
      keywordHighlight('Hello World', 'Hello', {
        style: {
          color: 'red',
        },
      }),
    ).toEqual('<font style="color:red">Hello</font> World')
  })
})
