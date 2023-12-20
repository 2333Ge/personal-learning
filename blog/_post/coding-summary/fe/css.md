---
title: CSS 巩固
date: 2023-12-20
category: FE
tags:
  - CSS
  - FE
---

<!-- more -->

## 选择器

### 类型、类、全局、ID选择器

全局选择器

```css
* {
  margin: 0;
}
```

指向特定元素的类，表示应用一个类的特定元素
```css
span.highlight {
  background-color: yellow;
}
/** 📢 注意和下面写法的区别，下面表示span元素内部的任意后代元素 */
span .highlight{

}
```

### 属性选择器

根据一个元素上的某个标签的属性的**存在**
```css
a[title] {
}
```

有**特定值的**标签属性是否存在
```css
a[href="https://example.com"]
{
}
```

### 伪类与伪元素

**伪类**：添加到选择器的关键字，用于指定所选元素的特殊状态（元素显示、状态、用户行为等）
```css
a:hover {
}
```

**伪元素**：附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式
```css
p::first-line {
}
```

📢 注意以下两种的区别
```css

article :first-child{}
/**等价于↓，表示article内部的所有第一个子元素(不光是第一个直接子元素) */
article *:first-child {}

/**表示的是作为第一个子元素的 `article`元素 */
article:first-child{}
```

可结合下例理解

```html
<style>
  article :first-child {
    background-color: #333;
  }
  article:first-child {
    background-color: #00f;
  }
</style>
<body>
  <div title="123"></div>
  <article>
    <div>article的直接第一个子元素</div>
    <div>
      <p>article的子元素的第一个子元素</p>
      <p>非第一个元素</p>
    </div>
  </article>
  <div>
    <article>div 下第一个 article</article>
  </div>
</body>
```

### 种类

from ai

CSS（层叠样式表）选择器用于选择HTML元素以便应用样式规则。CSS选择器有多种类型，每种类型都有特定的用途。以下是一些常见的CSS选择器类型：

1. 元素选择器（Type Selector）: 选择HTML文档中的特定类型的元素。
   例子: `div`, `p`, `h1`

2. 类选择器（Class Selector）: 选择具有特定类属性的元素。
   例子: `.classname`

3. ID选择器（ID Selector）: 选择具有特定ID的单个元素。
   例子: `#idname`

4. 通配符选择器（Universal Selector）: 选择所有元素。
   例子: `*`

5. 属性选择器（Attribute Selector）: 选择具有特定属性的元素。
   例子: `[type="text"]`, `[href]`

6. 后代选择器（Descendant Selector）: 选择特定元素内部的后代元素。
   例子: `div p`

7. 子选择器（Child Selector）: 选择特定元素的直接子元素。
   例子: `ul > li`

8. 相邻兄弟选择器（Adjacent Sibling Selector）: 选择紧接在另一个元素之后的元素。
   例子: `h1 + p`

9. 通用兄弟选择器（General Sibling Selector）: 选择同一父元素下的所有兄弟元素。
   例子: `h1 ~ p`

10. 伪类选择器（Pseudo-class Selector）: 选择特定状态的元素，如鼠标悬停或被选中的元素。
    例子: `a:hover`, `input:checked`

11. 伪元素选择器（Pseudo-element Selector）: 选择元素的特定部分，例如第一行或第一个字母。
    例子: `p::first-line`, `p::first-letter`

12. 分组选择器（Grouping Selector）: 将多个选择器组合在一起，用逗号分隔，以应用相同的样式规则。
    例子: `h1, h2, h3`

13. 伪元素选择器（Not Selector）: 选择除某些元素之外的所有元素。
    例子: `:not(.classname)`

这些选择器可以组合使用，以创建更具体和强大的选择器，以便精确地选择页面上的元素并应用样式。随着CSS版本的发展，还可能引入了更多高级选择器，但以上列出的是最基础和最广泛使用的选择器类型。