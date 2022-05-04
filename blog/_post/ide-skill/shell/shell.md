---
title: Shell 概览
date: 2022-04-21
category: Shell
tags:
  - Shell
---

<!-- more -->
## 前言

ps: 以下示例均在mac终端中运行，其他终端中可能会略有偏差

## What is Shell

> Shell 是指一种应用程序，这个应用程序提供了一个界面，用户通过这个界面访问操作系统内核的服务。[1]

业界所说的Shell通常指Shell脚本

## 实用命令

- `man + 系统指令名`：查看系统中的指令帮助、配置文件等信息，以下命令大多可通过此方式在系统中查看更详细的说明。
- `任意内容 + Tab`: 自动补全指令
- `cd ~`: 切换到当前用户根目录，等于`cd`命令
- `cd /`: 切换到所有用户共享的根目录
- `cd -`: 回到上一次的目录
- `ls -l`: 查看当前目录下的文件及详细信息
- `date`: 查看当前时间
- `pwd`: 查看当前目录路径
- `which  命令名`: 查看某个命令是否存在以及执行的位置
- `mv  源文件/文件夹  新文件/文件夹`: 为文件或目录改名、或将文件或目录移入其它位置
- `cat  文件`：连接文件并打印到标准输出设备上
- `touch  文件名`：创建一个文件
- `grep  关键字  文件`：在给定的任意文件中，查找一个或多个匹配关键字的行。
- `find 路径 -name 关键字`：在指定路径下以文件名查找文件
- `du`:查看磁盘占用，`du -h 文件名`: 使用人类易读的单位打印文件大小，诸如Byte B, Kilobyte K。
- `tr`: 字符转换，`cat test.txt | tr -s "\n" " "`, 将test.txt文件中的换行替换成空格


- `>`: `echo “hello shell”  > out.txt`，保存hello shell到out.txt文件中
- `>>`: `echo “hello shell”  >> out.txt`追加hello shell到out.txt文件末
- 管道操作符`|`: 处理前面一个指令传出的正确输出信息，并将其传入下一个指令



