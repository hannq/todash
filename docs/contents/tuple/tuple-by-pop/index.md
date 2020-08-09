---
order: 4
groupOrder: 2
groupName: "Tuple"
name: "_.TupleByPop"
path: "/tuple/tuple-by-pop"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.TupleByPop<tuple>
```

<br/>

删除元组最后一项，并返回该元组

<br/>

### 参数

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 需要处理的元组

<br/>

### 返回

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 返回删除最后一项后的元组

<br/>

### 例子

<br/>

```typescript

type LastItem = _.TupleByPop<['vue', 'react', 'angular']>;
// => ['vue', 'react']

type LastItem = _.TupleByPop<['vue', 'react']>;
// => ['vue']
```
