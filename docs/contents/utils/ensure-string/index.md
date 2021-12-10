---
order: 11
groupOrder: 1
groupName: "Utils"
name: "_.EnsureString"
path: "/utils/ensure-string"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.EnsureString<t>
```

<br/>

确保指定类型一定是字符串

<br/>

### 参数

<br/>

<font color="#d9a84a">t (unknown)</font>: 需要被处理的类型

<br/>

### 返回

<br/>

<font color="#d9a84a">string</font>: 返回 被处理后的 字符串 类型。

<br/>

### 例子

<br/>

```typescript
type StringAfterEnsure = _.EnsureString<'vue'>;
// => 'vue'

type StringAfterEnsure = _.EnsureString<unknown>;
// => ''
```
