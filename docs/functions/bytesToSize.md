[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / bytesToSize

# Function: bytesToSize()

> **bytesToSize**(`bytes`): `string`

Defined in: [math.ts:60](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/math.ts#L60)

字节转换

## Parameters

### bytes

`number`

需要转换的字节

## Returns

`string`

返回根据大小转换后对应的容量单位

## Example

``` typescript
bytesToSize(1000) // '1000.00 B'
bytesToSize(1024) // '1.00 KB'
bytesToSize(1024 * 1024) // '1.00 MB'
bytesToSize(1024 ** 3) // '1.00 GB'
```
