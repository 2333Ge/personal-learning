- React Native 本质上是：JavaScript 驱动 Native UI 的跨平台框架。
- ## 旧架构
- 结构：React → Shadow Tree → Bridge → Native
- 一句话：其中bridge 是 JS 和 Native 的异步通信层，但它依赖 JSON 序列化，存在通信开销和线程切换问题，尤其在动画、手势、高频通信场景容易掉帧。
- bridge
	- JS 和 Native 通信通道。
	  ```markdown
	  异步
	  JSON序列化
	  批量传输
	  ```
- NativeModules
	- 启动全量加载
	- Bridge 通信慢
- shadow tree
	- 介于 JS 虚拟 DOM 与原生视图树之间，核心作用是**异步计算布局、缓存视图结构、减少跨线程通信开销**。
- ## 新架构
- 一句话： JSI 去掉了传统 Bridge，实现 JS 与 Native 的直接调用；TurboModules 支持懒加载和类型安全；Fabric 则重构了渲染体系，更好支持 React 18 并发特性。
- JSI： JS Runtime 和 Native 的 C++ Host Object 绑定机制。去掉 JSON Bridge
	- 支持：
		- 同步调用
		- 更低延迟
		- 更少序列化
- TurboModules：
	- 按需加载。降低启动时间
	- 不再走 Bridge。
- Fabric：
	- ```markdown
	  React Fiber
	  → Fabric
	  → C++层
	  → Native
	  ```
	- 支持 React 18 并发能力
	- 减少线程切换
-
- ## 其他
- 引擎：
	- JavaScriptCore（早期）
	- Hermes（现在主流）
- ## 问题
- 为什么新架构要引入 C++
  
  因为：
  ```
  统一 Android/iOS
  降低通信成本
  ```
-