# [函数](https://book.kotlincn.net/text/functions.html)

```kotlin
fun powerOf(
    number: Int,
    exponent: Int
):Int {  }
```

## 默认参数

```kotlin
fun read(
    b: ByteArray,
    off: Int = 0,
    len: Int = b.size // 可以用根据前面参数得出默认值
) { /*……*/ }
```

覆盖方法总是使用与基类型方法相同的默认参数值。当覆盖一个有默认参数值的方法时，必须从签名中省略默认参数值

```kotlin
open class A {
    open fun foo(i: Int = 10) { /*……*/ }
}

class B : A() {
    override fun foo(i: Int) { /*……*/ }  // 不能有默认值。
}

```

如果一个默认参数在一个无默认值的参数之前，那么该默认值只能通过使用具名参数调用该函数来使用

```kotlin
fun foo(
    bar: Int = 0,
    baz: Int,
) { /*……*/ }

foo(baz = 1) // 使用默认值 bar = 0
```

如果在默认参数之后的最后一个参数是 lambda 表达式，那么它既可以作为具名参数在括号内传入，也可以在括号外传入：

```kotlin
fun foo(
    bar: Int = 0,
    baz: Int = 1,
    qux: () -> Unit,
) { /*……*/ }

foo(1) { println("hello") }     // 使用默认值 baz = 1
foo(qux = { println("hello") }) // 使用两个默认值 bar = 0 与 baz = 1
foo { println("hello") }
```

## 具名参数

解决多参数、难以关联的问题

```kotlin
fun reformat(
    str: String,
    normalizeCase: Boolean = true,
    upperCaseFirstLetter: Boolean = true,
    divideByCamelHumps: Boolean = false,
    wordSeparator: Char = ' ',
) { /*……*/ }
```

不需要指明全部参数

```kotlin
reformat(
    "String!",
    false,
    upperCaseFirstLetter = false,
    divideByCamelHumps = true,
    '_'
)
```

某个参数被跳过后，后面的参数必须指明参数名

```kotlin
reformat("This is a short String!", upperCaseFirstLetter = false, wordSeparator = '_')

```

您可以使用 spread 运算符传递具有名称的可变数量的参数（vararg）

```kotlin
fun foo(vararg strings: String) { /*……*/ }

foo(strings = *arrayOf("a", "b", "c"))
```

## 单表达式函数

当函数返回单个表达式时，可以省略花括号并且在 = 符号之后指定代码体即可

```kotlin
fun double(x: Int) = x * 2
```

返回值类型可由编译器推断时,显式声明可省

## 可变数量的参数（varargs）

只有一个参数可以标注为 vararg，如果 vararg 参数不是列表中的最后一个参数， 可以使用具名参数语法传递其后的参数的值

```kotlin
fun foo(a: String, vararg b: Int, c:String) {}
foo("",1,2,3, c = "")
```

## 中缀表示法

标有 infix 关键字的函数也可以使用中缀表示法（忽略该调用的点与圆括号）调用。 中缀函数必须满足以下要求：

