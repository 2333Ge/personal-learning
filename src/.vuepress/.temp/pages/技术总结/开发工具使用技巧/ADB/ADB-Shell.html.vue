<template><h1 id="调用-activity-管理器-am" tabindex="-1"><a class="header-anchor" href="#调用-activity-管理器-am" aria-hidden="true">#</a> 调用 Activity 管理器 (am)</h1>
<p>在 adb shell 中，您可以使用 Activity 管理器 (am) 工具发出命令以执行各种系统操作，如启动 Activity、强行停止进程、广播 intent、修改设备屏幕属性，等等。在 shell 中，语法如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>am command
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>您也可以直接从 adb 发出 Activity 管理器命令，无需进入远程 shell。例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>adb shell am start -a android.intent.action.VIEW
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="启动-activity" tabindex="-1"><a class="header-anchor" href="#启动-activity" aria-hidden="true">#</a> 启动 activity</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>adb shell am start -S -W 包名/启动类的全限定名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>eg:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>adb shell am start -S -W com.spruce.crm/com.spruce.crm.ui.activity.SplashActivity
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="选择不同设备" tabindex="-1"><a class="header-anchor" href="#选择不同设备" aria-hidden="true">#</a> 选择不同设备</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zhouliquan@zhouliquan:~$ adb devices
List of devices attached
7330cc21        device
0123456789ABCDEF        device

zhouliquan@zhouliquan:~$ adb -s 7330cc21 shell
msm8953_64:/ #
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
