---
order: 3
groupOrder: 1
groupName: "Utils"
name: "_.PopUnion"
path: "/utils/pop-union"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.PopUnion<union>
```

<br/>

将 联合类型(union) 的最后一项弹出

<br/>

### 参数

<br/>

<font color="#d9a84a">union (Union)</font>: 需要处理的 联合类型(union)

<br/>

### 返回

<br/>

<font color="#d9a84a">unknown</font>: 返回 联合类型(union) 的最后一项。

<br/>

### 例子

<br/>

```typescript
type LastUnion = _.PopUnion<'vue' | 'react' | 'angular'>;
// => 'angular'

type LastUnion = _.PopUnion<'vue' | 'react'>;
// => 'react'
```
