# [可见性修饰符](https://book.kotlincn.net/text/visibility-modifiers.html)

类、对象、接口、构造函数、方法与属性及其 setter 都可以有可见性修饰符。getter 总是与属性有着相同的可见性。

在 Kotlin 中有这四个可见性修饰符：`private`、 `protected`、 `internal` 和 `public。` 默认可见性是 `public`。

## 包

```kotlin
// 文件名：example.kt
package foo

private fun foo() { …… } // 在 example.kt 内可见

public var bar: Int = 5 // 该属性随处可见
    private set         // setter 只在 example.kt 内可见

internal val baz = 6    // 相同模块内可见
```

- `public`:默认，随处可见
- `internal`: 相同[模块](#模块)内随处可见
- `private`: 同文件内可见
- `protected`： 不适用

## 类成员

类内部声明的成员：

- `private`: 只该成员所在类内部可见；
- `protected`: 具有与 `private` 一样的可见性，但也在子类中可见。
- `internal`: 能见到类声明的本模块内的任何客户端都可见其 `internal` 成员。
- `public`: 能见到类声明的任何客户端都可见其 `public` 成员。

覆盖一个 `protected` 或 `internal` 成员并且没有显式指定其可见性，该成员还会具有与原始成员相同的可见性

```kotlin
open class Outer {
    private val a = 1
    protected open val b = 2
    internal open val c = 3
    val d = 4  // 默认 public

    protected class Nested {
        public val e: Int = 5
    }
}

class Subclass : Outer() {
    // a 不可见
    // b、c、d 可见
    // Nested 和 e 可见

    override val b = 5   // “b”为 protected
    override val c = 7   // 'c' is internal
}

class Unrelated(o: Outer) {
    // o.a、o.b 不可见
    // o.c 和 o.d 可见（相同模块）
    // Outer.Nested 不可见，Nested::e 也不可见
}
```

## 模块

可见性修饰符 `internal` 意味着该成员只在相同模块内可见。更具体地说， 一个模块是编译在一起的一套 Kotlin 文件，例如：

- 一个 IntelliJ IDEA 模块
- 一个 Maven 项目
- 一个 Gradle 源代码集（例外是 test 源代码集可以访问 main 的 `internal` 声明）
- 一次 <kotlinc> Ant 任务执行所编译的一套文件
