<template><h1 id="学习资料" tabindex="-1"><a class="header-anchor" href="#学习资料" aria-hidden="true">#</a> 学习资料</h1>
<ul>
<li>官网：http://nodejs.cn/learn</li>
<li>《深入浅出Node.js》</li>
</ul>
<h1 id="what-is-node-js" tabindex="-1"><a class="header-anchor" href="#what-is-node-js" aria-hidden="true">#</a> what is Node.js</h1>
<p>Node.js 是一个开源和跨平台的 JavaScript 运行时环境。 它几乎是任何类型项目的流行工具。</p>
<h1 id="node-js-与浏览器区别" tabindex="-1"><a class="header-anchor" href="#node-js-与浏览器区别" aria-hidden="true">#</a> node.js 与浏览器区别</h1>
<p><a href="http://nodejs.cn/learn/differences-between-nodejs-and-the-browser" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></p>
<ul>
<li>
<p>部分api不同：Node.js包含文件系统访问api，浏览器提供document对象</p>
</li>
<li>
<p>程序兼容性：</p>
<ul>
<li>浏览器发展相对较慢，有时不得不使用较旧的版本。如使用 Babel 将代码转换为与 ES5 兼容的代码，再交付给浏览器</li>
<li>Node.js 中，则不需要这样做。</li>
</ul>
</li>
<li>
<p>模块系统不同：Node.js 使用 CommonJS 模块系统，而在浏览器中，则还正在实现 ES 模块标准。在实践中，这意味着在 Node.js 中使用 require()，而在浏览器中则使用 import</p>
</li>
</ul>
<p>？？CommonJS 模块 ES 模块标准区别</p>
<h1 id="v8-javascript引擎介绍" tabindex="-1"><a class="header-anchor" href="#v8-javascript引擎介绍" aria-hidden="true">#</a> V8 JavaScript引擎介绍</h1>
<p>http://nodejs.cn/learn/the-v8-javascript-engine</p>
<p>V8 提供了执行 JavaScript 的运行时环境。 DOM 和其他 Web 平台 API 则由浏览器提供。</p>
<p>现代的 JavaScript 引擎不再只是解释 JavaScript，也会对其进行编译。</p>
<h1 id="执行程序" tabindex="-1"><a class="header-anchor" href="#执行程序" aria-hidden="true">#</a> 执行程序</h1>
<p>运行Node.js程序eg：<code>node app.js</code></p>
<h1 id="退出程序" tabindex="-1"><a class="header-anchor" href="#退出程序" aria-hidden="true">#</a> 退出程序</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h1 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h1>
<p><code>process.env.NODE_ENV // &quot;development&quot;</code></p>
<p>？？外部如何设置环境变量，如切换线上标识</p>
<p>通常通过在 shell 中执行以下命令来完成：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>也可以通过将环境变量放在应用程序的初始化命令之前来应用它：</p>
<p>NODE_ENV=production node app.js</p>
<h1 id="node-js-repl" tabindex="-1"><a class="header-anchor" href="#node-js-repl" aria-hidden="true">#</a> Node.js REPL</h1>
<p><a href="http://nodejs.cn/learn/how-to-use-the-nodejs-repl" target="_blank" rel="noopener noreferrer">Node.js REPL<ExternalLinkIcon/></a>:
REPL 也被称为运行评估打印循环，是一种编程语言环境（主要是控制台窗口），它使用单个表达式作为用户输入，并在执行后将结果返回到控制台</p>
<p>有些地方比Chrome终端好用，如可以执行<code>.save</code>保存内容</p>
<p>要点：tab补全、全局对象、.命令（重置上下文、文件保存等）、多行编辑、</p>
<h1 id="从命令行接收参数" tabindex="-1"><a class="header-anchor" href="#从命令行接收参数" aria-hidden="true">#</a> 从命令行接收参数</h1>
<p><code>process.argv</code>接收：第一个参数是 node 命令的完整路径。第二个参数是正被执行的文件的完整路径。</p>
<p>如果要使用这种形式：<code>node app.js name=joe</code>,则需要通过 <code>minimist</code> 库处理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'minimist'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
args<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span> <span class="token comment">//joe</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> app.js --name<span class="token operator">=</span>joe
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>否则直接取出来则是<code>&quot;--name=joe&quot;</code>形式</p>
<h1 id="使用-node-js-输出到命令行" tabindex="-1"><a class="header-anchor" href="#使用-node-js-输出到命令行" aria-hidden="true">#</a> 使用 Node.js 输出到命令行</h1>
<ul>
<li><code>console.trace</code>:打印函数调用栈</li>
<li><code>console.time</code>、<code>timeEnd</code>: 计算时间，轻松计算函数运行所需的时间</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'测试'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">measureDoingSomething</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">'doSomething()'</span><span class="token punctuation">)</span>
  <span class="token comment">//做点事，并测量所需的时间。</span>
  <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">'doSomething()'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">measureDoingSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>为控制台输出着色库：<a href="https://github.com/chalk/chalk" target="_blank" rel="noopener noreferrer">Chalk<ExternalLinkIcon/></a></li>
