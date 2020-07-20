---
order: 2
groupName: "Tuple"
name: "_.TupleByShift"
path: "/tuple/tuple-by-shift"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.TupleByShift<tuple>
```

<br/>

删除元组的第一项，并返回被删除后的元组

<br/>

### 参数

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 需要处理的元组

<br/>

### 返回

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 被删除第一项后的元组

<br/>

### 例子

<br/>

```typescript

type TupleAfterShift = _.TupleByShift<['vue', 'react', 'angular']>;
// => ['react', 'angular']

type TupleAfterShift = _.TupleByShift<['react', 'angular']>;
// => ['angular']
```
