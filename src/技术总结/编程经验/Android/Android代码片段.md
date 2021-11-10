# 读取 Asset

- ??不能直接获取 asset 路径

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
