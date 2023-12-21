---
title: CSS 选择器
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

#### 存否值选择器

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

特定值是元素对应属性值的**子集**

```css
p[class~="special"]
```

#### 子字符串匹配选择器

```css
/**开头 */
li[class^="box-"]{}

/**结尾 */
li[class$="-box"]

/**包含 */
li[class*="box"]

```
#### 大小写敏感设置

```css

/**默认大小写敏感 */
li[class^="a"] {
  background-color: yellow;
}

/**设置大小写不敏感 */
li[class^="a" i] {
  color: red;
}
```


### 伪类与伪元素

上[MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements) 查看更多伪类、伪元素示例

有很多可以基于CSS实现，不用写JS，如设置元素的选中态样式可以用伪类实现:
```
:checked	匹配处于选中状态的单选或者复选框。
```

#### 伪类

**伪类**：用于指定所选元素的特殊状态（元素显示、状态、用户行为等），特殊状态时它们表现得会像是你向你的文档的某个部分应用了一个类一样

```css
a:hover {
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

#### 伪元素


**伪元素**：允许你对被选择元素的特定部分修改样式
```css
p::first-line {
}

p::before {
}
```


### 关系选择器

后代选择器：`body article p`，子元素
子代选择器： `article > p`，直接子元素
邻接兄弟选择器：`article + p`
通用兄弟选择器：`article ~ p`

## 层叠、优先级与继承

**一些特殊的属性值与属性**

- inherit、initial、revert、revert-layer、unset
- all: 重设所有属性

```css
.fix-this {
  all: unset;
}
```

### 浏览器如何计算优先级

一个选择器的优先级可以说是由三个不同的值（或分量）相加

ID：选择器中包含 ID 选择器则百位得一分。
类：选择器中包含类选择器、属性选择器或者伪类则十位得一分。
元素：选择器中包含元素、伪元素选择器则个位得一分。

<!-- 为什么是优先级是这个值 -->

| 选择器                                    | ID  | 类  | 元素 | 优先级 |
| ----------------------------------------- | --- | --- | ---- | ------ |
| `h1`                                      | 0   | 0   | 1    | 0-0-1  |
| ---                                       | --- | --- | ---  | ---    |
| `h1 + p::first-letter`                    | 0   | 0   | 3    | 0-0-3  |
| `li > a[href*="en-US"] > .inline-warning` | 0   | 2   | 2    | 0-2-2  |
| `#identifier`                             | 1   | 0   | 0    | 1-0-0  |
| `button:not(#mainBtn, .cta)`              | 1   | 0   | 1    | 1-0-1  |

<!-- 层叠层，先放一放：https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_layers -->

