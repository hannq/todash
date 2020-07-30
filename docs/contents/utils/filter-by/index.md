---
order: 8
groupName: "Utils"
name: "_.FilterBy"
path: "/utils/filter-by"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.FilterBy<obj, vType>
```

<br/>

从对象中删除非指定值类型的字段

<br/>

### 参数

<br/>

<font color="#d9a84a">array (Array)</font>: 需要处理的 数组/元组 类型

<br/>

### 返回

<br/>

<font color="#d9a84a">array (Array)</font>: 返回 被处理后的 数组/元组 类型。

<br/>

### 例子

<br/>

```typescript
type ArrayAfterEnsure = _.EnsureArray<['vue', 'react', 'angular']>;
// => ['vue', 'react', 'angular']

type ArrayAfterEnsure = _.EnsureArray<'vue'>;
// => []
```
