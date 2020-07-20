---
order: 5
groupName: "Utils"
name: "_.AssignByOwnKey"
path: "/utils/assign-by-own-key"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.AssignByOwnKey<source, target>
```

<br/>

把自身（source）已有的属性 用 目标（target）的同名属性覆盖

<br/>

### 参数

<br/>

<font color="#d9a84a">source (object)</font>: 需要处理的自身类型<br/>
<font color="#d9a84a">target (object)</font>: 用以覆盖的目标类型

<br/>

### 返回

<br/>

<font color="#d9a84a">source (object)</font>: 返回 被覆盖属性之后的自身属性。

<br/>

### 例子

<br/>

```typescript
type TypeAfterAssign = _.AssignByOwnKey<{ a: string, b: number }, { a: boolean, b: number, c: string }>;
// => { a: boolean, b: number }

type TypeAfterAssign = _.AssignByOwnKey<{ a: string, b: number }, { c: string }>;
// => { a: string, b: number }
```
