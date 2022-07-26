/**
 * @Author: Mojie
 * @Date: 2021-11-08 14:03:58
 */

import type { Nullable } from './types'

/**
 * 获取储存
 * @param key 键名
 * @param storage 指定本地存储还是会话存储。默认本地储存
 * @category WebStorage
 * @returns 返回键名对应的值，如果不存在则返回null
 */
export function getStorage<T = any>(
  key: string,
  storage: Storage = localStorage
): Nullable<T> {
  const data = storage.getItem(key)
  return data ? (JSON.parse(data) as T) : null
}

/**
 * 设置存储
 * @param key 键名
 * @param val 键值
 * @param storage 指定本地存储还是会话存储。默认本地储存
 * @category WebStorage
 */
export function setStorage<T = any>(
  key: string,
  val: T,
  storage: Storage = localStorage
) {
  storage.setItem(key, JSON.stringify(val))
}

/**
 * 是否存在指定的键名
 * @param key 键名
 * @param storage 指定本地存储还是会话存储。默认本地储存
 * @category WebStorage
 * @returns 如果存在则返回true，否则返回false
 */
export function hasStorage(key: string, storage: Storage = localStorage) {
  return getStorage(key, storage) !== null
}

/**
 * 移除储存
 * @param key 键名
 * @param storage 指定本地存储还是会话存储。默认本地储存
 * @category WebStorage
 */
export function removeStorage(key: string, storage: Storage = localStorage) {
  storage.removeItem(key)
}

/**
 * 清空存储
 * @param storage 指定本地存储还是会话存储。默认本地储存
 * @category WebStorage
 */
export function clearStorage(storage: Storage = localStorage) {
  storage.clear()
}
