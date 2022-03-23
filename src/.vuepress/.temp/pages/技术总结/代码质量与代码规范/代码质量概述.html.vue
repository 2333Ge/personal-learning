<template><h1 id="代码质量概述" tabindex="-1"><a class="header-anchor" href="#代码质量概述" aria-hidden="true">#</a> 代码质量概述</h1>
<h2 id="基本原则-面向对象" tabindex="-1"><a class="header-anchor" href="#基本原则-面向对象" aria-hidden="true">#</a> 基本原则（面向对象）</h2>
<ul>
<li>单一职责</li>
<li>开闭原则（对拓展开放、对修改封闭）</li>
<li>里氏替换（引用基类的地方必须能透明使用其子类）</li>
<li>依赖倒置
<ul>
<li>高层模块不依赖底层模块，两者都依赖其抽象</li>
<li>抽象不依赖细节</li>
<li>细节依赖抽象</li>
</ul>
</li>
<li>接口隔离（类的依赖关系建立在最小接口上）</li>
<li>迪米特原则（一个对象应该对其他对象有最少的了解）</li>
</ul>
<h2 id="前人总结" tabindex="-1"><a class="header-anchor" href="#前人总结" aria-hidden="true">#</a> 前人总结</h2>
<ul>
<li><a href="https://feelschaotic.gitbook.io/android-knowledge-system/shitxing-cheng-chang/tuan-dui-guan-li/dai-ma-zhi-liang-yu-dai-ma-gui-fan" target="_blank" rel="noopener noreferrer">代码与代码规范<ExternalLinkIcon/></a></li>
</ul>
<h3 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要" aria-hidden="true">#</a> 摘要</h3>
<h4 id="关于烂代码的那些事-上" tabindex="-1"><a class="header-anchor" href="#关于烂代码的那些事-上" aria-hidden="true">#</a> 关于烂代码的那些事（上）</h4>
<blockquote>
<p>当一个团队里的底层代码难以阅读、耦合了上层的逻辑导致难以测试、或者对使用场景做了过多的假设导致难以复用时，虽然完成了功能，它依然是坨翔一样的代码。</p>
</blockquote>
<blockquote>
<p>几乎所有的烂代码都是从“够用的代码”演化来的，代码没变，使用代码的场景发生变了，原本够用的代码不符合新的场景，那么它就成了烂代码。</p>
</blockquote>
<h1 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h1>
<p>[1] <a href="https://blog.csdn.net/jt521xlg/article/details/47416475" target="_blank" rel="noopener noreferrer">关于烂代码的那些事（上）<ExternalLinkIcon/></a><br>
[2] <a href="http://blog.2baxb.me/archives/1378" target="_blank" rel="noopener noreferrer">关于烂代码的那些事（中）<ExternalLinkIcon/></a><br>
[3] <a href="http://blog.2baxb.me/archives/1499" target="_blank" rel="noopener noreferrer">关于烂代码的那些事（下）<ExternalLinkIcon/></a></p>
<h1 id="随记" tabindex="-1"><a class="header-anchor" href="#随记" aria-hidden="true">#</a> 随记</h1>
<ul>
<li>三个地方</li>
</ul>
<h2 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h2>
<h2 id="随手重构" tabindex="-1"><a class="header-anchor" href="#随手重构" aria-hidden="true">#</a> 随手重构</h2>
<ol>
<li>vscode 重构</li>
</ol>
<ul>
<li><a href="https://code.visualstudio.com/Docs/languages/typescript#_refactoring" target="_blank" rel="noopener noreferrer">官网教程<ExternalLinkIcon/></a></li>
<li><a href="https://geek-docs.com/vscode/vscode-tutorials/vs-code-refactor.html" target="_blank" rel="noopener noreferrer">极客网教程<ExternalLinkIcon/></a>
<blockquote>
<ul>
<li>快捷键 f2、command+.</li>
<li>点击黄色 💡 快速重构</li>
</ul>
</blockquote>
</li>
</ul>
<h2 id="规范" tabindex="-1"><a class="header-anchor" href="#规范" aria-hidden="true">#</a> 规范</h2>
<ul>
<li>typeDoc 提供给外部用时需要的工具</li>
</ul>
</template>
