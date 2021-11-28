# 嵌套滑动

- 同向滑动冲突：设置属性`nestedScrollEnabled={true}`

# Could not connect to development server

- ip、端口 配置无误
- 服务已开启
- 无代理

误删 debug 用文件，导致 SDK 28 以上的连接服务失败

![](../../../image/技术总结/RN/trap/connent-server-error-debug-file.png)

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools">

  <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>

  <application android:usesCleartextTraffic="true" tools:targetApi="28" tools:ignore="GoogleAppIndexingWarning" />
</manifest>

```

# 升级 0.61 以上后原生自动引入问题

android 大概是 0.61， 不希望自动引入，配置

```js
// react-native.config.js
module.exports = {
  dependencies: {
    'react-native-video': {
      platforms: {
        android: null,
      },
    }
};
```

# removeClippedSubviews
