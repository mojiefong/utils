/**
 * @Author: Mojie
 * @Date: 2021-11-08 14:03:58
 */

import { deserialize, serialize } from './function'

/*********************************
 * localStorage
 *********************************/
/**
 * 获取localStorage
 * @param key 需要获取的key名称
 * @category WebStorage
 * @returns 返回key对应的值。如果不存在则返回null
 */
export const localGet = (key: string): unknown => {
  // TODO: localGet('key1', 'key2', 'key3');
  return deserialize(localStorage.getItem(key) as string)
}

/**
 * 设置localStorage
 * @param key 需要存储的key名称
 * @param value 存储key对应的值
 * @category WebStorage
 */
export const localSet = (key: string, value: unknown): void => {
  localStorage.setItem(key, serialize(value))
}

/**
 * 移除localStorage
 * @param key 需要移除的key名称
 * @category WebStorage
 */
export const localRemove = (key: string): void => {
  localStorage.removeItem(key)
}

/**
 * 判断localStorage中是否存在指定的key
 * @param key 需要查询的key名称
 * @category WebStorage
 * @returns 如果存在则返回true，否则返回false
 */
export const localHas = (key: string): boolean => localGet(key) !== null

/*********************************
 * sessionStorage
 *********************************/
/**
 * 获取sessionStorage
 * @param key 需要获取key名称
 * @category WebStorage
 * @returns 返回key对应的值。如果不存在则返回null
 */
export const sessionGet = (key: string): unknown => {
  return deserialize(sessionStorage.getItem(key) as string)
}

/**
 * 设置sessionStorage
 * @param key 需要存储的key名称
 * @param value 存储key对应的值
 * @category WebStorage
 */
export const sessionSet = (key: string, value: unknown): void => {
  sessionStorage.setItem(key, serialize(value))
}

/**
 * 移除sessionStorage
 * @param key 需要移除的key名称
 * @category WebStorage
 */
export const sessionRemove = (key: string): void => {
  sessionStorage.removeItem(key)
}

/**
 * 判断sessionRemove中是否存在指定的key
 * @param key 需要查询的key名称
 * @category WebStorage
 * @returns 如果存在则返回true，否则返回false
 */
export const sessionHas = (key: string): boolean => sessionGet(key) !== null

/*********************************
 * storage
 *********************************/
/**
 * 清空 localStorage 和 sessionStorage
 * @param storageType 用于指定清除 localStorage 还是 sessionStorage。默认是清除所有
 * @category WebStorage
 */
export const storageClear = (storageType?: StorageType): void => {
  if (!storageType) {
    localStorage.clear()
    sessionStorage.clear()
    return
  }
  storageType === 'local' ? localStorage.clear() : sessionStorage.clear()
}

// export const storageKeys = () => {}
// export const storageSearch = () => {}
// export const storageForEach = () => {}
