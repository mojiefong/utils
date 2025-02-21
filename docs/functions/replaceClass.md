[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / replaceClass

# Function: replaceClass()

> **replaceClass**(`el`, `oldClassName`, `newClassName`): `boolean`

Defined in: [dom.ts:87](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/dom.ts#L87)

替换class

## Parameters

### el

`HTMLElement`

需要替换的元素

### oldClassName

`string`

需要替换的class名称

### newClassName

`string`

新的class名称

## Returns

`boolean`

如果旧的class名称被替换成功，返回true，否则返回false

## Example

``` typescript
// 如果 className 存在则会替换成功，并且返回true
replaceClass(document.body, 'className', 'name') // true
// 如果 className1 不存在则不会改变原有的class，并且返回false
replaceClass(document.body, 'className1', 'name') // false
```
