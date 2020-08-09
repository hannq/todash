---
order: 5
groupOrder: 2
groupName: "Tuple"
name: "_.TupleByPush"
path: "/tuple/tuple-by-push"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.TupleByPush<tuple, type>
```

<br/>

将一个类型添加元组的末尾，并返回元组

<br/>

### 参数

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 需要处理的元组<br/>
<font color="#d9a84a">type (unknown)</font>: 需要被添加到元组中的类型

<br/>

### 返回

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 返回新类型被添加到最后一项之后元组

<br/>

### 例子

<br/>

```typescript

type TupleAfterPush = _.TupleByPush<['angular'], 'react'>;
// => ['angular', 'react']

type TupleAfterPush = _.TupleByPush<['angular', 'react'], 'vue'>;
// => ['angular', 'react', 'vue']
```
