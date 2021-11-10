/**
 * @Author: Mojie
 * @Date: 2021-11-05 11:06:26
 */

/**
 * 把 Object 对象转成 FormData 格式
 * @param { Object } obj
 * @returns { FormData }
 */
export const toFormData = <T>(obj: T): FormData => {
  const formData = new FormData()
  Object.keys(obj).forEach((key) => {
    formData.append(key, (obj as IndexSign)[key])
  })
  return formData
}
