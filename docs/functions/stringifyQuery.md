[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / stringifyQuery

# Function: stringifyQuery()

> **stringifyQuery**(`obj`, `options`): `string`

Defined in: [function.ts:88](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/function.ts#L88)

将 Object 对象转为查询字符串

## Parameters

### obj

`object`

需要转换的对象

### options

选项

#### isEncode?

`boolean` = `false`

是否需要转码。默认为false

#### join?

`string` = `'&'`

多个键值对之间的连接符，默认为 '&'。

#### sep?

`string` = `'='`

键值对之间的分隔符，默认为 '='。

## Returns

`string`

返回查询字符串

## Example

``` typescript
stringifyQuery({ a: 1, b: 2 }) // 'a=1&b=2'
stringifyQuery({ foo: '你好' }) // 'foo=你好'
stringifyQuery({ foo: '你好' }, { isEncode: true }) // 'foo=%E4%BD%A0%E5%A5%BD'
stringifyQuery({ width: '100px', height: '100px' }, { sep: ':', join: ';' }) // 'width:100px;height:100px'
```
