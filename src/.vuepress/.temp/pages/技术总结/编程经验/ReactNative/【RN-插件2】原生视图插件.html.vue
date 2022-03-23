<template><h1 id="【rn-插件-2】原生视图插件" tabindex="-1"><a class="header-anchor" href="#【rn-插件-2】原生视图插件" aria-hidden="true">#</a> 【RN-插件 2】原生视图插件</h1>
<h1 id="_1-目标" tabindex="-1"><a class="header-anchor" href="#_1-目标" aria-hidden="true">#</a> 1 目标</h1>
<p>结合上一次【RN-插件 1】原生插件-初始化、发布 npm&amp;使用 的联系，结合之前学 RN 利用原生组件知识，创建一个简单的原生视图插件</p>
<h1 id="_2-流程概述" tabindex="-1"><a class="header-anchor" href="#_2-流程概述" aria-hidden="true">#</a> 2 流程概述</h1>
<h2 id="_1-原生部分" tabindex="-1"><a class="header-anchor" href="#_1-原生部分" aria-hidden="true">#</a> (1) 原生部分</h2>
<h3 id="a-实现-viewmanager" tabindex="-1"><a class="header-anchor" href="#a-实现-viewmanager" aria-hidden="true">#</a> A 实现 ViewManager</h3>
<ul>
<li>在插件项目中 src 目录下创建一个类继承 ViewManager</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">class</span> <span class="token class-name">AndButton</span> <span class="token keyword">extends</span> <span class="token class-name">SimpleViewManager</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"AndBtn"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Button</span> <span class="token function">createViewInstance</span><span class="token punctuation">(</span><span class="token class-name">ThemedReactContext</span> reactContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Button</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span>reactContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ViewGroup<span class="token punctuation">.</span>LayoutParams</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ViewGroup<span class="token punctuation">.</span>LayoutParams</span><span class="token punctuation">(</span><span class="token class-name">ViewGroup<span class="token punctuation">.</span>LayoutParams</span><span class="token punctuation">.</span>MATCH_PARENT<span class="token punctuation">,</span> <span class="token class-name">ViewGroup<span class="token punctuation">.</span>LayoutParams</span><span class="token punctuation">.</span>MATCH_PARENT<span class="token punctuation">)</span><span class="token punctuation">;</span>
        b<span class="token punctuation">.</span><span class="token function">setLayoutParams</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
        b<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">"按钮"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@ReactProp</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"text"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setText</span><span class="token punctuation">(</span><span class="token class-name">Button</span> btn<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        btn<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="b-注册组件" tabindex="-1"><a class="header-anchor" href="#b-注册组件" aria-hidden="true">#</a> B 注册组件</h3>
<p>在上一个 package 中注册 ViewManager</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">class</span> <span class="token class-name">RNYchTestPackage</span> <span class="token keyword">implements</span> <span class="token class-name">ReactPackage</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ViewManager</span><span class="token punctuation">></span></span> <span class="token function">createViewManagers</span><span class="token punctuation">(</span><span class="token class-name">ReactApplicationContext</span> reactContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ViewManager</span><span class="token punctuation">></span></span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AndButton</span><span class="token punctuation">(</span>reactContext<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_2-rn-部分" tabindex="-1"><a class="header-anchor" href="#_2-rn-部分" aria-hidden="true">#</a> (2) RN 部分</h2>
<h3 id="a-导出定义的组件" tabindex="-1"><a class="header-anchor" href="#a-导出定义的组件" aria-hidden="true">#</a> A 导出定义的组件</h3>
<p>在 index 文件下添加下面的代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> requireNativeComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> AndBtn <span class="token operator">=</span> <span class="token function">requireNativeComponent</span><span class="token punctuation">(</span><span class="token string">"AndBtn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> AndBtn <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-上传" tabindex="-1"><a class="header-anchor" href="#_3-上传" aria-hidden="true">#</a> (3) 上传</h3>
<ul>
<li>上传 GitHub</li>
<li>改版本号上传 npm</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm version 1.0.1
npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4-使用" tabindex="-1"><a class="header-anchor" href="#_4-使用" aria-hidden="true">#</a> (4) 使用</h3>
<ul>
<li>更新版本 1.0.1</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AndBtn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native-ych-test'</span><span class="token punctuation">;</span>
 <span class="token operator">...</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AndBtn</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>原生视图插件<span class="token punctuation">'</span></span>  <span class="token punctuation">/></span></span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h1 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4 总结</h1>
<ul>
<li>总体流程和上章差不多，只是增加了视图部分代码，和插件的利用关系不大</li>
<li>分别在两个项目中进行插件的编写和自测十分不合理，在下次练习中将把 demo 集成在插件项目中</li>
</ul>
<h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1>
<p>[1] <a href="https://reactnative.cn/docs/native-components-android/" target="_blank" rel="noopener noreferrer">原生 UI 组件<ExternalLinkIcon/></a></p>
<h1 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h1>
<ul>
<li>插件 git 地址：https://github.com/2333Ge/npmTest2.git</li>
<li>测试项目地址：https://github.com/2333Ge/RNLearning2.git</li>
<li>上一章：<RouterLink to="/%E6%8A%80%E6%9C%AF%E6%80%BB%E7%BB%93/%E7%BC%96%E7%A8%8B%E7%BB%8F%E9%AA%8C/ReactNative/%E3%80%90RN-%E6%8F%92%E4%BB%B61%E3%80%91%E5%8E%9F%E7%94%9F%E6%8F%92%E4%BB%B6-%E5%88%9D%E5%A7%8B%E5%8C%96%E3%80%81%E5%8F%91%E5%B8%83npm&amp;%E4%BD%BF%E7%94%A8.html">【RN-插件 1】原生插件-初始化、发布 npm&amp;使用</RouterLink></li>
</ul>
</template>
