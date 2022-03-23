<template><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<p>站在学过 JS、Java 的基础上从零学习 Kotlin，记录下知识点，便于日后回顾，那些看了一次便能记住或者和 Java、JS 很类似的点便不记录了</p>
<p>官方中文文档：</p>
<ul>
<li>https://www.kotlincn.net/docs/reference/</li>
<li>https://book.kotlincn.net/</li>
</ul>
<p>在线运行 Kotlin：</p>
<ul>
<li>https://www.bejson.com/runcode/kotlin/</li>
<li>https://play.kotlinlang.org/</li>
</ul>
<h1 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/basic-types.html" target="_blank" rel="noopener noreferrer">基本类型<ExternalLinkIcon/></a></h1>
<p>所有以未超出 Int 最大值的整型值初始化的变量都会推断为 Int 类型。如果初始值超过了其最大值，那么推断为 Long 类型。</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> one <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// Int</span>
<span class="token keyword">val</span> threeBillion <span class="token operator">=</span> <span class="token number">3000000000</span> <span class="token comment">// Long</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>对于以小数初始化的变量，编译器会推断为 Double 类型。</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> pi <span class="token operator">=</span> <span class="token number">3.14</span> <span class="token comment">// Double</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="字面常量" tabindex="-1"><a class="header-anchor" href="#字面常量" aria-hidden="true">#</a> 字面常量</h2>
<p>可以使用下划线使数字常量更易读</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> oneMillion <span class="token operator">=</span> <span class="token number">1_000_000</span>
<span class="token keyword">val</span> creditCardNumber <span class="token operator">=</span> <span class="token number">1234_5678_9012_3456L</span>
<span class="token keyword">val</span> socialSecurityNumber <span class="token operator">=</span> <span class="token number">999_99_9999L</span>
<span class="token keyword">val</span> hexBytes <span class="token operator">=</span> <span class="token number">0xFF_EC_DE_5E</span>
<span class="token keyword">val</span> bytes <span class="token operator">=</span> <span class="token number">0b11010010_01101001_10010100_10010010</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="jvm-平台的数字表示" tabindex="-1"><a class="header-anchor" href="#jvm-平台的数字表示" aria-hidden="true">#</a> JVM 平台的数字表示</h2>
<p>在 JVM 平台数字存储为原生类型 int、 double 等。 例外情况是当创建可空数字引用如 Int? 或者使用泛型时。 在这些场景中，数字会装箱为 Java 类 Integer、 Double 等</p>
<p>⚠️ 对相同数字的可为空引用可能是不同的对象：</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//sampleStart</span>
    <span class="token keyword">val</span> a<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token keyword">val</span> boxedA<span class="token operator">:</span> Int<span class="token operator">?</span> <span class="token operator">=</span> a
    <span class="token keyword">val</span> anotherBoxedA<span class="token operator">:</span> Int<span class="token operator">?</span> <span class="token operator">=</span> a

    <span class="token keyword">val</span> b<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">10000</span>
    <span class="token keyword">val</span> boxedB<span class="token operator">:</span> Int<span class="token operator">?</span> <span class="token operator">=</span> b
    <span class="token keyword">val</span> anotherBoxedB<span class="token operator">:</span> Int<span class="token operator">?</span> <span class="token operator">=</span> b

    <span class="token function">println</span><span class="token punctuation">(</span>boxedA <span class="token operator">===</span> anotherBoxedA<span class="token punctuation">)</span> <span class="token comment">// true</span>
    <span class="token function">println</span><span class="token punctuation">(</span>boxedB <span class="token operator">===</span> anotherBoxedB<span class="token punctuation">)</span> <span class="token comment">// false</span>
    <span class="token function">println</span><span class="token punctuation">(</span>boxedB <span class="token operator">==</span> anotherBoxedB<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">// ==比较的是数值是否相等, ===比较的是两个对象的地址是否相等</span>

<span class="token comment">//sampleEnd</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>由于 JVM 对 -128 到 127 的整数（Integer）应用了内存优化，因此，a 的所有可空引用实际上都是同一对象。但是没有对 b 应用内存优化，所以它们是不同对象。</p>
<p>另一方面，它们仍然相等(见打印三)</p>
<h2 id="显示转换" tabindex="-1"><a class="header-anchor" href="#显示转换" aria-hidden="true">#</a> 显示转换</h2>
<p>较小类型并不是较大类型的子类型</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 假想的代码，实际上并不能编译：
val a: Int? = 1 // 一个装箱的 Int (java.lang.Integer)
val b: Long? = a // 隐式转换产生一个装箱的 Long (java.lang.Long)
print(b == a) // 惊！这将输出“false”鉴于 Long 的 equals() 会检测另一个是否也为 Long
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="整数除法" tabindex="-1"><a class="header-anchor" href="#整数除法" aria-hidden="true">#</a> 整数除法</h2>
<p>整数间的除法总是返回整数。会丢弃任何小数部分。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>fun main() {
    println(5 / 2 )  // 2
    println(5L / 2 === 2L)  // true
    println(5 / 2.toDouble() == 2.5)
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h2>
<p>只能应用于 Int 与 Long</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">shl</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token number">0xf</span><span class="token punctuation">)</span> <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>shl(bits) – 有符号左移</li>
<li>shr(bits) – 有符号右移</li>
<li>ushr(bits) – 无符号右移</li>
<li>and(bits) – 位与</li>
<li>or(bits) – 位或</li>
<li>xor(bits) – 位异或</li>
<li>inv() – 位非</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>val oneByte: Byte = 1
// println((oneByte shl 2)) // 编译出错

val b = 0b00000001
println((b shl 2)) // 4
// ⚠️只能应用于 Int 与 Long? 为什么这个不会报错
// 解释：0b、0x只表示不同的声明写法不决定变量类型
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="浮点数比较" tabindex="-1"><a class="header-anchor" href="#浮点数比较" aria-hidden="true">#</a> 浮点数比较</h2>
<p>区间实例以及区间检测：a..b、 x in a..b、 x !in a..b</p>
<h2 id="无符号" tabindex="-1"><a class="header-anchor" href="#无符号" aria-hidden="true">#</a> 无符号</h2>
<h3 id="无符号整型" tabindex="-1"><a class="header-anchor" href="#无符号整型" aria-hidden="true">#</a> 无符号整型</h3>
<ul>
<li>UByte: 无符号 8 比特整数，范围是 0 到 255</li>
<li>UShort: 无符号 16 比特整数，范围是 0 到 65535</li>
<li>UInt: 无符号 32 比特整数，范围是 0 到 2^32 - 1</li>
<li>ULong：无符号 64 比特整数，范围是 0 到 2^64 - 1</li>
</ul>
<p>字面值：用后缀标记整型字面值来表示指定无符号类型</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>val b: UByte = 1u  // UByte，已提供预期类型
val s: UShort = 1u // UShort，已提供预期类型
val l: ULong = 1u  // ULong，已提供预期类型

val a1 = 42u // UInt：未提供预期类型，常量适于 UInt
val a2 = 0xFFFF_FFFF_FFFFu // ULong：未提供预期类型，常量不适于 UInt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="无符号数组" tabindex="-1"><a class="header-anchor" href="#无符号数组" aria-hidden="true">#</a> 无符号数组</h3>
<p>原生类型相同，每个无符号类型都有表示相应类型数组的类型：</p>
<ul>
<li>UByteArray: 无符号字节数组</li>
<li>UShortArray: 无符号短整型数组</li>
<li>UIntArray: 无符号整型数组</li>
<li>ULongArray: 无符号长整型数组</li>
</ul>
<h3 id="字面值" tabindex="-1"><a class="header-anchor" href="#字面值" aria-hidden="true">#</a> 字面值</h3>
<p>后缀标记 u、U、uL、UL</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> b<span class="token operator">:</span> UByte <span class="token operator">=</span> 1u  <span class="token comment">// UByte，已提供预期类型</span>
<span class="token keyword">val</span> s<span class="token operator">:</span> UShort <span class="token operator">=</span> 1u <span class="token comment">// UShort，已提供预期类型</span>
<span class="token keyword">val</span> l<span class="token operator">:</span> ULong <span class="token operator">=</span> 1u  <span class="token comment">// ULong，已提供预期类型</span>

<span class="token keyword">val</span> a1 <span class="token operator">=</span> 42u <span class="token comment">// UInt：未提供预期类型，常量适于 UInt</span>
<span class="token keyword">val</span> a2 <span class="token operator">=</span> 0xFFFF_FFFF_FFFFu <span class="token comment">// ULong：未提供预期类型，常量不适于 UInt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2>
<h3 id="字符串字面值" tabindex="-1"><a class="header-anchor" href="#字符串字面值" aria-hidden="true">#</a> 字符串字面值</h3>
<p>包含：</p>
<ul>
<li>转义字符串: <code>val s = &quot;Hello, world!\n&quot;</code></li>
<li>原始字符串：用<code>&quot;&quot;&quot;</code>分界符包裹</li>
</ul>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> text <span class="token operator">=</span> <span class="token string-literal multiline"><span class="token string">"""
    for (c in "foo")
        print(c)
"""</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="边界前缀" tabindex="-1"><a class="header-anchor" href="#边界前缀" aria-hidden="true">#</a> 边界前缀</h3>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> text <span class="token operator">=</span> <span class="token string-literal multiline"><span class="token string">"""
|Tell me and I forget.
|Teach me and I remember.
|Involve me and I learn.
|(Benjamin Franklin)
    """</span></span><span class="token punctuation">.</span><span class="token function">trimMargin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>trimMargin()</code>移除边界前缀</p>
<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<p>Kotlin 中数组是不型变的（invariant）。这意味着 Kotlin 不让我们把 Array<String> 赋值给 Array<Any></p>
<p>无装箱开销的类表示原生类型数组：ByteArray、 ShortArray、IntArray，这些类与 Array 并没有继承关系，但是它们有同样的方法属性集</p>
<h1 id="类型检测与类型转换" tabindex="-1"><a class="header-anchor" href="#类型检测与类型转换" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/typecasts.html" target="_blank" rel="noopener noreferrer">类型检测与类型转换<ExternalLinkIcon/></a></h1>
<h2 id="is-is-操作符" tabindex="-1"><a class="header-anchor" href="#is-is-操作符" aria-hidden="true">#</a> is !is 操作符</h2>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">is</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="智能转换" tabindex="-1"><a class="header-anchor" href="#智能转换" aria-hidden="true">#</a> 智能转换</h2>
<p>编译器跟踪不可变值的 is-检测以及显式转换，并在必要时自动插入（安全的）转换</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">demo</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token keyword">is</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// x 自动转换为字符串</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="不安全的-转换操作符" tabindex="-1"><a class="header-anchor" href="#不安全的-转换操作符" aria-hidden="true">#</a> “不安全的”转换操作符</h2>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> x<span class="token operator">:</span> String <span class="token operator">=</span> y <span class="token keyword">as</span> String
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果转换是不可能的，转换操作符会抛出一个异常,为了避免异常，可以使用安全转换操作符 as?，它可以在失败时返回 null</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> x<span class="token operator">:</span> String<span class="token operator">?</span> <span class="token operator">=</span> y <span class="token keyword">as</span><span class="token operator">?</span> String
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="类型擦除与泛型检测-似懂非懂-待复看" tabindex="-1"><a class="header-anchor" href="#类型擦除与泛型检测-似懂非懂-待复看" aria-hidden="true">#</a> 类型擦除与泛型检测??(似懂非懂，待复看)</h2>
<p>https://book.kotlincn.net/text/typecasts.html</p>
<h2 id="非受检类型转换-待定" tabindex="-1"><a class="header-anchor" href="#非受检类型转换-待定" aria-hidden="true">#</a> 非受检类型转换??（待定）</h2>
<p>https://book.kotlincn.net/text/typecasts.html</p>
</template>
