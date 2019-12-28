# 页面生命周期

- 当 DOM 准备就绪时，DOMContentLoaded 事件就会在 document 上触发。在这个阶段，我们可以将 JavaScript 应用于元素。
- 诸如 `<script>...</script>` 或者 `<script src="..."></script>` 会阻塞 DOMContentLoaded，浏览器等待它们执行结束。具有 async, defer or type="module" 属性的脚本不会阻塞 DOMContentLoaded，JavaScript 模块的行为和 defer 相似，同样也不会阻塞 DOMContentLoaded。
- 图像和其他资源仍然可以继续被加载。
- 当页面和所有资源被加载时，window 上的 load 事件会被触发。我们很少使用它，因为通常没有必要去等待那么久。
- 当用户想要离开页面时，window 上的 beforeunload 事件会被触发。如果我们取消这个事件，浏览器会询问用户是否真的要离开（比如有未保存的内容）。
- 当用户最终离开时，window 上的 unload 事件会被触发。在处理器中，我们只能做一些不会涉及到延迟或询问用户的简单事情。正是由于这个限制，它很少被使用。我们可以用 `navigator.sendBeacon` 来发送网络请求。

document.readyState 是文档的当前状态，可以在 readystatechange 事件中跟踪状态变更：

- loading —— 文档正在被加载。
- interactive —— 文档被解析，大概是与 DOMContentLoaded 同时发生，而不是在它之前发生。
- complete —— 文档和资源被加载，大概是与 window.onload 同时发生，而不是在它之前发生。

## 页面加载过程

[](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model?hl=zh-tw)