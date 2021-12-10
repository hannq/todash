---
order: 9
groupOrder: 3
groupName: "String"
name: "_.StringSplit"
path: "/string/split"
---

<br/>

## “String” 方法

<br/>

```typescript
_.StringSplit<str, separator>
```

<br/>

使用指定的分隔符字符串将一个字符串分割成子字符串元组，以一个指定的分割字串来决定每个拆分的位置

<br/>

### 参数

<br/>

<font color="#d9a84a">str (string)</font>: 尾部等待被连接的字符串<br/>
<font color="#d9a84a">separator (string)</font>: 指定表示每个拆分应发生的点的字符串

<br/>

### 返回

<br/>

<font color="#d9a84a">string[]</font>: 返回源字符串以分隔符出现位置分隔而成的一个元组

<br/>

### 例子

<br/>

```typescript
type SplitedStringTuple = _.StringSplit<'Vue', ''>;
// => ['V', 'u', 'e']

type SplitedStringTuple = _.StringSplit<'Vue,React,Angular', ','>;
// => ['Vue', 'React', 'Angular']
```
