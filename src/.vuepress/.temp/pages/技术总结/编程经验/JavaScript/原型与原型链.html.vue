<template><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<p>参考： https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes</p>
<h1 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要" aria-hidden="true">#</a> 摘要</h1>
<blockquote>
<p>JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。</p>
</blockquote>
<blockquote>
<p>准确地说，这些属性和方法定义在 Object 的构造器函数(constructor functions)之上的 prototype 属性上，而非对象实例本身。</p>
</blockquote>
<blockquote>
<p>在传统的 OOP 中，首先定义“类”，此后创建对象实例时，类中定义的所有属性和方法都被复制到实例中。在 JavaScript 中并不如此复制——而是在对象实例和它的构造器之间建立一个链接（它是<code>__proto__</code>属性，是从构造函数的 prototype 属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法。</p>
</blockquote>
<p><code>__proto__</code>属性：对象实例和它的构造器之间的链接。
<code>prototype</code> 属性: <code>prototype</code> 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员。</p>
<p>默认情况下, 所有函数的原型属性的 <code>__proto__</code> 就是 window.Object.prototype</p>
<h1 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">first<span class="token punctuation">,</span> last<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> interests</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Bob"</span><span class="token punctuation">,</span> <span class="token string">"Smith"</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token string">"male"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"music"</span><span class="token punctuation">,</span> <span class="token string">"skiing"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// output: 'object'</span>

<span class="token keyword">typeof</span> Object<span class="token punctuation">;</span>
<span class="token comment">// output: 'function'</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// output: {constructor: ƒ}constructor: ƒ Person(first, last, age, gender, interests)[[Prototype]]: Object</span>

Person<span class="token punctuation">.</span>__proto__<span class="token punctuation">;</span>
<span class="token comment">// output: ƒ () { [native code] }</span>

<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// output: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}</span>

person1<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// output: true</span>

Person<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// output: false</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// output: true</span>

Person<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// output: true</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// output: true</span>

Object<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
<span class="token comment">// output: true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h1 id="对象的继承" tabindex="-1"><a class="header-anchor" href="#对象的继承" aria-hidden="true">#</a> 对象的继承</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">first<span class="token punctuation">,</span> last<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> interests</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token punctuation">{</span>
    first<span class="token punctuation">,</span>
    last
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interests <span class="token operator">=</span> interests<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">undefined</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">greeting</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hi! I\'m '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span>first <span class="token operator">+</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">ƒ</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hi! I\'m '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span>first <span class="token operator">+</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Teacher</span><span class="token punctuation">(</span><span class="token parameter">first<span class="token punctuation">,</span> last<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> interests<span class="token punctuation">,</span> subject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> first<span class="token punctuation">,</span> last<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> interests<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>subject <span class="token operator">=</span> subject<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">undefined</span>
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token constant">VM755</span><span class="token operator">:</span><span class="token number">1</span> Uncaught SyntaxError<span class="token operator">:</span> Identifier <span class="token string">'t'</span> has already been declared
    at <span class="token operator">&lt;</span>anonymous<span class="token operator">></span><span class="token operator">:</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">(</span>anonymous<span class="token punctuation">)</span> @ <span class="token constant">VM755</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token keyword">const</span> tt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">undefined</span>
tt<span class="token punctuation">.</span>greeting
<span class="token keyword">undefined</span>
<span class="token class-name">Teacher</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
Person <span class="token punctuation">{</span><span class="token punctuation">}</span>
tt<span class="token punctuation">.</span>greeting 
<span class="token keyword">undefined</span> <span class="token comment">// 这个为什么是undefined</span>
<span class="token keyword">const</span> tt2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">undefined</span>
tt2<span class="token punctuation">.</span>greeting
<span class="token function">ƒ</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hi! I\'m '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span>first <span class="token operator">+</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>因为如下原因</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>tt<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> tt2<span class="token punctuation">.</span>__proto__
<span class="token boolean">false</span>
tt<span class="token punctuation">.</span>__proto__
<span class="token punctuation">{</span><span class="token literal-property property">constructor</span><span class="token operator">:</span> ƒ<span class="token punctuation">}</span>constructor<span class="token operator">:</span> ƒ <span class="token function">Teacher</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> last<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> interests<span class="token punctuation">,</span> subject<span class="token punctuation">)</span>__proto__<span class="token operator">:</span> Object
tt2<span class="token punctuation">.</span>__proto__
Person <span class="token punctuation">{</span><span class="token punctuation">}</span>__proto__<span class="token operator">:</span> Object
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h1 id="相关知识点" tabindex="-1"><a class="header-anchor" href="#相关知识点" aria-hidden="true">#</a> 相关知识点</h1>
<ul>
<li>通过原型添加新属性时是否可以访问已有属性：方法可</li>
</ul>
<p>function Test(a,b,c,d) {
this._a = a;
};</p>
<p>// 定义第一个方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>_a <span class="token operator">=</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Test</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_a <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_a <span class="token punctuation">}</span>

<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>

t<span class="token punctuation">.</span><span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// output: 121</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul>
<li>this
<ul>
<li>call用法 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call</li>
<li>bind方法 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind</li>
<li>apply https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply</li>
</ul>
</li>
<li>类型判断：typeof instanceof</li>
<li>Function</li>
<li>Object</li>
<li>class</li>
</ul>
</template>
