---
title: 《你不知道的Chrome调试技巧》笔记
date: 2022-05-13
category: ide-skill
tags:
  - Chrome
  - ide-skill
  - FE
---

<!-- more -->

## 前言

原文链接： https://juejin.cn/book/6844733783166418958

全文精华，记录关键字供回忆复习

MAC Windows 的 Ctrl CMD 记混了 ，快捷键不生效时替换两个按键试试

## 如何不引入外部资源在浏览器中写代码并调试

source 左侧面板 Snippets

![](image/chrome-snippet.png)

## 赋值与保存

- 终端 `copy()`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/16787442a1444125~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 存储为全局变量：终端右键变量，选择 “Store as global variable”

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/167874429e8b8f73~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 保存堆栈信息，准确描述问题： 终端右键，`save as`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/16787442c1b6d1f7~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)


- COPY HTML: `Ctrl C`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/16787442daaa7199~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

## 快捷键

- 切换布局：ctrl + shift + D (⌘ + shift + D Mac) 

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/18/167c07cf50125757~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)


- 切换 DevTools 面板(mac cmd...)
  - `ctrl + [` 和 `ctrl + ]`
  - `ctrl + 1..9`

📢：第二组快捷键默认被禁用了。你可以通过 DevTools>>Settings >>Preferences>>*Appearance* 打开这个选项

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/18/167c07cf4d56febf~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 调整数值（样式等）

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/18/167c07cf43b2f06e~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)


- `ctrl+f`搜索查找：elements， logs， sources & network 中的查找

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/22/168747e72320ff3a~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

## 使用Command

`ctrl shift p`

- 节点截图、截长图
- 切换主题

## 使用代码块

- 创建代码块

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/29/167f5b6997643be2~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

## console 中的 ‘$’

- `$0` 是对我们当前选中的 html 节点的引用
- `$1` 是对上一次我们选择的节点的引用
- `$2` 是对在那之前选择的节点的引用，等等
- `$_` 是对上次执行的结果的 引用
- `$i` 在 console 中引入和测试一些 npm 库, $i('lodash') 或者 $i('moment') 几秒钟后，你就可以获取到 lodash / momentjs

## console 中的 “bug”

两次打印一样

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/11/1679a0d3a708ef3e~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

测试时在Vue和RN中打印出来不一样？

## 异步console

- console 可直接使用await

这种写法：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/12/1679e020118e0846~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

可改成：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/12/1679e0201c5c5fd7~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## 忍者打印

- 条件断点

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/17/167b94b8f36112b7~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


- 忍者打印

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/17/167b955a1f0311fc~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

条件打印示例：

```js
(item.key === 'header' && !console.table(item))
```

## 【console】自定义格式转换器

可以用来美化、过滤log，结合snippet实现保存（也可写在代码中，大概）

[原文链接](https://juejin.cn/book/6844733783166418958/section/6844733783212589063)


1. 开启 enable custom formatters

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/14/167abc4fc44e3add~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

2. 配置`window.devtoolsFormatters`

- header : 处理如何展示在 console 的日志中的主要部分。
- hasbody : 如果你想显示一个用来展开对象的 ▶ 箭头，返回 true
- body : 定义将会被显示在展开部分的内容中。

示例结果：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/14/167abc4fbd5ae3f6~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## 【console】对象&方法
