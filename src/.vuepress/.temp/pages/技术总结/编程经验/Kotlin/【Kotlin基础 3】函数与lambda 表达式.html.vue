<template><h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/functions.html" target="_blank" rel="noopener noreferrer">函数<ExternalLinkIcon/></a></h1>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">powerOf</span><span class="token punctuation">(</span>
    number<span class="token operator">:</span> Int<span class="token punctuation">,</span>
    exponent<span class="token operator">:</span> Int
<span class="token punctuation">)</span><span class="token operator">:</span>Int <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h2>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">read</span><span class="token punctuation">(</span>
    b<span class="token operator">:</span> ByteArray<span class="token punctuation">,</span>
    off<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    len<span class="token operator">:</span> Int <span class="token operator">=</span> b<span class="token punctuation">.</span>size <span class="token comment">// 可以用根据前面参数得出默认值</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>覆盖方法总是使用与基类型方法相同的默认参数值。当覆盖一个有默认参数值的方法时，必须从签名中省略默认参数值</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> A <span class="token punctuation">{</span>
    <span class="token keyword">open</span> <span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span>i<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> B <span class="token operator">:</span> <span class="token function">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span>i<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>  <span class="token comment">// 不能有默认值。</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果一个默认参数在一个无默认值的参数之前，那么该默认值只能通过使用具名参数调用该函数来使用</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span>
    bar<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    baz<span class="token operator">:</span> Int<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span>baz <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 使用默认值 bar = 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果在默认参数之后的最后一个参数是 lambda 表达式，那么它既可以作为具名参数在括号内传入，也可以在括号外传入：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span>
    bar<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    baz<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    qux<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> Unit<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"hello"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>     <span class="token comment">// 使用默认值 baz = 1</span>
