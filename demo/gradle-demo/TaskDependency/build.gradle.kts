tasks.create("foo") {
    doLast {
        println("foo")
    }
}
tasks.create("bar") {
    dependsOn("foo")        // 使用 task 名称声明依赖关系
    doLast {
        println("bar")
    }
}

// gradle task foo
// gradle task bar

// 