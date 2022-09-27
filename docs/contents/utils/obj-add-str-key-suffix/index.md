---
order: 13
groupOrder: 1
groupName: "Utils"
name: "_.ObjAddStrKeySuffix"
path: "/utils/obj-add-str-key-suffix"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.ObjAddStrKeySuffix<origin, suffix>
```

<br/>

给对象的 key(string) 增加 指定后缀

<br/>

### 参数

<br/>

<font color="#d9a84a">origin (Object)</font>: 需要处理的 对象 类型<br/>
<font color="#d9a84a">suffix (string)</font>: 需要添加的后缀

<br/>

### 返回

<br/>

<font color="#d9a84a">obj (Object)</font>: key(string) 增加 指定后缀后的对象。

<br/>

### 例子

<br/>

```typescript
type Origin = {
  test1: string;
  test2: boolean;
  test3: number;
};

// 给对象的增加 'Aa' 后缀
type ObjAfterAddStrKeySuffix = _.ObjAddStrKeySuffix<Origin, 'Aa'>;
// => { test1Aa: string; test2Aa: boolean; test3Aa: number; }
```
