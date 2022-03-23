<template><h1 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/extensions.html" target="_blank" rel="noopener noreferrer">扩展<ExternalLinkIcon/></a></h1>
<p>Kotlin 能够对一个类扩展新功能而无需继承该类或者使用像装饰者这样的设计模式。 这通过叫做扩展的特殊声明完成</p>
<blockquote>
<p>例如，你可以为一个你不能修改的、来自第三方库中的类编写一个新的函数。 这个新增的函数就像那个原始类本来就有的函数一样，可以用寻常方式调用。 这种机制称为扩展函数。此外，也有扩展属性， 允许你为一个已经存在的类添加新的属性</p>
</blockquote>
<h2 id="拓展函数" tabindex="-1"><a class="header-anchor" href="#拓展函数" aria-hidden="true">#</a> 拓展函数</h2>
<p>声明一个扩展函数需用一个接收者类型也就是被扩展的类型来作为他的前缀。 下面代码为 <code>MutableList&lt;Int&gt;</code> 添加一个 swap 函数：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> MutableList<span class="token operator">&lt;</span>Int<span class="token operator">></span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>index1<span class="token operator">:</span> Int<span class="token punctuation">,</span> index2<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> tmp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>index1<span class="token punctuation">]</span> <span class="token comment">// “this”对应该列表</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>index1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>index2<span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>index2<span class="token punctuation">]</span> <span class="token operator">=</span> tmp
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这个 this 关键字在扩展函数内部对应到接收者对象（传过来的在点符号前的对象） 现在，可以对任意 MutableList<Int> 调用该函数了：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> list <span class="token operator">=</span> <span class="token function">mutableListOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
list<span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// “swap()”内部的“this”会保存“list”的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>泛型写法</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token operator">&lt;</span>T<span class="token operator">></span> MutableList<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>index1<span class="token operator">:</span> Int<span class="token punctuation">,</span> index2<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> tmp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>index1<span class="token punctuation">]</span> <span class="token comment">// “this”对应该列表</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>index1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>index2<span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>index2<span class="token punctuation">]</span> <span class="token operator">=</span> tmp
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="拓展是静态解析的" tabindex="-1"><a class="header-anchor" href="#拓展是静态解析的" aria-hidden="true">#</a> 拓展是静态解析的</h3>
<p>调用的扩展函数是由函数调用所在的表达式的类型来决定的，而不是由运行时的类型决定的</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">open</span> <span class="token keyword">class</span> Shape
   <span class="token keyword">class</span> Rectangle<span class="token operator">:</span> <span class="token function">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

   <span class="token keyword">fun</span> Shape<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"Shape"</span></span>
   <span class="token keyword">fun</span> Rectangle<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"Rectangle"</span></span>

   <span class="token keyword">fun</span> <span class="token function">printClassName</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>

   <span class="token function">printClassName</span><span class="token punctuation">(</span><span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>这个例子会输出 Shape，因为调用的扩展函数只取决于参数 s 的声明类型，该类型是 Shape 类</p>
<p>如果一个类定义有一个成员函数与一个扩展函数，而这两个函数又有相同的接收者类型、 相同的名字，并且都适用给定的参数，这种情况总是取成员函数。 例如：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> Example <span class="token punctuation">{</span>
        <span class="token keyword">fun</span> <span class="token function">printFunctionType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Class method"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> Example<span class="token punctuation">.</span><span class="token function">printFunctionType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Extension function"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

    <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">printFunctionType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 输出 Class method。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>扩展函数可以重载同样名字但不同签名成员函数</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> Example <span class="token punctuation">{</span>
        <span class="token keyword">fun</span> <span class="token function">printFunctionType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Class method"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> Example<span class="token punctuation">.</span><span class="token function">printFunctionType</span><span class="token punctuation">(</span>i<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Extension function #</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">i</span></span><span class="token string">"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

    <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">printFunctionType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="可空接收者" tabindex="-1"><a class="header-anchor" href="#可空接收者" aria-hidden="true">#</a> 可空接收者</h3>
<p>这样的扩展可以在对象变量上调用， 即使其值为 null，并且可以在函数体内检测 <code>this == null</code></p>
<h2 id="拓展属性" tabindex="-1"><a class="header-anchor" href="#拓展属性" aria-hidden="true">#</a> 拓展属性</h2>
<blockquote>
<p>由于扩展没有实际的将成员插入类中,因此对扩展属性来说幕后字段是无效的。这就是为什么扩展属性不能有初始化器。</p>
</blockquote>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> <span class="token operator">&lt;</span>T<span class="token operator">></span> List<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">.</span>lastIndex<span class="token operator">:</span> Int
    <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> size <span class="token operator">-</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="伴生对象的拓展" tabindex="-1"><a class="header-anchor" href="#伴生对象的拓展" aria-hidden="true">#</a> 伴生对象的拓展</h2>
<p>如果一个类定义有一个伴生对象(??①) ，你也可以为伴生对象定义扩展函数与属性。就像伴生对象的常规成员一样， 可以只使用类名作为限定符来调用伴生对象的扩展成员：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> MyClass <span class="token punctuation">{</span>
    <span class="token keyword">companion</span> <span class="token keyword">object</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> <span class="token comment">// 将被称为 "Companion"</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> MyClass<span class="token punctuation">.</span>Companion<span class="token punctuation">.</span><span class="token function">printCompanion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"companion"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MyClass<span class="token punctuation">.</span><span class="token function">printCompanion</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="扩展的作用域" tabindex="-1"><a class="header-anchor" href="#扩展的作用域" aria-hidden="true">#</a> 扩展的作用域</h2>
<p>大多数情况都在顶层定义扩展——直接在包里：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">package</span> org<span class="token punctuation">.</span>example<span class="token punctuation">.</span>declarations

<span class="token keyword">fun</span> List<span class="token operator">&lt;</span>String<span class="token operator">></span><span class="token punctuation">.</span><span class="token function">getLongestString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如需使用所定义包之外的一个扩展，只需在调用方导入它：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">package</span> org<span class="token punctuation">.</span>example<span class="token punctuation">.</span>usage

<span class="token keyword">import</span> org<span class="token punctuation">.</span>example<span class="token punctuation">.</span>declarations<span class="token punctuation">.</span>getLongestString

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> list <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"red"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"green"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"blue"</span></span><span class="token punctuation">)</span>
    list<span class="token punctuation">.</span><span class="token function">getLongestString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="拓展声明为成员" tabindex="-1"><a class="header-anchor" href="#拓展声明为成员" aria-hidden="true">#</a> 拓展声明为成员</h2>
<blockquote>
<p>扩展声明所在的类的实例称为分发接收者，扩展方法调用所在的接收者类型的实例称为扩展接收者。（??② 说法有点绕）</p>
</blockquote>
<p>可以在一个类内部为另一个类声明扩展</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> <span class="token function">Host</span><span class="token punctuation">(</span><span class="token keyword">val</span> hostname<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">printHostname</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span>hostname<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token function">Connection</span><span class="token punctuation">(</span><span class="token keyword">val</span> host<span class="token operator">:</span> Host<span class="token punctuation">,</span> <span class="token keyword">val</span> port<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">printPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span> <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> Host<span class="token punctuation">.</span><span class="token function">printConnectionString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printHostname</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 调用 Host.printHostname()</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">":"</span></span><span class="token punctuation">)</span>
        <span class="token function">printPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 调用 Connection.printPort()</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">/*……*/</span>
         host<span class="token punctuation">.</span><span class="token function">printConnectionString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 调用扩展函数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Connection</span><span class="token punctuation">(</span><span class="token function">Host</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"kotl.in"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">443</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//Host("kotl.in").printConnectionString()  // 错误，该扩展函数在 Connection 外不可用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>分发接收者与扩展接收者的成员名字冲突的情况，扩展接收者优先。要引用分发接收者的成员你可以使用 限定的 this 语法。</p>
<p>??②</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> Connection <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> Host<span class="token punctuation">.</span><span class="token function">getConnectionString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">// 调用 Host.toString()</span>
        <span class="token keyword">this</span><span class="token label symbol">@Connection</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 调用 Connection.toString()</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>声明为成员的扩展可以声明为 open 并在子类中覆盖。这意味着这些函数的分发对于分发接收者类型是虚拟的，但对于扩展接收者类型是静态的。</p>
<blockquote>
<p>⚠️：注意下方示例</p>
</blockquote>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> Base <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> Derived <span class="token operator">:</span> <span class="token function">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">open</span> <span class="token keyword">class</span> BaseCaller <span class="token punctuation">{</span>
    <span class="token keyword">open</span> <span class="token keyword">fun</span> Base<span class="token punctuation">.</span><span class="token function">printFunctionInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Base extension function in BaseCaller"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">open</span> <span class="token keyword">fun</span> Derived<span class="token punctuation">.</span><span class="token function">printFunctionInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Derived extension function in BaseCaller"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> <span class="token function">call</span><span class="token punctuation">(</span>b<span class="token operator">:</span> Base<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        b<span class="token punctuation">.</span><span class="token function">printFunctionInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 调用扩展函数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> DerivedCaller<span class="token operator">:</span> <span class="token function">BaseCaller</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> Base<span class="token punctuation">.</span><span class="token function">printFunctionInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Base extension function in DerivedCaller"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> Derived<span class="token punctuation">.</span><span class="token function">printFunctionInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Derived extension function in DerivedCaller"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">BaseCaller</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token function">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// “Base extension function in BaseCaller”</span>
    <span class="token function">DerivedCaller</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token function">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// “Base extension function in DerivedCaller”——分发接收者虚拟解析</span>
    <span class="token function">DerivedCaller</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token function">Derived</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// “Base extension function in DerivedCaller”——扩展接收者静态解析</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h1 id="question-list" tabindex="-1"><a class="header-anchor" href="#question-list" aria-hidden="true">#</a> question list</h1>
<ul>
<li>??①：伴生对象？</li>
<li>??②：以该 demo 为例，扩展接收者和分发接收者分别是？
<ul>
<li>分发接收者：声明所在类的实例</li>
<li>拓展接收者：方法拓展的类的实例</li>
</ul>
</li>
</ul>
</template>
