[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / loadCss

# Function: loadCss()

> **loadCss**(`url`, `el`): `Promise`\<`void`\>

Defined in: [dom.ts:279](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/dom.ts#L279)

动态添加css

## Parameters

### url

`string`

css文件路径

### el

`HTMLHeadElement` = `document.head`

指定添加到哪个元素。默认head元素

## Returns

`Promise`\<`void`\>

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
