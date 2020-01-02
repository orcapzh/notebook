# Object

| in | for..in | hasOwnProperty | propertyIsEnumerable | Object.keys | Object.getOwnPropertyNames  | Object.getOwnPropertyDescriptors | Reflect.ownKeys() |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 可枚举自身属性 | true | true | true | true | true | true | true | true |
| 不可枚举自身属性 | true | false | true | false | false | true | true | true |
| Symbols keys | true | false | true | false | false | false | true | true |
| 可枚举继承属性 | true | true | false | false | false | false | false | false |
| 不可枚举继承属性 | true | false | false | false | false | false | false | false |
| Inherited Symbols keys | true | false | false | false | false | false | false | false |

## JavaScript Object Model

在ECMAScript规范中，所有的对象都作为字典，从字符串到属性特性的映射。

```js
Object = {
  x: 5
}
/*
Key       Property attributes
          [[Value]]: 5
x   ->    [[Writable]]: true
          [[Enumerable]]: true
          [[Configurable]]: true
```

属性特性:

- `[[Writable]]` - 属性是否可以修改
- `[[Enumerable]]` - 属性是否出现在 for...in 循环中
- `[[Configurable]]` - 属性是否能被删除

以上属性是规范对对象的定义方式，但不暴露给JavaScript。在JavaScript中，可以通过API获取这些特性。

```js
const object = { foo: 42 }
Object.getOwnPropertyDescriptor(object, 'foo') // { value: 42, writable: true, enumerable: true, configurable: true }
```