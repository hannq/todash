---
order: 8
groupOrder: 2
groupName: "Tuple"
name: "_.TupleByUnionPush"
path: "/tuple/tuple-by-union-push"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.TupleByUnionPush<tuple, type>
```

<br/>

`TupleByPush` 的 `Union` 情况专用处理函数
将一个类型添加元组的末尾，并返回「暴力枚举后」的「元组联合类型」

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
type TupleAfterUnionPush = _.TupleByUnionPush<['angular'], 'react' | 'vue'>;
// => ['angular', 'react'] | ['angular', 'vue']

type TupleAfterUnionPush = _.TupleByUnionPush<['angular'] | ['solid'], 'react' | 'vue'>;
// => ['angular', 'react'] | ['angular', 'vue'] | ['solid', 'react'] | ['solid', 'vue']

// diff with TupleByPush
type TupleAfterPush = _.TupleByPush<['angular'], 'react' | 'vue'>;
// => ['angular', 'react' | 'vue']
```
