<template><h1 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h1>
<p>https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
src/资源/keyboard-shortcuts-macos.pdf
首选项-键盘快捷方式</p>
<p>重构</p>
<ul>
<li>变量重命名： <code>f2</code></li>
<li>快速修复： <code>⌘ + .</code></li>
<li>重构： <code>⇧+⌃+r</code></li>
</ul>
<p>光标</p>
<ul>
<li>多行同位置同时编辑： 鼠标中键+滑动选择、<code>⌥+⌘+↑、↓</code></li>
<li>插入光标： <code>option + click</code></li>
<li>同时修改同名符号：选中修改内容 =&gt; <code>⌘+d</code>(d 点几下往后选中多少个同样的字符)</li>
</ul>
<p>基础编辑</p>
<ul>
<li>平移选中内容上： <code>⌥ + ↑ /↓</code></li>
<li>切换自动换行（查看）：<code>⌥+z</code></li>
<li>整行内容注释掉：<code>⌘ + /</code></li>
<li>块内容注释掉：<code>⌥+⇧+a</code></li>
<li>折起展开当前块：<code>⌥⌘[ / ⌥⌘]</code></li>
<li>向左或向右缩进：<code>⌘+[、 ⌘+]</code></li>
<li>格式化文档：<code>⌥+⇧+f</code></li>
</ul>
<p>导航</p>
<ul>
<li>跳转文件：<code>⌘+p</code></li>
</ul>
<!-- - 跳转指定行： -->
<ul>
<li>跳转下一个警告：<code>f8</code></li>
<li>编辑窗口中的文件切换：<code>⌃+⇧+tab</code></li>
<li>跳转引用：<code>⇧+f12</code></li>
<li>跳转实现：<code>⌘+f12</code></li>
</ul>
<p>编辑器管理</p>
<ul>
<li>编辑器分屏：<code>⌘+\</code></li>
<li>切换编辑器布局(横向\纵向): <code>⌥+⌘+0</code></li>
<li>切换光标所在编辑器窗口：<code>⌘+1、2、3</code></li>
</ul>
<p>窗口</p>
<ul>
<li>关闭当前文件：<code>⌘+w</code></li>
<li>非全屏模式下切换窗口: ⌘ + `</li>
<li>开关侧边工具栏：<code>⌘+b</code></li>
<li>打开终端：⌃+`</li>
<li>新建窗口：<code>⇧+⌘+n</code></li>
<li>禅模式，只有正在操作的代码：<code>⌘+k z</code></li>
<li>将当前文件在新窗口打开：<code>⌘+k+o</code></li>
</ul>
<h1 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h1>
<h2 id="项目中配置推荐插件" tabindex="-1"><a class="header-anchor" href="#项目中配置推荐插件" aria-hidden="true">#</a> 项目中配置推荐插件</h2>
<p>项目根目录下，.vscode 目录下添加 extensions.json 文件
// See https://go.microsoft.com/fwlink/?LinkId=827846</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "octref.vetur",
    "eamodio.gitlens",
    "cipchk.cssrem",
    "dariofuzinato.vue-peek",
    "knisterpeter.vscode-commitizen",
    "christian-kohler.path-intellisense",
    "dweizhe.docthis-customize-tags",
    "mcfe.mcfe-toolkit"
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="coderunner" tabindex="-1"><a class="header-anchor" href="#coderunner" aria-hidden="true">#</a> CodeRunner</h2>
<p>实时一键运行代码</p>
<h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h2>
<p>设置 ide 背景图</p>
<p>背景图显示不出参考：
https://blog.csdn.net/toopoo/article/details/88841755
https://github.com/Microsoft/vscode/issues/7426</p>
<h4 id="_1-图片显示不出" tabindex="-1"><a class="header-anchor" href="#_1-图片显示不出" aria-hidden="true">#</a> 1. 图片显示不出</h4>
<p>检查是否装到了下载目录里了</p>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<ul>
<li>
<p>vscode-mindmap：思维导图插件</p>
<ul>
<li>创建.km 文件，vscode 自动识别</li>
</ul>
</li>
<li>
<p>Draw.io Integration：流程图</p>
</li>
<li>
<p>Markdown</p>
<ul>
<li>Markdown paste</li>
<li>Markdown table formatter</li>
</ul>
</li>
<li>
<p>Code spell checker：拼写检查工具</p>
</li>
<li>
<p>Color highLight：颜色高光</p>
</li>
<li>
<p><a href="https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">KoroFileHeader<ExternalLinkIcon/></a>：注释插件</p>
</li>
<li>
<p>Chinese：ide 中文</p>
</li>
<li>
<p><a href="https://www.cnblogs.com/EdisonVan/p/10642698.html" target="_blank" rel="noopener noreferrer">Git History<ExternalLinkIcon/></a>： Git 历史提交比较</p>
</li>
<li>
<p>equimper.react-native-react-redux: 代码片段</p>
</li>
</ul>
<h1 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h1>
<ul>
<li><a href="https://code.visualstudio.com/docs/languages/javascript" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>
<blockquote>
<p>英文版，较详细</p>
</blockquote>
</li>
<li><a href="https://www.jianshu.com/p/3eebde5748a6" target="_blank" rel="noopener noreferrer">常用插件推荐<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/EdisonVan/p/10642698.html" target="_blank" rel="noopener noreferrer">Git 历史提交比较<ExternalLinkIcon/></a></li>
<li><a href="https://geek-docs.com/vscode/vscode-tutorials/what-is-vscode.html" target="_blank" rel="noopener noreferrer">极客教程-VSCode 教程<ExternalLinkIcon/></a>
<blockquote>
<p>中文版，说明较详细</p>
</blockquote>
</li>
</ul>
<h1 id="插件开发相关资料" tabindex="-1"><a class="header-anchor" href="#插件开发相关资料" aria-hidden="true">#</a> 插件开发相关资料</h1>
<ul>
<li>http://blog.haoji.me/vscode-plugin-hello-world.html</li>
<li>https://code.visualstudio.com/api</li>
<li>https://juejin.cn/post/6997186741866070023</li>
</ul>
<h1 id="代码片段" tabindex="-1"><a class="header-anchor" href="#代码片段" aria-hidden="true">#</a> 代码片段</h1>
<ul>
<li>https://juejin.cn/post/6844903869424599053</li>
<li>https://juejin.cn/post/7052694806685810725</li>
<li>https://snippet-generator.app/</li>
</ul>
<h1 id="其他-1" tabindex="-1"><a class="header-anchor" href="#其他-1" aria-hidden="true">#</a> 其他</h1>
<h3 id="vscode-正则查找目标文件示例" tabindex="-1"><a class="header-anchor" href="#vscode-正则查找目标文件示例" aria-hidden="true">#</a> vscode 正则查找目标文件示例</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>List[\w\W]*components[\w\W]*&lt;List
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
