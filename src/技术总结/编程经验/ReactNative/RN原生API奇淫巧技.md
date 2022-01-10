# ReactMarker

# 给 RN 摇一摇添加自定义工具

```
mReactInstanceManager = ((ReactApplication) application).getReactNativeHost().getReactInstanceManager();
mReactInstanceManager.getDevSupportManager().addCustomDevOption
```

# 获取RN JS线程并得到线程CPU时间

 ```java
 getReactApplicationContext().getCatalystInstance().getReactQueueConfiguration().getJSQueueThread().runOnQueue(new Runnable() {
     @Override
     public void run() {
         long cpuTime = SystemClock.currentThreadTimeMillis();
         long det = 0;
         if (lastCpuTime > 0) {
             det = cpuTime - lastCpuTime;
         }
         lastCpuTime = cpuTime;
     }
 });
```

# 获取进程内存占用相关数据
 
```java
// java虚拟机能够从操作系统那里挖到的最大的内存
Runtime.getRuntime().maxMemory()
// java虚拟机现在已经从操作系统那里挖过来的内存大小，也就是java虚拟机这个进程当时所占用的所有 内存
Runtime.getRuntime().totalMemory()
// 从操作系统那里挖过来而又没有用上的内存
Runtime.getRuntime().freeMemory()
```

# 获取手机帧数情况
 ```java
 Choreographer.getInstance().postFrameCallback(mRateRunnable);
    private class FrameRateRunnable implements Choreographer.FrameCallback {
          private int totalFramesPerSecond;
      @Override
      public void doFrame(long frameTimeNanos) {
              totalFramesPerSecond++;
          Choreographer.getInstance().postFrameCallback(this);
      }
  }
 ```
# EventBus

可参考： https://www.jianshu.com/p/e7d5c7bda783
