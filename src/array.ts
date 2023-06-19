/**
 * @Author: Mojie
 * @Date: 2021-11-03 11:08:07
 */

import type { Arrayable, Nullable } from './types'
import { isString } from './is'

/**
 * 将任意类型转成数组
 * @param target 目标数据
 * @category Array
 * @returns 返回一个数组
 * @example
 * ``` typescript
 * toArray(null) // []
 * toArray(123) // [123]
 * toArray({a: 1}) // [{a: 1}]
 * toArray('1,2,3') // ['1,2,3']
 * ```
 */
export function toArray<T>(target?: Nullable<Arrayable<T>>): T[] {
  target = target || []
  return Array.isArray(target) ? target : [target]
}

/**
 * 根据key对一组对象进行分组
 * @param arr 需要进行分组的数组
 * @param property 指定key进行分组
 * @returns 返回组合后的对象
 * @category Array
 * @example
 * ``` typescript
 * groupBy(['one', 'two', 'three'], 'length') // { '3': ['one', 'two'], '5': ['three'] }
 * groupBy(
 *  [
 *    { branch: 'audi', model: 'q8', year: '2019' },
 *    { branch: 'audi', model: 'rs7', year: '2020' },
 *    { branch: 'ford', model: 'mustang', year: '2019' },
 *    { branch: 'ford', model: 'explorer', year: '2020' },
 *    { branch: 'bmw', model: 'x7', year: '2020' },
 *  ], 'branch'
 * )
 * // 返回
 * {
 *  audi: [
 *    { branch: 'audi', model: 'q8', year: '2019' },
 *    { branch: 'audi', model: 'rs7', year: '2020' },
 *  ],
 *  bmw: [{ branch: 'bmw', model: 'x7', year: '2020' }],
 *  ford: [
 *    { branch: 'ford', model: 'mustang', year: '2019' },
 *    { branch: 'ford', model: 'explorer', year: '2020' },
 *  ]
 * }
 * ```
 */
export function groupBy<T>(arr: T[], fn: string | (<T>(val: T, index?: number, arr?: T[]) => T)): T {
  return arr.map(isString(fn) ? (val: any) => val[fn] : fn).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i])
    return acc
  }, {})
}

/**
 * 获取数组的第一个元素
 * @param arr 需要获取的数组
 * @category Array
 * @returns 返回数组的第一个元素。如果参数不是数组则返回原值
 * @example
 * ```
 * head([1,2,3]) // 1
 * head([{a: 1},{b: 2}]) // {a: 1}
 * ```
 */
export const head = <T>(arr: T[]): Nullable<T> => Array.isArray(arr) ? arr[0] : arr

/**
 * 获取数组的最后一个元素
 * @param arr 需要获取的数组
 * @category Array
 * @returns 返回数组的最后一个元素。如果参数不是数组则返回原值
 * @example
 * ``` typescript
 * last([1, 2, 3] // 3
 * last([{a: 1}, {b: 2}]) // {b: 2}
 * ```
 */
export const last = <T>(arr: T[]): Nullable<T> => Array.isArray(arr) ? arr.at(-1) : arr
