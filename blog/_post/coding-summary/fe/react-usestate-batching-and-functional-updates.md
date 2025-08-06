---
title: React 批处理与变量更新逻辑
date: 2025-07-22
category: FE
tags:
  - FE
  - React
---
<!-- more -->

## 分析不同的React版本下中如下case点击后渲染结果是多少，渲染了几次

case 1:

```jsx
const [count, setCount] = useState(0);

<button
  onClick={() => {
    setCount(count + 1);
    setCount(count + 1);
  }}
>
  Increment
</button>
```

case 2：

```jsx
const [count, setCount] = useState(0);

<button
  onClick={() => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }}
>
  Increment
</button>
```

case 3：

```jsx
<button
  onClick={() => {
    setTimeout(() => {
      setCount((c) => c + 1);
      setCount((c) => c + 1);
    }, 1000);
  }}
>
  Increment
</button>
```

## 解答

| 场景                  | 代码                     | React 17 结果              | React 18 结果              | 核心原因                 |
| :-------------------- | :----------------------- | :------------------------- | :------------------------- | :----------------------- |
| **1. 错误更新** | `setCount(count + 1)`  | `+1`, 1 次渲染           | `+1`, 1 次渲染           | 闭包陷阱                 |
| **2. 正确更新** | `setCount(c => c + 1)` | `+2`, 1 次渲染           | `+2`, 1 次渲染           | 函数式更新保证状态连续性 |
| **3. 异步更新** | `setTimeout(...)`      | `+2`, **2 次渲染** | `+2`, **1 次渲染** | React 18 自动批处理      |

Q: case 2中：18 以前没有批处理为什么只会渲染一次？
A：这个前提是错的，18以前没有自动批处理，批处理只在 React 事件处理函数中生效。18 以后，批处理会自动应用到几乎所有地方。

Q：自动批处理不会将两次合并成一次吗，使得最后只更新了+ 1 吗，为什么case 2、3都 +2 了？
A：

自动批处理的作用是将多次状态更新合并到一次渲染中来优化性能，但它并不会合并或覆盖更新的逻辑。

> 批处理是指，当 React 在一个单独的重渲染事件中批量处理多个状态更新以此实现优化性能。如果没有自动批处理的话，我们仅能够在 React 事件处理程序中批量更新。在 React 18 之前，默认情况下 `promise`、`setTimeout`、原生应用的事件处理程序以及任何其他事件中的更新都不会被批量处理；但现在，这些更新内容都会被自动批处理：详见[官网](https://zh-hans.react.dev/blog/2022/03/29/react-v18)

## 相关

在HTML 中通过连续更新值可能会有同样的问题比如如下代码的结果是多少

```html
 span.innerText = Number(span.innerText) + 1;
 span.innerText = Number(span.innerText) + 1;
```

详见[此文](./browser-rendering-and-event-loop.md)
