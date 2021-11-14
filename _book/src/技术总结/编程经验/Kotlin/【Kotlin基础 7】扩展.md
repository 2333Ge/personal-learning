# [扩展](https://book.kotlincn.net/text/extensions.html)

Kotlin 能够对一个类扩展新功能而无需继承该类或者使用像装饰者这样的设计模式。 这通过叫做扩展的特殊声明完成

> 例如，你可以为一个你不能修改的、来自第三方库中的类编写一个新的函数。 这个新增的函数就像那个原始类本来就有的函数一样，可以用寻常方式调用。 这种机制称为扩展函数。此外，也有扩展属性， 允许你为一个已经存在的类添加新的属性

## 拓展函数

声明一个扩展函数需用一个接收者类型也就是被扩展的类型来作为他的前缀。 下面代码为 `MutableList<Int>` 添加一个 swap 函数：

```kotlin
fun MutableList<Int>.swap(index1: Int, index2: Int) {
    val tmp = this[index1] // “this”对应该列表
    this[index1] = this[index2]
    this[index2] = tmp
}
```

这个 this 关键字在扩展函数内部对应到接收者对象（传过来的在点符号前的对象） 现在，可以对任意 MutableList<Int> 调用该函数了：

```kotlin
val list = mutableListOf(1, 2, 3)
list.swap(0, 2) // “swap()”内部的“this”会保存“list”的值
```

泛型写法

```kotlin
fun <T> MutableList<T>.swap(index1: Int, index2: Int) {
    val tmp = this[index1] // “this”对应该列表
    this[index1] = this[index2]
    this[index2] = tmp
}
```

### 拓展是静态解析的

调用的扩展函数是由函数调用所在的表达式的类型来决定的，而不是由运行时的类型决定的

```kotlin
fun main() {
   open class Shape
   class Rectangle: Shape()

   fun Shape.getName() = "Shape"
   fun Rectangle.getName() = "Rectangle"

   fun printClassName(s: Shape) {
       println(s.getName())
   }

   printClassName(Rectangle())
}
```

这个例子会输出 Shape，因为调用的扩展函数只取决于参数 s 的声明类型，该类型是 Shape 类

如果一个类定义有一个成员函数与一个扩展函数，而这两个函数又有相同的接收者类型、 相同的名字，并且都适用给定的参数，这种情况总是取成员函数。 例如：

```kotlin
fun main() {
    class Example {
        fun printFunctionType() { println("Class method") }
    }

    fun Example.printFunctionType() { println("Extension function") }

    Example().printFunctionType()
}

// 输出 Class method。
```

扩展函数可以重载同样名字但不同签名成员函数

```kotlin
fun main() {
    class Example {
        fun printFunctionType() { println("Class method") }
    }

    fun Example.printFunctionType(i: Int) { println("Extension function #$i") }

    Example().printFunctionType(1)
}
```

### 可空接收者

这样的扩展可以在对象变量上调用， 即使其值为 null，并且可以在函数体内检测 `this == null`

## 拓展属性

> 由于扩展没有实际的将成员插入类中,因此对扩展属性来说幕后字段是无效的。这就是为什么扩展属性不能有初始化器。

```kotlin
val <T> List<T>.lastIndex: Int
    get() = size - 1
```

## 伴生对象的拓展

如果一个类定义有一个伴生对象(??①) ，你也可以为伴生对象定义扩展函数与属性。就像伴生对象的常规成员一样， 可以只使用类名作为限定符来调用伴生对象的扩展成员：

```kotlin
class MyClass {
companion object { } // 将被称为 "Companion"
}

fun MyClass.Companion.printCompanion() { println("companion") }

fun main() {
MyClass.printCompanion()
}
```

## 扩展的作用域

大多数情况都在顶层定义扩展——直接在包里：

```kotlin
package org.example.declarations

fun List<String>.getLongestString() { /*……*/}
```

如需使用所定义包之外的一个扩展，只需在调用方导入它：

```kotlin
package org.example.usage

import org.example.declarations.getLongestString

fun main() {
    val list = listOf("red", "green", "blue")
    list.getLongestString()
}
```

## 拓展声明为成员

> 扩展声明所在的类的实例称为分发接收者，扩展方法调用所在的接收者类型的实例称为扩展接收者。（??② 说法又点绕）

可以在一个类内部为另一个类声明扩展

```kotlin
class Host(val hostname: String) {
    fun printHostname() { print(hostname) }
}

class Connection(val host: Host, val port: Int) {
    fun printPort() { print(port) }

    fun Host.printConnectionString() {
         printHostname()   // 调用 Host.printHostname()
        print(":")
         printPort()   // 调用 Connection.printPort()
    }

    fun connect() {
         /*……*/
         host.printConnectionString()   // 调用扩展函数
    }
}

fun main() {
    Connection(Host("kotl.in"), 443).connect()
    //Host("kotl.in").printConnectionString()  // 错误，该扩展函数在 Connection 外不可用
}
```

分发接收者与扩展接收者的成员名字冲突的情况，扩展接收者优先。要引用分发接收者的成员你可以使用 限定的 this 语法。

??②

```kotlin
class Connection {
    fun Host.getConnectionString() {
        toString()         // 调用 Host.toString()
        this@Connection.toString()  // 调用 Connection.toString()
    }
}
```

声明为成员的扩展可以声明为 open 并在子类中覆盖。这意味着这些函数的分发对于分发接收者类型是虚拟的，但对于扩展接收者类型是静态的。

> ⚠️：注意下方示例

```kotlin
open class Base { }

class Derived : Base() { }

open class BaseCaller {
    open fun Base.printFunctionInfo() {
        println("Base extension function in BaseCaller")
    }

    open fun Derived.printFunctionInfo() {
        println("Derived extension function in BaseCaller")
    }

    fun call(b: Base) {
        b.printFunctionInfo()   // 调用扩展函数
    }
}

class DerivedCaller: BaseCaller() {
    override fun Base.printFunctionInfo() {
        println("Base extension function in DerivedCaller")
    }

    override fun Derived.printFunctionInfo() {
        println("Derived extension function in DerivedCaller")
    }
}

fun main() {
    BaseCaller().call(Base())   // “Base extension function in BaseCaller”
    DerivedCaller().call(Base())  // “Base extension function in DerivedCaller”——分发接收者虚拟解析
    DerivedCaller().call(Derived())  // “Base extension function in DerivedCaller”——扩展接收者静态解析
}
```

# question list

- ??①：伴生对象？
- ??②：以该 demo 为例，扩展接收者和分发接收者分别是？
  - 分发接收者：声明所在类的实例
  - 拓展接收者：方法拓展的类的实例
