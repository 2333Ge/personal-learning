<template><p>#【RN-插件 1】原生插件-初始化、发布 npm&amp;使用</p>
<h2 id="_1-目标" tabindex="-1"><a class="header-anchor" href="#_1-目标" aria-hidden="true">#</a> 1 目标</h2>
<p>发布自己的原生-RN 插件，实现能通过 npm i 装上并使用</p>
<h2 id="_2-利用工具" tabindex="-1"><a class="header-anchor" href="#_2-利用工具" aria-hidden="true">#</a> 2 利用工具</h2>
<p>react-native-create-library</p>
<h2 id="_3-流程概述" tabindex="-1"><a class="header-anchor" href="#_3-流程概述" aria-hidden="true">#</a> 3 流程概述</h2>
<h3 id="_1-安装-react-native-create-library" tabindex="-1"><a class="header-anchor" href="#_1-安装-react-native-create-library" aria-hidden="true">#</a> （1）安装 react-native-create-library</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install -g react-native-create-library
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-初始化项目" tabindex="-1"><a class="header-anchor" href="#_2-初始化项目" aria-hidden="true">#</a> （2）初始化项目</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>react-native-create-library ychTest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-编写原生代码" tabindex="-1"><a class="header-anchor" href="#_3-编写原生代码" aria-hidden="true">#</a> （3）编写原生代码</h3>
<p>简单写个原生 toast</p>
<ul>
<li>打开初始化的项目内的 android 目录</li>
<li>编写 module 文件（供 RN 调用的方法）如下</li>
<li>其余文件不需要更改、包括 RN 端
<img src="@source/image/技术总结/RN/PlugIn/plugIn1-1.png" alt=""></li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RNYchTestModule</span> <span class="token keyword">extends</span> <span class="token class-name">ReactContextBaseJavaModule</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> DURATION_SHORT_KEY <span class="token operator">=</span> <span class="token string">"SHORT"</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> DURATION_LONG_KEY <span class="token operator">=</span> <span class="token string">"LONG"</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token string">"RNYchTest"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Override</span>
<span class="token comment">/*
    可选方法，用于返回了需要导出给 JavaScript 使用的常量
  \*/</span>
  <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">getConstants</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> constants <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  constants<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>DURATION_SHORT_KEY<span class="token punctuation">,</span> <span class="token class-name">Toast</span><span class="token punctuation">.</span>LENGTH_SHORT<span class="token punctuation">)</span><span class="token punctuation">;</span>
  constants<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>DURATION_LONG_KEY<span class="token punctuation">,</span> <span class="token class-name">Toast</span><span class="token punctuation">.</span>LENGTH_LONG<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> constants<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token annotation punctuation">@ReactMethod</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token keyword">int</span> duration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Toast</span><span class="token punctuation">.</span><span class="token function">makeText</span><span class="token punctuation">(</span><span class="token function">getReactApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> duration<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_4-上传项目到-github" tabindex="-1"><a class="header-anchor" href="#_4-上传项目到-github" aria-hidden="true">#</a> （4）上传项目到 github</h3>
<h3 id="_5-发布到-npm" tabindex="-1"><a class="header-anchor" href="#_5-发布到-npm" aria-hidden="true">#</a> （5）发布到 npm</h3>
<h4 id="a-切换-npm-源到https-registry-npmjs-org" tabindex="-1"><a class="header-anchor" href="#a-切换-npm-源到https-registry-npmjs-org" aria-hidden="true">#</a> A 切换 npm 源到https://registry.npmjs.org/</h4>
<h4 id="b-创建账户" tabindex="-1"><a class="header-anchor" href="#b-创建账户" aria-hidden="true">#</a> B 创建账户</h4>
<p>创建账户会校验各种信息是否重复等
用 npm adduser 创建时查看失败原因较不方便，建议上官网注册</p>
<h3 id="c-登录" tabindex="-1"><a class="header-anchor" href="#c-登录" aria-hidden="true">#</a> C 登录</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm login
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="d-上传" tabindex="-1"><a class="header-anchor" href="#d-上传" aria-hidden="true">#</a> D 上传</h4>
<ul>
<li>第一次上传
npm publish</li>
<li>出现下面问题时登录邮箱邮箱验证注册信息
<img src="@source/image/技术总结/RN/PlugIn/plugIn1-2.png" alt=""></li>
</ul>
<h4 id="e-使用" tabindex="-1"><a class="header-anchor" href="#e-使用" aria-hidden="true">#</a> E 使用</h4>
<ul>
<li>在现有 RN 项目中执行</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  npm i react-native-ych-test
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>链接原生库</p>
<ul>
<li>react-native link</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  react-native link react-native-ych-test
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>或者 <code>setting.gradle</code> 文件中</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>include '<span class="token operator">:</span>react<span class="token operator">-</span><span class="token keyword">native</span><span class="token operator">-</span>ych<span class="token operator">-</span>test'
<span class="token function">project</span><span class="token punctuation">(</span>'<span class="token operator">:</span>react<span class="token operator">-</span><span class="token keyword">native</span><span class="token operator">-</span>ych<span class="token operator">-</span>test'<span class="token punctuation">)</span><span class="token punctuation">.</span>projectDir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>rootProject<span class="token punctuation">.</span>projectDir<span class="token punctuation">,</span>         '<span class="token punctuation">.</span><span class="token punctuation">.</span>/node_modules<span class="token operator">/</span>react<span class="token operator">-</span><span class="token keyword">native</span><span class="token operator">-</span>ych<span class="token operator">-</span>test<span class="token operator">/</span>android'<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
</li>
<li>
<p>Android 原生重新编译运行</p>
</li>
<li>
<p>import &amp; 调用</p>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>  <span class="token keyword">import</span> <span class="token constant">T</span> <span class="token keyword">from</span> <span class="token string">'react-native-ych-test'</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span>
    <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">"自定义原生插件"</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token constant">SHORT</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span><span class="token plain-text">
  自定义插件
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="f-结果" tabindex="-1"><a class="header-anchor" href="#f-结果" aria-hidden="true">#</a> F 结果</h4>
<p>弹窗成功
<img src="@source/image/技术总结/RN/PlugIn/plugIn1-3.png" alt=""></p>
<h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1>
<p>[1] <a href="https://www.jianshu.com/p/091a68ea1ca7" target="_blank" rel="noopener noreferrer">开发自己的 react-native 组件并发布到 npm<ExternalLinkIcon/></a><br>
[2] <a href="https://reactnative.cn/docs/linking-libraries-ios.html" target="_blank" rel="noopener noreferrer">链接原生库<ExternalLinkIcon/></a></p>
<h1 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h1>
<ul>
<li>插件 git 地址：https://github.com/2333Ge/npmTest2.git</li>
<li>测试项目地址：https://github.com/2333Ge/RNLearning2.git</li>
<li>下一章：<RouterLink to="/%E6%8A%80%E6%9C%AF%E6%80%BB%E7%BB%93/%E7%BC%96%E7%A8%8B%E7%BB%8F%E9%AA%8C/ReactNative/%E3%80%90RN-%E6%8F%92%E4%BB%B62%E3%80%91%E5%8E%9F%E7%94%9F%E8%A7%86%E5%9B%BE%E6%8F%92%E4%BB%B6.html">【RN-插件 2】原生视图</RouterLink></li>
</ul>
</template>
