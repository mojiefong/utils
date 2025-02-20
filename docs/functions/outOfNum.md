[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / outOfNum

# Function: outOfNum()

> **outOfNum**(`val`, `maxNum`): `string` \| `number`

Defined in: [math.ts:95](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/math.ts#L95)

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
outOfNum(99, 99) // 99
outOfNum(99, 99) // 99
outOfNum('100', 99) // '99+'
```
