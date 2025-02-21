[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / insertStr

# Function: insertStr()

> **insertStr**(`str`, `beginIndex`, `newStr`): `string`

Defined in: [string.ts:102](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/string.ts#L102)

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
