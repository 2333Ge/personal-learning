<template><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<p>学习过程中需要注意</p>
<ol>
<li>Hook 原理</li>
<li>和 class 区别</li>
<li>class =&gt; hook 转变注意事项</li>
<li>对应 Hook 的使用场景</li>
<li>相比 class 的优点</li>
</ol>
<h1 id="什么是-hook" tabindex="-1"><a class="header-anchor" href="#什么是-hook" aria-hidden="true">#</a> 什么是 Hook</h1>
<p>Hook 是一些可以让你在<strong>函数组件</strong>里“钩入” <strong>React state 及生命周期</strong>等特性的<strong>函数</strong></p>
<h1 id="为什么使用-hook" tabindex="-1"><a class="header-anchor" href="#为什么使用-hook" aria-hidden="true">#</a> <a href="https://zh-hans.reactjs.org/docs/hooks-intro.html#motivation" target="_blank" rel="noopener noreferrer">为什么使用 Hook<ExternalLinkIcon/></a></h1>
<ul>
<li>组件间复用状态逻辑困难：在无需修改组件结构的情况下复用状态逻辑，详见<a href="https://react.docschina.org/docs/hooks-custom.html" target="_blank" rel="noopener noreferrer">自定义 Hook<ExternalLinkIcon/></a></li>
<li>复杂组件变得难以理解 ：Hook 将组件中相互关联的部分拆分成更小的函数</li>
<li>class 难以理解： Hook 使你在非 class 的情况下可以使用更多的 React 特性：React 组件一直更像是函数。而 Hook 则拥抱了函数</li>
</ul>
<h1 id="不使用-hook-影响" tabindex="-1"><a class="header-anchor" href="#不使用-hook-影响" aria-hidden="true">#</a> 不使用 Hook 影响</h1>
<p>Hook 没有破坏性改动,使用 Hook 不会对已有程序造成影响，<a href="https://react.docschina.org/docs/hooks-intro.html#no-breaking-changes" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></p>
<h1 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate" aria-hidden="true">#</a> useState</h1>
<ul>
<li>数组解构语法使调用 useState 可以给 state 取不同的名字</li>
</ul>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
<ol>
<li>props 更新时需要更新 state 的情况</li>
<li>函数式写法：更新后的 state 通过先前的 state 计算得出</li>
<li>class 中 setState 回调怎么写</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> initialCount <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token literal-property property">Count</span><span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>initialCount<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Reset<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevCount</span><span class="token punctuation">)</span> <span class="token operator">=></span> prevCount <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">-</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevCount</span><span class="token punctuation">)</span> <span class="token operator">=></span> prevCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h1>
<p>effect 优化注意事项：确保数组中包含了所有<strong>外部作用域</strong>中会<strong>随时间变化</strong>并且在 <strong>effect 中使用的变量</strong></p>
<p>React 会等待浏览器完成画面渲染之后才会延迟调用</p>
<h2 id="无需清除的-effect" tabindex="-1"><a class="header-anchor" href="#无需清除的-effect" aria-hidden="true">#</a> 无需清除的 effect</h2>
<ul>
<li>
<p>在 React 更新 DOM 之后运行一些额外的代码。</p>
</li>
<li>
<p>使用场景 eg：发送网络请求，手动变更 DOM，记录日志，这些都是常见的无需清除的操作</p>
</li>
<li>
<p>useEffect 做了什么: 告诉 React 组件需要在渲染后执行某些操作</p>
</li>
<li>
<p>useEffect 会在每次渲染后都执行吗： 它在第一次渲染之后和每次更新之后都会执行。</p>
</li>
<li>
<p>为什么在组件内部调用 useEffect：可以在 effect 中直接访问 state(作用域) 变量</p>
</li>
</ul>
<h2 id="需要清除的-effect" tabindex="-1"><a class="header-anchor" href="#需要清除的-effect" aria-hidden="true">#</a> 需要清除的 effect</h2>
<p>如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它</p>
<ul>
<li>React 何时清除 effect: React 会在组件卸载的时候执行清除操作</li>
</ul>
<h3 id="常见问题-1" tabindex="-1"><a class="header-anchor" href="#常见问题-1" aria-hidden="true">#</a> 常见问题</h3>
<ol>
<li>class 组件中在 componentDidMount 中取 props 中的数据，若 props 更新的话（<a href="https://zh-hans.reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a>）</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ChatAPI<span class="token punctuation">.</span><span class="token function">subscribeToFriendStatus</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>handleStatusChange
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ChatAPI<span class="token punctuation">.</span><span class="token function">unsubscribeFromFriendStatus</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>handleStatusChange
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="2">
<li>useEffect 中使用延时函数时</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这个 effect 依赖于 `count` state</span>
      <span class="token comment">// setCount(c => c + 1); // ✅ 在这不依赖于外部的 `count` 变量</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 🔴 Bug: `count` 没有被指定为依赖</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>在 setInterval 的回调中，count 的值不会发生变化。因为当 effect 执行时，我们会创建一个闭包，并将 count 的值被保存在该闭包当中，且初值为 0。每隔一秒，回调就会执行 setCount(0 + 1)，因此，count 永远不会超过 1。</p>
<h1 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h1>
<p>类比 class 组件中的变量</p>
<!-- toast reload 栗子 -->
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2>
<h3 id="和普通声明一个-let-变量有啥区别" tabindex="-1"><a class="header-anchor" href="#和普通声明一个-let-变量有啥区别" aria-hidden="true">#</a> 和普通声明一个 let 变量有啥区别</h3>
<ul>
<li>普通变量在每次渲染都会创建一个新的实例，useRef 在组件生命周期中保持唯一</li>
</ul>
<p>相关资料：<a href="https://zhuanlan.zhihu.com/p/22486908" target="_blank" rel="noopener noreferrer">闭包<ExternalLinkIcon/></a>
「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包</p>
<h3 id="和-usestate-异同点" tabindex="-1"><a class="header-anchor" href="#和-usestate-异同点" aria-hidden="true">#</a> 和 useState 异同点</h3>
<ul>
<li>相同点：都能保证组件多次渲染是值不变</li>
<li>不同点：useState 变量改变会导致重新渲染</li>
</ul>
<h3 id="为什么-useref-能够直接塞给组件的-ref" tabindex="-1"><a class="header-anchor" href="#为什么-useref-能够直接塞给组件的-ref" aria-hidden="true">#</a> 为什么 useRef 能够直接塞给组件的 ref</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RefObject<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> current<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="useimperativehandle" tabindex="-1"><a class="header-anchor" href="#useimperativehandle" aria-hidden="true">#</a> <a href="https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle" target="_blank" rel="noopener noreferrer">useImperativeHandle<ExternalLinkIcon/></a></h1>
<p>自定义暴露给父组件的实例值,配合 forwardRef 使用,类比 class 组件中的 public 属性</p>
</template>
