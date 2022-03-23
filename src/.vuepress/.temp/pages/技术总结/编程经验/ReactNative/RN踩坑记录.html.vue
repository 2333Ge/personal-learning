<template><h1 id="could-not-connect-to-development-server" tabindex="-1"><a class="header-anchor" href="#could-not-connect-to-development-server" aria-hidden="true">#</a> Could not connect to development server</h1>
<ul>
<li>ip、端口 配置无误</li>
<li>服务已开启</li>
<li>无代理</li>
</ul>
<p>误删 debug 用文件，导致 SDK 28 以上的连接服务失败</p>
<p><img src="@source/image/技术总结/RN/trap/connent-server-error-debug-file.png" alt=""></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res/android<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">xmlns:</span>tools</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/tools<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>android.permission.SYSTEM_ALERT_WINDOW<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span> <span class="token attr-name"><span class="token namespace">android:</span>usesCleartextTraffic</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">tools:</span>targetApi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>28<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">tools:</span>ignore</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>GoogleAppIndexingWarning<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manifest</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="升级-0-61-以上后原生自动引入问题" tabindex="-1"><a class="header-anchor" href="#升级-0-61-以上后原生自动引入问题" aria-hidden="true">#</a> 升级 0.61 以上后原生自动引入问题</h1>
<p>android 大概是 0.61以后，会自动导入原生剥， 若不希望自动引入，配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// react-native.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dependencies</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'react-native-video'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">platforms</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">android</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h1 id="实现模糊效果" tabindex="-1"><a class="header-anchor" href="#实现模糊效果" aria-hidden="true">#</a> 实现模糊效果</h1>
<p>参考：https://stackoverflow.com/questions/55422749/how-to-blur-text-in-react-native</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span>
  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shadowOpacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">'#000'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shadowOffset</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shadowRadius</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">elevation</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">"rgba(255, 255, 255, 1)"</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h1 id="随记" tabindex="-1"><a class="header-anchor" href="#随记" aria-hidden="true">#</a> 随记</h1>
<ul>
<li>原生视图被优化引发的问题：设置<code>removeClippedSubviews={false}</code>，如只参与布局的视图容易被优化，通过Ref计算当前view的属性失败</li>
<li>同向滑动冲突：设置属性<code>nestedScrollEnabled={true}</code></li>
<li>react-native debugger 连接问题: https://github.com/jhen0409/react-native-debugger/issues/620</li>
</ul>
</template>
