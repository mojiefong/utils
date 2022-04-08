/**
 * @Author: Mojie
 * @Date: 2022-04-08 15:54:30
 */

/**
 * Promise 或者不是
 */
export type Awaitable<T> = T | PromiseLike<T>

/**
 * null、undefined或者其它
 */
export type Nullable<T> = T | null | undefined

/**
 * Array 或者还没有
 */
export type Arrayable<T> = T | Array<T>

/**
 * Function
 */
export type Fn<T = void> = () => T

/**
 * 索引签名
 */
export type Indexable<T = any> = {
  [key: string]: T
}

/**
 * 全屏API兼容
 */
export type RequestFullScreen = HTMLElement & {
  /** Firefox */
  mozRequestFullScreen(): Promise<void>
  /** IE */
  msRequestFullscreen(): Promise<void>
  /** Chrome, Safari and Opera */
  webkitRequestFullscreen(): Promise<void>
}
