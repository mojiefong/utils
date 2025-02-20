[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / stringifyQuery

# Function: stringifyQuery()

> **stringifyQuery**(`obj`, `isEncode`, `modifier`, `join`): `string`

Defined in: [function.ts:88](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/function.ts#L88)

将 Object 对象转为查询字符串

## Parameters

### obj

`object`

需要转换的对象

### isEncode

`boolean` = `false`

是否需要转码。默认为false

### modifier

`string` = `'='`

键值对中间的修饰符。默认为=

### join

`string` = `'&'`

拼接符。默认为&

## Returns

`string`

返回查询字符串

## Example

``` typescript
stringifyQuery({ a: 1, b: 2 }) // 'a=1&b=2'
stringifyQuery({ foo: '你好' }) // 'foo=你好'
stringifyQuery({ foo: '你好' }, true) // 'foo=%E4%BD%A0%E5%A5%BD'
stringifyQuery({ width: '100px', height: '100px' }, false, ':', ';') // 'width:100px;height:100px'
```
