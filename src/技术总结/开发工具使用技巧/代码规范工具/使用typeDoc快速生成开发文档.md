# 背景

部门 A 使用 ReactNative 开发，维护得有 RN 组件库，部门 B 使用原生开发，一天，为应付业务快速迭代，B 部门同学也需要接入 RN 开发。于是就有了下面的问题

B 部门同学想要知道：

- A 组件库支持什么功能
- A 组件库的组件怎么使用

A 部门组件库存在的问题：

- 没有文档说明（曾经有，迭代太快，写文档太麻烦，久而久之就过时了）
- 注释较少，时间久了，原开发同学都离职了，想要搞清楚组件支持的功能得扒源码看

参考原生使用过的 Java doc 工具，最后找到了这个: [typeDoc](https://typedoc.org/guides/installation/)，使用下来体验还行，生成的开发文档还比较全面，比每次扒源码方便些，写篇文章分享一下这个工具的使用。

> TypeDoc 将 TypeScript 源代码中的注释转换为呈现的 HTML 文档或 JSON 模型。它是可扩展的，支持多种配置。

# 初始化工程

[创建](https://hub.fastgit.org/Microsoft/TypeScript-React-Starter#typescript-react-starter)一个新的 TS React 应用来演示功能

```
npm install -g create-react-app
create-react-app type-doc-demo --scripts-version=react-scripts-ts
```

额.. 第一步就出问题了，提示 API 过时了，重新创建

> The react-scripts-ts package is deprecated. TypeScript is now supported natively in Create React App. You can use the --template typescript option instead when generating your app to include TypeScript support. Would you like to continue using react-scripts-ts?

```
create-react-app type-doc-demo --template typescript
```

安装typeDoc
```
npm install typedoc --save-dev
```
# typeDoc常用配置

组件工程的目录结构如下