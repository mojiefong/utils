[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / getScrollPos

# Function: getScrollPos()

> **getScrollPos**(`el`): `object`

Defined in: [dom.ts:140](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/dom.ts#L140)

获取当前的滚动位置

## Parameters

### el

监听的元素。默认window

`HTMLElement` | `Window`

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
getScrollPos() // { x: 0, y: 0 }
// 获取body的滚动位置
getScrollPos(document.body) // { x: 0, y: 0 }
```
