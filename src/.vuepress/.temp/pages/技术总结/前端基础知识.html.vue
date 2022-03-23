<template><h1 id="英寸" tabindex="-1"><a class="header-anchor" href="#英寸" aria-hidden="true">#</a> 英寸</h1>
<p>1 英寸 = 2.54 厘米</p>
<div class="language-math ext-math line-numbers-mode"><pre v-pre class="language-math"><code>1 inch = 2.54cm = 25.4mm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="屏幕尺寸" tabindex="-1"><a class="header-anchor" href="#屏幕尺寸" aria-hidden="true">#</a> 屏幕尺寸</h1>
<p>如屏幕尺寸 5.2 英寸表示屏幕对角线长度 5.2 英寸</p>
<h1 id="像素" tabindex="-1"><a class="header-anchor" href="#像素" aria-hidden="true">#</a> 像素</h1>
<p>像素没有实际物理尺寸的</p>
<h1 id="物理-分辨率" tabindex="-1"><a class="header-anchor" href="#物理-分辨率" aria-hidden="true">#</a> （物理）分辨率</h1>
<p>指已知屏幕上的像素块个数</p>
<p>如：1920*1080：竖向 1920 个像素块，横向 1080 个像素块</p>
<p>硬件支持</p>
<h1 id="逻辑分辨率-ios" tabindex="-1"><a class="header-anchor" href="#逻辑分辨率-ios" aria-hidden="true">#</a> 逻辑分辨率(ios)</h1>
<p>和上诉概念相似，软件使用</p>
<h1 id="屏幕像素密度" tabindex="-1"><a class="header-anchor" href="#屏幕像素密度" aria-hidden="true">#</a> 屏幕像素密度</h1>
<p>1 英寸屏幕对角线上拥有的像素数</p>
<div class="language-math ext-math line-numbers-mode"><pre v-pre class="language-math"><code>ppi = √(横向像素²+纵向像素²)/屏幕尺寸
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="长度单位" tabindex="-1"><a class="header-anchor" href="#长度单位" aria-hidden="true">#</a> 长度单位</h1>
<ul>
<li>px：pixel，像素，电子屏幕上组成一幅图画或照片的最基本单元</li>
</ul>
<!-- - pt: point，点，印刷行业常用单位，等于 1/72 英寸（逻辑像素点？？） -->
<ul>
<li>ppi: pixel per inch，每英寸像素数，该值越高，则屏幕越细腻</li>
<li>dpi: dot per inch，每英寸多少点，该值越高，则图片越细腻</li>
<li>dp(或：dip): dip，Density-independent pixel, 是安卓开发用的长度单位，1dp 表示在屏幕像素点密度为 160ppi 时 1px 长度</li>
<li>sp: scale-independent pixel，安卓开发用的字体大小单位。
<blockquote>
<p>sp 和 dp 很类似但唯一的区别是，Android 系统允许用户自定义文字尺寸大小（小、正常、大、超大等等），当文字尺寸是“正常”时 1sp=1dp=0.00625 英寸，而当文字尺寸是“大”或“超大”时，1sp&gt;1dp=0.00625 英寸。类似我们在 windows 里调整字体尺寸以后的效果——窗口大小不变，只有文字大小改变。</p>
</blockquote>
</li>
<li>in:英寸</li>
<li>mm: 毫米</li>
</ul>
<h1 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h1>
<p>[1] <a href="http://www.woshipm.com/ucd/198774.html" target="_blank" rel="noopener noreferrer">屏幕尺寸，分辨率，像素，PPI 之间到底什么关系？<ExternalLinkIcon/></a><br>
[2] <a href="https://www.jianshu.com/p/41a8ccdf91ed" target="_blank" rel="noopener noreferrer">iPhone 屏幕分辨率和适配规则（基础篇）<ExternalLinkIcon/></a><br>
[3] <a href="https://www.zhihu.com/question/40506180" target="_blank" rel="noopener noreferrer">逻辑分辨率和物理分辨率区别<ExternalLinkIcon/></a><br>
[4] <a href="https://zhuanlan.zhihu.com/p/26481853" target="_blank" rel="noopener noreferrer">什么是 dp、pt、sp？<ExternalLinkIcon/></a></p>
</template>
