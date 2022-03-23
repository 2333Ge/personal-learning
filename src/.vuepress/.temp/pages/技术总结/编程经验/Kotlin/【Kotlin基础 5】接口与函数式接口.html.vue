<template><h1 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/interfaces.html" target="_blank" rel="noopener noreferrer">接口<ExternalLinkIcon/></a></h1>
<p>Kotlin 的接口既包含抽象方法的声明也包含实现。与抽象类不同的是，接口无法保存状态。它可以有属性但必须声明为抽象或提供访问器实现</p>
<h2 id="接口中的属性" tabindex="-1"><a class="header-anchor" href="#接口中的属性" aria-hidden="true">#</a> 接口中的属性</h2>
<p>可以在接口中定义属性。在接口中声明的属性要么是抽象的，要么提供访问器的实现。在接口中声明的属性不能有幕后字段（backing field），因此接口中声明的访问器不能引用它们：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">interface</span> MyInterface <span class="token punctuation">{</span>
    <span class="token keyword">val</span> prop<span class="token operator">:</span> Int <span class="token comment">// 抽象的</span>

    <span class="token keyword">val</span> propertyWithImplementation<span class="token operator">:</span> String
        <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"foo"</span></span>

    <span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> Child <span class="token operator">:</span> MyInterface <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">val</span> prop<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">29</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="解决覆盖冲突" tabindex="-1"><a class="header-anchor" href="#解决覆盖冲突" aria-hidden="true">#</a> 解决覆盖冲突</h2>
<p>实现多个接口时，可能会遇到同一方法继承多个实现的问题</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">interface</span> A <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"A"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">fun</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> B <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"B"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">fun</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"bar"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> C <span class="token operator">:</span> A <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"bar"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> D <span class="token operator">:</span> A<span class="token punctuation">,</span> B <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token operator">&lt;</span>A<span class="token operator">></span><span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">super</span><span class="token operator">&lt;</span>B<span class="token operator">></span><span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token operator">&lt;</span>B<span class="token operator">></span><span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>如果从 A 和 B 派生 D，需要实现从多个接口继承的所有方法，并指明 D 应该如何实现它们</p>
<h1 id="函数式-sam-接口" tabindex="-1"><a class="header-anchor" href="#函数式-sam-接口" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/fun-interfaces.html" target="_blank" rel="noopener noreferrer">函数式（SAM）接口<ExternalLinkIcon/></a></h1>
<p>只有一个抽象方法的接口称为函数式接口或 单一抽象方法（SAM）接口。函数式接口可以有多个非抽象成员，但只能有一个抽象成员。
可以用 fun 修饰符在 Kotlin 中声明一个函数式接口。</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token keyword">interface</span> KRunnable <span class="token punctuation">{</span>
   <span class="token keyword">fun</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="sam-转换" tabindex="-1"><a class="header-anchor" href="#sam-转换" aria-hidden="true">#</a> SAM 转换</h1>
<p>对于函数式接口，可以通过 lambda 表达式实现 SAM 转换，从而使代码更简洁、更有可读性。</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token keyword">interface</span> IntPredicate <span class="token punctuation">{</span>
   <span class="token keyword">fun</span> <span class="token function">accept</span><span class="token punctuation">(</span>i<span class="token operator">:</span> Int<span class="token punctuation">)</span><span class="token operator">:</span> Boolean
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果不使用 SAM 转换，那么你需要像这样编写代码：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token comment">// 创建一个类的实例</span>
<span class="token keyword">val</span> isEven <span class="token operator">=</span> <span class="token keyword">object</span> <span class="token operator">:</span> IntPredicate <span class="token punctuation">{</span>
   <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">accept</span><span class="token punctuation">(</span>i<span class="token operator">:</span> Int<span class="token punctuation">)</span><span class="token operator">:</span> Boolean <span class="token punctuation">{</span>
       <span class="token keyword">return</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>通过利用 Kotlin 的 SAM 转换，可以改为以下等效代码：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token comment">// 通过 lambda 表达式创建一个实例</span>
<span class="token keyword">val</span> isEven <span class="token operator">=</span> IntPredicate <span class="token punctuation">{</span> it <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>n</p>
</template>
