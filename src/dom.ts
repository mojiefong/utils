/**
 * @Author: Mojie
 * @Date: 2021-11-05 10:58:31
 */

import type { RequestFullScreen } from './types'

import { escapeRegExp } from './string'

/**
 * 添加class
 * @param el 需要添加的元素
 * @param className 添加的class名称，可以是多个
 * @category DOM Class
 * @example
 * ``` typescript
 * // 指定一个class
 * addClass(document.body, 'className')
 * // 指定多个class
 * addClass(document.body, 'className1', 'className2', 'className3')
 * ```
 */
export const addClass = (el: HTMLElement, ...className: string[]) => el.classList.add(...className)

/**
 * 删除class
 * @param el 需要删除的元素
 * @param className 删除的class名称，可以是多个
 * @category DOM Class
 * @example
 * ``` typescript
 * // 指定一个class
 * removeClass(document.body, 'className')
 * // 指定多个class
 * removeClass(document.body, 'className1', 'className2', 'className3')
 * ```
 */
export const removeClass = (el: HTMLElement, ...className: string[]) => el.classList.remove(...className)

/**
 * 是否存在class
 * @param el 需要检查的元素
 * @param className 需要检查的class名称
 * @category DOM Class
 * @returns 当class存在时返回true，否则返回false
 * @example
 * ``` typescript
 * // 如果 className 存在则返回true
 * hasClass(document.body, 'className') // true
 * // 如果 className1 不存在则返回false
 * hasClass(document.body, 'className1') // false
 * ```
 */
export const hasClass = (el: HTMLElement, className: string) => el.classList.contains(className)

/**
 * 切换class
 * @param el 需要切换的元素
 * @param className 需要切换的class名称
 * @category DOM Class
 * @returns 如果class添加成功则返回true，被删除否则返回false
 * @example
 * ``` typescript
 * // 如果添加成功则返回true
 * toggleClass(document.body, 'className') // true
 * // 如果删除成功则返回false
 * toggleClass(document.body, 'className') // false
 * ```
 */
export const toggleClass = (el: HTMLElement, className: string) => el.classList.toggle(className)

/**
 * 替换class
 * @param el 需要替换的元素
 * @param oldClassName 需要替换的class名称
 * @param newClassName 新的class名称
 * @category DOM Class
 * @returns 如果旧的class名称被替换成功，返回true，否则返回false
 * @example
 * ``` typescript
 * // 如果 className 存在则会替换成功，并且返回true
 * replaceClass(document.body, 'className', 'name') // true
 * // 如果 className1 不存在则不会改变原有的class，并且返回false
 * replaceClass(document.body, 'className1', 'name') // false
 * ```
 */
export const replaceClass = (el: HTMLElement, oldClassName: string, newClassName: string) => el.classList.replace(oldClassName, newClassName)

/**
 * 将滚动条平滑滚动到顶部
 * @category DOM Scroll
 */
export function scrollToTop() {
  const height = document.documentElement.scrollTop || document.body.scrollTop
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, height - height / 8)
  }
}

/**
 * 将滚动条平滑滚动到指定位置
 * @param selector CSS选择器
 * @category DOM Scroll
 * @returns 如果找到元素并执行滚动，否则返回false
 * @example
 * ``` typescript
 * // 滚动到指定id的元素
 * smoothScroll('#top')
 *
 * // 滚动到指定class的元素
 * smoothScroll('.scroll-to')
 *
 * // 滚动到指定标签
 * smoothScroll('header')
 * ```
 */
export function smoothScroll<T extends keyof HTMLElementTagNameMap>(selector: T) {
  const el = document.querySelector(selector)
  if (!el) return false
  el.scrollIntoView({
    behavior: 'smooth',
  })
}

/**
 * 获取当前的滚动位置
 * @param el 监听的元素。默认window
 * @category DOM Scroll
 * @returns 返回的x的距离和y的距离
 * @example
 * ``` typescript
 * // 获取window的滚动位置
 * getScrollPos() // { x: 0, y: 0 }
 * // 获取body的滚动位置
 * getScrollPos(document.body) // { x: 0, y: 0 }
 * ```
 */
export function getScrollPos(el: Window | HTMLElement = window) {
  return {
    x: el instanceof Window ? el.scrollX : el.scrollLeft,
    y: el instanceof Window ? el.scrollY : el.scrollTop,
  }
}

