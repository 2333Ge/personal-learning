---
title: RN开发概览
date: 2020-06-01
category: react-native
tags:
  - react-native
---

<!-- more -->
## 前言

官网：https://www.react-native.cn/docs/getting-started
学习资源汇总：https://github.com/reactnativecn/react-native-guide

## 常用插件

- 原生路径管理： react-native-fs
- 日历：https://github.com/wix/react-native-calendars
- svg 画图工具：react-native-svg
  - https://github.com/react-native-svg/react-native-svg
  - https://snack.expo.io/@msand/react-native-svg-example
- 图表工具：echarts
- 截图插件：react-native-view-shot
  - 该视图必须设置 collapsable={false} https://reactnative.cn/docs/view/#collapsable
  - 截取长视图时，引用选 ScrollView 中的 View 而不是 ScrollView https://github.com/gre/react-native-view-shot/issues/274
- 动态申请权限：react-native-permissions
- 图片预览：react-native-image-zoom-viewer
- 图片轮播：react-native-swiper
- 视频播放：react-native-video
- 路由管理：react-navigation
- 截流：lodash
- 状态管理：mobx
- 深拷贝：deepmerge
- 日期工具：dayjs
- 精准时间：react-native-background-timer
- 二维码：react-native-qrcode-svg
- 自定义相机：react-native-camera

## bug 排查方法

- 找 bundle文件 对应代码
