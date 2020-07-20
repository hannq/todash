---
order: 7
groupName: "Tuple"
name: "_.TupleByConcat"
path: "/tuple/tuple-by-concat"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.TupleByConcat<tuple1, tuple2>
```

<br/>

将元组的顺序反转，并返回

<br/>

### 参数

<br/>

<font color="#d9a84a">tuple1 (Tuple)</font>: 需要处理的元组1<br/>
<font color="#d9a84a">tuple2 (Tuple)</font>: 需要处理的元组2

<br/>

### 返回

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 返回由 tuple1、tuple2 首尾相接之后的元组

<br/>

### 例子

<br/>

```typescript

type TupleAfterConcat = _.TupleByConcat<['react', 'angular'], ['vue', 'jquery']>;
// => ['react', 'angular', 'vue', 'jquery']

type TupleAfterConcat = _.TupleByConcat<['vue', 'react','angular'], ['vue', 'jquery']>;
// => ['vue', 'react','angular', 'vue', 'jquery']
```
