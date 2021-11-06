println("hello,gradle")

// 通过 name 注册 task
tasks.create("foo") {
    // 配置阶段
    println("tasks.create('foo')")

    doLast {
        // 执行阶段
        println("dolast tasks.create('foo')")
    }
}

val bar by tasks.creating {
    // 配置阶段
    println("tasks.creating")
    
    doLast {
        // 执行阶段
        println("execution phase...")
    }
}

open class HelloTask : DefaultTask() {
    init {
        // 配置阶段
        println("HelloTask")
    }

    @TaskAction
    fun hello() {
        // 执行阶段
        println("execution phase...")
    }
}

tasks.create<HelloTask>("helloT")


// 获取task

println(tasks["foo"].name)
println(tasks.getByName("foo").name)
println(tasks.getByName<HelloTask>("helloT").name)
// 通过 Kotlin delegate properties 获取
// val foo by tasks.getting
// val gettingHello by tasks.getting(HelloTask::class)

// 自带task

tasks.create<Copy>("myCopy") {
    // 源
    // 单个或多个文件(夹)
    from("copyTaskTest/")
    // 
    include("*.js")
    // 
    exclude("*.ts")

    // 目标目录
    into("buildDir/")
}