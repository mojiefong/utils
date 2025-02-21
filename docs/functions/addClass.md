[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / addClass

# Function: addClass()

> **addClass**(`el`, ...`className`): `void`

Defined in: [dom.ts:23](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/dom.ts#L23)

添加class

## Parameters

### el

`HTMLElement`

需要添加的元素

### className

...`string`[]

添加的class名称，可以是多个

## Returns

`void`

## Example

``` typescript
// 指定一个class
addClass(document.body, 'className')
// 指定多个class
addClass(document.body, 'className1', 'className2', 'className3')
```
