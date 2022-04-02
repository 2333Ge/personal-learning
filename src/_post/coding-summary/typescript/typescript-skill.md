---
title: TS 小技巧
date: 2022-04-02
category: Typescript
tags:
  - Typescript
---

<!-- more -->

## 映射类型

参考链接：https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

### `+` `-`修饰符

1. `+` `-`修饰符可以添加或去掉`readonly` 和 `?`，如

```ts
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

```ts
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

示例一，根据已知类型的键映射出新类型键

> [Capitalize](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#capitalizestringtype):转换字符串类型第一个字母为大写

```ts
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

示例2：映射任意联合类型，不仅仅是字符串

如：映射联合对象类型，并以类型的Value为新类型的key

<!-- 联系Filter原子类型 -->

```ts
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
