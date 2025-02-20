[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / objectToFormData

# Function: objectToFormData()

> **objectToFormData**\<`T`\>(`obj`): `null` \| `FormData`

Defined in: [object.ts:19](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/object.ts#L19)

把 Object 对象转成 FormData 格式

## Type Parameters

• **T**

## Parameters

### obj

`T`

需要转换的Object对象

## Returns

`null` \| `FormData`

返回FormDate对象。如果不是传递的参数不是object，那么将返回null

## Example

``` typescript
const formData = objectToFormData({ a: 1, b: 2 })
console.log(formData.get(a)) // '1'
```
