[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / toThousands

# Function: toThousands()

> **toThousands**(`num`): `string` \| `0`

Defined in: [math.ts:58](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/math.ts#L58)

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
toThousands(0) // 0
toThousands(1234.123456789) // '1,234.123456789'
toThousands('$1234') // '$1,234'
```
