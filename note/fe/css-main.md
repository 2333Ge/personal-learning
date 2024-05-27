---
title: CSS 知识要点（ing）
date: 2024-03-20
category: 
tags:
  - CSS
  - FE
---

<!-- more -->

## 思考下面的问题

1. CSS中的盒模型是什么？它是如何工作的？ 
2. 解释CSS中 inline 和 block 元素的区别。 
3. 如何在网页中水平居中一个元素？ 
4. 什么是CSS选择器？列举几种常用的CSS选择器。 
5. 什么是浮动（float）？如何清除浮动？ 
6. 什么是响应式设计（Responsive Web Design）？如何实现响应式设计？ 
7. 什么是Flexbox布局？它有什么优势？ 
8. 如何实现垂直居中一个元素？ 
9. 什么是CSS预处理器？举例说明一种CSS预处理器。 
10. 什么是层叠顺序（z-index）？如何控制元素的层叠顺序？
11. 什么是BFC？如何创建？应用场景


## 7.什么是Flexbox布局？它有什么优势？

当抉择该用网格还是弹性盒时，你可以问自己一个简单的问题：

我只需要按行或者列控制布局？那就用弹性盒子
我需要同时按行和列控制布局？那就用网格

## 11. 什么是BFC？如何创建？应用场景

参考资料：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)

**应用场景**（示例看MDN）：
- 包含内部浮动（不溢出）：使浮动内容和周围的内容等高。
- 排除外部浮动（不覆盖）：正常文档流中建立的 BFC 不得与元素本身所在的块格式化上下文中的任何浮动的外边距重叠。
- 防止外边距重叠（不叠边）

### 防止外边距重叠的错误理解

以下示例汇总即使给div设置了`overflow:hidden`也并不能防止外边距重叠

```html
<style>
  div {
    overflow: hidden;
    margin: 3vh;
    background-color: #363;
    height: 20px;
  }
</style>
<body>
  <div></div>
  <div></div>
</body>
```

正确的做法是在原有的重叠元素上套一个BFC的容器

```html

<style>
.outer {
  overflow: hidden;
  background-color: transparent;
}
</style>
<body>
  <div></div>
  <div class="outer">
    <div></div>
  </div>
  </body>
</body>
```

## 外边距折叠

https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing