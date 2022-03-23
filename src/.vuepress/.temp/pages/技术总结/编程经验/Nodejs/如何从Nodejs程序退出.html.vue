<template><h1 id="省流" tabindex="-1"><a class="header-anchor" href="#省流" aria-hidden="true">#</a> 省流</h1>
<ol>
<li><code>process.exit(1)</code></li>
</ol>
<p>推出码也可<code>process.exitCode</code>设置</p>
<ol start="2">
<li>友好版
<code>process.kill(process.pid, 'SIGTERM')</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'SIGTERM'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  server<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'进程已终止'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h1 id="退出程序" tabindex="-1"><a class="header-anchor" href="#退出程序" aria-hidden="true">#</a> 退出程序</h1>
<p>退出：<code>process.exit(1)</code></p>
<p>不同的退出码具有不同的含义，可以在系统中用于程序与其他程序的通信。<a href="http://nodejs.cn/api/process.html#process_exit_codes" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></p>
<p>也可以设置 process.exitCode 属性,当程序结束时，Node.js 会返回该退出码。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>process<span class="token punctuation">.</span>exitCode <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用 Node.js 启动服务器，例如 HTTP 服务器：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'你好'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'服务器已就绪'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这个程序永远不会结束。 如果调用 process.exit()，则任何当前等待中或运行中的请求都会被中止。 这不太友好。</p>
<p>在这种情况下，需要向该命令发送 SIGTERM 信号，并使用进程的信号处理程序进行处理。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'你好'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'服务器已就绪'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'SIGTERM'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  server<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'进程已终止'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote>
<p>什么是信号？信号是一个 POSIX 内部通信系统：发送通知给进程，以告知其发生的事件。</p>
</blockquote>
<p>可以从程序内部另一个函数中发送此信号：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>process<span class="token punctuation">.</span><span class="token function">kill</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>pid<span class="token punctuation">,</span> <span class="token string">'SIGTERM'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
