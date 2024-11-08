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

## 闭包缓存计算结果，提高性能

```js
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // 输出 55
console.log(memoizedFibonacci(20)); // 输出 6765
```

在这个例子中，`memoize` 函数通过闭包缓存了计算结果，提高了递归函数的性能。

## 闭包实现函数柯里化

通用的函数柯里化工具函数，注意没有处理this的指向

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

function sum(a,b,c){
  return a+b+c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
```