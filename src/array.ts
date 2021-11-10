/**
 * @Author: Mojie
 * @Date: 2021-11-03 11:08:07
 */

/**
 * 将任意类型转成数组
 * @param { * } array
 * @returns { Array }
 */
export const toArray = <T>(array?: T | Array<T>): Array<T> => {
  array = array || []
  if (Array.isArray(array)) return array
  return [array]
}
