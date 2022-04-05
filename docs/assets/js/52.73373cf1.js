(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{588:function(t,e,a){"use strict";a.r(e);var s=a(9),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"实用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实用命令"}},[t._v("#")]),t._v(" 实用命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("快捷键")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("npm view deepmerge versions")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查看模块所有版本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("npm ls -g --depth=0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查看全局安装依赖版本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("npm root -g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查看node_modules在计算机上的确切位置")])])])]),t._v(" "),a("h2",{attrs:{id:"技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}},[t._v("#")]),t._v(" 技巧")]),t._v(" "),a("h2",{attrs:{id:"通过-git-安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-git-安装依赖"}},[t._v("#")]),t._v(" 通过 git 安装依赖")]),t._v(" "),a("p",[a("code",[t._v("package.json")]),t._v("按照如下方式配置")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bestzip"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git+<git 地址>#分支"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("执行 "),a("code",[t._v("npm i")])]),t._v(" "),a("h1",{attrs:{id:"question-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#question-list"}},[t._v("#")]),t._v(" question list")]),t._v(" "),a("h2",{attrs:{id:"install-失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-失败"}},[t._v("#")]),t._v(" install 失败")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('npm ERR! ERESOLVE unable to resolve dependency tree\n...\nnpm ERR! Could not resolve dependency:\nnpm ERR! peer react-native@"^0.60.0" from react-native-fast-image@7.0.2\nnpm ERR! node_modules/react-native-fast-image\nnpm ERR!   react-native-fast-image@"^7.0.0" from the root project\nnpm ERR!\n...\n')])])]),a("p",[t._v("改用命令 npm install --legacy-peer-deps")]),t._v(" "),a("h1",{attrs:{id:"npx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npx"}},[t._v("#")]),t._v(" npx")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("http://www.ruanyifeng.com/blog/2019/02/npx.html")])]),t._v(" "),a("li",[a("p",[t._v("http://nodejs.cn/learn/the-npx-nodejs-package-runner")])]),t._v(" "),a("li",[a("p",[t._v("执行node_modules 中可执行程序")])]),t._v(" "),a("li",[a("p",[t._v("能避免全局安装的模块")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('npx cowsay "你好"\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npx create-react-app my-react-app\n")])])]),a("p",[t._v("上面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。")]),t._v(" "),a("h1",{attrs:{id:"相关资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关资料"}},[t._v("#")]),t._v(" 相关资料")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844904022080667661",target:"_blank",rel:"noopener noreferrer"}},[t._v("剖析 npm 的包管理机制"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/install-local",target:"_blank",rel:"noopener noreferrer"}},[t._v("多工程开发-安装本地依赖"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=n.exports}}]);