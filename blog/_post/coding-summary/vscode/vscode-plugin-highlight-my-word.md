---
title: VSCode插件开发小记 | 高亮自定义主题
date: 2019-10-23
category: VSCode
tags:
  - VSCode
  - vscode-plugin
---

<!-- more -->
## 前言

**背景**：项目中预定义了主题样式，在代码编写过程中用到颜色的地方只使用相关变量，然鹅在使用变量时往往记不住各个主题值表示什么颜色，需要反复查阅文档，故希望在coding时能知道当前变量表示的颜色。且支持多套映射，以支持主题切换（如：`text_color`默认主题下`#333`，`dark`主题下`#d9d9d9`）。

考虑自定义主题值的场景还挺常见，参考项目中使用的插件`Color Highlight`，最终敲定将插件形式做成高亮自定义字符。

好记性不如烂笔头✏️，写文章记录一下插件开发中用到的知识点。

ps：关于插件项目的初始化、package.json各个配置的作用等，已经很多其他优秀文章介绍过了，可查阅文末的附录参考文献，此处便一笔带过了，本文只介绍实现目标功能用到的核心API


## 插件演示&功能介绍

先看下最终实现的效果，插件支持

- 高亮自定义字符
- 主题切换
- 鼠标悬浮到主题变量时显示真实色值

按规则配置完成后，编辑器会以指定颜色高亮目标字符

![demo.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/377c2e8636a6450592055ec1c93886ff~tplv-k3u1fbpfcp-watermark.image?)

点击右下角切换预定义的主题

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4abdebc2ba54029ad0edf0d90d3cb87~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffdf4a812d2946f7a015d934ae856642~tplv-k3u1fbpfcp-watermark.image?)

鼠标悬浮到主题变量时显示真实色值

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecda955e2da7484e8594e07875884528~tplv-k3u1fbpfcp-watermark.image?)

### 下载安装

应用商店搜索：Highlight My Word ☘️

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/649aac1d5ee34038aa95cdce264afcb8~tplv-k3u1fbpfcp-watermark.image?)

## 核心功能API

### 初始化工程

安装脚手架
```sh
npm install -g yo generator-code
```
初始化工程
```sh
yo code

? What type of extension do you want to create? New Extension (TypeScript)
? What's the name of your extension? highlight-my-word-api-demo
? What's the identifier of your extension? highlight-my-word-api-demo
? What's the description of your extension? highlight-my-word-api-demo
? Initialize a git repository? Yes
? Bundle the source code with webpack? No
? Which package manager to use? npm
```

### 在编辑器目标位置设置样式

下例🌰演示了如何高亮编辑器中的第一个目标字段，多主题多映射的情况可以此类推


```ts
import * as vscode from 'vscode';

export const highlightTargetStr = (str = 'primary') => {

  // ① 创建装饰器
  const decorator = vscode.window.createTextEditorDecorationType({
    overviewRulerLane: vscode.OverviewRulerLane.Center,
    borderRadius: '2px',
    color: '#fff',
    backgroundColor: '#3072f6',
  });
  
  // ② 获取可见编辑器实例
  const visibleTextEditors = vscode.window.visibleTextEditors;
  visibleTextEditors.forEach((editor) => {
  
    // 获取文档实例
    const { document } = editor;
    
    // ③ 通过文档实例获取目标字符串位置
    const startIndex = document.getText().indexOf(str);
    const startPos = document.positionAt(startIndex);
    const endPos = document.positionAt(startIndex + str.length);
    const range = [new vscode.Range(startPos, endPos)];
    
    // ④ 在目标位置设置装饰器
    editor.setDecorations(decorator, range);
  });
};
```

相关代码的作用可见注释，最终效果如下：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/89ca290879a64682885ea2c5399aa509~tplv-k3u1fbpfcp-watermark.image?)

**注意事项**：

1. ①中创建的`decorator`对象可存储起来，调用`decorator.dispose()`可释放资源，释放后用同一`decorator`重新调用④，样式不会再生效

2. 想刷新样式作用的范围，通过`editor.setDecorations`第二个参数设置新的`range`即可。

3. 若仅设置一次，该装饰的样式会一直作用于该区域，即使在中间插入新的文本

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/134b3dc7b3584d11872a77f0138217fc~tplv-k3u1fbpfcp-watermark.image?)

故需要根据内容的变化(`vscode.workspace.onDidChangeTextDocument`)来更新装饰器作用的`range`

### 读写配置

`package.json`注册

