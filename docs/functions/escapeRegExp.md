[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / escapeRegExp

# Function: escapeRegExp()

> **escapeRegExp**(`str`): `string`

Defined in: [string.ts:40](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/string.ts#L40)

转义要在正则表达式中使用的特殊字符

## Parameters

### str

`string`

需要转义的字符串

## Returns

`string`

返回转义后的字符串。如果str参数不是string类型则返回空字符串

## Description

"^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{" , "}", "|"

## Example

``` typescript
escapeRegExp('.') // '\.'
escapeRegExp('[') // '\['
escapeRegExp('123') // '123'
escapeRegExp('(*)') // '\(\*\)'
escapeRegExp('[Hello World]'.replace(new RegExp(escapeRegExp('[')), '')) // 'Hello World]'
```
