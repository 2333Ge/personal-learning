# 原型与原型链

## 前言

参考： https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes

## 摘要

> JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。

> 准确地说，这些属性和方法定义在 Object 的构造器函数(constructor functions)之上的 prototype 属性上，而非对象实例本身。

> 在传统的 OOP 中，首先定义“类”，此后创建对象实例时，类中定义的所有属性和方法都被复制到实例中。在 JavaScript 中并不如此复制——而是在对象实例和它的构造器之间建立一个链接（它是`__proto__`属性，是从构造函数的 prototype 属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法。

`__proto__`属性：对象实例和它的构造器之间的链接。
`prototype` 属性: `prototype` 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员。

默认情况下, 所有函数的原型属性的 `__proto__` 就是 window.Object.prototype

## 示例

```js
function Person(first, last, age, gender, interests) {}
var person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);

typeof Object.prototype;
// output: 'object'

typeof Object;
// output: 'function'

Person.prototype;
// output: {constructor: ƒ}constructor: ƒ Person(first, last, age, gender, interests)[[Prototype]]: Object

Person.__proto__;
// output: ƒ () { [native code] }

Object.prototype;
// output: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

person1.__proto__ === Person.prototype;
// output: true

Person.__proto__ === Object.prototype;
// output: false

Person.prototype.__proto__ === Object.prototype;
// output: true

Person.__proto__ === Function.prototype;
// output: true

Function.prototype.__proto__ === Object.prototype;
// output: true

Object.__proto__ === Function.prototype
// output: true
```
## 对象的继承
```js
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

undefined
Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

ƒ () {
  alert('Hi! I\'m ' + this.name.first + '.');
}
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

undefined
const t = new Teacher()
VM755:1 Uncaught SyntaxError: Identifier 't' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM755:1
const tt = new Teacher()
undefined
tt.greeting
undefined
Teacher.prototype = Object.create(Person.prototype);
Person {}
tt.greeting 
undefined // 这个为什么是undefined
const tt2 = new Teacher()
undefined
tt2.greeting
ƒ () {
  alert('Hi! I\'m ' + this.name.first + '.');
}
```

因为如下原因
```js
tt.__proto__ === tt2.__proto__
false
tt.__proto__
{constructor: ƒ}constructor: ƒ Teacher(first, last, age, gender, interests, subject)__proto__: Object
tt2.__proto__
Person {}__proto__: Object
```
## 相关知识点

- 通过原型添加新属性时是否可以访问已有属性：方法可

function Test(a,b,c,d) {
 this._a = a;
};

// 定义第一个方法

```js
function Test(a,b,c,d) {
 this._a = a;
};

Test.prototype.x = function () { return this._a * this._a }

const t = new Test(11)

t.x()

// output: 121

```




- this
    - call用法 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    - bind方法 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    - apply https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
- 类型判断：typeof instanceof
- Function
- Object
- class