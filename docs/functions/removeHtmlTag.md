[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / removeHtmlTag

# Function: removeHtmlTag()

> **removeHtmlTag**(`str`): `string`

Defined in: [string.ts:55](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/string.ts#L55)

去除HTML标签

## Parameters

### str

`string`

需要去除的html字符串

## Returns

`string`

返回去除标签后的字符串

## Example

``` typescript
removeHtmlTag('<html>123</html>') // '123'
removeHtmlTag('<html></html>') // ''
```
