---
order: 7
groupName: "Utils"
name: "_.OmitBy"
path: "/utils/omit-by"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.OmitBy<obj, vType>
```

<br/>

从对象中删除指定值类型的字段

<br/>

### 参数

<br/>

<font color="#d9a84a">obj (Object)</font>: 需要处理的 对象 类型
<font color="#d9a84a">vType (unknown)</font>: 需要被删除字段的指定值类型

<br/>

### 返回

<br/>

<font color="#d9a84a">obj (Object)</font>: 返回 删除指定值类型的字段的 对象 类型。

<br/>

### 例子

<br/>

```typescript
interface MyType {
  a: string;
  b: number;
  c: boolean;
  d: () => void;
}

// 例如当你需要只去除所有值类型为方法的属性
type ObjAfterOmitBy = _.OmitBy<MyType, Function>;
// => { a: string; b: number; c: boolean; }

// 例如当你需要只去除所有值类型不为方法的属性
type ObjAfterFilterBy = FilterBy<MyType, Function>;
// => { d: () => void; }
```
