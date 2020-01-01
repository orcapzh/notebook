## 概念

### 引用类型在内存中的存储形式？
### 判断对象类型？
### 继承的方式？
### call、apply和bind的却别？
### 深拷贝？
### 事件代理是什么？为什么处理事件要在冒泡阶段做？（兼容性）
### 垃圾回收机制？
### cookie、localStorage和sessionStorage的区别
### 不同的页面之间怎么通信
### requestAnimationFrame和setTimeout有什么区别
  requestAnimationFrame是浏览器用于定时循环操作的一个接口，类似于setTimeout，主要用途是按帧对网页进行重绘。
设置这个API的目的是为了让各种网页动画效果（DOM动画、Canvas动画、SVG动画、WebGL动画）能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果。代码中使用这个API，就是告诉浏览器希望执行一个动画，让浏览器在下一个动画帧安排一次网页重绘。
requestAnimationFrame的优势，在于充分利用显示器的刷新机制，比较节省系统资源。显示器有固定的刷新频率（60Hz或75Hz），也就是说，每秒最多只能重绘60次或75次，requestAnimationFrame的基本思想就是与这个刷新频率保持同步，利用这个刷新频率进行页面重绘。此外，使用这个API，一旦页面不处于浏览器的当前标签，就会自动停止刷新。这就节省了CPU、GPU和电力。
### 讲讲你对模块化的理解
### 如何实现`json.parse()`
### instanceof的原理
### hasOwnProperty
### 移动端
### 不同图片格式各有什么优劣势
  - gif 压缩比高，可实现动画，可设置透明色； 最多只能处理256中颜色，用8位压缩
  - png png8(8位透明png)、png24(256色png)\
  - svg 矢量放大不影响，对动画支持较好、js可控；加载慢

### 写一个浮点数相加函数以及浮点数为什么相加会有偏差，设计函数的单元测试你会怎么考虑？


## 手写

### 正则判断一个域名属于qq,常见的正则需求
  ```js
  /(\d*\.)*qq.com/
  ```
### 原生ajax
  ```js
  const request = new XMLRequest
  ```
### trim
  ```js
  function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, '')
  }
  ```
### 节流防抖

### 用promise实现一个对fetch(url)的超时功能
### 定义这样一个函数function repeat(func, times, wait) {}，参数分别是需要 repeat的函数， repeat的次数，每次repeat的间隔，使用方式如下调用这个函数能返回一个新函数，比如传入的是alert，var repeatedFun = repeat(alert, 10, 5000)；调用返回的这个新函数，如: repeatFun("hellworld") 会alert十次 helloworld。
```js
function repeat(fn, times, wait) {
  return function () {
    const args = arguments
    let timers = setTimeout(() => {
      fn.call(null, args)
      if ()
    }, wait)
  }
}
```
### 写一个querystring函数，实现url参数的标准化，输入"?name=jack&age=2&age=3&school=bupt"，输出格式如下，要求把数字存储成数字，不能转化成数字的存储成字符串。{ name: 'jack', age: [2,3], school: 'bupt' }

## 算法

### 快排，和冒泡的差异
### 写一个最短图路径算法（狄杰斯特拉算法或者弗洛伊德算法）