```json
// package.json
{
  ...
  "contributes": {
    "configuration": [
      {
        "title": "%extension-title%",
        "properties": {
          "highlight-my-word-api-demo.themes": {
            "type": "object",
            "description": "%configuration-themes%"
          }
        }
      }
    ]
  }
}

```

其中`%%`包住的变量是在`package.nls.json`中定义的
```json
// package.nls.json
{
  "extension-title": "highlight my word",
  "configuration-themes": "自定义主题",
}

```
配置完毕后用户即可在`setting.json`中进行配置，通过下列方式在插件中读取配置
```ts
loadConfig = () => {
  const config = vscode.workspace.getConfiguration('highlight-my-word-api-demo').get('themes', {});
  console.log("config", config);
};

```
监听配置变化
```ts
// extension.ts
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.workspace.onDidChangeConfiguration((e) => {
			console.log(e);
		})
	);
}
```
代码中更新配置
```ts
updateConfig = () => {
  vscode.workspace.getConfiguration('highlight-my-word-api-demo').update('themes', { value: '更新后的值' });
};

```
### 监听编辑器窗口变化

当有窗口新打开时需要着色新开的窗口，`onDidChangeVisibleTextEditors`可监听变化后的窗口

```ts
// extension.ts

export function activate(context: vscode.ExtensionContext) {
		vscode.window.onDidChangeVisibleTextEditors(editors => { console.log(editors.length); }),
	);
}

```
通过前面的api即可实现可配置的自定义高亮内容，不过至此切换主题需要到`setting.json`中进行配置，不是很友好。为了体验更愉快，再增加快捷切换的功能，用到了下面的api

### 底部状态栏
```ts
export const displayStatusBar = () => {
  // 注意保存此对象以更新文案，控制显示与否等
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
  statusBar.text = 'Highlight My Word';
  statusBar.tooltip = '点击切换主题';
   // 点击响应事件，绑定对应command的标识
  statusBar.command = 'highlight-my-word-api-demo.changeTheme';

  statusBar.show();
};
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5394cfe4211b4e879cabc1dd37e613d2~tplv-k3u1fbpfcp-watermark.image?)


点击状态栏可以响应`command`, 通过command调用一个快捷选择弹窗即可实现快捷切换主题

### 注册&实现command

packge.json配置
```json
// package.json
{
  ...
  "contributes": {
    "commands": [
      {
        "command": "highlight-my-word-api-demo.changeTheme",
        "title": "切换主题（changeTheme）"
      }
    ]
  }
}
```
注册
```ts
// extension.ts 

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('highlight-my-word-api-demo.changeTheme', showQuickPick),
	);
}
```
`showQuickPick` 即下面展示快捷弹窗的方法
### 快捷选择框

```ts
const showQuickPick = () => {
  vscode.window.showQuickPick([
    '主题1',
    '主题2',
  ], {
    canPickMany: false,
    placeHolder: "选择您的主题"
  }).then((res) => {
    console.log(res);
  });
};
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/173b680b22d744dbbcbbd42af3c18b42~tplv-k3u1fbpfcp-watermark.image?)

注意：即使什么都没选择，promise仍会回调，返回`undefined`

### 鼠标悬浮效果

下例演示鼠标悬停`primary`单词时候悬浮限制指定内容

```ts
// extension.ts

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.languages.registerHoverProvider(['javascript', 'typescript'], {
			provideHover: (document: vscode.TextDocument, position: vscode.Position, _: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> => {
				// 得到鼠标悬浮处的单词
				const word = document.getText(document.getWordRangeAtPosition(position));
				if (word === 'primary') {
					return new vscode.Hover('悬浮窗');
				}
			},
		})
	);
}
```

最终通过上述api实现了最终的VSCode插件效果，关于详细的API用法可上[官网][vscode-api]了解,
欢迎应用商店搜索highlight my word体验使用☘️☘️


## 附录

[1] [本文掘金链接](https://juejin.cn/post/7021931752914419743)

### 参考资源

[1] [小茗同学-vscode插件开发攻略](https://www.cnblogs.com/liuxianan/p/vscode-plugin-overview.html)  
[2] [Highlighter-vscode](https://github.com//456ken/Highlighter-vscode)  
[3] [VS官网](https://code.visualstudio.com/docs)  
[4] [少年，我把珍藏的这个 VSCode 插件 API 传给你了](https://mp.weixin.qq.com/s/H7Z65WnoIbAzA0qYCa_HRQ)

### 项目地址

[1] [本文demo github地址](https://github.com/2333Ge/highlight-my-word-api-demo)  
[2] [词语高亮插件 github地址](https://github.com/2333Ge/highlight-my-word)

[vscode-api]:https://code.visualstudio.com/api/references/vscode-api