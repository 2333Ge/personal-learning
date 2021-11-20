# [泛型：in、out、where](https://book.kotlincn.net/text/generics.html)

均是新知识点，参阅[原文](https://book.kotlincn.net/text/generics.html)
帮助理解可参阅此文：https://juejin.cn/post/6856228495850487821

```java
interface Collection<E> …… {
    void addAll(Collection<? extends E> items);
}
```

java 中通配符类型参数 `? extends E` 表示此方法接受 `E` 或者 `E` 的一个子类型对象的集合，而不只是 `E` 自身。 这意味着我们可以安全地从其中 （该集合中的元素是 `E` 的子类的实例）读取 `E`，但不能写入， 因为我们不知道什么对象符合那个未知的 `E` 的子类型

## 型变??①

eg: Java 中的泛型是不型变的，这意味着 `List<String>` 并不是 `List<Object>` 的子类型

# 声明处型变

`Source<? extends Object>` => ` Source<out T>`
`Source<? super Object>` => ` Source<in T>`

一般原则是：当一个类 C 的类型参数 T 被声明为 out 时，它就只能出现在 C 的成员的输出-位置， 但回报是 `C<Base>` 可以安全地作为 `C<Derived>` 的超类

协变

```kotlin
interface Source<out T> {
    fun nextT(): T
}

fun demo(strs: Source<String>) {
    val objects: Source<Any> = strs // 这个没问题，因为 T 是一个 out-参数
    // ……
}
```

逆变

```kotlin
interface Comparable<in T> {
    operator fun compareTo(other: T): Int
}

fun demo(x: Comparable<Number>) {
    x.compareTo(1.0) // 1.0 拥有类型 Double，它是 Number 的子类型
    // 因此，可以将 x 赋给类型为 Comparable <Double> 的变量
    val y: Comparable<Double> = x // OK！
}
```

## 使用处型变

## 类型投影

查看官方 demo：https://book.kotlincn.net/text/generics.html

## 泛型约束

### 上界??②

# question list

- ??①:什么是型变
- ??②：不太明白
