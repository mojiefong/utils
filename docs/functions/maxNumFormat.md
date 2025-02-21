[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / maxNumFormat

# Function: maxNumFormat()

> **maxNumFormat**(`val`, `maxNum`): `string` \| `number`

Defined in: [math.ts:110](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/math.ts#L110)

数字超过规定大小加上 '+' 号。

## Parameters

### val

当前的数值

`string` | `number`

### maxNum

`number`

最大的数值

## Returns

`string` \| `number`

如果当前的数值大于最大的数值则返回'n+'，否则返回n

## Description

如数字超过99显示99+

## Example

``` typescript
maxNumFormat(99, 99) // 99
maxNumFormat(99, 99) // 99
maxNumFormat('100', 99) // '99+'
```
