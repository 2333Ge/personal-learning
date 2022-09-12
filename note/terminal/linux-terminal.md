---
title: 终端概览
date: 2022-08-26
category: ide-skill
tags:
  - ide-skill
  - terminal
---

<!-- more -->

## 前言

使用终端

- job control
- terminal multiplexer
- dot files
- remote machine

### job control

`ctrl + c`，是通过UNIX信号机制发送了一个叫做`SIGINT`的信号

`man signal`查看说明

`SIGSTOP`: `ctrl z`暂停程序的执行
`SIGCONT`: 继续

示例

```bash
$ sleep 1000
^Z
$ jobs
[1]  + suspended  sleep 1000
# 继续执行 第一个
$ bg %1
[1]  - continued  sleep 1000
# 杀掉第一个
$ kill %1
# 暂停第一个
$ kill -STOP %1
# 挂起第一个
$ kill -HUP %1


nohup sleep 2000 &
# 末尾加了个&,告诉bash希望这个程序开始后在后台执行
```

### 多路终端复用器

eg: 监视系统中的资源消耗情况

sessions包含windows，windows包含panes


zsh: command not found: tmux

### dotfiles

别名

> alias ll="ls -l", 执行`ll`等于执行`ls -l`
> alias mv="mv -i", 默认`mv`等于`mv -i`
> alias ll 查看ll

`bash` 命令启动bash终端
```bash
# 配置终端标识符
ych@banzhuan ~ %  PS1=">"
>
```

# 随记

- jobs 概念