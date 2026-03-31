---
title: 互联网 / 开发 / 工作术语
date: 2021-01-01
category: Wiki
tags:
  - Wiki
---

# 互联网 / 开发 / 工作术语

## 开发名词

- dsl(domain-specific language): 同时具备描述能力和逻辑能力的语言[1][2]。
- CI/CD(Continuous Integration/Continuous Delivery): 持续集成/持续交付/持续部署[3]，通过软件开发的持续方法，您可以持续构建、测试和部署迭代代码更改[7]
- pr(Pull Request): 和`merge request`一个意思，`merge request` gitlab 常用，拉取代码修改代码发起合并请求。
- ssr：服务端渲染
- 公钥私钥、非对称加密：非对称加密算法需要两个密钥：公开密钥（publickey:简称公钥）和私有密钥（privatekey:简称私钥）。公钥与私钥是一对，如果用公钥对数据进行加密，只有用对应的私钥才能解密。因为加密和解密使用的是两个不同的密钥[5]
- CLI（Command Line Interface）：命令行界面

## 工作名词

- ROI（Return On Investment）：投资回报率，它是指通过投资而应返回的价值，它涵盖了企业的获利目标，投资利润率。在营销场景中，一般指代营销的投资回报率/投入产出比。狭义的投入指代营销费用，广义的投入还包括公司的运维成本，给用户的补贴红包等。产出即收入，收入包括广告收入，直播收入等。

## 前端名词

### 网页性能指标

> 🔗 参考链接：https://web.dev/articles/user-centric-performance-metrics?hl=zh-cn

-   **[First Contentful Paint (FCP)](https://web.dev/articles/fcp?hl=zh-cn)**：衡量从网页开始加载到网页任何部分内容呈现在屏幕上所用的时间。
-   **[Largest Contentful Paint (LCP)](https://web.dev/articles/lcp?hl=zh-cn)**：衡量从网页开始加载到最大的文本块或图片元素在屏幕上呈现所用的时间。
-   **[First Input Delay (FID)](https://web.dev/articles/fid?hl=zh-cn)**：用于衡量从用户首次与您的网站互动（点击链接、点按按钮或使用由 JavaScript 提供支持的自定义控件）到浏览器实际能够响应此次互动所用的时间。*（[字段](https://web.dev/articles/user-centric-performance-metrics?hl=zh-cn#in_the_field)）*
-   **[Interaction to Next Paint (INP)](https://web.dev/articles/inp?hl=zh-cn)**：测量与网页进行的每次点按、点击或键盘交互的延迟时间，并根据交互次数选择页面中最差的互动延迟时间（或接近最高延迟时间）作为单个有代表性的值，以描述网页的整体响应速度。
-   **[可交互时间 (TTI)](https://web.dev/articles/tti?hl=zh-cn)**：衡量从网页开始加载到视觉呈现、其初始脚本（如有）已加载且能够快速可靠地响应用户输入的时间。*（[实验](https://web.dev/articles/user-centric-performance-metrics?hl=zh-cn#in_the_lab)）*
-   **[总阻塞时间 (TBT)](https://web.dev/articles/tbt?hl=zh-cn)**：测量 FCP 和 TTI 之间的总阻塞时间，这段时间内主线程处于阻塞状态的时间足够长，足以阻止输入响应。*（[实验](https://web.dev/articles/user-centric-performance-metrics?hl=zh-cn#in_the_lab)）*
-   **[Cumulative Layout Shift (CLS)](https://web.dev/articles/cls?hl=zh-cn)**：衡量从页面开始加载到其[生命周期状态](https://developer.chrome.com/blog/page-lifecycle-api/?hl=zh-cn)更改为隐藏之间发生的所有意外布局偏移的累计分数。
-   **[首字节时间 (TTFB)](https://web.dev/articles/ttfb?hl=zh-cn)**：测量网络使用资源的第一个字节响应用户请求所需的时间。

## URI（Uniform Resource Identifier）[6]

统一资源标志符，用于标志某一互联网资源名称的字符串，该种标志允许用户对网络中（一般指万维网）的资源通过特定的协议进行交互操作。

通用格式：

[协议名]://[用户名]:[密码]@[主机名]:[端口]/[路径]?[查询参数]#[片段ID]

eg:

```
                    hierarchical part
        ┌───────────────────┴─────────────────────┐
                    authority               path
        ┌───────────────┴───────────────┐┌───┴────┐
  abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1
  └┬┘   └───────┬───────┘ └────┬────┘ └┬┘           └─────────┬─────────┘ └──┬──┘
scheme  user information     host     port                  query         fragment

  urn:example:mammal:monotreme:echidna
  └┬┘ └──────────────┬───────────────┘
scheme              path
```

## 数据分析相关名词

- UGC(User Generated Content): 用户原创内容

## 参考文章

[1] [五分钟，科普下 dsl](https://zhuanlan.zhihu.com/p/24800713)
[2] [Android 的 gradle 用到的 DSL 语言是个什么鬼?](https://blog.csdn.net/lpjishu/article/details/72530910)
[3] [什么是CI/CD](https://linux.cn/article-9926-1.html?pr)
[4] [开发中经常提及的Pr是什么意思？](https://www.zhihu.com/question/355235592)  
[5] [百度百科-非对称加密算法](https://baike.baidu.com/item/%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95/1208652)  
[6] [维基百科-URI](https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E6%A0%87%E5%BF%97%E7%AC%A6)
[7] [gitlab:CI/CD概念](https://gitlab.cn/docs/jh/ci/introduction/)
