[一些常用的工具函数 By Mojie - v0.7.0](../README.md) / [Modules](../modules.md) / date

# Module: date

## Table of contents

### Variables

- [DATE\_FORMAT](date.md#date_format)
- [DATE\_TIME\_FORMAT](date.md#date_time_format)
- [TIME\_FORMAT](date.md#time_format)

### Functions

- [formatDate](date.md#formatdate)
- [getDiff](date.md#getdiff)
- [getRecentDays](date.md#getrecentdays)
- [getRecentMonths](date.md#getrecentmonths)
- [getRecentQuarters](date.md#getrecentquarters)
- [getRecentWeeks](date.md#getrecentweeks)

## Date

### formatDate

▸ **formatDate**(`date`, `format?`): `string`

格式化日期和时间

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `date` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 需要处理的日期和时间 |
| `format` | `string` | `DATE_TIME_FORMAT` | 格式化规则 |

#### Returns

`string`

格式化后的日期和时间

**`Example`**

``` typescript
formatDateTime(1636360782649) // '2021-11-08 16:39:42'
formatDateTime(1636360935) // '2021-11-08 16:42:15'
formatDateTime('2021-11-19T16:00:00+00:00', 'YYYY-MM-DD') // '2021-11-20'
```

#### Defined in

[date.ts:27](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/date.ts#L27)

___

### getDiff

▸ **getDiff**(`beginDate`, `endDate`, `unit?`): `number`

获取2个时间的时间差

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `beginDate` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 开始时间 |
| `endDate` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 结束时间 |
| `unit` | ``"Q"`` \| ``"d"`` \| ``"y"`` \| ``"s"`` \| ``"ms"`` \| ``"day"`` \| ``"hour"`` \| ``"minute"`` \| ``"month"`` \| ``"second"`` \| ``"year"`` \| ``"years"`` \| ``"quarter"`` \| ``"quarters"`` \| ``"months"`` \| ``"week"`` \| ``"weeks"`` \| ``"days"`` \| ``"hours"`` \| ``"minutes"`` \| ``"seconds"`` \| ``"D"`` \| ``"M"`` \| ``"h"`` \| ``"m"`` \| ``"millisecond"`` \| ``"date"`` \| ``"milliseconds"`` \| ``"dates"`` \| ``"w"`` | `'day'` | 单位 |

#### Returns

`number`

返回2个时间的时间差

**`Example`**

``` typescript
// 获取相差的天数
getDiff('2022-10-01', '2022-12-31') // 91
// 获取相差的月数
getDiff('2022-10-01', '2022-12-01', 'month') // 2
// 获取相差的小时数
getDiff('2022-10-01', '2022-10-02', 'hour') // 24
```

#### Defined in

[date.ts:147](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/date.ts#L147)

___

### getRecentDays

▸ **getRecentDays**(`value`, `date?`, `format?`): `string`[]

获取最近几天

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | 时间量。正数代表未来时间，负数代表过去时间 |
| `date` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 指定时间。默认是当天 |
| `format` | `string` | `DATE_TIME_FORMAT` | 格式化规则 |

#### Returns

`string`[]

返回一个数组，第一个返回指定的开始时间，第二个返回指定的结束时间，第三个返回指定的时间区间

**`Example`**

``` typescript
// 获取明天的时间
getRecentDays(1, '2021-11-08 16:39:42') // ['2021-11-09 00:00:00', '2021-11-09 23:59:59', '2021-11-09 16:39:42']
// 获取2天前的时间
getRecentDays(-2, '2021-11-08 16:39:42') // ['2021-11-06 00:00:00', '2021-11-06 23:59:59', '2021-11-06 16:39:42']
// 获取3天后时间
getRecentDays(3, '2021-11-08 16:39:42') // ['2021-11-11 00:00:00', '2021-11-11 23:59:59', '2021-11-11 16:39:42']
```

#### Defined in

[date.ts:50](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/date.ts#L50)

___

### getRecentMonths

▸ **getRecentMonths**(`value?`, `date?`, `format?`): `string`[]

获取最近一月

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `0` | 时间量。正数代表未来时间，负数代表过去时间。默认为0，代表本月 |
| `date` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 指定时间。默认是当月 |
| `format` | `string` | `DATE_TIME_FORMAT` | 格式化规则 |

#### Returns

`string`[]

返回一个数组。第一个返回指定月份的开始时间，第二个返回指定月份的结束时间

**`Example`**

``` typescript
// 获取本月
getRecentMonths() // ['2023-01-01 00:00:00', '2023-01-31 23:59:59']
// 获取上月
getRecentMonths(-1) // ['2022-12-01 00:00:00', '2022-12-31 23:59:59']
// 获取下月
getRecentMonths(1) // ['2023-02-01 00:00:00', '2023-02-28 23:59:59']
```

#### Defined in

[date.ts:99](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/date.ts#L99)

___

### getRecentQuarters

▸ **getRecentQuarters**(`value?`, `format?`): `string`[]

获取最近季度

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `0` | 时间量。正数代表未来时间，负数代表过去时间。默认为0，代表本季度 |
| `format` | `string` | `DATE_TIME_FORMAT` | 格式化规则 |

#### Returns

`string`[]

返回一个数组。第一个返回指定季度的开始时间，第二个返回指定季度的结束时间

**`Example`**

``` typescript
获取本季度
getRecentQuarters() // ['2023-01-01 00:00:00', '2023-03-31 23:59:59']
获取上个季度
getRecentQuarters(-1) // ['2022-10-01 00:00:00', '2022-12-31 23:59:59']
获取下个季度
getRecentQuarters(1) // ['2023-04-01 00:00:00', '2023-06-30 23:59:59']
```

#### Defined in

[date.ts:122](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/date.ts#L122)

___

### getRecentWeeks

▸ **getRecentWeeks**(`value?`, `format?`): `string`[]

获取最近一周

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `0` | 时间量。正数代表未来时间，负数代表过去时间。默认为0，代表本周 |
| `format` | `string` | `DATE_TIME_FORMAT` | 格式化规则 |

#### Returns

`string`[]

返回一个数组。第一个返回指定每周的开始时间，第二个返回指定每周的结束时间

**`Example`**

``` typescript
// 获取本周
getRecentWeeks() // ['2023-01-16 00:00:00', '2023-01-22 23:59:59']
// 获取上周
getRecentWeeks(-1) // ['2023-01-09 00:00:00', '2023-01-15 23:59:59']
// 获取下周
getRecentWeeks(1) // ['2023-01-23 00:00:00', '2023-01-29 23:59:59']
```

#### Defined in

[date.ts:74](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/date.ts#L74)

## Other

### DATE\_FORMAT

• `Const` **DATE\_FORMAT**: ``"YYYY-MM-DD"``

#### Defined in

[date.ts:10](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/date.ts#L10)

___

### DATE\_TIME\_FORMAT

• `Const` **DATE\_TIME\_FORMAT**: ``"YYYY-MM-DD HH:mm:ss"``

#### Defined in

[date.ts:12](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/date.ts#L12)

___

### TIME\_FORMAT

• `Const` **TIME\_FORMAT**: ``"HH:mm:ss"``

#### Defined in

[date.ts:11](https://github.com/mojiefong/utils/blob/6e80a48a024a9116e80700e8f2bc39db68a479f3/src/date.ts#L11)
