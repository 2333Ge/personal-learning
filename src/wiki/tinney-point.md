# 细碎知识点

h5唤起APP，系统如何确定应用？

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