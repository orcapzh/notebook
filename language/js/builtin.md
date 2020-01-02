## 内建对象

### Date
```js
function parse(input, format = 'yyyy-mm-dd') {

	const keys = format.match(/(yyyy|mm|dd)/g)
	const values = input.match(/\d+/g)

	return new Date(
		values[keys.indexOf('yyyy')],
		values[keys.indexOf('mm')],
		values[keys.indexOf('dd')],
	)
}
```
### Math

### Location

### MutationObserver

### Promise

### Array

### Function

Function.prototype.apply (thisArg, argArray)

1、如果 IsCallable（Function）为false，即 Function 不可以被调用，则抛出一个 TypeError 异常。
2、如果 argArray 为 null 或未定义，则返回调用 Function 的 \[\[Call\]\] 内部方法的结果，提供thisArg 和一个空数组作为参数。
3、如果 Type（argArray）不是 Object，则抛出 TypeError 异常。
4、获取 argArray 的长度。调用 argArray 的 \[\[Get\]\] 内部方法，找到属性 length。 赋值给 len。
5、定义 n 为 ToUint32（len）。
6、初始化 argList 为一个空列表。
7、初始化 index 为 0。
8、循环迭代取出 argArray。重复循环 while（index < n）         
	a、将下标转换成String类型。初始化 indexName 为 ToString(index).         
	b、定义 nextArg 为 使用 indexName 作为参数调用argArray的[[Get]]内部方法的结果。         
	c、将 nextArg 添加到 argList 中，作为最后一个元素。       
	d、设置 index ＝ index＋19、返回调用 Function 的 [[Call]] 内部方法的结果，提供 thisArg 作为该值，argList 作为参数列表。

Function.prototype.call (thisArg [ , arg1 [ , arg2, … ] ] )

1、如果 IsCallable（Function）为 false，即 Function 不可以被调用，则抛出一个 TypeError 异常。
2、定义 argList 为一个空列表。
3、如果使用超过一个参数调用此方法，则以从arg1开始的从左到右的顺序将每个参数附加为 argList 的最后一个元素
4、返回调用func的\[\[Call\]\]内部方法的结果，提供 thisArg 作为该值，argList 作为参数列表。

## 内建操作


### typeof

### instanceof

instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

```js
function instanceof(obj, Ctro) {
	if (obj && typeof obj === 'object') {
		let cur = obj.__proto__

		while(cur && (cur != Ctro.prototype) && (cur = cur.__proto__)) {
		}

		if (cur) {
			return true
		} else {
			return false
		}
	}
}
```

### Object.prototype.toString

### requestAnimationFrame