- 它们必须是成员函数或[扩展函数](https://book.kotlincn.net/text/extensions.html)。
- 它们必须只有一个参数。
- 其参数不得接受可变数量的参数且不能有默认值。

```kotlin
infix fun Int.shl(x: Int): Int { …… }

// 用中缀表示法调用该函数
1 shl 2

// 等同于这样
1.shl(2)
```

中缀函数调用的优先级低于算术操作符、类型转换以及 rangeTo 操作符。以下表达式是等价的：

- `1 shl 2 + 3` 等价于 `1 shl (2 + 3)`
- `0 until n * 2` 等价于 `0 until (n * 2)`
- `xs union ys as Set<*>` 等价于 `xs union (ys as Set<*>)`

另一方面，中缀函数调用的优先级高于布尔操作符 && 与 ||、is- 与 in- 检测以及其他一些操作符。这些表达式也是等价的：

- `a && b xor c` 等价于 `a && (b xor c)`
- `a xor b in c` 等价于 `(a xor b) in c`

使用中缀表示法在当前接收者上调用方法时，需要显式使用 this

```kotlin
class MyStringCollection {
    infix fun add(s: String) { /*……*/ }

    fun build() {
        this add "abc"   // 正确
        add("abc")       // 正确
        //add "abc"        // 错误：必须指定接收者
    }
}
```

## 函数作用域

Kotlin 函数可以在文件顶层声明，这意味着你不需要像一些语言如 Java、C# 与 Scala 那样需要创建一个类来保存一个函数。此外除了顶层函数，Kotlin 中函数也可以声明在局部作用域、作为成员函数以及扩展函数。

### 局部函数

Kotlin 支持局部函数，即一个函数在另一个函数内部：

```kotlin
fun dfs(graph: Graph) {
    fun dfs(current: Vertex, visited: MutableSet<Vertex>) {
        if (!visited.add(current)) return
        for (v in current.neighbors)
            dfs(v, visited)
    }

    dfs(graph.vertices[0], HashSet())
}
```

### 泛型函数

函数可以有泛型参数，通过在函数名前使用尖括号指定：

```kotlin
fun <T> singletonList(item: T): List<T> { /*……*/ }
```

### 尾递归

当一个函数用 tailrec 修饰符标记并满足所需的形式条件时，编译器会优化该递归， 留下一个快速而高效的基于循环的版本

```kotlin
val eps = 1E-10

tailrec fun findFixPoint(x: Double = 1.0): Double =
    if (Math.abs(x - Math.cos(x)) < eps) x else findFixPoint(Math.cos(x))
```

要符合 tailrec 修饰符的条件的话，函数必须将其自身调用作为它执行的最后一个操作。在递归调用后有更多代码时， 不能使用尾递归

# 高阶函数与 lambda 表达式

都是新知识点：参阅[原文](https://book.kotlincn.net/text/lambdas.html)

Kotlin 函数都是头等的，这意味着它们可以存储在变量与数据结构中.(和 TS 非常像)

## 高阶函数

高阶函数是将函数用作参数或返回值的函数

## 函数类型

函数类型表示法可以选择性地包含函数的参数名：`(x: Int, y: Int) -> Point`。 这些名称可用于表明参数的含义

函数类型指定为可空，请使用圆括号，如下所示： `((Int, Int) -> Int)?`。

函数类型还可以使用圆括号进行接合：`(Int) -> ((Int) -> Unit)`。

> 箭头表示法是右结合的，`(Int) -> (Int) -> Unit` 与前述示例等价

可以通过使用[类型别名](https://book.kotlincn.net/text/type-aliases.html)给函数类型起一个别称：

```kotlin
typealias ClickHandler = (Button, ClickEvent) -> Unit
```

## 函数类型实例化

获得函数类型的实例

- 使用函数字面值的代码块
  - lambda 表达式: `{ a, b -> a + b }`
  - 匿名函数: `fun(s: String): Int { return s.toIntOrNull() ?: 0 }`
- ??使用已有声明的可调用引用：
  - 顶层、局部、成员、扩展函数：`::isOdd`、 `String::toInt`，
  - 顶层、成员、扩展属性：`List<Int>::size`，
  - 构造函数：`::Regex`
- 使用实现函数类型接口的自定义类的实例

```kotlin
class IntTransformer: (Int) -> Int {
    override operator fun invoke(x: Int): Int = TODO()
}

val intFunction: (Int) -> Int = IntTransformer()
```

与不带接收者的函数类型非字面值可以互换，其中接收者可以替代第一个参数，反之亦然。例如，`(A, B) -> C` 类型的值可以传给或赋值给期待 `A.(B) -> C`

?? 后面一种写法的意思

```kotlin
fun main() {
    val repeatFun: String.(Int) -> String = { times -> this.repeat(times) }
    val twoParameters: (String, Int) -> String = repeatFun // OK

    fun runTransformation(f: (String, Int) -> String): String {
        return f("hello", 3)
    }
    val result = runTransformation(repeatFun) // OK
    println("result = $result")
}
```

?? 如果该值具有??接收者类型，那么应该将接收者对象作为第一个参数传递。 调用带有接收者的函数类型值的另一个方式是在其前面加上接收者对象， 就好比该值是一个拓展函数

## Lambda 表达式与匿名函数

Lambda 表达式语法

```kotlin
val sum: (Int, Int) -> Int = { x: Int, y: Int -> x + y }
```

如果将所有可选标注都留下，看起来如下：

```kotlin
val sum = { x: Int, y: Int -> x + y }
```

## 传递末尾的 lambda 表达式

按照 Kotlin 惯例，如果函数的最后一个参数是函数，那么作为相应参数传入的 lambda 表达式可以放在圆括号之外：

```kotlin
val product = items.fold(1) { acc, e -> acc * e }

```

这种语法也称为拖尾 lambda 表达式。
如果该 lambda 表达式是调用时唯一的参数，那么圆括号可以完全省略：
// ?? run

```kotlin
run { println("...") }
```

## `it` 单个参数的隐式名称

## 从 lambda 表达式返回值

可以使用限定的返回语法从 lambda 显式返回一个值。 否则，将隐式返回最后一个表达式的值

```kotlin
strings.filter { it.length == 5 }.sortedBy { it }.map { it.uppercase() }
```

## 带接收者的函数字面值

# question list

- 带有接收者的函数类型实例
- ::
- 接收者类型
- lambda：run 调用
