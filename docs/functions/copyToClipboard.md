[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / copyToClipboard

# Function: copyToClipboard()

> **copyToClipboard**(`text`): `void`

Defined in: [dom.ts:161](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/dom.ts#L161)

复制内容到剪切板

## Parameters

### text

`string`

需要写入剪切板的文字

## Returns

`void`

## Description

navigator.clipboard只能在https中才能使用。为了做兼容，使用已经废弃的document.execCommand()方法确保功能可用
