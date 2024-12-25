- 解释：超文本传输协议（**H**yperText **T**ransfer **P**rotocol。）
- ## 状态码
- ![](https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/HTTP/6-%E4%BA%94%E5%A4%A7%E7%B1%BBHTTP%E7%8A%B6%E6%80%81%E7%A0%81.png)
- ## Header
- `Connection`: 最常用**HTTP 长连接**，特点是，只要任意一端没有明确提出断开连接，则保持 [[TCP]] 连接状态
- 见词知义的字段：`Content-Encoding: gzip`、`Host: 10.6.0.130`、`Content-Length：1000`
- ### question
- `Content-Length` 中[本次服务器回应的数据长度是 1000 个字节，后面的字节就属于下一个回应了。](https://www.xiaolincoding.com/network/2_http/http_interview.html#http-%E5%B8%B8%E8%A7%81%E5%AD%97%E6%AE%B5%E6%9C%89%E5%93%AA%E4%BA%9B:~:text=%E6%9C%AC%E6%AC%A1%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%9B%9E%E5%BA%94%E7%9A%84%E6%95%B0%E6%8D%AE%E9%95%BF%E5%BA%A6%E6%98%AF%201000%20%E4%B8%AA%E5%AD%97%E8%8A%82%EF%BC%8C%E5%90%8E%E9%9D%A2%E7%9A%84%E5%AD%97%E8%8A%82%E5%B0%B1%E5%B1%9E%E4%BA%8E%E4%B8%8B%E4%B8%80%E4%B8%AA%E5%9B%9E%E5%BA%94%E4%BA%86%E3%80%82)“后面的字节属于下一个回应”具体含义？
  
  答：[[TCP]]协议是面向字节流的协议，会发生[[TCP 粘包]]问题，粘的包就是其他回应的数据，通过`Content-Length`可确定上一个HTTP body的边界，从而解决粘包问题（回车符、换行符作为 HTTP header 的边界）
  
  延伸问题，TCP 粘包后如何拆包？传输层问题为什么交给应用层解决？等...见[[TCP 粘包]]
- ## GET 和 POST
- GET: **HTTP `GET` 方法**请求指定资源的表示。使用 `GET` 的请求应该只用于请求数据，而不应该包含数据。(GET请求也能带上请求体，规范没有禁止，但最好避免这种使用方式)
- POST: **HTTP `POST` 方法**发送数据给服务器。请求主体的类型由 [`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) 标头指定。
- GET和POST方法都是安全和[[幂等]]的吗？如果按照RFC规范的语义实现，GET 是幂等的，POST 不是
- ## 相关
- [[HTTP 缓存]]
- [[HTTP 发展]]
- [[HTTPS]]
- ## 参见
- [小林coding：HTTP常见面试题](https://www.xiaolincoding.com/network/2_http/http_interview.htm)
-
-