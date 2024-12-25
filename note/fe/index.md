---
title: 前端开发概览
date: 2022-01-01
category: FE
tags:
  - FE
---

<!-- more -->

## 技能树

参考1：

![技能](./image/fe-skill-tree.jpg)

## html

HTML 文件的组成部分

> 参考：https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics

解析HTML文件的顺序

-   浏览器首先解析 HTML 文件，并从中识别出所有的 `<link>` 和 `<script>` 元素，获取它们指向的外部文件的链接。
-   继续解析 HTML 文件的同时，浏览器根据外部文件的链接向服务器发送请求，获取并解析 CSS 文件和 JavaScript 脚本文件。
-   接着浏览器会给解析后的 HTML 文件生成一个 [DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model) 树（在内存中），会给解析后的 CSS 文件生成一个 [CSSOM](https://developer.mozilla.org/zh-CN/docs/Glossary/CSSOM) 树（在内存中），并且会[编译和执行](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work#%E5%85%B6%E4%BB%96%E8%BF%87%E7%A8%8B)解析后的 JavaScript 脚本文件。
-   伴随着构建 DOM 树、应用 CSSOM 树的样式、以及执行 JavaScript 脚本文件，浏览器会在屏幕上绘制出网页的界面；用户看到网页界面也就可以跟网页进行交互了。

HTML 头部


## http 

### http 状态码

- 1xx: 表示目前是协议处理的中间状态，还需要后续操作。
- 2xx: 表示成功状态。
- 3xx: 重定向状态，资源位置发生变动，需要重新请求。
- 4xx: 请求报文有误。
- 5xx: 服务器端发生错误。


## 3次握手、4次挥手

握手目的，确认双方的发送能力、接收能力是否正常。

每个阶段各确认了什么：

第一次握手：客 => 服，客户端发送能力正常

第二次握手：服 => 客，+ 服务端接收能力、服务端发送能力，客户端接收能力（但是服务端不知道）

第三次握手：客 => 服，+ 客户端接收能力（服务端知道）

## 什么是函数编程

函数编程的一些关键概念(from chatgpt)：

纯函数（Pure Functions）：纯函数是指具有以下特性的函数：

1. 它的输出仅由输入决定，对于相同的输入始终产生相同的输出。
它不依赖于或修改外部状态。
它没有副作用，即不会对除函数返回值以外的任何东西产生影响。
纯函数的特性使得它们具有可预测性、可测试性和可维护性，并且易于并行化处理。

2. 不可变性（Immutability）：函数式编程鼓励使用不可变的数据结构和避免直接修改数据。不可变性意味着数据一旦创建就不能被修改，而是通过创建新的数据来表示状态的变化。这种方式可以减少并发问题，并简化代码的推理和调试。

3. 高阶函数（Higher-Order Functions）：函数可以作为参数传递给其他函数，或者作为函数的返回值返回。高阶函数使得代码更具有抽象性和灵活性，可以通过组合和转换函数来构建复杂的逻辑。

4. 函数组合（Function Composition）：函数组合是将多个函数连接在一起以生成新函数的过程。通过将一个函数的输出作为另一个函数的输入，可以创建出更复杂的功能。函数组合有助于减少代码的重复性，提高代码的可读性和可维护性。

5. 无可变数据流（Immutable Data Flow）：函数式编程鼓励使用无可变数据流的方式处理数据。通过将数据传递给函数链，每个函数都返回一个新的数据集，而不是直接修改原始数据。这种方式简化了代码的理解和调试，使得数据流的变化更容易追踪。

函数式编程通常关注于如何构建不可变的、可组合的和可重用的函数，以及如何将这些函数组合成更大的功能单元。它强调数据和行为的分离，以及通过函数的组合和转换来处理数据的方式。函数式编程在处理大规模数据、并行计算和构建高度可靠的系统方面具有很多优势。

## 前段基础相关笔记

- [3次握手4次挥手](./three-way-handshake.md)
- [前端常用单位说明](./fe-unit.md)

## 巩固资料

- https://web.dev/learn?hl=zh-cn

> from ai

JavaScript:

1. "JavaScript高级程序设计"（《Professional JavaScript for Web Developers》） - 由Nicholas C. Zakas撰写的一本经典书籍，涵盖了 JavaScript 的方方面面，从基础知识到高级概念都有涉及。

2. "你不知道的JavaScript"（《You Don't Know JS》） - 这是一系列由Kyle Simpson撰写的书籍，分为多个部分，涵盖了 JavaScript 的深入概念和细节。适合有一定 JavaScript 基础的读者。

3. MDN Web 文档（https://developer.mozilla.org/zh-CN/docs/Web/JavaScript）- Mozilla 开发者网络（MDN）提供的 JavaScript 文档是一个权威且详尽的在线资源，涵盖了 JavaScript 的语法、特性、API 等方面的内容。

CSS:

1. "CSS权威指南"（《CSS: The Definitive Guide》） - 由Eric Meyer和Estelle Weyl撰写的一本全面介绍 CSS 的书籍，覆盖了 CSS 的各个方面，从基础到高级技术。

2. "CSS揭秘"（《CSS Secrets》） - 由Lea Verou撰写的一本关于 CSS 技巧和技术的书籍，展示了一些令人惊叹的 CSS 技术和实用的技巧。

3. CSS-Tricks（https://css-tricks.com/）- CSS-Tricks 是一个广受欢迎的 CSS 相关资源网站，提供了大量有关 CSS 技术、教程、示例和技巧的文章和视频。

HTML:

1. "HTML和CSS设计与构建网站"（《HTML and CSS: Design and Build Websites》） - 由Jon Duckett撰写的一本适合初学者的书籍，介绍了 HTML 和 CSS 的基础知识和实践方法。

2. HTML5 Rocks（https://www.html5rocks.com/）- HTML5 Rocks 是一个由 Google 维护的网站，提供了关于 HTML5 技术的文章、教程和示例，涵盖了最新的 HTML 技术和最佳实践。

3. Mozilla 开发者网络（MDN）HTML 文档（https://developer.mozilla.org/zh-CN/docs/Web/HTML）- 类似于 JavaScript，MDN 也提供了详细的 HTML 文档，涵盖了 HTML 的语法、元素、属性等方面的知识。
