<template><h1 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h1>
<p>系统偏好设置-快捷键</p>
<p>官方手册: https://support.apple.com/zh-cn/HT201236</p>
<table>
<thead>
<tr>
<th style="text-align:center">描述</th>
<th style="text-align:center">快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">快速打开控制台</td>
<td style="text-align:center">cmd + shift + c</td>
</tr>
<tr>
<td style="text-align:center">左右切换窗口</td>
<td style="text-align:center">ctrl + 左/右</td>
</tr>
<tr>
<td style="text-align:center">最近两个应用切换</td>
<td style="text-align:center">短按 cmd + tab</td>
</tr>
<tr>
<td style="text-align:center">应用窗口切换(下一个)</td>
<td style="text-align:center">长按 cmd + tab</td>
</tr>
<tr>
<td style="text-align:center">应用窗口切换(上一个)</td>
<td style="text-align:center">长按 cmd + shift + tab</td>
</tr>
<tr>
<td style="text-align:center">清空控制台</td>
<td style="text-align:center">cmd+k</td>
</tr>
<tr>
<td style="text-align:center">应用 内切换 tab</td>
<td style="text-align:center">command + shift + [或]</td>
</tr>
<tr>
<td style="text-align:center">快速回到桌面</td>
<td style="text-align:center">ctrl + 1/2(外接屏幕)</td>
</tr>
<tr>
<td style="text-align:center">光标跳转当前行（编辑器、控制台）</td>
<td style="text-align:center">ctrl + a</td>
</tr>
<tr>
<td style="text-align:center">当前行删除光标后的内容（编辑器、控制台）</td>
<td style="text-align:center">ctrl+k</td>
</tr>
</tbody>
</table>
<h1 id="终端命令" tabindex="-1"><a class="header-anchor" href="#终端命令" aria-hidden="true">#</a> 终端命令</h1>
<p>https://support.apple.com/zh-cn/guide/terminal/welcome/2.9/mac</p>
<table>
<thead>
<tr>
<th style="text-align:center">描述</th>
<th style="text-align:center">快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">查看当前路径</td>
<td style="text-align:center">pwd</td>
</tr>
<tr>
<td style="text-align:center">打开当前目录</td>
<td style="text-align:center">open .</td>
</tr>
<tr>
<td style="text-align:center">列出当前目录文件及其权限</td>
<td style="text-align:center">ls -l</td>
</tr>
</tbody>
</table>
<h2 id="打印目录树" tabindex="-1"><a class="header-anchor" href="#打印目录树" aria-hidden="true">#</a> 打印目录树</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>brew install tree
tree -a
tree -I “node_modules” // 过滤指定目录
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>参考：https://www.jianshu.com/p/9411d60950bf</p>
<h2 id="工具应用" tabindex="-1"><a class="header-anchor" href="#工具应用" aria-hidden="true">#</a> 工具应用</h2>
<ul>
<li>Iterm2: 终端窗口分屏</li>
<li>VSCode： 加上各种插件，比大部分文档/笔记记录工具好（见：vscode ）</li>
<li>Gifski gif制作</li>
</ul>
<h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1>
<h2 id="查看文件-文件夹路径" tabindex="-1"><a class="header-anchor" href="#查看文件-文件夹路径" aria-hidden="true">#</a> 查看文件/文件夹路径</h2>
<p>将文件/文件夹拖到终端</p>
<h2 id="达尔优键盘问题记录" tabindex="-1"><a class="header-anchor" href="#达尔优键盘问题记录" aria-hidden="true">#</a> 达尔优键盘问题记录</h2>
<ul>
<li>cmd+a、c 等键失效: fn+win</li>
</ul>
</template>
