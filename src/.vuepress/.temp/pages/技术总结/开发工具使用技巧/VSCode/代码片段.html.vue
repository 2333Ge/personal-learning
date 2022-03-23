<template><blockquote>
<p>代码片段是可以更轻松地输入重复代码模式的模板，例如循环或条件语句</p>
</blockquote>
<h1 id="自定义snippet优势" tabindex="-1"><a class="header-anchor" href="#自定义snippet优势" aria-hidden="true">#</a> 自定义snippet优势</h1>
<ul>
<li>现有插件提供的<code>snippet</code>(如：equimper.react-native-react-redux)弊端
<ul>
<li>学习与记忆成本高</li>
<li>不一定能达到目标效果，如打印log想自定义tag方便过滤,如：<code>console.log('name====&gt;', name)</code></li>
</ul>
</li>
<li>便于在任意文件使用，如<code>markdown</code>文件中画表格(目前没想到除了自定义代码片段，如何更方便地在这种文件中定义模版)</li>
</ul>
<h1 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h1>
<h2 id="创建片段" tabindex="-1"><a class="header-anchor" href="#创建片段" aria-hidden="true">#</a> 创建片段</h2>
<p>VSCode左上角<br>
=&gt; code<br>
=&gt; 首选项<br>
=&gt; 用户片段<br>
=&gt; 新建全局代码片段<br>
=&gt; 命名test<br>
=&gt; 放开默认demo注释</p>
<p>或 <code>cmd + shift + p</code> =&gt; 输入<code>snippet</code> =&gt; 选择新建全局代码片段文件</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p>在ts或js文件中输入log测试效果</p>
<p><img src="@source/image/tools/snippet-log.gif" alt="log"></p>
<h1 id="snippet文件字段说明" tabindex="-1"><a class="header-anchor" href="#snippet文件字段说明" aria-hidden="true">#</a> snippet文件字段说明</h1>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// key会出现在代码片段提示的后面，也是后面绑定快捷键用的标识</span>
  <span class="token property">"Print to console"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">// 指定可以触发代码片段的文件类型</span>
		<span class="token property">"scope"</span><span class="token operator">:</span> <span class="token string">"javascript,typescript"</span><span class="token punctuation">,</span>
		<span class="token comment">// 触发代码片段的字符</span>
		<span class="token comment">// "prefix": "log",</span>
		<span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"z"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 多个时的写法</span>
		<span class="token comment">// 代码片段内容</span>
		<span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token string">"console.log('$1');"</span><span class="token punctuation">,</span>
			<span class="token string">"$2"</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token comment">// 智能提示预览片段时的标题，若没提供则显示上述key</span>
		<span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Log output to console"</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>scope</code>支持的语言标识符可点<a href="https://code.visualstudio.com/docs/languages/identifiers" target="_blank" rel="noopener noreferrer">此处<ExternalLinkIcon/></a>查看（如：<code>typescript</code>并不支持<code>tsx</code>文件，需要填入<code>typescriptreact</code>）</p>
