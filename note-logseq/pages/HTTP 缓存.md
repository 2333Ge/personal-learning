- 缓存类型有两种**私有缓存**和**共享缓存**
	- **私有缓存**绑定到客户端
	- **共享缓存**细分为**代理缓存**和**托管缓存**
- 启发式缓存：Cache-Control广泛采用之前的策略，客户端再存上次访问存储时间，10%的时间
- 基于Age的缓存策略，如`Cache-Control: max-age=604800`
	- 客户端计算**相应后**经过多少时间，上例7天以后失效
	- **共享缓存**应额外返回`Age: 86400`字段，表示共享缓存将相应存储的时间
- `Expires`指定明确的时间，逐渐弃用，有`max-age`优先启用`max-age`
- `Vary`指定相应根据什么缓存，如`Vary: Accept-Language`，缓存会基于响应 URL 和 `Accept-Language`请求标头的组合进行键控
- `If-Modified-Since/Last-Modified`：如`max-age`判断失效后，客户端发送带有 `If-Modified-Since` 请求标头的请求，内容若没有更改，服务响应`304`
- `ETag/If-None-Match`：缓存验证中优先级大于`If-Modified-Since`
- `no-cache`: 强制不重复使用缓存
- `no-store`：强制不存储响应
- `immutable` ：用于明确指示不需要重新验证
- LATER `max-age` 很长，重新加载时，服务器知道内容是不可变的，也会发送重新验证请求？此处的重新加载指的什么时机？
- 请求折叠：多个相同的请求同时到达共享缓存，中间缓存将代表自己将单个请求转发到源，然后源可以将结果重用于所有客户端。这称为***请求折叠***
-
- ## 参考文章
- [MDN：HTTP缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)
-