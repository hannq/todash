---
order: 4
groupName: "Utils"
name: "_.UnionByPop"
path: "/utils/union-by-pop"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.UnionByPop<union>
```

<br/>

将 联合类型(union) 类型的最后一项弹出后，将剩余的部分返回

<br/>

### 参数

<br/>

<font color="#d9a84a">union (Union)</font>: 需要处理的 联合类型(union)

<br/>

### 返回

<br/>

<font color="#d9a84a">union (Union)</font>: 返回 联合类型(union) 被删除最后一项后的剩余部分。

<br/>

### 例子

<br/>

```typescript
type UnionAfterPop = _.UnionByPop<'vue' | 'react' | 'angular'>;
// => 'vue' | 'react'

type UnionAfterPop = _.UnionByPop<'vue' | 'react'>;
// => 'vue'
```
