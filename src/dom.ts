/**
 * @Author: Mojie
 * @Date: 2021-11-05 10:58:31
 */

import type { RequestFullScreen } from './types'
import { escapeRegExp } from './string'
import { stringifyQuery } from './function'

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
export const addClass = (el: HTMLElement, ...className: string[]): void => {
  className.forEach((name) => {
    el.classList.add(name)
  })
}

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
export const removeClass = (el: HTMLElement, ...className: string[]): void => {
  className.forEach((name) => {
    el.classList.remove(name)
  })
}

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
export const hasClass = (el: HTMLElement, className: string): boolean => {
  return el.classList.contains(className)
}

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
export const toggleClass = (el: HTMLElement, className: string): boolean => {
  return el.classList.toggle(className)
}

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
export const replaceClass = (
  el: HTMLElement,
  oldClassName: string,
  newClassName: string
): boolean => el.classList.replace(oldClassName, newClassName)

/**
 * 将滚动条平滑滚动到顶部
 * @category DOM Scroll
 */
export const scrollToTop = (): void => {
  const height = document.documentElement.scrollTop || document.body.scrollTop
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, height - height / 8)
  }
}

/**
 * 将滚动条平滑滚动到指定位置
 * @param el 滚动到指定的元素
 * @category DOM Scroll
 */
export const smoothScroll = <T extends keyof HTMLElementTagNameMap>(
  el: T
): void => {
  document.querySelector(el)?.scrollIntoView({
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
 * getScrollPosition() // { x: 0, y: 0 }
 * // 获取body的滚动位置
 * getScrollPosition(document.body) // { x: 0, y: 0 }
 * ```
 */
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset || (el as unknown as HTMLElement).scrollLeft,
  y: el.pageYOffset || (el as unknown as HTMLElement).scrollTop,
})

/**
 * 获取滚动条距离顶部高度
 * @category DOM Scroll
 * @returns 返回距离顶部高度
 */
export const getPageScrollTop = (): number => {
  return document.documentElement.scrollTop || document.body.scrollTop
}

/**
 * 获取滚动条距离左边的宽度
 * @category DOM Scroll
 * @returns 返回距离左边的宽度
 */
export const getPageScrollLeft = (): number => {
  return document.documentElement.scrollLeft || document.body.scrollLeft
}

/**
 * 复制内容到剪切板
 * @param text 需要写入剪切板的文字
 * @category DOM
 */
export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text)
}

/**
 * 获取鼠标选中的文本
 * @category DOM
 * @returns 返回选中的文本
 */
export const getSelectedText = (): string | undefined => {
  return window.getSelection()?.toString()
}

/**
 * 打开浏览器全屏
 * @category DOM
 */
export const openFullScreen = () => {
  const element = document.body as RequestFullScreen
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  }
}

/**
 * 退出浏览器全屏
 * @category DOM
 */
export const exitFullScreen = () => {
  const element = document.body as RequestFullScreen
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  }
}

/**
 * 下载blob文件
 * @param blob Blob对象
 * @param fileName 文件名称
 * @category DOM Download
 */
export const downloadBlobFile = (blob: Blob, fileName: string): void => {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()
  URL.revokeObjectURL(url)
}

/**
 * 关键字高亮
 * @param content 文本内容
 * @param keyword 需要高亮的关键字
 * @param options 配置选项
 * @category DOM
 * @returns 返回新的文本内容
 * @example
 * ``` typescript
 * keywordHighlight('Hello World', 'Hello')
 * // '<font style="background: red">Hello</font> World'
 * keywordHighlight('Hello WorLd', 'l')
 * // 会匹配所有的 l，并且不区分大小写
 * // 'He<font style="background: red">l</font><font style="background: red">l</font>o Wor<font style="background: red">L</font>d'
 * keywordHighlight('Hello World', 'Hello', { style: { color: 'red' } })
 * // '<font style="color:red">Hello</font> World'
 * ```
 */
export const keywordHighlight = (
  content: string,
  keyword: string,
  options: {
    /** 正则修饰符g、i、m、s。默认为：gi */
    modifiers?: string
    /** 自定义样式 */
    style?: object
  }
): string => {
  if (!content) return ''
  if (!keyword) return content

  return content.replace(
    new RegExp(escapeRegExp(keyword), options.modifiers ?? 'gi'),
    (txt) => {
      if (options.style) {
        const style = stringifyQuery(options.style, false, ':', ';')
        return `<font style="${style}">${txt}</font>`
      }
      return `<font style="background: red">${txt}</font>`
    }
  )
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
export const loadCss = (url: string, el?: HTMLElement): Promise<string> => {
  el = el || (document.querySelector('head') as any)
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = url
    link.onload = () => {
      resolve('resolve')
    }
    link.onerror = () => {
      reject('reject')
    }
    el?.appendChild(link)
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
export const loadScript = (url: string, el?: HTMLElement): Promise<string> => {
  return new Promise((resolve, reject) => {
    el = el || (document.querySelector('head') as any)
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.onload = () => {
      resolve('resolve')
    }
    script.onerror = () => {
      reject('reject')
    }
    el?.appendChild(script)
  })
}
