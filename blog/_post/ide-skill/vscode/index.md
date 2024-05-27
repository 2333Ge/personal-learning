---
title: 【了解你的IDE】VSCode
date: 2022-01-01
category: VSCode
tags:
  - VSCode
  - ide-skill
---

<!-- more -->

## 快捷键

首选项-键盘快捷方式

**重构**

- 变量重命名： `f2`
- 快速修复： `⌘ + .`
- 重构： `⇧+⌃+r`

**光标**

- 多行同位置同时编辑： 鼠标中键+滑动选择、`⌥+⌘+↑、↓`
- 插入光标： `option + click`
- 同时修改同名符号：选中修改内容 => `⌘+d`(d 点几下往后选中多少个同样的字符)
- 光标切到行首：`ctrl + a`
- 光标切到行尾：`ctrl + e`

**基础编辑**

- 平移选中内容上： `⌥ + ↑ /↓`
- 切换自动换行（查看）：`⌥+z`
- 整行内容注释掉：`⌘ + /`
- 块内容注释掉：`⌥+⇧+a`
- 折起展开当前块：`⌥⌘[ / ⌥⌘]`
- 向左或向右缩进：`⌘+[、 ⌘+]`
- 格式化文档：`⌥+⇧+f`

**导航**

- 跳转文件：`⌘+p`
<!-- - 跳转指定行： -->
- 跳转下一个警告：`f8`
- 编辑窗口中的文件切换：`⌃+⇧+tab`
- 跳转引用：`⇧+f12`
- 跳转实现：`⌘+f12`

**编辑器管理**

- 编辑器分屏：`⌘+\`
- 切换编辑器布局(横向\纵向): `⌥+⌘+0`
- 切换光标所在编辑器窗口：`⌘+1、2、3`
- 当前编辑器切换(vscode多开时)：`ctrl + w`
- 折叠当前代码块：`cmd + option + [`
- 展开当前代码块：`cmd + option + ]`

**窗口**

- 关闭当前文件：`⌘+w`
- 非全屏模式下切换窗口: ⌘ + `
- 开关侧边工具栏：`⌘+b`
- 打开终端：⌃+`
- 新建窗口：`⇧+⌘+n`
- 禅模式，只有正在操作的代码：`⌘+k z`
- 将当前文件在新窗口打开：`⌘+k+o`

## 实用命令

`cmd + p`后输入以下关键词

|    中文关键词    |        英文关键词        |              说明              |
| :--------------: | :----------------------: | :----------------------------: |
| 求数学表达式的值 | evaluate math expression | 计算出当前选中内容的表达式结果 |
|       大写       |        uppercase         |         选中内容转大写         |
|       小写       |        lowercase         |         选中内容转小写         |
|       设置       |         setting          |        打开各种设置文件        |



## 插件

### 项目中配置推荐插件

项目根目录下，.vscode 目录下添加 extensions.json 文件

参考：https://go.microsoft.com/fwlink/?LinkId=827846

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
### 实用插件

|              插件名               |                 描述                 |                 标识符                 |
| :-------------------------------: | :----------------------------------: | :------------------------------------: |
|           Code Runner：           |           实时一键运行代码           |       formulahendry.code-runner        |
|            background             |           设置 ide 背景图            |          shalldie.background           |
|          vscode-mindmap           | 思维导图插件，创建.km 文件，自动识别 |         souche.vscode-mindmap          |
|        Draw.io Integration        |    流程图，创建.dio文件，自动识别    |          hediet.vscode-drawio          |
|          Color highLight          |               颜色高光               |        naumovs.color-highlight         |
|          KoroFileHeader           |             代码注释插件             |        OBKoro1.koro1FileHeader         |
|              Chinese              |               ide 中文               | MS-CEINTL.vscode-language-pack-zh-hans |
|            Git History            |           Git 历史提交比较           |        donjayamanne.githistory         |
| equimper.react-native-react-redux |          RN、react代码片段           |   equimper.react-native-react-redux    |
|          Markdown paste           |    markdown 智能粘贴（Cmd+Alt+V）    |  telesoho.vscode-markdown-paste-image  |  |
|     Markdown table formatter      |          markdown表格格式化          |                                        |
|        Code Spell Checker         |               拼写检查               | streetsidesoftware.code-spell-checker  |
|          Color Highlight          |               颜色高亮               |        naumovs.color-highlight         |
|         Highlight My Word         |            高亮自定义主题            |        2333ge.highlight-my-word        |
|          css-to-rnstyle           |        CSS 与 RN样式快速转换         |         2333ge.css-to-rnstyle          |
|           Image preview           |               图片预览               |  kisstkondoros.vscode-gutter-preview   |
|            vscode-pdf             |               pdf预览                |      formulahendry.auto-close-tag      |
|           HTML Preview            |              HTML 预览               |   george-alisson.html-preview-vscode   |
|          Auto Close Tag           |      自动补充XML、HTML关闭标签       |      formulahendry.auto-close-tag      |

相关问题：

- background： 背景图显示不出参考？ 是否装到了下载目录，参考 [链接1][bg1]、[链接2][bg2]

[bg1]: https://blog.csdn.net/toopoo/article/details/88841755
[bg2]: https://github.com/Microsoft/vscode/issues/7426


## 零碎技巧

1. 正则查找目标组件示例

```
List[\w\W]*components[\w\W]*<List
```

## 相关文档

- [官方文档](https://code.visualstudio.com/docs/languages/javascript)
- [常用插件推荐](https://www.jianshu.com/p/3eebde5748a6)
- [Git 历史提交比较](https://www.cnblogs.com/EdisonVan/p/10642698.html)
- [极客教程-VSCode 教程](https://geek-docs.com/vscode/vscode-tutorials/what-is-vscode.html)
- [快捷键官方文档](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

### 插件开发相关资料

- http://blog.haoji.me/vscode-plugin-hello-world.html
- https://code.visualstudio.com/api
- https://juejin.cn/post/6997186741866070023

### 代码片段

- https://juejin.cn/post/6844903869424599053
- https://juejin.cn/post/7052694806685810725
- https://snippet-generator.app/

