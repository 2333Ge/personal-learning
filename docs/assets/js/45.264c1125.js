(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{577:function(a,t,s){"use strict";s.r(t);var e=s(9),c=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"调用-activity-管理器-am"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用-activity-管理器-am"}},[a._v("#")]),a._v(" 调用 Activity 管理器 (am)")]),a._v(" "),s("p",[a._v("在 adb shell 中，您可以使用 Activity 管理器 (am) 工具发出命令以执行各种系统操作，如启动 Activity、强行停止进程、广播 intent、修改设备屏幕属性，等等。在 shell 中，语法如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("am command\n")])])]),s("p",[a._v("您也可以直接从 adb 发出 Activity 管理器命令，无需进入远程 shell。例如：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("adb shell am start -a android.intent.action.VIEW\n")])])]),s("h2",{attrs:{id:"启动-activity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-activity"}},[a._v("#")]),a._v(" 启动 activity")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("adb shell am start -S -W 包名/启动类的全限定名\n")])])]),s("p",[a._v("eg:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("adb shell am start -S -W com.spruce.crm/com.spruce.crm.ui.activity.SplashActivity\n")])])]),s("h2",{attrs:{id:"选择不同设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择不同设备"}},[a._v("#")]),a._v(" 选择不同设备")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("zhouliquan@zhouliquan:~$ adb devices\nList of devices attached\n7330cc21        device\n0123456789ABCDEF        device\n\nzhouliquan@zhouliquan:~$ adb -s 7330cc21 shell\nmsm8953_64:/ #\n")])])])])}),[],!1,null,null,null);t.default=c.exports}}]);