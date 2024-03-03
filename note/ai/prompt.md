---
title: 如何写好Prompt
date: 2024-02-05
category: ai
tags:
  - ai
---

<!-- more -->

## 资料

https://www.promptingguide.ai/zh/

- 提供样本

## **链式思考**

提示中间推理步骤

输入：
```
这组数中的奇数加起来是偶数：4、8、9、15、12、2、1。
A：将所有奇数相加（9、15、1）得到25。答案为False。
这组数中的奇数加起来是偶数：15、32、5、13、82、7、1。
A：
```

输出：
```
将所有奇数相加（15、5、13、7、1）得到41。答案为False。

```

零样本也可提示中间推理步骤

```
我去市场买了10个苹果。我给了邻居2个苹果和修理工2个苹果。然后我去买了5个苹果并吃了1个。我还剩下多少苹果？
让我们逐步思考。
```

## 生成知识提示

> https://www.promptingguide.ai/zh/techniques/knowledge

LLM在执行需要更多关于世界的知识的任务时有局限性

## 提示函数

像写函数一样对话

以下是最终调用，定义过程见[文档](https://www.promptingguide.ai/zh/applications/pf)
```
trans_word('婆罗摩火山处于享有“千岛之国”美称的印度尼西亚. 多岛之国印尼有4500座之多的火山, 世界著名的十大活火山有三座在这里.')
fix_english('Finally, you can run the function independently or chain them together.')
fix_english(expand_word(trans_word('婆罗摩火山处于享有“千岛之国”美称的印度尼西亚. 多岛之国印尼有4500座之多的火山, 世界著名的十大活火山有三座在这里.')))
```

## 在LLM中调用函数

函数调用指可靠地连接LLM与外部工具的能力。让用户能够使用高效的外部工具、与外部API进行交互。