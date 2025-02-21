[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / hasClass

# Function: hasClass()

> **hasClass**(`el`, `className`): `boolean`

Defined in: [dom.ts:54](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/dom.ts#L54)

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