<li>创建进度条库：<a href="https://www.npmjs.com/package/progress" target="_blank" rel="noopener noreferrer">Progress<ExternalLinkIcon/></a></li>
</ul>
<h1 id="在-node-js-中从命令行接收输入" tabindex="-1"><a class="header-anchor" href="#在-node-js-中从命令行接收输入" aria-hidden="true">#</a> 在 Node.js 中从命令行接收输入</h1>
<p>如：Node.js 提供了 <a href="http://nodejs.cn/api/readline.html" target="_blank" rel="noopener noreferrer">readline<ExternalLinkIcon/></a> 模块来执行以下操作：每次一行地从可读流（例如 process.stdin 流，在 Node.js 程序执行期间该流就是终端输入）获取输入。</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`你叫什么名字?`, name =&gt; {
  console.log(`你好 ${name}!`)
  readline.close()
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>还有：Inquirer、 readline-sync</p>
<h1 id="使用-exports-从-node-js-文件中公开功能" tabindex="-1"><a class="header-anchor" href="#使用-exports-从-node-js-文件中公开功能" aria-hidden="true">#</a> 使用 exports 从 Node.js 文件中公开功能</h1>
<p>module.exports</p>
<h1 id="npm-包管理器" tabindex="-1"><a class="header-anchor" href="#npm-包管理器" aria-hidden="true">#</a> npm 包管理器</h1>
<p><code>npm root -g</code> 查看本机全局node_modules目录位置</p>
<p>如果安装的是可执行文件会放在 <code>node_modules/.bin</code>目录下，</p>
<p>默认调用方式：<code>$ node-modules/.bin/mocha --version</code>，</p>
<p>使用npx简化：<code>npx mocha --version</code></p>
<p>原理及其他使用场景<a href="http://www.ruanyifeng.com/blog/2019/02/npx.html" target="_blank" rel="noopener noreferrer">可见<ExternalLinkIcon/></a></p>
<h2 id="package-json指南" tabindex="-1"><a class="header-anchor" href="#package-json指南" aria-hidden="true">#</a> package.json指南</h2>
<p>http://nodejs.cn/learn/the-package-json-guide</p>
<ul>
<li>
<p>bugs: 链接到软件包的问题跟踪器，最常用的是 GitHub 的 issues 页面。</p>
</li>
<li>
<p>main: 设置软件包的入口点。当在应用程序中<strong>导入此软件包</strong>时，应用程序会在该位置搜索模块的导出。</p>
</li>
</ul>
<h2 id="npm版本控制" tabindex="-1"><a class="header-anchor" href="#npm版本控制" aria-hidden="true">#</a> npm版本控制</h2>
<p><code>x.y.z</code></p>
<ul>
<li>第一个数字是主版本。</li>
<li>第二个数字是次版本。</li>
<li>第三个数字是补丁版本。</li>
</ul>
<p>当发布新的版本时，不仅仅是随心所欲地增加数字，还要遵循以下规则：</p>
<ul>
<li>当进行不兼容的 API 更改时，则升级主版本。</li>
<li>当以向后兼容的方式添加功能时，则升级次版本。</li>
<li>当进行向后兼容的缺陷修复时，则升级补丁版本。</li>
</ul>
<h2 id="npm-dependencies与devdependencies" tabindex="-1"><a class="header-anchor" href="#npm-dependencies与devdependencies" aria-hidden="true">#</a> npm dependencies与devDependencies</h2>
<p>当添加了 <code>-D</code> 或 <code>--save-dev</code> 标志时，则会将其安装为开发依赖项（会被添加到 <code>devDependencies</code> 列表）。</p>
<p>当投入生产环境时，如果输入 <code>npm install</code> 且该文件夹包含 <code>package.json</code> 文件时，则会安装它们，因为 npm 会假定这是开发部署。</p>
<p>需要设置 <code>--production</code> 标志（<code>npm install --production</code>），以避免安装这些开发依赖项。</p>
<h1 id="node-js事件循环" tabindex="-1"><a class="header-anchor" href="#node-js事件循环" aria-hidden="true">#</a> Node.js事件循环</h1>
<p>http://nodejs.cn/learn/the-nodejs-event-loop</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">baz</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'baz'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="http://website2.nodejs.cn/static/270ebeb6dbfa7d613152b71257c72a9e/11a8f/call-stack-first-example.png" alt="调用堆栈图示："></p>
<p>调用堆栈、消息队列、作业队列</p>
<ul>
<li><code>process.nextTick()</code> ：在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数</li>
<li><code>setImmediate()</code>: 参数传入的任何函数都是在事件循环的下一个迭代中执行的回调.</li>
</ul>
<p>setImmediate() 与 setTimeout(() =&gt; {}, 0)（传入 0 毫秒的超时）、process.nextTick() 有何不同？</p>
<p>传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 setTimeout 和 setImmediate 之前执行。</p>
<p>延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行。</p>
<h1 id="事件触发器" tabindex="-1"><a class="header-anchor" href="#事件触发器" aria-hidden="true">#</a> 事件触发器</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> EventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'events'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> eventEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'start'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">从 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 到 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>end<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

eventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'start'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>once(): 添加单次监听器。</li>
<li>removeListener() / off(): 从事件中移除事件监听器。</li>
<li>removeAllListeners(): 移除事件的所有监听器。</li>
</ul>
<p>详见：http://nodejs.cn/api/events.html</p>
<h1 id="搭建http服务器" tabindex="-1"><a class="header-anchor" href="#搭建http服务器" aria-hidden="true">#</a> 搭建Http服务器</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">200</span>
  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'text/plain'</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'你好世界\n'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">服务器运行在 http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hostname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="发送http请求" tabindex="-1"><a class="header-anchor" href="#发送http请求" aria-hidden="true">#</a> 发送Http请求</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const https = require('https')
const options = {
  hostname: 'nodejs.cn',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>其他网络库：</p>
<ul>
<li><a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">Axios<ExternalLinkIcon/></a>：发送Post请求</li>
<li>Express: 获取Http请求正文数据</li>
</ul>
<h1 id="文件相关" tabindex="-1"><a class="header-anchor" href="#文件相关" aria-hidden="true">#</a> 文件相关</h1>
<h2 id="使用文件描述符" tabindex="-1"><a class="header-anchor" href="#使用文件描述符" aria-hidden="true">#</a> 使用文件描述符</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'/Users/joe/test.txt'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> fd</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//fd 是文件描述符。</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="文件属性" tabindex="-1"><a class="header-anchor" href="#文件属性" aria-hidden="true">#</a> 文件属性</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">stat</span><span class="token punctuation">(</span><span class="token string">'/Users/joe/test.txt'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> stats</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//可以访问 `stats` 中的文件属性</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li>使用 stats.isFile() 和 stats.isDirectory() 判断文件是否目录或文件。</li>
<li>使用 stats.isSymbolicLink() 判断文件是否符号链接。</li>
<li>使用 stats.size 获取文件的大小（以字节为单位）。</li>
</ul>
<h2 id="文件路径" tabindex="-1"><a class="header-anchor" href="#文件路径" aria-hidden="true">#</a> 文件路径</h2>
<p>从路径中获取信息</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> notes <span class="token operator">=</span> <span class="token string">'/users/joe/notes.txt'</span>

path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>notes<span class="token punctuation">)</span> <span class="token comment">// /users/joe  文件的父文件夹。</span>
path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>notes<span class="token punctuation">)</span> <span class="token comment">// notes.txt 文件名部分。</span>
path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>notes<span class="token punctuation">)</span> <span class="token comment">// .txt 文件的扩展名。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>使用路径</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'joe'</span>

