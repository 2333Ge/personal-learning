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
/*
  假如node.d.ts中声明了process，如下声明会覆盖掉已有声明吗??不重名似乎不会覆盖，注意想要声明的接口和变量名是否一致，如String实现接口是StringConstructor
*/

interface Process {
  exit(code?: number): void;
}

declare let process: Process;
```

如何创建类似process这样的不用import的变量??,下面的方式RN中可以使用，但会提示`'ppp' is not defined`

```ts
// global.d.ts
declare interface PPP {
  log(): void;
}

declare let ppp: PPP;
```

```ts
global.ppp = {
  log: () => {
    console.log('============');
  },
};

// 'ppp' is not defined
ppp.log();
```
## 枚举

### 数字类型枚举

```ts
enum Color {
  Red,
  Green,
  Blue
}

let col = Color.Red;
col = 0; // 有效的，这也是 Color.Red

col = 100; // 这样赋值TS不报错??需要注意📢
```

何时可以使用枚举，用数字、二进制表示某种状态时，枚举能语义化字段的表示的状态，又能用于真实环境的数据传输

```ts

enum AnimalFlags {
  None        = 0,
  HasClaws    = 1 << 0,
  CanFly      = 1 << 1
}

```
### 常量枚举

```ts
enum Tristate {
  False,
  True,
  Unknown
}

const lie = Tristate.False;

// 编译成，意味着运行时会查找变量Tristate 和 Tristate.False
let lie = Tristate.False
```

用下列写法可以获得性能上的一个小提升

```ts
const enum Tristate {
  False,
  True,
  Unknown
}

const lie = Tristate.False;

// 编译成
let lie = 0;

```
- 内联枚举的任何用法（0 而不是 `Tristate.False`）；
- 不会为枚举类型编译成任何 JavaScript（在这个例子中，运行时没有 `Tristate` 变量），因为它使用内联语法。


## 开放式枚举

编译后的枚举长这样

```js
var Tristate;
(function(Tristate) {
  Tristate[(Tristate['False'] = 0)] = 'False';
  Tristate[(Tristate['True'] = 1)] = 'True';
  Tristate[(Tristate['Unknown'] = 2)] = 'Unknown';
})(Tristate || (Tristate = {}));
```

这捕获了一个局部变量 TriState，它要么指向已经定义的TriState 值，要么使用一个新的空对象来初始化它。

这意味着你可以跨多个文件拆分（和扩展）枚举定义，如下所示，你可以把 Color 的定义拆分至两个块中：

// 意味着重复的命名会覆盖?？编译后的JS在多个文件会互相影响??栗子??

```ts
enum Color {
  Red,
  Green,
  Blue
}

enum Color {
  DarkRed = 3,
  DarkGreen,
  DarkBlue
}
```

## lib.d.ts

安装 `TypeScript` 时，会顺带安装一个 `lib.d.ts` 声明文件。这个文件包含 JavaScript 运行时以及 DOM 中存在各种常见的环境声明。

- 未安装TS编写JS代码没提示就是这个原因??VSC TS插件似乎会提供这个文件

使用 `global.d.ts`创建自己的声明空间

## 函数

TS支持声明函数重载

- 有函数实现的情况可如下方式声明函数重载

```ts
function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}
```

- 无函数实现的情况下需要这么声明

```ts
type LongHandAllowsOverloadDeclarations = {
  (a: number): number;
  (a: string): string;
};
// ps： 这种方式无法声明重载
type ShortHand = (a: number) => number;
```

## 可调用的类型

```ts
interface ReturnString {
  (): string;
}
```

表示一个返回值为 string 的函数.

内联写法：

```ts
let overloaded: {
  (foo: string): string;
  (foo: number): number;
};
```

可实例化写法

```ts
interface CallMeWithNewToGetString {
  new (): string;
}

// 使用
declare const Foo: CallMeWithNewToGetString;
const bar = new Foo(); // bar 被推断为 string 类型
```


padding不能当做类型使用吗??这也不是一个合规的变量呀..

```ts

// 提示：“padding”表示值，但在此处用作类型
function padding(all: number):void;

type A = padding;
```
## 双重断言

谨慎使用，当你了解传入参数更具体的类型时

```ts
function handler(event: Event) {
  const element = event as HTMLElement; // Error: 'Event' 和 'HTMLElement' 中的任何一个都不能赋值给另外一个
  const element2 = (event as any) as HTMLElement; // ok
}
```

## 类型保护

```ts
// 仅仅是一个 interface
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

// 用户自己定义的类型保护！
function isFoo(arg: Foo | Bar): arg is Foo {
  return (arg as Foo).foo !== undefined;
}
```


## 随记


- 只导入模块, 这种写法导入了什么??

```js
import 'core-js'; 
import './index.css'
```

- d.ts文件到底是什么作用？为啥.两下，为啥叫d.ts，和普通ts文件区别？

eg: 使用@types为现有npm包提供类型声明
