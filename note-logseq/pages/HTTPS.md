## HTTPS 解决了 HTTP 的哪些问题？
- 解决HTTP存在的风险：窃听风险、篡改风险、冒充风险，在HTTP和TCP层之间加入 SSL/TLS 协议。
  collapsed:: true
	- 混合加密保证信息的机密性，解决窃听风险
	- 摘要算法保证信息的完整性，解决篡改风险
	- 服务器公钥放入到数字证书中，解决冒充的风险
- 机密性：采用混合加密方式
  collapsed:: true
	- 通信建立前采用***非对称加密***方式交换密钥
	- 通信建立后采用***对称加密***加密明文数据
- 完整性：对内容生成***指纹***，同内容一起传输
  collapsed:: true
	- 因为不能保证**内容+哈希**不会被中间人替换（缺少客户端收到的消息来自服务端的证明），采用**非对称加密**解决这个问题，采用**私钥加密、公钥解密**对内容的哈希值加密
		- > 公钥加密、私钥解密，保证内容传输安全（其他人无法解密，有私钥才能解）
		  私钥加密，公钥解密，保证消息不会被冒充（私钥不会被泄露，消息来源于有私钥的人）
- 数字证书
  collapsed:: true
	- 公私钥也有伪造的可能，就把公钥注册到“警察局”(CA(数字证书认证机构)）里，“警察局”用自己的私钥把你的公钥+个人信息等加密打包成证书，哪一方要验证服务的真实性，则拿着“警察局”给的公钥（预置到浏览器或操作系统），打开数字证书确认
		- TODO 假如CA不可靠会有什么后果
- ![数字证书工作流程](https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/HTTP/22-%E6%95%B0%E5%AD%97%E8%AF%81%E4%B9%A6%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B.png)
- ## HTTPS 是如何建立连接的？
- 客户端请求
	- 支持的TLS协议版本
	- 支持的密码套件列表（包含不同的加密、消息摘要等算法组合），如 RSA
	- 随机数（ClientRandom），用于生成**会话秘钥**
- 服务端回应
	- 确认使用的 TLS 协议版本
	- 确认使用的密码套件列表
	- 随机数（ServerRandom），也用于生成**会话秘钥**
	- 数字证书
- 客户端验证证书（验证过程见上一节），生成一个随机的对称密钥（Pre - Master Secret），用于后续加密通信，回应
	- 通过选择的加密算法，使用证书中的公钥对Pre - Master Secret加密，发送给服务器
	- 服务器用私钥解密出Pre - Master Secret，ClientRandom + ServerRandom + Pre - Master Secret 生成共同的对称会话密钥（Master Secret），回应
		- 握手结束通知
- ## HTTPS 一定可靠吗
- 假基站转发问题：假基站能够转发的前提是你信任了它给你的证书，而这个证书会被你的客户端识别出非法
- 抓包工具为什么能抓包：原理同上，为你信任了它签发的证书
- ## CA证书是如何签发的
- ![](https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost4@main/%E7%BD%91%E7%BB%9C/https/%E8%AF%81%E4%B9%A6%E7%9A%84%E6%A0%A1%E9%AA%8C.png)
- 注意还有个证书信任链问题，我们使用的证书一般非根证书机构签发
- ## 参见
- [小林coding：HTTP常见面试题](https://www.xiaolincoding.com/network/2_http/http_interview.htm)
- [CA 证书是如何签发的](https://www.xiaolincoding.com/network/2_http/http_interview.html#https-%E6%98%AF%E5%A6%82%E4%BD%95%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5%E7%9A%84-%E5%85%B6%E9%97%B4%E4%BA%A4%E4%BA%92%E4%BA%86%E4%BB%80%E4%B9%88:~:text=%E5%92%8C%E9%AA%8C%E8%AF%81%E6%B5%81%E7%A8%8B%EF%BC%9A-,CA%20%E7%AD%BE%E5%8F%91%E8%AF%81%E4%B9%A6%E7%9A%84%E8%BF%87%E7%A8%8B%EF%BC%8C%E5%A6%82%E4%B8%8A%E5%9B%BE%E5%B7%A6%E8%BE%B9%E9%83%A8%E5%88%86%EF%BC%9A,-%E9%A6%96%E5%85%88%20CA%20%E4%BC%9A)