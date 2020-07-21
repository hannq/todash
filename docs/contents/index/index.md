---
order: 0
groupName: null
name: "使用介绍"
path: "/"
---

# Todash

> `Todash` 是一个类型推导 **工具库**，旨在帮助你快速方便的编写具备类型推导的 `TypeScript` 代码。`Todash` 的定位类似 **数组** 之于 `lodash`, **事件** 之于 `rxjs`。

<br/>

```typescript
type FirstItem = _.ShiftTuple<['vue', 'react', 'angular']>;
// → 'vue'
type NewTuple = _.TupleByShift<['vue', 'react', 'angular']>;
// → ['react', 'angular']
```

<br/>

## 安装

<br/>

```bash
npm install todash --save-dev
```

<br/>

## 导入方式

<br/>

```typescript
// 可以使用命名空间直接导入
import _ from 'todash';

// 也可以按需导入
import { ShiftTuple } from 'todash';
```

<br/>

## 为什么选择 Todash ？

<br/>

`Todash` 通过降低 各种类型间的 转换/提取/修改 等等的使用难度从而让 TypeScript 类型推导 变得更简单。

`Todash` 非常适用于：

+ 遍历/操作 元组(Tuple)/字面量对象 类型
+ 各种类型之前相互转换
+ 提取某一类型的泛型
+ 对类型特定位置的类型进行提取和转换

<br/>

## 扩展阅读

<br/>

+ [TypeScrip Handbook](https://www.typescriptlang.org/docs/handbook/)
+ [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)

<br/>

## 兼容性

<br/>

一般情况下，类型系统并不参与运行时，所以尽可能使用最新的 `TypeScript` 版本。

<style>
  ul {
    margin-left: 20px;
  }
</style>
