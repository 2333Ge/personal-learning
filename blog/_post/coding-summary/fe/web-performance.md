---
title: 网页性能优化
date: 2023-11-17
category: FE
tags:
  - FE
  - performance
---

<!-- more -->

## 网页性能测试

- 使用 [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview?hl=zh-cn) 测试

## 性能的一般注意事项

1. 减少重定向：即使是跨域重定向，也需要注意是否存在多次重定向，如： http => https、到站内又触发同源重定向等
2. 缓存HTML响应
   1. 较短的生命周期，能减少请求数量，且确保能定期更新
   2. 使用`ETag`、`Last-modified`请求头，但是注意重新验证资源新鲜度本身也会消耗网络资源
> 每当资源发生变化时，都必须生成新的 `ETag` 值。在后续请求中，浏览器会通过 [`If-None-Match` 请求标头](https://developer.mozilla.org/docs/Web/HTTP/Headers/If-None-Match)发送 `ETag` 值。如果服务器上的 `ETag` 与浏览器发送的资源匹配，服务器将做出 `304 Not Modified` 响应，浏览器将使用缓存中的资源。虽然这仍然会导致网络延迟，但 `304 Not Modified` 响应比整个 HTML 资源要小得多
3. 衡量服务器响应时间：静态网页TTFB通常更低，但客户端提取数据的环境不可预测，最大限度地减少客户端工作量通常有助于提高以用户为中心的指标
4. 压缩：压缩 HTML、JavaScript、CSS 和 SVG 图片，缩减通过网络传输的数据量。
   1. 尽可能使用 Brotli
   2. 文件大小至关重要
   3. 了解动态压缩与静态压缩
5. 内容分发网络（CDN）：[内容分发网络 (CDN)](https://web.dev/articles/content-delivery-networks?hl=zh-cn) 是一个分布式服务器网络，从您的源服务器缓存资源，进而从物理上距离用户更近的边缘服务器传送资源。由于靠近用户的物理位置可以缩短[往返时间 (RTT)](https://en.wikipedia.org/wiki/Round-trip_delay)，而 HTTP/2 或 HTTP/3、缓存和压缩等优化技术可让 CDN 更快地提供内容（与从源服务器提取内容相比）。在某些情况下，使用 CDN 可以显著改善您网站的 TTFB。

## 优化资源加载

HTML资源中影响网页加载时间的一些概念：渲染阻塞、解析器屏蔽、预加载扫描程序。

**渲染阻塞**： CSS 是一种阻塞渲染的资源，因为它会在构建 [CSS 对象模型 (CSSOM)](https://developer.mozilla.org/docs/Web/API/CSS_Object_Model) 之前阻止浏览器渲染任何内容。浏览器会阻止呈现，以防止出现[无样式内容闪烁 (FOUC)](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)，这从用户体验的角度来看是不可取的。

**解析器屏蔽**：解析器阻止资源会中断 HTML 解析器，例如没有 `async` 或 `defer` 属性的 `<script>` 元素。当解析器遇到 `<script>` 元素时，浏览器需要先评估并执行脚本，然后才能继续解析 HTML 的其余部分。这是特意设计的，因为在 DOM 构建过程中，脚本可能会修改或访问 DOM。

**预加载扫描程序**：一种浏览器优化功能，它采用辅助 HTML 解析器的形式，可扫描原始 HTML 响应，以便先找到资源并进行推测性提取，然后再让主要 HTML 解析器发现这些资源。例如，预加载扫描程序允许浏览器开始下载 `<img>` 元素中指定的资源，即使在提取和处理 CSS 和 JavaScript 等资源时 HTML 解析器遭到阻止，也是如此。

为了充分利用预加载扫描器，关键资源应包含在服务器发送的 HTML 标记中。预加载扫描程序无法发现以下资源加载模式：

-   由 CSS 使用 `background-image` 属性加载的图片。这些图片引用位于 CSS 中，并且预加载扫描器无法发现这些引用。
-   动态加载的脚本，采用 `<script>` 元素标记的形式，使用 JavaScript 或使用[动态 `import()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/import) 加载的模块注入 DOM。
-   使用 JavaScript 在客户端上呈现的 HTML。此类标记包含在 JavaScript 资源的字符串中，预加载扫描程序无法发现此类标记。
-   CSS `@import` 声明。

### CSS 优化

1. 缩减CSS文件大小
2. 移除未使用的CSS
<!-- 项目似乎有优化空间 -->


## 参考资料

[1] [web.dev “性能”课程](https://web.dev/learn/performance/welcome?hl=zh-cn)