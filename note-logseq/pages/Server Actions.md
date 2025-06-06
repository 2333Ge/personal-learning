- [Server Actions](https://react.dev/reference/rsc/server-actions) 是在服务器上执行的**异步函数**。它们可以在服务器组件和客户端组件中调用。
- ## 约定
- 服务器组件可以使用内联函数级别或模块级别的 `"use server"` 指令。要内联 Server Action，请在函数体顶部添加 `"use server"`
  ```
  async function create() {
      'use server'
      // Mutate data
    }
  ```
  ==注意：内联函数写法只能在服务器组件使用==
- 要在客户端组件中调用 Server Action，请创建一个新文件并在其顶部添加 `"use server"` 指令。
  ```
  'use server'
   
  export async function create() {}
  ```
- ## 行为
- Server Actions 的参数和返回值必须可以被 React 序列化。有关[可序列化参数和值](https://zh-hans.react.dev/reference/rsc/use-server#serializable-parameters-and-return-values)的列表，请参阅 React 文档。
- Server Actions 与 Next.js [缓存和重新验证](https://nextjscn.org/docs/app/deep-dive/caching)架构集成。==含义？比如nextjs内置的判断是否是客户端调用的逻辑？==
- Server Actions 从它们所使用的页面或布局继承[路由段配置](https://nextjscn.org/docs/app/api-reference/file-conventions/route-segment-config)
  ==含义？例如设置`maxDuration`为5秒，对应server action 超时时间也为5秒吗==
- Server Actions 从它们所使用的页面或布局继承[运行时](https://nextjscn.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes)。
- 在幕后，actions 使用 `POST` 方法，并且只有这种 HTTP 方法可以调用它们。
- [其他](https://nextjscn.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#%E8%A1%8C%E4%B8%BA)...
- ## 错误处理
- 当抛出错误时，它将被客户端上最近的 `error.js` 或 `<Suspense>` 边界捕获
- ## 安全性
- **安全的 action ID：** Next.js 创建加密的、非确定性 ID，允许客户端引用和调用 Server Action。这些 ID 会在构建之间定期重新计算，以增强安全性。
- **死代码消除：** 未使用的 Server Actions（由其 ID 引用）会从客户端捆绑包中移除，以避免第三方公开访问。
- ## 其他
- 服务器函数**专为更新服务器端状态的变更而设计**，不建议用于数据获取。因此，实现服务器函数的框架通常一次只处理一个 Action，没有缓存返回值的方式。==如此获取接口数据不建议吗？==
-