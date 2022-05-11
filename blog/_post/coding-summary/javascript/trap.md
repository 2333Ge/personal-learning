---
title: JS 踩坑记录
date: 2022-05-10
category: JavaScript
tags:
  - JavaScript
  - Wiki
---

<!-- more -->

## 踩坑记录

### 谨慎使用 `===`

**出错场景**：判断ID时用的`===`，有的地方传递的String、有的地方Number 

### 小颗粒度高复用场景状态封装

**出错场景**：人员关注时，将状态管理放在按钮中，状态更改时同页面其他地方更新不了。

### 回调函数创建到调用时的值更新问题

**出错场景**：创建回调函数时，传的基础类型的变量，源变量更新，回调函数调用还用的旧值。

```
```