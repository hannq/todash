---
order: 0
groupName: null
name: "更新日志"
path: "/change-log"
---

# 更新日志

<br />

## 2.1.0

<br />

`2021-12-10`

<br />

- 🐞 修复 `TupleByShift` 操作符, 当 `Tuple` 为空时，返回 `never` 类型的错误。[快速了解](/tuple/tuple-by-shift)
- 🔥 新增 `TupleJoin` 操作符, 将一个 **字符串元组** 的所有元素用指定分隔符连接成一个 **字符串类型** 并返回这个字符串类型。[快速了解](/tuple/tuple-join)
- 🔥 新增 `StringSplit` 操作符, 使用指定的 **分隔符字符串类型** 将一个 **字符串类型** 分割成 **子字符串元组类型** ，以一个指定的**分割字串类型** 来决定每个拆分的位置。[快速了解](/string/split)
- 🔥 新增 `StringConcat` 操作符, 将一个或多个 **字符串类型** 与原字符串连接合并，形成一个新的 **字符串类型** 并返回。[快速了解](/string/concat)
- 🆕 新增 `StringStartsWith` 操作符, 用来判断当前 **字符串类型** 是否以另外一个给定的子 **字符串类型** 的开头。[快速了解](/string/starts-with)
- 🆕 新增 `StringEndsWith` 操作符, 用来判断当前 **字符串类型** 是否是以另外一个给定的 **子字符串类型** “结尾”的。[快速了解](/string/ends-with)
- 🆕 新增 `StringTrimStart` 操作符, 方法从 **字符串类型** 的 **开头** 删除空格并返回。[快速了解](/string/trim-start)
- 🆕 新增 `StringTrimEnd` 操作符, 方法从 **字符串类型** 的 **末端** 删除空格并返回。[快速了解](/string/trim-end)
- 🆕 新增 `StringTrim` 操作符, 方法从 **字符串类型** 的 **两端** 删除空格并返回。[快速了解](/string/trim)
- 🆕 新增 `StringRepeat` 操作符, 构造并返回一个新 **字符串类型**，该 **字符串类型** 包含被连接在一起的指定数量的 **字符串类型** 的副本。[快速了解](/string/repeat)
- 🆕 新增 `EnsureString` 操作符, 确保指定类型一定是 **字符串类型** 。[快速了解](/utils/ensure-string)
<br />

## 2.0.0

<br />

`2021-12-10`

<br />

- ⚡️ 升级 `Typescript` 版本到 `4.5`，优化 `Tuple` 工具若干函数写法
- 💄 保留旧的 `Tuple` 写法作为降级方案

<br />

## 1.0.5

<br />

`2020-08-09`

<br />

- 🔥 新增 `OmitOptional` 操作符，可以快速删除字面量对象中的 **可选(optional)** 字段。[快速了解](/utils/omit-optional)

<br /><br />

## 1.0.3

<br />

`2020-07-30`

<br />

- 🆕 新增 `OmitBy` 操作符，可以快速删除字面量对象中包含 **指定值类型** 字段。[快速了解](/utils/omit-by)
- 🆕 新增 `FilterBy` 操作符，可以快速删除字面量对象中不包含 **指定值类型** 字段。[快速了解](/utils/filter-by)

<style>
  ul {
    margin-left: 20px;
  }
</style>
