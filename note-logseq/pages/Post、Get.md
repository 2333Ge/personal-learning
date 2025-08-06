- | **对比维度** | **GET** | **POST** |
  | ---- | ---- | ---- |
  | **语义** | 获取资源（幂等、安全） | 提交数据（非幂等、可能修改资源） |
  | **数据传递方式** | URL 查询参数（`?key=value`） | 请求体（Body） |
  | **数据长度限制** | 受 URL 长度限制（约 2KB~8KB） | 理论上无限制（服务器可配置） |
  | **缓存** | 可被缓存、书签保存 | 默认不缓存 |
  | **浏览器历史** | 参数保留在历史记录 | 数据不保留 |
  | **安全性** | 数据明文暴露在 URL | 数据在 Body，相对更安全 |
  | **幂等性** | 幂等（多次请求结果相同） | 非幂等（可能产生副作用） |
  | **TCP 数据包** | 1 个（Header + URL） | 2 个（先发 Header，再发 Body） |
- ## 常见问题
- ### **GET 和 POST 的安全性区别？**
- **表面区别**：GET 参数在 URL 中明文可见（易被浏览器历史、日志记录），POST 数据在 Body 中，相对隐蔽。
- **本质安全性**：二者均明文传输（HTTP 下都不安全），真正安全需用 **HTTPS**。
- ### **POST 能否替代 GET？**
- **技术上可以**（用 POST 实现查询），但**违反 RESTful 设计原则**：
	- GET 语义明确，利于缓存、SEO 优化。
	- 滥用 POST 会导致中间设备（如 CDN）无法缓存。
	- **举例**：Google 搜索引擎爬虫依赖 GET 抓取网页，若用 POST 返回数据，SEO 会受影响。
- ### **GET 请求可以有 Body 吗？**
- **HTTP 规范未禁止**，但实际不支持。
	- 如 `curl -X GET --data "key=value" http://example.com` 可发送 Body，但服务端（如 Nginx）会直接忽略。
	- 所有主流框架（Spring、Django）的 GET 接口无法读取 Body。
	- **原理**：HTTP 协议未限制 GET 的 Body，但 RFC 7231 指出：“GET 的语义是检索资源，Body 无意义。”
- ## My Question
- ### Post TCP数据包发两个是不是平常写js `await fetch`  后还需要 `await response.json()` 的原因
- | **现象** | **原因** |
  | ---- | ---- | ---- |
  | POST 分两个 TCP 包发送 | HTTP/1.1 优化策略（先发 Headers，再发 Body）。 |
  | `fetch` 后需 `await.json()` | `response` 是流式对象，Body 数据需异步读取和解析（与 TCP 分包无关）。 |