---
order: 2
groupOrder: 1
groupName: "Utils"
name: "_.PureCombineUnion"
path: "/utils/pure-combine-union"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.PureCombineUnion<union>
```

<br/>

将 联合类型(union) 转换成 交叉类型(intersection)

<br/>

### 参数

<br/>

<font color="#d9a84a">union (Union)</font>: 需要处理的 联合类型(union)

<br/>

### 返回

<br/>

<font color="#d9a84a">intersection (Intersection)</font>: 返回由 联合类型(union) 转换为的 交叉类型(intersection)。

<br/>

### 例子

<br/>

```typescript

type IntersectionFromUnion = _.PureCombineUnion<{ a: string } | { b: number }>;
// => { a: string; b: number }

type IntersectionFromUnion = _.PureCombineUnion<{ a: string } | { b: number } | { c: boolean }>;
// => { a: string; b: number; c: boolean }
```

<br/>

### 区别

<br/>

与 CombineUnion 区别在于： PureCombineUnion 让合并之后的类型更加整洁

<br/>

```typescript
type IntersectionFromUnion = _.CombineUnion<{ a: string } | { b: number }>;
// => { a: string } & { b: number }

type IntersectionFromUnion = _.PureCombineUnion<{ a: string } | { b: number }>;
// => { a: string; b: number }
```
