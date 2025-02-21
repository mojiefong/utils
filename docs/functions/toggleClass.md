[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / toggleClass

# Function: toggleClass()

> **toggleClass**(`el`, `className`): `boolean`

Defined in: [dom.ts:70](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/dom.ts#L70)

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
