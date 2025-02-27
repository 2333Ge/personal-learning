---
title: 自用 Prompts
date: 2024-07-02
category: AI
tags:
  - AI
---

<!-- more -->

## My Prompts

### 通用技巧

为什么这么写见[如何写好Prompt](./better-prompt.md)

**完善问题：**

```shell
接下来我将提供一个问题，你先不要着急回答，为了质量更高的答案，我还需要补充哪些信息？
问题：【】
```

**了解底层逻辑：**

```shell
这个问题的底层逻辑是什么
```

```shell
这个底层逻辑在什么情况下不成立，是否有例外？
```

**Prompt逆向工程：**

```shell
你是一个专业的 Prompt 逆向工程师，擅长通过分析文本内容反推出生成该文本的可能 Prompt。请根据以下文本内容，推测并生成最有可能用于生成该文本的 Prompt。

**文本内容：**
[在此处插入需要分析的文本]

**任务要求：**
1. 分析文本的核心特征，包括主题、语气、结构、关键词和风格。
2. 推测生成该文本的可能 Prompt，尽量还原原始 Prompt 的意图和结构。
3. 如果文本中有特定格式或要求（如列表、对话、代码等），请在推测的 Prompt 中明确体现。
4. 如果文本中包含专业术语或特定领域的知识，请在推测的 Prompt 中注明相关领域或背景。
5. 生成的 Prompt 应尽量简洁、清晰，同时确保能够生成与原文高度相似的文本。

**输出格式：**
推测的 Prompt：
- 目标： [简要描述生成文本的目标]
- 内容要求： [列出生成文本需要包含的关键点]
- 语气和风格： [描述文本的语气和风格]
- 其他要求： [如有特殊格式或领域知识，请注明]
```

### 开发

```shell
由以下JSON schema 生成满足mock.js语法的mock数据，给我JSON数据即可
---

---
```

### 力扣

题目：

```shell
leetcode题目【】信息，要求：
1. 只给我题目，不给我解答
```

提示：

```shell
leetcode题目【】，给我解题思路，要求：
1. 不用告诉我答案，包括伪代码
2. 提示不用太多，仅提示关键信息
```

答案:

```shell
leetcode题目【】，给我解答，要求：
1. 编程语言使用JS
2. 如果有多种解法，都给出
3. 不用考虑我已经给出的代码
4. 不用对原题目进行说明
```



### 面试

```shell
从前端面试的角度讲讲【】中面试官可能提出的问题，列举12个，仅说问题即可
```

```shell
从前端面试的角度讲讲【】问题
```

## 参考资料

- [1] [提示词工程指南](https://www.promptingguide.ai/zh/)
- [2] [少数派：Deepseek 教我的法则：不是要「会提问」，而是要「早动手」](https://sspai.com/post/96150)
- [3] [ChatGPT 技巧 | Prompt 逆向工程](https://zhuanlan.zhihu.com/p/617524191)

