# 启动应用默认 activity

场景来源：推送处理 Activity

```java
public static void launchAppWithData(Context context, String PushMsg) {
    Intent intent = context.getPackageManager().getLaunchIntentForPackage(context.getPackageName());
    if (intent == null) {
      return;
    }
    intent.putExtra("PushMsg", PushMsg);
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP | Intent.FLAG_ACTIVITY_CLEAR_TOP);
    context.startActivity(intent);
  }
```
