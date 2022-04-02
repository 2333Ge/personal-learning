---
title: Android 特殊场景Api记录
date: 2019-01-01
category: Android
tag: [Android]
---
## 启动应用默认 activity

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

## 读取 Asset文件路径

- question：能否直接获取 asset 路径

```kotlin
fun getAssetFilePath(context: Context, fileName: String): String? {
            val cacheFile = File(context.cacheDir, fileName)
            if (cacheFile.exists()) return cacheFile.absolutePath
            if (TextUtils.isEmpty(fileName)) return null
            try {
                context.assets.open(fileName).use { inS ->
                    val outputStream = FileOutputStream(cacheFile)
                    outputStream.use { outS ->
                        val buf = ByteArray(1024)
                        var len: Int
                        while (inS.read(buf).also { len = it } > 0) {
                            outS.write(buf, 0, len)
                        }
                    }
                }
            } catch (e: Exception) {
                Log.e("AssetUtils", "读取Asset[$fileName]失败")
                e.printStackTrace()
                return null
            }
            return cacheFile.absolutePath
        }

```

