/**
 * @Author: Mojie
 * @Date: 2021-11-08 14:03:58
 */

/**
 * 序列化
 * @param { * } val
 * @returns { string }
 */
function serialize(val: unknown): string {
  return JSON.stringify(val)
}

/**
 * 反序列化
 * @param { string } val
 * @returns { * }
 */
function deserialize(val: string): unknown {
  try {
    return JSON.parse(val)
  } catch {
    return val
  }
}

/*********************************
 * localStorage
 *********************************/
/**
 * localStorage.getItem
 * @param { string } key
 * @returns { * }
 */
export const localGet = (key: string): unknown => {
  // TODO: localGet('key1', 'key2', 'key3');
  return deserialize(localStorage.getItem(key) as string)
}

/**
 * localStorage.setItem
 * @param { string }  key
 * @param { * } value
 */
export const localSet = (key: string, value: unknown): void => {
  localStorage.setItem(key, serialize(value))
}

/**
 * localStorage.removeItem
 * @param { string} key
 */
export const localRemove = (key: string): void => {
  localStorage.removeItem(key)
}

/**
 * 判断 localStorage 中是否存在指定的key
 * @param { string } key
 * @returns { boolean }
 */
export const localHas = (key: string): boolean => localGet(key) !== null

/*********************************
 * sessionStorage
 *********************************/
/**
 * sessionStorage.getItem
 * @param { string } key
 * @returns { * }
 */
export const sessionGet = (key: string): unknown => {
  return deserialize(sessionStorage.getItem(key) as string)
}

/**
 * sessionStorage.setItem
 * @param { string } key
 * @param { * } value
 */
export const sessionSet = (key: string, value: unknown): void => {
  sessionStorage.setItem(key, serialize(value))
}

/**
 * sessionStorage.removeItem
 * @param { string } key
 */
export const sessionRemove = (key: string): void => {
  sessionStorage.removeItem(key)
}

/**
 * 判断 sessionRemove 中是否存在指定的key
 * @param { string } key
 * @returns { boolean }
 */
export const sessionHas = (key: string): boolean => sessionGet(key) !== null

/*********************************
 * storage
 *********************************/
/**
 * 清空 localStorage 和 sessionStorage
 * @param { string } storageType
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
