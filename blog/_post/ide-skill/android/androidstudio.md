---
title: Android Studio概览
date: 2019-01-01
category: Android
tags:
  - Android
  - android-studio
  - ide-skill
---

<!-- more -->

# 快捷键

快捷键[官网链接][official]

|    快捷键    |                    描述                    | 备注  |
| :----------: | :----------------------------------------: | :---: |
| option+cmd+L |                 格式化代碼                 |       |
|   shift+`    |            关闭最近打开的操作栏            |       |
|   shift+f6   |                 变量重命名                 |       |
|  ctrl+alt+h  |               查看方法调用栈               |       |
|    cmd+y     | 查看源码时不跳转显示参数或某个子函数的源码 | ![a1] |

[a1]: ./image/codeInOneWindow.png
[official]: https://developer.android.google.cn/studio/intro/keyboard-shortcuts


## 技巧

### Android 模拟器

创建好模拟器后

#### 终端打开

```bash
$ emulator -list-avds
Android_10_1080p
Android_10_1080p_no_Frame
$ emulator -avd Android_10_1080p_no_Frame
```


若报错

```
emulator: ERROR: No AVD specified. Use '@foo' or '-avd foo' to launch a virtual device named 'foo'
```

配置zshrc, [参考](https://www.codegrepper.com/code-examples/whatever/PANIC%3A+Missing+emulator+engine+program+for+%27x86%27+CPU.)

```bash
export ANDROID_HOME=/Users/ych/Library/Android/sdk
# export PATH=${PATH}:${ANDROID_HOME}/emulator # 这一段为什么不行
export PATH=$ANDROID_HOME/emulator:$PATH
```
#### [RN 开发者菜单](https://reactnative.cn/docs/debugging)

```
cmd m
```

```
adb shell input keyevent 82
```



