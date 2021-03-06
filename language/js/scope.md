# 作用域

存储以及查找变量的规则。

一个块或者函数嵌套在另一个块或者函数中时，就发生了作用域的嵌套。

js为词法作用域，意味着作用域由书写代码时函数声明的位置决定的。

eval会在运行时修改作用域环境。

with通过将一个对象的引用当作作用域来处理。

在引入let和const之前js基本只存在函数作用域，块级作用域只存在于类似with，try..catch中。某个函数的能够访问的变量不仅有自身的作用域，而是某个作用域链上的所有变量，靠近自身作用域的变量会起到屏蔽作用。

## 声明提升

引擎会 在解释 JavaScript 代码之前首先对其进行编译。编译阶段中的一部分工作就是找到所有的 声明，并用合适的作用域将它们关联起来。

只有声明本身会被提升，而赋值或其他运行逻辑会留在原地。

函数声明和变量声明都会被提升。但是一个值得注意的细节(这个细节可以出现在有多个“重复”声明的代码中)是函数会首先被提升，然后才是变量。

```js
// 函数会被提升到最前，var foo 会被认为重复声明而忽略
foo(); // 1
var foo;
function foo() { console.log( 1 );
}
foo = function() { console.log( 2 );
};
```

## 闭包

当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时 就产生了闭包。
