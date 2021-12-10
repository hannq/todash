---
order: 5
groupOrder: 3
groupName: "String"
name: "_.StringTrim"
path: "/string/trim"
---

<br/>

## “String” 方法

<br/>

```typescript
_.StringTrim<str>
```

<br/>

从一个字符串的两端删除空白字符

<br/>

### 参数

<br/>

<font color="#d9a84a">str (string)</font>: 需要被处理的字符串

<br/>

### 返回

<br/>

<font color="#d9a84a">string</font>: 返回被处理过的字符串

<br/>

### 例子

<br/>

```typescript
type TrimedString = _.StringTrim<'Vue React Angular   '>;
// => 'Vue React Angular'

type TrimedString = _.StringTrim<'   Vue React Angular'>;
// => 'Vue React Angular'

type TrimedString = _.StringTrim<'   Vue React Angular   '>;
// => 'Vue React Angular'
```
