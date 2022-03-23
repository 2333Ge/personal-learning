<template><blockquote>
<p>更详细的说明可直接参见参考资料</p>
</blockquote>
<h1 id="折叠-log" tabindex="-1"><a class="header-anchor" href="#折叠-log" aria-hidden="true">#</a> 折叠 LOG</h1>
<h2 id="设置一行显示内容" tabindex="-1"><a class="header-anchor" href="#设置一行显示内容" aria-hidden="true">#</a> 设置一行显示内容</h2>
<p><img src="@source/image/技术总结/AS-debug/AS-debug1.png" alt=""></p>
<h2 id="常用搜索条件添加到过滤器" tabindex="-1"><a class="header-anchor" href="#常用搜索条件添加到过滤器" aria-hidden="true">#</a> 常用搜索条件添加到过滤器</h2>
<p><img src="@source/image/技术总结/AS-debug/AS-debug2.png" alt=""></p>
<p><img src="@source/image/技术总结/AS-debug/AS-debug3.png" alt=""></p>
<h2 id="折叠近似日志" tabindex="-1"><a class="header-anchor" href="#折叠近似日志" aria-hidden="true">#</a> 折叠近似日志</h2>
<p><img src="@source/image/技术总结/AS-debug/AS-debug4.png" alt=""></p>
<h1 id="调试已启动应用" tabindex="-1"><a class="header-anchor" href="#调试已启动应用" aria-hidden="true">#</a> 调试已启动应用</h1>
<p><img src="@source/image/技术总结/AS-debug/AS-debug5.png" alt=""></p>
<h1 id="断点技巧" tabindex="-1"><a class="header-anchor" href="#断点技巧" aria-hidden="true">#</a> 断点技巧</h1>
<h2 id="拖动断点进行移动" tabindex="-1"><a class="header-anchor" href="#拖动断点进行移动" aria-hidden="true">#</a> 拖动断点进行移动</h2>
<h2 id="条件断点" tabindex="-1"><a class="header-anchor" href="#条件断点" aria-hidden="true">#</a> 条件断点</h2>
<p>右击断点，表达式为 true 时，断点激活
<img src="@source/image/技术总结/AS-debug/AS-debug6.png" alt=""></p>
<h2 id="依赖断点" tabindex="-1"><a class="header-anchor" href="#依赖断点" aria-hidden="true">#</a> 依赖断点</h2>
<p>依赖断点只会在特定的断点被触发后才会激活</p>
<blockquote>
<p>一段代码会被不同的路径触发，这种情况在应用开发中并不少见。如果您发现了只会在某个特定路径才会触发的 Bug，随意为其打一个断点会造成许多无意义的运行中断。依赖断点只会在特定的断点被触发后才会激活。举例来说，您可以创建一个只会在您感兴趣的路径中被触发的断点，而其他断点便可以依赖此断点，从而使这些断点也只会在您所感兴趣的路径中被触发。</p>
</blockquote>
<p><strong>右击断点-&gt;More-&gt;在 Disable until breakpoint is hit</strong>选框中，选中您想要依赖的断点:
<img src="@source/image/技术总结/AS-debug/AS-debug7.png" alt=""></p>
<p><img src="@source/image/技术总结/AS-debug/AS-debug8.png" alt=""></p>
<p>现在，您的应用只会在前一个断点被触发后才会在此断点停止运行。</p>
<h2 id="断点打印" tabindex="-1"><a class="header-anchor" href="#断点打印" aria-hidden="true">#</a> 断点打印</h2>
<p>不用代码 println !!!
断点选项中禁用 <strong>Suspend</strong> 并启用 <strong>Evaluate and log</strong>:
<img src="@source/image/技术总结/AS-debug/AS-debug9.png" alt=""></p>
<h2 id="禁用断点" tabindex="-1"><a class="header-anchor" href="#禁用断点" aria-hidden="true">#</a> 禁用断点</h2>
<p>快捷键 option+点击断点
<img src="@source/image/技术总结/AS-debug/AS-debug10.png" alt=""></p>
<h2 id="断点分组" tabindex="-1"><a class="header-anchor" href="#断点分组" aria-hidden="true">#</a> 断点分组</h2>
<ul>
<li>分组调试</li>
<li>快速删除
<img src="@source/image/技术总结/AS-debug/AS-debug11.png" alt=""></li>
</ul>
<h1 id="丢弃当前帧" tabindex="-1"><a class="header-anchor" href="#丢弃当前帧" aria-hidden="true">#</a> 丢弃当前帧</h1>
<p>Android 10 或者更高版本，可以通过点击调试工具栏中的 Drop Frame 按钮来进行回溯
<img src="@source/image/技术总结/AS-debug/AS-debug12.png" alt=""></p>
<p>把您从当前的方法带回到其开始执行前的节点，从而给您一个重新进入该方法的机会。</p>
<h1 id="标记对象" tabindex="-1"><a class="header-anchor" href="#标记对象" aria-hidden="true">#</a> 标记对象</h1>
<p>跟踪某特定实例的生命周期<br>
右键调试窗口对象-&gt;<strong>Mark Object</strong>
<img src="@source/image/技术总结/AS-debug/AS-debug13.png" alt=""></p>
<p><img src="@source/image/技术总结/AS-debug/AS-debug14.png" alt=""></p>
<p>点击...设置颜色
<img src="@source/image/技术总结/AS-debug/AS-debug15.png" alt=""></p>
<p>详见： https://mp.weixin.qq.com/s/vAi1R8hkWqJpwYTHuFkmBw</p>
<h1 id="评估表达式" tabindex="-1"><a class="header-anchor" href="#评估表达式" aria-hidden="true">#</a> 评估表达式</h1>
<p>处于某个断点时，可以使用调试工具中的 <strong>Evaluate expression</strong> ,可输入表达式评估对象
<img src="@source/image/技术总结/AS-debug/AS-debug16.png" alt=""></p>
<p><img src="@source/image/技术总结/AS-debug/AS-debug17.png" alt=""></p>
<p>分析堆栈信息
崩溃报告中可能包含了异常堆栈信息的文本副本。您可以使用 <strong>Analyze</strong> 菜单中的 <strong>Analyze Stack Trace or Thread Dump</strong> 将这些信息转化为有意义的内容。
<img src="@source/image/技术总结/AS-debug/AS-debug18.png" alt=""></p>
<p>点击 <strong>OK</strong> 之后，就会将包含完整注释的堆栈信息添加到控制台:
<img src="@source/image/技术总结/AS-debug/AS-debug19.png" alt=""></p>
<h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1>
<ul>
<li>在 Debug 模式下，点击代码的行数数字可以直接执行此行代码</li>
<li>Ctrl + 拖动操作可以复制断点</li>
<li>您可以在函数的右括号处设置断点</li>
<li>您可以在字段和属性上设置断点，被称为 &quot;field watch points&quot;</li>
<li>您可以为接口中的方法设置断点，从而使它的所有实现都会触发断点</li>
<li>更详细的见参考资料[3]</li>
</ul>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>[1] https://mp.weixin.qq.com/s/kZGM2vgSmxdyTKPqm1J3XA<br>
[2] https://mp.weixin.qq.com/s/vAi1R8hkWqJpwYTHuFkmBw<br>
[3] https://developer.android.google.cn/studio/debug</p>
</template>
