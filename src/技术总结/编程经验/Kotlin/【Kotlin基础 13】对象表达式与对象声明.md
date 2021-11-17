# [对象表达式与对象声明](https://book.kotlincn.net/text/object-declarations.html)

有时候需要创建一个对某个类做了轻微改动的类的对象，而不用为之显式声明新的子类。 Kotlin 可以用对象表达式与对象声明处理这种情况。

## 创建匿名对象

从头创建

```kotlin
fun main() {
//sampleStart
    val helloWorld = object {
        val hello = "Hello"
        val world = "World"
        // object expressions extend Any, so `override` is required on `toString()`
        override fun toString() = "$hello $world"
    }
//sampleEnd
    print(helloWorld)
}
```

继承自某个（或某些）类型的匿名类的对象。

```kotlin
open class A(x: Int) {
    public open val y: Int = x
}

interface B { /*……*/ }

val ab: A = object : A(1), B {
    override val y = 15
}
```

对象表达式中的代码可以访问来自包含它的作用域的变量：

## 对象声明

使单例声明变得很容易

```kotlin
object DataProviderManager {
    fun registerDataProvider(provider: DataProvider) {
        // ……
    }

    val allDataProviders: Collection<DataProvider>
        get() = // ……
}
```

对象声明的初始化过程是线程安全(??①)的并且在首次访问时进行

## 伴生对象

```kotlin
class MyClass {
    companion object Factory {
        fun create(): MyClass = MyClass()
    }
}
```

该伴生对象的成员可通过只使用类名作为限定符来调用：

```kotlin
val instance = MyClass.create()
```

可以省略伴生对象的名称，在这种情况下将使用名称 Companion：

```kotlin
class MyClass {
    companion object { }
}

val x = MyClass.Companion
```

其自身所用的类的名称（不是另一个名称的限定符）可用作对该类的伴生对象 （无论是否具名）的引用：

```kotlin
class MyClass1 {
    companion object Named { }
}

val x = MyClass1

class MyClass2 {
    companion object { }
}

val y = MyClass2
```

📢 请注意，即使伴生对象的成员看起来像其他语言的静态成员，在运行时他们仍然是真实对象的实例成员，而且，例如还可以实现接口：

```kotlin
interface Factory<T> {
    fun create(): T
}

class MyClass {
    companion object : Factory<MyClass> {
        override fun create(): MyClass = MyClass()
    }
}

val f: Factory<MyClass> = MyClass
```

## 对象表达式和对象声明之间的语义差异

对象表达式和对象声明之间有一个重要的语义差别：

- 对象表达式是在使用他们的地方立即执行（及初始化）的。
- 对象声明是在第一次被访问到时延迟初始化的。
- 伴生对象的初始化是在相应的类被加载（解析）时，与 Java 静态初始化器的语义相匹配 。

# question list

- ??①: 线程安全