- `shellcheck yourscript`: 检查脚本是否有语法错误，[shellcheck工具安装](https://github.com/koalaman/shellcheck#from-your-terminal)
![](./image/shellcheck.png)


### `ls`

- `-s`: 显示实际所占磁盘空间，每个文件以512字节为单位输出，环境变量`BLOCKSIZE`将覆盖512字节
- `-k`: 指定-s后，输出以kb为单位输出

### `find`

逻辑运算符

- `-a`: 与
- `-o`: 或
- `-not`、`!`: 非   

```bash
# 查找当前目录下除了./.git目录中的所有md文件
find . ! -name "*.md" ! -path "./.git*"
```


### 通配符[5]

- `*`: 匹配0或任意个字符
- `？`: 匹配一个任意字符
- `[-]`: 匹配中括号的字符。例如[a-b]，匹配小写字母，只会匹配集合中的一个
- `[^]`: 匹配除了中括号的一个字符。例如[^0-9]，匹配除了数字的字符，只会匹配集合中的一个
- `{ab,ba}`: 匹配其中一个字符串。例如匹配ab或ba

```bash
# 打印所有以.sh结尾的文件
ls *.sh

# 打印所有以.md、.txt结尾的文件
ls *.{md,txt}

# 创建文件：touch1.md、touch4.md、touch3.md、touch5.md
touch touch{1,3,4,5}.md

touch  {f1,f2}/{a..e}.md # 等于 touch f1/a.md、f1/b.md、f1/c.md、f1/d.md、f1/e.md、f2/a.md、f2/b.md、f2/c.md、f2/d.md、f2/e.md、
```

### 变量

- `$?`: 从上一个命令中获取错误代码
- `$_`: 获取上一个命令的最后一个参数
- `$@`: 获取所有参数


### 命令分隔符

- `&&`: ...
- `||`: ...
- `;`: `true ; echo hello`: 都执行

### `which`

`which`: 在 PATH 变量指定的路径中搜索某个系统命令的位置并且返回第一个搜索结果。也就是说使用 which 命令就可以看到某个系统命令是否存在以及执行的到底是哪一个位置的命令。[2]

```bash
ych@localhost ~ % which date
/bin/date

ych@localhost ~ % which npm
/Users/ych/.nvm/versions/node/v12.18.0/bin/npm

ych@localhost ~ % which which
which: shell built-in command # 内置命令
```

### `mv`

`mv`:为文件或目录改名、或将文件或目录移入其它位置。

`mv` 选项，可以在控制台输入 `mv -` + `Tab`键自动补全，查看可选项

```bash
# -f  -- 覆盖前不提示
# -i  -- 覆盖前提示
# -n  -- 不覆盖已存在的文件
# -v  -- 移动文件后显示文件名
ych@ychdeMacBook-Pro temp1 % mv -v mv.md mv2.md
mv.md -> mv2.md
```


## 终端技巧

- 快捷键`Ctrl + L` 清屏，把末尾行指定，并不清空，等于终端输入`clear`
- 快捷键`cmd + k` 清屏，清空终端

## 注意事项

### 输入字符串时注意事项

如希望创建一个名叫`hello world`的文件夹,不能
```bash
mkdir hello world
```
这样会创建两个文件夹，Hello和world

需要加转义符号或引号
```bash
mkdir hello\ world
# 或
mkdir "hello world"
```
其他用到字符的情况同理

## 示例

为了便于查看输入与输出，下列示例中保存了本机名`ych@ychdeMacBook-Pro ~ %`，出于隐私保护，部分信息用...代替

1. 显示node_modules中所有大于1MB的文件

```bash
$ find node_modules ! -type d -size +1M | xargs du -h
 21M	node_modules/@sentry/cli/sentry-cli
1.7M	node_modules/react-native/node_modules/hermes-engine/osx-bin/hermesc
2.9M	node_modules/react-native/node_modules/hermes-engine/linux64-bin/hermesc
...
```


2. 显示本机IP

```bash
ych@ychdeMacBook-Pro ~ % ifconfig en0 | grep inet --color=auto
	inet6 ...
	inet 10.6.... netmask 0xfffff800 broadcast 10.6....
# 等于
ych@ychdeMacBook-Pro ~ % grep inet <(ifconfig en0) --color=auto
	inet6 ...
	inet 10.6.... netmask 0xfffff800 broadcast 10.6....
```

> en0: Ethernet 0，以太网接口 0，大多数情况en0是你的WIFI[6]


2. `>` + `echo`

```bash
echo hello > hello.txt

cat hello.txt
# 输出：hello
# 等于
cat < hello.txt
# 输出：hello
```

2. `|` + `cut`


```bash
echo $PATH | cut -d ':' -f 5  # 字符串以:分割，并选取第5个
# 输出：/usr/bin
```

## 参考文章

[1] [菜鸟教程-shell](https://www.runoob.com/linux/linux-shell.html)
[2] [which](https://www.cnblogs.com/MineGi/p/12631661.html)
[3] [shell 管道命令](https://blog.csdn.net/olizxq/article/details/81263867)
[4] [主题配置](https://sspai.com/post/53008)
<!-- 配置失败？？ -->
[5] [Shell中的通配符](https://blog.csdn.net/u010467184/article/details/106117449)
[6] [ifconfig 中的 en0、en1、p2p是什么](https://stackoverflow.com/questions/29958143/what-are-en0-en1-p2p-and-so-on-that-are-displayed-after-executing-ifconfig)
[7] [shellcheck github](https://github.com/koalaman/shellcheck#from-your-terminal)


## 随记

- 输入`pwd`、`date`后系统做了什么
- echo $PATH, `$`加后面的变量，表示什么信息应该怎么称呼

cut、tail、sort、curl、source、cp、diff、convert、tldr、patch、ifconfig、tr、awk、xargs、tldr、sort


<!-- 本文不赘述太多概念相关的东西，官网更详细， -->