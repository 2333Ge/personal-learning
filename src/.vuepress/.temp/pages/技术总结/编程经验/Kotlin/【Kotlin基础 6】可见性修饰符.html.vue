<template><h1 id="可见性修饰符" tabindex="-1"><a class="header-anchor" href="#可见性修饰符" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/visibility-modifiers.html" target="_blank" rel="noopener noreferrer">可见性修饰符<ExternalLinkIcon/></a></h1>
<p>类、对象、接口、构造函数、方法与属性及其 setter 都可以有可见性修饰符。getter 总是与属性有着相同的可见性。</p>
<p>在 Kotlin 中有这四个可见性修饰符：<code>private</code>、 <code>protected</code>、 <code>internal</code> 和 <code>public。</code> 默认可见性是 <code>public</code>。</p>
<h2 id="包" tabindex="-1"><a class="header-anchor" href="#包" aria-hidden="true">#</a> 包</h2>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token comment">// 文件名：example.kt</span>
<span class="token keyword">package</span> foo

<span class="token keyword">private</span> <span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> …… <span class="token punctuation">}</span> <span class="token comment">// 在 example.kt 内可见</span>

<span class="token keyword">public</span> <span class="token keyword">var</span> bar<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment">// 该属性随处可见</span>
    <span class="token keyword">private</span> <span class="token keyword">set</span>         <span class="token comment">// setter 只在 example.kt 内可见</span>

<span class="token keyword">internal</span> <span class="token keyword">val</span> baz <span class="token operator">=</span> <span class="token number">6</span>    <span class="token comment">// 相同模块内可见</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li><code>public</code>:默认，随处可见</li>
<li><code>internal</code>: 相同<a href="#%E6%A8%A1%E5%9D%97">模块</a>内随处可见</li>
<li><code>private</code>: 同文件内可见</li>
<li><code>protected</code>： 不适用</li>
</ul>
<h2 id="类成员" tabindex="-1"><a class="header-anchor" href="#类成员" aria-hidden="true">#</a> 类成员</h2>
<p>类内部声明的成员：</p>
<ul>
<li><code>private</code>: 只该成员所在类内部可见；</li>
<li><code>protected</code>: 具有与 <code>private</code> 一样的可见性，但也在子类中可见。</li>
<li><code>internal</code>: 能见到类声明的本模块内的任何客户端都可见其 <code>internal</code> 成员。</li>
<li><code>public</code>: 能见到类声明的任何客户端都可见其 <code>public</code> 成员。</li>
</ul>
<p>覆盖一个 <code>protected</code> 或 <code>internal</code> 成员并且没有显式指定其可见性，该成员还会具有与原始成员相同的可见性</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> Outer <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">val</span> a <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">protected</span> <span class="token keyword">open</span> <span class="token keyword">val</span> b <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">internal</span> <span class="token keyword">open</span> <span class="token keyword">val</span> c <span class="token operator">=</span> <span class="token number">3</span>
    <span class="token keyword">val</span> d <span class="token operator">=</span> <span class="token number">4</span>  <span class="token comment">// 默认 public</span>

    <span class="token keyword">protected</span> <span class="token keyword">class</span> Nested <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">val</span> e<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> Subclass <span class="token operator">:</span> <span class="token function">Outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// a 不可见</span>
    <span class="token comment">// b、c、d 可见</span>
    <span class="token comment">// Nested 和 e 可见</span>

    <span class="token keyword">override</span> <span class="token keyword">val</span> b <span class="token operator">=</span> <span class="token number">5</span>   <span class="token comment">// “b”为 protected</span>
    <span class="token keyword">override</span> <span class="token keyword">val</span> c <span class="token operator">=</span> <span class="token number">7</span>   <span class="token comment">// 'c' is internal</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token function">Unrelated</span><span class="token punctuation">(</span>o<span class="token operator">:</span> Outer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// o.a、o.b 不可见</span>
    <span class="token comment">// o.c 和 o.d 可见（相同模块）</span>
    <span class="token comment">// Outer.Nested 不可见，Nested::e 也不可见</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2>
<p>可见性修饰符 <code>internal</code> 意味着该成员只在相同模块内可见。更具体地说， 一个模块是编译在一起的一套 Kotlin 文件，例如：</p>
<ul>
<li>一个 IntelliJ IDEA 模块</li>
<li>一个 Maven 项目</li>
<li>一个 Gradle 源代码集（例外是 test 源代码集可以访问 main 的 <code>internal</code> 声明）</li>
<li>一次 <kotlinc> Ant 任务执行所编译的一套文件</li>
</ul>
</template>
