[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / decode

# Function: decode()

> **decode**(`str`): `string`

Defined in: [function.ts:18](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/function.ts#L18)

字符解码

## Parameters

### str

`string`

需要解码的字符

## Returns

`string`

返回解码后的字符。如果解码失败则返回原字符

## Example

``` typescript
decode('%E4%BD%A0%E5%A5%BD') // '你好'
```
