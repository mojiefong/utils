[**一些常用的工具函数 By Mojie**](../README.md)

***

[一些常用的工具函数 By Mojie](../globals.md) / sleep

# Function: sleep()

> **sleep**(`delay`): `Promise`\<`unknown`\>

Defined in: [function.ts:115](https://github.com/mojiefong/utils/blob/8d43a08c9cee3486bdce98ae9522c4a66e3c2c71/src/function.ts#L115)

延迟异步函数执行

## Parameters

### delay

`number`

延迟的时间。单位毫秒

## Returns

`Promise`\<`unknown`\>

返回一个Promise
``` typescript
async function sleepWork() {
 console.log("I'm going to sleep for 1 second.")
 await sleep(1000)
 console.log('I woke up after 1 second.')
}
```
