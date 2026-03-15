---
title: Chrome调试技巧
date: 2022-05-13
category: ide-skill
tags:
  - Chrome
  - ide-skill
  - FE
---
# Chrome调试技巧

<!-- more -->

## 前言

大部分技巧来自：[《你不知道的 Chrome 调试技巧》](https://juejin.cn/book/6844733783166418958)

全文精华，记录关键字供回忆复习

MAC Windows 的 Ctrl CMD 记混了 ，快捷键不生效时替换两个按键试试

其他参考：

- [开发者不可不知的 Google Chrome 七大新特性](https://developer.aliyun.com/article/110289)
 
## 如何不引入外部资源在浏览器中写代码并调试

source 左侧面板 Snippets

![](./image/chrome-snippet.png)

## 赋值与保存

- 终端 `copy()`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/16787442a1444125~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 存储为全局变量：终端右键变量，选择 “Store as global variable”

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/167874429e8b8f73~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 保存堆栈信息，准确描述问题： 终端右键，`save as`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/16787442c1b6d1f7~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)


- COPY HTML: `Ctrl C`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/16787442daaa7199~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

## 快捷键

- 切换布局：ctrl + shift + D (⌘ + shift + D Mac) 

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/18/167c07cf50125757~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)


- 切换 DevTools 面板(mac cmd...)
  - `ctrl + [` 和 `ctrl + ]`
  - `ctrl + 1..9`

📢：第二组快捷键默认被禁用了。你可以通过 DevTools>>Settings >>Preferences>>*Appearance* 打开这个选项

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/18/167c07cf4d56febf~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 调整数值（样式等）

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/18/167c07cf43b2f06e~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)


- `ctrl+f`搜索查找：elements， logs， sources & network 中的查找

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/22/168747e72320ff3a~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

## 使用Command

`ctrl shift p`

- 节点截图、截长图
- 切换主题

## 使用代码块

- 创建代码块

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/29/167f5b6997643be2~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

## console 中的 ‘$’

- `$0` 是对我们当前选中的 html 节点的引用
- `$1` 是对上一次我们选择的节点的引用
- `$2` 是对在那之前选择的节点的引用，等等
- `$_` 是对上次执行的结果的 引用
- `$i` 在 console 中引入和测试一些 npm 库, $i('lodash') 或者 $i('moment') 几秒钟后，你就可以获取到 lodash / momentjs，需要安装console importer插件

## console 中的 “bug”

两次打印一样

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/11/1679a0d3a708ef3e~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

测试时在Vue和RN中打印出来不一样？

## 异步console

- console 可直接使用await

这种写法：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/12/1679e020118e0846~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

可改成：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/12/1679e0201c5c5fd7~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## 忍者打印

- 条件断点

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/17/167b94b8f36112b7~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


- 忍者打印

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/17/167b955a1f0311fc~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

条件打印示例：

```js
(item.key === 'header' && !console.table(item))
```

## 【console】自定义格式转换器

可以用来美化、过滤log，结合snippet实现保存（也可写在代码中，大概）

[原文链接](https://juejin.cn/book/6844733783166418958/section/6844733783212589063)


1. 开启 enable custom formatters

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/14/167abc4fc44e3add~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

2. 配置`window.devtoolsFormatters`

- header : 处理如何展示在 console 的日志中的主要部分。
- hasbody : 如果你想显示一个用来展开对象的 ▶ 箭头，返回 true
- body : 定义将会被显示在展开部分的内容中。

示例结果：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/14/167abc4fbd5ae3f6~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## 【console】对象&方法  

1. `queryObjects`：可用来查询：特定的时刻 + 特定的执行上下文 有哪些对象 eg: 

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/18/167c07a88c45b6bd~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/18/167c07a88ed68f7f~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


2. `monitor`: 每当一个 被潜入 的方法运行的时候，console 控制台 会把它的实例打印出来，包含 函数名 以及 调用它的参数。eg:

```js
class Person {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  greet() {
    return this.getMessage('greeting');
  }
  getMessage(type) {
    if (type === 'greeting') {
      return `Hello, I'm ${this.name}!`;
    }
  }
}
```

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/18/167c07a88ddad8cb~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

3. `monitorEvents`：可以使用名为 monitorEvents 的方法，对 events 做一样的事情

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/20/167c99eb0734d2f9~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## 【console】 console中的骚操作

### `console.assert`

当我们传入的第一个参数为 假 时，`console.assert` 打印跟在这个参数后面的值。

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/167893640b5cdd71~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


### `console.table`

`console.table` 这个小技巧在开发者中可能并没有多少人知道: 如果有一个 数组 (或者是 类数组 的对象，或者就是一个 对象 )需要打印，你可以使用 `console.table` 方法将它以一个漂亮的表格的形式打印出来。它不仅会根据数组中包含的对象的所有属性，去计算出表中的列名，而且这些列都是可以 缩放 甚至 还可以排序!!!

如果你觉得展示的列太多了，使用第二个参数，传入你想要展示的列的名字

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/167893640e9ba1d3~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### `table`结合`{}`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/22/1687448b6fdfc5bc~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


### `console.dir`

`console.log` 会将这个交互式的元素渲染成像是从 Elements 中剪切出来的一样。如果说你想要查看 这个节点所关联到的真实的js对象 呢？并且想要查看他的 属性 等等？

在那样的情况下，就可以使用`console.dir`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/7/1678936410bb79fa~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### 给`logs`加上时间戳

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/13/167a467d9f9ff467~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


### 检测执行时间

对脚本中的特殊的节点之间执行的时间跨度更加感兴趣，对于这样的情况，我们可以采用一对有效的 console 方法

- console.time() — 开启一个计时器
- console.timeEnd() — 结束计时并且将结果在 console 中打印出来

如果你想一次记录多件事，可以往这些函数中传入不同的标签值。(例如: console.time('loading') ， console.timeEnd('loading') )

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/13/167a484d3824545d~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


### 给`console.log`加上`CSS`样式

eg: `console.log('%c666','color:#f40;font-size:50px',222)`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/21/1686f25a9c7ad9d8~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### 让 `console.log`基于调用堆栈自动缩进
```js
function log(message) {
      console.log(
        // 这句话是重点当我们 new 出来的 Error 对象时，会匹配它的stack 信息中的换行符，换行符出现的次数也等同于它在堆栈调用时的深度。
        ' '.repeat(new Error().stack.match(/\n/g).length - 2) + message
      );
    }

    function foo() {
      log('foo');
      return bar() + bar();
    }

    function bar() {
      log('bar');
      return baz() + baz();
    }

    function baz() {
      log('baz');
      return 17;
    }

    foo();
