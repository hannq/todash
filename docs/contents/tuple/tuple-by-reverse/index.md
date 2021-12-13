---
order: 9
groupOrder: 2
groupName: "Tuple"
name: "_.TupleByReverse"
path: "/tuple/tuple-by-reverse"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.TupleByReverse<tuple>
```

<br/>

将元组的顺序反转，并返回

<br/>

### 参数

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 需要处理的元组

<br/>

### 返回

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 返回所有元素顺序被反转之后的元组

<br/>

### 例子

<br/>

```typescript

type TupleAfterReverse = _.TupleByReverse<['react', 'angular']>;
// => ['angular', 'react']

type TupleAfterPush = _.TupleByReverse<['vue', 'react','angular']>;
// => ['angular', 'react', 'vue']
```
