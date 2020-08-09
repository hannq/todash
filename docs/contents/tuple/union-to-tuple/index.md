---
order: 8
groupOrder: 2
groupName: "Tuple"
name: "_.Union2Tuple"
path: "/tuple/union-to-tuple"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.Union2Tuple<union>
```

<br/>

将 联合类型(union) 转化为 元组

<br/>

### 参数

<br/>

<font color="#d9a84a">union (Union)</font>: 需要转换的 联合类型(union)

<br/>

### 返回

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 返回由 联合类型(union) 按顺序转换而成的元组

<br/>

### 例子

<br/>

```typescript

type TupleFromUnion = _.Union2Tuple<'vue' | 'react' | 'angular'>;
// => ['vue', 'react', 'angular']

type TupleFromUnion = _.Union2Tuple<'react' | 'angular'>;
// => ['react', 'angular']
```
