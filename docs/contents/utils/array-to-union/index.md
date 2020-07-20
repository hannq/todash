---
order: 6
groupName: "Utils"
name: "_.Array2Union"
path: "/utils/array-to-union"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.Array2Union<array>
```

<br/>

将 数组/元组 转化为 union

<br/>

### 参数

<br/>

<font color="#d9a84a">array (Array)</font>: 需要处理的 数组/元组 类型

<br/>

### 返回

<br/>

<font color="#d9a84a">union (Union)</font>: 返回由 数组/元组转换而成的 联合类型(union)。

<br/>

### 例子

<br/>

```typescript
type UnionFromArray = _.Array2Union<['vue', 'react', 'angular']>;
// => 'vue' | 'react' | 'angular'

type UnionFromArray = _.Array2Union<('vue' | 'react')[]>;
// => 'vue' | 'react'
```
