---
title: RN 单元测试小记
date: 2023-08-28
category: react-native
tags:
  - react-native
---

<!-- more -->

## QA

### Q： react-native-testing-library、enzyme有什么区别？

enzyme 和 react-native-testing-library 都是用于测试 React 和 React Native 组件的库，但它们的测试哲学和方法有所不同。

enzyme 提供了更深入的测试能力，允许你直接访问和操作组件的实例和内部状态。这使得你可以编写更详细的单元测试，但也可能导致测试过于依赖组件的内部实现，从而降低测试的健壮性。

react-native-testing-library 的哲学是“更接近用户”，它鼓励你编写更多的功能测试，而不是单元测试。这意味着你的测试应该更多地关注组件的行为，而不是它的内部实现。


## react-native-testing-library

### Q：能测试 Native 功能吗

不能，比如 ScrollView onScroll 回调依赖于原生，用 `fireEvent.scroll` 将不会触发这个回调


