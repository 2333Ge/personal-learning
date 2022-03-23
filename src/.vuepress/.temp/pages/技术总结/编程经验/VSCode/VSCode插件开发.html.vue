<template><h1 id="小记" tabindex="-1"><a class="header-anchor" href="#小记" aria-hidden="true">#</a> 小记</h1>
<ul>
<li>脚手架安装&amp;初始化</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install -g yo generator-code
// 工作区
yo code
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>F5 运行
<ul>
<li>失败、重新安装 15.0 以上 VSCode</li>
</ul>
</li>
</ul>
<h1 id="目录解释" tabindex="-1"><a class="header-anchor" href="#目录解释" aria-hidden="true">#</a> 目录解释</h1>
<h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2>
<ul>
<li>name 和 publisher： VS Code <publisher>.<name>用作插件的唯一 ID</li>
<li>main：插件入口文件</li>
<li>engines.vscode：这指定了扩展所依赖的 VS Code API 的最低版本。</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
{
  "name": "helloworld-sample",
  "engines": {
    "vscode": "^1.51.0"
  },
  "main": "./out/extension.js",
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="入口文件" tabindex="-1"><a class="header-anchor" href="#入口文件" aria-hidden="true">#</a> 入口文件</h2>
<p>导出两个函数、activate 和 deactivate。activate 当您注册的激活事件发生时执行。deactivate 让您有机会在您的扩展程序被停用之前进行清理。</p>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> api</h1>
<ul>
<li>
<p><a href="https://juejin.cn/post/7021931752914419743" target="_blank" rel="noopener noreferrer">个人插件-Highlight My Word 总结<ExternalLinkIcon/></a></p>
</li>
<li>
<p>弹窗</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">showInformationMessage</span><span class="token punctuation">(</span><span class="token string">"我的 HelloWorld"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="相关资料" tabindex="-1"><a class="header-anchor" href="#相关资料" aria-hidden="true">#</a> 相关资料</h1>
<ul>
<li><a href="https://code.visualstudio.com/api" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></li>
<li><a href="https://code.visualstudio.com/api/references/vscode-api" target="_blank" rel="noopener noreferrer">官网-api<ExternalLinkIcon/></a></li>
<li>[小茗同学] http://blog.haoji.me/vscode-plugin-hello-world.html</li>
<li><a href="https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/" target="_blank" rel="noopener noreferrer">博客-中文文档<ExternalLinkIcon/></a></li>
<li><a href="https://hub.fastgit.org/456ken/Highlighter-vscode" target="_blank" rel="noopener noreferrer">MultiColorHighlighter<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/7021931752914419743" target="_blank" rel="noopener noreferrer">个人插件-Highlight My Word 总结<ExternalLinkIcon/></a></li>
</ul>
</template>
