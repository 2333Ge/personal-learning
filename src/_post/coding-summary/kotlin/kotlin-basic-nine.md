# [解构声明](https://book.kotlincn.net/text/destructuring-declarations.html)

```kotlin
val (name, age) = person
```

⚠️：name、age 并不是 person 属性名 ??①

一个解构声明会被编译成以下代码

```kotlin
val name = person.component1()
val age = person.component2()
```

任何表达式都可以出现在解构声明的右侧，只要可以对它调用所需数量的 component 函数即可

## 在 lambda 表达式中解构

```kotlin
map.mapValues { entry -> "${entry.value}!" }
map.mapValues { (key, value) -> "$value!" }
```

注意和普通的参数区别

```kotlin
{ a //-> …… } // 一个参数
{ a, b //-> …… } // 两个参数
{ (a, b) //-> …… } // 一个解构对
{ (a, b), c //-> …… } // 一个解构对以及其他参数
```

# question list

- ??①: 被解构的类属性换个顺序，结构出来的结果就不对了？