<span class="token function">foo</span><span class="token punctuation">(</span>qux <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"hello"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 使用两个默认值 bar = 0 与 baz = 1</span>
foo <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"hello"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="具名参数" tabindex="-1"><a class="header-anchor" href="#具名参数" aria-hidden="true">#</a> 具名参数</h2>
<p>解决多参数、难以关联的问题</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">reformat</span><span class="token punctuation">(</span>
    str<span class="token operator">:</span> String<span class="token punctuation">,</span>
    normalizeCase<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    upperCaseFirstLetter<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    divideByCamelHumps<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    wordSeparator<span class="token operator">:</span> Char <span class="token operator">=</span> <span class="token char">' '</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>不需要指明全部参数</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token function">reformat</span><span class="token punctuation">(</span>
    <span class="token string-literal singleline"><span class="token string">"String!"</span></span><span class="token punctuation">,</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span>
    upperCaseFirstLetter <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    divideByCamelHumps <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token char">'_'</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>某个参数被跳过后，后面的参数必须指明参数名</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token function">reformat</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"This is a short String!"</span></span><span class="token punctuation">,</span> upperCaseFirstLetter <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> wordSeparator <span class="token operator">=</span> <span class="token char">'_'</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>您可以使用 spread 运算符传递具有名称的可变数量的参数（vararg）</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token keyword">vararg</span> strings<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span>strings <span class="token operator">=</span> <span class="token operator">*</span><span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"a"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"b"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"c"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="单表达式函数" tabindex="-1"><a class="header-anchor" href="#单表达式函数" aria-hidden="true">#</a> 单表达式函数</h2>
<p>当函数返回单个表达式时，可以省略花括号并且在 = 符号之后指定代码体即可</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">double</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token operator">=</span> x <span class="token operator">*</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>返回值类型可由编译器推断时,显式声明可省</p>
<h2 id="可变数量的参数-varargs" tabindex="-1"><a class="header-anchor" href="#可变数量的参数-varargs" aria-hidden="true">#</a> 可变数量的参数（varargs）</h2>
<p>只有一个参数可以标注为 vararg，如果 vararg 参数不是列表中的最后一个参数， 可以使用具名参数语法传递其后的参数的值</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">vararg</span> b<span class="token operator">:</span> Int<span class="token punctuation">,</span> c<span class="token operator">:</span>String<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">""</span></span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">""</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="中缀表示法" tabindex="-1"><a class="header-anchor" href="#中缀表示法" aria-hidden="true">#</a> 中缀表示法</h2>
<p>标有 infix 关键字的函数也可以使用中缀表示法（忽略该调用的点与圆括号）调用。 中缀函数必须满足以下要求：</p>
<ul>
<li>它们必须是成员函数或<a href="https://book.kotlincn.net/text/extensions.html" target="_blank" rel="noopener noreferrer">扩展函数<ExternalLinkIcon/></a>。</li>
<li>它们必须只有一个参数。</li>
<li>其参数不得接受可变数量的参数且不能有默认值。</li>
</ul>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">infix</span> <span class="token keyword">fun</span> Int<span class="token punctuation">.</span><span class="token function">shl</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Int<span class="token punctuation">)</span><span class="token operator">:</span> Int <span class="token punctuation">{</span> …… <span class="token punctuation">}</span>

<span class="token comment">// 用中缀表示法调用该函数</span>
<span class="token number">1</span> <span class="token operator">shl</span> <span class="token number">2</span>

<span class="token comment">// 等同于这样</span>
<span class="token number">1</span><span class="token punctuation">.</span><span class="token function">shl</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>中缀函数调用的优先级低于算术操作符、类型转换以及 rangeTo 操作符。以下表达式是等价的：</p>
<ul>
<li><code>1 shl 2 + 3</code> 等价于 <code>1 shl (2 + 3)</code></li>
<li><code>0 until n * 2</code> 等价于 <code>0 until (n * 2)</code></li>
<li><code>xs union ys as Set&lt;*&gt;</code> 等价于 <code>xs union (ys as Set&lt;*&gt;)</code></li>
</ul>
<p>另一方面，中缀函数调用的优先级高于布尔操作符 &amp;&amp; 与 ||、is- 与 in- 检测以及其他一些操作符。这些表达式也是等价的：</p>
<ul>
<li><code>a &amp;&amp; b xor c</code> 等价于 <code>a &amp;&amp; (b xor c)</code></li>
<li><code>a xor b in c</code> 等价于 <code>(a xor b) in c</code></li>
</ul>
<p>使用中缀表示法在当前接收者上调用方法时，需要显式使用 this</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> MyStringCollection <span class="token punctuation">{</span>
    <span class="token keyword">infix</span> <span class="token keyword">fun</span> <span class="token function">add</span><span class="token punctuation">(</span>s<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span> add <span class="token string-literal singleline"><span class="token string">"abc"</span></span>   <span class="token comment">// 正确</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"abc"</span></span><span class="token punctuation">)</span>       <span class="token comment">// 正确</span>
        <span class="token comment">//add "abc"        // 错误：必须指定接收者</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域" aria-hidden="true">#</a> 函数作用域</h2>
<p>Kotlin 函数可以在文件顶层声明，这意味着你不需要像一些语言如 Java、C# 与 Scala 那样需要创建一个类来保存一个函数。此外除了顶层函数，Kotlin 中函数也可以声明在局部作用域、作为成员函数以及扩展函数。</p>
<h3 id="局部函数" tabindex="-1"><a class="header-anchor" href="#局部函数" aria-hidden="true">#</a> 局部函数</h3>
<p>Kotlin 支持局部函数，即一个函数在另一个函数内部：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token operator">:</span> Graph<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">dfs</span><span class="token punctuation">(</span>current<span class="token operator">:</span> Vertex<span class="token punctuation">,</span> visited<span class="token operator">:</span> MutableSet<span class="token operator">&lt;</span>Vertex<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>v <span class="token keyword">in</span> current<span class="token punctuation">.</span>neighbors<span class="token punctuation">)</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> visited<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">.</span>vertices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">HashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="泛型函数" tabindex="-1"><a class="header-anchor" href="#泛型函数" aria-hidden="true">#</a> 泛型函数</h3>
<p>函数可以有泛型参数，通过在函数名前使用尖括号指定：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token operator">&lt;</span>T<span class="token operator">></span> <span class="token function">singletonList</span><span class="token punctuation">(</span>item<span class="token operator">:</span> T<span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token operator">&lt;</span>T<span class="token operator">></span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="尾递归" tabindex="-1"><a class="header-anchor" href="#尾递归" aria-hidden="true">#</a> 尾递归</h3>
<p>当一个函数用 tailrec 修饰符标记并满足所需的形式条件时，编译器会优化该递归， 留下一个快速而高效的基于循环的版本</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> eps <span class="token operator">=</span> <span class="token number">1E-10</span>

<span class="token keyword">tailrec</span> <span class="token keyword">fun</span> <span class="token function">findFixPoint</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Double <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token operator">:</span> Double <span class="token operator">=</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>x <span class="token operator">-</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> eps<span class="token punctuation">)</span> x <span class="token keyword">else</span> <span class="token function">findFixPoint</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>要符合 tailrec 修饰符的条件的话，函数必须将其自身调用作为它执行的最后一个操作。在递归调用后有更多代码时， 不能使用尾递归</p>
<h1 id="高阶函数与-lambda-表达式" tabindex="-1"><a class="header-anchor" href="#高阶函数与-lambda-表达式" aria-hidden="true">#</a> 高阶函数与 lambda 表达式</h1>
<p>都是新知识点：参阅<a href="https://book.kotlincn.net/text/lambdas.html" target="_blank" rel="noopener noreferrer">原文<ExternalLinkIcon/></a></p>
<p>Kotlin 函数都是头等的，这意味着它们可以存储在变量与数据结构中.(和 TS 非常像)</p>
<h2 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h2>
<p>高阶函数是将函数用作参数或返回值的函数</p>
<h2 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h2>
<p>函数类型表示法可以选择性地包含函数的参数名：<code>(x: Int, y: Int) -&gt; Point</code>。 这些名称可用于表明参数的含义</p>
<p>函数类型指定为可空，请使用圆括号，如下所示： <code>((Int, Int) -&gt; Int)?</code>。</p>
<p>函数类型还可以使用圆括号进行接合：<code>(Int) -&gt; ((Int) -&gt; Unit)</code>。</p>
<blockquote>
<p>箭头表示法是右结合的，<code>(Int) -&gt; (Int) -&gt; Unit</code> 与前述示例等价</p>
</blockquote>
<p>可以通过使用<a href="https://book.kotlincn.net/text/type-aliases.html" target="_blank" rel="noopener noreferrer">类型别名<ExternalLinkIcon/></a>给函数类型起一个别称：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">typealias</span> ClickHandler <span class="token operator">=</span> <span class="token punctuation">(</span>Button<span class="token punctuation">,</span> ClickEvent<span class="token punctuation">)</span> <span class="token operator">-></span> Unit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="函数类型实例化" tabindex="-1"><a class="header-anchor" href="#函数类型实例化" aria-hidden="true">#</a> 函数类型实例化</h2>
<p>获得函数类型的实例</p>
<ul>
<li>使用函数字面值的代码块
<ul>
<li>lambda 表达式: <code>{ a, b -&gt; a + b }</code></li>
<li>匿名函数: <code>fun(s: String): Int { return s.toIntOrNull() ?: 0 }</code></li>
</ul>
</li>
<li>??使用已有声明的可调用引用：
<ul>
<li>顶层、局部、成员、扩展函数：<code>::isOdd</code>、 <code>String::toInt</code>，</li>
<li>顶层、成员、扩展属性：<code>List&lt;Int&gt;::size</code>，</li>
<li>构造函数：<code>::Regex</code></li>
</ul>
</li>
<li>使用实现函数类型接口的自定义类的实例
<blockquote>
<p>📢：注意写法</p>
</blockquote>
</li>
</ul>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> IntTransformer<span class="token operator">:</span> <span class="token punctuation">(</span>Int<span class="token punctuation">)</span> <span class="token operator">-></span> Int <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">operator</span> <span class="token keyword">fun</span> <span class="token function">invoke</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Int<span class="token punctuation">)</span><span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">val</span> intFunction<span class="token operator">:</span> <span class="token punctuation">(</span>Int<span class="token punctuation">)</span> <span class="token operator">-></span> Int <span class="token operator">=</span> <span class="token function">IntTransformer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>与不带接收者的函数类型非字面值可以互换，其中接收者可以替代第一个参数，反之亦然。例如，<code>(A, B) -&gt; C</code> 类型的值可以传给或赋值给期待 <code>A.(B) -&gt; C</code></p>
<p>?? 后面一种写法的意思(扩展函数)</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> repeatFun<span class="token operator">:</span> String<span class="token punctuation">.</span><span class="token punctuation">(</span>Int<span class="token punctuation">)</span> <span class="token operator">-></span> String <span class="token operator">=</span> <span class="token punctuation">{</span> times <span class="token operator">-></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">val</span> twoParameters<span class="token operator">:</span> <span class="token punctuation">(</span>String<span class="token punctuation">,</span> Int<span class="token punctuation">)</span> <span class="token operator">-></span> String <span class="token operator">=</span> repeatFun <span class="token comment">// OK</span>

    <span class="token keyword">fun</span> <span class="token function">runTransformation</span><span class="token punctuation">(</span>f<span class="token operator">:</span> <span class="token punctuation">(</span>String<span class="token punctuation">,</span> Int<span class="token punctuation">)</span> <span class="token operator">-></span> String<span class="token punctuation">)</span><span class="token operator">:</span> String <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"hello"</span></span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">val</span> result <span class="token operator">=</span> <span class="token function">runTransformation</span><span class="token punctuation">(</span>repeatFun<span class="token punctuation">)</span> <span class="token comment">// OK</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"result = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">result</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>?? 如果该值具有??接收者类型，那么应该将接收者对象作为第一个参数传递。 调用带有接收者的函数类型值的另一个方式是在其前面加上接收者对象， 就好比该值是一个拓展函数</p>
<h2 id="lambda-表达式与匿名函数" tabindex="-1"><a class="header-anchor" href="#lambda-表达式与匿名函数" aria-hidden="true">#</a> Lambda 表达式与匿名函数</h2>
<p>Lambda 表达式语法</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> sum<span class="token operator">:</span> <span class="token punctuation">(</span>Int<span class="token punctuation">,</span> Int<span class="token punctuation">)</span> <span class="token operator">-></span> Int <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> Int<span class="token punctuation">,</span> y<span class="token operator">:</span> Int <span class="token operator">-></span> x <span class="token operator">+</span> y <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果将所有可选标注都留下，看起来如下：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> sum <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> Int<span class="token punctuation">,</span> y<span class="token operator">:</span> Int <span class="token operator">-></span> x <span class="token operator">+</span> y <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="传递末尾的-lambda-表达式" tabindex="-1"><a class="header-anchor" href="#传递末尾的-lambda-表达式" aria-hidden="true">#</a> 传递末尾的 lambda 表达式</h2>
<p>按照 Kotlin 惯例，如果函数的最后一个参数是函数，那么作为相应参数传入的 lambda 表达式可以放在圆括号之外：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> product <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">fold</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> acc<span class="token punctuation">,</span> e <span class="token operator">-></span> acc <span class="token operator">*</span> e <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这种语法也称为拖尾 lambda 表达式。
如果该 lambda 表达式是调用时唯一的参数，那么圆括号可以完全省略：
// ?? run</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>run <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"..."</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="it-单个参数的隐式名称" tabindex="-1"><a class="header-anchor" href="#it-单个参数的隐式名称" aria-hidden="true">#</a> <code>it</code> 单个参数的隐式名称</h2>
<h2 id="从-lambda-表达式返回值" tabindex="-1"><a class="header-anchor" href="#从-lambda-表达式返回值" aria-hidden="true">#</a> 从 lambda 表达式返回值</h2>
<p>可以使用限定的返回语法从 lambda 显式返回一个值。 否则，将隐式返回最后一个表达式的值</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>strings<span class="token punctuation">.</span><span class="token function">filter</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">sortedBy</span> <span class="token punctuation">{</span> it <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">map</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span><span class="token function">uppercase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="带接收者的函数字面值" tabindex="-1"><a class="header-anchor" href="#带接收者的函数字面值" aria-hidden="true">#</a> 带接收者的函数字面值</h2>
<h1 id="question-list" tabindex="-1"><a class="header-anchor" href="#question-list" aria-hidden="true">#</a> question list</h1>
<ul>
<li>带有接收者的函数类型实例</li>
<li>::</li>
<li>接收者类型</li>
<li>lambda：run 调用</li>
</ul>
</template>
