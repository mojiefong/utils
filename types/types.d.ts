/**
 * @Author: Mojie
 * @Date: 2021-11-04 14:45:34
 */

/**
 * 索引签名
 */
type Indexable<T = any> = {
  [key: string]: T
}

/**
 * Promise 或者不是
 */
type Awaitable<T> = T | PromiseLike<T>

/**
 * null、undefined或者其它
 */
type Nullable<T> = T | null | undefined

/**
 * Array 或者还没有
 */
type Arrayable<T> = T | Array<T>

/**
 * Function
 */
type Fn<T = void> = () => T

/**
 * 全屏API兼容
 */
type RequestFullScreen = HTMLElement & {
  /** Firefox */
  mozRequestFullScreen(): Promise<void>
  /** IE/Edge */
  msRequestFullscreen(): Promise<void>
  /** Chrome, Safari and Opera */
  webkitRequestFullscreen(): Promise<void>
}

/**
 * 关键字高亮
 */
type KeywordHighlight = {
  /** 正则修饰符g、i、m、s */
  modifiers?: string
  /** 自定义样式 */
  style?: object
}
