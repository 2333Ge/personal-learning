- 概述
  | 阶段 | 关键过程 |
  | ---- | ---- | ---- |
  | 调度（Scheduling） | `setState` 被排入队列，React 批量处理更新，非立即执行 |
  | 渲染（Render） | 重新执行组件渲染函数，生成新 [[Fiber]] 树 |
  | Diff 比较 | 新旧树比对，找出差异节点，生成 effects 列表 |
  | Commit 操作 | 将 effects 应用到真实 DOM，执行生命周期和 `useEffect` 副作用 |
- 调度阶段
	- React 识别出哪些组件需要更新（如调用了 `setState`）
	- 加入优先级任务队列
	- 使用时间切片机制决定何时开始更新
- 渲染阶段
	- 执行函数组件或类组件的 `render` 方法
	- 生成新的虚拟树（React Elements）
	- **进行 Diff / Reconciliation（协调）**
		- 比较新旧 Fiber 树（类型、key、props 等）
		- 标记出需要更新、插入、删除的节点
		- 构建 effectList（副作用链表）
- 提交阶段
	- 执行所有收集到的副作用（更新 DOM、调用生命周期、ref、effect 等）
	- 真正让用户界面变化
- ## Effects 列表
- ==注意==：Effect列表并不仅仅是useEffect副作用，它包括
- ### DOM 操作类：
- `Placement`：新节点需要插入 DOM
- `Update`：已有节点需要更新（props、属性、文本等）
- `Deletion`：节点需要被从 DOM 中移除
- ### 生命周期 / ref 副作用类：
- `Ref`：需要 attach 或 detach ref
- `Passive`：用于执行 `useEffect` 的 cleanup/init
- `Layout`：用于执行 `useLayoutEffect`
- `Snapshot`：用于 `getSnapshotBeforeUpdate`
- `Lifecycle`：类组件的生命周期，如 `componentDidMount`、`componentDidUpdate`
- ## 参考资料
- [chatgpt:Reat渲染流程分析](https://chatgpt.com/share/688c948f-cef4-8012-92e1-39f9511665de)