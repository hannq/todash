---
order: 1
groupOrder: 3
groupName: "String"
name: "_.StringStartsWith"
path: "/string/starts-with"
---

<br/>

## “String” 方法

<br/>

```typescript
_.StringStartsWith<str, searchStr>
```

<br/>

用来判断当前字符串是否以另外一个给定的子字符串开头

<br/>

### 参数

<br/>

<font color="#d9a84a">str (string)</font>: 被搜索的当前字符串<br/>
<font color="#d9a84a">searchStr (string)</font>: 要搜索的子字符串

<br/>

### 返回

<br/>

<font color="#d9a84a">string</font>: **符合条件**返回 **当前字符串** 反之 `never`。

<br/>

### 例子

<br/>

```typescript
type ValidString = _.StringStartsWith<'VueReactAngular', 'Vue'>;
// => 'VueReactAngular'

type ValidString = _.StringStartsWith<'VueReactAngular', 'React'>;
// => never
```
