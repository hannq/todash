---
order: 9
groupName: "Utils"
name: "_.OmitOptional"
path: "/utils/omit-optional"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.OmitOptional<obj>
```

<br/>

从 字面量对象 中删除可选字段

<br/>

### 参数

<br/>

<font color="#d9a84a">obj (Object)</font>: 需要处理的 字面量对象 类型

<br/>

### 返回

<br/>

<font color="#d9a84a">obj (Object)</font>: 返回 被处理后的 字面量对象 类型。

<br/>

### 例子

<br/>

```typescript
type ObjectAfterOmitOptional = _.OmitOptional<{ vue: string; react: number; angular?: boolean; }>;
// => { vue: string; react: number; }

type ObjectAfterOmitOptional = _.OmitOptional<{ vue?: string; react: number;}>;
// => { react: number; }
```
