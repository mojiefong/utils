[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / getFileExt

# Function: getFileExt()

> **getFileExt**(`fileName`, `split`): `undefined` \| `string`

Defined in: [string.ts:20](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/string.ts#L20)

获取文件后缀名

## Parameters

### fileName

`string`

文件名称

### split

`boolean` = `false`

是否需要后缀名前面的分割点

## Returns

`undefined` \| `string`

返回文件后缀名

## Example

``` typescript
getFileExt('file-name.pdf') // 'pdf'
getFileExt('hello.js', true) // .js
```
