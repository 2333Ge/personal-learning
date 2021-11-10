# 前言

- 原书：https://juejin.cn/book/6844733819363262472
- demo: demo/gradle-demo

# 安装

<!-- https://juejin.cn/book/6844733819363262472/section/6844733819417788429 -->

# Hello World

执行 gradle 时, Gradle 会从当前目录中寻找名为 "build.gradle" 或 "build.gradle.kts" 的文件

# 传递参数

<!-- https://juejin.cn/book/6844733819363262472/section/6844733819421982728 -->

命令行参数 > GRADLE_USER_HOME gradle.properties 文件 > 项目根目录 gradle.properties 文件

> Gradle User Home(在哪儿？？)
> User Home 中主要保存全局配置, 全局初始化脚本以及依赖的缓存和日志等文件. 如果开启 build cache 的话, 构建缓存也会存在这里共所有项目共享.

关键词：增量编译(Incremental Build) 与 缓存(Caching)、参数

# 任务(Task)

??? delegate properties

```kotlin
tasks.create("foo") {
    println("...")
}
```

tasks 是脚本的 "全局变量", 用于创建和管理各式各样的任务

## 1. 创建 task

```kotlin
// 方式1： 通过 name 注册 task
tasks.create("foo") {
    // 配置阶段
    println("configure phase...")

    doLast {
        // 执行阶段
        println("execution phase...")
    }
}
// ？？方式2：通过 Kotlin delegate properties 创建任务
val bar by tasks.creating {
  ...
}
// 方式3：继承 DefaultTask
open class HelloTask : DefaultTask() {
  init {
        // 配置阶段
        println("configure phase...")
    }
    @TaskAction
    fun hello() {
        // 执行阶段
        println("execution phase...")
    }
}

tasks.create<HelloTask>("foo")

```

## 2. 获取 task

```kotlin
// 通过 name 获取 task
tasks["foo"].name
tasks.getByName("foo").name
tasks.getByName<Copy>("copy").destinationDir

//??? 通过 Kotlin delegate properties 获取
val foo by tasks.getting
val copy by tasks.getting(Copy::class)
```

如果某个 task 在另外的 project 中, 则需要指定 task 的路径

```kotlin
tasks.getByPath(":projectA:hello").path
```

## Gradle 自带 task

- Copy task
- Zip/Jar/Tar task

## 任务依赖

1. 通过名称
2. 通过 task 对象

使用 **task-tree** 可查看 task 依赖关系

## 任务执行顺序

shouldRunAfter 和 mustRunAfter

dependsOn > shouldRunAfter

```kotlin
val taskX by tasks.creating {
    doLast {
       println("taskX")
    }
}
val taskY by tasks.creating {
    doLast {
        println("taskY")
    }
}

taskY { mustRunAfter(taskX) }

```

# Gradle 生命周期

主题流程如图，大致分三阶段 Initialization -> Configuration -> Execution

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/30/16e1c9dc26469187~tplv-t2oaga2asx-watermark.awebp)

## Initialization

Initialization 阶段主要目的是初始化构建,分为两个子过程

1. 一个是执行 Init Script
2. 是执行 Setting Script

Init script 初始化全局通用属性等，很少配置

Setting Script 初始化了一次构建所参与的所有模块，对于 Android 项目而言, 我们在根目录下看到的 settings.gradle(.kts) 就是 setting script. 几乎每个成规模的项目中都会有多个模块相互合作, setting script 正是组织和管理一个项目中所有模块(或者说子项目) 的脚本. 所有参与构建的项目都需要在 setting script 中描述, 本机任何位置的项目都可以通过 setting script 被引入到当前构建中.

## Configuration

执行所有 build.gradle(.kts)，创建对应 task
Task 组成的有向无环图便是在这个阶段生成的。

## Execution

对于 Java 而言是调用 javac 编译源码, 然后打包成 jar. 对于 Android 而言则更加复杂些.

## 生命周期 Hook

![生命周期Hook](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/30/16e1c9dc26330d6a~tplv-t2oaga2asx-watermark.awebp)

