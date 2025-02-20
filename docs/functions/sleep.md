[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / sleep

# Function: sleep()

> **sleep**(`delay`): `Promise`\<`undefined`\>

Defined in: [function.ts:110](https://github.com/mojiefong/utils/blob/835f9f080ca618c45c936acaa9a99d1df0257c97/src/function.ts#L110)

延迟异步函数执行

## Parameters

### delay

`number`

延迟的时间。单位毫秒

## Returns

`Promise`\<`undefined`\>

返回一个Promise
``` typescript
async function sleepWork() {
 console.log("I'm going to sleep for 1 second.")
 await sleep(1000)
 console.log('I woke up after 1 second.')
}
```
