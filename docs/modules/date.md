[一些常用的工具函数 By Mojie - v0.4.2](../README.md) / [Modules](../modules.md) / date

# Module: date

## Table of contents

### Date Functions

- [formatDate](date.md#formatdate)
- [formatDateTime](date.md#formatdatetime)
- [formatTime](date.md#formattime)

## Date Functions

### formatDate

▸ **formatDate**(`date`, `format?`): `string`

格式化日期

**`Example`**

``` typescript
formatDate(1636360782649) // '2021-11-08'
formatDate(1636360935 * 1000) // '2021-11-08'
formatDate('2021-11-19T16:00:00+00:00') // '2021-11-20'
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `date` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 需要处理的日期 |
| `format` | `string` | `DATE_FORMAT` | 格式化规则 |

#### Returns

`string`

格式化后的日期

#### Defined in

[date.ts:43](https://github.com/mojiefong/utils/blob/9ef72d3/src/date.ts#L43)

___

### formatDateTime

▸ **formatDateTime**(`date`, `format?`): `string`

格式化日期和时间

**`Example`**

``` typescript
formatDateTime(1636360782649) // '2021-11-08 16:39:42'
formatDateTime(1636360935 * 1000) // '2021-11-08 16:42:15'
formatDateTime('2021-11-19T16:00:00+00:00', 'YYYY-MM-DD') // '2021-11-20'
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `date` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 需要处理的日期和时间 |
| `format` | `string` | `DATE_TIME_FORMAT` | 格式化规则 |

#### Returns

`string`

格式化后的日期和时间

#### Defined in

[date.ts:26](https://github.com/mojiefong/utils/blob/9ef72d3/src/date.ts#L26)

___

### formatTime

▸ **formatTime**(`date`, `format?`): `string`

格式化时间

**`Example`**

``` typescript
formatTime(1636360782649) // '16:39:42'
formatTime(1636360935 * 1000) // '16:42:15'
formatTime('2021-11-19T16:00:00+00:00') // '00:00:00'
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `date` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 需要处理的时间 |
| `format` | `string` | `TIME_FORMAT` | 格式化规则 |

#### Returns

`string`

格式化后的时间

#### Defined in

[date.ts:60](https://github.com/mojiefong/utils/blob/9ef72d3/src/date.ts#L60)
