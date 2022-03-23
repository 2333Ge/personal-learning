<template><h1 id="属性委托" tabindex="-1"><a class="header-anchor" href="#属性委托" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/delegated-properties.html" target="_blank" rel="noopener noreferrer">属性委托<ExternalLinkIcon/></a></h1>
<blockquote>
<p>新知识点，参阅<a href="https://book.kotlincn.net/text/delegated-properties.html" target="_blank" rel="noopener noreferrer">原文<ExternalLinkIcon/></a></p>
</blockquote>
<p>??①</p>
<h2 id="延迟属性" tabindex="-1"><a class="header-anchor" href="#延迟属性" aria-hidden="true">#</a> 延迟属性</h2>
<p><code>lazy()</code> 是接受一个 lambda 并返回一个 <code>Lazy &lt;T&gt;</code> 实例的函数，返回的实例可以作为实现延迟属性的委托。 第一次调用 <code>get()</code> 会执行已传递给 <code>lazy()</code> 的 lambda 表达式并记录结果。 后续调用 <code>get()</code> 只是返回记录的结果。</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> lazyValue<span class="token operator">:</span> String <span class="token keyword">by</span> lazy <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"computed!"</span></span><span class="token punctuation">)</span>
    <span class="token string-literal singleline"><span class="token string">"Hello"</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span>lazyValue<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>lazyValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>默认情况下，对于 lazy 属性的求值是同步锁的（synchronized）：该值只在一个线程中计算，但所有线程都会看到相同的值。如果初始化委托的同步锁不是必需的，这样可以让多个线程同时执行，那么将 <code>LazyThreadSafetyMode.PUBLICATION</code> 作为参数传给 <code>lazy()</code>。</p>
<p>如果你确定初始化将总是发生在与属性使用位于相同的线程， 那么可以使用 <code>LazyThreadSafetyMode.NONE</code> 模式。它不会有任何线程安全的保证以及相关的开销。</p>
<h2 id="可观察属性-observable-properties" tabindex="-1"><a class="header-anchor" href="#可观察属性-observable-properties" aria-hidden="true">#</a> 可观察属性 Observable properties</h2>
<p><code>Delegates.observable()</code> 接受两个参数：初始值与修改时处理程序（handler）。</p>
<p>每当我们给属性赋值时会调用该处理程序（在赋值后执行）。它有三个参数：被赋值的属性、旧值与新值：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">import</span> kotlin<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>Delegates

<span class="token keyword">class</span> User <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token operator">:</span> String <span class="token keyword">by</span> Delegates<span class="token punctuation">.</span><span class="token function">observable</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"&lt;no name>"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        prop<span class="token punctuation">,</span> old<span class="token punctuation">,</span> new <span class="token operator">-></span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">old</span></span><span class="token string"> -> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">new</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> user <span class="token operator">=</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"first"</span></span>
    user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"second"</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>如果你想截获赋值并否决它们，那么使用 <code>vetoable()</code> 取代 <code>observable()</code>。 在属性被赋新值之前会调用传递给 <code>vetoable</code> 的处理程序。</p>
<h2 id="委托给另一个属性" tabindex="-1"><a class="header-anchor" href="#委托给另一个属性" aria-hidden="true">#</a> 委托给另一个属性</h2>
<p>一个属性可以把它的 <code>getter</code> 与 <code>setter</code> 委托给另一个属性。这种委托对于顶层和类的属性（成员和扩展）都可用。该委托属性可以为</p>
<ul>
<li>顶层属性</li>
<li>同一个类的成员或扩展属性</li>
<li>另一个类的成员或扩展属性</li>
</ul>
<p>将一个属性委托给另一个属性，应在委托名称中使用 <code>::</code> 限定符，例如，<code>this::delegate</code> 或 <code>MyClass::delegate</code>。</p>
<p>如：当想要以一种向后兼容的方式重命名一个属性的时候：引入一个新的属性、 使用 <code>@Deprecated</code> 注解来注解旧的属性、并委托其实现。</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> MyClass <span class="token punctuation">{</span>
   <span class="token keyword">var</span> newName<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">0</span>
   <span class="token annotation builtin">@Deprecated</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Use 'newName' instead"</span></span><span class="token punctuation">,</span> <span class="token function">ReplaceWith</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"newName"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token keyword">var</span> oldName<span class="token operator">:</span> Int <span class="token keyword">by</span> <span class="token keyword">this</span><span class="token operator">::</span>newName
<span class="token punctuation">}</span>
<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">val</span> myClass <span class="token operator">=</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token comment">// 通知：'oldName: Int' is deprecated.</span>
   <span class="token comment">// Use 'newName' instead</span>
   myClass<span class="token punctuation">.</span>oldName <span class="token operator">=</span> <span class="token number">42</span>
   <span class="token function">println</span><span class="token punctuation">(</span>myClass<span class="token punctuation">.</span>newName<span class="token punctuation">)</span> <span class="token comment">// 42</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="将属性储存在映射中" tabindex="-1"><a class="header-anchor" href="#将属性储存在映射中" aria-hidden="true">#</a> 将属性储存在映射中</h2>
<ul>
<li>??②：不太明白作用</li>
</ul>
<p>剩下的待办，之后看</p>
<h1 id="question-list" tabindex="-1"><a class="header-anchor" href="#question-list" aria-hidden="true">#</a> question list</h1>
<ul>
<li>??①: 标准委托前的说明不太理解，应用 or 原理？</li>
<li>??②：不太明白作用</li>
</ul>
</template>
