[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / copyClip

# Function: copyClip()

> **copyClip**(`key`): `void`

Defined in: [dom.ts:167](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/dom.ts#L167)

复制内容到剪切板

## Parameters

### key

`string`

需要写入剪切板的文字

## Returns

`void`

## Description

navigator.clipboard只能在https中才能使用。为了做兼容，使用已经废弃的document.execCommand()方法确保功能可用
