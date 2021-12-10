---
order: 9
groupOrder: 2
groupName: "Tuple"
name: "_.TupleJoin"
path: "/tuple/tuple-join"
---

<br/>

## “Tuple” 方法

<br/>

```typescript
_.TupleJoin<strArr, separator>
```

<br/>

将一个字符串元组的所有元素用指定分隔符连接成一个字符串并返回这个字符串

<br/>

### 参数

<br/>

<font color="#d9a84a">strArr (Tuple&lt;string&gt;)</font>: 需要被连接的字符串元组
<font color="#d9a84a">separator (string)</font>: 用于连接的分隔符 默认为 `,`

<br/>

### 返回

<br/>

<font color="#d9a84a">string</font>: 用指定分隔符连接的字符串

<br/>

### 例子

<br/>

```typescript
type StringByJoin = _.TupleJoin<['vue', 'react', 'angular']>;
// => 'vue,react,angular'

type StringByJoin = _.TupleJoin<['vue', 'react', 'angular'], '.'>;
// => vue.react.angular
```
