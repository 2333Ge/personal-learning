
# 省流
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

# 退出程序

退出：`process.exit(1)`

不同的退出码具有不同的含义，可以在系统中用于程序与其他程序的通信。[详见](http://nodejs.cn/api/process.html#process_exit_codes)

也可以设置 process.exitCode 属性,当程序结束时，Node.js 会返回该退出码。

```js
process.exitCode = 1
```

使用 Node.js 启动服务器，例如 HTTP 服务器：

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('你好')
})

app.listen(3000, () => console.log('服务器已就绪'))
```

这个程序永远不会结束。 如果调用 process.exit()，则任何当前等待中或运行中的请求都会被中止。 这不太友好。

在这种情况下，需要向该命令发送 SIGTERM 信号，并使用进程的信号处理程序进行处理。

```js
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('你好')
})

const server = app.listen(3000, () => console.log('服务器已就绪'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('进程已终止')
  })
})
```
> 什么是信号？信号是一个 POSIX 内部通信系统：发送通知给进程，以告知其发生的事件。

可以从程序内部另一个函数中发送此信号：

```js
process.kill(process.pid, 'SIGTERM')
```