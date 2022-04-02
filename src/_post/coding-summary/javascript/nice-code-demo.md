---
title: JS 优秀代码示例
date: 2022-04-01
category: JavaScript
tags:
  - JavaScript
---

<!-- more -->

## 时序写法

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises

以下代码实现方法顺序执行，不论同步还是异步，

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));

const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

ES2017 写法

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```
