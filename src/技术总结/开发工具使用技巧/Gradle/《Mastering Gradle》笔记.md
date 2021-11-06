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

```
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
