- 给定构造函数，和对应参数，不用`new`操作符实现`new`的能力
- ```javascript
  const myNew = function (constructor, ...params) => {
    const obj = Object.create(constructor.prototype);
    const result = constructor.call(obj, ...params);
    return result instanceof Object ? result : obj;
  }
  ```
- 检验输出：
  ```javascript
  Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const p1 = new Person("Alice", 25);
  p1.sayHello();
  
  const p2 = myNew(Person, "Bob", 30);
  p2.sayHello();
  
  function Person2(name, age) {
    this.name = name;
    this.age = age;
    return {
      namePrint: "name:" + this.name,
    };
  }
  
  const p2_1 = new Person2("Alice", 25);
  console.log(p2_1.namePrint);
  
  const p2_2 = myNew(Person2, "Bob", 30);
  console.log(p2_2.namePrint);
  ```
- 要点：
	- 使用function为构造函数创建对象的写法
		- 返回Object
		- 不返回Object
	- `Object.create`、`call`的使用
	- class 构造函数只能用 new 操作符，所以不用考虑这个情况
-