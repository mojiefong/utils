[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / round

# Function: round()

> **round**(`val`, `precision`): `number`

Defined in: [math.ts:145](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/math.ts#L145)

将数字四舍五入到指定的位数

## Parameters

### val

需要指定的数值

`string` | `number`

### precision

`number` = `0`

指定多少位小数

## Returns

`number`

返回四舍五入后指定的位数的数值

## Example

``` typescript
round(12.1) // 12
round(12.5) // 13
round(12.55, 1) // 12.6
round(12.514, 2) // 12.51
round(12.5144, 3) // 12.514
round('18.888', 2) // 18.89
```
