---
title: 细碎知识点记录
date: 2022-01-01
category: Wiki
tags:
  - Wiki
---

<!-- more -->

## h5唤起APP，系统如何确定应用？

原生可注册对schema的判断（[参考链接](https://www.cnblogs.com/zhang-cb/p/7093769.html)）
```xml
<activity
  android:name="com.example.helloworld.MainActivity">
  ...　
  <intent-filter>
    <!--下面这几个必须要设置-->
    <action android:name="android.intent.action.VIEW"/>   
    <category android:name="android.intent.category.DEFAULT">             
    <category android:name="android.intent.category.BROWSABLE">　　　　<!--协议部分-->
    <data android:scheme="http" android:host="baidu"android:path="/news" android:port="8080"/>    
  </intent-filter> 
</activity>
```

## 权限-rw-r--r--表示什么

[参考文章](https://www.runoob.com/linux/linux-comm-chmod.html)

第一个字符:表示文件类型，d是文件夹，l是连接文件，-是普通文件

后面9个字符表示权限，r表示读权限，w表示写权限，x表示执行权限，-表示没有权限

后面9个字符3个为一组，第1组表示文件所有者，第2组表示用户组，第3组表示其他用户的权限。

![示意图](https://www.runoob.com/wp-content/uploads/2014/08/file-permissions-rwx.jpg)

## etc/hosts

mac etc/hosts文件中存放域名对应ip的解析