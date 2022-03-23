<template><h1 id="对象表达式与对象声明" tabindex="-1"><a class="header-anchor" href="#对象表达式与对象声明" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/object-declarations.html" target="_blank" rel="noopener noreferrer">对象表达式与对象声明<ExternalLinkIcon/></a></h1>
<p>有时候需要创建一个对某个类做了轻微改动的类的对象，而不用为之显式声明新的子类。 Kotlin 可以用对象表达式与对象声明处理这种情况。</p>
<h2 id="创建匿名对象" tabindex="-1"><a class="header-anchor" href="#创建匿名对象" aria-hidden="true">#</a> 创建匿名对象</h2>
<p>从头创建</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//sampleStart</span>
    <span class="token keyword">val</span> helloWorld <span class="token operator">=</span> <span class="token keyword">object</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> hello <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"Hello"</span></span>
        <span class="token keyword">val</span> world <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"World"</span></span>
        <span class="token comment">// object expressions extend Any, so `override` is required on `toString()`</span>
        <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">hello</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">world</span></span><span class="token string">"</span></span>
    <span class="token punctuation">}</span>
<span class="token comment">//sampleEnd</span>
    <span class="token function">print</span><span class="token punctuation">(</span>helloWorld<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>继承自某个（或某些）类型的匿名类的对象。</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> <span class="token function">A</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">open</span> <span class="token keyword">val</span> y<span class="token operator">:</span> Int <span class="token operator">=</span> x
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> B <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>

<span class="token keyword">val</span> ab<span class="token operator">:</span> A <span class="token operator">=</span> <span class="token keyword">object</span> <span class="token operator">:</span> <span class="token function">A</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> B <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">val</span> y <span class="token operator">=</span> <span class="token number">15</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>对象表达式中的代码可以访问来自包含它的作用域的变量：</p>
<h2 id="对象声明" tabindex="-1"><a class="header-anchor" href="#对象声明" aria-hidden="true">#</a> 对象声明</h2>
<p>使单例声明变得很容易</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">object</span> DataProviderManager <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">registerDataProvider</span><span class="token punctuation">(</span>provider<span class="token operator">:</span> DataProvider<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ……</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">val</span> allDataProviders<span class="token operator">:</span> Collection<span class="token operator">&lt;</span>DataProvider<span class="token operator">></span>
        <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token comment">// ……</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>对象声明的初始化过程是线程安全(??①)的并且在首次访问时进行</p>
<h2 id="伴生对象" tabindex="-1"><a class="header-anchor" href="#伴生对象" aria-hidden="true">#</a> 伴生对象</h2>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> MyClass <span class="token punctuation">{</span>
    <span class="token keyword">companion</span> <span class="token keyword">object</span> Factory <span class="token punctuation">{</span>
        <span class="token keyword">fun</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MyClass <span class="token operator">=</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>该伴生对象的成员可通过只使用类名作为限定符来调用：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> instance <span class="token operator">=</span> MyClass<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以省略伴生对象的名称，在这种情况下将使用名称 Companion：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> MyClass <span class="token punctuation">{</span>
    <span class="token keyword">companion</span> <span class="token keyword">object</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">val</span> x <span class="token operator">=</span> MyClass<span class="token punctuation">.</span>Companion
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其自身所用的类的名称（不是另一个名称的限定符）可用作对该类的伴生对象 （无论是否具名）的引用：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> MyClass1 <span class="token punctuation">{</span>
    <span class="token keyword">companion</span> <span class="token keyword">object</span> Named <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">val</span> x <span class="token operator">=</span> MyClass1

<span class="token keyword">class</span> MyClass2 <span class="token punctuation">{</span>
    <span class="token keyword">companion</span> <span class="token keyword">object</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">val</span> y <span class="token operator">=</span> MyClass2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>📢 请注意，即使伴生对象的成员看起来像其他语言的静态成员，在运行时他们仍然是真实对象的实例成员，而且，例如还可以实现接口：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">interface</span> Factory<span class="token operator">&lt;</span>T<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> T
<span class="token punctuation">}</span>

<span class="token keyword">class</span> MyClass <span class="token punctuation">{</span>
    <span class="token keyword">companion</span> <span class="token keyword">object</span> <span class="token operator">:</span> Factory<span class="token operator">&lt;</span>MyClass<span class="token operator">></span> <span class="token punctuation">{</span>
        <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MyClass <span class="token operator">=</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">val</span> f<span class="token operator">:</span> Factory<span class="token operator">&lt;</span>MyClass<span class="token operator">></span> <span class="token operator">=</span> MyClass
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="对象表达式和对象声明之间的语义差异" tabindex="-1"><a class="header-anchor" href="#对象表达式和对象声明之间的语义差异" aria-hidden="true">#</a> 对象表达式和对象声明之间的语义差异</h2>
<p>对象表达式和对象声明之间有一个重要的语义差别：</p>
<ul>
<li>对象表达式是在使用他们的地方立即执行（及初始化）的。</li>
<li>对象声明是在第一次被访问到时延迟初始化的。</li>
<li>伴生对象的初始化是在相应的类被加载（解析）时，与 Java 静态初始化器的语义相匹配 。</li>
</ul>
<h1 id="question-list" tabindex="-1"><a class="header-anchor" href="#question-list" aria-hidden="true">#</a> question list</h1>
<ul>
<li>??①: 线程安全</li>
</ul>
</template>
