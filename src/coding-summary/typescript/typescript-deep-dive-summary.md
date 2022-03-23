# 《深入理解 TypeScript》 笔记

[TS中文网](https://www.tslang.cn/docs/home.html)学习过一遍，查漏补缺，只记录没见过、没掌握、比较重要的知识点

原文链接：https://jkchao.github.io/typescript-book-chinese/

## 声明空间

[声明空间](https://jkchao.github.io/typescript-book-chinese/project/declarationspaces.html)：类型声明空间与变量声明空间。


下例 `Class Foo` 提供了一个类型 `Foo` 到类型声明空间，此外它同样提供了一个变量 `Foo` 到变量声明空间。

```ts
class Foo {}
const someVar = Foo;
const someOtherVar = 123;
```

下例 定义了`interface Bar`，却并不能够把它作为一个变量来使用，因为它没有定义在变量声明空间中。

```ts
interface Bar {}
const bar = Bar; // Error: "cannot find name 'Bar'"
```

## 模块

### 模块路径

当导入路径不是相对路径时候，会按照Node模块解析策略  

当你使用 `import * as foo from 'foo'`，将会按如下顺序查找模块：  
- `./node_modules/foo`
- `../node_modules/foo`
- `../../node_modules/foo`
- 直到系统的根目录

当你使用 `import * as foo from 'something/foo'`，将会按照如下顺序查找内容

- `./node_modules/something/foo`
- `../node_modules/something/foo`
- `../../node_modules/something/foo`
- 直到系统的根目录

### 重写类型的动态查找

可以通过 `declare module 'somePath'` 声明一个全局模块的方式，来解决查找模块路径的问题。

```ts
// global.d.ts
declare module 'foo' {
  // some variable declarations
  export var bar: number;
}
```

### [懒加载](https://jkchao.github.io/typescript-book-chinese/project/modules.html#%E4%BD%BF%E7%94%A8%E4%BE%8B%E5%AD%90%EF%BC%9A%E6%87%92%E5%8A%A0%E8%BD%BD)

？？不太理解使用场景:

- 在 web app 里， 当你在特定路由上加载 JavaScript 时；
- 在 node 应用里，当你只想加载特定模块，用来加快启动速度时。

## 命名空间

常用目的：解决重名问题

[菜鸟教程](https://www.runoob.com/typescript/ts-namespace.html)中讲的比较清楚

## 引入额外的非JS资源

```ts
// global.d.ts
declare module '*.css';
```
现在你可以使用 `import * as foo from './some/file.css'`。

## @types

可以通过 npm 来安装使用 `@types`，例如为 `jquery` 添加声明文件

```sh
npm install @types/jquery --save-dev
```

控制全局，通过配置 `tsconfig.json` 的 `compilerOptions.types` 选项，引入有意义的类型，如下例只允许使用`jquery`的`@type`包

```json
// tsconfig.json
{
  "compilerOptions": {
    "types" : [
      "jquery"
    ]
  }
}
```

## 环境声明

可以通过 `declare` 关键字来告诉 `TypeScript`，你正在试图表述一个其他地方已经存在的代码。


```ts
// ?? 假如已有node.d.ts 已经声明process，如下声明会覆盖掉已有声明吗？目测会覆盖
// ?? 如何声明类似process这样的不用import的变量

interface Process {
  exit(code?: number): void;
}

declare let process: Process;
```

## 枚举

数字类型枚举

```ts
enum Color {
  Red,
  Green,
  Blue
}

let col = Color.Red;
col = 0; // 有效的，这也是 Color.Red
```


## 随记


- 只导入模块, 这种写法导入了什么？

```js
import 'core-js'; 
import './index.css'
```

- d.ts文件到底是什么作用？只会对引入对应依赖的项目起作用吗，原始仓库能否用到这部分类型声明功能。为啥.两下，为啥叫d.ts，和普通ts文件区别？

eg: 使用@types为现有npm包提供类型声明
