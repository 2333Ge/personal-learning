<template><h1 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> <a href="https://book.kotlincn.net/text/type-aliases.html" target="_blank" rel="noopener noreferrer">类型别名<ExternalLinkIcon/></a></h1>
<p>为现有类型提供替代名称</p>
<ul>
<li>
<p>有助于缩短较长的泛型类型</p>
</li>
<li>
<p>为函数类型提供另外的别名</p>
</li>
<li>
<p>可以为内部类和嵌套类创建新名称</p>
</li>
</ul>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">typealias</span> NodeSet <span class="token operator">=</span> Set<span class="token operator">&lt;</span>Network<span class="token punctuation">.</span>Node<span class="token operator">></span>

<span class="token keyword">typealias</span> FileTable<span class="token operator">&lt;</span>K<span class="token operator">></span> <span class="token operator">=</span> MutableMap<span class="token operator">&lt;</span>K<span class="token punctuation">,</span> MutableList<span class="token operator">&lt;</span>File<span class="token operator">></span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
