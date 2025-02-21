[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / truncate

# Function: truncate()

> **truncate**(`str`, `endIndex`, `beginIndex`, `suffix`): `string`

Defined in: [string.ts:68](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/string.ts#L68)

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
