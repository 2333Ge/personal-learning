---
title: 浏览器事件循环与渲染：为什么连续修改 innerText 会立即生效？
date: 2025-07-22
category: FE
tags:
  - FE
  - JavaScript
---

## 浏览器事件循环与渲染：为什么连续修改 innerText 会立即生效？

### 问题背景

我们从一个简单的问题开始：在原生 JavaScript 中，对同一个 DOM 元素的 `innerText` 连续执行两次加一操作，最终结果是多少？

**示例代码：**

```html
<body>
    <span id="value">0</span>
    <button id="btn">Click Me</button>
    <script>
        const span = document.getElementById('value');
        const btn = document.getElementById('btn');

        btn.addEventListener('click', () => {
            // 第一次加一
            span.innerText = Number(span.innerText) + 1;
            // 第二次加一
            span.innerText = Number(span.innerText) + 1;
        });
    </script>
</body>
```

**答案是：** 最终页面上会显示 `2`。

### 核心概念：JS 执行与 UI 渲染互斥

很多开发者都知道，在浏览器的主线程中，**JavaScript 的执行**和 **UI 的渲染**是互斥的。也就是说，当 JS 代码正在运行时，浏览器会“冻结”页面的渲染。

那么问题来了：既然 JS 执行期间不进行渲染，为什么第二行代码 `span.innerText = Number(span.innerText) + 1;` 能够读取到第一行代码修改后的值（`1`）呢？

关键在于区分两个概念：**DOM 树更新** 和 **屏幕渲染**。

#### 1. DOM 树更新 (在内存中)

这是一个纯粹的 JavaScript 操作。当你执行 `span.innerText = '1'` 时，你是在**同步地、立即地**修改了内存中 DOM 对象的属性。这个操作完成后，内存中的 `span` 节点的 `innerText` 属性就已经变成了 `'1'`。

#### 2. 屏幕渲染 (绘制到页面)

这是浏览器将内存中 DOM 树的当前状态，经过计算、布局、绘制成像素并最终显示在屏幕上的过程。这个过程**只会在当前宏任务（Macrotask）执行完毕后**才进行。

### 事件处理全流程解析

当我们点击按钮时，浏览器内部发生了以下事情：

1.  **事件触发**：一个 `click` 事件被创建并添加到一个宏任务队列（Task Queue）中。
2.  **JS 执行**：事件循环（Event Loop）从队列中取出该任务，并开始执行其回调函数。
    -   **执行第一行代码**: `span.innerText = Number(span.innerText) + 1;`
        -   **读取**: 从内存中读取 `span.innerText`，值为 `"0"`。
        -   **计算**: `Number("0") + 1` 结果为 `1`。
        -   **写入**: **立即更新内存中** `span` 对象的 `innerText` 属性为 `"1"`。此刻，屏幕没有任何变化。
    -   **执行第二行代码**: `span.innerText = Number(span.innerText) + 1;`
        -   **读取**: 再次从内存中读取 `span.innerText`，由于上一步是同步更新的，所以此时读到的值是 `"1"`。
        -   **计算**: `Number("1") + 1` 结果为 `2`。
        -   **写入**: **再次立即更新内存中** `span` 对象的 `innerText` 属性为 `"2"`。此刻，屏幕依然没有任何变化。
3.  **JS 执行完毕**：`click` 事件的回调函数执行完成，JavaScript 的调用栈变空。
4.  **开始渲染**：在本次事件循环的末尾，浏览器检测到 DOM 发生了变更（被标记为 "dirty"），并且主线程现在空闲了，于是开始渲染流程。
    -   浏览器获取 DOM 节点的**最终状态**（即 `innerText` 为 `"2"`）。
    -   进行布局计算（Reflow/Layout）和重绘（Repaint/Paint）。
    -   将最终结果 `2` 绘制到屏幕上。

### 结论

-   **互斥是对的**：在两行 JS 代码执行的整个过程中，浏览器没有进行任何渲染。这就是为什么我们永远不会在屏幕上看到中间值 `1` 的原因。
-   **DOM 访问是即时的**：JS 代码访问和修改的是**内存中的 DOM 对象**，这些操作是同步的。因此，在同一个任务中，后续的读取操作可以立即获得前面修改后的值。

简单来说，我们的代码是在一个“原子”操作中快速地修改了两次内存数据，浏览器则是在整个操作完成后，才拿着**最终的数据**去更新屏幕。

---

#### 对比 React `setState`

这与 React 的 `setState` 行为形成了鲜明对比。在 React 中，`setState` 通常是异步且会被合并（Batching）的。连续调用两次 `setCount(count + 1)` 在同一个事件处理器中可能只会触发一次渲染，并且第二次调用时 `count` 的值可能还是旧的。这是因为 React 为了性能优化，会批量处理状态更新，而不是像原生 DOM 操作一样立即生效。

具体 React 中值将如何更新，渲染会执行几次见[React 批处理与变量更新逻辑](./react-usestate-batching-and-functional-updates.md)

