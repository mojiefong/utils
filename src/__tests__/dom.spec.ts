/**
 * @Author: Mojie
 * @Date: 2022-03-11 15:13:24
 */

import { keywordHighlight } from '../dom'

describe('Dom Utils', () => {
  test('keywordHighlight', () => {
    expect(keywordHighlight('Hello World', 'Hello')).toEqual(
      '<font style="background: red">Hello</font> World'
    )
    expect(keywordHighlight('Hello WorLd', 'l')).toEqual(
      'He<font style="background: red">l</font><font style="background: red">l</font>o Wor<font style="background: red">L</font>d'
    )
    expect(
      keywordHighlight('Hello World', 'Hello', {
        style: {
          color: 'red',
        } as CSSStyleDeclaration,
      })
    ).toEqual('<font style="color:red">Hello</font> World')
  })
})
