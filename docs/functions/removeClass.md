[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / removeClass

# Function: removeClass()

> **removeClass**(`el`, ...`className`): `void`

Defined in: [dom.ts:43](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/dom.ts#L43)

删除class

## Parameters

### el

`HTMLElement`

需要删除的元素

### className

...`string`[]

删除的class名称，可以是多个

## Returns

`void`

## Example

``` typescript
// 指定一个class
removeClass(document.body, 'className')
// 指定多个class
removeClass(document.body, 'className1', 'className2', 'className3')
```
