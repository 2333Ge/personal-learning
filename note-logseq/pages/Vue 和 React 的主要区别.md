- | 特性 | Vue | React |
  | ---- | ---- | ---- |
  | 核心思想 | 模板驱动，响应式系统 | 全部用 JS，状态驱动 UI |
  | 数据绑定 | 双向绑定（v-model） | 单向数据流（props → child） |
  | 响应式系统 | 基于 Proxy（Vue 3） | 手动设置（useState/useEffect） |
  | 模板语法 | HTML + 指令（如 `v-if`, `v-for`） | JSX |
  | 状态管理 | Vuex / Pinia | Redux / Zustand / Context |
- Vue 偏向于更易上手的声明式开发，模板语法 + 响应式数据带来较低的学习曲线；React 更偏向函数式与组合式，通过 Hooks 和状态提升来控制组件行为，适合构建高度可定制的 UI 架构。
- ## Vue和 MobX 对比
- Vue 的响应式系统和 MobX 非常像，都是通过自动依赖收集和响应式触发机制来实现“数据驱动视图”
  
  
  | 特性 | Vue 3（Composition API） | MobX |
  | ---- | ---- | ---- |
  | 响应式数据 | `reactive`, `ref` | `observable` |
  | 依赖收集机制 | 自动追踪依赖 | 自动追踪依赖 |
  | 追踪方式 | 基于 `Proxy` + `effect()` | 基于 getter/setter + `autorun` |
  | 响应式计算 | `computed(() => ...)` | `computed(() => ...)` |
  | 副作用函数 | `watchEffect`, `watch` | `autorun`, `reaction` |
  | 无需手动订阅 | ✅ | ✅ |