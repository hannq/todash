---
order: 1
groupName: "Tuple"
name: "_.ShiftTuple"
path: "/tuple/shift-tuple"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.ShiftTuple<tuple>
```

<br/>

返回元组的第一项

<br/>

### 参数

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 需要处理的元组

<br/>

### 返回

<br/>

<font color="#d9a84a">unknown</font>: 返回元组的第一项。

<br/>

### 例子

<br/>

```typescript
type FirstItem = _.ShiftTuple<['vue', 'react', 'angular']>;
// => 'vue'

type FirstItem = _.ShiftTuple<['react', 'angular']>;
// => 'react'
```
