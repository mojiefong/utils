/**
 * @Author: Mojie
 * @Date: 2021-11-05 10:58:31
 */

/**
 * 添加class
 * @param { HTMLElement } el
 * @param { Array } className
 */
export const addClass = (el: HTMLElement, ...className: string[]): void => {
  className.forEach((name) => {
    el.classList.add(name)
  })
}

/**
 * 删除class
 * @param { HTMLElement } el
 * @param { Array } className
 */
export const removeClass = (el: HTMLElement, ...className: string[]): void => {
  className.forEach((name) => {
    el.classList.remove(name)
  })
}

/**
 * 是否存在class
 * @param { HTMLElement } el
 * @param { string } className
 * @returns { boolean }
 */
export const hasClass = (el: HTMLElement, className: string): boolean => {
  return el.classList.contains(className)
}

/**
 * 切换class
 * @param { HTMLElement } el
 * @param { string } className
 */
export const toggleClass = (el: HTMLElement, className: string): void => {
  el.classList.toggle(className)
}

/**
 * 平滑滚动到顶部
 */
export const scrollToTop = (): void => {
  const height = document.documentElement.scrollTop || document.body.scrollTop
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, height - height / 8)
  }
}

/**
 * 平滑滚动到指定位置
 * @param { HTMLElementTagNameMap } element
 */
export const smoothScroll = <T extends keyof HTMLElementTagNameMap>(
  element: T
): void => {
  document.querySelector(element)?.scrollIntoView({
    behavior: 'smooth',
  })
}

/**
 * 获取当前的滚动位置
 * @param { HTMLElement } el
 * @returns { Object }
 */
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset,
  y: el.pageYOffset,
})

/**
 * 获取滚动条距离顶部高度
 * @returns { number }
 */
export const getPageScrollTop = (): number => {
  return document.documentElement.scrollTop || document.body.scrollTop
}

/**
 * 获取滚动条距离左边的宽度
 * @returns { number }
 */
export const getPageScrollLeft = (): number => {
  return document.documentElement.scrollLeft || document.body.scrollLeft
}

/**
 * 复制内容到剪切板
 * @param { string } text
 * @returns { string }
 */
export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text)
}

/**
 * 获取鼠标选中的文本
 */
export const getSelectedText = (): string | undefined => {
  return window.getSelection()?.toString()
}

/**
 * 打开浏览器全屏
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
 * @param { Blob } blob
 * @param { string } fileName
 */
export const downloadBlobFile = (blob: Blob, fileName = 'download'): void => {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()
  URL.revokeObjectURL(url)
}

/**
 * 关键字高亮
 * @param { string } content
 * @param { string } keyword
 * @param { string } backgroundColor
 * @returns { string }
 */
export const keywordHighlighting = (
  content: string,
  keyword: string,
  backgroundColor: 'red'
): string => {
  if (!keyword) return content
  return content.replaceAll(keyword, (txt) => {
    return `<font style="background: ${backgroundColor}">${txt}</font>`
  })
}

/**
 * 动态添加css
 * @param { string } url
 * @param { HTMLElement } [el]
 * @returns { Promise }
 */
export const loadCss = (
  url: string,
  el?: HTMLElement | null
): Promise<string> => {
  el = el || document.querySelector('head')
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
 * @param { string } url
 * @param { HTMLElement } [el]
 * @returns { Promise }
 */
export const loadScript = (
  url: string,
  el?: HTMLElement | null
): Promise<string> => {
  return new Promise((resolve, reject) => {
    el = el || document.querySelector('head')
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

/**
 * 下载blob流文件
 * @param { Blob } blob
 * @param { string } fileName
 */
export const downloadByBlob = (blob: Blob, fileName: string): void => {
  const blobUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = blobUrl
  link.download = fileName
  link.click()
  URL.revokeObjectURL(blobUrl)
}
