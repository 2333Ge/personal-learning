## 尝试回答
- **Promise 有哪几种状态？状态变化有什么特点？**
- **Promise 如何实现链式调用？**
- **Promise.all 和 Promise.race 的区别是什么？**
- **解释下面代码的输出顺序（考察[[事件循环]]+Promise）**
- **如何捕获 Promise 的错误？有哪些方法？**
- **Promise 和 setTimeout 的执行顺序问题**
- **如何实现 Promise.all？**
- **async/await 和 Promise 的关系是什么？**
- **什么是 Promise 的微任务机制？**
- **如何取消一个正在执行的 Promise？**
- **手写promise**
- ## 解答
- ### **如何捕获 Promise 的错误？有哪些方法？**  
  
  Promise 的错误捕获主要有以下几种方式：
- #### **1. `.catch()` 方法**
- #### **2. `try/catch` + `async/await`**
- #### **3. `then` 的第二个参数（错误回调）**  
  `then(resolveFn, rejectFn)` 的第二个参数可以单独处理当前 Promise 的错误，但不会捕获后续 `then` 的错误。  
  ```javascript
  fetchData()
  .then(
    data => processData(data),
    error => console.error("初始请求失败：", error) // 仅捕获 fetchData 的错误
  )
  .then(result => console.log(result))
  .catch(error => console.error("后续错误：", error)); // 捕获 processData 或后续的错误
  ```
- #### **4. `window.onunhandledrejection`（全局捕获未处理的 Promise 错误）**  
  用于捕获未被 `.catch()` 处理的 Promise 错误（适用于调试）：  
  ```javascript
  window.addEventListener('unhandledrejection', event => {
  console.error('未捕获的 Promise 错误：', event.reason);
  event.preventDefault(); // 阻止默认错误打印
  });
  ```
- ### **如何实现 `Promise.all`？**  
  
  `Promise.all` 的作用是：
- 接收一个 Promise 数组，等待所有 Promise 完成。
- 如果全部成功，返回结果数组（按输入顺序）。
- 如果有一个失败，立即 reject 该错误。
- #### **实现代码：**  
  ```javascript
  function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;
  
    if (promises.length === 0) {
      resolve(results); // 空数组直接返回
      return;
    }
  
    promises.forEach((promise, index) => {
      Promise.resolve(promise) // 处理非 Promise 值（如 Promise.all([1, 2, 3])）
        .then(value => {
          results[index] = value; // 按顺序存储结果
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results); // 全部完成时返回
          }
        })
        .catch(error => {
          reject(error); // 任意一个失败则立即终止
        });
    });
  });
  }
  ```
- ### **async/await 和 Promise 的关系是什么？**  
  
  **核心关系：**
- **`async/await` 是基于 Promise 的语法糖**，让异步代码的写法更像同步代码。
- **`async` 函数总是返回一个 Promise**：
	- 如果函数内返回普通值（如 `return 42`），它会被包装成 `Promise.resolve(42)`。
	- 如果函数内抛出错误（如 `throw new Error`），它会被包装成 `Promise.reject(error)`。
- **`await` 的作用是“暂停” async 函数的执行**，等待 Promise 完成：
	- 如果 `await` 的 Promise 成功（fulfilled），返回它的结果值。
	- 如果 Promise 失败（rejected），会抛出错误，可以用 `try/catch` 捕获。  
	  
	  **示例：**  
	  ```javascript
	  // 用 Promise 的写法
	  function fetchData() {
	  return fetch('/api')
	  .then(response => response.json())
	  .catch(error => console.error(error));
	  }
	  
	  // 用 async/await 改写
	  async function fetchData() {
	  try {
	  const response = await fetch('/api'); // 等待 Promise 完成
	  return response.json(); // 相当于 Promise.resolve(response.json())
	  } catch (error) {
	  console.error(error); // 相当于 Promise.reject(error)
	  }
	  }
	  ```
	  
	  **关键点：**
- `async/await` **底层仍然是 Promise**，只是写法更直观。
- `await` **只能在 `async` 函数中使用**，否则会报语法错误。
- `async/await` **错误处理更自然**（用 `try/catch` 代替 `.catch()`）。  
  
  ---
