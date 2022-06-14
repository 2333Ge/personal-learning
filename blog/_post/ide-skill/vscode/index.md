---
title: VSCode开发工具概览
date: 2022-01-01
category: VSCode
tags:
  - VSCode
  - ide-skill
---

<!-- more -->
## 快捷键

https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
src/资源/keyboard-shortcuts-macos.pdf
首选项-键盘快捷方式

重构

- 变量重命名： `f2`
- 快速修复： `⌘ + .`
- 重构： `⇧+⌃+r`

光标

- 多行同位置同时编辑： 鼠标中键+滑动选择、`⌥+⌘+↑、↓`
- 插入光标： `option + click`
- 同时修改同名符号：选中修改内容 => `⌘+d`(d 点几下往后选中多少个同样的字符)

基础编辑

- 平移选中内容上： `⌥ + ↑ /↓`
- 切换自动换行（查看）：`⌥+z`
- 整行内容注释掉：`⌘ + /`
- 块内容注释掉：`⌥+⇧+a`
- 折起展开当前块：`⌥⌘[ / ⌥⌘]`
- 向左或向右缩进：`⌘+[、 ⌘+]`
- 格式化文档：`⌥+⇧+f`

导航

- 跳转文件：`⌘+p`
<!-- - 跳转指定行： -->
- 跳转下一个警告：`f8`
- 编辑窗口中的文件切换：`⌃+⇧+tab`
- 跳转引用：`⇧+f12`
- 跳转实现：`⌘+f12`

编辑器管理

- 编辑器分屏：`⌘+\`
- 切换编辑器布局(横向\纵向): `⌥+⌘+0`
- 切换光标所在编辑器窗口：`⌘+1、2、3`

窗口

- 关闭当前文件：`⌘+w`
- 非全屏模式下切换窗口: ⌘ + `
- 开关侧边工具栏：`⌘+b`
- 打开终端：⌃+`
- 新建窗口：`⇧+⌘+n`
- 禅模式，只有正在操作的代码：`⌘+k z`
- 将当前文件在新窗口打开：`⌘+k+o`

## 插件

### 项目中配置推荐插件

项目根目录下，.vscode 目录下添加 extensions.json 文件
// See https://go.microsoft.com/fwlink/?LinkId=827846

```
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "octref.vetur",
    "eamodio.gitlens",
    "cipchk.cssrem",
    "dariofuzinato.vue-peek",
    "knisterpeter.vscode-commitizen",
    "christian-kohler.path-intellisense",
    "dweizhe.docthis-customize-tags",
    "mcfe.mcfe-toolkit"
  ]
}
```

### CodeRunner

实时一键运行代码

### Background

设置 ide 背景图

背景图显示不出参考：
https://blog.csdn.net/toopoo/article/details/88841755
https://github.com/Microsoft/vscode/issues/7426

##### 1. 图片显示不出

检查是否装到了下载目录里了

### 其他

- vscode-mindmap：思维导图插件
  - 创建.km 文件，vscode 自动识别

- Draw.io Integration：流程图

- Markdown
  - Markdown paste
  - Markdown table formatter

- Code spell checker：拼写检查工具

- Color highLight：颜色高光

- [KoroFileHeader](https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE)：注释插件

- Chinese：ide 中文

- [Git History](https://www.cnblogs.com/EdisonVan/p/10642698.html)： Git 历史提交比较

- equimper.react-native-react-redux: 代码片段

## 参考文章

- [官方文档](https://code.visualstudio.com/docs/languages/javascript)
  > 英文版，较详细
- [常用插件推荐](https://www.jianshu.com/p/3eebde5748a6)
- [Git 历史提交比较](https://www.cnblogs.com/EdisonVan/p/10642698.html)
- [极客教程-VSCode 教程](https://geek-docs.com/vscode/vscode-tutorials/what-is-vscode.html)
  > 中文版，说明较详细

## 插件开发相关资料

- http://blog.haoji.me/vscode-plugin-hello-world.html
- https://code.visualstudio.com/api
- https://juejin.cn/post/6997186741866070023

## 代码片段

- https://juejin.cn/post/6844903869424599053
- https://juejin.cn/post/7052694806685810725
- https://snippet-generator.app/

## 其他

#### vscode 正则查找目标文件示例

```
List[\w\W]*components[\w\W]*<List
```
