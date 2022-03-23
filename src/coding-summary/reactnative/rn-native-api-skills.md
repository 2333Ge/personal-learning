# RN原生API奇淫巧技

## ReactMarker

## 给 RN 摇一摇添加自定义工具

```
mReactInstanceManager = ((ReactApplication) application).getReactNativeHost().getReactInstanceManager();
mReactInstanceManager.getDevSupportManager().addCustomDevOption
```

## 获取RN JS线程并得到线程CPU时间

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

## 获取进程内存占用相关数据
 
```java
// java虚拟机能够从操作系统那里挖到的最大的内存
Runtime.getRuntime().maxMemory()
// java虚拟机现在已经从操作系统那里挖过来的内存大小，也就是java虚拟机这个进程当时所占用的所有 内存
Runtime.getRuntime().totalMemory()
// 从操作系统那里挖过来而又没有用上的内存
Runtime.getRuntime().freeMemory()
```

## 获取手机帧数情况
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
## EventBus

可参考： https://www.jianshu.com/p/e7d5c7bda783

## UIManager

UIManger的作用就是讲JS的组件转换为原生组件，为了更好的理解UIManger，我们先看下UIManger的源码,UIManager对应Android的UIManagerModule

```java
public class UIManagerModule extends ReactContextBaseJavaModule
    implements OnBatchCompleteListener, LifecycleEventListener, UIManager {
    private final UIImplementation mUIImplementation;
@ReactMethod
public void createView(int tag, String className, int rootViewTag, ReadableMap props) {
     ...
  mUIImplementation.createView(tag, className, rootViewTag, props);
}

@ReactMethod
public void updateView(int tag, String className, ReadableMap props) {
     ...
  mUIImplementation.updateView(tag, className, props);
}
}

@ReactMethod
public void manageChildren(
        int viewTag,
    @Nullable ReadableArray moveFrom,
    @Nullable ReadableArray moveTo,
    @Nullable ReadableArray addChildTags,
    @Nullable ReadableArray addAtIndices,
    @Nullable ReadableArray removeFrom) {...}
    mUIImplementation.manageChildren(
          viewTag, moveFrom, moveTo, addChildTags, addAtIndices, removeFrom);
}
...
}
```
前边提到@ReactMethod注解是为了供JS端来调用
UIManagerModule的主要作用是：
1.为JS组件转换为Android端可以识别的View
2.更新View视图
 createView
createView的实现是在UIImplementation.java文件中

```java
public void createView(int tag, String className, int rootViewTag, ReadableMap props) {
      synchronized (uiImplementationThreadLock) {
        ReactShadowNode cssNode = createShadowNode(className);
    ReactShadowNode rootNode = mShadowNodeRegistry.getNode(rootViewTag);
    Assertions.assertNotNull(rootNode, "Root node with tag " + rootViewTag + " doesn't exist");
    cssNode.setReactTag(tag);
    cssNode.setViewClassName(className);
    cssNode.setRootTag(rootNode.getReactTag());
    cssNode.setThemedContext(rootNode.getThemedContext());
    mShadowNodeRegistry.addNode(cssNode);
    ReactStylesDiffMap styles = null;
    if (props != null) {
          styles = new ReactStylesDiffMap(props);
      cssNode.updateProperties(styles);
    }
    handleCreateView(cssNode, rootViewTag, styles);
  }
}
protected void handleCreateView(
        ReactShadowNode cssNode,
    int rootViewTag,
    @Nullable ReactStylesDiffMap styles) {
      if (!cssNode.isVirtual()) {
        mNativeViewHierarchyOptimizer.handleCreateView(cssNode, cssNode.getThemedContext(), styles);
  }
}
 private final class LayoutUpdateFinishedOperation implements UIOperation {
    ...
  private LayoutUpdateFinishedOperation(ReactShadowNode node, UIImplementation.LayoutUpdateListener listener) {
        mNode = node;
    mListener = listener;
  }
  @Override
  public void execute() {
        mListener.onLayoutUpdated(mNode);
  }
}​
```


