---
title: claude 入门技巧（WIP）
date: 2026-04-02
category: AI
tags:
  - AI
---

<!-- more -->

# claude 入门技巧


## 实用指令

- /context: 看看 Claude 还有多少「脑容量」
- /compact：给 Claude 减负
- /clear：彻底清空对话
- /resume: 恢复对话

### `/powerup`

官方上手演示教程，[参考](https://mp.weixin.qq.com/s/tO15UKQG0WtTBTNz8QLQjQ) 


### `/branch` 

类似git的分支管理策略，在想保留当前会话上下文，探索不同的可能性时使用，[参考](https://www.51cto.com/aigc/11149.html)

### `/remind` 或者连按两下`esc`

菜单会显示一个时间线，列出 Claude 最近做的每一次操作，选择要回滚到哪一步，Claude Code 就会自动把代码恢复到那个状态。

注意：
- 这两种方式回滚的不仅仅是文件内容，对话上下文也会一起回滚。
- 只能回滚 Claude 直接创建或编辑的文件。比如 `npm install` 生成的lock文件无法回滚

### `/effort`

调节 Claude 的「思考努力等级」，也就是它在回答之前愿意花多少算力去推敲问题

### `ultrathink`

临时顶到最高档，用完恢复到之前 `/effort` 的层级

## 后台运行

大白话说

```
请帮我在后台运行 npm run build，跑完了告诉我结果。
```

### 查看后台任务

```bash
/tasks
```

## claude.md

CLAUDE.md 是一个放在你项目根目录的文件，Claude Code 每次启动的时候都会自动读取这个文件的内容，把它当作理解你项目的「背景资料」。

**怎么创建**？最简单的方式是用 /init 命令

### 层级

-   **项目级**：放在项目根目录的 `CLAUDE.md`（或者 `.claude/CLAUDE.md`），只在这个项目里生效。适合写项目相关的信息，比如技术栈、目录结构。这个文件可以提交到 Git 里，团队成员共享。

-   **个人项目级**：`CLAUDE.local.md`，也放在项目根目录，但通常加到 `.gitignore` 里不提交。适合写你自己的临时调试偏好、sandbox 地址这种「只有我用」的内容，不会干扰到队友。

-   **用户级**：放在你 home 目录下的 `~/.claude/CLAUDE.md`，在所有项目里都生效。适合写你个人的通用偏好，比如「请用中文回复」「代码注释用英文」。


## 用 permissions 规则屏蔽敏感文件

还有一种情况：你的项目里可能有一些文件，你永远不想让 Claude 看到，比如含密钥的配置文件、日志、临时文件等等。

这时候可以在 .claude/settings.json 里用 permissions.deny 规则把这些路径挡住：

```json
{
  "permissions": {
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  }
}
```
配上之后，Claude 哪怕想去读这些文件，也会被规则拦下来，不会浪费上下文去看没用的东西，更不会意外把敏感信息塞进对话里。

## mcp

`claude mcp list`：查看所有的 MCP

### 安装

1. **用**`claude mcp add`**命令（推荐）**

直接在终端里跑一条命令就行，连 JSON 都不用动。命令的基本格式是这样：

```
claude mcp add <名字> -- <启动 MCP server 的命令>

```

中间那个 `--` 是分隔符，告诉 Claude Code「双横杠前面的是给 claude 的参数，后面的是用来启动 MCP server 的命令」。

2. 手动改 setting.json 文件,e.g.

```json
{
  "mcpServers": {
    "你给这个 server 起的名字": {
      "command": "npx",
      "args": ["-y", "对应的 MCP server 包名"],
      "env": {
        "需要的API密钥": "你的值"
      }
    }
  }
}
```



## vibe coding·

vibe coding 工作流参考：https://zhuanlan.zhihu.com/p/2005788208315782343

## 常见问题

### 更新失败

**现象：**

1. 执行 `claude update` 报错，提示版本超时 `timeout 30000ms`，配置VPN也不行
2. 重新 npm install -g，安装成功，但是 claude -v 版本依然是之前的

**原因：环境信息**

- claude 路径：`which claude` 显示 `/Users/ych/.local/bin/claude`
- 本机 Node 由 **nvm** 管理（v20.20.1）
- 关键点：**Claude 自带独立运行时，不依赖 nvm / 本地 Node**

访问官方更新地址网络超时、被限制，Claude 不走 nvm 环境，独立网络请求，国内直连更新源不通

**解决办法：**

**方法 1:**

1. 不用纠结 nvm、不用改 Node 版本
2. 直接重装覆盖升级（最简单有效）
```bash
curl -fsSL https://claude.ai/install.sh | bash
```
3. 验证版本
```bash
claude -v
```

**方法 2:**

终端先开启本地代理，再执行更新：
```bash
export HTTP_PROXY=http://127.0.0.1:7897
export HTTPS_PROXY=http://127.0.0.1:7897
claude update
```




## 参考文章

[1] [Claude Code 的 /branch 能让你从同一个起点同时探索多条解决方案路径](https://www.51cto.com/aigc/11149.html)
[2] [/powerup 演示](https://mp.weixin.qq.com/s/tO15UKQG0WtTBTNz8QLQjQ)
[3] []()