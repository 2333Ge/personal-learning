---
title: CSS 盒模型
date: 2023-12-22
category: 
tags: 
  - CSS
  - FE
---

<!-- more -->

## 盒模型

盒模型的组成部分

![盒模型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)


```css
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}
```

如果使用**标准模型**，实际占用空间的宽高分别为：宽度 = 410px (350 + 25 + 25 + 5 + 5)，高度 = 210px (150 + 25 + 25 + 5 + 5)。浏览器默认使用标准盒模型。

**替代盒模型**,所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到 (width = 350px, height = 150px).使用替代模型，你可以通过为其设置 `box-sizing: border-box` 来实现。

**外边距折叠** 如果你有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。

**内边距没有复值**

**`display: inline-block`技巧**，想要通过添加内边距使链接具有更大的命中区域时，这是很有用的。`<a>` 是像 `<span>` 一样的内联元素；你可以使用 `display: inline-block` 来设置内边距，让用户更容易点击链接。