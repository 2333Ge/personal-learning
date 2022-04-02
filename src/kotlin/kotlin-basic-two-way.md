# [条件与循环](https://book.kotlincn.net/text/control-flow.html)

## if 表达式

Kotlin 中，if 是一个表达式：它会返回一个值。 因此就不需要三元运算符

```kotlin
val max = if (a > b) a else b
```

if 的分支可以是代码块，这种情况最后的表达式作为该块的值

```kotlin
val max = if (a > b) {
    print("Choose a")
    a
} else {
    print("Choose b")
    b
}
```

## when 表达式

```kotlin
when (x) {
    1 -> print("x == 1")
    2 -> print("x == 2")
    else -> {
        print("x is neither 1 nor 2")
    }
}
```

when 既可以作为表达式使用也可以作为语句使用。如果它被当做表达式，第一个符合条件的分支的值就是整个表达式的值，如果当做语句使用， 则忽略个别分支的值

如果 when 作为一个表达式使用，则必须有 else 分支，除非编译器能够检测出所有的可能情况都已经覆盖了（如枚举类）

可以用任意表达式（而不只是常量）作为分支条件

```kotlin
when (x) {
    s.toInt() -> print("s encodes x")
    else -> print("s does not encode x")
}
```

还可以检测一个值在（in）或者不在（!in）一个区间或者集合中：

```kotlin
when (x) {
    in 1..10 -> print("x is in the range")
    in validNumbers -> print("x is valid")
    !in 10..20 -> print("x is outside the range")
    else -> print("none of the above")
}
```

📢 when 也可以用来取代 if-else if 链。 如果不提供参数，所有的分支条件都是简单的布尔表达式，而当一个分支的条件为真时则执行该分支：

```kotlin
when {
    x.isOdd() -> print("x is odd")
    y.isEven() -> print("y is even")
    else -> print("x+y is odd")
}
```

以使用以下语法将 when 的主语（subject，译注：指 when 所判断的表达式）捕获到变量中

```kotlin
fun Request.getBody() =
        when (val response = executeRequest()) {
            is Success -> response.body
            is HttpError -> throw HttpException(response.status)
        }
```

在 when 主语中引入的变量的作用域仅限于 when 主体

## For 循环

for 循环可以对任何提供迭代器（iterator）的对象进行遍历

```kotlin
for (item in collection) print(item)
```

如需在数字区间上迭代，请使用区间表达式

```kotlin
fun main() {
    for (i in 1..3) {
        println(i)
    }
    for (i in 6 downTo 0 step 2) {
        println(i)
    }
}
```

对区间或者数组的 for 循环会被编译为并不创建迭代器的基于索引的循环

遍历数组的索引可以这么做

```kotlin
fun main() {
val array = arrayOf("a", "b", "c")
    for (i in array.indices) {
        println(array[i])
    }
}
```

或者你可以用库函数 withIndex：

```kotlin
fun main() {
    val array = arrayOf("a", "b", "c")
    for ((index, value) in array.withIndex()) {
        println("the element at $index is $value")
    }
}
```

---

# [返回与跳转](https://book.kotlincn.net/text/returns.html)

三种结构化跳转:`return`、`break`、`continue`

这些表达式都可以用作更大表达式的一部分：

```kotlin
val s = person.name ?: return
```

## Break 与 Continue 标签

在 Kotlin 中任何表达式都可以用标签来标记。 标签的格式为标识符后跟 @ 符号

- 跳转、结束位于该标签指定的循环

```kotlin
loop@ for (i in 1..100) {
    for (j in 1..100) {
        if (……) break@loop
    }
}
```

- 从 lambda 表达式中返回

无标签时,如下例 🌰，直接返回到 foo() 的调用者

```kotlin
fun foo() {
    listOf(1, 2, 3, 4, 5).forEach {
        if (it == 3) return // 非局部直接返回到 foo() 的调用者
        print(it)
    }
    println("this point is unreachable")
}
```

如需从 lambda 表达式中返回，可给它加标签并用以限定 return

```kotlin
fun foo() {
    listOf(1, 2, 3, 4, 5).forEach lit@{
        if (it == 3) return@lit // 局部返回到该 lambda 表达式的调用者——forEach 循环
        print(it)
    }
    print(" done with explicit label")
}
```

通常情况下使用隐式标签更方便，因为该标签与接受该 lambda 的函数同名

```kotlin
fun foo() {
    listOf(1, 2, 3, 4, 5).forEach {
        if (it == 3) return@forEach // 局部返回到该 lambda 表达式的调用者——forEach 循环
        print(it)
    }
    print(" done with implicit label")
}
```

或者，我们用一个匿名函数替代 lambda 表达式。 匿名函数内部的 return 语句将从该匿名函数自身返回

```kotlin
fun foo() {
    listOf(1, 2, 3, 4, 5).forEach(fun(value: Int) {
        if (value == 3) return  // 局部返回到匿名函数的调用者——forEach 循环
        print(value)
    })
    print(" done with anonymous function")
}
```

前面 3 个例子类似常规循环中使用 continue，并没有 break 的直接等价形式，不过可以通过增加另一层嵌套 lambda 表达式并从其中非局部返回来模拟

```kotlin
fun foo() {
    // ??①run的写法意思
    run loop@{
        listOf(1, 2, 3, 4, 5).forEach {
            if (it == 3) return@loop // 从传入 run 的 lambda 表达式非局部返回
            print(it)
        }
    }
    print(" done with nested loop")
}
```

(??②, 返回值用到哪儿了，不太明白)当要返一个回值的时候，解析器优先选用标签限定的返回：

```kotlin
return@a 1
```

这意味着“返回 1 到 @a”，而不是“返回一个标签标注的表达式 (@a 1)”。

# [异常](https://book.kotlincn.net/text/exceptions.html)

## try 是一个表达式

try 是一个表达式，意味着它可以有一个返回值：

```kotlin
val a: Int? = try { input.toInt() } catch (e: NumberFormatException) { null }
```

try-表达式的返回值是 try 块中的最后一个表达式或者是（所有）catch 块中的最后一个表达式。 finally 块中的内容不会影响表达式的结果

## 受检异常

Kotlin 没有受检异常，可见《Effective Java》第三版 第 77 条:

> 通过一些小程序测试得出的结论是异常规范会同时提高开发者的生产力与代码质量，但是大型软件项目的经验表明一个不同的结论——生产力降低、代码质量很少或没有提高。

## Nothing 类型

Kotlin 中 throw 是表达式，表达式的类型是 Nothing 类型。 这个类型没有值，而是用于标记永远不能达到的代码位置。

```kotlin
val s = person.name ?: throw IllegalArgumentException("Name required")
```

你可以使用 Nothing 来标记一个永远不会返回的函数

```kotlin
val s = person.name ?: fail("Name required")
println(s)     // 在此已知“s”已初始化
```

当你调用该函数时，编译器会知道在该调用后就不再继续执行了

# question list

- ??①:run 写法的意思
- ??②: 返回值用到哪儿了