<h2 id="snippet语法" tabindex="-1"><a class="header-anchor" href="#snippet语法" aria-hidden="true">#</a> snippet语法</h2>
<p>详细语法可见<a href='#参考文档'>参考文档</a>中的[1]、[2]和<a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>，记录的比较详细，此处就简述了</p>
<ul>
<li>占位符：<code>$1</code>、<code>$2</code>、<code>$0</code>，点击<code>Tab</code>键切换。<code>$0</code> 最终光标位置</li>
<li>变量(<a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables" target="_blank" rel="noopener noreferrer">官网列表<ExternalLinkIcon/></a>)：<code>$name</code>，如：
<ul>
<li><code>$TM_FILENAME</code>： 当前文档名</li>
<li><code>$TM_SELECTED_TEXT</code>： 当前选定文本或空字符串</li>
</ul>
</li>
<li>占位选项，Tab键可跳过：
<ul>
<li><code>${1|Boolean,Number|}</code></li>
<li>只有一个的话写成<code>${1:foo}</code></li>
</ul>
</li>
<li>正则替换（<a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets#_transform-examples" target="_blank" rel="noopener noreferrer">官网示例<ExternalLinkIcon/></a>）：<code>${变量名/正则/替换的内容/}</code>，如：
<ul>
<li><code>${TM_FILENAME/(.*)/${1:/upcase}/}</code> 将文件名替换为大写</li>
<li><code>${TM_FILENAME/[\\.]/_/}</code> 将<code>.</code>替换成<code>_</code></li>
<li><code>${TM_FILENAME/(.*)\\..+$/$1/}</code> 去掉文件拓展名</li>
</ul>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>${TM_FILENAME/(.*)\\..+$/$1/}
  |           |         |  |
  |           |         |  |-> 不设置匹配策略
  |           |         |
  |           |         |-> 引用第一个捕获组的内容
  |           |             
  |           |
  |           |-> 匹配拓展名前的内容
  |               
  |
  |-> 变量名--文件名

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h1 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h1>
<p>在<code>keybindings.json</code>编辑快捷键片段： 输入 <code>cmd+k cmd+s</code>  =&gt; 右上角打开文件图标
<img src="@source/image/tools/vscode-keyboard-bind.png" alt="位置"></p>
<h2 id="快捷键中直接新建片段" tabindex="-1"><a class="header-anchor" href="#快捷键中直接新建片段" aria-hidden="true">#</a> 快捷键中直接新建片段</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"cmd+k 1"</span><span class="token punctuation">,</span>
  <span class="token property">"command"</span><span class="token operator">:</span> <span class="token string">"editor.action.insertSnippet"</span><span class="token punctuation">,</span>
  <span class="token property">"when"</span><span class="token operator">:</span> <span class="token string">"editorTextFocus"</span><span class="token punctuation">,</span>
  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"snippet"</span><span class="token operator">:</span> <span class="token string">"console.log($1)$0"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="引用已有片段" tabindex="-1"><a class="header-anchor" href="#引用已有片段" aria-hidden="true">#</a> 引用已有片段</h2>
<p>以下示例绑定默认示例中的snippet，输入<code>cmd+k 2</code>查看效果</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"cmd+k 2"</span><span class="token punctuation">,</span>
  <span class="token property">"command"</span><span class="token operator">:</span> <span class="token string">"editor.action.insertSnippet"</span><span class="token punctuation">,</span>
  <span class="token property">"when"</span><span class="token operator">:</span> <span class="token string">"editorTextFocus"</span><span class="token punctuation">,</span>
  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"langId"</span><span class="token operator">:</span> <span class="token string">"csharp"</span><span class="token punctuation">,</span>
    <span class="token comment">// 对应想绑定的片段的key</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Print to console"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="示例片段" tabindex="-1"><a class="header-anchor" href="#示例片段" aria-hidden="true">#</a> 示例片段</h1>
<h2 id="ts、rn函数组件" tabindex="-1"><a class="header-anchor" href="#ts、rn函数组件" aria-hidden="true">#</a> TS、RN函数组件</h2>
<p>用模版创建一个RN的函数组件，默认取文件名当组件名字</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"TS-RN函数组件"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"itf"</span><span class="token punctuation">,</span>
    <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token string">"typescriptreact"</span><span class="token punctuation">,</span>
    <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"import React from 'react';"</span><span class="token punctuation">,</span>
      <span class="token string">"import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"export type ${1:$TM_FILENAME_BASE}Props = {"</span><span class="token punctuation">,</span>
      <span class="token string">"  style?: StyleProp&lt;ViewStyle>;"</span><span class="token punctuation">,</span>
      <span class="token string">"  $2"</span><span class="token punctuation">,</span>

      <span class="token string">"};"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"const ${1:$TM_FILENAME_BASE}: React.FC&lt;${1:$TM_FILENAME_BASE}Props> = ({ style, $3 }) => {"</span><span class="token punctuation">,</span>
      <span class="token string">"  return ("</span><span class="token punctuation">,</span>
      <span class="token string">"    &lt;View style={[styles.wrapper, StyleSheet.flatten(style)]}>"</span><span class="token punctuation">,</span>
      <span class="token string">"      $0"</span><span class="token punctuation">,</span>
      <span class="token string">"    &lt;/View>"</span><span class="token punctuation">,</span>
      <span class="token string">"  );"</span><span class="token punctuation">,</span>
      <span class="token string">"};"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"const styles = StyleSheet.create({"</span><span class="token punctuation">,</span>
      <span class="token string">"  wrapper: {},"</span><span class="token punctuation">,</span>
      <span class="token string">"});"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"export default ${1:$TM_FILENAME_BASE};"</span><span class="token punctuation">,</span>
      <span class="token string">""</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"TS-RN函数组件"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><img src="@source/image/tools/snippet-itf.gif" alt="位置"></p>
<h2 id="markdown中创建表格" tabindex="-1"><a class="header-anchor" href="#markdown中创建表格" aria-hidden="true">#</a> MarkDown中创建表格</h2>
<p>特定文件使用的代码片段可通过<code>code =&gt; 首选项 =&gt; 用户片段 =&gt; 选择特定语言</code> 的方式创建，便无需填写<code>scope</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"3列表格"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"/t3"</span><span class="token punctuation">,</span>
    <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"| ${1:标题} | ${2:标题} | ${3:标题} |"</span><span class="token punctuation">,</span>
      <span class="token string">"| :-----: | :-----: | :-----: |"</span><span class="token punctuation">,</span>
      <span class="token string">"| ${4:内容}  | ${5:内容}  | ${6:内容}  |"</span><span class="token punctuation">,</span>
      <span class="token string">"| ${7:内容}  | ${8:内容}  | ${9:内容}  |"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"创建3列表格"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="@source/image/tools/snippet-markdown.gif" alt="snippet-markdown"></p>
<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1>
<p>总的来说snippet使用比较简单，提效非常明显且优雅，强烈安利。本文不过拾人牙慧，建议可上<a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>详细了解下</p>
<p>ps: 片段生成工具：<a href="https://snippet-generator.app/" target="_blank" rel="noopener noreferrer">Snippet生成器<ExternalLinkIcon/></a></p>
<p>ps2: 其他VSCode小技巧传送门：<a href="https://juejin.cn/post/7040486849755742244" target="_blank" rel="noopener noreferrer">VSCode快捷键推荐<ExternalLinkIcon/></a></p>
<h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>
<p>[1] <a href="https://juejin.cn/post/6844903869424599053" target="_blank" rel="noopener noreferrer">VSCode 利用 Snippets 设置超实用的代码块<ExternalLinkIcon/></a><br>
[2] <a href="https://juejin.cn/post/7052694806685810725" target="_blank" rel="noopener noreferrer">一个案例学会 VSCode Snippets，极大提高开发效率<ExternalLinkIcon/></a><br>
[3] <a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a><br>
[4] <a href="https://snippet-generator.app/" target="_blank" rel="noopener noreferrer">Snippet 生成器<ExternalLinkIcon/></a></p>
<!-- # 随记

markdown prefix /开头才能生效? 

scope 语言标识符可设置哪些，tsx文件如何加 -->
</template>
