---
title: AI 术语
date: 2026-04-11
category: 
tags:
  - AI 术语
---

<!-- more -->

# AI 术语

## 基础模型概念

### LLM（大语言模型）
Large Language Model - 通过在海量文本上训练得到的深度学习模型，能理解和生成自然语言

### Token
文本的最小单位，通常是一个词或子词。模型处理的是 token 流，而非原始字符。AI 计费通常以 token 为单位

### Context Window（上下文窗口）
模型一次能处理的最大 token 数。如 Claude 3.5 Sonnet 支持 200K token，决定了能输入多长的文本

### Knowledge Cutoff（知识截止日期）
模型训练数据的最后日期。超过这个日期的信息模型无法了解。是模型局限性的重要标志

### Multimodal（多模态）
模型能处理多种类型的输入（文本、图像、音频等），而不仅仅是文本

## 训练与优化

### Fine-tuning（微调）
在特定任务数据上对预训练模型继续训练，使其适应特定领域/任务。产生原因是通用模型性能不足，需要定制化

### Few-shot Learning / Zero-shot Learning
用少量或无示例来完成任务。Zero-shot 是利用模型的泛化能力直接处理未见过的任务

### Chain of Thought（思维链）
让模型逐步推理而不是直接给出答案。2023 年提出，通过这种引导方式显著提升复杂推理能力

### RLHF（强化学习反馈训练）
Reinforcement Learning from Human Feedback - 用人类评分来优化模型输出，让模型更符合人类偏好。解决了"模型很聪明但输出不讨喜"的问题

### Prompt Engineering（提示词工程）
通过精心设计输入提示来改进模型输出的技术。是 LLM 时代新兴的技能，因为相比传统编程，提示词对输出影响巨大

### System Prompt / User Prompt
System Prompt 设定模型行为和角色，User Prompt 是用户具体的请求。分离的原因是需要独立控制模型的通用行为和每次请求的具体任务

### Streaming（流式输出）
模型边生成边返回结果，而非等完全生成后再返回。改善用户体验（不用等待），也降低首 token 延迟

## 向量与检索

### Embedding（向量嵌入）
将文本转换为高维向量，使含义相近的文本向量距离更近。是语义搜索的基础

### Vector DB（向量数据库）
存储和查询向量的专用数据库（如 Pinecone、Weaviate）。产生原因是传统数据库无法高效处理向量相似度查询

### RAG（检索增强生成）
先从知识库检索相关文档，再基于这些文档生成答案。解决了"模型知识过时"和"幻觉"问题，是企业应用的标配

### Hallucination（幻觉）
模型编造信息或给出不符合事实的答案。LLM 的经典问题，因为模型是基于概率生成文本，不能保证真实性

## 智能体与工作流

### Agent（智能体）
能自主决策、调用工具、执行任务的 AI 系统。区别于简单的 LLM 调用，agent 有推理能力和迭代能力

### Subagent（子智能体）
为了让 Agent 更专注、上下文更干净而创建的专门化智能体。每个 subagent 只处理特定领域的任务，独立维护上下文，避免上下文污染和能力混淆。如 Claude Code 中的 Explore agent、Plan agent 等

### Skill（技能）
Agent 能调用的特定功能或工具集合。如 Claude Code 的 /commit、/loop 等

### Tool Calling / Function Calling
模型调用外部函数或工具的能力。使 LLM 不再仅限文本生成，能执行实际操作（查询数据库、调用 API 等）

### MCP（Model Context Protocol）
模型上下文协议，用于在客户端和服务器间标准化共享上下文和工具。Anthropic 定义的开放标准

### Orchestration（智能体编排）
协调多个 agent 或 subagent 的执行流程。类似工作流编排，但对象是智能体而非简单任务

### Workflow / Chain（工作流/链）
将多个步骤或模型调用串联起来。Chain 通常指序列执行，Workflow 可以包含分支和循环逻辑

### Reflection（反思）
Agent 在执行后检查结果，判断是否正确或需要改进。增强了 agent 的自我纠错能力

## 工程与框架

### LangChain / LangGraph
AI 应用框架。LangChain 提供链式调用的抽象，LangGraph 提供有状态的工作流编排（如 workflow 中的循环、分支逻辑）

### Memory（记忆）
AI 系统保存和检索历史信息的机制。包括短期记忆（会话历史）和长期记忆（向量数据库、外部存储）

## 模型能力参数

### Temperature（温度）
控制模型输出的随机性。低温（如 0.1）输出稳定，高温（如 0.9）输出多样化

### Top-p / Top-k
采样策略参数。Top-k 从最高概率的 k 个词中采样，Top-p 从累计概率达到 p 的词中采样。用于平衡多样性和质量

## 应用指标

### Latency（延迟）
模型返回第一个 token 的时间和总体响应时间。影响用户体验

### Throughput（吞吐量）
单位时间内处理的请求数或 token 数。影响成本和可扩展性

### Cost Per Token
调用模型的成本单价。输入和输出 token 价格通常不同

### Batch Processing（批处理）
一次处理多个请求，提高 token 利用率，降低成本。相比流式调用更便宜但延迟更高

### Prompt Caching（提示词缓存）
缓存重复出现的上下文或系统提示，减少重复计算和成本。解决了长上下文场景的成本问题

### Structured Output（结构化输出）
模型生成 JSON/schema 规范的输出，而不是自由文本。便于程序处理

## 基础理论

### Transformer（Transformer 架构）
现代 LLM 的基础架构。2017 年论文"Attention is All You Need"提出，革命性地改进了 NLP 的性能

### Attention Mechanism（注意力机制）
Transformer 的核心，让模型关注输入中最重要的部分。理论上能处理长距离依赖

### Tokenizer（分词器）
将原始文本转换为 token 的工具。不同模型的 tokenizer 不同，影响 token 计数

### Inference（推理）
运行已训练模型生成预测或输出的过程。区别于 training（训练）