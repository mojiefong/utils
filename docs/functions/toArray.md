[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / toArray

# Function: toArray()

> **toArray**\<`T`\>(`target`?): `T`[]

Defined in: [array.ts:21](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/array.ts#L21)

将任意类型转成数组

## Type Parameters

• **T**

## Parameters

### target?

`Nullable`\<`Arrayable`\<`T`\>\>

目标数据

## Returns

`T`[]

返回一个数组

## Example

``` typescript
toArray(null) // []
toArray(123) // [123]
toArray({a: 1}) // [{a: 1}]
toArray('1,2,3') // ['1,2,3']
```
