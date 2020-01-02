# 浏览器如何渲染文档

[原文](https://dbaron.org/talks/2012-03-11-sxsw/master.xhtml)

### 文档到底层图形API

HTML文档通过解析器转换为`DOM Tree`，脚本通过`DOM API`操作`DOM Tree`，CSS基于规则与`DOM Tree`生成渲染树，渲染树经过布局，得到绘制路径，调用底层绘制API进行渲染。

### 渲染树

渲染树会对DOM树需要绘制的元素用对应的节点进行表示。例如会通过创建一个`block`来表示对应的元素，或者`text`节点。一个DOM元素可能对应渲染树上的多个节点，例如html元素可能对应`viewport`、`scroll`和`block`三个节点。

### 优化

如果不进行优化，则当DOM或者css有任何改变，都将渲染流程全部执行一遍。

优化的方式有：
1. 跳过全部步骤
2. 跳过部分步骤
3. 合并更改

---

```html
<script>
  div.setAttribute("data-rating", "excellent")
</script>
```

浏览器会检测是否有选择器与该属性相关，若没有则不会重新计算样式。

```html
<script>
  div.setAttribute("data-rating", "excellent")
</script>

<style>
  #list div[data-rating="excellent"] {
    background: yellow;
  }
</style>
```

当存在选择器时，选择器重新进行匹配，如果没有符合样式的选择器规则，则没有重新计算。

```html
<script>
  div.setAttribute("data-rating", "excellent");
</script>
<style>
  div[data-rating="excellent"] {
    background: yellow; color: black;
  }
</style>
```

选择器进行匹配后，元素匹配到的样式规则发生变化，浏览器会进行样式重新计算。

当CSS属性发生变化时，有的属性会影响元素的渲染结构:

- display
- position
- float (from/to 'none')
- transform (from/to 'none')
- column-*
- counter-*
- quotes

### 关键渲染路径

https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model?hl=zh-CN

浏览器渲染需要构建DOM和CSSOM，只有当两者构建完毕时才会开始渲染。两者构建完毕后会开始生成渲染树。

为构建渲染树，浏览器大体上完成了下列工作：

从 DOM 树的根节点开始遍历每个可见节点。

某些节点不可见（例如脚本标记、元标记等），因为它们不会体现在渲染输出中，所以会被忽略。
某些节点通过 CSS 隐藏，因此在渲染树中也会被忽略，例如，上例中的 span 节点---不会出现在渲染树中，---因为有一个显式规则在该节点上设置了“display: none”属性。
对于每个可见节点，为其找到适配的 CSSOM 规则并应用它们。
发射可见节点，连同其内容和计算的样式。

默认情况下，CSS 被视为阻塞渲染的资源，这意味着浏览器将不会渲染任何已处理的内容，直至 CSSOM 构建完毕。请务必精简您的 CSS，尽快提供它，并利用媒体类型和查询来解除对渲染的阻塞。

JavaScript 也会阻止 DOM 构建和延缓网页渲染。

我们的脚本在文档的何处插入，就在何处执行。当 HTML 解析器遇到一个 script 标记时，它会暂停构建 DOM，将控制权移交给 JavaScript 引擎；等 JavaScript 引擎运行完毕，浏览器会从中断的地方恢复 DOM 构建。