[一些常用的工具函数 By Mojie - v0.7.0](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Variables

- [isBrowser](index.md#isbrowser)
- [version](index.md#version)

### Functions

- [addClass](index.md#addclass)
- [bytesToSize](index.md#bytestosize)
- [clearStorage](index.md#clearstorage)
- [copyToClipboard](index.md#copytoclipboard)
- [decode](index.md#decode)
- [downloadBlobFile](index.md#downloadblobfile)
- [encode](index.md#encode)
- [escapeRegExp](index.md#escaperegexp)
- [exitFullScreen](index.md#exitfullscreen)
- [generateString](index.md#generatestring)
- [generatorUUID](index.md#generatoruuid)
- [getFileExtension](index.md#getfileextension)
- [getPageScrollLeft](index.md#getpagescrollleft)
- [getPageScrollTop](index.md#getpagescrolltop)
- [getScrollPosition](index.md#getscrollposition)
- [getSelectedText](index.md#getselectedtext)
- [getStorage](index.md#getstorage)
- [getTypeof](index.md#gettypeof)
- [hasClass](index.md#hasclass)
- [hasStorage](index.md#hasstorage)
- [head](index.md#head)
- [insertStr](index.md#insertstr)
- [isAtBottom](index.md#isatbottom)
- [isBlob](index.md#isblob)
- [isBoolean](index.md#isboolean)
- [isDate](index.md#isdate)
- [isElement](index.md#iselement)
- [isEmpty](index.md#isempty)
- [isEven](index.md#iseven)
- [isFile](index.md#isfile)
- [isFunction](index.md#isfunction)
- [isMap](index.md#ismap)
- [isNegative](index.md#isnegative)
- [isNull](index.md#isnull)
- [isNullOrUndef](index.md#isnullorundef)
- [isNumber](index.md#isnumber)
- [isObject](index.md#isobject)
- [isOdd](index.md#isodd)
- [isPositive](index.md#ispositive)
- [isPromise](index.md#ispromise)
- [isRegExp](index.md#isregexp)
- [isSet](index.md#isset)
- [isString](index.md#isstring)
- [isSymbol](index.md#issymbol)
- [isUndefined](index.md#isundefined)
- [isWindow](index.md#iswindow)
- [keywordHighlight](index.md#keywordhighlight)
- [last](index.md#last)
- [loadCss](index.md#loadcss)
- [loadScript](index.md#loadscript)
- [objectToFormData](index.md#objecttoformdata)
- [openFullScreen](index.md#openfullscreen)
- [outOfNum](index.md#outofnum)
- [parseQuery](index.md#parsequery)
- [randomColor](index.md#randomcolor)
- [randomHexColor](index.md#randomhexcolor)
- [removeClass](index.md#removeclass)
- [removeHtmlTag](index.md#removehtmltag)
- [removeStorage](index.md#removestorage)
- [replaceClass](index.md#replaceclass)
- [replaceStr](index.md#replacestr)
- [round](index.md#round)
- [scrollToTop](index.md#scrolltotop)
- [setStorage](index.md#setstorage)
- [sleep](index.md#sleep)
- [smoothScroll](index.md#smoothscroll)
- [stringifyQuery](index.md#stringifyquery)
- [thousandsFormat](index.md#thousandsformat)
- [toArray](index.md#toarray)
- [toNumber](index.md#tonumber)
- [toggleClass](index.md#toggleclass)
- [truncate](index.md#truncate)

## Array

### head

▸ **head**\<`T`\>(`arr`): `Nullable`\<`T`\>

获取数组的第一个元素

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | 需要获取的数组 |

#### Returns

`Nullable`\<`T`\>

返回数组的第一个元素。如果参数不是数组则返回原值

**`Example`**

```
head([1,2,3]) // 1
head([{a: 1},{b: 2}]) // {a: 1}
```

#### Defined in

[array.ts:37](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/array.ts#L37)

___

### last

▸ **last**\<`T`\>(`arr`): `Nullable`\<`T`\>

获取数组的最后一个元素

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | 需要获取的数组 |

#### Returns

`Nullable`\<`T`\>

返回数组的最后一个元素。如果参数不是数组则返回原值

**`Example`**

``` typescript
last([1, 2, 3] // 3
last([{a: 1}, {b: 2}]) // {b: 2}
```

#### Defined in

[array.ts:50](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/array.ts#L50)

___

### toArray

▸ **toArray**\<`T`\>(`target?`): `T`[]

将任意类型转成数组

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target?` | `Nullable`\<`Arrayable`\<`T`\>\> | 目标数据 |

#### Returns

`T`[]

返回一个数组

**`Example`**

``` typescript
toArray(null) // []
toArray(123) // [123]
toArray({a: 1}) // [{a: 1}]
toArray('1,2,3') // ['1,2,3']
```

#### Defined in

[array.ts:21](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/array.ts#L21)

## Code

### decode

▸ **decode**(`str`): `string`

字符解码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 需要解码的字符 |

#### Returns

`string`

返回解码后的字符。如果解码失败则返回原字符

**`Example`**

``` typescript
decode('%E4%BD%A0%E5%A5%BD') // '你好'
```

#### Defined in

[function.ts:18](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/function.ts#L18)

___

### encode

▸ **encode**(`str`): `string`

字符转码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 需要转码的字符 |

#### Returns

`string`

返回转码后的字符

**`Example`**

``` typescript
encode('你好') // '%E4%BD%A0%E5%A5%BD'
```

#### Defined in

[function.ts:37](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/function.ts#L37)

## DOM

### copyToClipboard

▸ **copyToClipboard**(`text`): `void`

复制内容到剪切板

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 需要写入剪切板的文字 |

#### Returns

`void`

**`Description`**

navigator.clipboard只能在https中才能使用。为了做兼容，使用已经废弃的document.execCommand()方法确保功能可用

#### Defined in

[dom.ts:160](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L160)

___

### exitFullScreen

▸ **exitFullScreen**(): `void`

退出浏览器全屏

#### Returns

`void`

#### Defined in

[dom.ts:201](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L201)

___

### getSelectedText

▸ **getSelectedText**(): `undefined` \| `string`

获取鼠标选中的文本

#### Returns

`undefined` \| `string`

返回选中的文本

#### Defined in

[dom.ts:183](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L183)

___

### keywordHighlight

▸ **keywordHighlight**(`content`, `keyword`, `options?`): `string`

关键字高亮

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | 文本内容 |
| `keyword` | `string` | 需要高亮的关键字 |
| `options` | `Object` | 配置选项 |
| `options.modifiers?` | `string` | 正则修饰符g、i、m、s。默认为：gi |
| `options.style?` | `Partial`\<`CSSStyleDeclaration`\> | 自定义样式 |

#### Returns

`string`

返回新的文本内容

**`Example`**

``` typescript
keywordHighlight('Hello World', 'Hello')
// '<font style="background: red">Hello</font> World'
keywordHighlight('Hello WorLd', 'l')
// 会匹配所有的 l，并且不区分大小写
// 'He<font style="background: red">l</font><font style="background: red">l</font>o Wor<font style="background: red">L</font>d'
keywordHighlight('Hello World', 'Hello', { style: { color: 'red' } })
// '<font style="color:red">Hello</font> World'
```

#### Defined in

[dom.ts:244](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L244)

___

### loadCss

▸ **loadCss**(`url`, `el?`): `Promise`\<`string`\>

动态添加css

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | css文件路径 |
| `el?` | `HTMLElement` | 指定添加到哪个元素。默认head元素 |

#### Returns

`Promise`\<`string`\>

返回一个Promise对象

**`Example`**

``` typescript
// 添加到head元素中
loadCss('./index.css')

// 添加到iframe中
loadCss('./index.css', $iframe.contentWindow.document.head)

// 完成/失败的回调
loadCss('./index.css')
.then(() => {
// success
})
.catch(() => {
// fail
})
```

#### Defined in

[dom.ts:287](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L287)

___

### loadScript

▸ **loadScript**(`url`, `el?`): `Promise`\<`string`\>

动态添加js

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | js文件路径 |
| `el?` | `HTMLElement` | 指定添加到哪个元素。默认head元素 |

#### Returns

`Promise`\<`string`\>

返回一个Promise对象

**`Example`**

``` typescript
// 添加到head元素中
loadScript('./index.js')

// 添加到iframe中
loadScript('./index.js', $iframe.contentWindow.document.head)

// 完成/失败的回调
loadScript('./index.js')
.then(() => {
// success
})
.catch(() => {
// fail
})
```

#### Defined in

[dom.ts:328](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L328)

___

### openFullScreen

▸ **openFullScreen**(): `void`

打开浏览器全屏

#### Returns

`void`

#### Defined in

[dom.ts:189](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L189)

## DOM Class

### addClass

▸ **addClass**(`el`, `...className`): `void`

添加class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | 需要添加的元素 |
| `...className` | `string`[] | 添加的class名称，可以是多个 |

#### Returns

`void`

**`Example`**

``` typescript
// 指定一个class
addClass(document.body, 'className')
// 指定多个class
addClass(document.body, 'className1', 'className2', 'className3')
```

#### Defined in

[dom.ts:23](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L23)

___

### hasClass

▸ **hasClass**(`el`, `className`): `boolean`

是否存在class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | 需要检查的元素 |
| `className` | `string` | 需要检查的class名称 |

#### Returns

`boolean`

当class存在时返回true，否则返回false

**`Example`**

``` typescript
// 如果 className 存在则返回true
hasClass(document.body, 'className') // true
// 如果 className1 不存在则返回false
hasClass(document.body, 'className1') // false
```

#### Defined in

[dom.ts:62](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L62)

___

### removeClass

▸ **removeClass**(`el`, `...className`): `void`

删除class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | 需要删除的元素 |
| `...className` | `string`[] | 删除的class名称，可以是多个 |

#### Returns

`void`

**`Example`**

``` typescript
// 指定一个class
removeClass(document.body, 'className')
// 指定多个class
removeClass(document.body, 'className1', 'className2', 'className3')
```

#### Defined in

[dom.ts:42](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L42)

___

### replaceClass

▸ **replaceClass**(`el`, `oldClassName`, `newClassName`): `boolean`

替换class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | 需要替换的元素 |
| `oldClassName` | `string` | 需要替换的class名称 |
| `newClassName` | `string` | 新的class名称 |

#### Returns

`boolean`

如果旧的class名称被替换成功，返回true，否则返回false

**`Example`**

``` typescript
// 如果 className 存在则会替换成功，并且返回true
replaceClass(document.body, 'className', 'name') // true
// 如果 className1 不存在则不会改变原有的class，并且返回false
replaceClass(document.body, 'className1', 'name') // false
```

#### Defined in

[dom.ts:95](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L95)

___

### toggleClass

▸ **toggleClass**(`el`, `className`): `boolean`

切换class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | 需要切换的元素 |
| `className` | `string` | 需要切换的class名称 |

#### Returns

`boolean`

如果class添加成功则返回true，被删除否则返回false

**`Example`**

``` typescript
// 如果添加成功则返回true
toggleClass(document.body, 'className') // true
// 如果删除成功则返回false
toggleClass(document.body, 'className') // false
```

#### Defined in

[dom.ts:78](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L78)

## DOM Download

### downloadBlobFile

▸ **downloadBlobFile**(`blob`, `fileName`): `void`

下载blob文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blob` | `Blob` | Blob对象 |
| `fileName` | `string` | 文件名称 |

#### Returns

`void`

#### Defined in

[dom.ts:215](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L215)

## DOM Scroll

### getPageScrollLeft

▸ **getPageScrollLeft**(): `number`

获取滚动条距离左边的宽度

#### Returns

`number`

返回距离左边的宽度

#### Defined in

[dom.ts:152](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L152)

___

### getPageScrollTop

▸ **getPageScrollTop**(): `number`

获取滚动条距离顶部高度

#### Returns

`number`

返回距离顶部高度

#### Defined in

[dom.ts:145](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L145)

___

### getScrollPosition

▸ **getScrollPosition**(`el?`): `Object`

获取当前的滚动位置

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `el` | `Window` & typeof `globalThis` | `window` | 监听的元素。默认window |

#### Returns

`Object`

返回的x的距离和y的距离

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

**`Example`**

``` typescript
// 获取window的滚动位置
getScrollPosition() // { x: 0, y: 0 }
// 获取body的滚动位置
getScrollPosition(document.body) // { x: 0, y: 0 }
```

#### Defined in

[dom.ts:133](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L133)

___

### scrollToTop

▸ **scrollToTop**(): `void`

将滚动条平滑滚动到顶部

#### Returns

`void`

#### Defined in

[dom.ts:101](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L101)

___

### smoothScroll

▸ **smoothScroll**\<`T`\>(`el`): `void`

将滚动条平滑滚动到指定位置

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `T` | 滚动到指定的元素 |

#### Returns

`void`

#### Defined in

[dom.ts:114](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/dom.ts#L114)

## Is

### isBrowser

• `Const` **isBrowser**: `boolean`

检查是否浏览器环境

**`Description`**

如果是浏览器环境返回true，否则返回false

#### Defined in

[is.ts:25](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L25)

___

### getTypeof

▸ **getTypeof**(`val`): `string`

检查类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

`string`

返回检查后的类型

**`Example`**

``` typescript
getTypeof({}) // 'Object'
getTypeof([]) // 'Array'
getTypeof('') // 'String'
```

#### Defined in

[is.ts:18](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L18)

___

### isAtBottom

▸ **isAtBottom**(): `boolean`

判断滚动条是否到底部

#### Returns

`boolean`

如果滚动条到达底部则返回true，否则返回false

#### Defined in

[is.ts:225](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L225)

___

### isBlob

▸ **isBlob**(`val`): val is Blob

检查是否Blob对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Blob

如果是Blob对象则返回true，否则返回false

#### Defined in

[is.ts:218](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L218)

___

### isBoolean

▸ **isBoolean**(`val`): val is boolean

检查是否boolean类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is boolean

如果是boolean类型则返回true，否则返回false

#### Defined in

[is.ts:57](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L57)

___

### isDate

▸ **isDate**(`val`): val is Date

检查是否Date类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Date

如果是Date类型则返回true，否则返回false

#### Defined in

[is.ts:170](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L170)

___

### isElement

▸ **isElement**(`val`): val is Element

检查是否DOM元素

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Element

如果是DOM元素则返回true，否则返回false

#### Defined in

[is.ts:113](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L113)

___

### isEmpty

▸ **isEmpty**(`val`): `boolean`

检查空值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

`boolean`

如果val为null、undefined、空字符串、空对象、空数组则返回true，否则返回false

**`Description`**

将null、undefined、空字符串、空对象、空数组判断为空

#### Defined in

[is.ts:154](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L154)

___

### isEven

▸ **isEven**(`val`): `boolean`

检查是否偶数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 需要进行检查的值 |

#### Returns

`boolean`

如果是偶数则返回true，否则返回false

#### Defined in

[is.ts:178](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L178)

___

### isFile

▸ **isFile**(`val`): val is File

检查是否File对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is File

如果是File对象则返回true，否则返回false

#### Defined in

[is.ts:210](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L210)

___

### isFunction

▸ **isFunction**(`val`): val is Function

检查是否Function类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Function

如果是function类型则返回true，否则返回false

#### Defined in

[is.ts:89](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L89)

___

### isMap

▸ **isMap**\<`T`, `K`\>(`val`): val is Map\<T, K\>

检查是否Map对象

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Map\<T, K\>

如果是Map对象则返回true，否则返回false

#### Defined in

[is.ts:129](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L129)

___

### isNegative

▸ **isNegative**(`val`): `boolean`

检查是否负数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 需要进行检查的值 |

#### Returns

`boolean`

如果是负数则返回true，否则返回false

#### Defined in

[is.ts:202](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L202)

___

### isNull

▸ **isNull**(`val`): val is null

检查是否null类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is null

如果是null类型则返回true，否则返回false

#### Defined in

[is.ts:65](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L65)

___

### isNullOrUndef

▸ **isNullOrUndef**(`val`): val is undefined \| null

检查是否null或undefined类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is undefined \| null

如果是null或undefined类型则返回true，否则返回false

#### Defined in

[is.ts:145](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L145)

___

### isNumber

▸ **isNumber**(`val`): val is number

检查是否number类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is number

如果是number类型则返回true，否则返回false

#### Defined in

[is.ts:49](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L49)

___

### isObject

▸ **isObject**(`val`): val is object

检查是否Object类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is object

如果是Object类型则返回true，否则返回false

#### Defined in

[is.ts:121](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L121)

___

### isOdd

▸ **isOdd**(`val`): `boolean`

检查是否基数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 需要进行检查的值 |

#### Returns

`boolean`

如果是基数则返回true，否则返回false

#### Defined in

[is.ts:186](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L186)

___

### isPositive

▸ **isPositive**(`val`): `boolean`

检查是否正数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 需要进行检查的值 |

#### Returns

`boolean`

如果是正数则返回true，否则返回false

#### Defined in

[is.ts:194](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L194)

___

### isPromise

▸ **isPromise**\<`T`\>(`val`): val is Promise\<T\>

检查是否Promise对象

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Promise\<T\>

如果是Promise对象则返回true，否则返回false

#### Defined in

[is.ts:105](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L105)

___

### isRegExp

▸ **isRegExp**(`val`): val is RegExp

检查是否RegExp类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is RegExp

如果是RegExp类型则返回true，否则返回false

#### Defined in

[is.ts:97](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L97)

___

### isSet

▸ **isSet**\<`T`\>(`val`): val is Set\<T\>

检查是否Set对象

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Set\<T\>

如果是Set对象则返回true，否则返回false

#### Defined in

[is.ts:137](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L137)

___

### isString

▸ **isString**(`val`): val is string

检查是否string类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is string

如果是string类型则返回true，否则返回false

#### Defined in

[is.ts:41](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L41)

___

### isSymbol

▸ **isSymbol**(`val`): val is symbol

检查是否symbol类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is symbol

如果是symbol类型则返回true，否则返回false

#### Defined in

[is.ts:81](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L81)

___

### isUndefined

▸ **isUndefined**(`val`): val is undefined

检查是否undefined类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is undefined

如果是undefined类型则返回true，否则返回false

#### Defined in

[is.ts:73](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L73)

___

### isWindow

▸ **isWindow**(`val`): val is Window

检查是否Window对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Window

如果是window对象则返回true，否则返回false

#### Defined in

[is.ts:33](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/is.ts#L33)

## Math

### bytesToSize

▸ **bytesToSize**(`bytes`): `string`

字节转换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `number` | 需要转换的字节 |

#### Returns

`string`

返回根据大小转换后对应的容量单位

**`Example`**

``` typescript
bytesToSize(1000) // '1000.00 B'
bytesToSize(1024) // '1.00 KB'
bytesToSize(1024 * 1024) // '1.00 MB'
bytesToSize(1024 ** 3) // '1.00 GB'
```

#### Defined in

[math.ts:60](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/math.ts#L60)

___

### generatorUUID

▸ **generatorUUID**(): `string`

生成UUID

#### Returns

`string`

返回生成的UUID

#### Defined in

[math.ts:73](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/math.ts#L73)

___

### outOfNum

▸ **outOfNum**(`val`, `maxNum`): `string` \| `number`

数字超过规定大小加上 '+' 号。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` \| `number` | 当前的数值 |
| `maxNum` | `number` | 最大的数值 |

#### Returns

`string` \| `number`

如果当前的数值大于最大的数值则返回'n+'，否则返回n

**`Description`**

如数字超过99显示99+

**`Example`**

``` typescript
outOfNum(99, 99) // 99
outOfNum(99, 99) // 99
outOfNum('100', 99) // '99+'
```

#### Defined in

[math.ts:95](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/math.ts#L95)

___

### randomColor

▸ **randomColor**(`colors`): `string`

指定颜色随机抽取

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `string`[] | 指定的颜色列表 |

#### Returns

`string`

返回颜色值

**`Example`**

``` typescript
randomColor(['blue', 'red', '#fff']) // 返回其中一个
```

#### Defined in

[math.ts:26](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/math.ts#L26)

___

### randomHexColor

▸ **randomHexColor**(): `string`

随机十六进制颜色

#### Returns

`string`

返回十六进制颜色值

#### Defined in

[math.ts:11](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/math.ts#L11)

___

### round

▸ **round**(`val`, `precision?`): `number`

将数字四舍五入到指定的位数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `val` | `string` \| `number` | `undefined` | 需要指定的数值 |
| `precision` | `number` | `0` | 指定多少位小数 |

#### Returns

`number`

返回四舍五入后指定的位数的数值

**`Example`**

``` typescript
round(12.1) // 12
round(12.5) // 13
round(12.55, 1) // 12.6
round(12.514, 2) // 12.51
round(12.5144, 3) // 12.514
round('18.888', 2) // 18.89
```

#### Defined in

[math.ts:130](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/math.ts#L130)

___

### thousandsFormat

▸ **thousandsFormat**(`num`): `string` \| ``0``

千分位格式化

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `string` \| `number` | 需要格式化的数字或者字符串 |

#### Returns

`string` \| ``0``

返回格式化后的字符串

**`Example`**

``` typescript
thousandsFormat(0) // 0
thousandsFormat(1234.123456789) // '1,234.123456789'
thousandsFormat('$1234') // '$1,234'
```

#### Defined in

[math.ts:43](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/math.ts#L43)

___

### toNumber

▸ **toNumber**(`val`): `number`

字符串转为数字

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` \| `number` | 需要转换的字符串 |

#### Returns

`number`

返回转换后的数字

**`Example`**

``` typescript
toNumber('123') // 123
toNumber('a') // NaN
```

#### Defined in

[math.ts:112](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/math.ts#L112)

## Object

### objectToFormData

▸ **objectToFormData**\<`T`\>(`obj`): ``null`` \| `FormData`

把 Object 对象转成 FormData 格式

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | 需要转换的Object对象 |

#### Returns

``null`` \| `FormData`

返回FormDate对象。如果不是传递的参数不是object，那么将返回null

**`Example`**

``` typescript
const formData = objectToFormData({ a: 1, b: 2 })
console.log(formData.get(a)) // '1'
```

#### Defined in

[object.ts:19](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/object.ts#L19)

## Other

### version

• `Const` **version**: `string` = `pkgVersion`

#### Defined in

[index.ts:8](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/index.ts#L8)

___

### sleep

▸ **sleep**(`delay`): `Promise`\<`undefined`\>

延迟异步函数执行

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delay` | `number` | 延迟的时间。单位毫秒 |

#### Returns

`Promise`\<`undefined`\>

返回一个Promise
``` typescript
async function sleepWork() {
 console.log("I'm going to sleep for 1 second.")
 await sleep(1000)
 console.log('I woke up after 1 second.')
}
```

#### Defined in

[function.ts:110](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/function.ts#L110)

## Serialize

### parseQuery

▸ **parseQuery**\<`T`\>(`query`): `T` \| `Indexable`

解析 url 的查询对象

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Indexable`\<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | 需要解析的字符 |

#### Returns

`T` \| `Indexable`

返回解析后的对象

**`Example`**

``` typescript
parseQuery('a=1&b=2') // { a: '1', b: '2' }
parseQuery('foo=%E4%BD%A0%E5%A5%BD') // { foo: '你好' }
// 解析当前url的查询对象
parseQuery(location.search)
```

#### Defined in

[function.ts:57](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/function.ts#L57)

___

### stringifyQuery

▸ **stringifyQuery**(`obj`, `isEncode?`, `modifier?`, `join?`): `string`

将 Object 对象转为查询字符串

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `object` | `undefined` | 需要转换的对象 |
| `isEncode` | `boolean` | `false` | 是否需要转码。默认为false |
| `modifier` | `string` | `'='` | 键值对中间的修饰符。默认为= |
| `join` | `string` | `'&'` | 拼接符。默认为& |

#### Returns

`string`

返回查询字符串

**`Example`**

``` typescript
stringifyQuery({ a: 1, b: 2 }) // 'a=1&b=2'
stringifyQuery({ foo: '你好' }) // 'foo=你好'
stringifyQuery({ foo: '你好' }, true) // 'foo=%E4%BD%A0%E5%A5%BD'
stringifyQuery({ width: '100px', height: '100px' }, false, ':', ';') // 'width:100px;height:100px'
```

#### Defined in

[function.ts:88](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/function.ts#L88)

## String

### escapeRegExp

▸ **escapeRegExp**(`str`): `string`

转义要在正则表达式中使用的特殊字符

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 需要转义的字符串 |

#### Returns

`string`

返回转义后的字符串。如果str参数不是string类型则返回空字符串

**`Description`**

"^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{" , "}", "|"

**`Example`**

``` typescript
escapeRegExp('.') // '\.'
escapeRegExp('[') // '\['
escapeRegExp('123') // '123'
escapeRegExp('(*)') // '\(\*\)'
escapeRegExp('[Hello World]'.replace(new RegExp(escapeRegExp('[')), '')) // 'Hello World]'
```

#### Defined in

[string.ts:40](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/string.ts#L40)

___

### generateString

▸ **generateString**(`length`): `string`

生成指定长度的随机字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | 指定的长度 |

#### Returns

`string`

返回指定长度的随机字符串

**`Example`**

``` typescript
generateString(10) // 3wqt3eiyxs
generateString(16) // 3wqt3eiyxs2rde1f
```

#### Defined in

[string.ts:119](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/string.ts#L119)

___

### getFileExtension

▸ **getFileExtension**(`fileName`, `split?`): `undefined` \| `string`

获取文件后缀名

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fileName` | `string` | `undefined` | 文件名称 |
| `split` | `boolean` | `false` | 是否需要后缀名前面的分割点 |

#### Returns

`undefined` \| `string`

返回文件后缀名

**`Example`**

``` typescript
getFileExtension('file-name.pdf') // 'pdf'
getFileExtension('hello.js', true) // .js
```

#### Defined in

[string.ts:20](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/string.ts#L20)

___

### insertStr

▸ **insertStr**(`str`, `beginIndex`, `newStr`): `string`

根据索引插入字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 原始字符串 |
| `beginIndex` | `number` | 索引开始位置 |
| `newStr` | `string` | 插入新的字符串 |

#### Returns

`string`

返回根据索引插入的字符串

**`Example`**

``` typescript
insertStr('Hello World', 6, 'TypeScript ') // Hello TypeScript World
```

#### Defined in

[string.ts:104](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/string.ts#L104)

___

### removeHtmlTag

▸ **removeHtmlTag**(`str`): `string`

去除HTML标签

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 需要去除的html字符串 |

#### Returns

`string`

返回去除标签后的字符串

**`Example`**

``` typescript
removeHtmlTag('<html>123</html>') // '123'
removeHtmlTag('<html></html>') // ''
```

#### Defined in

[string.ts:55](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/string.ts#L55)

___

### replaceStr

▸ **replaceStr**(`str`, `beginIndex`, `endIndex`, `replacement`): `string`

根据索引替换字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 原始字符串 |
| `beginIndex` | `number` | 索引开始位置 |
| `endIndex` | `number` | 索引结束位置 |
| `replacement` | `string` | 替换的新字符串 |

#### Returns

`string`

返回根据索引替换后的字符串

**`Example`**

``` typescript
replaceStr('Hello World', 6, 11, 'TypeScript') // Hello TypeScript
replaceStr('Hello World', 6, 7, 'w') // Hello world
```

#### Defined in

[string.ts:88](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/string.ts#L88)

___

### truncate

▸ **truncate**(`str`, `endIndex`, `beginIndex?`, `suffix?`): `string`

字符串截取

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | 需要截取的字符串 |
| `endIndex` | `number` | `undefined` | 结束提取字符串的索引 |
| `beginIndex` | `number` | `0` | 开始提取字符串的索引 |
| `suffix` | `string` | `'...'` | 后缀 |

#### Returns

`string`

返回截取后的字符串和后缀

**`Example`**

``` typescript
truncate('JavaScript', 4) // 'Java...'
```

#### Defined in

[string.ts:70](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/string.ts#L70)

## WebStorage

### clearStorage

▸ **clearStorage**(`storage?`): `void`

清空存储

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `storage` | `Storage` | `localStorage` | 指定本地存储还是会话存储。默认本地储存 |

#### Returns

`void`

#### Defined in

[storage.ts:55](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/storage.ts#L55)

___

### getStorage

▸ **getStorage**\<`T`\>(`key`, `storage?`): ``null`` \| `T`

获取储存

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | 键名 |
| `storage` | `Storage` | `localStorage` | 指定本地存储还是会话存储。默认本地储存 |

#### Returns

``null`` \| `T`

返回键名对应的值，如果不存在则返回null

#### Defined in

[storage.ts:13](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/storage.ts#L13)

___

### hasStorage

▸ **hasStorage**(`key`, `storage?`): `boolean`

是否存在指定的键名

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | 键名 |
| `storage` | `Storage` | `localStorage` | 指定本地存储还是会话存储。默认本地储存 |

#### Returns

`boolean`

如果存在则返回true，否则返回false

#### Defined in

[storage.ts:36](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/storage.ts#L36)

___

### removeStorage

▸ **removeStorage**(`key`, `storage?`): `void`

移除储存

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | 键名 |
| `storage` | `Storage` | `localStorage` | 指定本地存储还是会话存储。默认本地储存 |

#### Returns

`void`

#### Defined in

[storage.ts:46](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/storage.ts#L46)

___

### setStorage

▸ **setStorage**\<`T`\>(`key`, `val`, `storage?`): `void`

设置存储

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | 键名 |
| `val` | `T` | `undefined` | 键值 |
| `storage` | `Storage` | `localStorage` | 指定本地存储还是会话存储。默认本地储存 |

#### Returns

`void`

#### Defined in

[storage.ts:25](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/storage.ts#L25)
