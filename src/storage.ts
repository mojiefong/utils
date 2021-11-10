/**
 * @Author: Mojie
 * @Date: 2021-11-08 14:03:58
 */

/**
 * 获取登录令牌
 * @param { string } key
 * @returns { string | null }
 */
export const getAuthToken = (key: string): string | null => {
  return localStorage.getItem(key)
}

/**
 * 设置登录令牌
 * @param { string } key
 * @param { string } token
 */
export const setAuthToken = (key: string, token: string): void => {
  localStorage.setItem(key, token)
}

/**
 * 删除登录令牌
 * @param { string } key
 */
export const removeAuthToken = (key: string): void => {
  localStorage.removeItem(key)
}
