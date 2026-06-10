- https://chatgpt.com/share/6a0ae6b6-d358-83ec-86e9-57e2916607e2
- 备注： [[fiber 和 fabric]] 不同
- React Native 和 Lynx 都属于跨端方案，但不完全一样。定位：
	- React Native 更像：
		- 一个成熟的通用跨端 App 开发框架。
	- 而 Lynx 更偏：
		- 高性能 UI 渲染框架。
		- Lynx 最初其实是字节为了抖音这种高性能 Feed 场景做的。
- 架构对比
	- RN 架构
		- 旧的
			- JS 和Native 通过 JSON 序列化、异步bridge通信
			- 问题：高频通信性能、动画和列表性能影响
		- 新的
			- TurboModules、JSI、Fabric
			- 去bridge化：`JS ↔ C++ ↔ Native`
	- Lynx 架构
		- UI 不受 JS 阻塞，UI Runtime是独立的。Lynx 加载 JS 的本质是：Native 启动 JS Runtime 执行 bundle，但 JS 只负责生成 UI 描述，而 UI 渲染由独立 UI Runtime 完成，从而避免 JS 直接阻塞 UI。
		  ```javascript
		  JS Runtime
		     ↓
		  UI 描述
		     ↓
		  UI Runtime
		     ↓
		  Native UI
		  ```
		-
- 性能差异
	- RN性能瓶颈（旧的架构）
		- 序列化成本
		- 线程切换成本
		- 异步通信成本
	- RN （新架构）
		- Reanimated（worklet + JSI）可以绕过 JS
		- 但默认 UI 更新仍涉及 React commit pipeline
	- lynx
		- UI 不受 JS 阻塞，即使JS卡住，UI还能滚动、动画还能继续
- 生态
	- RN：成熟
	- Lynx:
		- 很多能力
			- 需要自己封装
			- Native 依赖更重
			- 社区规模小
- 一句话总结
  ```markdown
  React Native 是成熟的通用跨端框架，生态非常强，但早期受 Bridge 架构影响，在高频 UI 场景下容易有性能瓶颈。
  Lynx 更偏高性能 UI 框架，通过 UI Runtime 和 JS Runtime 分离，让 UI 不依赖 JS Thread，因此在 Feed、动画等场景更流畅。
  不过目前 Lynx 生态和工程成熟度还不如 RN，所以现阶段 RN 还是更主流的商业选择。
  ```
- 问题
	- 展开讲讲RN 新架构如何通过去 bridge 提高性能的
		- 一句话总结：
		  ```markdown
		  RN 新架构的性能提升，本质上是通过 JSI 把 JS Runtime 和 Native Runtime 直接连接起来，减少了传统 Bridge 的 JSON 序列化、线程切换和异步调度成本。同时 Fabric 把 UI 渲染链路更多下沉到 C++ 层，降低了 JS 参与 UI 更新的频率。
		  ```
	- Lynx UI Runtime是单独的进程吗？
		- 不是，lynx做的是职责隔离，不是进程隔离
	- lynx UI 不受 JS 阻塞难道就没有性能问题了吗
	- 展开讲讲 RN新架构，Fabric 减少 UI 往返
		- 一句话总结
		  ```markdown
		  Fabric 的核心价值是把 React Native 的 UI 渲染链路从“JS 驱动 Native UI”升级成“C++ Renderer 驱动 Native UI”。
		  它通过 C++ Shadow Tree、Mounting Layer 和 Fabric Renderer，把大量原本需要 JS ↔ Native 往返的 UI 更新逻辑下沉到 C++ 层，从而减少 Bridge 通信、JSON 序列化和线程切换成本。
		  同时它也让 React Native 更容易支持 React 18 的 Concurrent Rendering 和高性能动画场景。
		  ```
	- RN 新架构 和 React 16以上版本的联系，有C++这一层之前RN没有Fabric这一步吗
	- React 18 的 Concurrent Rendering？
-