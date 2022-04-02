# [类](https://book.kotlincn.net/text/classes.html)

如果一个类没有类体，可以省略花括号

## 构造函数

类可以有一个主构造函数以及一个或多个次构造函数

```kotlin
class Person constructor(firstName: String) { /*……*/ }
```

如果主构造函数没有任何注解或者可见性修饰符,可以省略这个 constructor 关键字。

```kotlin
class Person(firstName: String) { /*……*/ }
```

主构造函数不能包含任何的代码。初始化的代码可以放到以 init 关键字作为前缀的初始化块（initializer blocks）中

在实例初始化期间，初始化块按照它们出现在类体中的顺序执行，与属性初始化器交织在一起

```kotlin
class InitOrderDemo(name: String) {
    val firstProperty = "First property: $name".also(::println)

    init {
        println("First initializer block that prints ${name}")
    }

    val secondProperty = "Second property: ${name.length}".also(::println)

    init {
        println("Second initializer block that prints ${name.length}")
    }
}
```

造函数有注解或可见性修饰符，这个 constructor 关键字是必需的，并且这些修饰符在它前面

```kotlin
class Customer public @Inject constructor(name: String) { /*……*/ }
```

## 次构造函数

如果类有一个主构造函数，每个次构造函数需要直接或间接委托给主构造函数

```kotlin
class Person(val name: String) {
    val children: MutableList<Person> = mutableListOf()
    constructor(name: String, parent: Person) : this(name) {
        parent.children.add(this)
    }
}
```

初始化块中的代码实际上会成为主构造函数的一部分,因此所有初始化块与属性初始化器中的代码都会在次构造函数体之前执行

## 抽象类

可以用一个抽象成员覆盖一个非抽象的开放成员

```kotlin
open class Polygon {
    open fun draw() {
        // some default polygon drawing method
    }
}

abstract class WildShape : Polygon() {
    // Classes that inherit WildShape need to provide their own
    // draw method instead of using the default on Polygon
    abstract override fun draw()
}
```

## 伴生对象

??②

无需用一个类的实例来调用、但需要访问类内部的函数，你可以把它写成该类内对象声明中的一员

# [继承](https://book.kotlincn.net/text/inheritance.html)

所有类都有一个共同超类 `Any`

默认类不可继承， 要使一个类可继承，请用 `open` 关键字标记它：

```kotlin
open class Base // 该类开放继承
```

## 覆盖方法

可覆盖的成员以及覆盖后的成员需要显式修饰符

```kotlin
open class Shape {
    open fun draw() { /*……*/ }
    fun fill() { /*……*/ }
}

class Circle() : Shape() {
    override fun draw() { /*……*/ }
}
```

标记为 `override` 的成员本身是开放的，因此可以在子类中覆盖。如果你想禁止再次覆盖， 使用 final 关键字：

```kotlin
open class Rectangle() : Shape() {
    final override fun draw() { /*……*/ }
}
```

## 覆盖属性

覆盖机制同方法

可以用一个 var 属性覆盖一个 val 属性，但反之则不行

```kotlin
interface Shape {
    val vertexCount: Int
}

class Rectangle(override val vertexCount: Int = 4) : Shape // 总是有 4 个顶点

class Polygon : Shape {
    override var vertexCount: Int = 0  // 以后可以设置为任何数
}
```

## 派生类初始化顺序

第一步完成其基类的初始化，这意味着，基类构造函数执行时，派生类中声明或覆盖的属性都还没有初始化。在基类初始化逻辑中（直接或者通过另一个覆盖的 open 成员的实现间接）使用任何一个这种属性，都可能导致不正确的行为或运行。基类中应该避免在构造函数、属性初始化器或者 init 块中使用 open 成员。

## 调用超类实现

在一个内部类中访问外部类的超类，可以使用由外部类名限定的 super 关键字来实现：`super@Outer`

```
open class Rectangle {
    open fun draw() { println("Drawing a rectangle") }
    val borderColor: String get() = "black"
}

class FilledRectangle: Rectangle() {
    override fun draw() {
        val filler = Filler()
        filler.drawAndFill()
    }

    inner class Filler {
        fun fill() { println("Filling") }
        fun drawAndFill() {
            super@FilledRectangle.draw() // 调用 Rectangle 的 draw() 实现
            fill()
            println("Drawn a filled rectangle with color ${super@FilledRectangle.borderColor}") // 使用 Rectangle 所实现的 borderColor 的 get()
        }
    }
}

fun main() {
    val fr = FilledRectangle()
        fr.draw()
}
```

## 覆盖规则

