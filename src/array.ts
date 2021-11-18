/**
 * @Author: Mojie
 * @Date: 2021-11-03 11:08:07
 */

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
export const toArray = <T>(target?: T | T[]): T[] => {
  target = target || []
  if (Array.isArray(target)) return target
  return [target]
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
export const groupBy = <T>(arr: T[], property: string): object => {
  return arr.reduce((acc: AnyType, item: AnyType) => {
    return (acc[item[property]] = [...(acc[item[property]] || []), item]), acc
  }, {})
}
