/**
 * @Author: Mojie
 * @Date: 2021-11-05 11:06:26
 */

import { isObject } from './is'

/**
 * 把 Object 对象转成 FormData 格式
 * @param obj 需要转换的Object对象
 * @category Object
 * @returns 返回FormDate对象。如果不是传递的参数不是object，那么将返回null
 * @example
 * ``` typescript
 * const formData = objectToFormData({ a: 1, b: 2 })
 * console.log(formData.get(a)) // '1'
 * ```
 */
export function objectToFormData<T>(obj: T) {
  const formData = new FormData()
  if (!isObject(obj)) return null
  Object.keys(obj).forEach((key) => {
    formData.append(key, (obj as any)[key])
  })
  return formData
}
