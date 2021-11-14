# [数据类](https://book.kotlincn.net/text/data-classes.html)

只保存数据的类

```kotlin
data class User(val name: String, val age: Int)
```

## 在类体中声明的属性

自动生成的函数，编译器只使用在主构造函数内部定义的属性，如需在生成的实现中排除一个属性，请将其声明在类体中：

```kotlin
data class Person(val name: String) {
    var age: Int = 0
}

```

```kotlin
data class Person(val name: String) {
    var age: Int = 0
}
fun main() {
    val person1 = Person("John")
    val person2 = Person("John")
    person1.age = 10
    person2.age = 20
    println("person1 == person2: ${person1 == person2}") // true, 视作相等
    println("person1 with age ${person1.age}: ${person1}")
    println("person2 with age ${person2.age}: ${person2}")
}
```

## 复制

```kotlin
val jack = User(name = "Jack", age = 1)
val olderJack = jack.copy(age = 2)
```

## 数据类与解构声明

为数据类生成的 component 函数 使它们可在解构声明(??①)中使用

```kotlin
val jane = User("Jane", 35)
val (name, age) = jane
println("$name, $age years of age")
```

# [密封类](https://www.kotlincn.net/docs/reference/sealed-classes.html)

??②

密封类用来表示受限的类继承结构：当一个值为有限几种的类型、而不能有任何其他类型时。

声明一个密封类，需要在类名前面添加 sealed 修饰符。若有子类，所有子类都必须在与密封类自身相同的文件中声明。

```kotlin
sealed class Expr
data class Const(val number: Double) : Expr()
data class Sum(val e1: Expr, val e2: Expr) : Expr()
object NotANumber : Expr()
```

一个密封类是自身抽象的，它不能直接实例化并可以有抽象（abstract）成员。

密封类不允许有非-private 构造函数（其构造函数默认为 private）(??③)。

请注意，扩展密封类子类的类（间接继承者）可以放在任何位置，而无需在同一个文件中。

```kotlin
fun eval(expr: Expr): Double = when(expr) {
    is Const -> expr.number
    is Sum -> eval(expr.e1) + eval(expr.e2)
    NotANumber -> Double.NaN
    // 不再需要 `else` 子句，因为我们已经覆盖了所有的情况
}
```

## question list

- ??componentN() 函数 按声明顺序对应于所有属性
- ??①：解构声明？
- ？？标准数据类：标准库提供了 Pair 与 Triple 类
  > 标准库提供了 Pair 与 Triple 类。尽管在很多情况下具名数据类是更好的设计选择， 因为它们通过为属性提供有意义的名称使代码更具可读性。
- class 与 data class 异同，data class 使用方法似乎和 class 几乎无差别
- ??②：密封类使用场景举例
- ??③：构造函数 private:如何创建实例？