<template><h1 id="activity-生命周期和启动模式" tabindex="-1"><a class="header-anchor" href="#activity-生命周期和启动模式" aria-hidden="true">#</a> Activity 生命周期和启动模式</h1>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<ul>
<li>
<p>注意 restart</p>
</li>
<li>
<p>新 activity 采用透明主题，当前 activity 不会调用 onstop</p>
</li>
<li>
<p>启动新 activity，新的 onResume 和旧的 onPause 那个先执行</p>
<ul>
<li>旧的 onPause 先执行</li>
<li>尽量在 onStop 中做操作，从而使得 Activity 尽快显示并切换到前台</li>
</ul>
</li>
<li>
<p>onSaveInstance 在 onStop 之前和 onPause 没必然联系</p>
</li>
<li>
<p>onRestoretore 在 onStart 之后</p>
</li>
<li>
<p>保存和恢复 view 的层次结构 p10</p>
<ul>
<li>activity 意外终结时调用 onsaveInstance 保存数据，委托 window，window 委托顶层容器（通常 DecorView）保存数据。顶层容器一一通知子元素保存数据</li>
</ul>
</li>
<li>
<p>内存不足时资源回收顺序</p>
</li>
</ul>
<ol>
<li>空进程（没和应用程序组件绑定）</li>
<li>后台 activity</li>
<li>service</li>
<li>可见非前台 activity</li>
<li>前台 activity</li>
</ol>
<h2 id="启动模式" tabindex="-1"><a class="header-anchor" href="#启动模式" aria-hidden="true">#</a> 启动模式</h2>
<ul>
<li>
<p>standard 模式</p>
<ul>
<li>standard 模式默认进入启动他的 activity 的任务栈中</li>
<li>非 activity 类型的 context 无任务栈，故用此类 context 启动 standard activity 会出错</li>
<li>解决上述问题的办法，为待启动 activity 制定 FLAG_ACTIVITY_NEW_TASK 标志位，相当于 singleTask</li>
</ul>
</li>
<li>
<p>singleTop</p>
<ul>
<li>栈顶复用，栈顶已经存在调用 onNewIntent 方法</li>
</ul>
</li>
<li>
<p>singleTask</p>
<ul>
<li>栈内复用，先查找只当任务栈，栈内已存在调用 onNewIntent 方法</li>
</ul>
</li>
<li>
<p>singleInstance</p>
<ul>
<li>singleTask+只能单独存在于一任务栈中</li>
<li>✳ 注意后台任务栈多后台任务切换到前台的情况 p18</li>
</ul>
</li>
<li>
<p>TaskAffinity 属性</p>
<ul>
<li>指定任务栈</li>
<li>主要和 singleTask 和 allowTaskReparenting 属性搭配（与 allowTaskReparenting 搭配的情况见 p20）</li>
</ul>
</li>
<li>
<p>如何给 activity 指定启动模式</p>
<ul>
<li>menifest</li>
<li>intent 添加 flag(addFlags 方法)，两种方法均有时，以第二种方法为准</li>
<li>第一种方法无法指定 FLAG_CLEAR_TOP 属性，第二种方法无法指定 singleInstance</li>
<li>各种各样的标志位及其使用（可用于启动模式的转换）p27</li>
</ul>
</li>
<li>
<p>intent 隐式调用和显式调用时以显示为主</p>
</li>
<li>
<p>intent 的匹配模式 p29</p>
<ul>
<li>action，其中一个，不区分大小写（必须有）</li>
<li>category，intent 中所有 category 必须和其中一个 category 匹配（可以没，默认加上 default category）</li>
<li>data,mimeType+URI
<ul>
<li>intent 指定完整的 data 必须调用 setDataAndType 方法，因为 setData 和 setType 方法会清空彼此的值。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>隐式启动时的判断方法 activity 是否能够匹配 intent 的两种方法 p34</p>
<ul>
<li>PackageManager 的 resolveActivity（最佳匹配）,queryActivitys（所有成功匹配项）</li>
<li>或者 Intent 的 resolveActivity</li>
<li>匹配失败均返回 null</li>
</ul>
</li>
</ul>
<h1 id="ipc" tabindex="-1"><a class="header-anchor" href="#ipc" aria-hidden="true">#</a> IPC</h1>
<ul>
<li>可以通过多进程获取多分内存空间</li>
<li>组件指定 process 属性使用多进程
<ul>
<li>：+进程名=包名+当前进程名，是当前应用私有进程，其他组件不能和它跑在一个进程里面</li>
<li>完整名字，全局进程，其他应用通过 shareUID 可以和它跑在同一进程里面
<ul>
<li>shareUID:每个应用唯一，UID 相同才能共享数据</li>
</ul>
</li>
</ul>
</li>
<li>Android 为每一个应用或进程分配了一个独立的虚拟机，导致不同虚拟机中访问同一对象会产生多个副本。</li>
<li>多进程造成的问题 p40
<ul>
<li>静态成员/单例无效。不是一块内存，不是一个对象</li>
<li>线程同步机制失效，同上</li>
<li>sharedPreference 可靠性下降，读写 XML 文件</li>
<li>Applicetion 多次创建。分配虚拟机即创建新的 application</li>
</ul>
</li>
<li>实现进程间通信方式 p42
<ul>
<li>intent、共享文件、sharedPrefrence、基于 Binder 的 Messenger 和 AIDL、socket、contentProvider</li>
</ul>
</li>
<li>序列化
<ul>
<li>serializable 接口
<ul>
<li>id 作用 p42</li>
<li>static、transient 关键字标记的成员变量不参与序列化</li>
</ul>
</li>
<li>parcelable 接口</li>
<li>两种方式取舍 p47</li>
</ul>
</li>
</ul>
<h2 id="binder" tabindex="-1"><a class="header-anchor" href="#binder" aria-hidden="true">#</a> Binder</h2>
<ul>
<li>各种方法的意义 p53</li>
<li>RPC 远程过程调用</li>
</ul>
<h2 id="messenger-的使用-p65" tabindex="-1"><a class="header-anchor" href="#messenger-的使用-p65" aria-hidden="true">#</a> Messenger 的使用 p65</h2>
<h2 id="aidl-p73" tabindex="-1"><a class="header-anchor" href="#aidl-p73" aria-hidden="true">#</a> AIDL P73</h2>
<ul>
<li>自定义的 Parcelable 对象，必须显示的 import 进来，不管是否和当前 AIDL 文件处于一个文件夹</li>
<li>AIDL 用到自定义的 Parcelable 对象，必须新建一个同名 AIDL 文件，并在其中声明它为 Parcelable 类型</li>
<li>aidl 除基本类型的参数，需要标上方向</li>
<li>RemoteBackListener p84</li>
<li>Binder 是可能意外死亡的，两种重连服务的方式 P89
<ul>
<li>onServiceDisconnected，UI 线程</li>
<li>DeathRecipient 监听，Binder 线程池</li>
</ul>
</li>
<li>权限认证 p90</li>
</ul>
<h1 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> View</h1>
<ul>
<li>
<p>位置</p>
<ul>
<li>Left、right...都是相对父布局（原始）</li>
<li>x、y (真实)</li>
<li>translationX(偏移)</li>
</ul>
</li>
<li>
<p>TouchSlop 系统能被识别出的被认为是滑动的最小距离</p>
<ul>
<li>ViewConfiguration.get(getContext()).getScaledTouchSlop();</li>
</ul>
</li>
<li>
<p>Velocity 速度 p126</p>
<ul>
<li>在 onTouchEvent 中追踪</li>
<li>不使用时 clear 方法重置、recycle 方法回收</li>
</ul>
</li>
<li>
<p>GestureDetector 手势监听 p127</p>
</li>
<li>
<p>Scroller 弹性滑动对象 p128、p137</p>
<ul>
<li>startScroll 本身没有做绘制操作，所以后面常接 computeScroll 方法</li>
<li>computeScroll 方法是 view 中的一个空实现，需要自己实现。view 在重绘后会在 draw 方法中调用 couputeScroll 方法，couputeScroll 方法又会去向 Scroller 获取当前的 scrollX 和 scrollY，然后通过 srcollTo 方法实现滑动，通过 postInvalidate 方法实现二次重绘，和一次重绘一样会导致 computeScroll 方法被调用，如此反复，直至滑动结束。</li>
</ul>
</li>
<li>
<p>实现滑动的三种方式
scrollTo、scrollBy 内容</p>
<ul>
<li>改变 layoutParams 使重新布局</li>
<li>施加平移效果（动画）</li>
</ul>
</li>
<li>
<p>View 的事件分发机制 P140</p>
<ul>
<li>事件序列
<ul>
<li>手指接触屏幕到手指离开屏幕</li>
</ul>
</li>
<li>dispatch...
<ul>
<li>分发，事件能传递到当前 view,则一定会被调用，返回结果表示是否消耗，受 onTouch...和下级 View 的 dispatch 影响</li>
</ul>
</li>
<li>onIntercept...(注意读法)
<ul>
<li>返回结果表示是否拦截，如果拦截，同一事件序列此方法不会再次调用</li>
</ul>
</li>
<li>onTouch...
<ul>
<li>处理点击，返回结果表示是否消耗，不消耗，同一事件序列中，当前 View 无法再次接受到事件。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>伪码表示 P141</p>
</li>
<li>
<p>onTouchListener 先于 onTouchEvent 调用</p>
</li>
<li>
<p>相关结论 p142</p>
<ul>
<li>正常情况下一个事件序列之只能被一个 view 消耗</li>
<li>如果拦截，同一事件序列此方法不会再次调用，均交给该 view 处理</li>
<li>view 不消耗 ACTION_DOWN,同一事件序列交给父元素处理</li>
<li>viewGroup 默认不拦截</li>
<li>view 默认消耗，除非不可点击（click、longClick 同时 false）</li>
<li>onclick 前提可点击、收到 on、up 事件</li>
</ul>
</li>
</ul>
<h1 id="view-的工作原理" tabindex="-1"><a class="header-anchor" href="#view-的工作原理" aria-hidden="true">#</a> View 的工作原理</h1>
<ul>
<li>measure 过程
<ul>
<li>子元素 measureSpec 由父容器 measureSpec 和子元素 layoutParams</li>
<li>重写 view 需要注意处理 wrap_content 和 padding</li>
<li>获取宽高 p190
<ul>
<li>view 的 measure 过程和 activity 的生命周期并不是同步的，故生命周期中获取宽高可能为 0，故获取宽高应该采取下面的方法</li>
<li>onWindowFoucusChanged.
<ul>
<li>获取、失去焦点时调用</li>
</ul>
</li>
<li>view.post(runnable)
<ul>
<li>投递到消息队列尾，Looperd 调用 runnable 时，View 已经初始话好</li>
</ul>
</li>
<li>viewTreeObserver 的回调方法
<ul>
<li>view 树的状态发生改变或内部 view 可见性发生改变时，onClobalLayout 方法将会回调，是获取 view 宽高的好机会</li>
</ul>
</li>
<li>手动调用 measure 方法</li>
</ul>
</li>
</ul>
</li>
<li>layout 过程
<ul>
<li>layout 方法确定 view 位置（里面主要 setFrame 方法设置 4 个定点），onLayout 方法（里面主要通过 setChildFrame 调用子元素的 layout 方法）确定子元素位置</li>
<li>测量宽高在 measure 过程、最终宽高在 layout 过程，通常相等</li>
</ul>
</li>
<li>draw 过程
<ul>
<li>画背景 background.draw(canvas)</li>
<li>画自己 onDraw</li>
<li>画 children dispatchDraw</li>
<li>画装饰 onDrawScrollBars</li>
</ul>
</li>
<li>自定义 view 须知 P201
<ul>
<li>注意处理 wrap_content\padding 情况</li>
<li>尽量不要使用 handler，没必要，view 提供了 post 方法</li>
<li>view 有线程或动画的时候需要及时停止 p201</li>
<li>参考 onDetachFromWindow</li>
<li>处理滑动冲突</li>
</ul>
</li>
</ul>
</template>
