/**
 * @Author: Mojie
 * @Date: 2021-11-04 14:45:34
 */

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
interface Indexable<T = any> {
  [key: string]: T
}

/**
 * 本地存储类型
 */
type StorageType = 'local' | 'session'
