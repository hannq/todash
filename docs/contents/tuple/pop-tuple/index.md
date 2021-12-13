---
order: 5
groupOrder: 2
groupName: "Tuple"
name: "_.PopTuple"
path: "/tuple/pop-tuple"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.PopTuple<tuple>
```

<br/>

返回元组中的最后一项

<br/>

### 参数

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 需要处理的元组

<br/>

### 返回

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 返回元组中的最后一项

<br/>

### 例子

<br/>

```typescript

type LastItem = _.ShiftTuple<['vue', 'react', 'angular']>;
// => 'angular'

type LastItem = _.ShiftTuple<['vue', 'react']>;
// => 'react'
```
