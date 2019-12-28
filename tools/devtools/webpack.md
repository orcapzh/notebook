```js
(function(modules) {
  // webpackBootstrap
})([
  /* 0 */
  (function(module, __webpack_exports__, __webpack_require__) {
    // bar.js
  }),
  /* 1 */
  (function(module, __webpack_exports__, __webpack_require__) {
    // index.js
  }),
  /* 2 */
  (function(module, __webpack_exports__, __webpack_require__) {
    // foo.js
  })
]);
```

## 处理过程

通过entry开始处理，解析入口相关依赖，根据loader的匹配规则进入各自的loader处理流。所有文件处理完毕后通过判断是否切分块，不切分则以IIFE形式存在，否者以webpackJsonp形式。

## 代码动态加载原理

[code split](https://webpack.js.org/guides/code-splitting/#src/components/Sidebar/Sidebar.jsx)

webpack中切分代码的途径有三种：
- 手动增加entry
- 通过CommonsChunkPlugin拆分: 把公共部分另外成模块
- 通过动态import()语法或者webpack提供的require.ensure

webpack加载模块的方式：
```js
// 加载函数
__webpack_require__.e = function requireEnsure(chunkId) {
    // 1、缓存查找
    var installedChunkData = installedChunks[chunkId];
    if(installedChunkData === 0) {
        return new Promise(function(resolve) { resolve(); });
    }
    if(installedChunkData) {
        return installedChunkData[2];
    }
    // 2、缓存模块
    var promise = new Promise(function(resolve, reject) {
        installedChunkData = installedChunks[chunkId] = [resolve, reject];
    });
    installedChunkData[2] = promise;
    // 3、加载模块
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.timeout = 120000;
    if (__webpack_require__.nc) {
        script.setAttribute("nonce", __webpack_require__.nc);
    }
    script.src = __webpack_require__.p + "" + ({"0":"foo"}[chunkId]||chunkId) + ".bundle.js";
    // 4、异常处理
    var timeout = setTimeout(onScriptComplete, 120000);
    script.onerror = script.onload = onScriptComplete;
    function onScriptComplete() {
        // avoid mem leaks in IE.
        script.onerror = script.onload = null;
        clearTimeout(timeout);
        var chunk = installedChunks[chunkId];
        if(chunk !== 0) {
            if(chunk) {
                chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
            }
            installedChunks[chunkId] = undefined;
        }
    };
    head.appendChild(script);
    // 5、返回promise
    return promise;
};

//模块代码
webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
exports.foo = function () {
    return 2;
}
/***/ })
]);

// 加载模块方法
window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
    var moduleId, chunkId, i = 0, resolves = [], result;
    // 1、收集模块resolve
    for(;i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if(installedChunks[chunkId]) {
            resolves.push(installedChunks[chunkId][0]);
        }
        installedChunks[chunkId] = 0;
    }
    // 2、copy模块到modules
    for(moduleId in moreModules) {
        if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
            modules[moduleId] = moreModules[moduleId];
        }
    }
    if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
    // 3、resolve import
    while(resolves.length) {
        resolves.shift()();
    }
};
```

## plugin和loader

plugin是带有apply方法的对象，编译过程会调用，能够获得compiler对象，能够参与webpack的所有生命周期。

loader存在的目的是对源代码进行转换，loader是一个模块，希望导出javascript和sourcemap。

loader间的数据结构只要能够连接共用即可。

## 热更新原理

[热更新](https://zhuanlan.zhihu.com/p/30669007)
https://stackoverflow.com/questions/24581873/what-exactly-is-hot-module-replacement-in-webpack

开发服务器监听文件夹的变化，在变化时触发webpack的重新构建（因为有缓存，所有重新编译的速度很快），热更新服务器得到通知后通知服务器中的热更新客户端更新的模块哈希值。

Additional code is emitted for the module system runtime to track module parents and children.

On the management side, the runtime supports two methods: `check` and `apply`.

A `check` does a HTTP request to the update manifest. When this request fails, there is no update available. *Elsewise the list of updated chunks is compared to the list of currently-loaded chunks.* For each loaded chunk, the corresponding update chunk is downloaded. All module updates are stored in the runtime as updates. The runtime switches into the ready state, meaning an update has been downloaded and is ready to be applied.

For each new chunk request in the ready state, the update chunk is also downloaded.