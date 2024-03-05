---
title: 《CSS揭秘》笔记
date: 2023-11-24
category: 
tags:
  - CSS
  - FE
---

<!-- more -->

## 小知识

**CSS 3包含的内容以及名字由来：**

CSS3 并没有在任何规范中定义过，指的是一个非正式的集合，CSS 2后，CSS工作组意识到语言已经变得非常庞大，无法塞进单个规范中，将CSS打散到不通模块中，它包括CSS规范第三版（延续CSS2.1已有特性的模块）再加上一些版本号还是1的新规范，如：

- CSS层叠与继承（http://w3.org/TR/css-cascade-3）
- CSS颜色（http://w3.org/TR/css3-color）
- CSS变形（http://w3.org/TR/css-transforms-1）
...


**实现实验性的特性方案**

- **浏览器前缀**：在名称前面加上自己特有的前缀。最常见的前缀分别是Firefox的-moz-、IE的-ms-、Opera的-o-以及Safari和Chrome的-webkit-。非常不DRY
- **通过配置开关启用**。有效防止开发者在生产环境中滥用


## 实用技巧

**currentColor**

表示元素的 color 属性的值，比如想让所有的水平分割线（所有`<hr>`元素）自动与文本的颜色保持一致

currentColor本身就是很多CSS颜色属性的初始值，比如border-color和outline-color，以及text-shadow和box-shadow的颜色

**继承：inherit**

绑定到父元素的计算值（对伪元素来说，则会取生成该伪元素的宿主元素）

比如：创建提示框的时候，你可能希望它的小箭头能够自动继承背景和边框的样式

![inherit](./image/skill-inherit.png)

## 示例

试着实现下面的功能，未特殊说明的情况下，以下示例只能使用一个元素（伪元素不在限制内）

<!-- 为什么使用单个元素？

- 引入多余的元素会改变dom结构，而不允许修改的情况时常存在
-  

-->

### 背景与边框

#### 1. 实现纯色背景 + 半透明边框 

![示例图](./image/css-secrets-share/background-clip.png)

官方示例：  

本地实验：

<details>
<summary>
提示：
</summary>

</details>

#### 2. 实现多重边框

官方示例：  
本地实验：./css-secrets/multi-border.html

<details>
<summary>
提示：
</summary>
使用 box-shadow或outline  

注意: 阴影box-shadow本身不占空间，需要设置多余间距，或使用inset改为内阴影
</details>

#### 3. 实现条纹背景（横向、纵向、斜向）

本地实验：./css-secrets/multi-color-bg.html

<details>
<summary>
提示：
</summary>
<!-------------------书中解释------------------------->

linear-gradient 可以设置颜色与开始位置，使颜色突变，实现条纹效果
</details>

#### 4. 实现图片边框

![示例图](./image/css-secrets-share/img-border.png)

本地实验：./css-secrets/img-border.html
官方示例：https://dabblet.com/gist/55b5f131c45702a55684

<details>
<summary>
提示：
</summary>

</details>

<!-- 
六 复杂背景：棋盘、圆点重复 

8 实现行军蚁边框效果
https://dabblet.com/gist/f26dddc71730c3847153
8. 页脚

-->

### 形状

#### 1. 画一个椭圆、半椭圆、1/4椭圆

官方示例：  

本地实验：./css-secrets/circle-shape.html  

其他示例：[糖果按钮](https://simurai.com/archive/buttons/#markup)  

<details>
<summary>
提示：
</summary>

border-radius 可以指定水平半径、垂直半径

</details>

#### 2. 实现平行四边形背景，其内内容不变形

官方示例：https://play.csssecrets.io/parallelograms-pseudo

本地实验：./css-secrets/shape.html

<details>
<summary>提示</summary>
伪元素、transform(skew)
</details>

#### 3. 菱形图片

官方示例：https://play.csssecrets.io/diamond-clip

本地实验：./css-secrets/shape.html

<details>
<summary>
提示：
</summary>

[clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)属性，使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏

</details>

<!-- #### 4. 切角效果


<details>
<summary>
提示：
</summary>

渐变、border-image、clip-path都能实现

</details> -->

4. 梯形

## 相关链接

[1] [书中所有示例](https://play.csssecrets.io/)


