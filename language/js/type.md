# 类型

## typeof

typeof的结果并不一一对应

```js
typeof undefined === "undefined";  // true
typeof true           === "boolean";     // true
typeof 42             === "number";      // true
typeof "42"          === "string";         // true
typeof { life: 42 }  === "object";        // true
typeof null 		 === "object";        // true

// ES6中新加入的类型
typeof Symbol() === "symbol";	   // true

var a;
typeof a; // "undefined"
typeof b; // "undefined"
```

当引入`let`和`const`后，会在作用域内的变量声明语句前产生一个暂时性死区，在死区内使用typeof访问会报TypeError。

其实，js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息

000：对象
010：浮点数
100：字符串
110：布尔
1：整数

因为null是全0， 所以typeof会返回其类型为'object'


## 内置类型

- number
- string
- boolean
- object
- undefined
- null
- symbol

## 封箱拆箱

通过Object或者对应类进行装箱，拆箱调用valueOf

```

```

## 类型转换

### 显式转换

用包装函数去显式转换一个值的类型，比如`String(123)`

### 隐式转换

抽象操作：

1. ToString： 调用`toString()`获得值。

2. ToNumber： 如果存在`valueOf`方法，则


