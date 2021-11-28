# 快捷键

首选项-键盘快捷方式

- 多列同位置同时编辑：点击鼠标中键+滑动选择
- 同时修改同名符号：选中修改内容 => cmd+d(d 点几下往后选中多少个同样的字符)
- 变量重命名: `f2`
- 左右切换 tab: `cmd+shift+<[> || <]>`
- 非全屏模式下切换窗口: `cmd + ``：
- 开关左侧工具栏：`cmd+b`
- 打开终端：

```
ctrl+`
```

- 禅模式，只有正在操作的代码：`cmd+k z`

# 插件

## 项目中配置插件

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

## CodeRunner

实时一键运行代码

## Background

设置 ide 背景图

背景图显示不出参考：
https://blog.csdn.net/toopoo/article/details/88841755
https://github.com/Microsoft/vscode/issues/7426

#### 1. 图片显示不出

检查是否装到了下载目录里了

## vscode-mindmap

- 思维导图插件
- 创建.km 文件，vscode 自动识别

## Draw.io Integration

- 流程图

## Markdown

- Markdown paste
- Markdown table formatter

## Code spell checker

拼写检查工具

## Color highLight

颜色高光

## [KoroFileHeader](https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE)

注释插件

## Chinese

ide 中文

## [Git History](https://www.cnblogs.com/EdisonVan/p/10642698.html)

Git 历史提交比较

# 参考文章

- [官方文档](https://code.visualstudio.com/docs/languages/javascript)
  > 英文版，较详细
- [常用插件推荐](https://www.jianshu.com/p/3eebde5748a6)
- [Git 历史提交比较](https://www.cnblogs.com/EdisonVan/p/10642698.html)
- [极客教程-VSCode 教程](https://geek-docs.com/vscode/vscode-tutorials/what-is-vscode.html)
  > 中文版，说明较详细

# 插件开发相关资料

- http://blog.haoji.me/vscode-plugin-hello-world.html
- https://code.visualstudio.com/api
- https://juejin.cn/post/6997186741866070023

# 其他

### vscode 正则查找目标文件示例

```
List[\w\W]*components[\w\W]*<List
```
