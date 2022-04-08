[一些常用的工具函数 By Mojie - v0.3.1](../README.md) / [Modules](../modules.md) / date

# Module: date

## Table of contents

### DateTime Functions

- [formatDateTime](date.md#formatdatetime)

## DateTime Functions

### formatDateTime

▸ **formatDateTime**(`date`, `format?`): `string`

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

[date.ts:22](https://github.com/mojiefong/utils/blob/0cf3813/src/date.ts#L22)
