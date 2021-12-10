---
order: 3
groupOrder: 3
groupName: "String"
name: "_.StringTrimStart"
path: "/string/trim-start"
---

<br/>

## “String” 方法

<br/>

```typescript
_.StringTrimStart<str>
```

<br/>

方法从字符串的开头删除空格

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
type TrimedString = _.StringTrimStart<'   Vue React Angular'>;
// => 'Vue React Angular'

type TrimedString = _.StringTrimStart<'Vue React Angular   '>;
// => 'Vue React Angular   '
```
