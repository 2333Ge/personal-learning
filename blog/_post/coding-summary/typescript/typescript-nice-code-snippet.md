---
title:  TS 优秀代码示例
date: 2022-03-15
category: 
tags:
  - TypeScript
---

<!-- more -->

## 枚举+位运算进行状态判断

枚举+位运算进行状态判断与运算, [原文链接](https://jkchao.github.io/typescript-book-chinese/typings/enums.html)

```ts
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

```ts
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

## 简写技巧

可选项变必选

```ts
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
```

