---
order: 2
groupOrder: 3
groupName: "String"
name: "_.StringEndsWith"
path: "/string/ends-with"
---

<br/>

## “String” 方法

<br/>

```typescript
_.StringEndsWith<str, searchStr>
```

<br/>

用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的

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
type ValidString = _.StringEndsWith<'VueReactAngular', 'Angular'>;
// => 'VueReactAngular'

type ValidString = _.StringEndsWith<'VueReactAngular', 'React'>;
// => never
```
