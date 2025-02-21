[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / replaceStr

# Function: replaceStr()

> **replaceStr**(`str`, `beginIndex`, `endIndex`, `replacement`): `string`

Defined in: [string.ts:86](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/string.ts#L86)

根据索引替换字符串

## Parameters

### str

`string`

原始字符串

### beginIndex

`number`

索引开始位置

### endIndex

`number`

索引结束位置

### replacement

`string`

替换的新字符串

## Returns

`string`

返回根据索引替换后的字符串

## Example

``` typescript
replaceStr('Hello World', 6, 11, 'TypeScript') // Hello TypeScript
replaceStr('Hello World', 6, 7, 'w') // Hello world
```
