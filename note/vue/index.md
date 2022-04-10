---
title: Vue 入门
date: 2022-04-06
category: Vue
tags:
  - Vue
---

<!-- more -->

## 随记

### 介绍

https://v3.cn.vuejs.org/guide/introduction.html

- 所有东西都是响应式的，什么东西？数据？dom? 什么是响应式？


指令： `v-`，应用特殊的响应式行为

- `v-bind`: 属性绑定。当前活跃实例？ 示例中的实例不是父级吗?当前活跃实例指？
- `v-on`: 事件监听。
- `v-if`: 可见性。
- `v-for`: 列表渲染。

TodoItem 使用时驼峰自动转换todo-item？


### 应用&组件实例

https://v3.cn.vuejs.org/guide/instance.html

内置`property`, `$`前缀

生命周期图示：

![图示](https://v3.cn.vuejs.org/images/lifecycle.svg)

### 模板语法

https://v3.cn.vuejs.org/guide/template-syntax.html

文本：
  - 双大括号`<span>Message: {{ msg }}</span>` 
  - `v-once`只执行一次插值

原始HTML：`v-html`，对应内容会被替换
指令：`v-`
参数：`v-...:属性`
动态参数：方括号`[]` `<a v-bind:[attributeName]="url"> ... </a>`
修饰符：`.`,指定指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`(例子不太明白??)
```html
<form v-on:submit.prevent="onSubmit">...</form>
```
缩写： 
- `v-bind:href`  => `:href`
- `v-on:click` => `@click`

动态参数表达式的约定：

- 空格、引号在HTML属性名中无效(为什么这么处理，HTML规范或Vue规范??)
  ```html
    <!-- 这会触发一个编译警告 -->
    <a v-bind:['foo' + bar]="value"> ... </a>
  ```
- 键名避免大写字符，浏览器会把属性名强制转为小写

### Data Property 和方法 

**Data Property**：

实例中可通过`$data`、或组件实例获取顶级property

为使Vue响应系统能自动跟踪，所有属性需确保在在`data`函数返回对象中，无值得使用`null`等占位值

Vue使用`$`前缀暴露内置API，内部property保留`_`前缀，自定义避免使用这两个字符开头

**方法**：

Vue 自动为 `methods` 绑定 `this`，以便于始终指向组件实例，所以在定义methods应避免使用箭头函数

### 计算属性computed 和监听器watch

###  Class与Style绑定

#### 对象语法

```html
<div :class="{ active: isActive, 'text-danger': hasError }"></div>
```
上面的语法表示 `active` 这个 `class` 存在与否将取决于 data property `isActive`

等效于

```html
<div :class="classObject"></div>
```

```js
data() {
  return {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
}
```
#### 数组语法

传入数组，应用 class 列表

```html
<div :class="[activeClass, errorClass]"></div>
```

```js
data() {
  return {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}
```

渲染结果为：

```html
<div class="active text-danger"></div>
```

结合条件语句

```html
<div :class="[isActive ? activeClass : '', errorClass]"></div>

```
结合对象语法

```html
<div :class="[{ active: isActive }, errorClass]"></div>
```

#### 组件上使用

当有多个根元素时，可以定义哪些部分接收这个class
```html
<div id="app">
  <my-component class="baz"></my-component>
</div>
```

```js
const app = Vue.createApp({})

app.component('my-component', {
  template: `
    <p :class="$attrs.class">Hi!</p>
    <span>This is a child component</span>
  `
})
```
#### 内联样式

:style, 可直接写、绑定到样式对象、结合数组

可以为 style 绑定中的 property 提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```
这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 display: flex。

### 条件渲染

`v-if`、 `v-else` 、`v-else-if`

`v-show`: 元素始终会被渲染并保留在 DOM 中，只是切换 CSS display属性

### 列表渲染

`v-for`: `item in items`, 

```html
<ul id="array-rendering">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```

可用`of` 替代 `in` ,用法完全一样??

`v-for` 遍历对象，第一个参数为值、第二个为键名、第三个参数索引

```html
<li v-for="(value, name, index) in myObject">
  {{ index }}. {{ name }}: {{ value }}
</li>
```
>  按 `Object.keys()` 的结果遍历,不能保证在不同的JS引擎下结果一致

数组变更的方法会触发视图更新。如`push()`、`pop()`

`v-for`也可以接受整数，此时它会吧模板重复对应次数

[避免v-if和v-for一起使用](https://v3.cn.vuejs.org/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8%E5%BF%85%E8%A6%81) 


有代码提示吗和校验吗?? 比如定义组件时的template

### 事件处理


直接执行操作：`<button @click="counter += 1">Add 1</button>"`

接收方法：`<button @click="greet">Greet</button>`

内联调用方法：` <button @click="say('hi')">Say hi</button>`

使用特殊变量（如原始DOM事件，`$event`）：`<button @click="warn('Form cannot be 
submitted yet.', $event)">`

多事件处理，逗号分隔：`<button @click="one($event), two($event)">`

事件修饰符：`<a @click.stop.prevent="doThat"></a>`

.exact 修饰符（控制由精确的系统修饰符组合触发的事件）： 

```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```

鼠标按钮修饰符：`.left`、`.right`、`.middle`

### 表单输入绑定

`v-model` 双向数据绑定

> 对于需要使用输入法 (如中文、日文、韩文等) 的语言，你会发现 v-model 不会在输入法组织文字过程中得到更新。（啥意思？？举例？）

多复选框时的绑定方式

```html
<div id="v-model-multiple-checkboxes">
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>
  <br />
  <span>Checked names: {{ checkedNames }}</span>
</div>
```

```js
Vue.createApp({
  data() {
    return {
      checkedNames: []
    }
  }
}).mount('#v-model-multiple-checkboxes')
```

会同步更新两个值吗??

```html
<input type="radio" v-model="pick" v-bind:value="a" />
```

#### 修饰符

`.lazy`: 添加 `lazy` 修饰符，转为在 `change` 事件之后进行同步。

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" />
```

`.number`: 转换输入值为数值型，给 `v-model` 添加 `number` 修饰符

```html
<input v-model.number="age" type="text" />
```
输入类型是 `number` 则无需使用`.number` 修饰符,值无法被 parseFloat() 解析，则返回原始的值。

`.trim`: 去除首尾空白符。

```html
<input v-model.trim="msg" />
```

### 组件基础

组件实例通过内建$emit方法传入事件名称触发事件（自动驼峰转-？？）

```html
<button @click="$emit('enlargeText')">
  Enlarge text
</button>
```
父级组件像处理原生DOM事件一样监听子组件实例的任意事件

```html
<blog-post ... @enlarge-text="postFontSize += 0.1"></blog-post>
```

> 可以在组件的 emits 选项中列出已抛出的事件（不列出来也能运作，仅仅只是用于声明？？）


`$event` 访问事件中值（多个参数如何访问？？）

```html
<button @click="$emit('enlargeText', 0.1)">
  Enlarge text
</button>
```

```html
<blog-post ... @enlarge-text="postFontSize += $event"></blog-post>

```

#### 在组件上使用v-model

核心：将需要双向绑定的值绑到`modalValue`上

- 将其 `value attribute` 绑定到一个名叫 `modelValue` 的 `prop` 上
- 在其 `input` 事件被触发时，将新的值通过自定义的 `update:modelValue` 事件抛出

```js
app.component('custom-input', {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  `
})
```

#### 插槽

使用:
```html
<alert-box>
  Something bad happened.
</alert-box>
```

定义:
```js
app.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
```

#### 动态组件

`component`组件+`is`attribute实现

```html
<component :is="currentTabComponent"></component>
```
`currentTabComponent`可以是：已注册组件的名字、一个组件选项对象



## 相关链接

mvvm：https://zh.wikipedia.org/wiki/MVVM
XSS 攻击：
  - https://en.wikipedia.org/wiki/Cross-site_scripting
  - https://zh.wikipedia.org/zh-cn/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC
template？？