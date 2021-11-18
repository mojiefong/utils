[一些常用的工具函数 By Mojie - v1.0.0](README.md) / Exports

# 一些常用的工具函数 By Mojie - v1.0.0

## Table of contents

### Namespaces

- [&lt;internal\&gt;](modules/internal_.md)

### Is Variables

- [isBrowser](modules.md#isbrowser)

### Array Functions

- [groupBy](modules.md#groupby)
- [toArray](modules.md#toarray)

### Code Functions

- [decode](modules.md#decode)
- [encode](modules.md#encode)

### DOM Functions

- [copyToClipboard](modules.md#copytoclipboard)
- [exitFullScreen](modules.md#exitfullscreen)
- [getSelectedText](modules.md#getselectedtext)
- [keywordHighlighting](modules.md#keywordhighlighting)
- [loadCss](modules.md#loadcss)
- [loadScript](modules.md#loadscript)
- [openFullScreen](modules.md#openfullscreen)

### DOM Class Functions

- [addClass](modules.md#addclass)
- [hasClass](modules.md#hasclass)
- [removeClass](modules.md#removeclass)
- [replaceClass](modules.md#replaceclass)
- [toggleClass](modules.md#toggleclass)

### DOM Download Functions

- [downloadBlobFile](modules.md#downloadblobfile)

### DOM Scroll Functions

- [getPageScrollLeft](modules.md#getpagescrollleft)
- [getPageScrollTop](modules.md#getpagescrolltop)
- [getScrollPosition](modules.md#getscrollposition)
- [scrollToTop](modules.md#scrolltotop)
- [smoothScroll](modules.md#smoothscroll)

### DateTime Functions

- [formatDateTime](modules.md#formatdatetime)

### Is Functions

- [getTypeof](modules.md#gettypeof)
- [isArray](modules.md#isarray)
- [isBlob](modules.md#isblob)
- [isBoolean](modules.md#isboolean)
- [isDate](modules.md#isdate)
- [isElement](modules.md#iselement)
- [isEven](modules.md#iseven)
- [isFile](modules.md#isfile)
- [isFunction](modules.md#isfunction)
- [isMap](modules.md#ismap)
- [isNaN](modules.md#isnan)
- [isNegative](modules.md#isnegative)
- [isNull](modules.md#isnull)
- [isNullOrUndef](modules.md#isnullorundef)
- [isNumber](modules.md#isnumber)
- [isObject](modules.md#isobject)
- [isOdd](modules.md#isodd)
- [isPositive](modules.md#ispositive)
- [isPromise](modules.md#ispromise)
- [isRegExp](modules.md#isregexp)
- [isSet](modules.md#isset)
- [isString](modules.md#isstring)
- [isSymbol](modules.md#issymbol)
- [isUndefined](modules.md#isundefined)
- [isWindow](modules.md#iswindow)

### Math Functions

- [bytesToSize](modules.md#bytestosize)
- [generatorUUID](modules.md#generatoruuid)
- [getFileExtension](modules.md#getfileextension)
- [outOfNum](modules.md#outofnum)
- [randomHexColor](modules.md#randomhexcolor)
- [thousandsFormat](modules.md#thousandsformat)
- [toNumber](modules.md#tonumber)

### Object Functions

- [objectToFormData](modules.md#objecttoformdata)

### Other Functions

- [debounce](modules.md#debounce)
- [deepClone](modules.md#deepclone)
- [isAtBottom](modules.md#isatbottom)
- [isEmpty](modules.md#isempty)
- [throttle](modules.md#throttle)

### Serialize Functions

- [deserialize](modules.md#deserialize)
- [parseQuery](modules.md#parsequery)
- [serialize](modules.md#serialize)
- [stringifyQuery](modules.md#stringifyquery)

### WebStorage Functions

- [localGet](modules.md#localget)
- [localHas](modules.md#localhas)
- [localRemove](modules.md#localremove)
- [localSet](modules.md#localset)
- [sessionGet](modules.md#sessionget)
- [sessionHas](modules.md#sessionhas)
- [sessionRemove](modules.md#sessionremove)
- [sessionSet](modules.md#sessionset)
- [storageClear](modules.md#storageclear)

## Is Variables

### isBrowser

• **isBrowser**: `boolean`

检查是否浏览器环境

**`description`** 如果是浏览器环境返回true，否则返回false

#### Defined in

[src/is.ts:27](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L27)

## Array Functions

### groupBy

▸ `Const` **groupBy**<`T`\>(`arr`, `property`): `object`

根据key对一组对象进行分组

**`example`**
``` typescript
groupBy(['one', 'two', 'three'], 'length') // { '3': ['one', 'two'], '5': ['three'] }
groupBy(
 [
   { branch: 'audi', model: 'q8', year: '2019' },
   { branch: 'audi', model: 'rs7', year: '2020' },
   { branch: 'ford', model: 'mustang', year: '2019' },
   { branch: 'ford', model: 'explorer', year: '2020' },
   { branch: 'bmw', model: 'x7', year: '2020' },
 ], 'branch'
)
// 返回
{
 audi: [
   { branch: 'audi', model: 'q8', year: '2019' },
   { branch: 'audi', model: 'rs7', year: '2020' },
 ],
 bmw: [{ branch: 'bmw', model: 'x7', year: '2020' }],
 ford: [
   { branch: 'ford', model: 'mustang', year: '2019' },
   { branch: 'ford', model: 'explorer', year: '2020' },
 ]
}
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | 需要进行分组的数组 |
| `property` | `string` | 指定key进行分组 |

#### Returns

`object`

返回组合后的对象

#### Defined in

[src/array.ts:57](https://github.com/mojiefong/utils/blob/9d8aa40/src/array.ts#L57)

___

### toArray

▸ `Const` **toArray**<`T`\>(`target?`): `T`[]

将任意类型转成数组

**`example`**
``` typescript
toArray(null) // []
toArray(123) // [123]
toArray({a: 1}) // [{a: 1}]
toArray('1,2,3') // ['1,2,3']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target?` | `T` \| `T`[] | 目标数据 |

#### Returns

`T`[]

返回一个数组

#### Defined in

[src/array.ts:19](https://github.com/mojiefong/utils/blob/9d8aa40/src/array.ts#L19)

___

## Code Functions

### decode

▸ `Const` **decode**(`str`): `string`

字符解码

**`example`**
``` typescript
decode('%E4%BD%A0%E5%A5%BD') // '你好'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 需要解码的字符 |

#### Returns

`string`

返回解码后的字符。如果解码失败则返回原字符

#### Defined in

[src/function.ts:18](https://github.com/mojiefong/utils/blob/9d8aa40/src/function.ts#L18)

___

### encode

▸ `Const` **encode**(`str`): `string`

字符转码

**`example`**
``` typescript
encode('你好') // '%E4%BD%A0%E5%A5%BD'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 需要转码的字符 |

#### Returns

`string`

返回转码后的字符

#### Defined in

[src/function.ts:36](https://github.com/mojiefong/utils/blob/9d8aa40/src/function.ts#L36)

___

## DOM Functions

### copyToClipboard

▸ `Const` **copyToClipboard**(`text`): `void`

复制内容到剪切板

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 需要写入剪切板的文字 |

#### Returns

`void`

#### Defined in

[src/dom.ts:167](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L167)

___

### exitFullScreen

▸ `Const` **exitFullScreen**(): `void`

退出浏览器全屏

#### Returns

`void`

#### Defined in

[src/dom.ts:201](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L201)

___

### getSelectedText

▸ `Const` **getSelectedText**(): `undefined` \| `string`

获取鼠标选中的文本

#### Returns

`undefined` \| `string`

返回选中的文本

#### Defined in

[src/dom.ts:176](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L176)

___

### keywordHighlighting

▸ `Const` **keywordHighlighting**(`content`, `keyword`, `backgroundColor?`): `string`

关键字高亮

**`example`**
``` typescript
keywordHighlighting('Hello World', 'Hello')
// '<font style="background: red">Hello</font>World'
keywordHighlighting('Hello World', 'Hello', 'blue')
// '<font style="background: blue">Hello</font>World'
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `content` | `string` | `undefined` | 文本内容 |
| `keyword` | `string` | `undefined` | 需要高亮的关键字 |
| `backgroundColor` | `string` | `'red'` | 背景颜色。默认red |

#### Returns

`string`

返回新的文本内容

#### Defined in

[src/dom.ts:244](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L244)

___

### loadCss

▸ `Const` **loadCss**(`url`, `el?`): `Promise`<`string`\>

动态添加css

**`example`**
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | css文件路径 |
| `el?` | `HTMLElement` | 指定添加到哪个元素。默认head元素 |

#### Returns

`Promise`<`string`\>

返回一个Promise对象

#### Defined in

[src/dom.ts:279](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L279)

___

### loadScript

▸ `Const` **loadScript**(`url`, `el?`): `Promise`<`string`\>

动态添加js

**`example`**
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | js文件路径 |
| `el?` | `HTMLElement` | 指定添加到哪个元素。默认head元素 |

#### Returns

`Promise`<`string`\>

返回一个Promise对象

#### Defined in

[src/dom.ts:320](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L320)

___

### openFullScreen

▸ `Const` **openFullScreen**(): `void`

打开浏览器全屏

#### Returns

`void`

#### Defined in

[src/dom.ts:184](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L184)

___

## DOM Class Functions

### addClass

▸ `Const` **addClass**(`el`, ...`className`): `void`

添加class

**`example`**
``` typescript
// 指定一个class
addClass(document.body, 'className')
// 指定多个class
addClass(document.body, 'className1', 'className2', 'className3')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | 需要添加的元素 |
| `...className` | `string`[] | 添加的class名称，可以是多个 |

#### Returns

`void`

#### Defined in

[src/dom.ts:19](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L19)

___

### hasClass

▸ `Const` **hasClass**(`el`, `className`): `boolean`

是否存在class

**`example`**
``` typescript
// 如果 className 存在则返回true
hasClass(document.body, 'className') // true
// 如果 className1 不存在则返回false
hasClass(document.body, 'className1') // false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | 需要检查的元素 |
| `className` | `string` | 需要检查的class名称 |

#### Returns

`boolean`

当class存在时返回true，否则返回false

#### Defined in

[src/dom.ts:58](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L58)

___

### removeClass

▸ `Const` **removeClass**(`el`, ...`className`): `void`

删除class

**`example`**
``` typescript
// 指定一个class
removeClass(document.body, 'className')
// 指定多个class
removeClass(document.body, 'className1', 'className2', 'className3')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | 需要删除的元素 |
| `...className` | `string`[] | 删除的class名称，可以是多个 |

#### Returns

`void`

#### Defined in

[src/dom.ts:38](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L38)

___

### replaceClass

▸ `Const` **replaceClass**(`el`, `oldClassName`, `newClassName`): `boolean`

替换class

**`example`**
``` typescript
// 如果 className 存在则会替换成功，并且返回true
replaceClass(document.body, 'className', 'name') // true
// 如果 className1 不存在则不会改变原有的class，并且返回false
replaceClass(document.body, 'className1', 'name') // false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | 需要替换的元素 |
| `oldClassName` | `string` | 需要替换的class名称 |
| `newClassName` | `string` | 新的class名称 |

#### Returns

`boolean`

如果旧的class名称被替换成功，返回true，否则返回false

#### Defined in

[src/dom.ts:95](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L95)

___

### toggleClass

▸ `Const` **toggleClass**(`el`, `className`): `boolean`

切换class

**`example`**
``` typescript
// 如果添加成功则返回true
toggleClass(document.body, 'className') // true
// 如果删除成功则返回false
toggleClass(document.body, 'className') // false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | 需要切换的元素 |
| `className` | `string` | 需要切换的class名称 |

#### Returns

`boolean`

如果class添加成功则返回true，被删除否则返回false

#### Defined in

[src/dom.ts:76](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L76)

___

## DOM Download Functions

### downloadBlobFile

▸ `Const` **downloadBlobFile**(`blob`, `fileName`): `void`

下载blob文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blob` | `Blob` | Blob对象 |
| `fileName` | `string` | 文件名称 |

#### Returns

`void`

#### Defined in

[src/dom.ts:220](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L220)

___

## DOM Scroll Functions

### getPageScrollLeft

▸ `Const` **getPageScrollLeft**(): `number`

获取滚动条距离左边的宽度

#### Returns

`number`

返回距离左边的宽度

#### Defined in

[src/dom.ts:158](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L158)

___

### getPageScrollTop

▸ `Const` **getPageScrollTop**(): `number`

获取滚动条距离顶部高度

#### Returns

`number`

返回距离顶部高度

#### Defined in

[src/dom.ts:149](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L149)

___

### getScrollPosition

▸ `Const` **getScrollPosition**(`el?`): `Object`

获取当前的滚动位置

**`example`**
``` typescript
// 获取window的滚动位置
getScrollPosition() // { x: 0, y: 0 }
// 获取body的滚动位置
getScrollPosition(document.body) // { x: 0, y: 0 }
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `el` | `Window` & typeof [`globalThis`](modules/internal_.globalThis.md) | `window` | 监听的元素。默认window |

#### Returns

`Object`

返回的x的距离和y的距离

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/dom.ts:139](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L139)

___

### scrollToTop

▸ `Const` **scrollToTop**(): `void`

将滚动条平滑滚动到顶部

#### Returns

`void`

#### Defined in

[src/dom.ts:105](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L105)

___

### smoothScroll

▸ `Const` **smoothScroll**<`T`\>(`el`): `void`

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

[src/dom.ts:118](https://github.com/mojiefong/utils/blob/9d8aa40/src/dom.ts#L118)

___

## DateTime Functions

### formatDateTime

▸ `Const` **formatDateTime**(`date`, `format?`): `string`

格式化日期和时间

**`example`**
``` typescript
formatDateTime(1636360782649) // '2021-11-08 16:39:42'
formatDateTime(1636360935 * 1000) // '2021-11-08 16:42:15'
formatDateTime('2021-11-19T16:00:00+00:00', 'YYYY-MM-DD') // '2021-11-20'
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `date` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 需要处理的日期和时间 |
| `format` | `string` | `'YYYY-MM-DD HH:mm:ss'` | 格式化规则 |

#### Returns

`string`

格式化后的日期和时间

#### Defined in

[src/date-time.ts:22](https://github.com/mojiefong/utils/blob/9d8aa40/src/date-time.ts#L22)

___

## Is Functions

### getTypeof

▸ `Const` **getTypeof**(`val`): `string`

检查类型

**`example`**
``` typescript
getTypeof({}) // 'Object'
getTypeof([]) // 'Array'
getTypeof('') // 'String'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

`string`

返回检查后的类型

#### Defined in

[src/is.ts:18](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L18)

___

### isArray

▸ `Const` **isArray**<`T`\>(`val`): val is T[]

检查是否Array类型

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is T[]

如果是Array类型则返回true，否则返回false

#### Defined in

[src/is.ts:211](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L211)

___

### isBlob

▸ `Const` **isBlob**(`val`): val is Blob

检查是否Blob对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Blob

如果是Blob对象则返回true，否则返回false

#### Defined in

[src/is.ts:267](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L267)

___

### isBoolean

▸ `Const` **isBoolean**(`val`): val is boolean

检查是否boolean类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is boolean

如果是boolean类型则返回true，否则返回false

#### Defined in

[src/is.ts:65](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L65)

___

### isDate

▸ `Const` **isDate**(`val`): val is Date

检查是否Date类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Date

如果是Date类型则返回true，否则返回false

#### Defined in

[src/is.ts:219](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L219)

___

### isElement

▸ `Const` **isElement**(`val`): val is Element

检查是否DOM元素

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Element

如果是DOM元素则返回true，否则返回false

#### Defined in

[src/is.ts:135](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L135)

___

### isEven

▸ `Const` **isEven**(`val`): `boolean`

检查是否偶数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 需要进行检查的值 |

#### Returns

`boolean`

如果是偶数则返回true，否则返回false

#### Defined in

[src/is.ts:227](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L227)

___

### isFile

▸ `Const` **isFile**(`val`): val is File

检查是否File对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is File

如果是File对象则返回true，否则返回false

#### Defined in

[src/is.ts:259](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L259)

___

### isFunction

▸ `Const` **isFunction**(`val`): val is Function

检查是否Function类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Function

如果是function类型则返回true，否则返回false

#### Defined in

[src/is.ts:105](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L105)

___

### isMap

▸ `Const` **isMap**<`T`, `K`\>(`val`): val is Map<T, K\>

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

val is Map<T, K\>

如果是Map对象则返回true，否则返回false

#### Defined in

[src/is.ts:155](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L155)

___

### isNaN

▸ `Const` **isNaN**(`val`): val is Number & Object

检查是否NaN类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Number & Object

如果是NaN类型则返回true，否则返回false

#### Defined in

[src/is.ts:175](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L175)

___

### isNegative

▸ `Const` **isNegative**(`val`): `boolean`

检查是否负数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 需要进行检查的值 |

#### Returns

`boolean`

如果是负数则返回true，否则返回false

#### Defined in

[src/is.ts:251](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L251)

___

### isNull

▸ `Const` **isNull**(`val`): val is null

检查是否null类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is null

如果是null类型则返回true，否则返回false

#### Defined in

[src/is.ts:75](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L75)

___

### isNullOrUndef

▸ `Const` **isNullOrUndef**(`val`): val is undefined \| null

检查是否null 或 undefined类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is undefined \| null

如果是null 或 undefined类型则返回true，否则返回false

#### Defined in

[src/is.ts:185](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L185)

___

### isNumber

▸ `Const` **isNumber**(`val`): val is number

检查是否number类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is number

如果是number类型则返回true，否则返回false

#### Defined in

[src/is.ts:55](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L55)

___

### isObject

▸ `Const` **isObject**(`val`): val is object

检查是否Object类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is object

如果是Object类型则返回true，否则返回false

#### Defined in

[src/is.ts:145](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L145)

___

### isOdd

▸ `Const` **isOdd**(`val`): `boolean`

检查是否基数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 需要进行检查的值 |

#### Returns

`boolean`

如果是基数则返回true，否则返回false

#### Defined in

[src/is.ts:235](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L235)

___

### isPositive

▸ `Const` **isPositive**(`val`): `boolean`

检查是否正数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 需要进行检查的值 |

#### Returns

`boolean`

如果是正数则返回true，否则返回false

#### Defined in

[src/is.ts:243](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L243)

___

### isPromise

▸ `Const` **isPromise**<`T`\>(`val`): val is Promise<T\>

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

val is Promise<T\>

如果是Promise对象则返回true，否则返回false

#### Defined in

[src/is.ts:125](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L125)

___

### isRegExp

▸ `Const` **isRegExp**(`val`): val is RegExp

检查是否RegExp类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is RegExp

如果是RegExp类型则返回true，否则返回false

#### Defined in

[src/is.ts:115](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L115)

___

### isSet

▸ `Const` **isSet**<`T`\>(`val`): val is Set<T\>

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

val is Set<T\>

如果是Set对象则返回true，否则返回false

#### Defined in

[src/is.ts:165](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L165)

___

### isString

▸ `Const` **isString**(`val`): val is string

检查是否string类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is string

如果是string类型则返回true，否则返回false

#### Defined in

[src/is.ts:45](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L45)

___

### isSymbol

▸ `Const` **isSymbol**(`val`): val is symbol

检查是否symbol类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is symbol

如果是symbol类型则返回true，否则返回false

#### Defined in

[src/is.ts:95](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L95)

___

### isUndefined

▸ `Const` **isUndefined**(`val`): val is undefined

检查是否undefined类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is undefined

如果是undefined类型则返回true，否则返回false

#### Defined in

[src/is.ts:85](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L85)

___

### isWindow

▸ `Const` **isWindow**(`val`): val is Window

检查是否Window对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

val is Window

如果是window对象则返回true，否则返回false

#### Defined in

[src/is.ts:35](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L35)

___

## Math Functions

### bytesToSize

▸ `Const` **bytesToSize**(`bytes`): `string`

字节转换

**`example`**
``` typescript
bytesToSize(1000) // '1000.00 B'
bytesToSize(1024) // '1.00 KB'
bytesToSize(1024 * 1024) // '1.00 MB'
bytesToSize(1024 ** 3) // '1.00 GB'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `number` | 需要转换的字节 |

#### Returns

`string`

返回根据大小转换后对应的容量单位

#### Defined in

[src/math.ts:48](https://github.com/mojiefong/utils/blob/9d8aa40/src/math.ts#L48)

___

### generatorUUID

▸ `Const` **generatorUUID**(): `string`

生成UUID

#### Returns

`string`

返回生成的UUID

#### Defined in

[src/math.ts:61](https://github.com/mojiefong/utils/blob/9d8aa40/src/math.ts#L61)

___

### getFileExtension

▸ `Const` **getFileExtension**(`fileName`): `undefined` \| `string`

获取文件后缀名

**`example`**
``` typescript
getFileExtension('file-name.pdf') // 'pdf'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | 文件名称 |

#### Returns

`undefined` \| `string`

返回文件后缀名

#### Defined in

[src/math.ts:115](https://github.com/mojiefong/utils/blob/9d8aa40/src/math.ts#L115)

___

### outOfNum

▸ `Const` **outOfNum**(`val`, `maxNum`): `string` \| `number`

数字超过规定大小加上 '+' 号。

**`description`** 如数字超过99显示99+

**`example`**
``` typescript
outOfNum(99, 99) // 99
outOfNum(99, 99) // 99
outOfNum('100', 99) // '99+'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` \| `number` | 当前的数值 |
| `maxNum` | `number` | 最大的数值 |

#### Returns

`string` \| `number`

如果当前的数值大于最大的数值则返回'n+'，否则返回n

#### Defined in

[src/math.ts:83](https://github.com/mojiefong/utils/blob/9d8aa40/src/math.ts#L83)

___

### randomHexColor

▸ `Const` **randomHexColor**(): `string`

随机十六进制颜色

#### Returns

`string`

返回十六进制颜色值

#### Defined in

[src/math.ts:11](https://github.com/mojiefong/utils/blob/9d8aa40/src/math.ts#L11)

___

### thousandsFormat

▸ `Const` **thousandsFormat**(`num`): `string` \| `number`

千分位格式化

**`example`**
``` typescript
thousandsFormat(0) // 0
thousandsFormat(1234.123456789) // '1,234.123456789'
thousandsFormat('$1234') // '$1,234'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `string` \| `number` | 需要格式化的数字或者字符串 |

#### Returns

`string` \| `number`

返回格式化后的字符串

#### Defined in

[src/math.ts:28](https://github.com/mojiefong/utils/blob/9d8aa40/src/math.ts#L28)

___

### toNumber

▸ `Const` **toNumber**(`val`): `number`

字符串转为数字

**`example`**
``` typescript
toNumber('123') // 123
toNumber('a') // NaN
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 需要转换的字符串 |

#### Returns

`number`

返回转换后的数字

#### Defined in

[src/math.ts:103](https://github.com/mojiefong/utils/blob/9d8aa40/src/math.ts#L103)

___

## Object Functions

### objectToFormData

▸ `Const` **objectToFormData**(`obj`): `FormData`

把 Object 对象转成 FormData 格式

**`example`**
``` typescript
const formData = objectToFormData({ a: 1, b: 2 })
console.log(formData.get(a)) // '1'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | 需要转换的Object对象 |

#### Returns

`FormData`

返回FormDate对象

#### Defined in

[src/object.ts:17](https://github.com/mojiefong/utils/blob/9d8aa40/src/object.ts#L17)

___

## Other Functions

### debounce

▸ `Const` **debounce**<`T`\>(`func`, `delay?`): (...`args`: `T`) => `void`

防抖函数

**`description`** 事件触发n秒后执行回调，如果在这个n秒又被触发，则重新计时

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `func` | (...`args`: `T`) => `unknown` | `undefined` | 需要防抖的函数 |
| `delay` | `number` | `0` | 指定时间间隔 |

#### Returns

`fn`

返回新的防抖函数

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

##### Returns

`void`

#### Defined in

[src/function.ts:168](https://github.com/mojiefong/utils/blob/9d8aa40/src/function.ts#L168)

___

### deepClone

▸ `Const` **deepClone**<`T`\>(`target`): `T`

深拷贝

**`description`** 支持对象和数组深拷贝

**`description`** 转载https://gist.github.com/erikvullings/ada7af09925082cbb89f40ed962d475e

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | 需要拷贝的对象或数组 |

#### Returns

`T`

返回深拷贝的对象或数组

#### Defined in

[src/function.ts:191](https://github.com/mojiefong/utils/blob/9d8aa40/src/function.ts#L191)

___

### isAtBottom

▸ `Const` **isAtBottom**(): `boolean`

判断滚动条是否到底部

#### Returns

`boolean`

如果滚动条到达底部则返回true，否则返回false

#### Defined in

[src/is.ts:273](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L273)

___

### isEmpty

▸ `Const` **isEmpty**(`val`): `boolean`

检查空值

**`description`** 将null、undefined、空字符串、空对象、空数组判断为空

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要进行检查的值 |

#### Returns

`boolean`

如果val为null、undefined、空字符串、空对象、空数组则返回true，否则返回false

#### Defined in

[src/is.ts:195](https://github.com/mojiefong/utils/blob/9d8aa40/src/is.ts#L195)

___

### throttle

▸ `Const` **throttle**<`T`\>(`func`, `delay?`): (...`args`: `T`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `func` | (...`args`: `T`) => `unknown` | `undefined` |
| `delay` | `number` | `0` |

#### Returns

`fn`

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

##### Returns

`void`

#### Defined in

[src/function.ts:143](https://github.com/mojiefong/utils/blob/9d8aa40/src/function.ts#L143)

___

## Serialize Functions

### deserialize

▸ `Const` **deserialize**(`val`): `unknown`

反序列化JSON字符串

**`description`** 解析JSON字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 需要被解析的字符串 |

#### Returns

`unknown`

返回指定的JSON对象。如果字符串不符合JSON规则，则返回原值

#### Defined in

[src/function.ts:127](https://github.com/mojiefong/utils/blob/9d8aa40/src/function.ts#L127)

___

### parseQuery

▸ `Const` **parseQuery**(`query`): `object`

解析 url 的查询对象

**`example`**
``` typescript
parseQuery('a=1&b=2') // { a: '1', b: '2' }
parseQuery('foo=%E4%BD%A0%E5%A5%BD') // { foo: '你好' }
// 解析当前url的查询对象
parseQuery(location.search)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | 需要解析的字符 |

#### Returns

`object`

返回解析后的对象

#### Defined in

[src/function.ts:60](https://github.com/mojiefong/utils/blob/9d8aa40/src/function.ts#L60)

___

### serialize

▸ `Const` **serialize**(`val`): `string`

序列化成JSON字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要序列化的对象 |

#### Returns

`string`

返回一个JSON字符串

#### Defined in

[src/function.ts:118](https://github.com/mojiefong/utils/blob/9d8aa40/src/function.ts#L118)

___

### stringifyQuery

▸ `Const` **stringifyQuery**(`obj`, `isEncode?`): `string`

将 Object 对象转为查询字符串

**`example`**
``` typescript
stringifyQuery({ a: 1, b: 2 }) // 'a=1&b=2'
stringifyQuery({ foo: '你好' }) // 'foo=你好'
stringifyQuery({ foo: '你好' }, true) // 'foo=%E4%BD%A0%E5%A5%BD'
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `object` | `undefined` | 需要转换的对象 |
| `isEncode` | `boolean` | `false` | 是否需要转码。默认为false |

#### Returns

`string`

返回查询字符串

#### Defined in

[src/function.ts:94](https://github.com/mojiefong/utils/blob/9d8aa40/src/function.ts#L94)

___

## WebStorage Functions

### localGet

▸ `Const` **localGet**(`key`): `unknown`

获取localStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 需要获取的key名称 |

#### Returns

`unknown`

返回key对应的值。如果不存在则返回null

#### Defined in

[src/storage.ts:17](https://github.com/mojiefong/utils/blob/9d8aa40/src/storage.ts#L17)

___

### localHas

▸ `Const` **localHas**(`key`): `boolean`

判断localStorage中是否存在指定的key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 需要查询的key名称 |

#### Returns

`boolean`

如果存在则返回true，否则返回false

#### Defined in

[src/storage.ts:47](https://github.com/mojiefong/utils/blob/9d8aa40/src/storage.ts#L47)

___

### localRemove

▸ `Const` **localRemove**(`key`): `void`

移除localStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 需要移除的key名称 |

#### Returns

`void`

#### Defined in

[src/storage.ts:37](https://github.com/mojiefong/utils/blob/9d8aa40/src/storage.ts#L37)

___

### localSet

▸ `Const` **localSet**(`key`, `value`): `void`

设置localStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 需要存储的key名称 |
| `value` | `unknown` | 存储key对应的值 |

#### Returns

`void`

#### Defined in

[src/storage.ts:28](https://github.com/mojiefong/utils/blob/9d8aa40/src/storage.ts#L28)

___

### sessionGet

▸ `Const` **sessionGet**(`key`): `unknown`

获取sessionStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 需要获取key名称 |

#### Returns

`unknown`

返回key对应的值。如果不存在则返回null

#### Defined in

[src/storage.ts:58](https://github.com/mojiefong/utils/blob/9d8aa40/src/storage.ts#L58)

___

### sessionHas

▸ `Const` **sessionHas**(`key`): `boolean`

判断sessionRemove中是否存在指定的key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 需要查询的key名称 |

#### Returns

`boolean`

如果存在则返回true，否则返回false

#### Defined in

[src/storage.ts:87](https://github.com/mojiefong/utils/blob/9d8aa40/src/storage.ts#L87)

___

### sessionRemove

▸ `Const` **sessionRemove**(`key`): `void`

移除sessionStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 需要移除的key名称 |

#### Returns

`void`

#### Defined in

[src/storage.ts:77](https://github.com/mojiefong/utils/blob/9d8aa40/src/storage.ts#L77)

___

### sessionSet

▸ `Const` **sessionSet**(`key`, `value`): `void`

设置sessionStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 需要存储的key名称 |
| `value` | `unknown` | 存储key对应的值 |

#### Returns

`void`

#### Defined in

[src/storage.ts:68](https://github.com/mojiefong/utils/blob/9d8aa40/src/storage.ts#L68)

___

### storageClear

▸ `Const` **storageClear**(`storageType?`): `void`

清空 localStorage 和 sessionStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storageType?` | [`StorageType`](modules/internal_.md#storagetype) | 用于指定清除 localStorage 还是 sessionStorage。默认是清除所有 |

#### Returns

`void`

#### Defined in

[src/storage.ts:97](https://github.com/mojiefong/utils/blob/9d8aa40/src/storage.ts#L97)