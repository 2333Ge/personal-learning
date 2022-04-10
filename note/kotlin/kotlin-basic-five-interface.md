# [接口](https://book.kotlincn.net/text/interfaces.html)

Kotlin 的接口既包含抽象方法的声明也包含实现。与抽象类不同的是，接口无法保存状态。它可以有属性但必须声明为抽象或提供访问器实现

## 接口中的属性

可以在接口中定义属性。在接口中声明的属性要么是抽象的，要么提供访问器的实现。在接口中声明的属性不能有幕后字段（backing field），因此接口中声明的访问器不能引用它们：

```kotlin
interface MyInterface {
    val prop: Int // 抽象的

    val propertyWithImplementation: String
        get() = "foo"

    fun foo() {
        print(prop)
    }
}

class Child : MyInterface {
    override val prop: Int = 29
}
```

## 解决覆盖冲突

实现多个接口时，可能会遇到同一方法继承多个实现的问题

```kotlin
interface A {
    fun foo() { print("A") }
    fun bar()
}

interface B {
    fun foo() { print("B") }
    fun bar() { print("bar") }
}

class C : A {
    override fun bar() { print("bar") }
}

class D : A, B {
    override fun foo() {
        super<A>.foo()
        super<B>.foo()
    }

    override fun bar() {
        super<B>.bar()
    }
}
```

如果从 A 和 B 派生 D，需要实现从多个接口继承的所有方法，并指明 D 应该如何实现它们

# [函数式（SAM）接口](https://book.kotlincn.net/text/fun-interfaces.html)

只有一个抽象方法的接口称为函数式接口或 单一抽象方法（SAM）接口。函数式接口可以有多个非抽象成员，但只能有一个抽象成员。
可以用 fun 修饰符在 Kotlin 中声明一个函数式接口。

```kotlin
fun interface KRunnable {
   fun invoke()
}
```

# SAM 转换

对于函数式接口，可以通过 lambda 表达式实现 SAM 转换，从而使代码更简洁、更有可读性。

```kotlin
fun interface IntPredicate {
   fun accept(i: Int): Boolean
}
```

如果不使用 SAM 转换，那么你需要像这样编写代码：

```kotlin
// 创建一个类的实例
val isEven = object : IntPredicate {
   override fun accept(i: Int): Boolean {
       return i % 2 == 0
   }
}
```

通过利用 Kotlin 的 SAM 转换，可以改为以下等效代码：

```kotlin
// 通过 lambda 表达式创建一个实例
val isEven = IntPredicate { it % 2 == 0 }
```
n