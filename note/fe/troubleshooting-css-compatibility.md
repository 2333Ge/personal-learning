---
title: 如何排查CSS兼容性问题
date: 2025-03-05
category: FE
tags:
  - FE
  - CSS
---

<!-- more -->

## 背景

测试：这个文章显示有问题

<!-- 配图 -->

一阵吭哧吭哧查以后

我：抓取的文章设置了text-wrap:no-wrap，不能换行就溢出了

<!-- 配图 -->

测试：为什么在华为p30里没问题，其他手机有问题

我：应该手机内置webview版本太老了，不支持这个特性

那么问题来了，虽然这个结论八九不离十了，但是如何证明就是webview的版本问题，但是这种模棱两可的答案让人难受，于是进行了以下排查

## 查询text-wrap的支持情况

第一步，通过 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) 或 [can i use](https://caniuse.com/?search=text-wrap%3Anowrap) 查询`text-wrap`的浏览器兼容性，

<!-- 配图 -->

<!-- 这两个的版本情况不一致 -->

## 确认webview的版本

通过 userAgent 判断

个人查询未果的经历：
1. 通过系统版本、查找对应webview版本
2. 

### 如何获取userAgent

1. 抓包
2. eruda
3. 

## 其他判断方式

因为userAgent可以被轻易修改，有的时候通过代码的方式判断更准确

```
if (window.CSS && CSS.supports('text-wrap', 'nowrap')) {
  console.log('支持text-wrap:nowrap');
} else {
  console.log('不支持text-wrap:nowrap');
}
```

## 总结

