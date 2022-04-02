---
title: NPM 概览
date: 2022-04-02
category: NPM
tags:
  - NPM
  - ide-skill
---

<!-- more -->

## 实用命令

|           快捷键            |                 描述                 |
| :-------------------------: | :----------------------------------: |
| npm view deepmerge versions |           查看模块所有版本           |
|     npm ls -g --depth=0     |         查看全局安装依赖版本         |
|         npm root -g         | 查看node_modules在计算机上的确切位置 |
## 技巧

## 通过 git 安装依赖

` package.json`按照如下方式配置

```json
{
  "dependencies": {
    "bestzip": "git+<git 地址>#分支"
  }
}
```

执行 `npm i`

# question list

## install 失败

```
npm ERR! ERESOLVE unable to resolve dependency tree
...
npm ERR! Could not resolve dependency:
npm ERR! peer react-native@"^0.60.0" from react-native-fast-image@7.0.2
npm ERR! node_modules/react-native-fast-image
npm ERR!   react-native-fast-image@"^7.0.0" from the root project
npm ERR!
...
```

改用命令 npm install --legacy-peer-deps

# npx 

- http://www.ruanyifeng.com/blog/2019/02/npx.html
- http://nodejs.cn/learn/the-npx-nodejs-package-runner


- 执行node_modules 中可执行程序
- 能避免全局安装的模块

```
npx cowsay "你好"
```

```
$ npx create-react-app my-react-app
```
上面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。

# 相关资料

- [剖析 npm 的包管理机制](https://juejin.cn/post/6844904022080667661)

- [多工程开发-安装本地依赖](https://www.npmjs.com/package/install-local)
