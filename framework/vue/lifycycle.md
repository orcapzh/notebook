# 生命周期

![20191225151450.png](https://self-1253990451.cos.ap-shenzhen-fsi.myqcloud.com/undefined20191225151450.png)

```js
initLifecycle(vm) // 创建vue之间的层级关系即内部状态
initEvents(vm) // 初始化父组件绑定的事件
initRender(vm) // 初始化渲染工具函数、解析插槽
callHook(vm, 'beforeCreate') // 初始化状态前钩子
initInjections(vm) // resolve injections before data/props
initState(vm)
initProvide(vm) // resolve provide after data/props
callHook(vm, 'created')

if (vm.$options.el) {
  vm.$mount(vm.$options.el)
}
```

## `beforeCreate`
v