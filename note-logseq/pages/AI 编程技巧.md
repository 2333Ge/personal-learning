- 输出不一定非要用 markdown 采用多种形式，比如 HTML，[参考](https://x.com/dotey/status/2052929093461528903)
	- 优点：
		- 信息密度更高
		- 人机协同感更强,视觉清晰、易读性高：基本不会去读超过 100 行的 Markdown 文件
		- 方便分享：html可以再很多地方直接展示
		- 双向交互：直接进行互动查看新的效果
	- 缺点：
		- 输出更耗token
		- 难以版本控制，最大痛点之一，diff 难以review
		- 生成速度更慢
- 多个方案同时生成，交叉认证
	- subagent
	- 对话的形式
- 上下文腐化问题：
	- 把开发流程拆解成多个组件，让 AI 在不同角色间分工协作
		- 比如在 [Everything Claude Code](https://javaguide.cn/ai-coding/programmer-essential-skills.html#everything-claude-code) 中
		  | **Agents** | 分工的子智能体，比如规划、架构、TDD、代码审查 |
		  | **Skills** | 封装好的工作流，像 TDD 方法论、后端开发经验 |
		  | **Hooks** | 自动执行的任务，改完代码自动检查有没有遗留的调试日志 |
		  | **Rules** | 全局生效的开发规范 |
		  | **Commands** | 斜杠命令，`/tdd` 跑测试、`/code-review` 审查代码 |
- 各个阶段的SKILL配置
	- review阶段：solid、安全性、性能、错误处理、代码质量
	- 开发阶段：浏览器搜索skill，自主操作浏览器、操作动态页面等
- 注意事项：
	- 不要提交不理解的代码，人依旧是代码的**最终责任人**
	- 小步快跑，拆分PR，大PR容易导致工程不可控
	- PR前先AI review
	- 采用稳定的库，有的时候AI喜欢自己造轮子
	- 善用 plan 模式，多做前置探索
		- 提示词技巧
		- 反问开拓思路
- 痛点
	-
- ## 参考
- [一份关于 AI 编程的简明行为指南](https://www.piglei.com/articles/a-simple-ai-coding-guide-for-engineers/)
- [AI编程经验总结](https://bbs.kanxue.com/thread-289778.htm)
- https://javaguide.cn/ai-coding/programmer-essential-skills.html#superpowers
-