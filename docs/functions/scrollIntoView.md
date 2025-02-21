[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / scrollIntoView

# Function: scrollIntoView()

> **scrollIntoView**(`selector`): `boolean`

Defined in: [dom.ts:118](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/dom.ts#L118)

将滚动条平滑滚动到指定位置

## Parameters

### selector

`string`

CSS选择器

## Returns

`boolean`

如果找到元素并执行滚动，否则返回false

## Example

``` typescript
// 滚动到指定id的元素
scrollIntoView('#top')

// 滚动到指定class的元素
scrollIntoView('.scroll-to')

// 滚动到指定标签
scrollIntoView('header')
```
