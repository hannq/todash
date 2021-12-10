---
order: 7
groupOrder: 3
groupName: "String"
name: "_.StringRepeat"
path: "/string/repeat"
---

<br/>

## “String” 方法

<br/>

```typescript
_.StringRepeat<str, count>
```

<br/>

构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本

<br/>

### 参数

<br/>

<font color="#d9a84a">str (string)</font>: 需要被重复的字符串
<font color="#d9a84a">count (number)</font>: 表示在新构造的字符串中重复了多少遍原字符串 默认为 0

<br/>

### 返回

<br/>

<font color="#d9a84a">string</font>: 包含指定字符串的指定数量副本的新字符串

<br/>

### 例子

<br/>

```typescript
type RepeatString = _.StringRepeat<'Vue'>;
// => ''

type RepeatString = _.StringRepeat<'Vue', 0>;
// => ''

type RepeatString = _.StringRepeat<'React', 1>;
// => 'React'

type RepeatString = _.StringRepeat<'Angular', 10>;
// => 'AngularAngularAngularAngularAngularAngularAngularAngularAngularAngular'
```
