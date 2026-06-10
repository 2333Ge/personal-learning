- MobX 通过 `observer` 和 `observable` 两个核心概念将状态与 React UI 更新关联起来，其过程可以概括为“响应式”系统：
- 1.  **创建可观察状态 (Observable State)**：
    你使用 MobX 的 `makeObservable` 或装饰器（`@observable`）将应用的状态（如 class 属性、对象）标记为“可观察的”。MobX 会在底层代理这些状态，以便追踪它们的读写操作。
- 2.  **创建观察者组件 (Observer Component)**：
    你使用 `mobx-react-lite` 或 `mobx-react` 包提供的 `observer` 函数（或高阶组件）来包裹你的 React 组件。
- 3.  **依赖追踪 (Dependency Tracking)**：
    当一个被 `observer` 包裹的组件首次渲染时，MobX 会精确地记录下该组件的 `render` 函数中**读取**了哪些**可观察状态**。这就建立了一个订阅关系：组件订阅了它所依赖的数据。
- 4.  **状态变更与触发更新 (Mutation & Reaction)**：
    当你的代码（通常在 `action` 中）修改了某个**可观察状态**的值时，MobX 会立即知道这个变化。
- 5.  **精确的重新渲染 (Precise Re-rendering)**：
    MobX 会检查所有订阅了该状态的**观察者组件**，并通知它们需要重新渲染。由于 MobX 知道组件和数据的精确依赖关系，只有真正使用了已变更数据的组件才会被重新渲染，从而实现了高效的性能优化。
- **简单来说，流程是：**
- `observer` 组件渲染 -> 读取 `observable` 数据 -> MobX 记录依赖 -> `action` 修改 `observable` 数据 -> MobX 通知 `observer` 组件 -> 组件重新渲染。