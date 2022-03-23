<template><h1 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h1>
<h2 id="实用命令" tabindex="-1"><a class="header-anchor" href="#实用命令" aria-hidden="true">#</a> 实用命令</h2>
<table>
<thead>
<tr>
<th style="text-align:center">快捷键</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">npm view deepmerge versions</td>
<td style="text-align:center">查看模块所有版本</td>
</tr>
<tr>
<td style="text-align:center">npm ls -g --depth=0</td>
<td style="text-align:center">查看全局安装依赖版本</td>
</tr>
<tr>
<td style="text-align:center">npm root -g</td>
<td style="text-align:center">查看node_modules在计算机上的确切位置</td>
</tr>
</tbody>
</table>
<h2 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧" aria-hidden="true">#</a> 技巧</h2>
<h2 id="通过-git-安装依赖" tabindex="-1"><a class="header-anchor" href="#通过-git-安装依赖" aria-hidden="true">#</a> 通过 git 安装依赖</h2>
<p><code> package.json</code>按照如下方式配置</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"bestzip"</span><span class="token operator">:</span> <span class="token string">"git+&lt;git 地址>#分支"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>执行 <code>npm i</code></p>
<h1 id="question-list" tabindex="-1"><a class="header-anchor" href="#question-list" aria-hidden="true">#</a> question list</h1>
<h2 id="install-失败" tabindex="-1"><a class="header-anchor" href="#install-失败" aria-hidden="true">#</a> install 失败</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm ERR! ERESOLVE unable to resolve dependency tree
...
npm ERR! Could not resolve dependency:
npm ERR! peer react-native@"^0.60.0" from react-native-fast-image@7.0.2
npm ERR! node_modules/react-native-fast-image
npm ERR!   react-native-fast-image@"^7.0.0" from the root project
npm ERR!
...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>改用命令 npm install --legacy-peer-deps</p>
<h1 id="npx" tabindex="-1"><a class="header-anchor" href="#npx" aria-hidden="true">#</a> npx</h1>
<ul>
<li>
<p>http://www.ruanyifeng.com/blog/2019/02/npx.html</p>
</li>
<li>
<p>http://nodejs.cn/learn/the-npx-nodejs-package-runner</p>
</li>
<li>
<p>执行node_modules 中可执行程序</p>
</li>
<li>
<p>能避免全局安装的模块</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx cowsay "你好"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npx create-react-app my-react-app
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。</p>
<h1 id="相关资料" tabindex="-1"><a class="header-anchor" href="#相关资料" aria-hidden="true">#</a> 相关资料</h1>
<ul>
<li>
<p><a href="https://juejin.cn/post/6844904022080667661" target="_blank" rel="noopener noreferrer">剖析 npm 的包管理机制<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.npmjs.com/package/install-local" target="_blank" rel="noopener noreferrer">多工程开发-安装本地依赖<ExternalLinkIcon/></a></p>
</li>
</ul>
</template>
