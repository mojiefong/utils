[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / hasClass

# Function: hasClass()

> **hasClass**(`el`, `className`): `boolean`

Defined in: [dom.ts:63](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/dom.ts#L63)

是否存在class

## Parameters

### el

`HTMLElement`

需要检查的元素

### className

`string`

需要检查的class名称

## Returns

`boolean`

当class存在时返回true，否则返回false

## Example

``` typescript
// 如果 className 存在则返回true
hasClass(document.body, 'className') // true
// 如果 className1 不存在则返回false
hasClass(document.body, 'className1') // false
```
