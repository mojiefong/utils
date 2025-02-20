[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / keywordHighlight

# Function: keywordHighlight()

> **keywordHighlight**(`content`, `keyword`, `options`): `string`

Defined in: [dom.ts:245](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/dom.ts#L245)

关键字高亮

## Parameters

### content

`string`

文本内容

### keyword

`string`

需要高亮的关键字

### options

配置选项

#### modifiers?

`string`

正则修饰符g、i、m、s。默认为：gi

#### style?

`Partial`\<`CSSStyleDeclaration`\>

自定义样式

## Returns

`string`

返回新的文本内容

## Example

``` typescript
keywordHighlight('Hello World', 'Hello')
// '<font style="background: red">Hello</font> World'
keywordHighlight('Hello WorLd', 'l')
// 会匹配所有的 l，并且不区分大小写
// 'He<font style="background: red">l</font><font style="background: red">l</font>o Wor<font style="background: red">L</font>d'
keywordHighlight('Hello World', 'Hello', { style: { color: 'red' } })
// '<font style="color:red">Hello</font> World'
```
