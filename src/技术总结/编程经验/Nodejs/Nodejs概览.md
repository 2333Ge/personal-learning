# 学习资料

- 官网：http://nodejs.cn/learn
- 《深入浅出Node.js》

# what is Node.js

Node.js 是一个开源和跨平台的 JavaScript 运行时环境。 它几乎是任何类型项目的流行工具。

# node.js 与浏览器区别

[详见](http://nodejs.cn/learn/differences-between-nodejs-and-the-browser)

- 部分api不同：Node.js包含文件系统访问api，浏览器提供document对象
- 程序兼容性：
  - 浏览器发展相对较慢，有时不得不使用较旧的版本。如使用 Babel 将代码转换为与 ES5 兼容的代码，再交付给浏览器
  - Node.js 中，则不需要这样做。

- 模块系统不同：Node.js 使用 CommonJS 模块系统，而在浏览器中，则还正在实现 ES 模块标准。在实践中，这意味着在 Node.js 中使用 require()，而在浏览器中则使用 import

？？CommonJS 模块 ES 模块标准区别

# V8 JavaScript引擎介绍

http://nodejs.cn/learn/the-v8-javascript-engine

V8 提供了执行 JavaScript 的运行时环境。 DOM 和其他 Web 平台 API 则由浏览器提供。

现代的 JavaScript 引擎不再只是解释 JavaScript，也会对其进行编译。
# 执行程序

运行Node.js程序eg：`node app.js`

# 退出程序

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

# 环境变量

`process.env.NODE_ENV // "development"`

？？外部如何设置环境变量，如切换线上标识

# Node.js REPL

[Node.js REPL](http://nodejs.cn/learn/how-to-use-the-nodejs-repl):
REPL 也被称为运行评估打印循环，是一种编程语言环境（主要是控制台窗口），它使用单个表达式作为用户输入，并在执行后将结果返回到控制台

有些地方比Chrome终端好用，如可以执行`.save`保存内容

要点：tab补全、全局对象、.命令（重置上下文、文件保存等）、多行编辑、

# 从命令行接收参数

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

# 使用 Node.js 输出到命令行

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

# 在 Node.js 中从命令行接收输入
  
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
# 使用 exports 从 Node.js 文件中公开功能

module.exports
# npm 包管理器简介


# 相关question 

- [Ajax](https://baike.baidu.com/item/ajax/8425?fr=aladdin)? Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。


# 随记

- 掘金笔记的question