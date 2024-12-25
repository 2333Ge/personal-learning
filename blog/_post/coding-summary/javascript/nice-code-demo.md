---
title: 前端优秀代码示例
date: 2024-12-25
category: FE
tags:
  - JavaScript
  - TypeScript
  - FE
---

<!-- more -->

## 方法顺序执行，不论同步还是异步

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises

以下代码实现方法顺序执行，不论同步还是异步，

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));

const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

ES2017 写法

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

## 闭包缓存计算结果，提高性能

```js
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // 输出 55
console.log(memoizedFibonacci(20)); // 输出 6765
```

在这个例子中，`memoize` 函数通过闭包缓存了计算结果，提高了递归函数的性能。

## 闭包实现函数柯里化

通用的函数柯里化工具函数，注意没有处理this的指向

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

function sum(a,b,c){
  return a+b+c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
```

## TypeScript


### 枚举+位运算进行状态判断

枚举+位运算进行状态判断与运算, [原文链接](https://jkchao.github.io/typescript-book-chinese/typings/enums.html)

```typescript
enum AnimalFlags {
  None        = 0,
  HasClaws    = 1 << 0,
  CanFly      = 1 << 1
}

interface Animal {
  flags: AnimalFlags;
  [key: string]: any;
}

function printAnimalAbilities(animal: Animal) {
  var animalFlags = animal.flags;
  if (animalFlags & AnimalFlags.HasClaws) {
    console.log('animal has claws');
  }
  if (animalFlags & AnimalFlags.CanFly) {
    console.log('animal can fly');
  }
  if (animalFlags == AnimalFlags.None) {
    console.log('nothing');
  }
}

var animal = { flags: AnimalFlags.None };
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws;
printAnimalAbilities(animal); // animal has claws
animal.flags &= ~AnimalFlags.HasClaws;
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
printAnimalAbilities(animal); // animal has claws, animal can fly
```


- Animal 有多种状态时判断、运算十分简洁

- 用数字、二进制表示某种状态时，枚举能语义化字段的含义，又能用于真实环境的数据传输

假如让我来写的话，不用枚举+位运算的话可能实现如下

```typescript
type AnimalFlags = 'None' | 'HasClaws' | 'CanFly';
interface Animal {
  flags: AnimalFlags[];
  [key: string]: any;
}

function printAnimalAbilities(animal: Animal) {
  var animalFlags = animal.flags;
  if (!animalFlags || animalFlags.includes('None')) {
    return 'nothing';
  }
  if (animalFlags.includes('HasClaws')) {
    console.log('animal has claws');
  }
  if (animalFlags.includes('CanFly')) {
    console.log('animal can fly');
  }
}

var animal: Animal = { flags: ['None'] };
printAnimalAbilities(animal); // nothing
animal.flags = ['HasClaws'];
printAnimalAbilities(animal); // animal has claws
animal.flags = ['None'];
printAnimalAbilities(animal); // nothing
animal.flags = ['HasClaws', 'CanFly'];
printAnimalAbilities(animal); // animal has claws, animal can fly
```

运算不太方便，比如状态是`['HasClaws', 'CanFly']`, 想移除Fly状态得找到元素位置、操作数组，等操作相比前面一种方式麻烦太多

### 简写技巧

可选项变必选

```typescript
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
```

### React 导出 useImperativeHandle 声明

参考：https://stackoverflow.com/questions/62210286/declare-type-with-react-useimperativehandle

定义：

```typescript
type CountdownProps = {}
    
type CountdownHandle = {
  start: () => void,
}
    
const Countdown: React.ForwardRefRenderFunction<CountdownHandle, CountdownProps> = (
  props,
  forwardedRef,
) => {
  React.useImperativeHandle(forwardedRef, ()=>({
    start() {
      alert('Start');
    }
  });

  return <div>Countdown</div>;
}

export default React.forwardRef(Countdown);

```

使用：
```typescript
const App: React.FC = () => {
  // this will be inferred as `CountdownHandle`
  type CountdownHandle = React.ElementRef<typeof Countdown>;

  const ref = React.useRef<CountdownHandle>(null); // assign null makes it compatible with elements.

  return (
    <Countdown ref={ref} />
  );
};
```


### `+` `-`修饰符

#### `+` `-`修饰符可以添加或去掉`readonly` 和 `?`，如

```typescript
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
 
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
 
type UnlockedAccount = CreateMutable<LockedAccount>;

// UnlockedAccount 等效于

type UnlockedAccount = {
    id: string;
    name: string;
}
```

### 通过`as`重新映射类型

在TypeScript 4.1及更高版本中，可以在映射类型中使用as子句重新映射映射类型中的键，形式如下：

```typescript
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

#### 示例一，根据已知类型的键映射出新类型键

> [Capitalize](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#capitalizestringtype):转换字符串类型第一个字母为大写

```typescript
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
 
interface Person {
    name: string;
    age: number;
    location: string;
}
 
type LazyPerson = Getters<Person>;

// 最终LazyPerson 等效于

type LazyPerson = {
    getName: () => string;
    getAge: () => number;
    getLocation: () => string;
}
```

#### 示例二：映射任意联合类型，不仅仅是字符串

如：映射联合对象类型，并以类型的Value为新类型的key

<!-- 联系Filter原子类型 -->

```typescript
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
 
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
 
type Config = EventConfig<SquareEvent | CircleEvent>

// 最终config等效于

type Config = {
    square: (event: SquareEvent) => void;
    circle: (event: CircleEvent) => void;
}
```
