[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / getScrollPosition

# Function: getScrollPosition()

> **getScrollPosition**(`el`): `object`

Defined in: [dom.ts:134](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/dom.ts#L134)

获取当前的滚动位置

## Parameters

### el

`Window` & *typeof* `globalThis` = `window`

监听的元素。默认window

## Returns

`object`

返回的x的距离和y的距离

### x

> **x**: `number`

### y

> **y**: `number`

## Example

``` typescript
// 获取window的滚动位置
getScrollPosition() // { x: 0, y: 0 }
// 获取body的滚动位置
getScrollPosition(document.body) // { x: 0, y: 0 }
```
