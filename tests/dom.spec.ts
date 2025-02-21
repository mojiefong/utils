/**
 * @Author: Mojie
 * @Date: 2022-03-11 15:13:24
 */

import { describe, expect, it, vi } from 'vitest'

import {
  addClass,
  getPageScrollLeft,
  getPageScrollTop,
  getScrollPos,
  getSelectedText,
  hasClass,
  keyHighlight,
  removeClass,
  replaceClass,
  scrollIntoView,
  scrollToTop,
  toggleClass,
} from '../src/dom'

/* @vitest-environment jsdom */

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

  it('addClass', () => {
    const el = document.createElement('div')

    addClass(el, 'test')
    expect(el.className).toEqual('test')

    addClass(el, 'test2', 'test3', 'test4')
    expect(el.className).toEqual('test test2 test3 test4')
  })

  it('removeClass', () => {
    const el = document.createElement('div')

    addClass(el, 'test1', 'test2', 'test3', 'test4')

    removeClass(el, 'test1')
    expect(el.className).toEqual('test2 test3 test4')

    removeClass(el, 'test2', 'test3', 'test4')
    expect(el.className).toEqual('')
  })

  it('hasClass', () => {
    const el = document.createElement('div')

    addClass(el, 'test')

    expect(hasClass(el, 'test')).toBe(true)
    expect(hasClass(el, 'test2')).toBe(false)
  })

  it('toggleClass', () => {
    const el = document.createElement('div')

    toggleClass(el, 'test')
    expect(el.className).toEqual('test')

    toggleClass(el, 'test')
    expect(el.className).toEqual('')
  })

  it('replaceClass', () => {
    const el = document.createElement('div')
    addClass(el, 'test1', 'test2')

    replaceClass(el, 'test1', 'test5')
    expect(el.className).toEqual('test5 test2')
  })

  it('scrollToTop', () => {
    scrollToTop()
    expect(window.scrollY).toEqual(0)
  })

  it('scrollIntoView', () => {
    expect(scrollIntoView('aaa')).toBe(false)

    const div = document.createElement('div')
    const mockScrollIntoView = vi.fn()
    div.scrollIntoView = mockScrollIntoView
    document.body.appendChild(div)

    expect(scrollIntoView('div')).toBe(true)
  })

  it('getScrollPos', () => {
    const { x, y } = getScrollPos(document.body)
    expect(x).toBe(0)
    expect(y).toBe(0)
  })

  it('getPageScrollTop', () => {
    const top = getPageScrollTop()
    expect(top).toBe(0)
  })

  it('getPageScrollLeft', () => {
    const left = getPageScrollLeft()
    expect(left).toBe(0)
  })

  it('getSelectedText', () => {
    const text = getSelectedText()
    expect(text).toBe('')
  })
})
