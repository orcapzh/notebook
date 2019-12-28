# 作用域

作用域用于管理变量的作用范围。在引入let和const之前js基本只存在函数作用域，块级作用域只存在于类似with，try..catch中。某个函数的能够访问的变量不仅有自身的作用域，而是某个作用域链上的所有变量，靠近自身作用域的变量会起到屏蔽作用。