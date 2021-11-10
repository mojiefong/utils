/**
 * @Author: Mojie
 * @Date: 2021-11-04 14:45:34
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyType = any

/**
 * 全屏API兼容
 */
type RequestFullScreen = HTMLElement & {
  // Firefox
  mozRequestFullScreen(): Promise<void>
  // IE/Edge
  msRequestFullscreen(): Promise<void>
  // Chrome, Safari and Opera
  webkitRequestFullscreen(): Promise<void>
}

/**
 * 索引签名
 */
type IndexSign = { [key: string]: AnyType }
