# this

一个函数中的`this`的指向只与函数被调用的方式有关。

## 默认绑定

函数直接被作为函数调用，在非严格模式下，函数内部的`this`会指向`window`对象，严格模式下会指向`undefined`。

```js
var a = 'global'
function bar() {
  console.log(this.a)
}
bar() // global

function foo() {
  'use strict';
  console.log(this.a)
}
foo() // TypeError: Cannot read property 'a' of undefined
```

## 隐式绑定

当函数被作为对象的某个方法进行调用时，该对象会作为上下文绑定到函数中。

```js
var bar = 'global'
var a = {
  bar: 'local',
  foo: function () {
    console.log(this.bar)
  }
}

a.foo() // local
```

## 显式绑定

函数通过`apply`或者`call`的方式调用，显式指定函数上下文。

```js
var bar = 'global'
function foo() {
  console.log(this.bar)
}

foo.call({
  bar: 'local'
}) // local

foo.apply({
  bar: 'local'
}) // local
```

## new绑定

`new`操作符调用一个构造函数时，JS引擎会创建一个对象，并且作为构造器函数中的上下文，倘若构造器有返回且类型是对象，则将构造器的返回赋值给左值，否则返回新建的对象。

```js
```

## 箭头函数

将函数的上下文绑定在词法作用域中，无法通过其他机制修改上下文。
