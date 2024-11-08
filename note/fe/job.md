---
title: 八股文复习记录
date: 2024-08-06
category: 
tags:
  - FE
  - job
---

<!-- more -->
## 高频概念

1. **跨域**
2. **事件循环**
3. **闭包**
4. **原型和原型链**
5. **三次握手**
6. **防抖、节流**
7. **作用域和作用域链**
8. **this关键字**
9. **异步编程**
10. **DOM操作**
11. **事件委托**
12. **模块化**
13. **CSS布局**
14. **浏览器渲染过程**
15. **性能优化**
16. **call、bind、apply**
17. **手写一段逻辑：Promise等**


## 跨域

>豆包： https://www.doubao.com/thread/w1fb0fcdb2eacb7fb
>参考：https://blog.csdn.net/fudaihb/article/details/140187291

解释：跨域是指浏览器出于安全考虑，阻止网页从一个域请求另一个域的资源。
解决方案：CORS、JSONP、代理服务器、NGINX、postMessage等。

### question

1. 什么是跨域？
2. 跨域产生的原因是什么？
3. 常见的跨域解决方案有哪些？
4. JSONP 的原理是什么？
5. CORS 跨域的原理是什么？
6. 如何在服务端设置 CORS？
7. 代理服务器是如何解决跨域问题的？
8. 跨域请求会有哪些限制？
9.  跨域资源共享和简单请求、非简单请求有什么关系？

## my question

为什么图片跨域能显示出来？如访问`https://developer.mozilla.org/pimg/aHR0cHM6Ly9zdGF0aWM0LmJ1eXNlbGxhZHMubmV0L3V1LzIvMTU0ODUwLzE3Mjc4MTI4OTYtMTI4bG9nb3RyYW5zcGFyZW50LnBuZw%3D%3D.gh3KvCKF1fAfFQjU1WRLqdj7b3kR029VsuxGrnlXxcA%3D`

答：因为图片的 crossOrigin 属性，不设置可以访问跨域资源，但脚本不能访问

## 闭包

> 豆包：https://www.doubao.com/thread/wb0640721b96f3f7b
> 官方：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures

解释：闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合

### Question

1.  什么是闭包？
2.  闭包是如何形成的？请解释其原理。
> a.函数可以访问外部函数的的作用域；b.外部函数执行完毕，闭包依然能访问其作用域内的变量
> 相关：作用域链、内存管理
3.  闭包有哪些应用场景？
    1.  实现数据封装和隐藏：可以将一些敏感数据封装在闭包内部，避免外部直接访问和修改。
    2.  模拟私有变量：通过闭包可以创建类似于私有变量的效果，只在特定的函数内部可访问。
    3.  保存变量状态：闭包可以记住外部函数的变量状态，即使外部函数已经执行完毕，闭包仍然可以访问和修改这些变量。
    4.  实现函数柯里化：通过闭包可以将一个多参数的函数转换为一系列单参数的函数。
4.  闭包会带来哪些问题？
5.  如何避免闭包带来的问题？
6.  举一个闭包的实际应用例子。
7.  闭包中变量的作用域是怎样的？
8.  解释一下闭包是如何实现数据封装的？
9.  闭包和普通函数有什么区别？
10. 在循环中使用闭包可能会出现什么问题？如何解决？
11. 闭包对内存管理有什么影响？


## 事件循环

> 豆包：https://www.doubao.com/thread/w9050ce7ec3fdf475

解释：JavaScript是单线程的，事件循环是其处理异步操作的机制。
关键点：宏任务、微任务、调用栈、消息队列。

