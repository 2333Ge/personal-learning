---
title: AI 工具概览
date: 2023-10-15
category: 
tags:
  - 
---

<!-- more -->
# 工具

汇总网站 hayo：https://www.hayo.com/


**prompt汇总：**

- https://qddmercny4.feishu.cn/sheets/shtcnMklYu0WsXEDUXXanrSEB2m
- https://zl49so8lbq.feishu.cn/wiki/wikcnlmCYpKYFrH8ek1sS2ooy8d

learning prompt：https://learningprompt.wiki/docs/chatgpt-learning-path

prompt技巧：https://zhuanlan.zhihu.com/p/617524191

## 编程相关

ide: https://www.cursor.so/

copilot介绍&使用：https://nira.com/github-copilot/

copilot插件：https://githubnext.com/projects/copilot-labs/

Copilot X: https://github.blog/2023-03-22-github-copilot-x-the-ai-powered-developer-experience/
内测申请：https://github.com/github-copilot/chat_waitlist_signup/join


## 绘图相关

midjourney 平替 stable diffusion：https://www.8btc.com/article/6774458

stable diffusion 体验：https://playgroundai.com/create

百度文心一格（图片）：https://yige.baidu.com/

## 综合类

汇总: https://poe.com/
文案类：https://www.saoma.site/

### chatgpt

- openai api 官网介绍：https://platform.openai.com/docs/introduction

申请 waitlist

- https://openai.com/waitlist/plugins
- https://openai.com/waitlist/gpt-4-api

免费gpt4：https://ora.sh/openai/gpt4
平替：https://freegpt.one/

**插件系统**

https://github.com/openai/plugins-quickstart

demo：https://github.com/openai/chatgpt-retrieval-plugin
> Find an example video of a Retrieval Plugin that has access to the UN Annual Reports from 2018 to 2022 [here](https://cdn.openai.com/chat-plugins/retrieval-gh-repo-readme/Retrieval-Final.mp4)


- 介绍文章：https://mp.weixin.qq.com/s/F2CgJwTC0WUGdziKefjIZA


### claude

弱化版chatgpt：https://www.anthropic.com/product

- 介绍文章：https://mp.weixin.qq.com/s/QB85YPjh6DMBTPla4NDfXg

### new bing

跳转国内解决思路

- https://juejin.cn/post/7202531472720592951
- https://zhuanlan.zhihu.com/p/605970396

## 生产力工具&其他

gptcommit, cursor, codeium, copilot、newbing

opencat：客户端gpt工具(似乎api模式，不容易断连)，

agentgbt: https://agentgpt.reworkd.ai/   


飞书：https://github.com/ConnectAI-E/Feishu-OpenAI

ai shell: https://github.com/BuilderIO/ai-shell

https://aws.amazon.com/cn/codewhisperer/

# 相关资料

推文-ai能做的事：https://twitter.com/charliecurnin/status/1638942497983598592

ai相关论文汇总？：https://briefgpt.xyz/

LLMs：https://learnprompting.org/zh-Hans/docs/advanced_applications/mrkl

## 相关文章

「ChatGPT最强竞品」爆火：不限量不要钱免注册！一手实测体验在此：https://mp.weixin.qq.com/s/QB85YPjh6DMBTPla4NDfXg

ChatGPT 插件系统，正式上线： https://mp.weixin.qq.com/s/F2CgJwTC0WUGdziKefjIZA

GPT-5恐被叫停！马斯克、图灵奖得主等千名专家呼吁暂停超强AI研发，至少6个月：https://mp.weixin.qq.com/s/1AtPzUt0hB5ImSluET8tpA

针锋相对！为挑战GPT-4加持的Copilot X，谷歌与拒绝被微软收购的Replit联合发布编码工具：https://mp.weixin.qq.com/s/T10pBZBtWtbBei43o35E4g

爆火论文打造《西部世界》雏形：25个AI智能体，在虚拟小镇自由成长: https://mp.weixin.qq.com/s/n0I8Yisi8qNXg9qp4ic5iw

对话王小川：通用人工智能是一次文艺复兴: https://mp.weixin.qq.com/s/q3lFEPLb9NE7W6sjBxxLPg

甲小姐对话王小川：我们已经进入通用人工智能时代｜甲子光年：https://mp.weixin.qq.com/s/tlYUoqNHarwgQJMx1JNrbg

AutoGPT太火了，无需人类插手自主完成任务，GitHub2.7万星 :https://mp.weixin.qq.com/s/bV1tPc7hNn2z06YOpzyanw

最详细全文翻译！微软155页大工程首次揭示GPT-4超能力（浓缩精华版）：https://mp.weixin.qq.com/s/-MizP0JdgR5pLKDzlJYZnw

# 能用ai做什么

- 代码优化
- 让 gpt 总结需求生成 prompt
- 总结 sentry 错误规律
- 单元测试、开发文档生成
- 通过发布内容、浏览情况、社交网络生成人物画像
- 代码review + 性能分析
- 模拟面试

## gpt开发者领域应用

> https://twitter.com/Barret_China/status/1638508262739034112


1）生成 Commit log，这是 ChatGPT 的强项，它能够快速理解逻辑和代码，通过 diff 归纳出概要，开源的工具有：https://github.com/zurawiki/gptcommit

2）生成测试用例，团队内实践下来效果相当好。虽然 Copilot 和 Tabnine 等产品在代码自动补全方面已经表现不错，但相较于 https://codeium.com 和 https://cursor.so 这些能够使用自然语言生成代码的体验，还是稍逊一筹。之所以不生成业务代码，是因为生成业务代码需要理解产品逻辑，而编写单元测试只需理解一个函数。

3）生成 API 文档和代码注释，ChatGPT 可以通过阅读代码，理解函数的输入、输出、功能以及用途，然后生成相应的 API 文档和注释，开源的工具：https://github.com/awekrx/AutoDoc-ChatGPT

4）生成 SQL，已经看到 PingCAP 发布了相关产品 chat2query，https://pingcap.com/chat2query-an-innovative-ai-powered-sql-generator-for-faster-insights/，对公司产品、运营等有数据需求但不懂数技术的岗位非常友好。

5）自动代码审查和漏洞检测，ChatGPT 可以分析代码中的潜在问题，包括代码风格不一致、程序逻辑错误或安全漏洞等。这个能力其实在 http://cursor.so 这个产品中就已经具备了，无需等到提交代码，在本地可以直接让程序先完成一轮 CR。

很多体验做出来都会让人产生 Wow~ 的感觉，利用 ChatGPT 做 toD 方向的建设，确实可以提高开发效率，减少错误，提高代码质量，对公司和开发者还是具有很大价值的。

<!-- 
# 随记

- GitHub 写blog
- gitlab、GitHub 联系与区别
- prompt 
- 知乎、推特、微博、微信公众号侧重点


-  -->