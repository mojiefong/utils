[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / toggleClass

# Function: toggleClass()

> **toggleClass**(`el`, `className`): `boolean`

Defined in: [dom.ts:79](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/dom.ts#L79)

切换class

## Parameters

### el

`HTMLElement`

需要切换的元素

### className

`string`

需要切换的class名称

## Returns

`boolean`

如果class添加成功则返回true，被删除否则返回false

## Example

``` typescript
// 如果添加成功则返回true
toggleClass(document.body, 'className') // true
// 如果删除成功则返回false
toggleClass(document.body, 'className') // false
```
