---
title: 《深入理解 TypeScript》 笔记
date: 2022-03-15
category: TypeScript
tags:
  - TypeScript
  - FE
---

# 《深入理解 TypeScript》 笔记

## 前言

[TS中文网](https://www.tslang.cn/docs/home.html)学习过一遍，查漏补缺，只记录没见过、没掌握、比较重要的知识点

原文链接：https://jkchao.github.io/typescript-book-chinese/

从此书学到的东西：

- 枚举，语义化基础标识
- 重载
- infer：标识 `extends` 中待推断的类型变量
- 协变、逆变 （还是似懂非懂）
- global.d.ts: 全局模块声明，如在现有String中新增工具方法、无类型提示的module可在此声明
- 结合[TS 优秀代码片段](typescript-nice-code-snippet.md)、[TS 技巧](typescript-skill.md)复习
...

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
  假如node.d.ts中声明了process，如下声明会覆盖掉已有声明吗??似乎不会覆盖，注意想要声明的接口和变量名是否一致，如String实现接口是StringConstructor
*/

interface Process {
  exit(code?: number): void;
}

declare let process: Process;
```

如何创建类似process这样的不用import的变量??下面的方式RN中可以使用，但会提示`'ppp' is not defined`

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

// 编译成如下形式，意味着运行时会查找变量Tristate 和 Tristate.False
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

意味着重复的命名会覆盖?？编译后的JS在多个文件会互相影响??栗子??

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

// error：“padding”表示值，但在此处用作类型
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
## 类型推断

选项 `noImplicitAny` 用来告诉编译器，当无法推断一个变量时发出一个错误（或者只能推断为一个隐式的 `any` 类型）

## Never

`never` 与`void`的差异:

`void` 表示没有任何类型，`never` 表示永远不存在的值的类型

`void` 类型可以被赋值（在 strictNullChecking 为 false 时），但是除了 `never` 本身以外，其他任何类型不能赋值给 `never`。

类似这样??
```ts
type V = void;
type N = never;

const a: V = undefined;
const b: N = undefined; // 不能将类型“undefined”分配给类型“never”。ts(2322)
```
## 索引签名

```ts

type A = 'MM' | 'BB'

type B = { [P in A]: A; }
// C为什么报错,和B的区别?? 映射的类型可能不声明属性或方法,ts(7061)
interface C{
  [p in A]: A;
}
```

尽量不要使用这种把字符串索引签名与有效变量混合使用。如果属性名称中有拼写错误，这个错误不会被捕获到：

```ts
interface NestedCSS {
  color?: string; // strictNullChecks=false 时索引签名可为 undefined
  [selector: string]: string | NestedCSS;
}

const failsSilently: NestedCSS = {
  colour: 'red' // 'colour' 不会被捕捉到错误
};
```
取而代之，我们把索引签名分离到自己的属性里

```ts
interface NestedCSS {
  color?: string;
  nest?: {
    [selector: string]: NestedCSS;
  };
}

const failsSliently: NestedCSS = {
  colour: 'red'  // TS Error: 未知属性 'colour'
}
```
### 索引签名中排除某些属性

```ts
type FieldState = {
  value: string;
};

type FromState = {
  isValid: boolean; // Error: 不符合索引签名
  [filedName: string]: FieldState;
};
```

请注意尽管你可以声明它至一个已存在的 TypeScript 类型上，但是你不能创建如下的对象

```ts
type FieldState = {
  value: string;
};

type FormState = { isValid: boolean } & { [fieldName: string]: FieldState };

// 使用它来创建一个对象时，将不会工作
const bar: FormState = {
  // 报错: 'isValid' 不能赋值给 'FieldState'
  isValid: false,
};

// 改成下列方式后，bar定义正常
type FormState = { isValid: boolean } & { [fieldName: string]: FieldState };

const bar: FormState = {
  isValid: false,
};
```

## 名义化枚举

```ts
// BAR
enum BarIdBrand {
  _ = ''
}

```
`_` 映射到空字符串的成员，即`{ _ = '' }`。这可以强制 `TypeScript` 推断出这是一个基于字符串的枚举，而不是一个数字类型的枚举。因为`TypeScript` 会把一个空的枚举类型（`{}`）推断为一个数字类型的枚举，数字类型的枚举与 `string` 的交叉类型是 `never`

## 协变与逆变??

<!-- 还是不太理解 -->

先约定如下的标记：

- `A ≼ B` 意味着 `A` 是 `B` 的子类型。
- `A → B` 指的是以 `A` 为参数类型，以 `B` 为返回值类型的函数类型。
- `x : A` 意味着 `x` 的类型为 `A`。

假设：`Greyhound ≼ Dog ≼ Animal`

得出：`(Animal → Greyhound) ≼ (Dog → Dog)`（详细推导过程[见][covariance]）

用术语表示：参数类型是逆变的，返回值类型是协变的。

> 返回值类型是协变的，意思是 A ≼ B 就意味着 (T → A) ≼ (T → B) 。参数类型是逆变的，意思是 A ≼ B 就意味着 (B → T) ≼ (A → T) （ A 和 B 的位置颠倒过来了）

## infer 

`infer` 表示在 `extends` 条件语句中待推断的类型变量，如：

```ts
type ParamType<T> = T extends (...args: infer P) => any ? P : T;

interface User {
  name: string;
  age: number;
}

type Func = (user: User) => void;

type Param = ParamType<Func>; // Param = User
type AA = ParamType<string>; // string

```

示例1：tuple 转 union eg: `[string, number] -> string | number`

```ts
type ElementOf<T> = T extends Array<infer E> ? E : never;

type TTuple = [string, number];

type ToUnion = ElementOf<TTuple>; // string | number

// 高级写法
type ToUnion = TTuple[number]; // string | number

```

示例2：https://github.com/LeetCode-OpenSource/hire/blob/master/typescript_zh.md

[题目及个人解答](./infer-demo.ts)

## FAQs

### 如果对象实现了某个接口，我怎么在运行时检查？

```ts
interface SomeInterface {
  name: string;
  length: number;
}
interface SomeOtherInterface {
  questions: string[];
}

function f(x: SomeInterface | SomeOtherInterface) {
  // Can't use instanceof on interface, help?
  if (x instanceof SomeInterface) {
    // ...
  }
}
```

在编译时期， TypeScript 的类型被删除。这意味着没有用于执行运行时类型检查的内置机制。这完全取决与你如何鉴别对象。一个比较广泛的用法是检查某个对象里的属性。你可以使用用户定义的类型保护来实现它：

```ts
function isSomeInterface(x: any): x is SomeInterface {
  return typeof x.name === 'string' && typeof x.length === 'number';

function f(x: SomeInterface|SomeOtherInterface) {
  if (isSomeInterface(x)) {
    console.log(x.name); // Cool!
  }
}
```

### 重载问题

请思考：为什么以下写法会报错

```ts
function createLog(message: string): number;
function createLog(source: string, message?: string): number {
  return 0;
}

createLog('message'); // OK
createLog('source', 'message'); // ERROR: Supplied parameters do not match any signature
```
当至少具有一个函数重载的签名时，只有重载是可见的。最后一个声明签名（也可以被称为签名的实现）对签名的形状并没有贡献，因此，要获得所需的行为，你需要添加额外的重载

```ts
function createLog(message: string): number;
function createLog(source: string, message: string): number;
function createLog(source: string, message?: string): number {
  return 0;
}
```

另一个例子

```ts
function compare(a: string, b: string): void;
function compare(a: number, b: number): void;
function compare(a: string | number, b: string | number): void {
  // Just an implementation and not visible to callers
}

compare(1, 2); // OK
compare('s', 'l'); // OK
compare(1, 'l'); // Error.
```

### class 的类型

以下这段代码会提示出错

```ts
class MyClass {
  someMethod() {}
}
var x: MyClass;
// Cannot assign 'typeof MyClass' to MyClass? Huh?
x = MyClass;
```
`x` 是`MyClass`的实例，声明类的写法应该是 `typeof MyClass`

### 扩展 Error、Array、Map 内置函数的问题

[参阅][extendclass]（不太明白）

## 随记

- 只导入模块, 这种写法导入了什么??

```js
import 'core-js'; 
import './index.css'
```

- d.ts文件到底是什么作用？为啥.两下，为啥叫d.ts，和普通ts文件区别？

eg: 使用@types为现有npm包提供类型声明

[covariance]:https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html

[extendclass]:https://jkchao.github.io/typescript-book-chinese/faqs/class.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E6%89%A9%E5%B1%95-error%E3%80%81array%E3%80%81map-%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0%EF%BC%9F
