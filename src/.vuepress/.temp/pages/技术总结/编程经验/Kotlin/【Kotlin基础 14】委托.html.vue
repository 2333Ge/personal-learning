<template><h1 id="委托" tabindex="-1"><a class="header-anchor" href="#委托" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/delegation.html" target="_blank" rel="noopener noreferrer">委托<ExternalLinkIcon/></a></h1>
<p>都是新知识点，参阅<a href="https://book.kotlincn.net/text/delegation.html" target="_blank" rel="noopener noreferrer">原文<ExternalLinkIcon/></a></p>
<p>委托模式已经证明是实现继承的一个很好的替代方式</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">interface</span> Base <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token function">BaseImpl</span><span class="token punctuation">(</span><span class="token keyword">val</span> x<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token operator">:</span> Base <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token function">Derived</span><span class="token punctuation">(</span>b<span class="token operator">:</span> Base<span class="token punctuation">)</span> <span class="token operator">:</span> Base <span class="token keyword">by</span> b

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> b <span class="token operator">=</span> <span class="token function">BaseImpl</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token function">Derived</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code>Derived</code> 的超类型列表中的 <code>by</code>-子句表示 <code>b</code> 将会在 <code>Derived</code> 中内部存储， 并且编译器将生成转发给 <code>b</code> 的所有 <code>Base</code> 的方法。</p>
<h2 id="覆盖由委托实现的接口成员" tabindex="-1"><a class="header-anchor" href="#覆盖由委托实现的接口成员" aria-hidden="true">#</a> 覆盖由委托实现的接口成员</h2>
<p>覆盖符合预期：编译器会使用 <code>override</code> 覆盖的实现而不是委托对象中的。如果将 <code>override fun printMessage() { print(&quot;abc&quot;) }</code> 添加到 <code>Derived</code>，那么当调用 <code>printMessage</code> 时程序会输出 abc 而不是 10：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">interface</span> Base <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">fun</span> <span class="token function">printMessageLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token function">BaseImpl</span><span class="token punctuation">(</span><span class="token keyword">val</span> x<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token operator">:</span> Base <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">printMessageLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token function">Derived</span><span class="token punctuation">(</span>b<span class="token operator">:</span> Base<span class="token punctuation">)</span> <span class="token operator">:</span> Base <span class="token keyword">by</span> b <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"abc"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> b <span class="token operator">=</span> <span class="token function">BaseImpl</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token function">Derived</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">Derived</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">printMessageLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 输出：abc10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>📢 但请注意，以这种方式重写的成员不会在委托对象的成员中调用 ，委托对象的成员只能访问其自身对接口成员实现：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">interface</span> Base <span class="token punctuation">{</span>
    <span class="token keyword">val</span> message<span class="token operator">:</span> String
    <span class="token keyword">fun</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token function">BaseImpl</span><span class="token punctuation">(</span><span class="token keyword">val</span> x<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token operator">:</span> Base <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">val</span> message <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"BaseImpl: x = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">x</span></span><span class="token string">"</span></span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token function">Derived</span><span class="token punctuation">(</span>b<span class="token operator">:</span> Base<span class="token punctuation">)</span> <span class="token operator">:</span> Base <span class="token keyword">by</span> b <span class="token punctuation">{</span>
    <span class="token comment">// 在 b 的 `print` 实现中不会访问到这个属性</span>
    <span class="token keyword">override</span> <span class="token keyword">val</span> message <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"Message of Derived"</span></span>
    <span class="token comment">// override fun print() { println(message) } // 添加这段输出：Message of Derived</span>

<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> b <span class="token operator">=</span> <span class="token function">BaseImpl</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> derived <span class="token operator">=</span> <span class="token function">Derived</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    derived<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>derived<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// BaseImpl: x = 10</span>
<span class="token comment">// Message of Derived</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h1 id="question-list" tabindex="-1"><a class="header-anchor" href="#question-list" aria-hidden="true">#</a> question list</h1>
<ul>
<li>委托和继承的区别</li>
</ul>
</template>
