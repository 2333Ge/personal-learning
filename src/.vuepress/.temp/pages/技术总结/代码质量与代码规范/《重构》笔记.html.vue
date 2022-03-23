<template><blockquote>
<p>《重构(第二版)》笔记</p>
</blockquote>
<h1 id="第一章-重构-第一个示例" tabindex="-1"><a class="header-anchor" href="#第一章-重构-第一个示例" aria-hidden="true">#</a> 第一章 重构，第一个示例</h1>
<h2 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要" aria-hidden="true">#</a> 摘要</h2>
<p>(p4)如果你要给程序添加一个特性，但发现代码因缺乏良好的结构而不易于进行更改，那就先重构那个程序，使其易于添加该特性，再添加该特性</p>
<p>(p5)重构前，先检查自己是否有一套可靠的测试集，必须有自我检验的能力</p>
<p>(p5、作者)将要达成的目标写两遍、代码一遍、测试里一遍，二次确认。</p>
<p>(p8)经常运行单元测试、阶段保存</p>
<p>(p10、作者)参数取名带上类型信息</p>
<p>(p10)傻瓜都能写出计算机可以理解得代码，只有写出人类容易理解得代码的，才是优秀的程序员</p>
<p>(p14、20)内联函数，移除局部变量、使提炼更简单，即使导致微量的性能损失</p>
<p>(p15)删除多余(并会引起误解)的注释</p>
<p>(p17) 命名<strong>简明扼要</strong></p>
<p>(p24) 实现复用，拆分阶段</p>
<p>(p34) 编程时，需要遵循<strong>营地法则</strong>：保证你离开时的代码库一定比来时更健康</p>
<p>(p38) JS 的多态</p>
<p>(p43)<strong>好代码的检验标准</strong>就是人们是否能轻而易举的修改它</p>
<p>(p44、作者)为什么作者的步子这么小：小的步子能更快前进，保持代码永远处于可工作状态，小步修改累积起来也能大大改善系统的设计。</p>
<h1 id="第二章-重构的原则" tabindex="-1"><a class="header-anchor" href="#第二章-重构的原则" aria-hidden="true">#</a> 第二章 重构的原则</h1>
<h2 id="摘要-1" tabindex="-1"><a class="header-anchor" href="#摘要-1" aria-hidden="true">#</a> 摘要</h2>
<p>(p45) 重构的概念：不改变软件可观察行为，提高其可理解行 ，降低修改成本</p>
<p>(p46) “两顶帽子” 添加新功能和重构应该是两个独立的过程。</p>
<p>(p47) 除了计算机外，源码还有其他读者，避免前一位开发花 10 分钟但下一位开发看代码花一小时的情况</p>
<p>(p48、 作者)对于任何立刻能够立刻查阅的东西，我都故意不去记它，因为我怕吧自己的脑袋塞爆，我总是把该记住的东西写进代码里，这样我就不必记住它了。</p>
<p>(p49) 重构提高编程速度：好的设计更易于累加功能</p>
<p>(p50) 预先做出良好的的设计非常困难，想要既体面有快速的开发功能，重构必不可少</p>
<p>(p50)何时重构,三次法则：事不过三，三次重构</p>
<p>(p50)预备性重构：让添加新功能更容易</p>
<p>(p51)帮助理解的重构：让代码更易懂</p>
<p>(p52)捡垃圾式的重构(如果需要花费一些精力，先便签记录下来)</p>
<p>(p52)长期重构</p>
<p>(p53) 代码复审(not 代码 review)，与原作者一起</p>
<p>(p54) 何时不该重构：重写比重构容易、不关心内部逻辑的代码</p>
<p>(p57) 代码所有权，老代码调用一个新函数，保持结构不变，标记一个@deprecate</p>
<p>(p59) 自测试的代码</p>
<p>(p60) 重构可以帮忙理解遗留系统</p>
<h2 id="第三章-代码的坏味道-p71" tabindex="-1"><a class="header-anchor" href="#第三章-代码的坏味道-p71" aria-hidden="true">#</a> 第三章 代码的坏味道(p71)</h2>
<h3 id="_3-1-神秘命名-p72" tabindex="-1"><a class="header-anchor" href="#_3-1-神秘命名-p72" aria-hidden="true">#</a> 3.1 神秘命名(p72)</h3>
<p>改名不仅仅是修改名字。如果你想不出一个好名字，说明背后很可能潜藏着更深的设计问题</p>
<h3 id="_3-2-重复代码-p72" tabindex="-1"><a class="header-anchor" href="#_3-2-重复代码-p72" aria-hidden="true">#</a> 3.2 重复代码(p72)</h3>
<h3 id="_3-3-过长函数-p73" tabindex="-1"><a class="header-anchor" href="#_3-3-过长函数-p73" aria-hidden="true">#</a> 3.3 过长函数(p73)</h3>
<blockquote>
<p>小函数的价值 更好的阐释立、更易于分享、更多选择。
如何提炼那一段代码呢，有个好技巧是：寻找注释。它们通常能指出代码用途和实现手法的语义距离。</p>
</blockquote>
<h3 id="_3-4-过长参数列表-p74" tabindex="-1"><a class="header-anchor" href="#_3-4-过长参数列表-p74" aria-hidden="true">#</a> 3.4 过长参数列表(p74)</h3>
<h3 id="_3-5-全局数据-p74" tabindex="-1"><a class="header-anchor" href="#_3-5-全局数据-p74" aria-hidden="true">#</a> 3.5 全局数据(p74)</h3>
<blockquote>
<p>能被全局任意修改的数据</p>
</blockquote>
<h3 id="_3-6-可变数据-p75" tabindex="-1"><a class="header-anchor" href="#_3-6-可变数据-p75" aria-hidden="true">#</a> 3.6 可变数据(p75)</h3>
<blockquote>
<p>数据修改导致意料之外的结果，这种 bug 极难发现。保证数据能被修改操作最少化</p>
</blockquote>
<h3 id="_3-7-发散式变化-p76" tabindex="-1"><a class="header-anchor" href="#_3-7-发散式变化-p76" aria-hidden="true">#</a> 3.7 发散式变化(p76)</h3>
<blockquote>
<p>希望软件更容易被修改，一旦需要修改，希望能够调到系统某一点，只在该处做修改</p>
</blockquote>
<h3 id="_3-8-霰弹式修改-p76" tabindex="-1"><a class="header-anchor" href="#_3-8-霰弹式修改-p76" aria-hidden="true">#</a> 3.8 霰弹式修改(p76)</h3>
<blockquote>
<p>每遇到某种变换，都必须在许多不同的类内做出许多小修改</p>
</blockquote>
<h3 id="_3-9-依恋情节-p77" tabindex="-1"><a class="header-anchor" href="#_3-9-依恋情节-p77" aria-hidden="true">#</a> 3.9 依恋情节 (p77)</h3>
<blockquote>
<p>一个函数和另一个模块中的函数或者数据交流格外频繁，远胜于自己所处模块内部的交流</p>
</blockquote>
<h3 id="_3-10-数据泥团-p78" tabindex="-1"><a class="header-anchor" href="#_3-10-数据泥团-p78" aria-hidden="true">#</a> 3.10 数据泥团(p78)</h3>
<blockquote>
<p>小数据项成群结队的出现，有些数据应该拥有属于自己的对象</p>
</blockquote>
<h3 id="_3-11-基本数据类型-p78" tabindex="-1"><a class="header-anchor" href="#_3-11-基本数据类型-p78" aria-hidden="true">#</a> 3.11 基本数据类型(p78)</h3>
<blockquote>
<p>很多程序员不愿创建对自己的问题有用的基本类型，如钱、坐标、范围等</p>
</blockquote>
<h3 id="_3-12-重复的-switch-p79" tabindex="-1"><a class="header-anchor" href="#_3-12-重复的-switch-p79" aria-hidden="true">#</a> 3.12 重复的 switch(p79)</h3>
<blockquote>
<p>以多态替换条件逻辑</p>
</blockquote>
<h3 id="_3-13-循环语句-p79" tabindex="-1"><a class="header-anchor" href="#_3-13-循环语句-p79" aria-hidden="true">#</a> 3.13 循环语句(p79)</h3>
<blockquote>
<p>以管道脱离循环，帮助我们更快看清被处理的元数以及处理它们的动作</p>
</blockquote>
<h3 id="_3-14-冗赘的元素-p80" tabindex="-1"><a class="header-anchor" href="#_3-14-冗赘的元素-p80" aria-hidden="true">#</a> 3.14 冗赘的元素(p80)</h3>
<blockquote>
<p>给代码增加结构，想支持变化、促进复用，但有时并不需要这层额外的结构。</p>
</blockquote>
<h3 id="_3-15-夸夸其谈通用性-p80" tabindex="-1"><a class="header-anchor" href="#_3-15-夸夸其谈通用性-p80" aria-hidden="true">#</a> 3.15 夸夸其谈通用性(p80)</h3>
<blockquote>
<p>“未来某一天会做这事”，企图已各种狗子和特殊情况来处理一些非必要的事情。如果函数或类的唯一用户是测试用例。。</p>
</blockquote>
<h3 id="_3-16-临时字段-p80" tabindex="-1"><a class="header-anchor" href="#_3-16-临时字段-p80" aria-hidden="true">#</a> 3.16 临时字段 (p80)</h3>
<blockquote>
<p>仅为某种情况设置的字段</p>
</blockquote>
<h3 id="_3-17-过长的消息链-p81" tabindex="-1"><a class="header-anchor" href="#_3-17-过长的消息链-p81" aria-hidden="true">#</a> 3.17 过长的消息链(p81)</h3>
<h3 id="_3-18-中间人-p81" tabindex="-1"><a class="header-anchor" href="#_3-18-中间人-p81" aria-hidden="true">#</a> 3.18 中间人(p81)</h3>
<blockquote>
<p>过度委托， 中间操作过多</p>
</blockquote>
<h3 id="_3-19-内幕交易-p82" tabindex="-1"><a class="header-anchor" href="#_3-19-内幕交易-p82" aria-hidden="true">#</a> 3.19 内幕交易(p82)</h3>
<blockquote>
<p>模块间大量交换数据</p>
</blockquote>
<h3 id="_3-20-过大的类-p82" tabindex="-1"><a class="header-anchor" href="#_3-20-过大的类-p82" aria-hidden="true">#</a> 3.20 过大的类(p82)</h3>
<h3 id="_3-21-异曲同工的类-p83" tabindex="-1"><a class="header-anchor" href="#_3-21-异曲同工的类-p83" aria-hidden="true">#</a> 3.21 异曲同工的类(p83)</h3>
<h3 id="_3-22-纯数据类-p83" tabindex="-1"><a class="header-anchor" href="#_3-22-纯数据类-p83" aria-hidden="true">#</a> 3.22 纯数据类(p83)</h3>
<blockquote>
<p>拥有一些字段，以及用于访问(读写)这些字段的函数，除此之外一无长物(？？eg：bean)</p>
</blockquote>
<blockquote>
<p>尝试找出这些取值/设值函数 被其他类调用的地点，以版以函数把那些调用行为搬移到纯数据类里来</p>
</blockquote>
<h3 id="_3-23-被拒绝的遗赠-p83" tabindex="-1"><a class="header-anchor" href="#_3-23-被拒绝的遗赠-p83" aria-hidden="true">#</a> 3.23 被拒绝的遗赠(p83)</h3>
<blockquote>
<p>子类拒绝实现超类的某些设计</p>
</blockquote>
<h3 id="_3-24-注释-p84" tabindex="-1"><a class="header-anchor" href="#_3-24-注释-p84" aria-hidden="true">#</a> 3.24 注释(p84)</h3>
<blockquote>
<p>因为代码很糟糕而产生的注释<br>
当感觉需要写注释时，先尝试重构，试着让所有的注释变得多余。</p>
</blockquote>
<h2 id="第四章-构建测试体系-p85" tabindex="-1"><a class="header-anchor" href="#第四章-构建测试体系-p85" aria-hidden="true">#</a> 第四章 构建测试体系(p85)</h2>
<p>(p86)确保所有测试都自动化，让它们检查自己的测试结果</p>
<p>(p86)由于频繁的运行测试，因此我知道 bug 的源头就是我刚刚写下的代码，因此知道 bug 的源头是刚写的代码。</p>
<p>(p87)<strong>编写测试代码还能帮我把注意力集中于结构而非实现</strong></p>
<p>(p91)总是确保测试不该通过时真的会失败</p>
<p>(p93)看到红条时不允许重构</p>
<p>(p93)编写未臻完善的测试并经常运行，好过对完美测试的无尽等待</p>
<h2 id="第六章-第一组重构-p105" tabindex="-1"><a class="header-anchor" href="#第六章-第一组重构-p105" aria-hidden="true">#</a> 第六章 第一组重构(p105)</h2>
<h3 id="_6-1-提炼函数-p106" tabindex="-1"><a class="header-anchor" href="#_6-1-提炼函数-p106" aria-hidden="true">#</a> 6.1 提炼函数(p106)</h3>
<h4 id="动机-p106" tabindex="-1"><a class="header-anchor" href="#动机-p106" aria-hidden="true">#</a> 动机(p106)</h4>
<p>将意图和实现分开</p>
<h4 id="做法-p107" tabindex="-1"><a class="header-anchor" href="#做法-p107" aria-hidden="true">#</a> 做法(p107)</h4>
<ul>
<li>(p107)如果想不到一个更有意义的名称，这就是一个信号，可能我不应该提炼这块代码</li>
<li>(p108)如果编程语言支持嵌套函数，就把新函数<strong>嵌套在源函数里</strong>，这能减少后面要处理的超出作用域的变量个数</li>
<li>提炼代码到新函数，注意变量作用域问题</li>
</ul>
<h4 id="范例-106" tabindex="-1"><a class="header-anchor" href="#范例-106" aria-hidden="true">#</a> 范例（106）</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printOwing</span><span class="token punctuation">(</span><span class="token parameter">invoice</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> outstanding <span class="token operator">=</span> <span class="token function">calculateOutstanding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//print details</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>invoice<span class="token punctuation">.</span>customer<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">amount: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>outstanding<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>↓↓</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printOwing</span><span class="token punctuation">(</span><span class="token parameter">invoice</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> outstanding <span class="token operator">=</span> <span class="token function">calculateOutstanding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printDetails</span><span class="token punctuation">(</span>outstanding<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">printDetails</span><span class="token punctuation">(</span><span class="token parameter">outstanding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>invoice<span class="token punctuation">.</span>customer<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">amount: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>outstanding<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_6-2-内联函数-p115" tabindex="-1"><a class="header-anchor" href="#_6-2-内联函数-p115" aria-hidden="true">#</a> 6.2 内联函数(p115)</h3>
<h4 id="动机-p115" tabindex="-1"><a class="header-anchor" href="#动机-p115" aria-hidden="true">#</a> 动机(p115)</h4>
<p>去除无用的间接层，有时代码比间接层更易读</p>
<h4 id="注意-p116" tabindex="-1"><a class="header-anchor" href="#注意-p116" aria-hidden="true">#</a> 注意(p116)</h4>
<p>检查函数，确定不具有多态性(可能有子类继承了这个函数，那么无法内联)</p>
<h4 id="范例-115" tabindex="-1"><a class="header-anchor" href="#范例-115" aria-hidden="true">#</a> 范例 (115)</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getRating</span><span class="token punctuation">(</span><span class="token parameter">driver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">moreThanFiveLateDeliveries</span><span class="token punctuation">(</span>driver<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">2</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">moreThanFiveLateDeliveries</span><span class="token punctuation">(</span><span class="token parameter">driver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> driver<span class="token punctuation">.</span>numberOfLateDeliveries <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>↓↓</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getRating</span><span class="token punctuation">(</span><span class="token parameter">driver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> driver<span class="token punctuation">.</span>numberOfLateDeliveries <span class="token operator">></span> <span class="token number">5</span> <span class="token operator">?</span> <span class="token number">2</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_6-3-提炼变量-p119" tabindex="-1"><a class="header-anchor" href="#_6-3-提炼变量-p119" aria-hidden="true">#</a> 6.3 提炼变量(p119)</h3>
<ul>
<li>(p119)可能有更宽的返回会访问到表达式的结果</li>
<li>类似提炼函数，注意确认提炼的的表达式没有副作用</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">(</span>
  order<span class="token punctuation">.</span>quantity <span class="token operator">*</span> order<span class="token punctuation">.</span>itemPrice <span class="token operator">-</span>
  Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> order<span class="token punctuation">.</span>quantity <span class="token operator">-</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">*</span> order<span class="token punctuation">.</span>itemPrice <span class="token operator">*</span> <span class="token number">0.05</span> <span class="token operator">+</span>
  Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span>quantity <span class="token operator">*</span> order<span class="token punctuation">.</span>itemPrice <span class="token operator">*</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>↓↓</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> basePrice <span class="token operator">=</span> order<span class="token punctuation">.</span>quantity <span class="token operator">*</span> order<span class="token punctuation">.</span>itemPrice<span class="token punctuation">;</span>