[并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Event_loop)
[深入：微任务与 Javascript 运行时环境](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
[在 JavaScript 中通过 queueMicrotask() 使用微任务](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide)

### question

1.  请简单解释一下 JavaScript 中的事件循环机制。
2.  什么是宏任务和微任务？请分别举例。
3.  事件循环中的调用栈有什么作用？
4.  宏任务和微任务的执行顺序是怎样的？
5.  请描述一下在事件循环中，一个定时器任务（如 setTimeout）的完整执行过程。
6.  Promise 在事件循环中属于哪种任务类型？为什么？
7.  如何理解 JavaScript 单线程与事件循环的关系？
8.  当有多个 Promise 的 then 方法和一个 setTimeout 同时存在时，它们的执行顺序是怎样的？
9.  请解释一下在事件循环里，异步 I/O 操作是如何被处理的？
10.  什么情况下会导致事件循环的阻塞？
11.  在 Node.js 中，事件循环和浏览器中的有什么区别？
12.  请结合事件循环，说明 async/await 函数的执行顺序。

### my question

微任务的执行时机，是在宏任务栈执行完毕，还是在宏任务栈的其中一个任务执行完毕后开始

多种事件循环如何切换


##原型和原型链

> 豆包：

解释：JavaScript通过原型链实现继承，每个对象都有一个原型对象，原型对象也有自己的原型，形成链条。
关键点：`__proto__`、`prototype`、`constructor`。

![](20241030093630.png)

### 判断题

题目一：

```js
function Parent() {}
function Child() {}
Child.prototype = new Parent();

var childInstance = new Child();

// 问题：childInstance.__proto__ 与 Parent.prototype 是否相等？
```

题目二

```js
function Animal() {}
Animal.prototype.sound = 'roar';

function Dog() {}
Dog.prototype = new Animal();

var dog = new Dog();

// 问题：dog.__proto__.__proto__ 与 Animal.prototype 是否相等？
```

题目三：

```js
function Shape() {}
Shape.prototype.draw = function() {
  console.log('Drawing a shape');
};

function Circle() {}
Circle.prototype = Object.create(Shape.prototype);

var circleInstance = new Circle();

// 问题：circleInstance.__proto__ 与 Shape.prototype 是否相等？
```

题目四：

```js
function Vehicle() {}
Vehicle.prototype.move = function() {
  console.log('Vehicle is moving');
};

function Car() {}
Car.prototype = new Vehicle();

var car = new Car();

// 问题：car.__proto__.move === Vehicle.prototype.move 是否成立？
```

题目五：

```js
function Person() {}
Person.prototype.name = 'John';

function Student() {}
Student.prototype = new Person();

var student = new Student();

// 问题：student.__proto__.__proto__.name 是否为 'John'？
```

<details>
<summary>
以上五题的答案：
</summary>

false、true、false、true、true

</details>

题目六：

```js
function Super() {}
Super.prototype.superMethod = function() {
  console.log('Super method');
};

function Sub() {}
Sub.prototype = Object.create(Super.prototype);
Sub.prototype.subMethod = function() {
  console.log('Sub method');
};

var subObj = new Sub();

// 问题：subObj.__proto__.__proto__.superMethod 是否可调用？如果可调用，调用后的输出是什么？
```

题目七：

```js
function Obj() {}
Obj.prototype.prop = 'original';

var obj1 = new Obj();
var obj2 = new Obj();

obj2.__proto__.prop = 'modified';

// 问题：obj1.prop 的值是什么？
```

题目八：

```js
function Parent() {}
Parent.prototype.data = [1, 2, 3];

function Child() {}
Child.prototype = new Parent();

var childInstance = new Child();
childInstance.data.push(4);

// 问题：Child.prototype.data 和 childInstance.__proto__.data 是否指向同一个数组？
```

<details>
<summary>
以上三题的答案分别是：
</summary>
可调用 super method
modified
true
</details>

### my question

`__proto__`、`prototype` 中文应该怎么叫？


## 防抖、节流

防抖(debounce)：在事件触发后等待一段时间，如果期间再次触发事件，则重新计时。

节流(throttle)：在一定时间内只允许事件触发一次。




## this关键字

解释：`this`指向调用函数的对象，取决于函数的调用方式。

绑定规则：默认绑定、隐式绑定、显式绑定、new绑定。

## 异步编程

解释：JavaScript通过回调函数、Promise、async/await等方式处理异步操作。

关键点：回调地狱、Promise链、async/await的错误处理。

## DOM操作

解释：DOM是文档对象模型，JavaScript通过DOM API操作HTML和CSS。

常用方法：`getElementById`、`querySelector`、`addEventListener`等。


## 事件委托

解释：事件委托是利用事件冒泡机制，将事件处理器添加到父元素上，从而管理多个子元素的事件。

优点：减少内存消耗，提高性能。

## CSS布局

解释：CSS布局是指如何使用CSS来排列网页元素。

常用布局：Flexbox、Grid、浮动布局、定位布局。

## 浏览器渲染过程

解释：浏览器渲染过程包括解析HTML、构建DOM树、解析CSS、构建渲染树、布局和绘制。

关键点：重绘和重排的区别及优化。

## 性能优化

解释：性能优化是指通过各种技术手段提高网页的加载速度和响应速度。

常用方法：懒加载、代码分割、减少HTTP请求、使用CDN、压缩资源等。

## 模块化

解释：模块化是将代码分割成独立的模块，每个模块只负责特定的功能。

常用工具：ES6模块（import/export）、CommonJS（require/module.exports）、AMD（define/require）。


## 网络基础

> [阮一峰互联网协议入门一](https://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html)
> [阮一峰互联网协议入门二](https://www.ruanyifeng.com/blog/2012/06/internet_protocol_suite_part_ii.html) 


### 键入网址到网页显示，期间发生了什么？

> [小林coding](https://www.xiaolincoding.com/network/1_base/what_happen_url.html)
> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work)
>
> 
### HTTPS



## 作用域和作用域链

解释：作用域是指程序中定义变量的区域，决定了变量的可访问性。作用域链是指当前作用域与其父作用域之间的关系。

类型：全局作用域、函数作用域、块级作用域。

## 随记

域名组成：如www.a.com 与 a.com区别