/**
 * 获取滚动条距离顶部高度
 * @category DOM Scroll
 * @returns 返回距离顶部高度
 */
export const getPageScrollTop = () => document.documentElement.scrollTop || document.body.scrollTop

/**
 * 获取滚动条距离左边的宽度
 * @category DOM Scroll
 * @returns 返回距离左边的宽度
 */
export const getPageScrollLeft = () => document.documentElement.scrollLeft || document.body.scrollLeft

/**
 * 复制内容到剪切板
 * @description navigator.clipboard只能在https中才能使用。为了做兼容，使用已经废弃的document.execCommand()方法确保功能可用
 * @param key 需要写入剪切板的文字
 * @category DOM
 */
export function copyClip(key: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(key)
  } else {
    const textarea = document.createElement('textarea')
    // 隐藏输入框
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'

    textarea.value = key
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }
}

/**
 * 获取鼠标选中的文本
 * @category DOM
 * @returns 返回选中的文本
 */
export const getSelectedText = () => window.getSelection()?.toString()

/**
 * 打开浏览器全屏
 * @category DOM
 */
export function openFullScreen() {
  const element = document.body as RequestFullScreen
  if (element.requestFullscreen) element.requestFullscreen()
  else if (element.mozRequestFullScreen) element.mozRequestFullScreen()
  else if (element.msRequestFullscreen) element.msRequestFullscreen()
  else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen()
}

/**
 * 退出浏览器全屏
 * @category DOM
 */
export function exitFullScreen() {
  const element = document.body as RequestFullScreen
  if (element.requestFullscreen) element.requestFullscreen()
  else if (element.mozRequestFullScreen) element.mozRequestFullScreen()
  else if (element.msRequestFullscreen) element.msRequestFullscreen()
  else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen()
}

/**
 * 下载blob文件
 * @param blob Blob对象
 * @param fileName 文件名称
 * @category DOM Download
 */
export function downloadBlobFile(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()
  URL.revokeObjectURL(url)
}

/**
 * 关键字高亮
 * @param className 高亮显示关键词的 CSS 类名 默认为 highlight
 * @param flags 正则修饰符g、i、m、s 默认为：gi
 * @category DOM
 * @returns 返回一个高亮显示关键词的函数
 * @example
 * ```typescript
 * const highlight = keyHighlight()
 * highlight('Hello World', 'Hello')
 * // '<font class="highlight">Hello</font> World'
 * highlight('Hello WorLd', 'l')
 * // 会匹配所有的 l，并且不区分大小写
 * // 'He<font class="highlight">l</font><font class="highlight">l</font>o Wor<font class="highlight">L</font>d'
 * ```
 */
export function keyHighlight(className = 'highlight', flags = 'gi') {
  return function (text: string, key: string) {
    if (!text) return ''
    if (!key) return text
    const regex = new RegExp(escapeRegExp(key), flags)
    return text.replace(regex, txt => `<font class="${className}">${txt}</font>`)
  }
}

/**
 * 动态添加css
 * @param url css文件路径
 * @param el 指定添加到哪个元素。默认head元素
 * @category DOM
 * @returns 返回一个Promise对象
 * @example
 * ``` typescript
 * // 添加到head元素中
 * loadCss('./index.css')
 *
 * // 添加到iframe中
 * loadCss('./index.css', $iframe.contentWindow.document.head)
 *
 * // 完成/失败的回调
 * loadCss('./index.css')
 * .then(() => {
 * // success
 * })
 * .catch(() => {
 * // fail
 * })
 * ```
 */
export function loadCss(url: string, el = document.head): Promise<void> {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    link.onload = () => resolve()
    link.onerror = () => reject(new Error(`Failed to load CSS: ${url}`))
    el.appendChild(link)
  })
}

/**
 * 动态添加js
 * @param url js文件路径
 * @param el 指定添加到哪个元素。默认head元素
 * @category DOM
 * @returns 返回一个Promise对象
 * @example
 * ``` typescript
 * // 添加到head元素中
 * loadScript('./index.js')
 *
 * // 添加到iframe中
 * loadScript('./index.js', $iframe.contentWindow.document.head)
 *
 * // 完成/失败的回调
 * loadScript('./index.js')
 * .then(() => {
 * // success
 * })
 * .catch(() => {
 * // fail
 * })
 * ```
 */
export function loadScript(url: string, el = document.head): Promise<string> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = () => resolve('resolve')
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`))
    el?.appendChild(script)
  })
}
