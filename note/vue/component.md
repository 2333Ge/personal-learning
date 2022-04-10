---
title: 深入组件化
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

### 单项数据流

单项数据绑定，尽量避免修改对象、数组prop的数据

