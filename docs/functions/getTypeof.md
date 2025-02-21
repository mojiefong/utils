[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / getTypeof

# Function: getTypeof()

> **getTypeof**(`val`): `string`

Defined in: [is.ts:18](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/is.ts#L18)

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