<span class="token comment">// 接路径的多个片段：</span>
path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token string">'users'</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token string">'notes.txt'</span><span class="token punctuation">)</span> <span class="token comment">//'/users/joe/notes.txt'</span>

<span class="token comment">// 相对路径的绝对路径计算</span>
path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'joe.txt'</span><span class="token punctuation">)</span> <span class="token comment">//'/Users/joe/joe.txt' 如果从主文件夹运行。</span>
path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'tmp'</span><span class="token punctuation">,</span> <span class="token string">'joe.txt'</span><span class="token punctuation">)</span> <span class="token comment">//'/Users/joe/tmp/joe.txt' 如果从主文件夹运行。</span>

<span class="token comment">// 当包含诸如 .、.. 或双斜杠之类的相对说明符时，其会尝试计算实际的路径</span>
path<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token string">'/users/joe/..//test.txt'</span><span class="token punctuation">)</span> <span class="token comment">//'/users/test.txt'</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="读取文件" tabindex="-1"><a class="header-anchor" href="#读取文件" aria-hidden="true">#</a> 读取文件</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/Users/joe/test.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span> <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>fs.readFile() 和 fs.readFileSync() 都会在返回数据之前将文件的全部内容读取到内存中。</p>
<p>这意味着大文件会对内存的消耗和程序执行的速度产生重大的影响。</p>
<p>在这种情况下，更好的选择是使用流来读取文件的内容。</p>
<h2 id="写入文件" tabindex="-1"><a class="header-anchor" href="#写入文件" aria-hidden="true">#</a> 写入文件</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token string">'一些内容'</span>

fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">'/Users/joe/test.txt'</span><span class="token punctuation">,</span> content<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//文件写入成功。</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><hr>
<ul>
<li>文件夹操作：http://nodejs.cn/learn/working-with-folders-in-nodejs</li>
<li>文件系统操作：http://nodejs.cn/learn/the-nodejs-fs-module</li>
<li>路径模块：http://nodejs.cn/learn/the-nodejs-path-module</li>
<li>操作系统模块：http://nodejs.cn/learn/the-nodejs-os-module</li>
</ul>
<p>...</p>
<p>更多内容查看官网、随用随看</p>
<h1 id="相关question" tabindex="-1"><a class="header-anchor" href="#相关question" aria-hidden="true">#</a> 相关question</h1>
<ul>
<li><a href="https://baike.baidu.com/item/ajax/8425?fr=aladdin" target="_blank" rel="noopener noreferrer">Ajax<ExternalLinkIcon/></a>? Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。</li>
</ul>
<h1 id="随记" tabindex="-1"><a class="header-anchor" href="#随记" aria-hidden="true">#</a> 随记</h1>
<ul>
<li>掘金笔记的question</li>
<li>宏任务、微任务、事件循环权威资料？</li>
</ul>
</template>
