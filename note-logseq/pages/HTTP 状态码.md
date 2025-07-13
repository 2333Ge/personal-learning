- ![状态码分类](https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/HTTP/6-%E4%BA%94%E5%A4%A7%E7%B1%BBHTTP%E7%8A%B6%E6%80%81%E7%A0%81.png)
- | 状态码 | 名称 | 语义 | 是否缓存跳转 | 是否改变请求方法 |
  | ---- | ---- | ---- |
  | 300 | Multiple Choices | 多选项，客户端选择 | ❌ | ❌ |
  | 301 | Moved Permanently | 永久跳转，可能转为 GET | ✅ | 可能改变 |
  | 302 | Found | 临时跳转，可能转为 GET | ❌ | 可能改变 |
  | 303 | See Other | 强制转为 GET（防重复提交） | ❌ | ✅（强制 GET） |
  | 304 | Not Modified | 缓存未修改，复用本地副本 | ✅ | ❌ |
  | 307 | Temporary Redirect | 临时跳转，保持原方法 | ❌ | ❌ |
  | 308 | Permanent Redirect | 永久跳转，保持原方法 | ✅ | ❌ |