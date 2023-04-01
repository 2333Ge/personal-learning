---
title: Nodejs概览
date: 2022-02-02
category: Nodejs
tags:
  - Nodejs
---

Node.js 是一个开源和跨平台的 JavaScript 运行时环境。 它几乎是任何类型项目的流行工具。

<!-- more -->


## what is Node.js

Node.js 是一个开源和跨平台的 JavaScript 运行时环境。 它几乎是任何类型项目的流行工具。

- 官网：http://nodejs.cn/learn
- 《深入浅出Node.js》


## node.js 与浏览器区别

[详见](http://nodejs.cn/learn/differences-between-nodejs-and-the-browser)

- 部分api不同：Node.js包含文件系统访问api，浏览器提供document对象
- 程序兼容性：
  - 浏览器发展相对较慢，有时不得不使用较旧的版本。如使用 Babel 将代码转换为与 ES5 兼容的代码，再交付给浏览器
  - Node.js 中，则不需要这样做。

- 模块系统不同：Node.js 使用 CommonJS 模块系统，而在浏览器中，则还正在实现 ES 模块标准。在实践中，这意味着在 Node.js 中使用 require()，而在浏览器中则使用 import

？？CommonJS 模块 ES 模块标准区别

## V8 JavaScript引擎介绍

http://nodejs.cn/learn/the-v8-javascript-engine

V8 提供了执行 JavaScript 的运行时环境。 DOM 和其他 Web 平台 API 则由浏览器提供。

现代的 JavaScript 引擎不再只是解释 JavaScript，也会对其进行编译。
## 执行程序

运行Node.js程序eg：`node app.js`

## 退出程序

1. `process.exit(1)`

推出码也可`process.exitCode`设置

2. 友好版
`process.kill(process.pid, 'SIGTERM')`
```js
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('进程已终止')
  })
})
```

## 环境变量

`process.env.NODE_ENV // "development"`

？？外部如何设置环境变量，如切换线上标识

通常通过在 shell 中执行以下命令来完成：

```sh
export NODE_ENV=production
```

也可以通过将环境变量放在应用程序的初始化命令之前来应用它：

```shell
NODE_ENV=production node app.js
```


## Node.js REPL

[Node.js REPL](http://nodejs.cn/learn/how-to-use-the-nodejs-repl):
REPL 也被称为运行评估打印循环，是一种编程语言环境（主要是控制台窗口），它使用单个表达式作为用户输入，并在执行后将结果返回到控制台

有些地方比Chrome终端好用，如可以执行`.save`保存内容

要点：tab补全、`global`全局对象、.命令（重置上下文、文件保存等）、多行编辑、

## 从命令行接收参数

`process.argv`接收：第一个参数是 node 命令的完整路径。第二个参数是正被执行的文件的完整路径。

如果要使用这种形式：`node app.js name=joe`,则需要通过 `minimist` 库处理

```js
const args = require('minimist')(process.argv.slice(2))
args['name'] //joe
```

```bash
node app.js --name=joe
```

否则直接取出来则是`"--name=joe"`形式

## 使用 Node.js 输出到命令行

- `console.trace`:打印函数调用栈
- `console.time`、`timeEnd`: 计算时间，轻松计算函数运行所需的时间
```js
const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()
```
- 为控制台输出着色库：[Chalk](https://github.com/chalk/chalk)
- 创建进度条库：[Progress](https://www.npmjs.com/package/progress)

## 在 Node.js 中从命令行接收输入
  
如：Node.js 提供了 [readline](http://nodejs.cn/api/readline.html) 模块来执行以下操作：每次一行地从可读流（例如 process.stdin 流，在 Node.js 程序执行期间该流就是终端输入）获取输入。

```JS
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`你叫什么名字?`, name => {
  console.log(`你好 ${name}!`)
  readline.close()
})
```

还有：Inquirer、 readline-sync
## 使用 exports 从 Node.js 文件中公开功能

module.exports
## npm 包管理器

`npm root -g` 查看本机全局node_modules目录位置


如果安装的是可执行文件会放在 `node_modules/.bin`目录下，

默认调用方式：`$ node-modules/.bin/mocha --version`，

使用npx简化：`npx mocha --version`

原理及其他使用场景[可见](http://www.ruanyifeng.com/blog/2019/02/npx.html)

### package.json指南

http://nodejs.cn/learn/the-package-json-guide

- bugs: 链接到软件包的问题跟踪器，最常用的是 GitHub 的 issues 页面。

- main: 设置软件包的入口点。当在应用程序中**导入此软件包**时，应用程序会在该位置搜索模块的导出。

### npm版本控制

`x.y.z`

- 第一个数字是主版本。
- 第二个数字是次版本。
- 第三个数字是补丁版本。

当发布新的版本时，不仅仅是随心所欲地增加数字，还要遵循以下规则：

- 当进行不兼容的 API 更改时，则升级主版本。
- 当以向后兼容的方式添加功能时，则升级次版本。
- 当进行向后兼容的缺陷修复时，则升级补丁版本。

### npm dependencies与devDependencies

当添加了 `-D` 或 `--save-dev` 标志时，则会将其安装为开发依赖项（会被添加到 `devDependencies` 列表）。

当投入生产环境时，如果输入 `npm install` 且该文件夹包含 `package.json` 文件时，则会安装它们，因为 npm 会假定这是开发部署。

需要设置 `--production` 标志（`npm install --production`），以避免安装这些开发依赖项。

## Node.js事件循环

http://nodejs.cn/learn/the-nodejs-event-loop

```js
const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo()
```
![调用堆栈图示：](http://website2.nodejs.cn/static/270ebeb6dbfa7d613152b71257c72a9e/11a8f/call-stack-first-example.png)

调用堆栈、消息队列、作业队列

- `process.nextTick()` ：在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数
- `setImmediate()`: 参数传入的任何函数都是在事件循环的下一个迭代中执行的回调.

setImmediate() 与 setTimeout(() => {}, 0)（传入 0 毫秒的超时）、process.nextTick() 有何不同？

传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 setTimeout 和 setImmediate 之前执行。

延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行。

## 事件触发器

```js
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', (start, end) => {
  console.log(`从 ${start} 到 ${end}`)
})

eventEmitter.emit('start', 1, 100)
```

- once(): 添加单次监听器。
- removeListener() / off(): 从事件中移除事件监听器。
- removeAllListeners(): 移除事件的所有监听器。

详见：http://nodejs.cn/api/events.html

## 搭建Http服务器

```js
const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('你好世界\n')
})

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
```

## 发送Http请求

```
const https = require('https')
const options = {
  hostname: 'nodejs.cn',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
```

其他网络库：

- [Axios](https://github.com/axios/axios)：发送Post请求
- Express: 获取Http请求正文数据

## 文件相关

### 使用文件描述符

```js
const fs = require('fs')

fs.open('/Users/joe/test.txt', 'r', (err, fd) => {
  //fd 是文件描述符。
})
```

### 文件属性

```js
const fs = require('fs')
fs.stat('/Users/joe/test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  //可以访问 `stats` 中的文件属性
})

```
- 使用 stats.isFile() 和 stats.isDirectory() 判断文件是否目录或文件。
- 使用 stats.isSymbolicLink() 判断文件是否符号链接。
- 使用 stats.size 获取文件的大小（以字节为单位）。

### 文件路径

从路径中获取信息

```js
const path = require('path')

const notes = '/users/joe/notes.txt'

path.dirname(notes) // /users/joe  文件的父文件夹。
path.basename(notes) // notes.txt 文件名部分。
path.extname(notes) // .txt 文件的扩展名。
```

使用路径

```js
const name = 'joe'

// 接路径的多个片段：
path.join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'

// 相对路径的绝对路径计算
path.resolve('joe.txt') //'/Users/joe/joe.txt' 如果从主文件夹运行。
path.resolve('tmp', 'joe.txt') //'/Users/joe/tmp/joe.txt' 如果从主文件夹运行。

// 当包含诸如 .、.. 或双斜杠之类的相对说明符时，其会尝试计算实际的路径
path.normalize('/users/joe/..//test.txt') //'/users/test.txt'

```

### 读取文件
```js
const fs = require('fs')

fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
```
fs.readFile() 和 fs.readFileSync() 都会在返回数据之前将文件的全部内容读取到内存中。

这意味着大文件会对内存的消耗和程序执行的速度产生重大的影响。

在这种情况下，更好的选择是使用流来读取文件的内容。

### 写入文件

```js
const fs = require('fs')

const content = '一些内容'

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //文件写入成功。
})
```

---

- 文件夹操作：http://nodejs.cn/learn/working-with-folders-in-nodejs
- 文件系统操作：http://nodejs.cn/learn/the-nodejs-fs-module
- 路径模块：http://nodejs.cn/learn/the-nodejs-path-module
- 操作系统模块：http://nodejs.cn/learn/the-nodejs-os-module

...

更多内容查看官网、随用随看

## 相关question 

- [Ajax](https://baike.baidu.com/item/ajax/8425?fr=aladdin)? Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。
****

## 随记

- 掘金笔记的question
- 宏任务、微任务、事件循环权威资料？