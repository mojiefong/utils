[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / truncate

# Function: truncate()

> **truncate**(`str`, `endIndex`, `beginIndex`, `suffix`): `string`

Defined in: [string.ts:70](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/string.ts#L70)

字符串截取

## Parameters

### str

`string`

需要截取的字符串

### endIndex

`number`

结束提取字符串的索引

### beginIndex

`number` = `0`

开始提取字符串的索引

### suffix

`string` = `'...'`

后缀

## Returns

`string`

返回截取后的字符串和后缀

## Example

``` typescript
truncate('JavaScript', 4) // 'Java...'
```
