---
order: 8
groupOrder: 3
groupName: "String"
name: "_.StringConcat"
path: "/string/concat"
---

<br/>

## “String” 方法

<br/>

```typescript
_.StringConcat<str, strOrStrArr>
```

<br/>

将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回

<br/>

### 参数

<br/>

<font color="#d9a84a">str (string)</font>: 尾部等待被连接的字符串<br/>
<font color="#d9a84a">strOrStrArr (string | string[])</font>: 需要连接到 str 的「字符串」或「字符串列表」

<br/>

### 返回

<br/>

<font color="#d9a84a">string</font>: 一个新的字符串，包含参数所提供的连接字符串

<br/>

### 例子

<br/>

```typescript
type ConcatedString = _.StringRepeat<'Vue', 'React'>;
// => 'VueReact'

type ConcatedString = _.StringRepeat<'Vue', ['React', 'Angular']>;
// => 'VueReactAngular'
```
