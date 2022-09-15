---
title: RN 踩坑记录
date: 2020-06-01
category: react-native
tags:
  - react-native
---

<!-- more -->

## Could not connect to development server

- ip、端口 配置无误
- 服务已开启
- 无代理

误删 debug 用文件，导致 SDK 28 以上的连接服务失败

![图片](./image/connent-server-error-debug-file.png)

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools">

  <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>

  <application android:usesCleartextTraffic="true" tools:targetApi="28" tools:ignore="GoogleAppIndexingWarning" />
</manifest>

```

## 升级 0.61 以上后原生自动引入问题

android 大概是 0.61以后，会自动导入原生剥， 若不希望自动引入，配置

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
## 实现模糊效果

参考：https://stackoverflow.com/questions/55422749/how-to-blur-text-in-react-native

```jsx
<View
  style={{
    height: 3,
    width: 70,
    shadowOpacity: 1,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 1)"
  }}
/>
```

## 滑动+不同距离改变透明度

```jsx
<Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: yOffset.current } } }],
          { useNativeDriver: false }
        )}
      >
        ...
</Animated.ScrollView>  
```
配合
```js
yOffset?.current.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
            })
```
## 代码画三角形

## 列表 + 键盘

- 滑动列表键盘不消失的情况，
- 滑动列表中的点击，需要点两次：设置`disableScrollViewPanResponder`

## 其他

- 原生视图被优化引发的问题：设置`removeClippedSubviews={false}`，如只参与布局的视图容易被优化，通过Ref计算当前view的属性失败
- 同向滑动冲突：设置属性`nestedScrollEnabled={true}`
- react-native debugger 连接问题: https://github.com/jhen0409/react-native-debugger/issues/620
- 

## ios

### 换行问题显示问题

图文混排，iPhone XS 换行失败 (有图片和空字符串的时候)

```tsx
const Title: React.FC<TitleProps> = ({
  style,
  title = new Array(100).fill('中').join(''),
  displayIcon = true,
  icon = 'https://i9.taou.com/maimai/p/32183/8953_6_82VpJ0euQSvlSKXk',
  numberOfLines = 2,
}) => {
  if (!title?.trim()) return null;
  const iconNode = displayIcon && (
    <>
      <Image
        style={{ height: 16, width: 16 }}
        source={{ uri: icon }}
        resizeMode="contain"
      />{' '}
    </>
  );
  return (
    <Text
      style={[styles.text, StyleSheet.flatten(style)]}
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}
    >
      {iconNode}
      <Text style={{ fontSize: 16 }}>{title.trim()}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    // 指定fontSize时，iPhone xs 换行失败
    fontSize: 16,
    lineHeight: 18,
    color: '#15161F',
    fontWeight: 'bold',
  },
  icon: {
    height: 16,
    width: 16,
  },
});
```