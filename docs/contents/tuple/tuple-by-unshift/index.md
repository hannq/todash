---
order: 3
groupName: "Tuple"
name: "_.TupleByUnshift"
path: "/tuple/tuple-by-unshift"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.TupleByUnshift<tuple, type>
```

<br/>

将一个类型添加元组的开头，并返回元组

<br/>

### 参数

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 需要处理的元组<br/>
<font color="#d9a84a">type (unknown)</font>: 需要被添加到元组中的类型

<br/>

### 返回

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 首部被添加一项后的元组

<br/>

### 例子

<br/>

```typescript

type TupleAfterUnshift = _.TupleByUnshift<['angular'], 'react'>;
// => ['react', 'angular']

type TupleAfterUnshift = _.TupleByUnshift<['react', 'angular'], 'vue'>;
// => ['vue', 'react', 'angular']
```
