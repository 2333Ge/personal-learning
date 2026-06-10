- 概述
  | 阶段 | 关键过程 |
  | ---- | ---- | ---- |
  | 调度（Scheduling） | `setState` 被排入队列，React 批量处理更新，非立即执行 |
  | 渲染（Render） | 重新执行组件渲染函数，生成新 [[Fiber]] 树 |
  | Diff 比较 | 新旧树比对，找出差异节点，生成 effects 列表 |
  | Commit 操作 | 将 effects 应用到真实 DOM，执行生命周期和 `useEffect` 副作用 |
- ### 说法1
- 调度阶段
	- React 给这次更新分配**优先级**（比如用户输入高优先级，网络请求低优先级）
	- 加入优先级任务队列
	- 使用时间切片机制决定何时开始更新
- 渲染阶段
	- 执行函数组件或类组件的 `render` 方法
	- 生成新的虚拟树，一边 Diff
	- **进行 Diff / Reconciliation（协调）**
		- 比较新旧 Fiber 树（类型、key、props 等）
		- 标记出需要更新、插入、删除的节点
		- 构建 effectList（副作用链表）
- 提交阶段
	- 执行所有收集到的副作用（更新 DOM、调用生命周期、ref、effect 等）
	- 真正让用户界面变化
- ### 说法2
- #### 1. 调度阶段（Scheduler）
	- 你调用 `setState`，触发**更新请求**
	- React 给这次更新分配**优先级**（比如用户输入高优先级，网络请求低优先级）
	- 把更新任务放入**任务队列**
	- 使用**时间切片（Time Slicing）**：把大任务拆分成小单元，每执行一小段就把主线程还给浏览器，避免卡顿
- #### 2. 渲染阶段（Render Phase）——  **可中断、可恢复、不操作 DOM*
  * 这个阶段**不会修改真实 DOM**，纯内存计算。
	- 步骤：
		- 从根节点开始，**重新执行组件函数 / 类组件 render**
		- 生成**新的 Fiber 树（workInProgress 树）**
		- **Diff 协调（Reconciliation）**
			- 对比新旧 Fiber 节点：类型、key、props
			- 标记节点：更新、插入、删除、移动
		- 收集所有需要执行的副作用，生成 **effectList**（待执行清单）
	- 特点：
		- **可以被高优先级任务打断**
		- 纯计算，不更新界面
- #### 3. 提交阶段（Commit Phase）——  **同步、不可中断、真正更新界面**
  
  这是**唯一会操作 DOM** 的阶段。
- 步骤：
	- 根据 effectList **操作真实 DOM**（增删改）
	- 执行生命周期 / Hooks：
		- 类组件：`componentDidMount / DidUpdate`
		- 函数组件：`useLayoutEffect` 清理 → 回调
	- **DOM 更新完成**
	- 最后执行：`useEffect` 清理 → 回调
	  
	  界面在这一步**真正发生变化**，用户能看到更新。
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