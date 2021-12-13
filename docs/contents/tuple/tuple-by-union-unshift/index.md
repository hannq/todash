---
order: 4
groupOrder: 2
groupName: "Tuple"
name: "_.TupleByUnionUnshift"
path: "/tuple/tuple-by-union-unshift"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.TupleByUnionUnshift<tuple, type>
```

<br/>

`TupleByUnionUnshift` 的 `Union` 情况专用处理函数
将一个类型添加元组的开头，并返回「暴力枚举后」的「元组联合类型」

<br/>

### 参数

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 需要处理的元组<br/>
<font color="#d9a84a">type (unknown)</font>: 需要被添加到元组中的类型

<br/>

### 返回

<br/>

<font color="#d9a84a">tuple (Tuple)</font>: 首部被添加一项后的元组

<br/>

### 例子

<br/>

```typescript
type TupleAfterUnionUnshift = _.TupleByUnionUnshift<['angular'], 'react' | 'vue'>;
// => ['react', 'angular'] | ['vue', 'angular']

type TupleAfterUnionUnshift = _.TupleByUnionUnshift<['angular'] | ['solid'], 'react' | 'vue'>;
// => ['react', 'angular'] | ['vue', 'angular'] | ['react', 'solid'] | ['vue', 'solid']

// diff with TupleByUnshift
type TupleAfterUnshift = _.TupleByUnshift<['angular'], 'react' | 'vue'>;
// => ['react' | 'vue', 'angular']
```