各 Hook 介绍可[](https://juejin.cn/book/6844733819363262472/section/6844733819421999118)

# Init Script

由于 init script 主要任务是全局 gradle 配置, 因此 Api 分为三大部分: 获取全局属性, 项目配置, 生命周期 Hook.

由于 init script 是最早执行的脚本, 因此能监听几乎所有的事件

## 常见用法

1. 为所有构建增加插件仓库

```kotlin
settingsEvaluated { settings ->
    settings.pluginManagement {
        repositories {
            maven(url = "../maven-repo")
        }
    }
}

```

2. 对所有构建 应用 scan 插件

用于优化构件速度、查看决议？？详情

```kotlin
initscript {
    repositories {
        gradlePluginPortal()
    }

    dependencies {
        classpath("com.gradle:build-scan-plugin:2.1")
    }
}

rootProject {
    apply<com.gradle.scan.plugin.BuildScanPlugin>()

    configure<com.gradle.scan.plugin.BuildScanExtension> {
        publishAlways()
        termsOfServiceUrl = "https://gradle.com/terms-of-service"
        termsOfServiceAgree = "yes"
    }
}
```

# Setting Script

setting script 承担了统筹所有模块的重任, 因此 api 主要是在操作所参与构建的模块以及管理构建过程需要的插件.

## 设置参与构建的模块

```
include(":app", ":libs:someLibrary")

include(":anotherLibrary")
project(":anotherLibrary").projectDir = File(rootDir, "../another-library")
```

## 管理 plugin

使用场景举例

1. 指定仓库

我们在 build script 中通过 plugins {...} 引入插件的时候, 默认只从 Gradle 官方插件仓库 查找. 如果我们的插件不在官方仓库, 就需要在这里指定查找的仓库:

```kotlin
// setting script

pluginManagement {
    repositories {
        maven(url = "../maven-repo")
    }
}
```

2. 模块替换功能

在引用非 Gradle 官方 plugin 的时候常用

例如在 Android 中, plugins { id("com.android.application") } 中引用 android application 插件时, Gradle 默认查找名为 com.android.application:com.android.application.gradle.plugin:[version] 的插件, 而实际 google 仓库中, 插件的 id 是 com.android.tools.build:gradle:[version]

```kotlin
include(....)

pluginManagement {
    repositories {
        ....
        google()
    }

    resolutionStrategy {
        eachPlugin {
            if (requested.id.namespace == "com.android") {
                useModule("com.android.tools.build:gradle:${requested.version}")
            }
        }
    }
}
```

3. plugin 设置统一版本

```kotlin
// setting script

pluginManagement {
    resolutionStrategy {
        eachPlugin {
            if (requested.id.id == "com.dorongold.task-tree") {
                useVersion("1.4")
            }
        }
    }
}
```

# Build Script

单模块构建的执行流程大致为: init script -> setting script -> build script
多模块的构建流程: init script -> setting script -> root build script -> build script

## 配置属性

配置, 实际上是对引入的插件进行配置. 原本 build script 中并没有 android {...} 这个 dsl 属性, 这是 plugin 提供的. 一旦应用了某个插件, 就可以使用插件提供的 dsl？？ 对其进行配置, 从而影响该模块的构建过程

以 Android 模块为例

```kotlin
plugins {
    id("com.android.application")
}

android {
    compileSdkVersion(28)

    defaultConfig {
        ....
    }
}
```

我们通过 `plugins { id("com.android.application") }` 引入了 android application 插件, 这个插件会在 Project 对象上增加 `android { .... }` 配置方法, 这也是为什么引入相应的插件后我们才能够对某些属性进行配置. 我们要做的就是在 build script 中调用插件提供的属性进行配置, 为插件工作提供必要的信息. 例如, 我们设置的 `android { compileSdkVersion(28) }` 就是告诉 Gradle "使用 API 28 编译这个模块".

## 内置属性

build script 背后是 Project 类型的对象， Project 对象 本身也提供了很多用于配置构建的 dsl,如：

1. 设置依赖查找仓库

```kotlin
allprojects {
    repositories {
        google()
        jcenter()
    }
}
```

2. 如果某个依赖存在于我们的私有仓库中, 则可以通过 maven 方法设置私有仓库

```kotlin
repositories {
    maven {
        url = uri(...)
    }
}
```

3. 如果 maven 仓库需要认证, 则通过 credentials 添加用户名密码:

```kotlin
repositories {
    maven {
        url = uri(...)

        credentials {
            username = "joe"
            password = "secret"
        }
    }
}
```

4. 设置自定义变量: ext
   ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/30/16e1c9f2c5ba1247~tplv-t2oaga2asx-watermark.awebp)

## build script 之间的引用及依赖

无论在哪个 build script 中, 都可以通过 rootProject 获取到 root build script 所对应的对象. 父模块可以通过 subprojects 获取到所有的子模块, 子模块可以通过 parent 获取到父模块. 如果两个模块之间没有直系关系, 则可以通过 findProject 引用.

> 在多项目构建中, 通常 repositories 出现在 root build script 中, 而 module build script 中只包含 dependencies {...} 部分