```

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/14/1684b5b03d4ebb82~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### 直接在回调中使用`console.log`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/22/168744938b968240~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


### 使用实时表达式

只需按下 "眼睛" 符号，你就可以在那里定义任何 JavaScript 表达式。 它会不断更新，所以表达的结果将永远存在

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/29/167f82b33009449f~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## network 中的骚操作

###  隐藏 network overview

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/22/168745fc910fdc73~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### Request initiator 显示了调用堆栈信息

显示了是哪个脚本的哪一行触发了请求

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/29/167f8282477941b8~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### 请求过滤

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/29/167f8282534dfe59~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### 自定义请求表

自定义显示哪些列，右键单击请求表标题上的任意位置，甚至可以定义你自己的选项

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/29/167f82824d09c68d~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### 重新发送 XHR 的请求

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/20/167c99ea1c267c2b~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


### XHR/fetch 断点

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/22/16874662814db12c~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## 元素面板篇

### 通过`'h'`来隐藏元素

按一下 'h' 就可以隐藏你在元素面板中选择的元素。再次按下 'h' 可以使它出现。某些的时候这很有用：例如你想截图，但你想去掉里面的敏感信息。

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/9/1679379780c11ef3~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### 拖动 & 放置元素

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/9/16793797bde74b62~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### 使用 control (按钮) 来移动元素!

移动你当前选中的元素，在 DOM 结构中往上挪一点或者往下挪一点，而不是拖动和放置，可以使用[ctrl] + [⬆/⬇]  ([⌘] + [⬆/⬇] on Mac)


![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/9/16793797bf5d233e~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


### 编辑元素面板

拖动，放置，编辑，复制， ctrl + z 撤销

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/9/1679379788863b4e~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### shadow editor 阴影编辑器

Style 面板中点击靠近 box-shadow 属性或者 text-shadow 属性的 阴影方形符号 来打开它：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/14/167ac17a4194c870~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


### Timing function editor 定时函数编辑器

贝塞尔曲线是一串用来定义 CSS 的动画速度在整个动画过程中如何变化的 魔法数值 。我们将其定义为 transition-timing-function 或者 animation-timing-function CSS 属性


![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/14/167ac1748b45fe3f~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### 插入样式规则的按钮

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/14/167ac1748b954754~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

### 在元素面板中展开所有子节点

方式1：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/20/167c99eb333a3f6c~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

方式2：

- mac: option + 左键
- win: alt + 左键


### DOM 断点

有时脚本修改了 DOM ，但修改的是哪部分？什么时候修改的呢？

可以添加一个 DOM 断点：监听节点被添加或者移除 / 属性被改变

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/22/168746caeae2a94e~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## 【元素面板】颜色选择器

### 只选择你正在用的颜色（没找到）

### 直观的选择你的颜色(no contrast information available)

## 【Drawer】Drawer常识 

Drawer: 选项卡(Elements、Console、Sources...)的平行选项卡，被隐藏在主窗口之下，这个组合被称为Drawer。在选项卡中是按ESC显示和隐藏。

Drawer里有什么？

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/20/167ca65dd36c5272~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


1. 控制传感器

地理位置、3D空间位置

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/20/167caa871b562a48~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

2. 模拟网络状态

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/20/167caa8723019208~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

3. Elements + 源代码

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/20/167caa8719c239ee~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

4. 检查代码coverage

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/29/167f829dae8fa7fb~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

5. 检查正在修改的内容（Vue 似乎没生效，修改的是源码吗）

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/29/167f829dadf27e11~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## 【Workspace】Workspace 技巧

在Chrome中修改你的文件：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/29/167f5b37db4e23ac~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

即时同步样式

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/29/167f5b37d2312b72~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
