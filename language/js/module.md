# 模块

## 模块化方案

### AMD(browser)

异步模块定义规范（AMD）制定了定义模块的规则，这样模块和模块的依赖可以被异步加载。这和浏览器的异步加载模块的环境刚好适应（浏览器同步加载模块会导致性能、可用性、调试和跨域访问等问题）。

```js
 define(id?, dependencies?, factory);
```

### CMD(node)

CMD中，每个文件就是一个模块。通过`require`函数导入模块，并且将需要导出的东西挂载在模块的`exports`变量上。`exports`变量其实就是`module.exports`的引用。

`require`加载一个模块时，如果该模块已经加载过，则返回加载过的模块结果，否则加载该模块并缓存。模块的加载过程可以理解为放入一个可以调用`require`的函数中，避免污染全局。

模块加载后，模块内部修改`exports`上的值会实时影响别的模块导入的值。即所有模块共享同一个模块的`exports`的引用。

```js
(function (exports, require, module, __filename, __dirname) {
  // YOUR CODE INJECTED HERE!
});
```

### UMD

UMD规范是兼容了AMD和CMD两个规范的一个规范。

### ES6

ES6的模块语法通过`import`和`export`语法来导入导出。

## 模块加载

一个模块加载器的基本功能：

* 分为拆分模块名
* 别名映射
* 转换为URL
* 创建加载用的iframe与script(iframe是为了更好地在opera与旧式IE判定死链)
* 处理加载回来define方法的最后一个参数factory
* 还原它模块名
* 判定是否可用
* 是否循环依赖
* 如果存在依赖再加载它的依赖等步骤

[七日谈]: (https://huangxuan.me/2015/07/09/js-module-7day/)
