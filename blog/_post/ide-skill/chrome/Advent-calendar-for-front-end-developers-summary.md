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

Ctrl CMD 替换实验，MAC Windows 记混了


## 关键字

### 赋值与保存

- 终端 `copy()`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/16787442a1444125~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 存储为全局变量：终端右键变量，选择 “Store as global variable”

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/167874429e8b8f73~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 保存堆栈信息，准确描述问题： 终端右键，`save as`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/16787442c1b6d1f7~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)


- COPY HTML: `Ctrl C`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/16787442daaa7199~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

### 快捷键

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

### 使用Command

`ctrl shift p`

- 节点截图、截长图
- 切换主题

### 使用代码块

- 创建代码块

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/29/167f5b6997643be2~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

### console 中的 ‘$’

- `$0` 是对我们当前选中的 html 节点的引用
- `$1` 是对上一次我们选择的节点的引用
- `$2` 是对在那之前选择的节点的引用，等等
- `$_` 是对上次执行的结果的 引用
- `$i` 在 console 中引入和测试一些 npm 库, $i('lodash') 或者 $i('moment') 几秒钟后，你就可以获取到 lodash / momentjs

### console 中的 “bug”

- 

