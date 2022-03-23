<template><h1 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/classes.html" target="_blank" rel="noopener noreferrer">类<ExternalLinkIcon/></a></h1>
<p>如果一个类没有类体，可以省略花括号</p>
<h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h2>
<p>类可以有一个主构造函数以及一个或多个次构造函数</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> Person <span class="token keyword">constructor</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果主构造函数没有任何注解或者可见性修饰符,可以省略这个 constructor 关键字。</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> <span class="token function">Person</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>主构造函数不能包含任何的代码。初始化的代码可以放到以 init 关键字作为前缀的初始化块（initializer blocks）中</p>
<p>在实例初始化期间，初始化块按照它们出现在类体中的顺序执行，与属性初始化器交织在一起</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> <span class="token function">InitOrderDemo</span><span class="token punctuation">(</span>name<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> firstProperty <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"First property: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">name</span></span><span class="token string">"</span></span><span class="token punctuation">.</span><span class="token function">also</span><span class="token punctuation">(</span><span class="token operator">::</span>println<span class="token punctuation">)</span>

    <span class="token keyword">init</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"First initializer block that prints </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">val</span> secondProperty <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"Second property: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">name<span class="token punctuation">.</span>length</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">.</span><span class="token function">also</span><span class="token punctuation">(</span><span class="token operator">::</span>println<span class="token punctuation">)</span>

    <span class="token keyword">init</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Second initializer block that prints </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">name<span class="token punctuation">.</span>length</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>造函数有注解或可见性修饰符，这个 constructor 关键字是必需的，并且这些修饰符在它前面</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> Customer <span class="token keyword">public</span> <span class="token annotation builtin">@Inject</span> <span class="token keyword">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="次构造函数" tabindex="-1"><a class="header-anchor" href="#次构造函数" aria-hidden="true">#</a> 次构造函数</h2>
<p>如果类有一个主构造函数，每个次构造函数需要直接或间接委托给主构造函数</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">val</span> name<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> children<span class="token operator">:</span> MutableList<span class="token operator">&lt;</span>Person<span class="token operator">></span> <span class="token operator">=</span> <span class="token function">mutableListOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> String<span class="token punctuation">,</span> parent<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>初始化块中的代码实际上会成为主构造函数的一部分,因此所有初始化块与属性初始化器中的代码都会在次构造函数体之前执行</p>
<h2 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h2>
<p>可以用一个抽象成员覆盖一个非抽象的开放成员</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> Polygon <span class="token punctuation">{</span>
    <span class="token keyword">open</span> <span class="token keyword">fun</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// some default polygon drawing method</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> WildShape <span class="token operator">:</span> <span class="token function">Polygon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Classes that inherit WildShape need to provide their own</span>
    <span class="token comment">// draw method instead of using the default on Polygon</span>
    <span class="token keyword">abstract</span> <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="伴生对象" tabindex="-1"><a class="header-anchor" href="#伴生对象" aria-hidden="true">#</a> 伴生对象</h2>
<p>??②</p>
<p>无需用一个类的实例来调用、但需要访问类内部的函数，你可以把它写成该类内对象声明中的一员</p>
<h1 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/inheritance.html" target="_blank" rel="noopener noreferrer">继承<ExternalLinkIcon/></a></h1>
<p>所有类都有一个共同超类 <code>Any</code></p>
<p>默认类不可继承， 要使一个类可继承，请用 <code>open</code> 关键字标记它：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> Base <span class="token comment">// 该类开放继承</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="覆盖方法" tabindex="-1"><a class="header-anchor" href="#覆盖方法" aria-hidden="true">#</a> 覆盖方法</h2>
<p>可覆盖的成员以及覆盖后的成员需要显式修饰符</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> Shape <span class="token punctuation">{</span>
    <span class="token keyword">open</span> <span class="token keyword">fun</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>
    <span class="token keyword">fun</span> <span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token function">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>标记为 <code>override</code> 的成员本身是开放的，因此可以在子类中覆盖。如果你想禁止再次覆盖， 使用 final 关键字：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> <span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*……*/</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="覆盖属性" tabindex="-1"><a class="header-anchor" href="#覆盖属性" aria-hidden="true">#</a> 覆盖属性</h2>
<p>覆盖机制同方法</p>
<p>可以用一个 var 属性覆盖一个 val 属性，但反之则不行</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">interface</span> Shape <span class="token punctuation">{</span>
    <span class="token keyword">val</span> vertexCount<span class="token operator">:</span> Int
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">override</span> <span class="token keyword">val</span> vertexCount<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">:</span> Shape <span class="token comment">// 总是有 4 个顶点</span>

<span class="token keyword">class</span> Polygon <span class="token operator">:</span> Shape <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">var</span> vertexCount<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">// 以后可以设置为任何数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="派生类初始化顺序" tabindex="-1"><a class="header-anchor" href="#派生类初始化顺序" aria-hidden="true">#</a> 派生类初始化顺序</h2>
<p>第一步完成其基类的初始化，这意味着，基类构造函数执行时，派生类中声明或覆盖的属性都还没有初始化。在基类初始化逻辑中（直接或者通过另一个覆盖的 open 成员的实现间接）使用任何一个这种属性，都可能导致不正确的行为或运行。基类中应该避免在构造函数、属性初始化器或者 init 块中使用 open 成员。</p>
<h2 id="调用超类实现" tabindex="-1"><a class="header-anchor" href="#调用超类实现" aria-hidden="true">#</a> 调用超类实现</h2>
<p>在一个内部类中访问外部类的超类，可以使用由外部类名限定的 super 关键字来实现：<code>super@Outer</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>open class Rectangle {
    open fun draw() { println("Drawing a rectangle") }
    val borderColor: String get() = "black"
}

class FilledRectangle: Rectangle() {
    override fun draw() {
        val filler = Filler()
        filler.drawAndFill()
    }

    inner class Filler {
        fun fill() { println("Filling") }
        fun drawAndFill() {
            super@FilledRectangle.draw() // 调用 Rectangle 的 draw() 实现
            fill()
            println("Drawn a filled rectangle with color ${super@FilledRectangle.borderColor}") // 使用 Rectangle 所实现的 borderColor 的 get()
        }
    }
}

fun main() {
    val fr = FilledRectangle()
        fr.draw()
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="覆盖规则" tabindex="-1"><a class="header-anchor" href="#覆盖规则" aria-hidden="true">#</a> 覆盖规则</h2>
<p>在 Kotlin 中，实现继承由下述规则规定：如果一个类从它的直接超类继承相同成员的多个实现， 它必须覆盖这个成员并提供其自己的实现（也许用继承来的其中之一）。</p>
<p>如需表示采用从哪个超类型继承的实现，请使用由尖括号中超类型名限定的 super ，如 super<Base>：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> Rectangle <span class="token punctuation">{</span>
    <span class="token keyword">open</span> <span class="token keyword">fun</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* …… */</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> Polygon <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* …… */</span> <span class="token punctuation">}</span> <span class="token comment">// 接口成员默认就是“open”的</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token function">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Polygon <span class="token punctuation">{</span>
    <span class="token comment">// 编译器要求覆盖 draw()：</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token operator">&lt;</span>Rectangle<span class="token operator">></span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用 Rectangle.draw()</span>
        <span class="token keyword">super</span><span class="token operator">&lt;</span>Polygon<span class="token operator">></span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用 Polygon.draw()</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>可以同时继承 Rectangle 与 Polygon， 但是二者都有各自的 draw() 实现，所以必须在 Square 中覆盖 draw()， 并为其提供一个单独的实现以消除歧义。</p>
<h1 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/properties.html" target="_blank" rel="noopener noreferrer">属性<ExternalLinkIcon/></a></h1>
<h2 id="getter-与-setter" tabindex="-1"><a class="header-anchor" href="#getter-与-setter" aria-hidden="true">#</a> Getter 与 Setter</h2>
<p>声明一个属性的完整语法如下：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">var</span> <span class="token operator">&lt;</span>propertyName<span class="token operator">></span><span class="token punctuation">[</span><span class="token operator">:</span> <span class="token operator">&lt;</span>PropertyType<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">=</span> <span class="token operator">&lt;</span>property_initializer<span class="token operator">></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token operator">&lt;</span>getter<span class="token operator">></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token operator">&lt;</span>setter<span class="token operator">></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果你需要改变对一个访问器进行注解或者改变其可见性，但是不需要改变默认的实现， 你可以定义访问器而不定义其实现:</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">var</span> setterVisibility<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"abc"</span></span>
    <span class="token keyword">private</span> <span class="token keyword">set</span> <span class="token comment">// 此 setter 是私有的并且有默认实现</span>
<span class="token comment">// ??①</span>
<span class="token keyword">var</span> setterWithAnnotation<span class="token operator">:</span> Any<span class="token operator">?</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token annotation builtin">@Inject</span> <span class="token keyword">set</span> <span class="token comment">// 用 Inject 注解此 setter</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>幕后字段<code>field</code> 标识符只能用在属性的访问器内</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">var</span> counter <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 这个初始器直接为幕后字段赋值</span>
    <span class="token keyword">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span>
            field <span class="token operator">=</span> value
            <span class="token comment">// counter = value // ERROR StackOverflow: Using actual name 'counter' would make setter recursive</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="编译器常量" tabindex="-1"><a class="header-anchor" href="#编译器常量" aria-hidden="true">#</a> 编译器常量</h2>
<p>如果只读属性的值在编译期是已知的，那么可以使用 const 修饰符将其标记为编译期常量，需要满足：</p>
<ul>
<li>必须位于顶层或者是 object 声明 或伴生对象的一个成员 （??②）</li>
<li>必须以 String 或原生类型值初始化</li>
<li>不能有自定义 getter</li>
</ul>
<p>这些属性可以用在注解中：</p>
<p>??①</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>
<span class="token keyword">const</span> <span class="token keyword">val</span> SUBSYSTEM_DEPRECATED<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"This subsystem is deprecated"</span></span>

<span class="token annotation builtin">@Deprecated</span><span class="token punctuation">(</span>SUBSYSTEM_DEPRECATED<span class="token punctuation">)</span> <span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> …… <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="延迟初始化属性与变量" tabindex="-1"><a class="header-anchor" href="#延迟初始化属性与变量" aria-hidden="true">#</a> 延迟初始化属性与变量</h2>
<p>一般地，属性声明为非空类型必须在构造函数中初始化。 然而，这经常不方便。例如：属性可以通过依赖注入来初始化， 或者在单元测试的 setup 方法中初始化。 这种情况下，你<strong>不能在构造函数内提供一个非空初始器。 但你仍然想在类体中引用该属性时避免空检测</strong></p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">public</span> <span class="token keyword">class</span> MyTest <span class="token punctuation">{</span>
    <span class="token keyword">lateinit</span> <span class="token keyword">var</span> subject<span class="token operator">:</span> TestSubject

    <span class="token annotation builtin">@SetUp</span> <span class="token keyword">fun</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        subject <span class="token operator">=</span> <span class="token function">TestSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token annotation builtin">@Test</span> <span class="token keyword">fun</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        subject<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 直接解引用</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="检测一个lateinit-var-是否已初始化" tabindex="-1"><a class="header-anchor" href="#检测一个lateinit-var-是否已初始化" aria-hidden="true">#</a> 检测一个<code>lateinit var</code> 是否已初始化</h3>
<p>要检测一个 <code>lateinit var</code> 是否已经初始化过，请在该<a href="https://book.kotlincn.net/text/reflection.html#%E5%B1%9E%E6%80%A7%E5%BC%95%E7%94%A8" target="_blank" rel="noopener noreferrer">属性的引用<ExternalLinkIcon/></a>上使用 .<code>isInitialized</code>：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token operator">::</span>bar<span class="token punctuation">.</span>isInitialized<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">println</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>此检测仅对可词法级访问(??④)的属性可用，当声明位于同一个类型内、位于其中一个外围类型中或者位于相同文件的顶层的属性时。</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>    <span class="token keyword">class</span> Test1<span class="token punctuation">{</span>
        <span class="token keyword">lateinit</span> <span class="token keyword">var</span> lateInitVar<span class="token operator">:</span>String
        <span class="token keyword">val</span> isInit<span class="token operator">:</span>Boolean
            <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">return</span> <span class="token operator">::</span>lateInitVar<span class="token punctuation">.</span>isInitialized
            <span class="token punctuation">}</span>
        <span class="token keyword">fun</span> <span class="token keyword">init</span><span class="token punctuation">(</span>str<span class="token operator">:</span>String<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">::</span>lateInitVar<span class="token punctuation">.</span>isInitialized<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 正确</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 其他类的访问方式</span>
    <span class="token keyword">class</span> Test2<span class="token punctuation">{</span>
        <span class="token keyword">fun</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">val</span> test <span class="token operator">=</span> <span class="token function">Test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>test<span class="token operator">::</span>lateInitVar<span class="token punctuation">.</span>isInitialized<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 出错：Backing field of 'var test: String' is not accessible at this point</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>lateInitVar<span class="token punctuation">.</span>isInitialized<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 出错：</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>isInit<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 正确</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>可参考<a href="https://stackoverflow.com/questions/47549015/isinitialized-backing-field-of-lateinit-var-is-not-accessible-at-this-point/49710377#" target="_blank" rel="noopener noreferrer">社区<ExternalLinkIcon/></a></p>
<h2 id="委托属性-3" tabindex="-1"><a class="header-anchor" href="#委托属性-3" aria-hidden="true">#</a> 委托属性??③</h2>
<h1 id="question-list" tabindex="-1"><a class="header-anchor" href="#question-list" aria-hidden="true">#</a> question list</h1>
<ul>
<li>??①：注解概念，此注解用法举例</li>
<li>??②：object 声明、伴生对象</li>
<li>??③：<a href="https://book.kotlincn.net/text/delegated-properties.html" target="_blank" rel="noopener noreferrer">概念<ExternalLinkIcon/></a></li>
<li>??④，可以词法级访问意思？</li>
</ul>
</template>