<span class="token keyword">const</span> quantityDiscount <span class="token operator">=</span>
  Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> order<span class="token punctuation">.</span>quantity <span class="token operator">-</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">*</span> order<span class="token punctuation">.</span>itemPrice <span class="token operator">*</span> <span class="token number">0.05</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> shipping <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>basePrice <span class="token operator">*</span> <span class="token number">0.1</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> basePrice <span class="token operator">-</span> quantityDiscount <span class="token operator">+</span> shipping<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_6-4-内联变量-p123" tabindex="-1"><a class="header-anchor" href="#_6-4-内联变量-p123" aria-hidden="true">#</a> 6.4 内联变量(p123)</h3>
<ul>
<li>类似内联函数，有时变量可能会妨碍重构附近的代码</li>
</ul>
<h3 id="_6-5-改变函数声明-p124" tabindex="-1"><a class="header-anchor" href="#_6-5-改变函数声明-p124" aria-hidden="true">#</a> 6.5 改变函数声明(p124)</h3>
<ul>
<li>(p125)改进函数名较好的做法，先写一句注释描述这个函数的用途，再翻译成函数的名字</li>
<li><strong>迁移式做法</strong>(p126)将函数体提炼一个新函数，如果打算沿用就函数的名字，可以先给新函数起一个易于搜索的零时变量。</li>
<li>(p126)如果函数已经对外发布，可以在提炼新函数后暂停重构，将原来的函数声明为不推荐使用</li>
</ul>
<h3 id="_6-6-封装变量-132" tabindex="-1"><a class="header-anchor" href="#_6-6-封装变量-132" aria-hidden="true">#</a> 6.6 封装变量(132)</h3>
<ul>
<li>(p132)要搬移一个被广泛使用的数据，最好的方法往往是以函数形式封装对该数据的访问</li>
<li>(p132)对可变数据，如果作用域超过单个函数，就将其封装起来，只允许通过函数访问，限制变量的可见性，不可变性是强大的代码防腐剂</li>
<li>(p135)注意有时不仅要控制对变量引用的修改，还要控制对变量内容的修改，此时可修改取值函数返回数据的副本</li>
<li>(p136)数据被使用的越广，就越值得花精力给它一个体面的封装</li>
</ul>
<h3 id="_6-7-变量改名-137" tabindex="-1"><a class="header-anchor" href="#_6-7-变量改名-137" aria-hidden="true">#</a> 6.7 变量改名(137)</h3>
<ul>
<li>(p138)有的地方在修改，有的在读取变量，通常先封装变量</li>
</ul>
<h3 id="_6-8-引入参数对象-138" tabindex="-1"><a class="header-anchor" href="#_6-8-引入参数对象-138" aria-hidden="true">#</a> 6.8 引入参数对象(138)</h3>
<ul>
<li><strong>动机：</strong>(138)一组数据项总是出没于多个函数，以数据结构代之，使数据项间关系更清晰，减少参数列表，捕捉公共行为。</li>
<li>(p139)没有合适的数据结构便创建一个</li>
<li>(139)用类便于放置行为，数据项间互相访问，这只是一系列重构的起点，会逐步发现一些有用的行为</li>
</ul>
<h3 id="_6-9-函数组合成类-p144" tabindex="-1"><a class="header-anchor" href="#_6-9-函数组合成类-p144" aria-hidden="true">#</a> 6.9 函数组合成类(p144)</h3>
<ul>
<li><strong>动机：</strong>(144)如果一组函数形影不离操作同一块数据(类似 6.8)，组建一个类，在对象内部地调用还可以少许多参数。还给机会发现其他计算逻辑</li>
</ul>
<h3 id="_6-10-函数合成变换-p149" tabindex="-1"><a class="header-anchor" href="#_6-10-函数合成变换-p149" aria-hidden="true">#</a> 6.10 函数合成变换(p149)</h3>
<ul>
<li><strong>动机：</strong>(149)让相关逻辑查找更加方便(如果会对数据源更新，那么使用类会好很多)</li>
</ul>
<h3 id="_6-11-拆分阶段-p154" tabindex="-1"><a class="header-anchor" href="#_6-11-拆分阶段-p154" aria-hidden="true">#</a> 6.11 拆分阶段(p154)</h3>
<h4 id="动机" tabindex="-1"><a class="header-anchor" href="#动机" aria-hidden="true">#</a> 动机</h4>
<ul>
<li>看见一段代码在处理两件不同的事，拆分成个字独立的模块，到了需要修改的时候，可以单独处理每个主题。</li>
<li>如果一块代码中出现了上下几段，各自使用不同的一组数据，这就是最明显的线索</li>
</ul>
<h4 id="范例-p155-提取结构的思想" tabindex="-1"><a class="header-anchor" href="#范例-p155-提取结构的思想" aria-hidden="true">#</a> 范例 (p155)(提取结构的思想)</h4>
<ul>
<li>引入中转数据结构，在两阶段间沟通信息</li>
<li>从第一个参数逐步替换掉中中转参数</li>
<li>参数列表处理完毕后，中转数据结构确定了，把第一阶段代码提炼成独立的函数，令其返回返回这份数据</li>
</ul>
<h2 id="第-7-章-封装" tabindex="-1"><a class="header-anchor" href="#第-7-章-封装" aria-hidden="true">#</a> 第 7 章 封装</h2>
<blockquote>
<p>第七章范例都很不错</p>
</blockquote>
<h3 id="_7-1-封装记录-p162" tabindex="-1"><a class="header-anchor" href="#_7-1-封装记录-p162" aria-hidden="true">#</a> 7.1 封装记录(p162)</h3>
<ul>
<li>记录：类比 JS 对象</li>
</ul>
<h4 id="动机-p162" tabindex="-1"><a class="header-anchor" href="#动机-p162" aria-hidden="true">#</a> 动机(p162)</h4>
<ul>
<li>将数据作为有意义的单元传递，而不是一段数据的拼凑。</li>
<li>一条记录上持有什么字段往往不够直观</li>
<li>程序间常常需要互相传递嵌套的列表或散列映射结构，这些数据结构后续经常需要被序列化成 JSON，或 XML，这样的嵌套结构同样值得封装，封装能帮助更好地应对变化</li>
</ul>
<h4 id="注意事项-范例-p165" tabindex="-1"><a class="header-anchor" href="#注意事项-范例-p165" aria-hidden="true">#</a> 注意事项(范例 p165)</h4>
<ul>
<li>深拷贝浅拷贝导致的设值问题、妥善处理好更新操作、特别关注对数据做修改操作的地方</li>
<li>展开二级对象还是还是将二级对象封装成一个类(p165),好处
<ul>
<li>展开好处：能够是外界无需在引用原始的数据记录，直接持有会破坏封装的完整性</li>
<li>不适合展开的时候将 data 复制一份再赋值</li>
</ul>
</li>
<li>上述赋值问题可采用的方案(深拷贝、返回只读的数据代理(p168))(具体做法见 7.2)</li>
</ul>
<h3 id="_7-2-封装集合-p170" tabindex="-1"><a class="header-anchor" href="#_7-2-封装集合-p170" aria-hidden="true">#</a> 7.2 封装集合(p170)</h3>
<h4 id="动机-1" tabindex="-1"><a class="header-anchor" href="#动机-1" aria-hidden="true">#</a> 动机</h4>
<ul>
<li>封住程序中的可变数据</li>
<li>直接将实际的数据交出去最大的问题在于我们无从阻止用户直接对数据进行修改，容易导致不可预料的问题</li>
<li>用定义类上的方法代替直接使用集合的字段会导致的问题：增加许多额外代码，使集合的容易组合的特性大打折扣</li>
</ul>
<h4 id="做法" tabindex="-1"><a class="header-anchor" href="#做法" aria-hidden="true">#</a> 做法</h4>
<ul>
<li>如果集合的引用未被封装、先用<strong>封装变量</strong>封装</li>
<li>...</li>
</ul>
<h4 id="范例-关注类嵌套时可能会导致的赋值问题-p72" tabindex="-1"><a class="header-anchor" href="#范例-关注类嵌套时可能会导致的赋值问题-p72" aria-hidden="true">#</a> 范例(关注类嵌套时可能会导致的赋值问题)(p72)</h4>
<ul>
<li>任何更新操作都要能通过设值函数控制</li>
<li>只要做的事可能改变集合，返回一个副本</li>
</ul>
<h3 id="_7-3-以对象取代基本类型-p174" tabindex="-1"><a class="header-anchor" href="#_7-3-以对象取代基本类型-p174" aria-hidden="true">#</a> 7.3 以对象取代基本类型(p174)</h3>
<h4 id="动机-2" tabindex="-1"><a class="header-anchor" href="#动机-2" aria-hidden="true">#</a> 动机</h4>
<p>一旦发现某个数据不仅仅局限于打印时，创建一个新类，一开始可能只是简单包装一下简单类型的数据，不过类有了，日后添加的业务逻辑就有地可去了。</p>
<h4 id="范例-p176-直观感受新类的价值" tabindex="-1"><a class="header-anchor" href="#范例-p176-直观感受新类的价值" aria-hidden="true">#</a> 范例(p176)(直观感受新类的价值)</h4>
<h3 id="_7-4-以查询取代临时变量-p178" tabindex="-1"><a class="header-anchor" href="#_7-4-以查询取代临时变量-p178" aria-hidden="true">#</a> 7.4 以查询取代临时变量(p178)</h3>
<h4 id="动机-3" tabindex="-1"><a class="header-anchor" href="#动机-3" aria-hidden="true">#</a> 动机</h4>
<ul>
<li>将变量抽取到函数里能使得函数的分解过程更简单</li>
<li>这项重构首发在类中施展效果会更好</li>
</ul>
<h4 id="做法-1" tabindex="-1"><a class="header-anchor" href="#做法-1" aria-hidden="true">#</a> 做法</h4>
<ul>
<li>如果变量可以改造成只读变量，改造它</li>
<li>将变量赋值代码提炼成函数</li>
</ul>
<h3 id="_7-5-提炼类-p182" tabindex="-1"><a class="header-anchor" href="#_7-5-提炼类-p182" aria-hidden="true">#</a> 7.5 提炼类(p182)</h3>
<h4 id="动机-4" tabindex="-1"><a class="header-anchor" href="#动机-4" aria-hidden="true">#</a> 动机</h4>
<ul>
<li>一个类应该是一个清晰的抽象，处理明确的责任，随着时间，类不断成长扩展，责任不断增加，这个类会变得过分复杂</li>
<li>一个维护大量函数和数据的类太大，不好理解,某些数据经常同时变化甚至彼此相依</li>
<li>一个信号，类的子类化方式，你发现子类化只影响类的部分特性，意味着你需要分解原来的类。</li>
</ul>
<h4 id="范例-183" tabindex="-1"><a class="header-anchor" href="#范例-183" aria-hidden="true">#</a> 范例(183)</h4>
<h3 id="_7-6-内联类-p186" tabindex="-1"><a class="header-anchor" href="#_7-6-内联类-p186" aria-hidden="true">#</a> 7.6 内联类(p186)</h3>
<h3 id="动机-5" tabindex="-1"><a class="header-anchor" href="#动机-5" aria-hidden="true">#</a> 动机</h3>
<ul>
<li>一个类不再承担足够的责任，不在有单独存在的理由(通常是之前的重构操作移走了这个类的责任)</li>
<li>有时重新组织代码时的做法：用内联手法合并各自的上下文，再用提炼手法再次分离它们会更合适</li>
</ul>
<h3 id="_7-7-隐藏委托关系-p189" tabindex="-1"><a class="header-anchor" href="#_7-7-隐藏委托关系-p189" aria-hidden="true">#</a> 7.7 隐藏委托关系(p189)</h3>
<p>反项重构 7.8</p>
<h4 id="动机-6" tabindex="-1"><a class="header-anchor" href="#动机-6" aria-hidden="true">#</a> 动机</h4>
<p>如果某些客户端先通过服务对象字段得到另一个对象(受委托类)，然后调用后者的函数，那么客户就必须先知晓这一层的委托关系，如果委托关系发生变化会影响客户端，这时可将委托关系隐藏起来</p>
<h3 id="_7-8-移除中间人-p192" tabindex="-1"><a class="header-anchor" href="#_7-8-移除中间人-p192" aria-hidden="true">#</a> 7.8 移除中间人(p192)</h3>
<p>反向重构 7.7</p>
<h4 id="动机-7" tabindex="-1"><a class="header-anchor" href="#动机-7" aria-hidden="true">#</a> 动机</h4>
<p>如果受委托类的特性越来越多，转发函数越来越多，这是可能将中间人转为直接使用受托类更好(偶尔有用的迪米特建议)</p>
<h3 id="_7-9-替换算法-p195" tabindex="-1"><a class="header-anchor" href="#_7-9-替换算法-p195" aria-hidden="true">#</a> 7.9 替换算法(p195)</h3>
<h4 id="动机-8" tabindex="-1"><a class="header-anchor" href="#动机-8" aria-hidden="true">#</a> 动机</h4>
<p>算法的基础上，如果有更清晰的表达可替换之</p>
<h2 id="第-8-章-搬移特性-p197" tabindex="-1"><a class="header-anchor" href="#第-8-章-搬移特性-p197" aria-hidden="true">#</a> 第 8 章 搬移特性(p197)</h2>
<h3 id="_8-1-搬移函数-p198" tabindex="-1"><a class="header-anchor" href="#_8-1-搬移函数-p198" aria-hidden="true">#</a> 8.1 搬移函数(p198)</h3>
<h3 id="_8-2-搬移字段-p207" tabindex="-1"><a class="header-anchor" href="#_8-2-搬移字段-p207" aria-hidden="true">#</a> 8.2 搬移字段(p207)</h3>
<h4 id="动机-9" tabindex="-1"><a class="header-anchor" href="#动机-9" aria-hidden="true">#</a> 动机</h4>
<p>一个糟糕的数据结构会导致许多无用代码，这些代码在差劲的数据结构中间纠缠不清，而非系统实现有用的行为。代码凌乱，势必难以理解；不仅如此，坏的代码结构本身也会隐藏数据的真实意图。</p>
<p>如果容许瑕疵存在并进一步累积，他们会经常是我困惑，并且是代码越来越困惑</p>
<p>当调用某个函数是，处理传入一个记录参数，还总是需要同时传入另一条记录的某个字段一起作为参数，最好规整到同一条记录中，以体现他们之间的联系</p>
<p>如果更新一个字段是需要同时再多个结构中做出修改，这也是一个征兆。</p>
<h3 id="_8-3-搬移语句到函数-p213" tabindex="-1"><a class="header-anchor" href="#_8-3-搬移语句到函数-p213" aria-hidden="true">#</a> 8.3 搬移语句到函数(p213)</h3>
<h4 id="动机-10" tabindex="-1"><a class="header-anchor" href="#动机-10" aria-hidden="true">#</a> 动机</h4>
<p>消除重复，将代码合并到函数里，之后的修改至需修改一处地方对所有调用生效</p>
<h3 id="_8-4-搬移语句到调用者-p217" tabindex="-1"><a class="header-anchor" href="#_8-4-搬移语句到调用者-p217" aria-hidden="true">#</a> 8.4 搬移语句到调用者(p217)</h3>
<h4 id="动机-11" tabindex="-1"><a class="header-anchor" href="#动机-11" aria-hidden="true">#</a> 动机</h4>
<p>一个征兆是，以往在多个地方的共同的行为，如今需要在某些调用点面前表现出不同的行为、</p>
<p>处理边界有些许偏移的场景，如果边界相去甚远，便只能重新设计了</p>
<h3 id="_8-5-以函数调用取代内联代码-222" tabindex="-1"><a class="header-anchor" href="#_8-5-以函数调用取代内联代码-222" aria-hidden="true">#</a> 8.5 以函数调用取代内联代码(222)</h3>
<h4 id="动机-12" tabindex="-1"><a class="header-anchor" href="#动机-12" aria-hidden="true">#</a> 动机</h4>
<p>打包相关行为，提升代码表达能力</p>
<h3 id="_8-6-移动语句-223" tabindex="-1"><a class="header-anchor" href="#_8-6-移动语句-223" aria-hidden="true">#</a> 8.6 移动语句(223)</h3>
<h4 id="动机-13" tabindex="-1"><a class="header-anchor" href="#动机-13" aria-hidden="true">#</a> 动机</h4>
<p>将存在关联的东西放一起，使代码更易理解</p>
<p>将相关代码聚集在一处，往往是另一项重构的起点(eg:提炼函数)</p>
<h4 id="相关要点" tabindex="-1"><a class="header-anchor" href="#相关要点" aria-hidden="true">#</a> 相关要点</h4>
<p><strong>编写没有副作用的代码，使我们几乎可以随心所欲编排它们的位置</strong></p>
<h3 id="_8-7-拆分循环-227" tabindex="-1"><a class="header-anchor" href="#_8-7-拆分循环-227" aria-hidden="true">#</a> 8.7 拆分循环(227)</h3>
<h4 id="动机-14" tabindex="-1"><a class="header-anchor" href="#动机-14" aria-hidden="true">#</a> 动机</h4>
<p>身兼多职的循环难以理解</p>
<p>一般拆分循环后，我还会紧接着对拆分的循环应用提炼函数，性能问题不是瓶颈，结构清晰后可进一步重构</p>
<p>本身的意义不在于拆分本身，再在于为下一步的优化提供良好的起点</p>
<h3 id="_8-8-以管道替换循环-231" tabindex="-1"><a class="header-anchor" href="#_8-8-以管道替换循环-231" aria-hidden="true">#</a> 8.8 以管道替换循环(231)</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">of</span> input<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>job <span class="token operator">===</span><span class="token operator">=</span> <span class="token string">'programmer'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    names<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>⏬</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i<span class="token punctuation">.</span>job <span class="token operator">===</span> <span class="token string">"programmer"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="动机-15" tabindex="-1"><a class="header-anchor" href="#动机-15" aria-hidden="true">#</a> 动机</h4>
<p>增强可读性</p>
<h4 id="范例" tabindex="-1"><a class="header-anchor" href="#范例" aria-hidden="true">#</a> 范例</h4>
<p>(作者、233)删除控制变量总能使我身心愉悦</p>
<h3 id="_8-9-移除死代码-237" tabindex="-1"><a class="header-anchor" href="#_8-9-移除死代码-237" aria-hidden="true">#</a> 8.9 移除死代码(237)</h3>
<h3 id="动机-16" tabindex="-1"><a class="header-anchor" href="#动机-16" aria-hidden="true">#</a> 动机</h3>
<p>无用代码带来额外的思维负担，一旦代码不再使用，应该立马删除。即使后续需要可以通过版本控制找回。</p>
<h2 id="第九章-重新组织数据" tabindex="-1"><a class="header-anchor" href="#第九章-重新组织数据" aria-hidden="true">#</a> 第九章 重新组织数据</h2>
<h3 id="_9-1-拆分变量-240" tabindex="-1"><a class="header-anchor" href="#_9-1-拆分变量-240" aria-hidden="true">#</a> 9.1 拆分变量(240)</h3>
<h4 id="动机-17" tabindex="-1"><a class="header-anchor" href="#动机-17" aria-hidden="true">#</a> 动机</h4>
<p>每个变量只承担一个责任，同一个变量承担两件不同的事情会令代码阅读者困惑</p>
<h3 id="_9-2-字段改名-244" tabindex="-1"><a class="header-anchor" href="#_9-2-字段改名-244" aria-hidden="true">#</a> 9.2 字段改名(244)</h3>
<h4 id="范例-245" tabindex="-1"><a class="header-anchor" href="#范例-245" aria-hidden="true">#</a> 范例(245)</h4>
<p><strong>对广泛使用的数据结构改名</strong></p>
<h3 id="_9-3-以查询取代派生变量-248" tabindex="-1"><a class="header-anchor" href="#_9-3-以查询取代派生变量-248" aria-hidden="true">#</a> 9.3 以查询取代派生变量(248)</h3>
<h4 id="动机-18" tabindex="-1"><a class="header-anchor" href="#动机-18" aria-hidden="true">#</a> 动机</h4>
<p>在一处修改数据，在另一处造成难以发现的破坏。</p>
<p>尽量将可变数据的作用限制在最小范围</p>
<p>有些变量可以随时计算出来。如果能去掉这些变量，也算朝着消除变量可变性的方向迈出了一大步。</p>
<h4 id="范例-1" tabindex="-1"><a class="header-anchor" href="#范例-1" aria-hidden="true">#</a> 范例</h4>
<p><strong>累计值受多个数据源影响的情况(250)</strong></p>
<h3 id="_9-4-将引用对象换为值对象-252" tabindex="-1"><a class="header-anchor" href="#_9-4-将引用对象换为值对象-252" aria-hidden="true">#</a> 9.4 将引用对象换为值对象(252)</h3>
<h4 id="动机-19" tabindex="-1"><a class="header-anchor" href="#动机-19" aria-hidden="true">#</a> 动机</h4>
<p>一个对象嵌入另一个对象时，这个对象可以视为引用对象或者值对象，差异在于如何更新对象内部的属性</p>
<p>不可变的数据结构处理起来更容易，可以放心的传给程序的其他部分</p>
<h4 id="范例-2" tabindex="-1"><a class="header-anchor" href="#范例-2" aria-hidden="true">#</a> 范例</h4>
<p>基于值的相等性判断<strong>创建自己的 equals 函数</strong></p>
<h3 id="_9-5-将值对象改为引用对象-256" tabindex="-1"><a class="header-anchor" href="#_9-5-将值对象改为引用对象-256" aria-hidden="true">#</a> 9.5 将值对象改为引用对象(256)</h3>
<h4 id="动机-20" tabindex="-1"><a class="header-anchor" href="#动机-20" aria-hidden="true">#</a> 动机</h4>
<p>如果共享的数据需要更新</p>
<p>把值对象改为引用对象会带来一个结果：对于一个客观实体，只有一个代表它的对象。通常意味着我会需要某种形式的仓库，只为每个实体创造一次对象，以后始终从仓库中获取该对象。</p>
<h4 id="范例-3" tabindex="-1"><a class="header-anchor" href="#范例-3" aria-hidden="true">#</a> 范例</h4>
<p>全局对象必须小心对待</p>
<h2 id="第十章-简化条件逻辑" tabindex="-1"><a class="header-anchor" href="#第十章-简化条件逻辑" aria-hidden="true">#</a> 第十章 简化条件逻辑</h2>
<p>把条件逻辑变得更容易理解</p>
<h3 id="_10-1-分解表达式-260" tabindex="-1"><a class="header-anchor" href="#_10-1-分解表达式-260" aria-hidden="true">#</a> 10.1 分解表达式(260)</h3>
<h4 id="动机-21" tabindex="-1"><a class="header-anchor" href="#动机-21" aria-hidden="true">#</a> 动机</h4>
<p>复杂的条件逻辑是最常导致复杂度上升的地点之一，将它分解为多个独立的函数，清楚的表达自己的意图，突出条件逻辑，清楚地表明每个分支的作用</p>
<p>带来的价值往往超出你想象</p>
<h3 id="_10-2-合并表达式-263" tabindex="-1"><a class="header-anchor" href="#_10-2-合并表达式-263" aria-hidden="true">#</a> 10.2 合并表达式(263)</h3>
<h4 id="动机-22" tabindex="-1"><a class="header-anchor" href="#动机-22" aria-hidden="true">#</a> 动机</h4>
<p>检查条件不同，最终行为一致，应该用“逻辑或”、”逻辑与“将它们合并成一个表达式。合并后的条件代码会表述实际上只有一次条件检查，只不过有多个并列条件需要检查而已。</p>
<h4 id="做法-2" tabindex="-1"><a class="header-anchor" href="#做法-2" aria-hidden="true">#</a> 做法</h4>
<p><strong>确保这些表达式没有副作用</strong></p>
<h4 id="范例-4" tabindex="-1"><a class="header-anchor" href="#范例-4" aria-hidden="true">#</a> 范例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">disabilityAmount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">anEmployee</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>anEmployee<span class="token punctuation">.</span>age <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>anEmployee<span class="token punctuation">.</span>monthsDisabled <span class="token operator">></span> <span class="token number">12</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>anEmployee<span class="token punctuation">.</span>isPartTime<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>改写成</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">disabilityAmount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">anEmployee</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">isNotSuitable</span><span class="token punctuation">(</span>anEmployee<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">isNotSuitable</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">anEmployee</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    anEmployee<span class="token punctuation">.</span>age <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token operator">||</span>
    anEmployee<span class="token punctuation">.</span>monthsDisabled <span class="token operator">></span> <span class="token number">12</span> <span class="token operator">||</span>
    anEmployee<span class="token punctuation">.</span>isPartTime
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_10-3-以卫语句取代嵌套条件表达式-266" tabindex="-1"><a class="header-anchor" href="#_10-3-以卫语句取代嵌套条件表达式-266" aria-hidden="true">#</a> 10.3 以卫语句取代嵌套条件表达式(266)</h3>
<h4 id="动机-23" tabindex="-1"><a class="header-anchor" href="#动机-23" aria-hidden="true">#</a> 动机</h4>
<p>条件表达式通常只有两种风格：两个条件都是正常行为、只有一个条件是正常行为。这一点应该通过代码表现出来。</p>
<p>如果某个条件极其罕见，应该单独检查该条件，并在该条件真时返回，这样的单独检查常常称为”卫语句“。</p>
<p>嵌套的条件逻辑让我们看不清代码真实的含义。</p>
<h3 id="_10-4-以多态替代条件表达式-272" tabindex="-1"><a class="header-anchor" href="#_10-4-以多态替代条件表达式-272" aria-hidden="true">#</a> 10.4 以多态替代条件表达式(272)</h3>
<h4 id="动机-24" tabindex="-1"><a class="header-anchor" href="#动机-24" aria-hidden="true">#</a> 动机</h4>
<p>有一个基础逻辑，在其上又有一些变体，可以把基础逻辑放进超类</p>
<h4 id="范例-需要多看几遍" tabindex="-1"><a class="header-anchor" href="#范例-需要多看几遍" aria-hidden="true">#</a> 范例(需要多看几遍)</h4>
<ul>
<li>用多态处理变体逻辑</li>
</ul>
<h3 id="_10-5-引入特例-289" tabindex="-1"><a class="header-anchor" href="#_10-5-引入特例-289" aria-hidden="true">#</a> 10.5 引入特例(289)</h3>
<h4 id="动机-25" tabindex="-1"><a class="header-anchor" href="#动机-25" aria-hidden="true">#</a> 动机</h4>
<p>一个数据结构的使用者都在检查某个特殊的值，并且当这个特殊值出现时所作的处理也都相同，可收拢一处。</p>
<h4 id="范例-需要多看几遍-1" tabindex="-1"><a class="header-anchor" href="#范例-需要多看几遍-1" aria-hidden="true">#</a> 范例(需要多看几遍)</h4>
<ul>
<li>对原始数据做数据增强</li>
</ul>
<h3 id="_10-6-引入断言-302" tabindex="-1"><a class="header-anchor" href="#_10-6-引入断言-302" aria-hidden="true">#</a> 10.6 引入断言(302)</h3>
<h4 id="动机-26" tabindex="-1"><a class="header-anchor" href="#动机-26" aria-hidden="true">#</a> 动机</h4>
<p>断言是一种很有价值的交流方式，它们告诉阅读者，程序在执行到这一点时，对当前状态做了何种假设</p>
<h4 id="范例-5" tabindex="-1"><a class="header-anchor" href="#范例-5" aria-hidden="true">#</a> 范例</h4>
<p>断言放在设值函数上，便于溯源</p>
<p>检查必须为真的情况</p>
<h2 id="第十一章-重构-api-305" tabindex="-1"><a class="header-anchor" href="#第十一章-重构-api-305" aria-hidden="true">#</a> 第十一章 重构 API(305)</h2>
<p>有些参数其实只是一个标记，根据这个标记的不同，板书有截然不同的行为，最好用 移除标记 分离不同行为</p>
<p>函数见传递时，数据结构有时被毫无必要的拆开，用 保持对象完整性 将其聚拢</p>
<p>特别复杂的函数，传入传出一大堆数据
...</p>
<h3 id="_11-1-将查询函数和修改函数分离-306" tabindex="-1"><a class="header-anchor" href="#_11-1-将查询函数和修改函数分离-306" aria-hidden="true">#</a> 11.1 将查询函数和修改函数分离(306)</h3>
<h4 id="动机-27" tabindex="-1"><a class="header-anchor" href="#动机-27" aria-hidden="true">#</a> 动机</h4>
<p>任何有返回值的函数，都不应该有看得到的副作用，如果有，试着将查询动作从修改中分离</p>
<h3 id="_11-2-函数参数化-310" tabindex="-1"><a class="header-anchor" href="#_11-2-函数参数化-310" aria-hidden="true">#</a> 11.2 函数参数化(310)</h3>
<h4 id="动机-28" tabindex="-1"><a class="header-anchor" href="#动机-28" aria-hidden="true">#</a> 动机</h4>
<p>几个函数逻辑非常相似，只有一些字面量不同，可以将其合并成一个函数，以参数传入不同的值，以消除重复。</p>
<h3 id="_11-3-移除标记参数-314" tabindex="-1"><a class="header-anchor" href="#_11-3-移除标记参数-314" aria-hidden="true">#</a> 11.3 移除标记参数(314)</h3>
<h4 id="动机-29" tabindex="-1"><a class="header-anchor" href="#动机-29" aria-hidden="true">#</a> 动机</h4>
<p>标记参数隐藏了函数中存在的差异性，注意 boolean 类型的标记比较糟糕们不能清晰的传达其含义</p>
<p>如果调用者传入的参数是程序中流动的参数，这就不算标记参数：只有调用者直接传入字面值，这才是标记参数，只有哈函数值影响了内部的控制流，这才是标记参数。</p>
<p>一个函数有多个标记参数，这是一个信号，这个函数可能做得太多，能否使用更简单的函数来组合成完整逻辑</p>
<h4 id="范例-6" tabindex="-1"><a class="header-anchor" href="#范例-6" aria-hidden="true">#</a> 范例</h4>
<ul>
<li>如果每一处调用函数的地方都做了类似的重复操作，可以以字面量的形式设置参数<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> isRush <span class="token operator">=</span> <span class="token function">determineIfRush</span><span class="token punctuation">(</span>anOrder<span class="token punctuation">)</span><span class="token punctuation">;</span>
aShipment<span class="token punctuation">.</span>deliveryDate <span class="token operator">=</span> <span class="token function">deliveryDate</span><span class="token punctuation">(</span>anOrder<span class="token punctuation">,</span> isRush<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
<h3 id="_11-4-保持对象完整-319" tabindex="-1"><a class="header-anchor" href="#_11-4-保持对象完整-319" aria-hidden="true">#</a> 11.4 保持对象完整(319)</h3>
<h4 id="动机-30" tabindex="-1"><a class="header-anchor" href="#动机-30" aria-hidden="true">#</a> 动机</h4>
<p>代码从一个记录结构中导出几个值，然后把这几个值一起传递给一个函数，此时把记录传给函数，在函数体内部导出所需值。能更好应对变化</p>
<p>如果几处代码都在使用对象的一部分功能，可能意味着改用 提炼类 把这一部分代码单独提出来</p>
<p>调用者将自己若干数据作为参数，传递给函数的情况下，此时可以将调用者的自我引用作为参数给目标函数</p>
<p>如果不想让被调的函数依赖完整对象就不太使用于此方法</p>
<h3 id="_11-5-以查询取代参数-372" tabindex="-1"><a class="header-anchor" href="#_11-5-以查询取代参数-372" aria-hidden="true">#</a> 11.5 以查询取代参数(372)</h3>
<h4 id="动机-31" tabindex="-1"><a class="header-anchor" href="#动机-31" aria-hidden="true">#</a> 动机</h4>
<p>参数列表应该总结函数的可变性，标示出函数可能体现出行为差异的主要方式。避免重复，越短越容易理解</p>
<p>不适用此方法的常见原因，移除参数会给函数体增加不必要的依赖关系</p>
<h3 id="_11-6-以参数取代查询-327" tabindex="-1"><a class="header-anchor" href="#_11-6-以参数取代查询-327" aria-hidden="true">#</a> 11.6 以参数取代查询(327)</h3>
<h4 id="动机-32" tabindex="-1"><a class="header-anchor" href="#动机-32" aria-hidden="true">#</a> 动机</h4>
<p>改变代码的依赖关系--为了让目标函数不在依赖于某个元素</p>
<p><strong>引用透明性</strong>： 如果一个函数用同样的参数调用总是给出同样的结果就说函数具有引用透明性</p>
<p>便于提纯程序的某些组成部分</p>
<h3 id="_11-7-移除设值函数-331" tabindex="-1"><a class="header-anchor" href="#_11-7-移除设值函数-331" aria-hidden="true">#</a> 11.7 移除设值函数(331)</h3>
<h4 id="动机-33" tabindex="-1"><a class="header-anchor" href="#动机-33" aria-hidden="true">#</a> 动机</h4>
<p>不希望在创建后还被改变</p>
<h3 id="_11-8-以工厂函数取代构造函数-334" tabindex="-1"><a class="header-anchor" href="#_11-8-以工厂函数取代构造函数-334" aria-hidden="true">#</a> 11.8 以工厂函数取代构造函数 334</h3>
<h4 id="动机-34" tabindex="-1"><a class="header-anchor" href="#动机-34" aria-hidden="true">#</a> 动机</h4>
<p>构造函数</p>
<ul>
<li>无法根据环境或参数信息返回子类实例或代理对象</li>
<li>构造函数名字是固定的，无法使用比默认名字更清晰的函数名</li>
<li>需要通过特殊的操作符调用(new)</li>
</ul>
<h3 id="_11-9-以命令取代函数-337" tabindex="-1"><a class="header-anchor" href="#_11-9-以命令取代函数-337" aria-hidden="true">#</a> 11.9 以命令取代函数(337)</h3>
<h4 id="动机-35" tabindex="-1"><a class="header-anchor" href="#动机-35" aria-hidden="true">#</a> 动机</h4>
<p>**命令对象：**将函数封装成自己的对象，有时也是一种有用的方法。只服务与单一函数，获得对函数的请求，执行该函数，就是这种函数存在的意义</p>
<p>命令对象提供了更大的控制灵活性和更强的表达能力</p>
<p>还可以支持附加操作，如撤销操作</p>
<p>如果使用的编程语言支持对象但不支持函数作为一等公民，通过命令对象就可以给函数提供大部分相当于一等公民的能力</p>
<h3 id="_11-10-以函数取代命令-344" tabindex="-1"><a class="header-anchor" href="#_11-10-以函数取代命令-344" aria-hidden="true">#</a> 11.10 以函数取代命令(344)</h3>
<h4 id="动机-36" tabindex="-1"><a class="header-anchor" href="#动机-36" aria-hidden="true">#</a> 动机</h4>
<p>命令对象费而不惠时</p>
<h2 id="第-12-章-处理继承关系-349" tabindex="-1"><a class="header-anchor" href="#第-12-章-处理继承关系-349" aria-hidden="true">#</a> 第 12 章 处理继承关系(349)</h2>
<h3 id="_12-1-函数上移-350" tabindex="-1"><a class="header-anchor" href="#_12-1-函数上移-350" aria-hidden="true">#</a> 12.1 函数上移(350)</h3>
<h4 id="动机-37" tabindex="-1"><a class="header-anchor" href="#动机-37" aria-hidden="true">#</a> 动机</h4>
<p>只要系统内出现重复，就会面临“修改其中一个却未能修改另一个”的风险。</p>
<p>如果函数在各个子类中都相同</p>
<h4 id="做法-3" tabindex="-1"><a class="header-anchor" href="#做法-3" aria-hidden="true">#</a> 做法</h4>
<p>...</p>
<p>若能明确传达出“继承 Party 的子类需要提供一个 monthlyCost 实现”这个信息，特别对日后需要添加子类的情况。一种好的表达方式是添加一个陷阱函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// class Party</span>
<span class="token keyword">get</span> <span class="token function">monthlyCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 子类未履行职责错误</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SubclassResponsibilityError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_12-2-字段上移-353" tabindex="-1"><a class="header-anchor" href="#_12-2-字段上移-353" aria-hidden="true">#</a> 12.2 字段上移(353)</h3>
<h4 id="动机-38" tabindex="-1"><a class="header-anchor" href="#动机-38" aria-hidden="true">#</a> 动机</h4>
<p>如果子类是分别开发的，重构过程中组合起来的，容易有重复的特性，特别是字段</p>
<p>本方法可以从两方面较少重复：去除重复的数据声明；将使用该字段的行为从子类移至超类</p>
<h3 id="_12-3-构造函数本体上移-355" tabindex="-1"><a class="header-anchor" href="#_12-3-构造函数本体上移-355" aria-hidden="true">#</a> 12.3 构造函数本体上移(355)</h3>
<h4 id="动机-39" tabindex="-1"><a class="header-anchor" href="#动机-39" aria-hidden="true">#</a> 动机</h4>
<p>构造函数公共行为上移至超类</p>
<p>额外<strong>注意</strong>构造函数中一些有调用次序限制的情况</p>
<h4 id="范例-7" tabindex="-1"><a class="header-anchor" href="#范例-7" aria-hidden="true">#</a> 范例</h4>
<p><strong>学习超类调用子类方法的写法</strong></p>
<h3 id="_12-4-函数下移-359" tabindex="-1"><a class="header-anchor" href="#_12-4-函数下移-359" aria-hidden="true">#</a> 12.4 函数下移(359)</h3>
<h4 id="动机-40" tabindex="-1"><a class="header-anchor" href="#动机-40" aria-hidden="true">#</a> 动机</h4>
<p>如果超类中某个函数只与一个或少数几个子类有关，将其放到真正关心它的子类中去。</p>
<h3 id="_12-5-字段下移-361" tabindex="-1"><a class="header-anchor" href="#_12-5-字段下移-361" aria-hidden="true">#</a> 12.5 字段下移(361)</h3>
<h4 id="动机-41" tabindex="-1"><a class="header-anchor" href="#动机-41" aria-hidden="true">#</a> 动机</h4>
<p>同 12.4 针对字段</p>
<h4 id="_12-6-以子类取代类型码-362" tabindex="-1"><a class="header-anchor" href="#_12-6-以子类取代类型码-362" aria-hidden="true">#</a> 12.6 以子类取代类型码(362)</h4>
<h4 id="动机-42" tabindex="-1"><a class="header-anchor" href="#动机-42" aria-hidden="true">#</a> 动机</h4>
<p>用多态处理条件逻辑</p>
<p>场景思考：</p>
<p>应该让“工程师”成为“员工”的子类，还是应该在“员工”类包含“员工类别”属性、从后者继承出“工程师”和“经理”等子类型呢。</p>
<h4 id="范例-需要多看几遍-2" tabindex="-1"><a class="header-anchor" href="#范例-需要多看几遍-2" aria-hidden="true">#</a> 范例(需要多看几遍)</h4>
<h3 id="_12-7-移除子类-369" tabindex="-1"><a class="header-anchor" href="#_12-7-移除子类-369" aria-hidden="true">#</a> 12.7 移除子类(369)</h3>
<h4 id="动机-43" tabindex="-1"><a class="header-anchor" href="#动机-43" aria-hidden="true">#</a> 动机</h4>
<p>子类所支持的变化可能会被搬移到别处，甚至完全去除</p>
<p>有时添加子类是为了应对未来的功能，结果构想中的功能压根没出现</p>
<p>子类的用处太少</p>
<p>本手法常用于一次移除多个子类</p>
<h4 id="范例-8" tabindex="-1"><a class="header-anchor" href="#范例-8" aria-hidden="true">#</a> 范例</h4>
<p>==为什么从工厂方法过度==</p>
<h4 id="_12-8-提炼超类-375" tabindex="-1"><a class="header-anchor" href="#_12-8-提炼超类-375" aria-hidden="true">#</a> 12.8 提炼超类(375)</h4>
<h4 id="动机-44" tabindex="-1"><a class="header-anchor" href="#动机-44" aria-hidden="true">#</a> 动机</h4>
<p>提炼出公共行为至<strong>新的超类</strong></p>
<h5 id="范例-学习方法" tabindex="-1"><a class="header-anchor" href="#范例-学习方法" aria-hidden="true">#</a> 范例(学习方法)</h5>
<h3 id="_12-9-折叠继承体系-380" tabindex="-1"><a class="header-anchor" href="#_12-9-折叠继承体系-380" aria-hidden="true">#</a> 12.9 折叠继承体系(380)</h3>
<h4 id="动机-45" tabindex="-1"><a class="header-anchor" href="#动机-45" aria-hidden="true">#</a> 动机</h4>
<p>随着继承体系变化，发现子类超类没多大区别，此时把超类子类合并起来</p>
<h3 id="_12-10-以委托取代子类-381" tabindex="-1"><a class="header-anchor" href="#_12-10-以委托取代子类-381" aria-hidden="true">#</a> 12.10 以委托取代子类(381)</h3>
<h4 id="动机-46" tabindex="-1"><a class="header-anchor" href="#动机-46" aria-hidden="true">#</a> 动机</h4>
<p>继承的短板：继承这张牌只能打一次。导致不同的原因可能有很多种，但继承只能处理一个方向上的变化</p>
<h4 id="范例-需要多看几遍-3" tabindex="-1"><a class="header-anchor" href="#范例-需要多看几遍-3" aria-hidden="true">#</a> 范例(需要多看几遍)</h4>
<p>超类的一些结构只在特定的子类存在是才有意义--有些函数的组织方式完全是为了方便复写特定类型的行为</p>
<p>eg: 可能需要动态把普通升级成高级预定</p>
<p>eg: 有时需要修改数据本身的结构，而不重建整个数据结构</p>
<p>传入方向应用是因为子类的几个函数需要访问超类中的数据。(386)</p>
<p>eg: 以 bird 系统参数委托取代子类的原因(391)</p>
<blockquote>
<p>有些鸟是野生的，有些是家养的，两者差异巨大，可建模为 bird 的子类，但继承只能用一次(==是否可以中间插入这两个子类==)，所以如果想用子类表现野生和家养的差异，得先去掉关于不同品种的继承关系。</p>
</blockquote>
<h3 id="_12-10-以委托取代超类-399" tabindex="-1"><a class="header-anchor" href="#_12-10-以委托取代超类-399" aria-hidden="true">#</a> 12.10 以委托取代超类(399)</h3>
<h4 id="动机-47" tabindex="-1"><a class="header-anchor" href="#动机-47" aria-hidden="true">#</a> 动机</h4>
<p>早期经典误用继承的例子：让栈 stack 继承列表 list, 想复用列表类的数据存储和操作能力。但大部分操作对 stack 并不适用。更好的做法是吧列表作为栈的字段，把必要的操作委派给列表就行</p>
<h1 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h1>
<h2 id="怪味道-重构速查表-405" tabindex="-1"><a class="header-anchor" href="#怪味道-重构速查表-405" aria-hidden="true">#</a> 怪味道 =&gt; 重构速查表(405)</h2>
<h1 id="随记" tabindex="-1"><a class="header-anchor" href="#随记" aria-hidden="true">#</a> 随记</h1>
<ul>
<li>配图</li>
<li>常见做法，先创建需要重构的部分的副本 ，副本调试无误后再逐步替换以前的，改变以前指向</li>
<li>对象封装 class</li>
<li>强化赋值操作</li>
<li>整体回顾时，整理共通点,记录自己的理解，与原意像对比，写上 demo</li>
<li>重构过程中也不会影响到原有使用，如果影响到了，确认自己的步子是不是太大，步骤是否有有问题</li>
<li>所有的范例都可以学习下如何最安全的逐步重构，遇到对应的场景时回顾下书上的重构过程</li>
<li>很多方法是类似的，整理共同点</li>
<li>一个检验标准：非编程人员能看懂</li>
<li>重构技巧：放一个陷阱，捕捉意料之外的值</li>
</ul>
<h2 id="重构插件-js-refactor" tabindex="-1"><a class="header-anchor" href="#重构插件-js-refactor" aria-hidden="true">#</a> 重构插件(js refactor)</h2>
<p>f2 重命名
cmd + . 选择重构工具</p>
</template>
