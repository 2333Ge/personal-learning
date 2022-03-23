<template><h1 id="hooks-使用笔记" tabindex="-1"><a class="header-anchor" href="#hooks-使用笔记" aria-hidden="true">#</a> Hooks 使用笔记</h1>
<h2 id="触发式动画" tabindex="-1"><a class="header-anchor" href="#触发式动画" aria-hidden="true">#</a> 触发式动画</h2>
<ul>
<li>useState 触发 reRender</li>
<li>useRef 设置生命周期中动画变化值常量</li>
<li>useEffect 触发设置 reRender 后的动画(可不要，主要为了减少其他 props 改变时导致 reRender 然后导致重复的动画)</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>

<span class="token keyword">const</span> <span class="token punctuation">[</span>isOpen<span class="token punctuation">,</span> open<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>isOpenDefault<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> animateItemsHeight <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span>isOpen <span class="token operator">?</span> ItemsHeight <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>animateItemsHeight<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">toValue</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> ItemsHeight <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isOpen<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Animated.View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> animateItemsHeight <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">

</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="复用和组件生命周期相关逻辑" tabindex="-1"><a class="header-anchor" href="#复用和组件生命周期相关逻辑" aria-hidden="true">#</a> 复用和组件生命周期相关逻辑</h2>
<p>如：class 写法，在 componentDidMount 设置监听器、在 componentWillUnmount 取消监听器，在各个组件都需重写逻辑，不便复用</p>
</template>
