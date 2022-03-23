<template><h1 id="函数式组件声明-react-fc" tabindex="-1"><a class="header-anchor" href="#函数式组件声明-react-fc" aria-hidden="true">#</a> 函数式组件声明 React.FC</h1>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">GuideWrapperProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  highlightNode<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactElement<span class="token punctuation">;</span>
  <span class="token function-variable function">onClose</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> GuideView<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>GuideWrapperProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  highlightNode<span class="token punctuation">,</span>
  onClose<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
