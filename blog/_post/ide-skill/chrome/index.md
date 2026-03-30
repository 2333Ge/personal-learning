---
title: Chrome概览
date: 2022-01-01
category: Chrome
tags:
  - ide-skill
  - Chrome
---

# Chrome概览

## 快捷键

|   快捷键    |       描述       |
| :---------: | :--------------: |
| cmd+shift+f |     切换全屏     |
| cmd+shift+b | 显示、隐藏书签栏 |

## 插件

- Timer: 倒计时提醒，帮助定制时间计划
  浏览器输入 `timer + Tab + 倒计时分钟数`,固定插件后才可显示剩余时间
  ![timer](./chrome-plugin-timer.png)
- Cookie-Editor cookie导出 导入
- 油猴
- 繪畫工具和屏幕截圖：取色器，画草稿
- Quick QRCode：二维码生成

## 调试

- [调试技巧](./Advent-calendar-for-front-end-developers-summary.md)

## 仅用浏览器如何查看图片真实大小

仅用浏览器内置的开发者工具即可查看网络图片的真实尺寸，无需额外插件。以下为常用方法：

| 方法 | 操作步骤 | 关键属性 / 位置 | 说明 |
| **元素面板查看 natural 属性** | 1\. 按 **F12** 打开开发者工具2\. 选中 `<img>` 元素3\. 在右侧 "属性 / Properties" 中查找 `naturalWidth`、`naturalHeight` | `naturalWidth`、`naturalHeight` | 直接读取图片文件的像素尺寸，不受 CSS 缩放影响 |
| --- |  --- |  --- |  --- |
| **控制台命令** | 1\. 选中图片 `<img>` 元素2\. 在控制台输入 `$0.naturalWidth + 'x' + $0.naturalHeight` | `$0` 表示当前选中元素 | 快速获取并输出宽 × 高字符串 |
| **网络面板查看响应头** | 1\. 切换到 "网络 / Network"2\. 刷新页面并定位图片资源3\. 查看 "响应头 / Response Headers" 中的 `Content-Length` | `Content-Length`（字节） | 可获取文件大小，单位字节 |
| **网络面板查看预览信息** | 1\. 在 "网络 / Network" 选中图片2\. 查看 "预览 / Preview" 或 "媒体 / Media" | 宽、高数值 | 多数浏览器会直接显示像素尺寸 |
