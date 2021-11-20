# [类型别名](https://book.kotlincn.net/text/type-aliases.html)

为现有类型提供替代名称

- 有助于缩短较长的泛型类型

- 为函数类型提供另外的别名

- 可以为内部类和嵌套类创建新名称

```kotlin
typealias NodeSet = Set<Network.Node>

typealias FileTable<K> = MutableMap<K, MutableList<File>>
```
