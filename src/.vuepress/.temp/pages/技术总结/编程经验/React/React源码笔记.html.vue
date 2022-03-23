<template><h1 id="setstate-后-react-做了什么" tabindex="-1"><a class="header-anchor" href="#setstate-后-react-做了什么" aria-hidden="true">#</a> setState 后 React 做了什么</h1>
<p>this.updater.enqueueSetState(this, partialState, callback, 'setState');</p>
<h2 id="enqueuesetstate" tabindex="-1"><a class="header-anchor" href="#enqueuesetstate" aria-hidden="true">#</a> enqueueSetState</h2>
<ul>
<li>
<p>获取 当前 Fiber</p>
</li>
<li>
<p>lane 创建任务优先级？</p>
</li>
<li>
<p>创建 update 对象,</p>
</li>
<li>
<p><code> enqueueUpdate(fiber, update);</code>: 加入更新队列</p>
</li>
<li>
<p>调用 scheduleUpdateOnFiber</p>
</li>
</ul>
<h2 id="scheduleupdateonfiber" tabindex="-1"><a class="header-anchor" href="#scheduleupdateonfiber" aria-hidden="true">#</a> scheduleUpdateOnFiber</h2>
<ul>
<li>更新当前到 root 任务优先级<code>markUpdateLaneFromFiberToRoot</code></li>
<li>据任务的类型，发起异步调度任务，ensureRootIsScheduled</li>
</ul>
<h2 id="performsyncworkonroot" tabindex="-1"><a class="header-anchor" href="#performsyncworkonroot" aria-hidden="true">#</a> performSyncWorkOnRoot</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* render 阶段 */</span>
  <span class="token keyword">let</span> exitStatus <span class="token operator">=</span> <span class="token function">renderRootSync</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* commit 阶段 */</span>
  <span class="token function">commitRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* 如果有其他的等待中的任务，那么继续更新 */</span>
  <span class="token function">ensureRootIsScheduled</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>beginWork</p>
<p>是否需要调和
比对变化、查看是否更新</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99afa68f8ab94c93be41df70db0ae488~tplv-k3u1fbpfcp-watermark.awebp?" alt=""></p>
</template>
