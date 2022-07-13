---
title: github actions
date: 2022-07-13
category: git
tags:
  - github
  - git
  - github-actions
---

<!-- more -->

## github actions 作用

大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。

很多操作在不同项目里面是类似的，完全可以共享。GitHub 注意到了这一点，想出了一个很妙的点子，允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。

如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub Actions 最特别的地方。

> 在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。 您可以发现、创建和共享操作以执行您喜欢的任何作业（包括 CI/CD），并将操作合并到完全自定义的工作流程中。

## 基本概念

workflow、事件、job、step、action

## github actions 文件组成[1]

文件位置：仓库的`.github/workflows`目录
文件格式：[`YAML格式`](https://www.ruanyifeng.com/blog/2016/07/yaml.html)，后缀`.yml`。文件校验可上[这个地址](https://verytoolz.com/yaml-formatter.html)

```yml

name: publish learning blog # workflow 名称

on:
  push: # 也可以是事件的数组[push, pull_request]，也支持外部事件触发，或者定时运行。
    branches: [main]
  workflow_dispatch:

jobs: # 表示要执行的一项或多项任务
  job1: # job_id，名称自定义
    runs-on: ubuntu-latest # 指定运行所需要的虚拟机环境。【必填】
    name: this job name # 任务说明
    steps:
      - name: Build Gitee Pages
        uses: yanglbme/gitee-pages-action@main
  job2: 
     needs: job1 # needs字段指定当前任务的依赖关系，即运行顺序。
     steps:
      - name: name
        run: # 运行的命令或者action
        env: # 该步骤所需的环境变量
```

eg: 打印

```yml
name: Greeting from Mona
on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
    - name: Print a greeting
      env:
        MY_VAR: Hi there! My name is
        FIRST_NAME: Mona
        MIDDLE_NAME: The
        LAST_NAME: Octocat
      run: |
        echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```

## 参考文章

[1] [GitHub Actions 入门教程 -- 阮一峰 ](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
[2] [YAML 语言教程 -- 阮一峰](https://www.ruanyifeng.com/blog/2016/07/yaml.html)
[3] [官网](https://docs.github.com/cn/actions)