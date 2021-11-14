# 小记

- 脚手架安装&初始化

```
npm install -g yo generator-code
// 工作区
yo code
```

- F5 运行
  - 失败、重新安装 15.0 以上 VSCode

# 目录解释

## package.json

- name 和 publisher： VS Code <publisher>.<name>用作插件的唯一 ID
- main：插件入口文件
- engines.vscode：这指定了扩展所依赖的 VS Code API 的最低版本。

```

{
  "name": "helloworld-sample",
  "engines": {
    "vscode": "^1.51.0"
  },
  "main": "./out/extension.js",
}

```

## 入口文件

导出两个函数、activate 和 deactivate。activate 当您注册的激活事件发生时执行。deactivate 让您有机会在您的扩展程序被停用之前进行清理。

# api

- [个人插件-Highlight My Word 总结](https://juejin.cn/post/7021931752914419743)

- 弹窗

```js
vscode.window.showInformationMessage("我的 HelloWorld");
```

# 相关资料

- [官网](https://code.visualstudio.com/api)
- [官网-api](https://code.visualstudio.com/api/references/vscode-api)
- [小茗同学] http://blog.haoji.me/vscode-plugin-hello-world.html
- [博客-中文文档](https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/)
- [MultiColorHighlighter](https://hub.fastgit.org/456ken/Highlighter-vscode)
- [个人插件-Highlight My Word 总结](https://juejin.cn/post/7021931752914419743)
