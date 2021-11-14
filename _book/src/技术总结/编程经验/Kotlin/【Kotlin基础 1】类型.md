# 前言

站在学过 JS、Java 的基础上从零学习 Kotlin，记录下知识点，便于日后回顾，那些看了一次便能记住或者和 Java、JS 很类似的点便不记录了

官方中文文档：

- https://www.kotlincn.net/docs/reference/
- https://book.kotlincn.net/

在线运行 Kotlin：

- https://www.bejson.com/runcode/kotlin/
- https://play.kotlinlang.org/

# [基本类型](https://book.kotlincn.net/text/basic-types.html)

所有以未超出 Int 最大值的整型值初始化的变量都会推断为 Int 类型。如果初始值超过了其最大值，那么推断为 Long 类型。

```kotlin
val one = 1 // Int
val threeBillion = 3000000000 // Long
```

对于以小数初始化的变量，编译器会推断为 Double 类型。

```kotlin
val pi = 3.14 // Double
```

## 字面常量

可以使用下划线使数字常量更易读

```kotlin
val oneMillion = 1_000_000
val creditCardNumber = 1234_5678_9012_3456L
val socialSecurityNumber = 999_99_9999L
val hexBytes = 0xFF_EC_DE_5E
val bytes = 0b11010010_01101001_10010100_10010010
```

## JVM 平台的数字表示

在 JVM 平台数字存储为原生类型 int、 double 等。 例外情况是当创建可空数字引用如 Int? 或者使用泛型时。 在这些场景中，数字会装箱为 Java 类 Integer、 Double 等

⚠️ 对相同数字的可为空引用可能是不同的对象：

```kotlin
fun main() {
//sampleStart
    val a: Int = 100
    val boxedA: Int? = a
    val anotherBoxedA: Int? = a

    val b: Int = 10000
    val boxedB: Int? = b
    val anotherBoxedB: Int? = b

    println(boxedA === anotherBoxedA) // true
    println(boxedB === anotherBoxedB) // false
    println(boxedB == anotherBoxedB) // true

// ==比较的是数值是否相等, ===比较的是两个对象的地址是否相等

//sampleEnd
}
```

由于 JVM 对 -128 到 127 的整数（Integer）应用了内存优化，因此，a 的所有可空引用实际上都是同一对象。但是没有对 b 应用内存优化，所以它们是不同对象。

另一方面，它们仍然相等(见打印三)


## 显示转换

较小类型并不是较大类型的子类型

```
// 假想的代码，实际上并不能编译：
val a: Int? = 1 // 一个装箱的 Int (java.lang.Integer)
val b: Long? = a // 隐式转换产生一个装箱的 Long (java.lang.Long)
print(b == a) // 惊！这将输出“false”鉴于 Long 的 equals() 会检测另一个是否也为 Long
```

## 整数除法

整数间的除法总是返回整数。会丢弃任何小数部分。

```
fun main() {
    println(5 / 2 )  // 2
    println(5L / 2 === 2L)  // true
    println(5 / 2.toDouble() == 2.5)
}
```

## 位运算

只能应用于 Int 与 Long

```kotlin
println((1 shl 2) and 0xf) // 4
```

- shl(bits) – 有符号左移
- shr(bits) – 有符号右移
- ushr(bits) – 无符号右移
- and(bits) – 位与
- or(bits) – 位或
- xor(bits) – 位异或
- inv() – 位非

```
val oneByte: Byte = 1
// println((oneByte shl 2)) // 编译出错

val b = 0b00000001
println((b shl 2)) // 4
// ⚠️只能应用于 Int 与 Long? 为什么这个不会报错
// 解释：0b、0x只表示不同的声明写法不决定变量类型
```

## 浮点数比较

区间实例以及区间检测：a..b、 x in a..b、 x !in a..b

## 无符号

### 无符号整型

- UByte: 无符号 8 比特整数，范围是 0 到 255
- UShort: 无符号 16 比特整数，范围是 0 到 65535
- UInt: 无符号 32 比特整数，范围是 0 到 2^32 - 1
- ULong：无符号 64 比特整数，范围是 0 到 2^64 - 1

字面值：用后缀标记整型字面值来表示指定无符号类型

```
val b: UByte = 1u  // UByte，已提供预期类型
val s: UShort = 1u // UShort，已提供预期类型
val l: ULong = 1u  // ULong，已提供预期类型

val a1 = 42u // UInt：未提供预期类型，常量适于 UInt
val a2 = 0xFFFF_FFFF_FFFFu // ULong：未提供预期类型，常量不适于 UInt
```

### 无符号数组

原生类型相同，每个无符号类型都有表示相应类型数组的类型：

- UByteArray: 无符号字节数组
- UShortArray: 无符号短整型数组
- UIntArray: 无符号整型数组
- ULongArray: 无符号长整型数组

### 字面值

后缀标记 u、U、uL、UL

```kotlin
val b: UByte = 1u  // UByte，已提供预期类型
val s: UShort = 1u // UShort，已提供预期类型
val l: ULong = 1u  // ULong，已提供预期类型

val a1 = 42u // UInt：未提供预期类型，常量适于 UInt
val a2 = 0xFFFF_FFFF_FFFFu // ULong：未提供预期类型，常量不适于 UInt
```

## 字符串

### 字符串字面值

包含：

- 转义字符串: `val s = "Hello, world!\n"`
- 原始字符串：用`"""`分界符包裹

```kotlin
val text = """
    for (c in "foo")
        print(c)
"""
```

### 边界前缀

```kotlin
val text = """
|Tell me and I forget.
|Teach me and I remember.
|Involve me and I learn.
|(Benjamin Franklin)
    """.trimMargin()
```

`trimMargin()`移除边界前缀

## 数组

Kotlin 中数组是不型变的（invariant）。这意味着 Kotlin 不让我们把 Array<String> 赋值给 Array<Any>

无装箱开销的类表示原生类型数组：ByteArray、 ShortArray、IntArray，这些类与 Array 并没有继承关系，但是它们有同样的方法属性集

# [类型检测与类型转换](https://book.kotlincn.net/text/typecasts.html)

## is !is 操作符

```kotlin
if (obj is String) {
    print(obj.length)
}
```

## 智能转换

编译器跟踪不可变值的 is-检测以及显式转换，并在必要时自动插入（安全的）转换

```kotlin
fun demo(x: Any) {
    if (x is String) {
        print(x.length) // x 自动转换为字符串
    }
}
```

## “不安全的”转换操作符

```kotlin
val x: String = y as String
```

如果转换是不可能的，转换操作符会抛出一个异常,为了避免异常，可以使用安全转换操作符 as?，它可以在失败时返回 null

```kotlin
val x: String? = y as? String
```

## 类型擦除与泛型检测??(似懂非懂，待复看)

https://book.kotlincn.net/text/typecasts.html

## 非受检类型转换??（待定）

https://book.kotlincn.net/text/typecasts.html
