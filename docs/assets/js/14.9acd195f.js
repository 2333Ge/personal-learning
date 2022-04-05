(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{517:function(e,a,t){e.exports=t.p+"assets/img/gradle1.d79cdcbe.png"},518:function(e,a,t){e.exports=t.p+"assets/img/gradle2.24cd3575.png"},584:function(e,a,t){"use strict";t.r(a);var r=t(9),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"入门"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[e._v("#")]),e._v(" 入门")]),e._v(" "),r("h3",{attrs:{id:"gradle-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gradle-properties"}},[e._v("#")]),e._v(" gradle.properties")]),e._v(" "),r("p",[e._v("https://docs.gradle.org/current/userguide/build_environment.html\n从它的名字可以看出，这个文件中定义了一系列“属性”。实际上，这个文件中定义了一系列供 build.gradle 使用的常量，比如 keystore 的存储路径、keyalias 等等。")]),e._v(" "),r("h3",{attrs:{id:"gradlew-与-gradlew-bat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gradlew-与-gradlew-bat"}},[e._v("#")]),e._v(" gradlew 与 gradlew.bat")]),e._v(" "),r("p",[e._v("gradlew 为 Linux 下的 shell 脚本，gradlew.bat 是 Windows 下的批处理文件。gradlew 是 gradle wrapper 的缩写，也就是说它对 gradle 的命令进行了包装，比如我们进入到指定 Module 目录并执行“gradlew.bat assemble”即可完成对当前 Module 的构建（Windows 系统下）。")]),e._v(" "),r("h3",{attrs:{id:"local-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#local-properties"}},[e._v("#")]),e._v(" local.properties")]),e._v(" "),r("p",[e._v("从名字就可以看出来，这个文件中定义了一些本地属性，比如 SDK 的路径。")]),e._v(" "),r("h3",{attrs:{id:"settings-gradle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#settings-gradle"}},[e._v("#")]),e._v(" settings.gradle")]),e._v(" "),r("p",[e._v("假如我们的项目包含了不只一个 Module 时，我们想要一次性构建所有 Module 以完成整个项目的构建，这时我们需要用到这个文件。比如我们的项目包含了 ModuleA 和 ModuleB 这两个模块，则这个文件中会包含这样的语句：include ':ModuleA', ':ModuleB'。")]),e._v(" "),r("h3",{attrs:{id:"工程-build-gradle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工程-build-gradle"}},[e._v("#")]),e._v(" 工程 build.gradle")]),e._v(" "),r("ul",[r("li",[e._v("用于添加子工程或模块共用的配置项。")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("buildscript {\n    repositories {\n        jcenter() //构建脚本中所依赖的库都在jcenter仓库下载\n    }\n    dependencies {\n        //指定了gradle插件的版本\n        classpath 'com.android.tools.build:gradle:1.5.0'\n    }\n}\n\nallprojects {\n    repositories {\n        //当前项目所有模块所依赖的库都在jcenter仓库下载\n        jcenter()\n    }\n}\n")])])]),r("h3",{attrs:{id:"app-模块的-build-gradle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#app-模块的-build-gradle"}},[e._v("#")]),e._v(" app 模块的 build.gradle")]),e._v(" "),r("ul",[r("li",[e._v("声明 module 模块类型：Android 应用程序还是库\n"),r("ul",[r("li",[e._v("apply plugin: 'com.android.application'：应用“com.android.application“这个插件来构建 app 模块（常在首行）")]),e._v(" "),r("li",[e._v("assemble: 构建项目的输出（apk）")]),e._v(" "),r("li",[e._v("check: 进行校验工作")]),e._v(" "),r("li",[e._v("build: 执行 assemble 任务与 check 任务")]),e._v(" "),r("li",[e._v("clean: 清除项目的输出")])])])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("//加载用于构建Android项目的插件\napply plugin: 'com.android.application'\n\nandroid { //构建Android项目使用的配置\n    compileSdkVersion 23 //指定编译项目时使用的SDK版本\n    buildToolsVersion \"23.0.1\" //指定构建工具的版本\n\n    defaultConfig {\n        applicationId \"com.absfree.debugframwork\" //包名\n        minSdkVersion 15  //指定支持的最小SDK版本\n        targetSdkVersion 23 //针对的目标SDK版本\n        versionCode 1\n        versionName \"1.0\"\n    }\n    buildTypes { //针对不同的构建版本进行一些设置\n        release { //对release版本进行的设置\n            minifyEnabled false //是否开启混淆\n            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'  //指定混淆文件的位置\n        }\n    }\n}\n\ndependencies { //指定当前模块的依赖\n    compile fileTree(dir: 'libs', include: ['*.jar'])\n    testCompile 'junit:junit:4.12'\n    compile 'com.android.support:appcompat-v7:23.1.1'\n    compile 'com.android.support:design:23.1.1'\n}\n")])])]),r("h3",{attrs:{id:"常见配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见配置"}},[e._v("#")]),e._v(" 常见配置")]),e._v(" "),r("h4",{attrs:{id:"构建输出为-aar-文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构建输出为-aar-文件"}},[e._v("#")]),e._v(" 构建输出为 aar 文件")]),e._v(" "),r("p",[e._v("通常我们构建的输出目标都是 apk 文件，但如果我们的当前项目时 Android Library，我们的目标输出就是 aar 文件。要想达到这个目的也很容易，只需要把 build.gradle 的第一句改为如下：\napply plugin:'com.android.library'\n这话表示我们使用的插件不再是构建 Android 应用的插件，而是构建 Android Library 的插件，这个插件定义并执行用于构建 Android Library 的一系列 Task。\n自动移除不再使用的资源")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("android {\n    ...\n    }\n    buildTypes {\n        release {\n            ...\n            shrinkResources true\n            ...\n        }\n    }\n}\n")])])]),r("h4",{attrs:{id:"忽略-lint-错误"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#忽略-lint-错误"}},[e._v("#")]),e._v(" 忽略 Lint 错误")]),e._v(" "),r("p",[e._v("在我们构建 Android 项目的过程中，有时候会由于 Lint 错误而终止。当这些错误来自第三方库中时，我们往往想要忽略这些错误从而继续构建进程。这时候，我们可以只需进行如下配置：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("android {\n    ...\n    lintOptions {\n        abortOnError false\n    }\n}\n")])])]),r("h4",{attrs:{id:"密码等信息存放"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#密码等信息存放"}},[e._v("#")]),e._v(" 密码等信息存放")]),e._v(" "),r("p",[e._v("真实开发中，我们不应该把密码等信息直接写到 build.gradle 中，更好的做法是放在 gradle.properties 中设置：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("RELEASE_STOREFILE=xxx.jks\nRELEASE_STORE_PASSWORD = xxx\nRELEASE_KEY_ALIAS=xxx\nRELEASE_KEY_PASSWORD=xxx\n\n // 然后在build.gradle中直接引用即可：\n\n\nsigningConfigs {\n    myConfig {\n        storeFilefile(RELEASE_STOREFILE)\n        storePassword RELEASE_STORE_PASSWORD\n        keyAlias RELEASE_KEY_ALIAS\n        keyPassword RELEASE_KEY_PASSWORD\n    }\n}\n")])])]),r("h2",{attrs:{id:"进阶"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[e._v("#")]),e._v(" 进阶")]),e._v(" "),r("h3",{attrs:{id:"构建加速"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构建加速"}},[e._v("#")]),e._v(" 构建加速")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.android.google.cn/studio/build/optimize-your-build#optimize",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"开启离线模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开启离线模式"}},[e._v("#")]),e._v(" 开启离线模式")]),e._v(" "),r("ul",[r("li",[e._v("Android studio 3.6 以后\n"),r("img",{attrs:{src:t(517),alt:"图片"}})]),e._v(" "),r("li",[e._v("3.6 以前\n"),r("img",{attrs:{src:t(518),alt:"图片"}})])]),e._v(" "),r("h3",{attrs:{id:"升级到最新的-gradle-和-jdk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#升级到最新的-gradle-和-jdk"}},[e._v("#")]),e._v(" 升级到最新的 GRADLE 和 JDK")]),e._v(" "),r("p",[e._v("好处不必说，不兼容的情况下采用 wrapper 的方式很好的解决了这个问题，每个项目采用独立的 GRADLE 版本。在你的项目目录下找到这个文件")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("gradle/wrapper/gradle-wrapper.properties\n")])])]),r("p",[e._v("并修改")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("distributionUrl=https://services.gradle.org/distributions/gradle-2.11-all.zip\n")])])]),r("p",[e._v("到你想升级的版本就可以了。")]),e._v(" "),r("h3",{attrs:{id:"使用-daemon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-daemon"}},[e._v("#")]),e._v(" 使用 daemon")]),e._v(" "),r("p",[e._v("构建初始化的很多工作是关于 java 虚拟机的启动，加载虚拟机环境，加载 class 文件等，如果这些动作交给一个单独的后台进程去做，那么，第一次初始化之后的修改代码再构建是不是可以节省很多时间呢？答案是肯定的，通过在"),r("strong",[e._v("gradle.properties")]),e._v("加入这样一句来开启，如果想让修改全局所有项目都生效，那么修改这个文件**~/.gradle/gradle.properties**")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("org.gradle.daemon=true\n")])])]),r("h3",{attrs:{id:"依赖库使用固定版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#依赖库使用固定版本"}},[e._v("#")]),e._v(" 依赖库使用固定版本")]),e._v(" "),r("p",[e._v("用”+”来通配一个版本族，这样有个好处是 maven 上有新库了，不用你操心升级，GRADLE 编译的时候自动升级了，但是带来了两个坏处，一是，有可能新版库的接口改了，导致编译失败，这个时候需要修改代码做升级适配；更大的坏处是，每次 GRADLE 编译完整的项目，都会去 maven 上试图拉取最新的库，这样，拖慢了编译速度，尤其在网络非常差的时候，所以，为了构建速度，建议写死依赖库的版本号。")]),e._v(" "),r("h3",{attrs:{id:"减少编译脚本-i-o-操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#减少编译脚本-i-o-操作"}},[e._v("#")]),e._v(" 减少编译脚本 I/O 操作")]),e._v(" "),r("p",[e._v("有时候，编译脚本中会有一些代码做动态信息的获取，比如想从 git 中获取一个数字作为版本号")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("def cmd = 'git rev-list HEAD --first-parent --count'\ndef gitVersion = cmd.execute().text.trim().toInteger()\nandroid {\ndefaultConfig {\nversionCode gitVersion\n}\n}\n")])])]),r("p",[e._v("其实这个操作主要是为了在构建的机器上为了发布版本而做的，日常环境研发调试无需这样，所以可以优化成如下方式：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("def gitVersion() {\nif (!System.getenv('CI_BUILD')) {\n// don't care\nreturn 1\n}\ndef cmd = 'git rev-list HEAD --first-parent --count'\ncmd.execute().text.trim().toInteger()\n}\nandroid {\ndefaultConfig {\nversionCode gitVersion() } }\n")])])]),r("h3",{attrs:{id:"并行构建模块化项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#并行构建模块化项目"}},[e._v("#")]),e._v(" 并行构建模块化项目")]),e._v(" "),r("p",[e._v("将你的项目拆分成多个子项目并开启并行构建也是一个不错的主意，比如将相对独立的模块拆分成独立的库工程(Library projects)，主工程(Application project)依赖这些库工程，这样的话，开启并行构建才会发挥作用。并行构建开启方式是修改文件 gradle.properties，加入如下行：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("org.gradle.parallel=true\n")])])]),r("h3",{attrs:{id:"更多"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[e._v("#")]),e._v(" 更多")]),e._v(" "),r("p",[e._v("可参考")]),e._v(" "),r("ul",[r("li",[e._v("https://www.jianshu.com/p/e45faaec1df0")])]),e._v(" "),r("h2",{attrs:{id:"基础配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础配置"}},[e._v("#")]),e._v(" 基础配置")]),e._v(" "),r("h3",{attrs:{id:"全局变量定义-引用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全局变量定义-引用"}},[e._v("#")]),e._v(" 全局变量定义&引用")]),e._v(" "),r("p",[e._v("在顶层 build.gradle 脚本中定义一些全局变量，提供给子脚本引用")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ext {\n// global variables definition\ncompileSdkVersion = 'Google Inc.:Google APIs:23'\nbuildToolsVersion = \"23.0.3\"\nminSdkVersion = 14\ntargetSdkVersion = 23\n}\n")])])]),r("p",[e._v("子脚本引用")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("android {\ncompileSdkVersion rootProject.ext.compileSdkVersion\nbuildToolsVersion rootProject.ext.buildToolsVersion\n\n      defaultConfig {\n          minSdkVersion rootProject.ext.minSdkVersion\n          targetSdkVersion rootProject.ext.targetSdkVersion\n      }\n\n}\n")])])]),r("h3",{attrs:{id:"打包选项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#打包选项"}},[e._v("#")]),e._v(" 打包选项")]),e._v(" "),r("p",[e._v("有时候引用的三方库会带有一些配置文件 xxxx.properties,或者 license 信息，打包的时候想去掉这些信息，就可以这样做")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("android {\npackagingOptions {\nexclude 'proguard-project.txt'\nexclude 'project.properties'\nexclude 'META-INF/LICENSE.txt'\nexclude 'META-INF/LICENSE'\nexclude 'META-INF/NOTICE.txt'\nexclude 'META-INF/NOTICE'\nexclude 'META-INF/DEPENDENCIES.txt'\nexclude 'META-INF/DEPENDENCIES'\n}\n}\n")])])]),r("h3",{attrs:{id:"编译配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译配置"}},[e._v("#")]),e._v(" 编译配置")]),e._v(" "),r("h4",{attrs:{id:"bulid-gradle-dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bulid-gradle-dependencies"}},[e._v("#")]),e._v(" bulid.gradle - dependencies")]),e._v(" "),r("p",[e._v("详见：https://developer.android.google.cn/studio/build/dependencies#native_dependencies")]),e._v(" "),r("h5",{attrs:{id:"本地库模块依赖项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地库模块依赖项"}},[e._v("#")]),e._v(" 本地库模块依赖项")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("implementation project(':mylibrary')\n")])])]),r("p",[e._v("这声明了对一个名为“mylibrary”（此名称必须与在您的 settings.gradle 文件中使用 include: 定义的库名称相符）的 Android 库模块的依赖关系。在构建您的应用时，构建系统会编译该库模块，并将生成的编译内容打包到 APK 中。")]),e._v(" "),r("h5",{attrs:{id:"本地二进制文件依赖项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地二进制文件依赖项"}},[e._v("#")]),e._v(" 本地二进制文件依赖项")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("implementation fileTree(dir: 'libs', include: ['*.jar'])\n")])])]),r("p",[e._v("Gradle 声明了对项目的 module_name/libs/ 目录中 JAR 文件的依赖关系（因为 Gradle 会读取 build.gradle 文件的相对路径）。\n或者，您也可以按如下方式指定各个文件：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("implementation files('libs/foo.jar', 'libs/bar.jar')\n")])])]),r("h5",{attrs:{id:"远程二进制文件依赖项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#远程二进制文件依赖项"}},[e._v("#")]),e._v(" 远程二进制文件依赖项")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("implementation 'com.example.android:app-magic:12.3'\n")])])]),r("p",[e._v("这实际上是以下代码的简写形式：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("implementation group: 'com.example.android', name: 'app-magic', version: '12.3'\n")])])]),r("h4",{attrs:{id:"依赖项配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#依赖项配置"}},[e._v("#")]),e._v(" 依赖项配置")]),e._v(" "),r("h5",{attrs:{id:"集成项目时可能出现的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集成项目时可能出现的问题"}},[e._v("#")]),e._v(" 集成项目时可能出现的问题")]),e._v(" "),r("ul",[r("li",[e._v("compileOnly：解决依赖冲突，如版本不统一")]),e._v(" "),r("li",[e._v("与变体匹配相关的构建错误：https://developer.android.google.cn/studio/build/dependencies#resolve_matching_errors\n排除传递依赖项\n随着应用的范围不断扩大，它可能会包含许多依赖项，包括直接依赖项和传递依赖项（应用中导入的库所依赖的库）。如需排除不再需要的传递依赖项，您可以使用 exclude 关键字，如下所示：")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("  dependencies {\n  implementation('some-library') {\n  exclude group: 'com.example.imgtools', module: 'native'\n  }\n  }\n")])])]),r("h4",{attrs:{id:"远程代码库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#远程代码库"}},[e._v("#")]),e._v(" 远程代码库")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("allprojects {\nrepositories {\ngoogle()\njcenter()\n}\n}\n")])])]),r("h4",{attrs:{id:"合并-manifest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#合并-manifest"}},[e._v("#")]),e._v(" 合并 manifest")]),e._v(" "),r("p",[e._v("APK 文件只能包含一个 AndroidManifest.xml 文件，但 Android Studio 项目可以包含多个清单文件，这些清单文件由主源代码集、构建变体和导入的库提供。因此，在构建应用时，Gradle 构建系统会将所有清单文件合并到一个打包在 APK 中的清单文件中。\n查看模块依赖项\n一些直接依赖项可能具有自己的依赖项。此类依赖项称为“传递依赖项”。\n下列方法可用来列出 Gradle 为给定模块解析的依赖项\n|\n|\n修复依赖项解析错误")]),e._v(" "),r("ul",[r("li",[e._v("检查哪些依赖导致了错误，通过上述方法检查依赖树。")]),e._v(" "),r("li",[e._v("如果无法轻松识别重复的依赖项，请尝试使用 Android Studio 的界面搜索包含重复类的依赖项，具体操作步骤如下")])]),e._v(" "),r("ol",[r("li",[e._v("从菜单栏中依次选择 Navigate > Class。")]),e._v(" "),r("li",[e._v("在弹出式搜索对话框中，确保已勾选 Include non-project items 旁边的框。")]),e._v(" "),r("li",[e._v("输入出现在构建错误中的类的名称。")]),e._v(" "),r("li",[e._v("检查结果以查找包含该类的依赖项。\n修复重复类错误\nProgram type already present com.example.MyClass\n此错误通常是下列其中一种情况所致：")])]),e._v(" "),r("ul",[r("li",[e._v("二进制文件依赖项包含一个库，该库也作为直接依赖项包含在您的应用中。例如，您的应用声明直接依赖于库 A 和库 B，但库 A 已在其二进制文件中包含库 B。\n"),r("ul",[r("li",[e._v("如需解决此问题，请取消将库 B 作为直接依赖项。")])])]),e._v(" "),r("li",[e._v("您的应用的本地二进制文件依赖项和远程二进制文件依赖项是同一个库。\n"),r("ul",[r("li",[e._v("如需解决此问题，请移除其中一个二进制文件依赖项。\n修复类路径冲突\nConflict with dependency 'com.example.library:some-lib:2.0' in project 'my-library'.\nResolved versions for runtime classpath (1.0) and compile classpath (2.0) differ.")])])]),e._v(" "),r("li",[e._v("将所需版本的依赖项作为 api 依赖项添加到库模块。也就是说，只有库模块声明相应依赖项，但应用模块也能以传递方式访问其 API。")]),e._v(" "),r("li",[e._v("或者，您也可以同时在两个模块中声明相应依赖项，但应确保每个模块使用的版本相同。不妨考虑配置项目全局属性，以确保每个依赖项的版本在整个项目中保持一致。\n自定义依赖项解析策略\nandroid {\napplicationVariants.all { variant ->\n// Return compile configuration objects of a variant.\nvariant.getCompileConfiguration().resolutionStrategy {\n// Use Gradle's ResolutionStrategy API\n// to customize how this variant resolves dependencies.\n...\n}\n// Return runtime configuration objects of a variant.\nvariant.getRuntimeConfiguration().resolutionStrategy {\n...\n}\n// Return annotation processor configuration of a variant.\nvariant.getAnnotationProcessorConfiguration().resolutionStrategy {\n...\n}\n}\n}\nGradle 提示与技巧")])]),e._v(" "),r("p",[e._v("名词解释\napi & implementation\nhttps://www.jianshu.com/p/8962d6ba936e\nhttps://developer.android.google.cn/studio/build/dependencies?hl=zh_cn#dependency_configurations\nimplementation 依赖和本地依赖略有不同，远程在第二层进行隔离")]),e._v(" "),r("h3",{attrs:{id:"参考文献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),r("p",[e._v("[1] 十分钟理解 Gradle\n[2] GRADLE 构建最佳实践\n[3] 深入理解 Android 之 Gradle\n[4] https://gradle.org/\n[5] https://developer.android.google.cn/studio/build/gradle-tips?hl=zh_cn\n[6] https://developer.android.google.cn/studio/build?hl=zh_cn")])])}),[],!1,null,null,null);a.default=s.exports}}]);