<template><h1 id="markdown-概览" tabindex="-1"><a class="header-anchor" href="#markdown-概览" aria-hidden="true">#</a> MARKDown 概览</h1>
<p><a href="http://markdown.p2hp.com/basic-syntax/#links" target="_blank" rel="noopener noreferrer">中文官网<ExternalLinkIcon/></a></p>
<h2 id="实现锚点" tabindex="-1"><a class="header-anchor" href="#实现锚点" aria-hidden="true">#</a> 实现锚点</h2>
<h3 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一" aria-hidden="true">#</a> <a href="#%E6%96%B9%E6%A1%881">方案一</a></h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">方案一</span>](<span class="token url">#方案1</span>)</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方案1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="测试-2" tabindex="-1"><a class="header-anchor" href="#测试-2" aria-hidden="true">#</a> <a href="#方案二">测试 2</a></h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> &lt;a href="#测试2">测试 2&lt;/a></span>

h
t
m
l
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>测试2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>测试 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><a href="#方案二">方案</a></p>
<p>h
t
m
l
<a id="测试2">测试 2</a></p>
<h3 id="锚点设置失败原因" tabindex="-1"><a class="header-anchor" href="#锚点设置失败原因" aria-hidden="true">#</a> 锚点设置失败原因</h3>
<ul>
<li>必须全小写</li>
<li>空格用’-'代替</li>
<li>‘_’ '()'需要去掉</li>
</ul>
<h1 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h1>
<ul>
<li><a href="https://blog.csdn.net/wangzhibo666/article/details/88731227" target="_blank" rel="noopener noreferrer">锚点设置<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/u014563989/article/details/103056836" target="_blank" rel="noopener noreferrer">锚点失败原因<ExternalLinkIcon/></a></li>
</ul>
</template>
