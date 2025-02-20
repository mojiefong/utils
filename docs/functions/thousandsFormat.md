[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / thousandsFormat

# Function: thousandsFormat()

> **thousandsFormat**(`num`): `string` \| `0`

Defined in: [math.ts:43](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/math.ts#L43)

千分位格式化

## Parameters

### num

需要格式化的数字或者字符串

`string` | `number`

## Returns

`string` \| `0`

返回格式化后的字符串

## Example

``` typescript
thousandsFormat(0) // 0
thousandsFormat(1234.123456789) // '1,234.123456789'
thousandsFormat('$1234') // '$1,234'
```
