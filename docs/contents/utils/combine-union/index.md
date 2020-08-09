---
order: 1
groupOrder: 1
groupName: "Utils"
name: "_.CombineUnion"
path: "/utils/combine-union"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.CombineUnion<union>
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
type IntersectionFromUnion = _.CombineUnion<{ a: string } | { b: number }>;
// => { a: string } & { b: number }

type IntersectionFromUnion = _.CombineUnion<{ a: string } | { b: number } | { c: boolean }>;
// => { a: string } & { b: number } & { c: boolean }
```