> 其他 project 属性、方法参考[官方 API 文档](https://docs.gradle.org/6.0.1/dsl/org.gradle.api.Project.html#N15127)

# 依赖规则

大部分项目都是由诸多第三方依赖组成的. 在 Gradle 中, 依赖不是独立存在的. 每个依赖都会归属于一个 Configuration. 它们的关系如下:

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/30/16f551f99c602289~tplv-t2oaga2asx-watermark.awebp)

每个 Project 可以有多个 Configuration. 我们可以通过 configurations 引用到当前项目的所有的 configuration.

每个 Configuration 实际上是 dependency 的集合, 便于不同构建步骤引用依赖

## 常见 Configuration

- implementation 依赖会出现在编译产物中. 但是最终产物中的该依赖不会向外暴露接口. 这- 种方式可以有效减少 recompile 时所需要编译的模块, 提高编译速度.
- api 同上, 但是在编译期会传递依赖给外部.
- compileOnly 仅编译期有效, 不会出现在最终产物中
- runtimeOnly 仅运行期有效, 会出现在编译产物中
- annotationProcessor 注解处理器依赖(包含 META-INF/services/javax.- annotation.processing.Processor 的 jar 包)

## Configuration 继承

```kotlin
dependencies {
    testCompile 'com.squareup.assertj:assertj-android:1.1.1'
    testCompile 'junit:junit:4.12'
    androidTestCompile 'com.squareup.assertj:assertj-android:1.1.1'
    androidTestCompile 'junit:junit:4.12'
}
```

上例中 testCompile 与 androidTestCompile 共同的依赖被书写了两次,这时就可以通过定义一个公共的 configuration, 同时让 testCompile 和 androidTestCompile 继承与这个公共依赖即可

```kotlin
configurations {
    [androidTestCompile, testCompile].each { it.extendsFrom commonTestCompile }
}

dependencies {
    commonTestCompile 'com.squareup.assertj:assertj-android:1.1.1'
    commonTestCompile 'junit:junit:4.12'
}
```

## 常见依赖问题

依赖决议是指 "在编译过程中, 如果存在某个依赖的多个版本, 构建系统应该选择哪个进行构建的问题". 无论是新手还是老手, 编译失败大部分情况都是由决议错误导致的.

- debugCompileClasspath / releaseCompileClasspath

编译期发生 'xxx Not Found', 本质就是在这个 configuration 中没有对应的代码.
通常是由于没有依赖正确的库导致的. 排查

- debugRuntimeClasspath / releaseRuntimeClasspath

运行期发生 'xxx Not Found', 本质就是在这个 configuration 中没有对应的代码.
通常是由于使用了 compileOnly(xxx) 仅仅在编译期依赖某些库导致.

## implementation

### isForce

决议冲突时是否强制使用当前版本, boolean，只影响当前模块

```kotlin
dependencies {
    implementation("io.reactivex.rxjava2:rxjava:2.2.6") {
        isForce = true
    }
    implementation("io.reactivex.rxjava2:rxjava:2.2.10") {
        isForce = true
    }
}
```

## exclude

用于排除某个或者某组传递依赖:直接写在 dependencies 代码块中的依赖叫做 直接依赖. 而通过某个依赖从而间接引入的其它依赖项叫做 间接依赖 或 传递依赖. Gradle 中提供了排除间接依赖的方式

```kotlin
implementation("io.reactivex.rxjava2:rxandroid:2.1.1") {

    exclude(group = "io.reactivex.rxjava2", module = "rxjava")

    exclude(group = "io.reactivex.rxjava2")

}

```

## 多项目共享依赖版本

