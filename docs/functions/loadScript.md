[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / loadScript

# Function: loadScript()

> **loadScript**(`url`, `el`?): `Promise`\<`string`\>

Defined in: [dom.ts:329](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/dom.ts#L329)

动态添加js

## Parameters

### url

`string`

js文件路径

### el?

`HTMLElement`

指定添加到哪个元素。默认head元素

## Returns

`Promise`\<`string`\>

返回一个Promise对象

## Example

``` typescript
// 添加到head元素中
loadScript('./index.js')

// 添加到iframe中
loadScript('./index.js', $iframe.contentWindow.document.head)

// 完成/失败的回调
loadScript('./index.js')
.then(() => {
// success
})
.catch(() => {
// fail
})
```
