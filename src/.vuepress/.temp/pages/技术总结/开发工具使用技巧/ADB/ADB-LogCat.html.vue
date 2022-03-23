<template><h1 id="官方链接" tabindex="-1"><a class="header-anchor" href="#官方链接" aria-hidden="true">#</a> 官方链接</h1>
<p>https://developer.android.google.cn/studio/command-line/logcat?hl=zh_cn</p>
<h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1>
<h2 id="b-缓冲区" tabindex="-1"><a class="header-anchor" href="#b-缓冲区" aria-hidden="true">#</a> -b + 缓冲区</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>adb logcat -b all | grep "am_on_create.*{...activity}"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>加载可供查看的备用日志缓冲区
请参阅<a href="https://developer.android.google.cn/studio/command-line/logcat#alternativeBuffers" target="_blank" rel="noopener noreferrer">查看备用日志缓冲区<ExternalLinkIcon/></a>。</p>
<h2 id="grep-过滤" tabindex="-1"><a class="header-anchor" href="#grep-过滤" aria-hidden="true">#</a> grep 过滤</h2>
<ul>
<li>Grep 过滤条件https://blog.csdn.net/f2006116/article/details/89077030</li>
</ul>
<h2 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> -c</h2>
<p>清除（清空）所选的缓冲区并退出。要清除所有缓冲区，请使用 -b all -c。</p>
<h2 id="f" tabindex="-1"><a class="header-anchor" href="#f" aria-hidden="true">#</a> -f <filename></h2>
<p>将日志消息输出写入 <filename>。默认值为 stdout。</p>
<p>该命令不起作用建议使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Adb logcat >test
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="输出自指定时间以来的最新行。" tabindex="-1"><a class="header-anchor" href="#输出自指定时间以来的最新行。" aria-hidden="true">#</a> 输出自指定时间以来的最新行。</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>adb logcat -t '01-26 20:52:41.820'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>过滤日志输出</p>
<blockquote>
<p>通过过滤器表达式，您可以向系统指明您感兴趣的标记/优先级组合，系统会针对指定的标记抑制其他消息。</p>
</blockquote>
<ul>
<li>过滤器表达式采用 <code>tag:priority ...</code> 格式
<ul>
<li>其中 tag 指示您感兴趣的标记，</li>
<li>priority 指示可针对该标记报告的最低优先级。不低于指定优先级的标记的消息会写入日志。您可以在一个过滤器表达式中提供任意数量的 tag:priority 规范。一系列规范使用空格分隔。</li>
</ul>
</li>
</ul>
</template>
