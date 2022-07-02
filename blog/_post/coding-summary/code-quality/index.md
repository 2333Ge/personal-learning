---
title: 代码质量概述
date: 2020-01-01
category: code-quality
tags: 
  - code-quality
---

> - 当一个团队里的底层代码难以阅读、耦合了上层的逻辑导致难以测试、或者对使用场景做了过多的假设导致难以复用时，虽然完成了功能，它依然是坨翔一样的代码。
> - 几乎所有的烂代码都是从“够用的代码”演化来的，代码没变，使用代码的场景发生变了，原本够用的代码不符合新的场景，那么它就成了烂代码。[4]

<!-- more -->
## 基本原则（面向对象开发）

- 单一职责
- 开闭原则（对拓展开放、对修改封闭）
- 里氏替换（引用基类的地方必须能透明使用其子类）
- 依赖倒置
  - 高层模块不依赖底层模块，两者都依赖其抽象
  - 抽象不依赖细节
  - 细节依赖抽象
- 接口隔离（类的依赖关系建立在最小接口上）
- 迪米特原则（一个对象应该对其他对象有最少的了解）
# 相关链接

- [1] [VSC官网TS重构教程](https://code.visualstudio.com/Docs/languages/typescript#_refactoring)
- [2] [极客网VSC重构教程](https://geek-docs.com/vscode/vscode-tutorials/vs-code-refactor.html)
  - 快捷键 f2、command+.
- [3] [代码与代码规范](https://feelschaotic.gitbook.io/android-knowledge-system/shitxing-cheng-chang/tuan-dui-guan-li/dai-ma-zhi-liang-yu-dai-ma-gui-fan)
- [4] [关于烂代码的那些事（上）](https://blog.csdn.net/jt521xlg/article/details/47416475)  
- [5] [关于烂代码的那些事（中）](http://blog.2baxb.me/archives/1378)  
- [6] [关于烂代码的那些事（下）](http://blog.2baxb.me/archives/1499)
- [7] [《重构(第二版)》笔记](./reactor2-summary.md)
