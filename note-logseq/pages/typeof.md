## 注意事项
- function 虽然不是基础类型，但是 `typeof function(){} === 'function'`
- `typeof null === 'object'`，历史bug
- 所有使用 [`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 调用的构造函数都将返回非基本类型（`"object"` 或 `"function"`）。大多数返回对象，但值得注意的例外是 [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)，它返回一个函数。
  ```javascript
  const str = new String("String");
  const num = new Number(100);
  const A = function(){}
  const a = new A();
  
  typeof str; // "object"
  typeof num; // "object"
  typeof a; // "object"
  
  const func = new Function();
  
  typeof func; // "function"
  ```