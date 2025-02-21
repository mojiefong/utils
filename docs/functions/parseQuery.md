[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / parseQuery

# Function: parseQuery()

> **parseQuery**\<`T`\>(`query`): `Indexable`\<`any`\> \| `T`

Defined in: [function.ts:56](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/function.ts#L56)

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
