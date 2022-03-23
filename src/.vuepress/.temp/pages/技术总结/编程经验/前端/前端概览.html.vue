<template><h1 id="技能树" tabindex="-1"><a class="header-anchor" href="#技能树" aria-hidden="true">#</a> 技能树</h1>
<p><img src="@source/资源/前端技能树.jpg" alt="技能"></p>
<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> http</h1>
<h2 id="http-状态码" tabindex="-1"><a class="header-anchor" href="#http-状态码" aria-hidden="true">#</a> http 状态码</h2>
<ul>
<li>1xx: 表示目前是协议处理的中间状态，还需要后续操作。</li>
<li>2xx: 表示成功状态。</li>
<li>3xx: 重定向状态，资源位置发生变动，需要重新请求。</li>
<li>4xx: 请求报文有误。</li>
<li>5xx: 服务器端发生错误。</li>
</ul>
<h1 id="_3次握手、4次挥手" tabindex="-1"><a class="header-anchor" href="#_3次握手、4次挥手" aria-hidden="true">#</a> 3次握手、4次挥手</h1>
<p>握手目的，确认双方的发送能力、接收能力是否正常。</p>
<p>每个阶段各确认了什么：</p>
<p>第一次握手：客 =&gt; 服，客户端发送能力正常</p>
<p>第二次握手：服 =&gt; 客，+ 服务端接收能力、服务端发送能力，客户端接收能力（但是服务端不知道）</p>
<p>第三次握手：客 =&gt; 服，+ 客户端接收能力（服务端知道）</p>
</template>
