[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / head

# Function: head()

> **head**\<`T`\>(`arr`): `Nullable`\<`T`\>

Defined in: [array.ts:37](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/array.ts#L37)

获取数组的第一个元素

## Type Parameters

• **T**

## Parameters

### arr

`T`[]

需要获取的数组

## Returns

`Nullable`\<`T`\>

返回数组的第一个元素。如果参数不是数组则返回原值

## Example

```
head([1,2,3]) // 1
head([{a: 1},{b: 2}]) // {a: 1}
```