- ### **如何取消一个正在执行的 Promise？**  
  
  **原生 Promise 无法直接取消**，只能通过外部变量忽略结果。可以通过以下方式模拟取消效果：
- #### **方法 1：利用标志变量（简单版）**  
  ```javascript
  function cancellablePromise(fn) {
  let isCancelled = false;
  
  const promise = new Promise(async (resolve, reject) => {
    try {
      const result = await fn();
      if (!isCancelled) resolve(result); // 未被取消时才返回结果
    } catch (error) {
      if (!isCancelled) reject(error);
    }
  });
  
  return {
    promise,
    cancel: () => { isCancelled = true; }, // 调用 cancel() 终止
  };
  }
  
  // 使用示例
  const { promise, cancel } = cancellablePromise(() => fetch('/api'));
  promise.then(data => console.log(data)).catch(err => console.log(err));
  cancel(); // 取消 Promise（不会真正终止请求，但会忽略结果）
  ```
- #### **方法 2：使用 AbortController（适用于 fetch）**  
  适用于需要真正终止网络请求的场景（如 `fetch` 或 `axios`）：  
  ```javascript
  async function fetchWithCancel(url) {
  const abortController = new AbortController();
  const promise = fetch(url, { signal: abortController.signal });
  
  return {
    promise,
    cancel: () => abortController.abort(), // 真正终止请求
  };
  }
  
  // 使用示例
  const { promise, cancel } = fetchWithCancel('/api');
  promise
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') console.log('请求被取消');
    else console.error('其他错误', err);
  });
  
  cancel(); // 触发 AbortError
  ```
- ## 手写promise
- 下面是一个简化版但符合核心规范的 `Promise` 实现，包含基本功能：
	- `then` 方法链式调用
	- 状态管理（`pending`/`fulfilled`/`rejected`）
	- 异步回调处理
	- 错误捕获
	- ```javascript
	  class MyPromise {
	    value;
	    err;
	    status = "pending";
	    fulfilledCallbacks = [];
	    rejectCallbacks = [];
	  
	    constructor(executor) {
	      const resolve = (value) => {
	        if (this.status !== "pending") return;
	        this.status = "fulfilled";
	        this.value = value;
	        this.fulfilledCallbacks.forEach((func) => {
	          func();
	        });
	      };
	  
	      const reject = (err) => {
	        if (this.status !== "pending") return;
	        this.err = err;
	        this.status = "rejected";
	        this.rejectCallbacks.forEach((func) => {
	          func();
	        });
	      };
	  
	      try {
	        executor(resolve, reject);
	      } catch (e) {
	        reject(e);
	      }
	    }
	  
	    then = (onfulfilled, onReject) => {
	      const _onFulfilled =
	        typeof onfulfilled === "function" ? onfulfilled : (value) => value;
	      const _onReject =
	        typeof onReject === "function"
	          ? onReject
	          : (err) => {
	              throw err;
	            };
	  
	      return new MyPromise((resolve, reject) => {
	        if (this.status === "fulfilled") {
	          queueMicrotask(() => {
	            try {
	              const res = _onFulfilled(this.value);
	              resolve(res);
	            } catch (e) {
	              reject(e);
	            }
	          });
	        }
	        if (this.status === "rejected") {
	          queueMicrotask(() => {
	            try {
	              const res = _onReject(this.value);
	              reject(res);
	            } catch (e) {
	              reject(e);
	            }
	          });
	        }
	  
	        if (this.status === "pending") {
	          this.fulfilledCallbacks.push(() => {
	            queueMicrotask(() => {
	              try {
	                const res = _onFulfilled(this.value);
	                resolve(res);
	              } catch (e) {
	                reject(e);
	              }
	            });
	          });
	          this.rejectCallbacks.push(() => {
	            queueMicrotask(() => {
	              try {
	                const res = _onReject(this.err);
	                resolve(res);
	              } catch (e) {
	                reject(e);
	              }
	            });
	          });
	        }
	      });
	    };
	  
	    catch = (onreject) => {
	      return this.then(null, onreject);
	    };
	  }
	  
	  ```