---
title: Webpack 概览
date: 2022-01-01
category: Webpack
tags:
  - Webpack
---

<!-- more -->
## 概念

JS应用程序的静态模块打包工具。将项目中所需的每一个模块组合成一个或多个bundles。

- 入口
- 输出
- loader： loader让webpack能够处理其他类型的文件，并转化为有效模块
- 插件：执行范围更广的任务，如打包优化、资源管理
- mode: 通过选择development, production 或 none 启动相应环境下的优化


## 随记

https://ithelp.ithome.com.tw/users/20107789/ironman/3332?page=1

https://juejin.cn/post/6844904038543130637

https://juejin.cn/post/6844903553127940110



> 雖然模組化編程是這麼的自然，但是 JavaScript 被發明時是沒有模組化的，這使得開發上遇到了許多的問題（不明确的引入、变量冲突等）。

由此社区出了方案， commonjs，但commonjs是同步加载模块，前端环境资源分散（？），需要有异步加载模组系统

RequireJS 实现了 AMD (Asynchronous Module Definition)风格，使可以异步加载

ES2015 中官方跟上节奏，实现模组系统，但是受制於終端(EX: Chrome、Firefox、Edge...)的實作程度

历史原因存在多种多种实现，不同地方的相互引用需要进行转换，由此，Webpack应运而生
