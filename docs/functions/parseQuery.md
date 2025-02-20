[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / parseQuery

# Function: parseQuery()

> **parseQuery**\<`T`\>(`query`): `Indexable`\<`any`\> \| `T`

Defined in: [function.ts:57](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/function.ts#L57)

解析 url 的查询对象

## Type Parameters

• **T** = `Indexable`\<`any`\>

## Parameters

### query

`string`

需要解析的字符

## Returns

`Indexable`\<`any`\> \| `T`

返回解析后的对象

## Example

``` typescript
parseQuery('a=1&b=2') // { a: '1', b: '2' }
parseQuery('foo=%E4%BD%A0%E5%A5%BD') // { foo: '你好' }
// 解析当前url的查询对象
parseQuery(location.search)
```
