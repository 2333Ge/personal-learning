<template><ul>
<li>changelog 生成</li>
</ul>
<p><a href="http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html" target="_blank" rel="noopener noreferrer">Commit message 和 Change log 编写指南<ExternalLinkIcon/></a></p>
<ul>
<li>国内访问github</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>域名https://github.com/ 换成 https://hub.fastgit.org/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://www.kejihub.com/5833.html" target="_blank" rel="noopener noreferrer">参考资料<ExternalLinkIcon/></a></p>
<h1 id="踩坑记录" tabindex="-1"><a class="header-anchor" href="#踩坑记录" aria-hidden="true">#</a> 踩坑记录</h1>
<h2 id="warning-redirecting-to-https-code" tabindex="-1"><a class="header-anchor" href="#warning-redirecting-to-https-code" aria-hidden="true">#</a> warning: redirecting to https://code....</h2>
<p>重定向</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
<span class="token comment"># 参考 https://blog.csdn.net/qq_39397845/article/details/112003403</span>

// 移除所有origin
<span class="token function">git</span> remote remove origin

// 重新设置origin
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:Nehic/demo.git

// pull一下看还会不会提示warning: redirecting to XXX
<span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="实用命令" tabindex="-1"><a class="header-anchor" href="#实用命令" aria-hidden="true">#</a> 实用命令</h1>
<ul>
<li>查看对应指令帮助</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">~</span><span class="token operator">-</span>help<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>eg:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch -help
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>Git branch
查看当前分支</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch --show-current
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>新建并切换分支</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git checkout -b + 分支
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>误操作后的恢复(有 commit 日志)</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git log -g
git branch &lt;分支> commitId // 用对应日志建立新分支
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="命令简写" tabindex="-1"><a class="header-anchor" href="#命令简写" aria-hidden="true">#</a> 命令简写</h1>
<table>
<thead>
<tr>
<th style="text-align:center">完整</th>
<th style="text-align:center">简写</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">git commit -m</td>
<td style="text-align:center">git cm</td>
</tr>
<tr>
<td style="text-align:center">git commit -am</td>
<td style="text-align:center">git acm</td>
</tr>
</tbody>
</table>
</template>
