---
title: JavaScript 对象的“枚举属性”
date: 2025-07-25
category: JavaScript
tags: 
  - FE
  - JavaScript
---

<!-- more -->

## 🔹 什么是枚举属性？

在 JavaScript 中，对象的每个属性都有一个属性描述符，其中的 `enumerable` 标志决定这个属性能否被**枚举操作**发现（比如 `for...in`、`Object.keys()` 等）。

```js
const obj = {};
Object.defineProperty(obj, 'hidden', {
  value: 123,
  enumerable: false,
});
```

- `enumerable: true`（可枚举） ➜ 会被遍历列出。
- `enumerable: false`（不可枚举） ➜ 不会出现在大多数枚举操作中。

---

## 🔹 什么是“枚举操作”？

枚举操作指的是那些会尝试“遍历”对象属性的操作，包括：

| 操作                      | 是否受 `enumerable` 影响 |
|---------------------------|----------------------------|
| `for...in`                | ✅ 只列出可枚举的属性（含原型链） |
| `Object.keys(obj)`        | ✅ 仅返回自身可枚举属性（字符串键） |
| `Object.entries(obj)`     | ✅ 同上，返回 `[key, value]` 对 |
| `JSON.stringify(obj)`     | ✅ 仅序列化自身可枚举属性 |
| 展开运算符 `{...obj}`     | ✅ 仅复制可枚举属性 |
| `Object.getOwnPropertyNames(obj)` | ❌ 返回自身所有字符串属性（含不可枚举） |
| `Object.getOwnPropertySymbols(obj)` | ❌ 返回自身 Symbol 属性（含不可枚举） |
| `Reflect.ownKeys(obj)`    | ❌ 返回所有属性键（字符串 + Symbol + 不可枚举） |

---

## 🔹 如何创建不可枚举属性？

```js
Object.defineProperty(obj, 'secret', {
  value: 'hidden',
  enumerable: false,
});
```

---

## 🔹 如何检查属性是否可枚举？

```js
obj.propertyIsEnumerable('key');  // true / false
```

---

## 🔹 枚举 vs 自身 vs 原型链

| 方法                         | 可枚举 | 自身属性 | 原型属性 | Symbol |
|------------------------------|--------|-----------|------------|--------|
| `Object.keys(obj)`           | ✅      | ✅         | ❌          | ❌      |
| `for...in`                   | ✅      | ✅         | ✅          | ❌      |
| `Object.getOwnPropertyNames(obj)` | ❌ | ✅         | ❌          | ❌      |
| `Object.getOwnPropertySymbols(obj)` | ❌ | ✅     | ❌          | ✅      |
| `Reflect.ownKeys(obj)`       | ❌      | ✅         | ❌          | ✅      |

---

## 🔹 示例代码对比

```js
const sym = Symbol('id');
const obj = Object.create({ inherited: 'yes' });

Object.defineProperty(obj, 'hidden', {
  value: 'secret',
  enumerable: false
});
obj.visible = 'hello';
obj[sym] = 42;

console.log(Object.keys(obj));             // ['visible']
console.log(Object.getOwnPropertyNames(obj)); // ['visible', 'hidden']
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(id)]
console.log(Reflect.ownKeys(obj));         // ['visible', 'hidden', Symbol(id)]
console.log('inherited' in obj);           // true (来自原型)
```

---

## 🔹 总结建议

- 使用 `Object.keys()`、`for...in` 时，记得它们只列出**可枚举属性**。
- 使用 `Reflect.ownKeys()` 可获取所有自身属性键，是深拷贝等操作的首选。
- 如果你想隐藏某些属性，不想被常规遍历，设置 `enumerable: false`。
