# 前言
> “整洁代码最重要的一环就是好的名字，所以我们会深思熟虑如何给函数、模块、变量和类命名，使它们能清晰地表明自己的功能和用法。  
> 然而，很遗憾，命名是编程中最难的两件事之一。正因为如此，改名可能是最常用的重构手法，包括改变函数声明、变量改名、字段改名等。很多人经常不愿意给程序元素改名，觉得不值得费这个劲，但好的名字能节省未来用在猜谜上的大把时间”  
> --《重构2》

一个不好的命名往往蕴藏着设计问题，将不合理的命名进行修改在日常开发中是很常见的操作。不过有很多同学使用`Ctrl+C\V`进行变量重名名操作，这样很容易犯错且效率不高（最主要的是不够酷！！），现代ide已经非常强大了，有很多更优雅的方式可以进行这一操作。工欲善其事必先利其器，借此查阅整理了`VSCode`相关的操作技巧，以供参考。

ps: 以下示例以MAC VSCode为例，Windows

# 技巧

## 重构相关

- 变量重命名：`f2`

![f2-1.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d03f7b5a208439e8492e902416ba9bb~tplv-k3u1fbpfcp-watermark.image?)

- 快速修复：`cmd+.`

提取内容生成新的变量\函数，可以选择新变量的维度

![cmd-dot-1.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df5c3e1fd4f0440999de4f8b8f829040~tplv-k3u1fbpfcp-watermark.image?)

更多示例可以查看[官网](https://code.visualstudio.com/Docs/languages/typescript#_refactoring)

## 光标

### 多行同时编辑

- `option+cmd+↑、↓`
- 鼠标中键+滑动选择

![option-click-1.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b6050f950a5a49aa8a97b893c01d0e72~tplv-k3u1fbpfcp-watermark.image?)

### 同名元素同时修改`cmd+d`

选中修改内容 => `cmd+d`, `d`点击几次则选择几个元素


![cmd-d-1.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1e97788b49740728073cba185396658~tplv-k3u1fbpfcp-watermark.image?)

### 指定位置插入光标`option+click`

![cur-1.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54d8f08a2b1444b1a8dac9eca4b486c5~tplv-k3u1fbpfcp-watermark.image?)

## 基础编辑

### 平移选中内容`option+↑`

没用光标选中时默认移动当前行

![option-up-1.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c22d50d26ce84ad4a4a3872c8ba23b73~tplv-k3u1fbpfcp-watermark.image?)

### 折叠换行内容`option+z`

仅改变查看样式，适用于有时某一行代码过长换行了，不便于查看代码完整结构，此时可以使用此快捷键

![option-z-1.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3dd8b74606284643ac01457b991cb3a5~tplv-k3u1fbpfcp-watermark.image?)

# 参考文章

[1] [VSCode快捷键官方文档-mac](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)  
[2] [VSC官网-TS重构](https://code.visualstudio.com/Docs/languages/typescript#_refactoring)