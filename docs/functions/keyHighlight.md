[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / keyHighlight

# Function: keyHighlight()

> **keyHighlight**(`className`, `flags`): (`text`, `key`) => `string`

Defined in: [dom.ts:246](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/dom.ts#L246)

关键字高亮

## Parameters

### className

`string` = `'highlight'`

高亮显示关键词的 CSS 类名 默认为 highlight

### flags

`string` = `'gi'`

正则修饰符g、i、m、s 默认为：gi

## Returns

`Function`

返回一个高亮显示关键词的函数

### Parameters

#### text

`string`

#### key

`string`

### Returns

`string`

## Example

```typescript
const highlight = keyHighlight()
highlight('Hello World', 'Hello')
// '<font class="highlight">Hello</font> World'
highlight('Hello WorLd', 'l')
// 会匹配所有的 l，并且不区分大小写
// 'He<font class="highlight">l</font><font class="highlight">l</font>o Wor<font class="highlight">L</font>d'
```
