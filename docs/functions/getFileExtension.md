[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / getFileExtension

# Function: getFileExtension()

> **getFileExtension**(`fileName`, `split`): `undefined` \| `string`

Defined in: [string.ts:20](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/string.ts#L20)

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
getFileExtension('file-name.pdf') // 'pdf'
getFileExtension('hello.js', true) // .js
```
