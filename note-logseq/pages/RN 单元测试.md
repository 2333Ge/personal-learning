- https://www.doubao.com/chat/38425880449810690
- # React Native 组件库单元测试：核心测什么？
  React Native（RN）组件库**单元测试**，核心是**只针对单个组件的渲染、交互、边界情况做自动化验证**，不依赖后端、不依赖其他页面，确保组件稳定、符合预期、改代码不破坏原有功能。
- ## 一、核心测试内容（必测项）
- ### 1. 基础渲染测试（最基础）
  验证组件**能不能正常渲染出来**、渲染结构是否正确。
- 组件挂载不崩溃、不报错
- 渲染出预期的元素（文本、按钮、图片、子组件）
- 不传 props 时，默认渲染正常
  
  **示例**：测试 Button 组件是否渲染出文字、是否存在可点击元素。
  
  ---
- ### 2. Props 测试（核心）
  组件的**灵魂是 Props**，必须测不同 props 下的表现：
- 必传 props：不传是否抛出合理错误
- 可选 props：传/不传，渲染结果符合预期
- 不同值的 props：
	- 类型：`string/number/boolean/array/object`
	- 状态：`disabled/loading/active/size`
	- 自定义：`style/className/text`
	  
	  **示例**：
- `disabled={true}` → 按钮不可点击、样式变灰
- `loading={true}` → 显示加载图标、隐藏文字
- `size="large"` → 样式尺寸变大
  
  ---
- ### 3. 事件/交互测试（必测）
  测用户**点击、输入、滑动、长按**等交互是否正常触发回调。
- 点击按钮 → `onPress` 被调用
- 输入框输入 → `onChangeText` 拿到正确值
- 禁用状态 → 交互不触发
- 自定义事件（如下拉关闭、弹窗确认）触发正常
  
  **示例**：模拟点击 Button，断言 `onPress` 执行了 1 次。
  
  ---
- ### 4. 样式/UI 表现测试
  RN 组件样式是核心，测**样式是否符合预期**：
- 动态样式：根据 props 切换样式（禁用、选中、大小）
- 内联样式/StyleSheet 样式正确应用
- 宽高、颜色、对齐、边距、显示/隐藏
  
  > 注意：RN 单元测试**不截图对比**（那是 E2E/视觉回归测试），而是**断言样式对象的值**。
  
  ---
- ### 5. 状态管理测试（组件内部 state）
  测组件自身 `useState`/`useReducer` 状态变化：
- 点击切换开关 → 状态反转
- 输入内容 → 内部状态更新
- 定时器/动画状态正确（如倒计时、折叠展开）
  
  ---
- ### 6. 边界/异常情况测试（防坑）
  测极端场景，避免线上崩溃：
- 空数据：`text=""`、`list=[]`
- 非法值：`null/undefined/0`
- 超长文本：是否自动换行、不溢出
- 快速重复点击：不重复触发
- 嵌套/组合使用：和其他组件混用不报错
  
  ---
- ### 7. 暴露方法/Ref 测试（高阶组件）
  如果组件支持 `ref` 暴露方法（如滚动到底部、聚焦输入框）：
- 调用 ref 方法 → 执行预期逻辑
- 方法参数正确、返回值正确
  
  ---
- ## 二、绝对**不测**的内容（区分单元测试）
  这些不属于组件库单元测试，是其他测试范畴：
  1. **后端接口、网络请求**（那是 API 测试/集成测试）
  2. **页面跳转、路由**（集成测试）
  3. **多组件联动的业务流程**（E2E 测试）
  4. **真机视觉还原、截图对比**（视觉回归测试）
  5. **性能、内存泄漏**（性能测试）
  
  ---
- ## 三、RN 组件库测试常用工具
- **Jest**：测试运行器 + 断言库
- **@testing-library/react-native**：RN 官方推荐测试库（专注用户行为，不测内部实现）
- **react-test-renderer**：渲染组件为 JSON 结构，做快照测试
  
  ---
- ## 四、极简测试示例（Button 组件）
  ```jsx
  // Button.test.js
  import { render, fireEvent } from '@testing-library/react-native';
  import Button from './Button';
  
  // 1. 测基础渲染
  test('渲染默认按钮文字', () => {
  const { getByText } = render(<Button text="确认" />);
  expect(getByText('确认')).toBeTruthy();
  });
  
  // 2. 测 Props：禁用状态
  test('disabled 时不可点击', () => {
  const onPress = jest.fn();
  const { getByText } = render(<Button text="确认" disabled onPress={onPress} />);
  
  fireEvent.press(getByText('确认'));
  expect(onPress).not.toHaveBeenCalled(); // 点击不触发
  });
  
  // 3. 测交互：点击触发事件
  test('点击按钮触发 onPress', () => {
  const onPress = jest.fn();
  const { getByText } = render(<Button text="确认" onPress={onPress} />);
  
  fireEvent.press(getByText('确认'));
  expect(onPress).toHaveBeenCalledTimes(1);
  });
  ```
  
  ---
- ### 总结
  RN 组件库单元测试 = 测**单个组件**的：
  1. ✅ 能否正常渲染
  2. ✅ Props 各种情况
  3. ✅ 交互/事件是否触发
  4. ✅ 动态样式是否正确
  5. ✅ 边界值/异常不崩溃
  6. ✅ 内部状态/暴露方法
  
  核心目标：**组件改代码不翻车、提供给业务使用时稳定可靠**。
- ### 单元测试会遇到什么问题
- 原生组件报错（View/Text/Image 找不到、样式报错）
	- mock
- 快照匹配不上
	- 一些随机属性需要忽略
	- 自定义 **快照序列化器**
	  ```javascript
	  module.exports = {
	    test(val) {
	      return typeof val === 'number' && !Number.isInteger(val);
	    },
	    serialize(val) {
	      return Math.round(val).toString(); // 自动四舍五入成整数
	    },
	  };
	  ```
- 定时器、动画、延迟渲染测试超时
  
  **问题**：`setTimeout`、动画执行导致用例超时
  
  **解决**
  
  ```
  jest.useFakeTimers();
  jest.runAllTimers(); // 直接走完定时器
  jest.useRealTimers();
  ```
-