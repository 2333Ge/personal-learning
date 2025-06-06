---
title: Git 概览
date: 2021-01-01
category: Git
tags:
  - Git
  - ide-skill
---

<!-- more -->
# 通用

## git 大文件存储

- [Git LFS](https://help.aliyun.com/document_detail/206889.html)

## changelog 生成

[Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

## 国内访问github

```
域名https://github.com/ 换成 https://hub.fastgit.org/
```

[参考资料](https://www.kejihub.com/5833.html)

## git 短命令

```bash
vim ~/.gitconfig
[alias] 
        co = checkout
        ps = push
        pl = pull
        mer = merge --no-ff
        cp = cherry-pick

```

## 命令简写

|      完整      |  简写   |
| :------------: | :-----: |
| git commit -m  | git cm  |
| git commit -am | git acm |

# 实用指令

## git diff 查看文件差异

查看不同分支同一文件的差异

```bash
git diff branch1..branch2 pnpm-lock.yaml
```

## git stash 暂存 [2]
 
```bash
# 保存当前未commit的代码
git stash

# 保存当前未commit的代码并添加备注
git stash save "备注的内容"

# 列出stash的所有记录
git stash list

# 删除stash的所有记录
git stash clear

# 应用最近一次的stash
git stash apply

# 应用最近一次的stash，随后删除该记录
git stash pop

# 删除最近的一次stash
git stash drop
```

pop、drop、apply指定stash记录


```bash
$ git stash list

stash@{0}: WIP on ...
stash@{1}: WIP on ..

$ git stash apply stash@{0}
```

## git reset  回退

```bash
# 回退代码，不保留之后的内容
git reset --hard <commit id>
# 回退，保留代码到编辑区
git reset --sort <commit id>
```

## revert 还原

将现有的提交还原，恢复提交的内容，并生成一条还原记录。

```bash
git revert <commit id>
# 还原合并提交
git revert -m 1 <commitHash>
```

撤销多个commit：假设有 1、2、3、4、5 个commit，需要撤销3、4、5

```bash
# 语法是：git revert --no-commit 要保留的commit..要撤销的最新commit
git revert --no-commit 2..5
```


## 查看对应指令帮助

```bash
<指令> -help;
# 示例
git branch -help

```

```bash
tldr <指令>
# 示例
tldr git grep

```

## 新建并切换分支

```
git checkout -b + 分
```



## 远程仓库设置(可以设置本地路径)

```
git remote add origin ../remote
```
## 查找出错的commit

参考资料: https://www.ruanyifeng.com/blog/2018/12/git-bisect.html

`git bisect`二分查找

```bash
#先检查下提交历史
git log --pretty=oneline
# 启动查错
git bisect start [终点] [起点]
# 没问题标记
git bisect good
# 有问题标记
git bisect bad
# 重复这两个过程，最后git给出如下提示
b47892 is the first bad commit
# 退出查错 
git bisect reset
```
## 查看push到远程仓库的时间

```bash
git reflog show origin/V1.0.15_dev --pretty='format:%C(red)%h%Creset %C(cyan)%gd%Creset %C(green)%gs%Creset: %s' --date=iso
```

## 在git仓库查找字符串（包括历史记录中）

示例


```bash
# 查找关键词search_string，并输出行号
$ git grep -n search_string
# 在历史查找
$ git grep search_string HEAD~2
# 在所有的分支中查找
git grep search_string $(git rev-list --all)
```

## 删除文件

```bash
# 删除未跟踪的文件
$ git clean
# 交互式删除
$ git clean -i
# 显示将要被删除的文件，但是不是直接删
$ git clean --dry-run
# 强制删除未跟踪的文件
$ git clean -f
# 强制删除未跟踪的目录
$ git clean -fd
```
# 踩坑记录

## git push失败，远端意外挂断了

git push -u origin main 报错

```
压缩对象中: 100% (18914/18914), 完成.
错误：RPC 失败。HTTP 500 curl 22 The requested URL returned error: 500
send-pack: unexpected disconnect while reading sideband packet
写入对象中: 100% (23792/23792), 93.60 MiB | 3.61 MiB/s, 完成.
总共 23792（差异 4821），复用 21112（差异 3501），包复用 0（来自  0 个包）
致命错误：远端意外挂断了
Everything up-to-date
```

有时候推送较大数据时，缓冲区设置默认值太小可能会导致这个问题。尝试增大 Git 的 HTTP post 缓冲区:

```sh
git config --global http.postBuffer 524288000
```

这将 HTTP post 缓冲区设置为 500MB。



## warning: redirecting to https://code....

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
## git 拉不下代码

https://blog.csdn.net/qq_30376375/article/details/116504157

`.git/config` 文件

```sh
[remote "origin"]
	url = xxx.com/xxx.git
  # fetch = +refs/heads/master:refs/remotes/origin/master 改成 ↓
	fetch = +refs/heads/*:refs/remotes/origin/*
```

## 修改commit信息，如填错邮件地址

参考资料：https://segmentfault.com/a/1190000041122415

```bash
# 查看commit id
git log 
# 重新设置基准线
git rebase -i <最早commit> 
# 修改commit
git commit --amend --author="Author Name <email@address.com>" 
# 移动到下个commit作为基准线
git rebase --continue 
```

revert 合并提交后，再次合并分支会失效，需要revert上次revert

## 误操作后的恢复

```bash
git reflog
# 或者
git log -g
git branch <分支> commitId // 用对应日志建立新分支
```

# 为什么要学习命令

1. 可复用，如要工程化要写脚本，图形化工具做不到
2. 一次学习，所有平台收益，ide可能换，终端会一直存在
3. 如果想要利用git操作的结果，需要熟悉指令，如查看本地有多少分支`git branch | wc -l`
4. 帅

适合用可视化工具的情况

1. merge冲突时，可视化工具更方便对比、选择
2. diff 很长代码

# 相关链接

[1] [官方手册](https://git-scm.com/book/zh/v2)
[2] [实用指令](https://juejin.cn/post/7071780876501123085)
