[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / getTypeof

# Function: getTypeof()

> **getTypeof**(`val`): `string`

Defined in: [is.ts:18](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/is.ts#L18)

检查类型

## Parameters

### val

`unknown`

需要进行检查的值

## Returns

`string`

返回检查后的类型

## Example

``` typescript
getTypeof({}) // 'Object'
getTypeof([]) // 'Array'
getTypeof('') // 'String'
```
