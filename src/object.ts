/**
 * @Author: Mojie
 * @Date: 2021-11-05 11:06:26
 */

/**
 * 把 Object 对象转成 FormData 格式
 * @param obj 需要转换的Object对象
 * @category Object
 * @returns 返回FormDate对象
 * @example
 * ``` typescript
 * const formData = objectToFormData({ a: 1, b: 2 })
 * console.log(formData.get(a)) // '1'
 * ```
 */
export const objectToFormData = (obj: object): FormData => {
  const formData = new FormData()
  Object.keys(obj).forEach((key) => {
    formData.append(key, (obj as IndexSign)[key])
  })
  return formData
}
