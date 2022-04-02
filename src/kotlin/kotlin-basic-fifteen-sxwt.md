# [属性委托](https://book.kotlincn.net/text/delegated-properties.html)

> 新知识点，参阅[原文](https://book.kotlincn.net/text/delegated-properties.html)

??①

## 延迟属性

`lazy()` 是接受一个 lambda 并返回一个 `Lazy <T>` 实例的函数，返回的实例可以作为实现延迟属性的委托。 第一次调用 `get()` 会执行已传递给 `lazy()` 的 lambda 表达式并记录结果。 后续调用 `get()` 只是返回记录的结果。

```kotlin
val lazyValue: String by lazy {
    println("computed!")
    "Hello"
}

fun main() {
    println(lazyValue)
    println(lazyValue)
}
```

默认情况下，对于 lazy 属性的求值是同步锁的（synchronized）：该值只在一个线程中计算，但所有线程都会看到相同的值。如果初始化委托的同步锁不是必需的，这样可以让多个线程同时执行，那么将 `LazyThreadSafetyMode.PUBLICATION` 作为参数传给 `lazy()`。

如果你确定初始化将总是发生在与属性使用位于相同的线程， 那么可以使用 `LazyThreadSafetyMode.NONE` 模式。它不会有任何线程安全的保证以及相关的开销。

## 可观察属性 Observable properties

`Delegates.observable()` 接受两个参数：初始值与修改时处理程序（handler）。

每当我们给属性赋值时会调用该处理程序（在赋值后执行）。它有三个参数：被赋值的属性、旧值与新值：

```kotlin
import kotlin.properties.Delegates

class User {
    var name: String by Delegates.observable("<no name>") {
        prop, old, new ->
        println("$old -> $new")
    }
}

fun main() {
    val user = User()
    user.name = "first"
    user.name = "second"
}
```

如果你想截获赋值并否决它们，那么使用 `vetoable()` 取代 `observable()`。 在属性被赋新值之前会调用传递给 `vetoable` 的处理程序。

## 委托给另一个属性

一个属性可以把它的 `getter` 与 `setter` 委托给另一个属性。这种委托对于顶层和类的属性（成员和扩展）都可用。该委托属性可以为

- 顶层属性
- 同一个类的成员或扩展属性
- 另一个类的成员或扩展属性

将一个属性委托给另一个属性，应在委托名称中使用 `::` 限定符，例如，`this::delegate` 或 `MyClass::delegate`。

如：当想要以一种向后兼容的方式重命名一个属性的时候：引入一个新的属性、 使用 `@Deprecated` 注解来注解旧的属性、并委托其实现。

```kotlin
class MyClass {
   var newName: Int = 0
   @Deprecated("Use 'newName' instead", ReplaceWith("newName"))
   var oldName: Int by this::newName
}
fun main() {
   val myClass = MyClass()
   // 通知：'oldName: Int' is deprecated.
   // Use 'newName' instead
   myClass.oldName = 42
   println(myClass.newName) // 42
}
```

## 将属性储存在映射中

- ??②：不太明白作用

剩下的待办，之后看

# question list

- ??①: 标准委托前的说明不太理解，应用 or 原理？
- ??②：不太明白作用
