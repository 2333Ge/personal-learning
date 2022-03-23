<template><h1 id="泛型-in、out、where" tabindex="-1"><a class="header-anchor" href="#泛型-in、out、where" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/generics.html" target="_blank" rel="noopener noreferrer">泛型：in、out、where<ExternalLinkIcon/></a></h1>
<p>均是新知识点，参阅<a href="https://book.kotlincn.net/text/generics.html" target="_blank" rel="noopener noreferrer">原文<ExternalLinkIcon/></a>
帮助理解可参阅此文：https://juejin.cn/post/6856228495850487821</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> …… <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">></span></span> items<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>java 中通配符类型参数 <code>? extends E</code> 表示此方法接受 <code>E</code> 或者 <code>E</code> 的一个子类型对象的集合，而不只是 <code>E</code> 自身。 这意味着我们可以安全地从其中 （该集合中的元素是 <code>E</code> 的子类的实例）读取 <code>E</code>，但不能写入， 因为我们不知道什么对象符合那个未知的 <code>E</code> 的子类型</p>
<h2 id="型变-1" tabindex="-1"><a class="header-anchor" href="#型变-1" aria-hidden="true">#</a> 型变??①</h2>
<p>eg: Java 中的泛型是不型变的，这意味着 <code>List&lt;String&gt;</code> 并不是 <code>List&lt;Object&gt;</code> 的子类型</p>
<h1 id="声明处型变" tabindex="-1"><a class="header-anchor" href="#声明处型变" aria-hidden="true">#</a> 声明处型变</h1>
<p><code>Source&lt;? extends Object&gt;</code> =&gt; <code> Source&lt;out T&gt;</code>
<code>Source&lt;? super Object&gt;</code> =&gt; <code> Source&lt;in T&gt;</code></p>
<p>一般原则是：当一个类 C 的类型参数 T 被声明为 out 时，它就只能出现在 C 的成员的输出-位置， 但回报是 <code>C&lt;Base&gt;</code> 可以安全地作为 <code>C&lt;Derived&gt;</code> 的超类</p>
<p>协变</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">interface</span> Source<span class="token operator">&lt;</span><span class="token keyword">out</span> T<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">nextT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> T
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">demo</span><span class="token punctuation">(</span>strs<span class="token operator">:</span> Source<span class="token operator">&lt;</span>String<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> objects<span class="token operator">:</span> Source<span class="token operator">&lt;</span>Any<span class="token operator">></span> <span class="token operator">=</span> strs <span class="token comment">// 这个没问题，因为 T 是一个 out-参数</span>
    <span class="token comment">// ……</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>逆变</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">interface</span> Comparable<span class="token operator">&lt;</span><span class="token keyword">in</span> T<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">operator</span> <span class="token keyword">fun</span> <span class="token function">compareTo</span><span class="token punctuation">(</span>other<span class="token operator">:</span> T<span class="token punctuation">)</span><span class="token operator">:</span> Int
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">demo</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Comparable<span class="token operator">&lt;</span>Number<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span> <span class="token comment">// 1.0 拥有类型 Double，它是 Number 的子类型</span>
    <span class="token comment">// 因此，可以将 x 赋给类型为 Comparable &lt;Double> 的变量</span>
    <span class="token keyword">val</span> y<span class="token operator">:</span> Comparable<span class="token operator">&lt;</span>Double<span class="token operator">></span> <span class="token operator">=</span> x <span class="token comment">// OK！</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="使用处型变" tabindex="-1"><a class="header-anchor" href="#使用处型变" aria-hidden="true">#</a> 使用处型变</h2>
<h2 id="类型投影" tabindex="-1"><a class="header-anchor" href="#类型投影" aria-hidden="true">#</a> 类型投影</h2>
<p>查看官方 demo：https://book.kotlincn.net/text/generics.html</p>
<h2 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束" aria-hidden="true">#</a> 泛型约束</h2>
<h3 id="上界-2" tabindex="-1"><a class="header-anchor" href="#上界-2" aria-hidden="true">#</a> 上界??②</h3>
<h1 id="question-list" tabindex="-1"><a class="header-anchor" href="#question-list" aria-hidden="true">#</a> question list</h1>
<ul>
<li>??①:什么是型变</li>
<li>??②：不太明白</li>
</ul>
</template>
