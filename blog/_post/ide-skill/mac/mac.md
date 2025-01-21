---
title: 【了解你的IDE】 MAC
date: 2021-01-01
category: MAC
tags:
  - MAC
  - ide-skill
---

<!-- more -->
## 快捷键

系统偏好设置-快捷键

|                   描述                   |         快捷键         |
| :--------------------------------------: | :--------------------: |
|              快速打开控制台              |    cmd + shift + c     |
|               左右切换窗口               |      ctrl + 左/右      |
|             最近两个应用切换             |     短按 cmd + tab     |
|           应用窗口切换(下一个)           |     长按 cmd + tab     |
|           应用窗口切换(上一个)           | 长按 cmd + shift + tab |
|                清空控制台                |         cmd+k          |
|             应用 内切换 tab              | command + shift + [或] |
|               快速回到桌面               |  ctrl + 1/2(外接屏幕)  |
|     光标跳转当前行（编辑器、控制台）     |        ctrl + a        |
| 当前行删除光标后的内容（编辑器、控制台） |         ctrl+k         |

> [官方手册](https://support.apple.com/zh-cn/HT201236)

## 终端命令


|           描述           | 快捷键 |
| :----------------------: | :----: |
|       查看当前路径       |  pwd   |
|       打开当前目录       | open . |
| 列出当前目录文件及其权限 | ls -l  |

> [官方使用手册](https://support.apple.com/zh-cn/guide/terminal/welcome/2.9/mac)

### 打印目录树

```bash
# 安装
$ brew install tree
# 过滤指定目录
$ tree -I “node_modules” 
```

参考：https://www.jianshu.com/p/9411d60950bf

### 工具应用

- Iterm2： 终端窗口分屏
- VSCode： 加上各种插件，比大部分文档/笔记记录工具好（见：vscode ）
- Gifski： gif制作
- Logseq： 笔记记录，
- Cursor：AI IDE

## 其他

### 查看文件/文件夹路径

将文件/文件夹拖到终端

### 达尔优键盘问题记录

- `cmd+a`、`c` 等键失效: `fn+win`

### 系统日志

大多数Unix系统中，日志放在`/var/log`文件夹下