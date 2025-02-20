[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / loadCss

# Function: loadCss()

> **loadCss**(`url`, `el`?): `Promise`\<`string`\>

Defined in: [dom.ts:288](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/dom.ts#L288)

动态添加css

## Parameters

### url

`string`

css文件路径

### el?

`HTMLElement`

指定添加到哪个元素。默认head元素

## Returns

`Promise`\<`string`\>

返回一个Promise对象

## Example

``` typescript
// 添加到head元素中
loadCss('./index.css')

// 添加到iframe中
loadCss('./index.css', $iframe.contentWindow.document.head)

// 完成/失败的回调
loadCss('./index.css')
.then(() => {
// success
})
.catch(() => {
// fail
})
```