[platform](https://docs.gradle.org/6.0.1/userguide/dependency_management_terminology.html#sub::terminology_platform) + constraint 实现在所有子项目共享版本. 如下:

1. 创建一个子项目, 比如叫做 bom, 专门用于管理版本

```kotlin
// bom/build.gradle.kts

plugins {
    `java-platform`
}

dependencies {
    constraints {
        implementation("io.reactivex.rxjava2:rxjava:2.2.0")
    }
}
```

2. 在其他子项目中通过 platform 引入 "版本项目" bom

```kotlin

// foo/build.gradle.kts

dependencies {
implementation(platform(project(":bom")))

    // No version needed
    implementation("io.reactivex.rxjava2:rxjava")

}
```

只需要 implementation(platform(project(":bom"))) 即可将 bom 工程所有的依赖约束引入, 方便在子项目中共享

## 依赖版本号

|                 表达式                  |                             描述                             |
| :-------------------------------------: | :----------------------------------------------------------: | ------------------------------------- |
| 1.3, 1.3.0-beta3, 1.0-20150201.131010-1 |                           固定版本                           |
|             [1.0.0, 1.3.0)              | 大于等于 1.0.0 且小于 1.3.0 的版本. 其中 ')' 可以使用 '[' 代 | 替, 例如: '[1.0.0, 1.3.0[' 6.0.1 新增 |
|               1.+, [1.0,)               |                     大于等于 1.0 的版本                      |
|   latest.integration, latest.release    |                           最新版本                           |

## 依赖版本力度

控制依赖的依赖，required、strictly、prefer 和 reject，[见](https://juejin.cn/book/6844733819363262472/section/6844733819426209799)

## 依赖查找&分析

依赖的传递特性导致项目中所依赖的版本实际上是 决议 的结果. 当项目变大或者引入大量三方依赖后, 很难了解当前项目中所有的依赖关系以及对应的版本. 这时就需要通过依赖分析.

1. [使用 dependencies 任务分析依赖](https://docs.gradle.org/6.0.1/userguide/viewing_debugging_dependencies.html#sec:listing_dependencies)

```sh
./gradlew :app:dependencies
```

一般无需打印所有 configuration，可用参数控制输出

```sh
./gradlew :app:dependencies --configuration compileClasspath
```

2. [使用 build scan 分析](https://docs.gradle.org/6.0.1/userguide/viewing_debugging_dependencies.html#sec:debugging-build-scans)

```sh
./gradlew build --scan
```

3. 依赖查找

当我们想着重分析某一个依赖时, 可以通过 dependencyInsight 任务, 从被依赖的目标反向查找依赖关系. 例如:

```sh
./gradlew :app:dependencyInsight --configuration debugCompileClasspath --dependency kotlin-stdlib
```

# [Android 构建详解](https://juejin.cn/book/6844733819363262472/section/6844733819430371341#:~:text=Android%20%E6%9E%84%E5%BB%BA-,%E8%AF%A6,-%E8%A7%A3)

- 如何查找 Gradle API
- 插件：某种类型（语言、工程等）的编译的模板

## 子模块

apply plugin: ... 即是应用插件的地方. 一般 android 无非就是 com.android.application 或者 com.android.library. 两者都会引入 android {...}

代码、资源配置流程
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/30/16e1c9fc466a804f~tplv-t2oaga2asx-watermark.awebp)

## 代码相关配置

### 源码、资源目录配置

无论是源码还是资源文件, 都通过 sourceSets {...} 进行配置

[sourceSet](https://developer.android.google.cn/reference/tools/gradle-api/7.0/com/android/build/api/dsl/AndroidSourceSet)

## 资源构建

资源也分为两大类：

1. 需要特殊处理

src/main/res 所有资源都会经过 Android Asset Packaging Tool(简称 aapt)"编译"， 但是不同类型的资源会以不同的方式被处理. 例如图片资源, 会被压缩后放入 APK, 而布局的 layout 文件, 则会从 xml 格式被编译为二进制格式存储。

aapt2 除了会优化存储空间和运行时解析资源的效率外, 还有一个重要的目的就是生成 R 文件.

2. 无需特殊处理

例如, app/src/main/assets 目录下的资源, 以及 app/libs 下的 so 文件.

### 配置

[aaptOptions](https://developer.android.google.cn/reference/tools/gradle-api/7.0/com/android/build/api/dsl/AaptOptions)设置执行 aapt 的参数

[packagingOptions](https://developer.android.google.cn/reference/tools/gradle-api/7.0/com/android/build/api/dsl/PackagingOptions)处理重复资源

## 默认配置

[defaultConfig](https://developer.android.google.cn/reference/tools/gradle-api/7.0/com/android/build/api/dsl/DefaultConfig)

```
android {
    ....

    defaultConfig {
        applicationId = "com.walfud.myapplication"
        applicationIdSuffix = "namesuffix"

        versionCode = 1
        versionName = "1.0.0"
        versionNameSuffix = "alpha"

        manifestPlaceholders = mapOf("hostName" to "www.example.com")
    }

    ....
}
```

buildConfigField 方法会在生成 BuildConfig.java 时, 向其中插入属性

```kotlin
// build.gradle.kts
android {
    ....

    defaultConfig {
        buildConfigField("int", "i", "1234")
        buildConfigField("String", "str", "\"some text\"")
    }

    ....
}
```

```java
// BuildConfig.java

....

public final class BuildConfig {
    ....

    // Fields from default config.
    public static final int i = 1234;
    public static final String str = "some text";
}
```

# 参考文献

- Gradle 官方文档：https://docs.gradle.org/current/userguide/userguide.html
- android gradle 配置： https://developer.android.google.cn/reference/tools/gradle-api/7.0/classes
- kotlin gradle 文档： https://book.kotlincn.net/text/mpp-dsl-reference.html

# 随记

- 官网查看 api
- scan 查看项目依赖情况