在 Kotlin 中，实现继承由下述规则规定：如果一个类从它的直接超类继承相同成员的多个实现， 它必须覆盖这个成员并提供其自己的实现（也许用继承来的其中之一）。

如需表示采用从哪个超类型继承的实现，请使用由尖括号中超类型名限定的 super ，如 super<Base>：

```kotlin
open class Rectangle {
    open fun draw() { /* …… */ }
}

interface Polygon {
    fun draw() { /* …… */ } // 接口成员默认就是“open”的
}

class Square() : Rectangle(), Polygon {
    // 编译器要求覆盖 draw()：
    override fun draw() {
        super<Rectangle>.draw() // 调用 Rectangle.draw()
        super<Polygon>.draw() // 调用 Polygon.draw()
    }
}
```

可以同时继承 Rectangle 与 Polygon， 但是二者都有各自的 draw() 实现，所以必须在 Square 中覆盖 draw()， 并为其提供一个单独的实现以消除歧义。

# [属性](https://book.kotlincn.net/text/properties.html)

## Getter 与 Setter

声明一个属性的完整语法如下：

```kotlin
var <propertyName>[: <PropertyType>] [= <property_initializer>]
    [<getter>]
    [<setter>]
```

如果你需要改变对一个访问器进行注解或者改变其可见性，但是不需要改变默认的实现， 你可以定义访问器而不定义其实现:

```kotlin
var setterVisibility: String = "abc"
    private set // 此 setter 是私有的并且有默认实现
// ??①
var setterWithAnnotation: Any? = null
    @Inject set // 用 Inject 注解此 setter
```

幕后字段`field` 标识符只能用在属性的访问器内

```kotlin
var counter = 0 // 这个初始器直接为幕后字段赋值
    set(value) {
        if (value >= 0)
            field = value
            // counter = value // ERROR StackOverflow: Using actual name 'counter' would make setter recursive
    }
```

## 编译器常量

如果只读属性的值在编译期是已知的，那么可以使用 const 修饰符将其标记为编译期常量，需要满足：

- 必须位于顶层或者是 object 声明 或伴生对象的一个成员 （??②）
- 必须以 String 或原生类型值初始化
- 不能有自定义 getter

这些属性可以用在注解中：

??①

```kotlin

const val SUBSYSTEM_DEPRECATED: String = "This subsystem is deprecated"

@Deprecated(SUBSYSTEM_DEPRECATED) fun foo() { …… }
```

## 延迟初始化属性与变量

一般地，属性声明为非空类型必须在构造函数中初始化。 然而，这经常不方便。例如：属性可以通过依赖注入来初始化， 或者在单元测试的 setup 方法中初始化。 这种情况下，你**不能在构造函数内提供一个非空初始器。 但你仍然想在类体中引用该属性时避免空检测**

```kotlin
public class MyTest {
    lateinit var subject: TestSubject

    @SetUp fun setup() {
        subject = TestSubject()
    }

    @Test fun test() {
        subject.method()  // 直接解引用
    }
}
```

### 检测一个`lateinit var` 是否已初始化

要检测一个 `lateinit var` 是否已经初始化过，请在该[属性的引用](https://book.kotlincn.net/text/reflection.html#%E5%B1%9E%E6%80%A7%E5%BC%95%E7%94%A8)上使用 .`isInitialized`：

```kotlin
if (foo::bar.isInitialized) {
println(foo.bar)
}
```

此检测仅对可词法级访问(??④)的属性可用，当声明位于同一个类型内、位于其中一个外围类型中或者位于相同文件的顶层的属性时。

```kotlin
    class Test1{
        lateinit var lateInitVar:String
        val isInit:Boolean
            get(){
               return ::lateInitVar.isInitialized
            }
        fun init(str:String){
            if(::lateInitVar.isInitialized){
                // 正确
            }
        }
    }
    // 其他类的访问方式
    class Test2{
        fun foo() {
            val test = Test1()
            if(test::lateInitVar.isInitialized){
                // 出错：Backing field of 'var test: String' is not accessible at this point
            }
            if(test.lateInitVar.isInitialized){
                // 出错：
            }
            if(test.isInit){
                // 正确
            }
        }
    }
```

可参考[社区](https://stackoverflow.com/questions/47549015/isinitialized-backing-field-of-lateinit-var-is-not-accessible-at-this-point/49710377#)

## 委托属性??③

# question list

- ??①：注解概念，此注解用法举例
- ??②：object 声明、伴生对象
- ??③：[概念](https://book.kotlincn.net/text/delegated-properties.html)
- ??④，可以词法级访问意思？
