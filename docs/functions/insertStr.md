[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / insertStr

# Function: insertStr()

> **insertStr**(`str`, `beginIndex`, `newStr`): `string`

Defined in: [string.ts:104](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/string.ts#L104)

根据索引插入字符串

## Parameters

### str

`string`

原始字符串

### beginIndex

`number`

索引开始位置

### newStr

`string`

插入新的字符串

## Returns

`string`

返回根据索引插入的字符串

## Example

``` typescript
insertStr('Hello World', 6, 'TypeScript ') // Hello TypeScript World
```
