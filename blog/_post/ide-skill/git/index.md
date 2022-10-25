---
title: Git 概览
date: 2021-01-01
category: Git
tags:
  - Git
  - ide-skill
---

<!-- more -->
## 通用

- changelog 生成

[Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

- 国内访问github
```
域名https://github.com/ 换成 https://hub.fastgit.org/
```

[参考资料](https://www.kejihub.com/5833.html)

## 踩坑记录

### warning: redirecting to https://code....

重定向
```sh

# 参考 https://blog.csdn.net/qq_39397845/article/details/112003403

// 移除所有origin
git remote remove origin

// 重新设置origin
git remote add origin git@github.com:Nehic/demo.git

// pull一下看还会不会提示warning: redirecting to XXX
git pull
```


## 实用命令

- 修改commit信息，如填错邮件地址

https://segmentfault.com/a/1190000041122415

git log 查看commit id
git rebase -i <最早commit> 重新设置基准线
git commit --amend --author="Author Name <email@address.com>" 来修改commit
`git rebase --continue 移动到下个commit作为基准线


- 查看对应指令帮助

```js
~-help;
```

eg:

```
git branch -help
```

- Git branch
  查看当前分支

```
git branch --show-current
```

- 新建并切换分支

```
git checkout -b + 分支
```

- 误操作后的恢复(有 commit 日志)

```
git log -g
git branch <分支> commitId // 用对应日志建立新分支
```

- 远程仓库设置(可以设置本地路径)

```
git remote add origin ../remote
```
- 项目纠错技巧 git bisect: https://www.ruanyifeng.com/blog/2018/12/git-bisect.html


## 命令简写

|      完整      |  简写   |
| :------------: | :-----: |
| git commit -m  | git cm  |
| git commit -am | git acm |

## 其他

### 无法访问github?

自从 2021 年 3 月初某会开始，很多地区已经间歇性无法访问 Github 了。
这种情况无论是改 DNS 还是改 Hosts 都没用，因为是蔷对 Github 域名 SNI 干扰/封锁，任意 IP 指向 Github 去访问时，该 IP 的 443 端口就会超时 3 分钟！
因为是随机干扰的，所以有时候会碰到 “短暂” 可用的 IP（模拟丢包、伪装为网站自身网络问题）。

有兴趣可以看看这篇详细讲解分析的文章： https://www.v2ex.com/t/758568

因此目前只有三种方法可以访问 Github 了：

- 梯子
- 镜像站~~（ https://hub.fastgit.xyz / 访问 Github 自动重定向至镜像站的方法）~~(❎)
- 肉身出国
- 本地代理直连加速，绕过 SNI 干扰（ https://github.com/docmirror/dev-sidecar / https://gitee.com/docmirror/dev-sidecar ）

## 相关链接

[1] [官方手册](https://git-scm.com/book/zh/v2)

