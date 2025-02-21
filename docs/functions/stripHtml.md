[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / stripHtml

# Function: stripHtml()

> **stripHtml**(`str`): `string`

Defined in: [string.ts:53](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/string.ts#L53)

移除字符串中的HTML标签

## Parameters

### str

`string`

包含HTML标签的字符串

## Returns

`string`

返回清除HTML标签后的纯文本

## Example

``` typescript
stripHtml('<html>123</html>') // '123'
stripHtml('<html></html>') // ''
```
