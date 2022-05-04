---
title: 深入组件
date: 2022-04-08
category: Vue
tags:
  - Vue
---

<!-- more -->

## Props

### 传递静态或动态的Prop

静态prop

```html
<blog-post title="My journey with Vue"></blog-post>
```

动态赋值prop: `v-bind`、`:`

```html
<!-- 动态赋予一个变量的值 -->
<blog-post :title="post.title"></blog-post>

<!-- 动态赋予一个复杂表达式的值 -->
<blog-post :title="post.title + ' by ' + post.author.name"></blog-post>
```

传入布尔值

```html
<!-- 包含该 prop 没有值的情况在内，都意味着 `true`。          -->
<!-- 如果没有在 props 中把 is-published 的类型设置为 Boolean，
则这里的值为空字符串，而不是“true”。 -->
<blog-post is-published></blog-post>

```

传入数组

```html
<!-- 即便数组是静态的，我们仍需通过 `v-bind` 来告诉 Vue        -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。             -->
<blog-post :comment-ids="[234, 266, 273]"></blog-post>
```

传递一个对象的所有属性

```js
post: {
  id: 1,
  title: 'My Journey with Vue'
}
```

```html
<blog-post v-bind="post"></blog-post>
```

等价于React

```html
<blog-post {...post}></blog-post>
```

不使用v-bind可以赋值吗??

### 单项数据流

单项数据绑定，尽量避免修改对象、数组prop的数据

## 非 Props 的 Attribute 

自定义组件中，根组件默认继承所有属性，包括onbind

不希望组件继承属性，可设置`inheritAttrs: false`

```js
app.component('date-picker', {
  inheritAttrs: false,
  template: `
    <div class="date-picker">
      <input type="datetime-local" v-bind="$attrs" />
    </div>
  `
})
```
上例中 `data-status` `attribute` 将应用于 `input` 元素

多个根节点上的属性继承，默认不自定继承，如果未显示绑定`$attrs`将发出运行时警告

```js
// 这将发出警告
app.component('custom-layout', {
  template: `
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
  `
})

// 没有警告，$attrs 被传递到 <main> 元素
app.component('custom-layout', {
  template: `
    <header>...</header>
    <main v-bind="$attrs">...</main>
    <footer>...</footer>
  `
})

```

##  自定义事件

可以通过 emits 选项在组件上定义发出的事件。

```js
app.component('custom-form', {
  emits: ['inFocus', 'submit']
})
```
当在 emits 选项中定义了原生事件 (如 click) 时，将使用组件中的事件替代原生事件侦听器。

> TIPS: 建议定义所有发出的事件，以便更好地记录组件应该如何工作。

v-modal?? what's this?

## 插槽

### 多个插槽

定义：`slot` + `name`属性

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```
使用：`template` + `v-slot:name` (具名插槽)

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

具名插槽的简写 `v-slot:` => `#`

```html
<base-layout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <template #default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```
### 插槽中访问子组件数据

定义： `slot` + `v-bind`

```html
<ul>
  <li v-for="( item, index ) in items">
    <slot :item="item" :index="index"></slot>
  </li>
</ul>
```

绑定在 `<slot>` 元素上的 attribute 被称为插槽 prop

使用：带值的 `v-slot` 来定义我们提供的插槽 prop 的名字

```html
<todo-list>
  <template v-slot:default="slotProps">
    <i class="fas fa-check"></i>
    <span class="green">{{ slotProps.item }}</span>
  </template>
</todo-list>
```




### 只有默认插槽时的简写

```html
<todo-list v-slot:default="slotProps">
  <i class="fas fa-check"></i>
  <span class="green">{{ slotProps.item }}</span>
</todo-list>
```

去掉了`<template>`，将`v-slot`直接用在组件上，注意**只有默认插槽**时才可以这样简写

### 解构插槽 Prop

```html
<todo-list v-slot="{ item }">
  <i class="fas fa-check"></i>
  <span class="green">{{ item }}</span>
</todo-list>
```

### 动态插槽名

```html
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
```

## Provide/Jnject

类比 React Context，解决嵌套深，需要传递属性的情况

```js
const app = Vue.createApp({})

app.component('todo-list', {
  data() {
    return {
      todos: ['Feed a cat', 'Buy tickets']
    }
  },
  // 声明
  provide: {
    user: 'John Doe'
  },
  template: `
    <div>
      {{ todos.length }}
      <!-- 模板的其余部分 -->
    </div>
  `
})

app.component('todo-list-statistics', {
  // 注入
  inject: ['user'],
  created() {
    // 使用
    console.log(`Injected property: ${this.user}`) // > 注入的 property: John Doe
  }
})
```

📢 注意，下列方法传递组件实例属性不起作用

```js
app.component('todo-list', {
  data() {
    return {
      todos: ['Feed a cat', 'Buy tickets']
    }
  },
  provide: {
    // 将会导致错误 `Cannot read property 'length' of undefined`
    todoLength: this.todos.length 
  },
  template: `
    ...
  `
})
```
需要将`provide`转为返回对象的函数

```js
app.component('todo-list', {
  data() {
    return {
      todos: ['Feed a cat', 'Buy tickets']
    }
  },
  provide() {
    // 改成这样
    return {
      todoLength: this.todos.length
    }
  },
  template: `
    ...
  `
})
```
### 处理响应性

上例中更改todos列表，变化不会反应在todoLength,像对祖先组件更改做出响应，使用组合式 API `computed`

```js
app.component('todo-list', {
  // ...
  provide() {
    return {
      // 改成这样
      todoLength: Vue.computed(() => this.todos.length)
    }
  }
})

app.component('todo-list-statistics', {
  inject: ['todoLength'],
  created() {
    console.log(`Injected property: ${this.todoLength.value}`) // > 注入的 property: 5
  }
})
```

## 动态组件&异步组件

`keep-alive`  + `:is`, 保存组件切换前的状态

```html
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component :is="currentTabComponent"></component>
</keep-alive>
```

异步组件：`defineAsyncComponent` 示例??

## 模板引用


```js
const app = Vue.createApp({})

app.component('base-input', {
  // 定义
  template: `
    <input ref="input" />
  `,
  methods: {
    focusInput() {
      // 使用
      this.$refs.input.focus()
    }
  },
  mounted() {
    this.focusInput()
  }
})
```

父组件调用实例方法

```html
<base-input ref="usernameInput"></base-input>
```

```js
this.$refs.usernameInput.focusInput()
```
