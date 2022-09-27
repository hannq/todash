---
order: 12
groupOrder: 1
groupName: "Utils"
name: "_.ObjAddStrKeyPrefix"
path: "/utils/obj-add-str-key-prefix"
---

<br/>

## “Utils” 方法

<br/>

```typescript
_.ObjAddStrKeyPrefix<origin, prefix>
```

<br/>

给对象的 key(string) 增加 指定前缀

<br/>

### 参数

<br/>

<font color="#d9a84a">origin (Object)</font>: 需要处理的 对象 类型<br/>
<font color="#d9a84a">suffix (string)</font>: 需要添加的前缀

<br/>

### 返回

<br/>

<font color="#d9a84a">obj (Object)</font>: key(string) 增加 指定前缀后的对象。

<br/>

### 例子

<br/>

```typescript
type Origin = {
  test1: string;
  test2: boolean;
  test3: number;
};

// 给对象的增加 'aa' 前缀
type ObjAfterAddStrKeyPrefix = _.ObjAddStrKeyPrefix<Origin, 'aa'>;
// => { aaTest1: string; aaTest2: boolean; aaTest3: number; }
```
